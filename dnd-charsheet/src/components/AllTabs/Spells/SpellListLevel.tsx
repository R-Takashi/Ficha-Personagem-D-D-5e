import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import styled from 'styled-components';
import SpellDetails from './SpellDetails';
import SpellForm from './SpellForm';


const SpellListLevelS = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-bottom: 1px solid black;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Spell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .NewSpell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
      height: 100px;
    }
  }

`;


export default function SpellListLevel(props: any) {
  const { level } = props;
  const { listSpells, setListSpells } = useContext(AppContext);
  const [showNewSpell, setShowNewSpell] = React.useState(false);

  const handleRemoveSpell = (index: number) => {
    setListSpells({ ...listSpells, [level]: listSpells[level].filter((_: any, i: number) => i !== index) });
  };

  return (
    <SpellListLevelS>
      <header>
        <h2>{level}</h2>
        {level !== 'Truques' && (
          <div>
            <label htmlFor='spellSlotsTotal'>Total</label>
            <input id='spellSlotsTotal' type='number' />
            <label htmlFor='spellSlotsUsed'>Usado</label>
            <input id='spellSlotsUsed' type='number' />
          </div>
        )
        }
      </header>

      
      <ul>
        {listSpells[level].map((spell: any, index: number) => (
          <SpellDetails
            key={index}
            index={index}
            level={level}
            removeSpell={() => handleRemoveSpell(index)}
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
    </SpellListLevelS>
  )
}
