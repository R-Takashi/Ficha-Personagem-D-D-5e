import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import WeaponForm from './WeaponForm'
import CardWeapon from './CardWeapon'
import { Weapons } from './Styles/Weapons'


export default function WeaponList() {
  const { listWeapons, setListWeapons } = useContext(AppContext);
  const [newWeapon, setNewWeapon] = React.useState(false);
  const [showWeapon, setShowWeapon] = React.useState(false);

  const handleRemoveWeapon = (weapon: any) => {
    const weaponIndex = listWeapons.findIndex((item: any) => JSON.stringify(item) === JSON.stringify(weapon));
    const newListWeapons = [...listWeapons];
    newListWeapons.splice(weaponIndex, 1);
    setListWeapons(newListWeapons);
  }


  return (
    <Weapons>

      <section>
        {
          listWeapons.length > 0 && (
            <div
              className='Btn-Show'
              onClick={() => setShowWeapon(!showWeapon)}
            >
              {
                showWeapon ? (
                  <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                ) : (
                  <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                )
              }
            </div>
          )
        }

        <h2
          className={`${showWeapon ? 'Listed' : ''}`}
          onClick={() => {
            setShowWeapon(!showWeapon);
          }}
        >Armas</h2>
          

          <button onClick={() => setNewWeapon(!newWeapon)}>
            {
              newWeapon ? 
              <img src='https://super.so/icon/light/minus-square.svg' alt="show info" /> :
              <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
            }
          </button>

          {
            newWeapon && (
              <WeaponForm
                newWeapon
                saveWeapon={() => setNewWeapon(false)}
              />
            )
          }
      </section>

      <div className={`${showWeapon ? 'DisplayOn' : 'DisplayOff'}`}>
        {
          listWeapons.map((weapon: any, index: number) => (
            <CardWeapon
              key={index}
              index={index}
              {...weapon}
              removeWeapon={ () => handleRemoveWeapon(weapon)}
            />
        ))}
      </div>

    </Weapons>
  )
}
