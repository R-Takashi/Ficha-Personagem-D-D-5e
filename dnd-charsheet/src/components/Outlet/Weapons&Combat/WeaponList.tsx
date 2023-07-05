import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import WeaponForm from './WeaponForm'
import CardWeapon from './CardWeapon'
import { Weapons } from './Styles/Weapons'


export default function WeaponList() {
  const { listWeapons, setListWeapons } = useContext(AppContext);
  const [newWeapon, setNewWeapon] = React.useState(false);

  const handleRemoveWeapon = (index: number) => {
    const updatedList = [...listWeapons];
    updatedList.splice(index, 1);
    setListWeapons(updatedList);
  }


  return (
    <Weapons>
      <h2>Armas</h2>
        
        <ul>
          {listWeapons.map((weapon: any, index: number) => (
            <CardWeapon
              key={index}
              index={index}
              {...weapon}
              removeWeapon={handleRemoveWeapon}
            />
          ))}
        </ul>

        <button onClick={() => setNewWeapon(!newWeapon)}>
          {
            newWeapon ? 
            <img src='https://super.so/icon/light/minus-square.svg' alt="show info" /> :
            <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
          }
        </button>

        {newWeapon && (
          <WeaponForm
            newWeapon
            saveWeapon={() => setNewWeapon(false)}
          />
        )}
    </Weapons>
  )
}
