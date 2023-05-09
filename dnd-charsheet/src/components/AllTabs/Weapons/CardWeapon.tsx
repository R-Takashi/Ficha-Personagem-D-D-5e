import React from 'react'
import WeaponForm from './WeaponForm';

export default function CardWeapon(props: any) {
  const { index, name, damage, damageType, range, prof, removeWeapon } = props;
  const [toEdit, setToEdit] = React.useState(false);
  const [showMoreInfo, setShowMoreInfo] = React.useState(false);


  return (
    <li>
      {
        toEdit ? (
          <WeaponForm
            index={index}
            editWeapon
            saveWeapon={() => setToEdit(!toEdit)}
          />

        ) : (

          <>
            <span>{name}</span>

            <label htmlFor='damage'>Dano</label>
            <span>{damage}</span>
            
            <button type='button' onClick={() => setShowMoreInfo(!showMoreInfo)}>+</button>
            {
              showMoreInfo && (
                <>
                  <label htmlFor='damageType'>Tipo de dano</label>
                  <span>{damageType}</span>

                  <label htmlFor='range'>Alcance</label>
                  <span>{range}</span>

                  <label htmlFor='prof'>Proficiente</label>
                  <input type='checkbox' checked={prof} readOnly />
                </>
              )
            }

            <button type='button' onClick={() => setToEdit(!toEdit)}>Editar</button>
            <button type='button' onClick={removeWeapon}>X</button>
          </>

        )
      }

    </li>
  )
}
