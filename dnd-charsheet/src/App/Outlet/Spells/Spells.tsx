import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import SpellListLevel from './SpellListLevel';
import { SpellS } from './Styles/SpellS'; 

const spellListLevel = ["Truques", "1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º"];


export default function Spells() {
  const { tab, attributes, attributeSpell, setAttributeSpell, listSpells, setListSpells, ShortRestSpell, setShortRestSpell } = useContext(AppContext);
  const [spellCircle, setSpellCircle] = React.useState([] as string[]);
  const [spellSettings, setSpellSettings] = React.useState(false);
  
  const enabledSpellCircle = (e : any) => {
    const { checked } = e.target;

    const updateSpells = listSpells;

    updateSpells[e.target.value][0] = {
      ...updateSpells[e.target.value][0],
      active: checked,
    }


    if(checked){
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

  React.useEffect(() => {
    if (spellListLevel.some((level: string) => listSpells[level][0].active === undefined)) {
      const updateSpellList = spellListLevel.reduce((acc: any, level: string) => {
        const updateLevel = acc;
        
        updateLevel[level] = [{...listSpells[level][0], active: false}, ...listSpells[level].slice(1)];

        return updateLevel;
    }, {} as any);

    setListSpells(updateSpellList);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  React.useEffect(() => {
    if (tab === 'Magias') {

    const updateSpellCircle = [] as string[];

    spellListLevel.forEach((spell: any) => {
      
      if(listSpells[spell][0].active === true){
        updateSpellCircle.push(spell);
      }
    });
    
    const orderSpellCircle = updateSpellCircle.sort((a: string, b: string) => {
      return spellListLevel.indexOf(a) - spellListLevel.indexOf(b);
    });

    setSpellCircle([...orderSpellCircle]);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);


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
          <div className='RestoreShortRest'>
            <label htmlFor="ShortRest">
              Descanso Curto ? 
            </label>

            <input
              type="checkbox"
              name="ShortRest"
              id="ShortRest"
              checked={ShortRestSpell}
              onChange={() => setShortRestSpell(!ShortRestSpell)}
            />
          </div>
          <h2>Círculos</h2>

          <section>
            {
              spellListLevel.map((level: string) => (
                <div key={`${level}-circle-level`}>
                  <input
                      type='checkbox'
                      name='spellCircle'
                      value={level}
                      checked={listSpells[level][0].active}
                      onChange={(e) => enabledSpellCircle(e)}
                  />
                  <label htmlFor='spellCircle'>
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
