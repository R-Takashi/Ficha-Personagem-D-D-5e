import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import styled from 'styled-components';

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
  const [spell, setSpell] = React.useState({ 
    name: '',
    action: '',
    duration: '',
    range: '',
    components: '',
    description:'',
  });
  const [showNewSpell, setShowNewSpell] = React.useState(false);

  const handleNewSpell = () => {
    if (showNewSpell) {
      setListSpells({ ...listSpells, [level]: [...listSpells[level], spell] });
      setSpell({ name: '', action: '', duration: '', range: '', components:'', description: '' });
      setShowNewSpell(!showNewSpell);
    }

    setShowNewSpell(!showNewSpell);
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
          <li key={index}>
            <div className='Spell'>
              <span>{spell.name}</span>
              /
              <span>{spell.action}</span>
              /
              <span>{spell.duration}</span>
              /
              <span>{spell.range}</span>
              /
              <span>{spell.components}</span>
              /
              <span>{spell.description}</span>
            </div>
          </li>
        ))}

        <li>

          
          <div className='NewSpell'>
          
          {showNewSpell && (
              <>
                <label htmlFor='spellName'>Nome</label>
                <input
                  id='spellName'
                  type='text'
                  value={spell.name}
                  onChange={(e) => setSpell({ ...spell, name: e.target.value })}
                />
    
                <label htmlFor='spellAction'>Ação</label>
                <input
    
                  id='spellAction'
                  type='text'
                  value={spell.action}
                  onChange={(e) => setSpell({ ...spell, action: e.target.value })}
                />
    
                <label htmlFor='spellDuration'>Duração</label>
                <input
                  id='spellDuration'
                  type='text'
                  value={spell.duration}
                  onChange={(e) => setSpell({ ...spell, duration: e.target.value })}
                />
    
                <label htmlFor='spellRange'>Alcance</label>
                <input
                  id='spellRange'
                  type='text'
                  value={spell.range}
                  onChange={(e) => setSpell({ ...spell, range: e.target.value })}
                />
    
                <label htmlFor='spellComponents'>Componentes</label>
                <input
                  id='spellComponents'
                  type='text'
                  value={spell.components}
                  onChange={(e) => setSpell({ ...spell, components: e.target.value })}
                />
    
                <label htmlFor='spellDescription'>Descrição</label>
    
                <textarea
                  id='spellDescription'
                  value={spell.description}
                  onChange={(e) => setSpell({ ...spell, description: e.target.value })}
                />
              </>
            )}



            <button
              type='button'
              onClick={() => handleNewSpell()}
            >
              {showNewSpell ? 'Nova Magia': 'Adicionar Magia'}
            </button>


          </div>
        </li>
      </ul>
    </SpellListLevelS>
  )
}
