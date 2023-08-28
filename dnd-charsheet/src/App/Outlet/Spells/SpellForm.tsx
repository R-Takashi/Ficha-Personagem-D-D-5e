import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import { SpellFormS } from './Styles/SpellForm'


type FormProps = {
  level: string,
  index?: number,
  newSpell?: boolean,
  editSpell?: boolean,
  saveSpell: () => void,
}

const SPELL = {
  name: '',
  school: '',
  action: '',
  duration: '',
  range: '',
  components: [] as string[],
  description:'',
}

const SCHOOL = [
  'Abjuração',
  'Adivinhação',
  'Conjuração',
  'Encantamento',
  'Evocação',
  'Ilusão',
  'Necromancia',
  'Transmutação',
]

const ACTIONS = [
  'Ação',
  'Ação bônus',
  'Reação',
  '1 minuto',
  '10 minutos',
  'Especial',
]

const COMPONENTS = [
  'Verbal',
  'Somática',
  'Material',
  'Concentração',
  'Ritual',
]


export default function SpellForm(props: FormProps) {
  const { level, index=0, newSpell=false, editSpell=false, saveSpell } = props;

  const { listSpells, setListSpells } = useContext(AppContext);

  const [spell, setSpell] = React.useState({...SPELL});

  useEffect(() => {
    if (editSpell) {
      setSpell({...listSpells[level][index]});
    }
  }, [editSpell, index, level, listSpells]);

  const handleSaveSpell = () => {
    if (newSpell) {
      setListSpells({ ...listSpells, [level]: [...listSpells[level], spell] });
      setSpell({...SPELL});

      return saveSpell();
    }

    const editedSpell = {
      ...spell,
    }

    const updatedList = [...listSpells[level]];
    updatedList[index] = editedSpell;

    setListSpells({ ...listSpells, [level]: updatedList });

    return saveSpell();
  };

  const handleComponentChange = (e: any) => {
    const { checked, value } = e.target;

    if (checked) {
      const components = spell.components;
      
      components.push(value);

      const orderComponents = components.sort((a: string, b: string) => {
        const indexA = COMPONENTS.findIndex((component) => component.charAt(0) === a);
        const indexB = COMPONENTS.findIndex((component) => component.charAt(0) === b);

        return indexA - indexB;
      });

      // const newComponents = orderComponents.join('');

      console.log(orderComponents);
      
      

      setSpell({ ...spell, components: [...orderComponents] });
    } else {
      const components = spell.components;

      const index = components.findIndex((component) => component.charAt(0) === value);

      components.splice(index, 1);

      setSpell({ ...spell, components: [...components] });
    }
    
  }
    


  return (
    <SpellFormS>

      <div>
        <label htmlFor='spellName'>Nome</label>
        <input
          id='spellName'
          type='text'
          value={spell.name}
          onChange={(e) => setSpell({ ...spell, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='spellSchool'>Escola</label>
        <select
          id='spellSchool'
          value={spell.school}
          onChange={(e) => setSpell({ ...spell, school: e.target.value })}
        >
          <option value=''>Selecione</option>
          {
            SCHOOL.map((school) => (
              <option key={`${school}-spell`} value={school}>{school}</option>
            ))
          }
        </select>
      </div>

      <div>
        <label htmlFor='spellAction'>Ação</label>
        <select
          id='spellAction'
          value={spell.action}
          onChange={(e) => setSpell({ ...spell, action: e.target.value })}
        >
          <option value=''>Selecione</option>
          {
            ACTIONS.map((action) => (
              <option key={`${action}-spell`} value={action}>{action}</option>
            ))
          }
        </select>
      </div>

      <div>
        <label htmlFor='spellDuration'>Duração</label>
        <input
          id='spellDuration'
          type='text'
          value={spell.duration}
          onChange={(e) => setSpell({ ...spell, duration: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='spellRange'>Alcance</label>
        <input
          id='spellRange'
          type='text'
          value={spell.range}
          onChange={(e) => setSpell({ ...spell, range: e.target.value })}
        />
      </div>

      <div className='ComponentContainer'>
        <label htmlFor='spellComponents'>Componentes</label>
        {
          COMPONENTS.map((component) => (
            <div 
              key={`${component}-spell`}
              className='ComponentCheckbox'  
            >
              <label htmlFor={`${component}-spell`}>{component}</label>
              <input
                id={`${component}-spell`}
                type='checkbox'
                checked={spell.components.includes(component.charAt(0))}
                value={component.charAt(0)}
                onChange={(e) => handleComponentChange(e)}
              />
            </div>
          ))
        }
      </div>

      <div>
        <label htmlFor='spellDescription'>Descrição</label>
        <textarea
          id='spellDescription'
          value={spell.description}
          onChange={(e) => setSpell({ ...spell, description: e.target.value })}
        />
      </div>

      <button type='button' onClick={handleSaveSpell}>Salvar</button>

    </SpellFormS>
  )
}
