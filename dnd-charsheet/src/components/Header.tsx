import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { HeaderS } from './Header/Styles/HeaderS'
import HeaderForm from './Header/HeaderForm';


export default function Header() {
  const {
    name,
    race,
    charClass,
    level
  } = useContext(AppContext)

  const [toEdit, setToEdit] = React.useState(false);

  return (
    <>
      {
        toEdit || name.length < 1 ? (
          <HeaderForm
            saveChar={() => setToEdit(!toEdit)}
          />
        ) : (
          <HeaderS>
            <div className='NameRace'>
              <h1>{name}</h1>
              <p>{race}</p>
            </div>

            <div className='ClassLevel'>
              {
                charClass.map((cClass: any, index: number) => (
                  <div 
                    key={cClass.name}
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
          </HeaderS>
        )

      }

    </>
  )
}
