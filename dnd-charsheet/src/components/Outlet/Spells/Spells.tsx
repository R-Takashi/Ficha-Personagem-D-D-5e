import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import SpellListLevel from './SpellListLevel';
import { SpellS } from './Styles/SpellS'; 

const spellListLevel = ["Truques", "1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º"];

//  "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º"


export default function Spells() {
  const { tab, attributes, attributeSpell, setAttributeSpell, } = useContext(AppContext);
  const [spellCircle, setSpellCircle] = React.useState([] as string[]);
  const [spellSettings, setSpellSettings] = React.useState(false);
  
  const enabledSpellCircle = (e : any) => {
    if(e.target.checked){
      const updateSpellCircle = [...spellCircle, e.target.value];
      
      const orderSpellCircle = updateSpellCircle.sort((a: string, b: string) => {
        return spellListLevel.indexOf(a) - spellListLevel.indexOf(b);
      });


      setSpellCircle([...orderSpellCircle]);
    }
    else{
      setSpellCircle(spellCircle.filter((circle: string) => circle !== e.target.value));
    }

  }

  if (tab !== 'Magias') return null;

  return (
    <SpellS>
      <div className='Title'>
        <h1>Magias</h1>
        <button
          type='button'
          className='SpellSettings'
          onClick={() => setSpellSettings(!spellSettings)}
        >
          <img src='https://super.so/icon/light/settings.svg' alt="Settings" />
        </button>

        <div
          style={{ display: spellSettings ? 'flex' : 'none' }}
        >
          <h2>Círculos</h2>

          <section>
            {
              spellListLevel.map((level: string) => (
                <div>
                  <input
                      key={`${level}-knowledges`}
                      type='checkbox'
                      name='spellCircle'
                      value={level}
                      onChange={(e) => enabledSpellCircle(e)} />
                  <label key={`${level}-circle-level`} htmlFor='spellCircle'>
                    {level}
                  </label>
                </div>
              ))
            }
          </section>
        </div>

      </div>

      <form className='AttrKey'>
        <div>
          <label htmlFor='spellSkill'>Atributo Chave</label>
          <select
            id='spellSkill'
            name='spellSkill'
            value={attributeSpell.attr}
            onChange={(e) => setAttributeSpell({
              ...attributeSpell, attr: e.target.value })}
          >
            <option value=''>Selecione</option>
            {attributes.map((attribute:any) => (
              <option key={`${attribute.name}-key-spell`} value={attribute.attr}>
                {attribute.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='spellDC'>CD</label>
          <input
            id='spellDC'
            type='number'
            readOnly
            value={attributeSpell.CD}
            onChange={(e) => setAttributeSpell({
              ...attributeSpell, attr: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='spellBonus'>Bônus</label>
          <input
            id='spellBonus'
            type='number'
            value={attributeSpell.bonus}
            readOnly
            onChange={(e) => setAttributeSpell({
              ...attributeSpell, attr: e.target.value })}
          />
        </div>
        
      </form>

      <section>
        {spellCircle.length !== 0 && spellCircle.map((level: string) => (
          <SpellListLevel key={`${level}-spell-list`} level={level} />
        ))}
      </section>
    </SpellS>
  )
}
