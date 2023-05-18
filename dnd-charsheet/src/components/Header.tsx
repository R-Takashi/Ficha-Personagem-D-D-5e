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
    <HeaderS>
      {
        toEdit ? (
          <HeaderForm
            saveChar={() => setToEdit(!toEdit)}
          />
        ) : (
          <div>
            <h1>{name}</h1>
            <p>{race}</p>
            {
              charClass.map((cClass: any) => (
                <div key={cClass.name}>
                  <p>{cClass.name}</p>
                  <p>{cClass.level}</p>
                </div>
              ))
            }
            <p>{level}</p>

            <button
              type='button'
              onClick={() => setToEdit(!toEdit)}
            >
              Editar
            </button>
          </div>
        )

      }

    </HeaderS>
  )
}
