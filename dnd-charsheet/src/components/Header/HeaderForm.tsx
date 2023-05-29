import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import CharClassForm from './CharClassForm';
import { HeaderFormS } from './Styles/HeaderFormS'

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

  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSave = () => {
    setName(char.name);
    setRace(char.race);
    setLevel(char.level);
    return saveChar();
  }

  useEffect(() => {
    const checkForm = [
      char.name.length > 0,
      char.race.length > 0,
      char.level > 0,
      charClass.length > 0
    ]

    setIsDisabled(checkForm.includes(false));
  }, [char, charClass]);

  useEffect(() => {
    setChar({
      name,
      race,
      level,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderFormS  >

      <div className='InputHeader'>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          value={char.name}
          onChange={(e) => setChar({ ...char, name: e.target.value })}
        />
      </div>

      <div className='InputHeader'>
        <label htmlFor='race'>Raça: </label>
        <input
          type='text'
          name='race'
          value={char.race}
          onChange={(e) => setChar({ ...char, race: e.target.value })}
        />
      </div>

      <div className='InputHeader'>
        <label htmlFor='level'>Nível: </label>
        <input
          type='number'
          name='level'
          value={char.level}
          onChange={(e) => setChar({ ...char, level: +e.target.value })}
        />
      </div>

      <div className='InputHeader'>
        <label htmlFor='class'>Classes: </label>
        <div className='ButtonClass'>
          <button
            type='button'
            onClick={() => {
              setNewClass(!newClass);
            }}
          >
              {
                newClass ? 'Cancelar' : charClass.length > 0 ? 'Nova Classe' : 'Adicionar Classe'
              }
          </button>

          {
            charClass.length > 0 && (
              <button
                type='button'
                className={`EditClass ${editClass && 'activeEdit'}`}
                onClick={() => {
                  setEditClass(!editClass);
                }}
              >
                <img src='https://super.so/icon/light/settings.svg' alt='edit' />
              </button>
            )
          }
        </div>
      </div>

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
          <>
            { charClass.length > 0 && (
              <div className='DisplayClass'>
                <p>Classe: </p>
                <p>Dado de Vida: </p>
                <p>Nível: </p>
              </div>
            )

            }

            {
              charClass.map((charClass: any, index: number) => (
                <div 
                  key={index}
                  className='DisplayClass'
                >
                  <p>{charClass.name}</p>

                  <p>{charClass.diceLife}</p>

                  <p>{charClass.level}</p>
                </div>
              ))
            }
          </>
        )  
      }

      {
        newClass && (
          <CharClassForm
            newClass
            saveClass={() => setNewClass(!newClass)}
          />
        )
      }

      <button
        type='button'
        disabled={isDisabled}
        onClick={handleSave}
      >
        Salvar
      </button>
          


    </HeaderFormS>
  )
}
