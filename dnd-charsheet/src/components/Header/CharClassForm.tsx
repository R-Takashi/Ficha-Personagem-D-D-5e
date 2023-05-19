import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import { CharClassFormS } from './Styles/CharClassFormS';


export default function CharClassForm(props: any) {
  const { index=0, newClass=false, editClass=false, saveClass } = props;

  const { charClass, setCharClass } = useContext(AppContext);

  const [charClassForm, setCharClassForm] = React.useState({
    name: '',
    level: 1,
    diceLife: '',
  });

  const handleSave = () => {
    if(newClass) {
      setCharClass([...charClass, charClassForm]);
      setCharClassForm({
        name: '',
        level: 1,
        diceLife: '',
      });
      return saveClass();
    }

    const updatedList = [...charClass];
    updatedList[index] = charClassForm;

    setCharClass(updatedList);

    return saveClass();
  }

  useEffect(() => {
    if (editClass) {
      setCharClassForm({ ...charClass[index] });
    }
  }, [editClass, index, charClass]);



  return (
    <CharClassFormS>
      <label htmlFor='name'>Nome da classe: </label>
      <input
        type='text'
        name='name'
        value={charClassForm.name}
        onChange={(e) => setCharClassForm({ ...charClassForm, name: e.target.value })}
      />

      <label htmlFor='dice'>Dado de vida: </label>
      <input
        type='text'
        name='dice'
        value={charClassForm.diceLife}
        onChange={(e) => setCharClassForm({ ...charClassForm, diceLife: e.target.value })}
      />

      {
        editClass && (
          <>
            <label htmlFor='level'>Nível: </label>
            <input
              type='number'
              name='level'
              value={charClassForm.level}
              onChange={(e) => setCharClassForm({ ...charClassForm, level: +e.target.value })}
            />
          </>
        )
      }

      <button 
        type='button' 
        onClick={handleSave}
        disabled={!charClassForm.name || !charClassForm.diceLife}
      >
        {newClass ? 'Adicionar Classe' : 'Salvar Classe'}
      </button>

    </CharClassFormS>
  )
}
