import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import SpellListLevel from './SpellListLevel';
import { SpellS } from './Styles/SpellS'; 

const spellListLevel = ["Truques", "1º"];

//  "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º"


export default function Spells() {
  const { tab, attributes, attributeSpell, setAttributeSpell, } = useContext(AppContext);
  

  if (tab !== 'Magias') return null;

  return (
    <SpellS>
      <h1>Magias</h1>

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
              <option key={attribute.name} value={attribute.attr}>
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
        {spellListLevel.map((level: string) => (
          <SpellListLevel key={level} level={level} />
        ))}
      </section>
    </SpellS>
  )
}
