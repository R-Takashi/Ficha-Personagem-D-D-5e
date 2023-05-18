import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import CharClassForm from './CharClassForm';

export default function HeaderForm(props: any) {
  const { saveChar } = props;
  const {
    name, setName,
    race, setRace,
    charClass,
    level, setLevel,
  } = useContext(AppContext)
  const [editClass, setEditClass] = React.useState(false);
  const [newClass, setNewClass] = React.useState(false);

  const [char, setChar] = React.useState({
    name: '',
    race: '',
    level: 1,
  });


  const handleSave = () => {
    setName(char.name);
    setRace(char.race);
    setLevel(char.level);
    saveChar();
  }

  useEffect(() => {
    setChar({
      name,
      race,
      level,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <label htmlFor="name">Nome: </label>
      <input
        type="text"
        name="name"
        value={char.name}
        onChange={(e) => setChar({ ...char, name: e.target.value })}
      />

      <label htmlFor='race'>Raça: </label>
      <input
        type='text'
        name='race'
        value={char.race}
        onChange={(e) => setChar({ ...char, race: e.target.value })}
      />


      <label htmlFor='level'>Nível: </label>
      <input
        type='number'
        name='level'
        value={char.level}
        onChange={(e) => setChar({ ...char, level: +e.target.value })}
      />

      <button
        type='button'
        onClick={() => {
          setEditClass(!editClass);
        }}
      >
          Editar Classes
      </button>

      <button
        type='button'
        onClick={() => {
          setNewClass(!newClass);
        }}
      >
          Nova Classe
      </button>

      {
        newClass && (
          <CharClassForm
            newClass
            saveClass={() => setEditClass(!editClass)}
          />
        )
      }

      {
        editClass ? (
          charClass.map((charClass: any, index: number) => (
            <CharClassForm
              key={index}
              index={index}
              editClass
              saveClass={() => setEditClass(!editClass)}
            />
          ))
        ) : (
          charClass.map((charClass: any, index: number) => (
            <div key={index}>
              <p>{charClass.name}</p>
              <p>{charClass.diceLife}</p>
              <p>{charClass.level}</p>
            </div>
          ))
        )  
      }


      <button
        type='button'
        onClick={() => {
          handleSave();
        }}
      >
        Salvar
      </button>
          


    </>
  )
}
