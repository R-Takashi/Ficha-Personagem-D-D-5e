import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import styled from 'styled-components'
import { AttributesS } from './Styles/AttributesS'


const CardAttributeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
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
};


export default function Attributes() {
  const { 
    attributes, setAttributes, 
    tab, proficiencyBonus,
    lifePoints, setLifePoints,
    movement, setMovement,
    skills, setSkills
  } = useContext(AppContext);

  const changeAttribute = (e: any) => {
    const { name, value } = e.target;
    const newAttributes = attributes.map((attribute: Attribute) => {
      if (attribute.name === name) {
        return {
          ...attribute,
          value: Number(value),
          mod: Math.floor((Number(value) - 10) / 2),
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


  if (tab !== 'Atributos') return null;

  return (
    <AttributesS>
      <section className='StatusBase1'>

        <CardStatus>
            <h3>Iniciativa</h3>
            <p>{ attributes[1].mod }</p>
          </CardStatus>

          <CardStatus>
            <h3>Vida</h3>
            <p>Vida máxima: { lifePoints.max }</p>
            <p>Vida atual: </p>
            <input
              name="lifePoints"
              type="number"
              value={ lifePoints.current }
              onChange={ (e) => setLifePoints({ ...lifePoints, current: Number(e.target.value) }) }
            />
            <>Vida temporária: </>
            <input
              name="lifePointsTmp"
              type="number"
              value={ lifePoints.temp }
              onChange={ (e) => setLifePoints({ ...lifePoints, temp: Number(e.target.value) }) }
            />
          </CardStatus>

          <CardStatus>
            <h3>Deslocamento</h3>
            <input
              name="movement"
              type="number"
              value={ movement }
              onChange={ (e) => setMovement(Number(e.target.value)) }
            />
            <p>Metros</p>
          </CardStatus>

      </section>

      <section className='StatusBase2'>

        <CardStatus>
          <h3>Bônus de proficiência</h3>
          <p>{ proficiencyBonus }</p>
        </CardStatus>

        <CardStatus>
          <h3>Classe de armadura</h3>
          <p>{ attributes[1].mod + 10 }</p>
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
          <h3>Sabedoria (Percepção)</h3>
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
            <p>{ attribute.mod }</p>
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
