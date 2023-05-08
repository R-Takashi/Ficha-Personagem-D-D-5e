import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'


type FormProps = {
  level: string,
  index?: number,
  newSpell?: boolean,
  editSpell?: boolean,
  saveSpell: () => void,
}

const SPELL = {
  name: '',
  action: '',
  duration: '',
  range: '',
  components: '',
  description:'',
}


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


  return (
    <div>

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

      <button type='button' onClick={handleSaveSpell}>Salvar</button>

    </div>
  )
}
