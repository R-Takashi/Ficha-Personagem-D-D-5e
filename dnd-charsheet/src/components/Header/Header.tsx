import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import { HeaderS } from './Styles/HeaderS'
import HeaderForm from './HeaderForm';
import ShortRest from './campfire.svg'


export default function Header() {
  const {
    name,
    race,
    charClass,
    level,
    lifePoints, setLifePoints,
    resetResources, resetSpellSlots,
    inspiration,
  } = useContext(AppContext)

  const [toEdit, setToEdit] = React.useState(false);
  const [charMenu, setCharMenu] = React.useState(false);
  

  const longRest = () => {
    setLifePoints({
      ...lifePoints,
      current: lifePoints.max,
    });
    resetResources();
    resetSpellSlots();
  }

  return (
    <>
      {
        toEdit || name.length < 1 ? (
          <HeaderForm
            saveChar={() => setToEdit(!toEdit)}
          />
        ) : (
          <HeaderS>
            <div 
              className='NameRace'
              onClick={() => setCharMenu(!charMenu)}
            >
              <h1>{name}</h1>
              <p>{race}</p>
            </div>

            {
              charMenu ? (
                <div className='CharMenu'>

                  <p>Descanso: </p>

                  <div className='Buttons'>

                    <div>
                      <button
                        type='button'
                      >
                        <img src={ ShortRest } alt="Descanso curto" />
                      </button>
                      <p>Curto</p>
                    </div>

                    <div>
                      <button
                        type='button'
                        onClick={() => longRest()}
                      >
                        <img src="https://super.so/icon/light/moon.svg" alt="Descanso longo" />
                      </button>
                      <p>Longo</p>
                    </div>

                  </div>
                </div>
              ) : (
                <div className='InfoChar'>
                  <div className='ClassLevel'>
                    {inspiration && (
                      <p className='Inspiration'>Inspiração: <div /></p>
                    )  
                    }
                    {
                      charClass.map((cClass: any, index: number) => (
                        <div 
                          key={cClass.name + cClass.level}
                          className={index === 0 ? 'MainClass' : ''}
                        >
                          <p>{cClass.name} {cClass.level}</p>
                        </div>
                      ))
                    }
                  </div>

                  <div className='Level'>
                    <p>Nível</p>
                    <p>{level}</p>
                  </div>

                  <button
                    type='button'
                    onClick={() => setToEdit(!toEdit)}
                  >
                    <img src='https://super.so/icon/light/settings.svg' alt='edit' />
                  </button>
                </div>
              )
            }
          </HeaderS>
        )

      }

    </>
  )
}
