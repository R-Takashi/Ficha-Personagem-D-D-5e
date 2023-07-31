import React, { useContext, useEffect } from 'react'
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
              className={`NameRace ${charMenu && 'HeaderActive'}`}
              onClick={() => setCharMenu(!charMenu)}
            >
              <div 
                className='DefaultDisplay'>
                <h1>{name}</h1>
                <p>{race}</p>
              </div>

              <div className={`${charMenu ? 'CharMenuActive' : 'CharMenu'}`}>

                  <p>Descanso: </p>

                  <div className='Buttons'>

                    <div>
                      <button
                        type='button'
                        disabled={!charMenu}
                      >
                        <img src={ ShortRest } alt="Descanso curto" />
                      </button>
                      <p>Curto</p>
                    </div>

                    <div>
                      <button
                        type='button'
                        disabled={!charMenu}
                        onClick={() => longRest()}
                      >
                        <img src="https://super.so/icon/light/moon.svg" alt="Descanso longo" />
                      </button>
                      <p>Longo</p>
                    </div>

                  </div>
                </div>

                <img
                  src={
                    charMenu ? 'https://super.so/icon/light/chevron-left.svg' : 'https://super.so/icon/light/chevron-right.svg'
                  }
                  alt='menu'
                  className='MenuIcon'
                />


            </div>

            <div className={`${charMenu ? 'CharMenuOpen' : 'InfoChar'}`}>
              <div className='ClassLevel'>
                
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

                {inspiration && (
                  <p className='Inspiration'>Inspiração: <div /></p>
                )
                }
              </div>

              <div className='Level'>
                <p>Nível</p>
                <p>{level}</p>
              </div>
            </div>

            <button
              type='button'
              className='Edit'
              onClick={() => setToEdit(!toEdit)}
            >
              <img src='https://super.so/icon/light/menu.svg' alt='edit' />
            </button>
          </HeaderS>
        )

      }

    </>
  )
}
