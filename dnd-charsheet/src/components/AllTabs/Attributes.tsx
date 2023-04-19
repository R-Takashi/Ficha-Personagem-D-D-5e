import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import styled from 'styled-components'
import { AttributesS } from './Styles/AttributesS'


const CardAttributeStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 35%;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
  }

  

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    input[type=checkbox] {
      width: 20px;
      
    }

    .prof {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  input {
    width: 50px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;


const CardStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 120px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;

  input {
    width: 50px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

type Attribute = {
  name: string,
  value: number,
  mod: number,
  save: number,
  prof: boolean,
};


export default function Attributes() {
  const { 
    attributes, setAttributes, 
    tab, proficiencyBonus,
    lifePoints, setLifePoints,
    movement, setMovement,
    skills, setSkills
  } = useContext(AppContext);
  const [hpEdit, setHpEdit] = React.useState(false);
  const [hpCurrent, setHpCurrent] = React.useState(0);
  const [hpCurrentType, setHpCurrentType] = React.useState('damage');
  const [armorClass, setArmorClass] = React.useState(attributes[1].mod + 10);


  const changeAttribute = (e: any) => {
    const { name, value } = e.target;
    const newAttributes = attributes.map((attribute: Attribute) => {
      if (attribute.name === name ) {
        return {
          ...attribute,
          value: Number(value),
          mod: Math.floor((Number(value) - 10) / 2),
          save: Math.floor((Number(value) - 10) / 2),
        }
      }
      
      return attribute;
    });
    
    return setAttributes(newAttributes);
  }

  const attributeSave = (e: any) => {
    const { name, checked } = e.target;
    
    const newAttributes = attributes.map((attribute: Attribute) => {
      if (attribute.name === name && checked) {
        
        return {
          ...attribute,
          prof: true,
          save: attribute.mod + proficiencyBonus,
        }
      }
      
      if (attribute.name === name && !checked) {
        return {
          ...attribute,
          prof: false,
          save: attribute.mod,
        }
      }

      return attribute;
    });

    return setAttributes(newAttributes);
  }

  const changeSkill = (e: any, listSkill: any, type: string) => {
    const { name, checked } = e.target;
    const newSkills = listSkill.map((skill: any) => {
      if (skill.name === name && checked) {
        return {
          ...skill,
          prof: true,
          value: skill.value + proficiencyBonus,
        }
      }

      if (skill.name === name && !checked) {
        return {
          ...skill,
          prof: false,
          value: skill.value - proficiencyBonus,
        }
      }

      return skill;
    });

    return setSkills({ ...skills, [type]: newSkills });
  }
  
  const handleCurrentChange = () => {
    const newLifePoints = { ...lifePoints };
    
    if (hpCurrentType === 'damage' ) {
      const damageTemp = lifePoints.temporary - hpCurrent;
      if (damageTemp < 0) {
        newLifePoints.temporary = 0;
        newLifePoints.current = lifePoints.current - Math.abs(damageTemp);
      } else {
        newLifePoints.temporary = damageTemp;
      }

    } else if (hpCurrentType === 'heal') {
      newLifePoints.current = lifePoints.max < lifePoints.current + hpCurrent ? 
        lifePoints.max : lifePoints.current + hpCurrent;
    } else if (hpCurrentType === 'tempHP') {
      newLifePoints.temporary += hpCurrent;
    }

    return setLifePoints(newLifePoints);
  };


  if (tab !== 'Atributos') return null;

  return (
    <AttributesS>
      <section className='StatusBase1'>

        <div className='Initiative'>
          <h3>Iniciativa</h3>
          <span>{ attributes[1].mod }</span>
        </div>

        <div className='HP'>
          
          <h3 onClick={ () => setHpEdit(!hpEdit) }>
            Vida
          </h3>

          { hpEdit ? (
            <>
              <label htmlFor="max">
                <span>Vida máxima: </span>
                <input
                  name="max"
                  type="number"
                  value={ lifePoints.max }
                  onChange={ (e) => setLifePoints({ ...lifePoints, max: Number(e.target.value) }) }
                />
              </label>

              <label htmlFor="current">
                <span>Vida atual: </span>
                <input
                  name="current"
                  type="number"
                  value={ lifePoints.current }
                  onChange={ (e) => setLifePoints({ ...lifePoints, current: Number(e.target.value) }) }
                />
              </label>

              <label htmlFor="temp">
                <span>Vida temporária: </span>
                <input
                  name="temp"
                  type="number"
                  value={ lifePoints.temporary }
                  onChange={ (e) => setLifePoints({ ...lifePoints, temporary: Number(e.target.value) }) }
                />
              </label>
            </>
          ) : (
            <>
              <span className='CurrentHP'>
                { `${lifePoints.current} ` }
                { lifePoints.temporary > 0 && `( + ${lifePoints.temporary}) ` }
                / { lifePoints.max }
              </span>

              <input
                type="number"
                value={ hpCurrent }
                onChange={ (e) => setHpCurrent(Number(e.target.value)) }
              />

              <label>
                <span>Dano</span>
                <input
                  type="radio"
                  value="damage"
                  checked={ hpCurrentType === 'damage'}
                  onChange={ (e) => setHpCurrentType(e.target.value)}
                />
              </label>

              <label>
                <span>Cura</span>
                <input
                  type="radio"
                  value="heal"
                  checked={ hpCurrentType === 'heal'}
                  onChange={ (e) => setHpCurrentType(e.target.value)}
                />
              </label>

              <label>
                <span>Temp HP</span>
              <input
                type="radio"
                value="tempHP"
                checked={ hpCurrentType === 'tempHP'}
                onChange={ (e) => setHpCurrentType(e.target.value)}
              />
              </label>

              <button
                type="button"
                onClick={ handleCurrentChange }
              >
                Aplicar
              </button>
            </>
          )}
        </div>

        <div className='Speed'>
          <h3>Movimento</h3>
          <input
            name="movement"
            type="number"
            value={ movement }
            onChange={ (e) => setMovement(Number(e.target.value)) }
          />
          <p>Metros</p>
        </div>

      </section>

      <section className='StatusBase2'>

        <CardStatus>
          <h3>Bônus de proficiência</h3>
          <p>{` + ${ proficiencyBonus } `}</p>
        </CardStatus>

        <CardStatus>
          <h3>Classe de armadura</h3>
          <input
            name="armorClass"
            type="text"
            value={ armorClass }
            onChange={ (e) => setArmorClass(e.target.value) }
          />
        </CardStatus>

        <CardStatus>
          <h3>Dado de Vida</h3>
          <input
            name="lifeDice"
            type="text"
            value={ lifePoints.dice }
            onChange={ (e) => setLifePoints({ ...lifePoints, dice: e.target.value }) }
          />
        </CardStatus>

        <CardStatus>
          <h3>Percepção passiva</h3>
          <p>{ skills.wisdom[3].value + 10 }</p>
        </CardStatus>
      </section>

      <section className='AttributesSection'>
        { attributes.map((attribute: Attribute) => (
          <CardAttributeStyle key={ attribute.name } >
            <h3>{ attribute.name }</h3>
            <input
              name={ attribute.name }
              type="number" 
              value={ attribute.value }
              onChange={ changeAttribute }
            />
            <div>
              <p>
                <span>Mod</span>
                { attribute.mod > 0 ? 
                  <span>{` +${ attribute.mod }`}</span> : 
                  <span> { attribute.mod } </span>
                }
              </p>

              <p className='prof'>
                <span>Salvaguarda</span>
                <label htmlFor={ attribute.name }>
                  <input
                    name={ attribute.name }
                    type="checkbox"
                    checked={ attribute.prof }
                    onChange={ (e) => attributeSave(e) }
                  />
                </label>
                { attribute.save > 0 ?
                  <span>{` +${ attribute.save }`}</span> :
                  <span> { attribute.save } </span>
                }
              </p>
            </div>
          </CardAttributeStyle>
        )) }
      </section>

      <h3>Perícias</h3>
      
      <section className='SkillsSection'>

        <div className='CardSkill'>
          <h4>Força</h4>
          { skills.strength.map((skill: any) => (
            <div key={ skill.name }>
              <p>{ skill.name }</p>
              <p>{ skill.value }</p>
              <input
                name={ skill.name }
                type="checkbox"
                checked={ skill.prof }
                onChange={ (e) => changeSkill(e, skills.strength, 'strength') }
              />

            </div>
          )) }
        </div>

        <div className='CardSkill'>
          <h4>Destreza</h4>
          { skills.dexterity.map((skill: any) => (
            <div key={ skill.name }>
              <p>{ skill.name }</p>
              <p>{ skill.value }</p>
              <input
                name={ skill.name }
                type="checkbox"
                checked={ skill.prof }
                onChange={ (e) => changeSkill(e, skills.dexterity, 'dexterity') }
              />
            </div>
          )) }
        </div>

        <div className='CardSkill'>
          <h4>Inteligência</h4>
          { skills.intelligence.map((skill: any) => (
            <div key={ skill.name }>
              <p>{ skill.name }</p>
              <p>{ skill.value }</p>
              <input
                name={ skill.name }
                type="checkbox"
                checked={ skill.prof }
                onChange={ (e) => changeSkill(e, skills.intelligence, 'intelligence') }
              />
            </div>
          )) }
        </div>

        <div className='CardSkill'>
          <h4>Sabedoria</h4>
          { skills.wisdom.map((skill: any) => (
            <div key={ skill.name }>
              <p>{ skill.name }</p>
              <p>{ skill.value }</p>
              <input
                name={ skill.name }
                type="checkbox"
                checked={ skill.prof }
                onChange={ (e) => changeSkill(e, skills.wisdom, 'wisdom') }
              />
            </div>
          )) }
        </div>
        
        <div className='CardSkill'>
          <h4>Carisma</h4>
          { skills.charisma.map((skill: any) => (
            <div key={ skill.name }>
              <p>{ skill.name }</p>
              <p>{ skill.value }</p>
              <input
                name={ skill.name }
                type="checkbox"
                checked={ skill.prof }
                onChange={ (e) => changeSkill(e, skills.charisma, 'charisma') }
              />
            </div>
          )) }
        </div>

      </section>
      
    </AttributesS>
  )
}
