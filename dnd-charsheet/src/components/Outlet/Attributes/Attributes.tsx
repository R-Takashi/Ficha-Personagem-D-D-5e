import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import SkillSection from './SkillSection'
import { AttributesS } from './Styles/AttributesS'
import { StatusBase } from './Styles/StatusBase'
import { CardStatus } from './Styles/CardStatus'
import { CardAttr } from './Styles/CardAttr'
import { AttributesSection } from './Styles/AttributesSection'


type Attribute = {
  name: string,
  value: number,
  mod: number,
  save: number,
  prof: boolean,
};


export default function Attributes() {
  const { 
    attributes, setAttributes, charClass,
    armorClass, setArmorClass,
    tab, proficiencyBonus,
    lifePoints, setLifePoints,
    movement, setMovement,
    skills, inspiration, setInspiration } = useContext(AppContext);
  const [hpEdit, setHpEdit] = React.useState(false);
  const [hpCurrent, setHpCurrent] = React.useState(0);
  const [hpCurrentType, setHpCurrentType] = React.useState('damage');
  const [lifeStatus, setLifeStatus] = React.useState({});
  const [isDead, setIsDead] = React.useState(false);
  
  const clearInputZero = (e: any, setValue: Function, isBase=false) => {
    for (let i = 0; i < e.target.value.length; i += 1) {
      if (e.target.value[i] !== '0') {
        e.target.value = e.target.value.slice(i);
        break;
      }
    }
  
    if(isBase) return e.target.value
  
    return setValue(Number(e.target.value));
  }
  
  const changeAttribute = (e: any) => {
    const { name, value } = e.target;

    const attributeValue = clearInputZero(e, setAttributes, true);

    const newAttributes = attributes.map((attribute: Attribute) => {
      if (attribute.name === name ) {
        return {
          ...attribute,
          value: Number(attributeValue),
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

  const inputBaseHP = (e: any) => {
    const { name } = e.target;
    const newLifePoints = { ...lifePoints };

    if (name === 'current') {
      newLifePoints.current = clearInputZero(e, setHpCurrent, true);
    } else if (name === 'max') {
      newLifePoints.max = clearInputZero(e, setHpCurrent, true);
    }

    return setLifePoints(newLifePoints);
  }

  const diceClass = (charClass: any) => {
    const dices = charClass.reduce((acc: any, curr: any) => {
      if (acc[curr.diceLife]) {
        acc[curr.diceLife] += curr.level;
      } else {
        acc[curr.diceLife] = curr.level;
      }

      return acc;
    }, {});

    const result = Object.entries(dices).map((dice: any) => {
      return `${dice[1]}${dice[0]} `;
    }
    ).join('/ ');

    return <span>{ result }</span>
  }


  useEffect(() => {
    let color;

    const percentage = Math.round((lifePoints.current / lifePoints.max) * 100);
  
    if (percentage >= 50) {
      // Escala de amarelo a verde neon
      color = `rgb(${Math.round(255 - (percentage - 50) * 5.1)}, 255, 0)`;
    } else {
      // Escala de vermelho a amarelo
      color = `rgb(255, ${Math.round(percentage * 5.1)}, 0)`;
    }

    const style = { color, 'borderColor': color };

    setLifeStatus(style);
  }, [lifePoints]);

  useEffect(() => {
    const checkLife = Math.abs(lifePoints.current) >= lifePoints.max;

    if (checkLife && lifePoints.current < 0) {
      setIsDead(true);
    } else {
      setIsDead(false);
    }

  }, [lifePoints]);


  if (tab !== 'Atributos') return null;

  return (
    <AttributesS>
      <div className='Inspiration'>
        <label htmlFor='Inspiration'>
          <span>Inspiração</span>
        </label>
        <input
          type="checkbox"
          id='Inspiration'
          checked={ inspiration }
          onChange={ () => setInspiration(!inspiration) }
        />
      </div>
      <StatusBase>
        <div className='HP'>

          <div className='TitleHP'>
          
            <h3>
              Vida
            </h3>

            <button
              className='EditHP'
              type="button"
              onClick={ () => setHpEdit(!hpEdit) }
            >
              <img src='https://super.so/icon/light/settings.svg' alt='editHP' />
            </button>

          </div>

          
          <div className={`DisplayHP ${hpEdit ? 'EditHP': '' }`}>
            <span 
              className='CurrentHP'
              style={ lifeStatus }
            >
              {
                isDead ? (
                  <img src="https://img.icons8.com/emoji/48/000000/skull-emoji.png" alt="dead" />
                ) : (
                  <>
                    <span className='DispĺayCurrentHP'>
                      <input
                          name="current"
                          type="number"
                          style={ lifeStatus }
                          value={ lifePoints.current }
                          onChange={ (e) => inputBaseHP(e) }
                        />
                        /
                      <input
                        name="max"
                        type="number"
                        style={ lifeStatus }
                        value={ lifePoints.max }
                        onChange={ (e) => inputBaseHP(e) }
                      />
                    </span>
                    { lifePoints.temporary > 0 && (
                      <span className='DisplayTempHP'>
                        { `(+ ${lifePoints.temporary}) ` }
                      </span>
                    ) }
                  </>
                )
              }
            </span>

              {
                hpEdit && (
                  <>
                <section className='InputHP'
                  style={{opacity: `${ hpEdit ? '1' : '0'}`,}}>
                  <button
                    type='button'
                    onClick={ () => setHpCurrent(hpCurrent - 1) }
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={ hpCurrent }
                    onChange={ (e) => {
                      clearInputZero(e, setHpCurrent)
                    }}
                  />

                  <button
                    type='button'
                    onClick={ () => setHpCurrent(hpCurrent + 1) }
                  >
                    +
                  </button>
                </section>

                <label 
                  htmlFor='DamageHP' 
                  className={
                    `DmgHP ${ hpCurrentType === 'damage' ? 'Active' : '' }`
                  }
                  style={{
                    opacity: `${ hpEdit ? '1' : '0'}`,
                    
                  }}
                >
                  <span>Dano</span>
                  <input
                    type="radio"
                    id='DamageHP'
                    value="damage"
                    checked={ hpCurrentType === 'damage'}
                    onChange={ (e) => setHpCurrentType(e.target.value)}
                    />
                </label>

                <label 
                  htmlFor='HealHP' 
                  className={
                    `HealHP ${ hpCurrentType === 'heal' ? 'Active' : '' }`
                  }
                  style={{opacity: `${ hpEdit ? '1' : '0'}`}} 
                >
                  <span>Cura</span>
                  <input
                    type="radio"
                    id='HealHP'
                    value="heal"
                    checked={ hpCurrentType === 'heal'}
                    onChange={ (e) => setHpCurrentType(e.target.value)}
                  />
                </label>

                <label 
                  htmlFor='TempHP' 
                  className={
                    `TempHP ${ hpCurrentType === 'tempHP' ? 'Active' : '' }`
                  }
                  style={{opacity: `${ hpEdit ? '1' : '0'}`}}
                >
                  <span>Temp HP</span>
                  <input
                    type="radio"
                    id='TempHP'
                    value="tempHP"
                    checked={ hpCurrentType === 'tempHP'}
                    onChange={ (e) => setHpCurrentType(e.target.value)}
                  />
                </label>

                <button
                  className='SaveHP'
                  type="button"
                  onClick={ handleCurrentChange }
                  style={{opacity: `${ hpEdit ? '1' : '0'}`}}
                >
                  Aplicar
                </button>
                  </>
                )
              }
              
          </div>
        </div>

        <CardStatus className='ArmorClass'>
          <h3>Classe de Armadura</h3>
          <input
            name="armorClass"
            type="text"
            value={ armorClass }
            onChange={ (e) => setArmorClass(e.target.value) }
          />
        </CardStatus>

        <CardStatus className='Initiative'>
          <h3>Iniciativa</h3>
          <span>{ attributes[1].mod }</span>
        </CardStatus>


        <CardStatus className='Speed'>
          <h3>Movimento</h3>
          <input
            name="movement"
            type="number"
            value={ movement }
            onChange={ (e) => setMovement(Number(e.target.value)) }
          />
        </CardStatus>

        <CardStatus className='BonusProficiency'>
          <h3>Bônus de proficiência</h3>
          <span>{` + ${ proficiencyBonus } `}</span>
        </CardStatus>

        <CardStatus className='DiceLife' id='DiceLife'>
          <h3>Dado de Vida</h3>
          {
            charClass.length > 0 ? (diceClass(charClass) ) : <span> 1D? </span>
          }
        </CardStatus>

        <CardStatus className='PassivePerception'>
          <h3>Percepção passiva</h3>
          <span>{ skills.wisdom[3].value + 10 }</span>
        </CardStatus>
      </StatusBase>

      <AttributesSection>
        { attributes.map((attribute: Attribute) => (
          <CardAttr key={ attribute.name } >
            <h3>{ attribute.name }</h3>
            <input
              name={ attribute.name }
              className={`${ attribute.value === 20 ? 'Maxed': ''} ${ attribute.mod < 0 ? 'Negative': ''}`}
              type="number"
              value={ attribute.value }
              onChange={ (e) => changeAttribute(e) }
            />
            
            <div className='ModAttr'>
              <span>Mod</span>
              <div className='ValueDisplay'>
                { attribute.mod > 0 ? 
                  <span>{` +${ attribute.mod }`}</span> : 
                  <span> { attribute.mod } </span>
                }
              </div>
            </div>

            <div className='SaveAttr'>
              <label htmlFor={ attribute.name } className={`CheckSave ${attribute.prof ? 'BonusProf': ''}`}>
                  <span>Teste</span>
                    <input
                      id={ attribute.name }
                      name={ attribute.name }
                      type="checkbox"
                      checked={ attribute.prof }
                      onChange={ (e) => attributeSave(e) }
                    />
              </label>

              <div className='ValueDisplay'>
                { attribute.save > 0 ?
                  <span>{` +${ attribute.save }`}</span> :
                  <span> { attribute.save } </span>
                }
              </div>
            </div>
          </CardAttr>
        )) }
      </AttributesSection>

      
      <section className='SkillsSection'>

        <h3 className='TitleSkills'>Perícias</h3>

        <SkillSection title='Força' listSkill={ skills.strength } attr='strength' />

        <SkillSection title='Destreza' listSkill={ skills.dexterity } attr='dexterity' />

        <SkillSection title='Sabedoria' listSkill={ skills.wisdom } attr='wisdom' />

        <SkillSection title='Inteligência' listSkill={ skills.intelligence } attr='intelligence' />

        <SkillSection title='Carisma' listSkill={ skills.charisma } attr='charisma' />

      </section>
      
    </AttributesS>
  )
}
