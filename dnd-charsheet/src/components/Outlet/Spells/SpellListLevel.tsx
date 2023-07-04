import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import SpellDetails from './SpellDetails';
import SpellForm from './SpellForm';
import { SpellList } from './Styles/SpellList';


export default function SpellListLevel(props: any) {
  const { level } = props;
  const { listSpells, setListSpells } = useContext(AppContext);
  const [showNewSpell, setShowNewSpell] = React.useState(false);
  const [showList, setShowList] = React.useState(false);
  

  const handleRemoveSpell = (index: number) => {
    setListSpells({ ...listSpells, [level]: listSpells[level].filter((_: any, i: number) => i !== index) });
  };

  useEffect(() => {
    if (listSpells[level].length === 0) {
      const SpellSlots = {
        max: 0,
        uses: 0,
      };

      setListSpells({ ...listSpells, [level]: [SpellSlots] });
    }
  }, [level, listSpells, setListSpells]);


  const changeSpellSlots = (e: any) => {
    const updatedList = [...listSpells[level]];
    updatedList[0] = { ...updatedList[0], [e.target.name]: e.target.value };

    setListSpells({ ...listSpells, [level]: updatedList });
  }
  
  

  return (
    <SpellList>
      <header>
        <button
          type='button'
          className='ShowList'
          onClick={() => setShowList(!showList)}
        >
          {
            showList ? (
              <img src='https://super.so/icon/light/book-open.svg' alt="show list" />
            ) : (
              <img src='https://super.so/icon/light/book.svg' alt="show list" />
            )
          }
        </button>
        <h2 className={`${level === 'Truques' && 'Cantrip'}`}>{level}</h2>
        {
          level !== 'Truques' && (
            <div>

              <label htmlFor='spellSlotsTotal'>Total</label>
              <input 
                id='spellSlotsTotal' 
                type='number'
                name='max'
                value={listSpells[level][0]?.max}
                onChange={(e) => changeSpellSlots(e)}
              />

              <label htmlFor='spellSlotsUsed'>Usos</label>
              <input 
                id='spellSlotsUsed' 
                type='number'
                name='uses'
                max={listSpells[level][0]?.max}
                min={0}
                value={listSpells[level][0]?.uses}
                onChange={(e) => changeSpellSlots(e)}
              />
            </div>
          )
        }
      </header>

      
      <ul style={ showList ? {} : { display: 'none'}}>
        {listSpells[level].slice(1).map((spell: any, index: number) => (
          <SpellDetails
            key={`${level}-spells-${index}`}
            index={index}
            level={level}
            removeSpell={() => handleRemoveSpell(index+1)}
            {...spell}
          />
        ))}

        <li>     
          <div className='NewSpell'>
          
            {showNewSpell ? (

              <SpellForm
                level={level}
                newSpell
                saveSpell={() => setShowNewSpell(false)}
              />

            ) : (

              <button onClick={() => setShowNewSpell(true)}>Novo</button>

            )}

          </div>
        </li>
      </ul>
    </SpellList>
  )
}
