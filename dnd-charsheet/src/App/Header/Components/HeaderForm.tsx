import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import CharClassForm from './CharClassForm';
import { HeaderFormS } from './Styles/HeaderFormS'

export default function HeaderForm(props: any) {
  const { saveChar, toEdit } = props;
  const {
    name, setName,
    race, setRace,
    charClass,setCharClass,
    level, setLevel,
  } = useContext(AppContext)
  const [editClass, setEditClass] = React.useState(false);
  const [newClass, setNewClass] = React.useState(false);
  const [levelUp, setLevelUp] = React.useState(false);

  const [char, setChar] = React.useState({
    name: '',
    race: '',
    level: 0,
  });

  const [isDisabled, setIsDisabled] = React.useState(true);



  useEffect(() => {
    const checkForm = [
      char.name.length > 0,
      char.race.length > 0,
      char.level > 0,
      charClass.length > 0
    ];

    setIsDisabled(checkForm.includes(false));
    
  }, [char, charClass]);

  useEffect(() => {
      const trueLevel = charClass.reduce((acc: number, cur: any) => acc + cur.level, 0);
      setChar({ ...char, level: trueLevel });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charClass]);


  useEffect(() => {
    if (toEdit) {
    setChar({
      name,
      race,
      level,
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toEdit]);

  const handleSave = () => {
    setName(char.name);
    setRace(char.race);
    setLevel(char.level);
    return saveChar();
  }
  
  const levelUpChar = () => {
    return charClass.length > 0 ? (
      <div>
        <p>Escolha uma classe para subir de nível</p>
        <div>
          {
            charClass?.map((classOption: any, index: number) => (
              <button
                key={classOption.name + index}
                type='button'
                onClick={() => {
                  const levelUpClass = classOption;
                  levelUpClass.level += 1;
                  
                  const updatedList = [...charClass];
                  updatedList[index] = levelUpClass;
                  
                  setCharClass(updatedList);
                  setChar({ ...char, level: char.level + 1 });
                  setLevelUp(!levelUp);
                }}
              >
                {classOption.name}
              </button>
            ))
          }
        </div>
      </div>
    ) : (
      <div>
        <p>Adicione uma classe para subir de nível</p>
      </div>
    )

  }


  return (
    <HeaderFormS>

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
        <button
          type='button'
          name='level'
          className='LevelUp'
          onClick={() => setLevelUp(!levelUp)}
        >
          {char.level}
        </button>
      </div>

      {
        levelUp && levelUpChar()
      }

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
