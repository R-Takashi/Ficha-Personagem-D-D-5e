import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import { CharClassFormS } from './Styles/CharClassFormS';


export default function CharClassForm(props: any) {
  const { index=0, newClass=false, editClass=false, saveClass } = props;

  const { charClass, setCharClass } = useContext(AppContext);

  const [charClassForm, setCharClassForm] = React.useState({
    name: '',
    level: 1,
    diceLife: 'D6',
  });

  const handleSave = () => {
    if(newClass) {
      setCharClass([...charClass, charClassForm]);
      setCharClassForm({
        name: '',
        level: 1,
        diceLife: 'D6',
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
   
      <select
        name='dice'
        value={charClassForm.diceLife}
        onChange={(e) => setCharClassForm({ ...charClassForm, diceLife: e.target.value })}
      >
        <option value='D6'>D6</option>
        <option value='D8'>D8</option>
        <option value='D10'>D10</option>
        <option value='D12'>D12</option>
      </select>

      {
        editClass && (
          <button
            type='button'
            onClick={() => {
              const updatedList = [...charClass];
              updatedList.splice(index, 1);
              setCharClass(updatedList);
              saveClass();
            }}
          >Excluir Classe</button>
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
