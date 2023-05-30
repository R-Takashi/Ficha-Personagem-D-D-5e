import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import SpellListLevel from './SpellListLevel';

const spellListLevel = ["Truques", "1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º"];


export default function Spells() {
  const { tab, attributes } = useContext(AppContext);
  const [attributeSkill, setAttributeSkill] = React.useState('');
  const [spellDC, setSpellDC] = React.useState(0);
  const [spellBonus, setSpellBonus] = React.useState(0);
  

  if (tab !== 'Magias') return null;

  return (
    <div>
      <h1>Magias</h1>

      <div>
        <label htmlFor='spellSkill'>Atributo Chave</label>
        <select
          id='spellSkill'
          value={attributeSkill}
          onChange={(e) => setAttributeSkill(e.target.value)}
        >
          <option value=''>Selecione</option>
          {attributes.map((attribute:any) => (
            <option key={attribute.name} value={attribute.mod}>
              {attribute.name}
            </option>
          ))}
        </select>

        <label htmlFor='spellDC'>CD</label>
        <input
          id='spellDC'
          type='number'
          value={spellDC}
          onChange={(e) => setSpellDC(Number(e.target.value))}
        />

        <label htmlFor='spellBonus'>Bônus</label>
        <input
          id='spellBonus'
          type='number'
          value={spellBonus}
          onChange={(e) => setSpellBonus(Number(e.target.value))}
        />
        
      </div>

      <section>
        {spellListLevel.map((level: string) => (
          <SpellListLevel key={level} level={level} />
        ))}
      </section>
    </div>
  )
}
