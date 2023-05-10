import React from 'react'
import WeaponForm from './WeaponForm';
import AppContext from '../../../Context/AppContext'


export default function CardWeapon(props: any) {
  const { index, name, attackBonus, damage, damageType, range, prof, removeWeapon } = props;
  const { proficiencyBonus, attributes } = React.useContext(AppContext);
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
            <p>
              Arma: <span>{name}</span>
            </p>

            <p>
              Bônus de ataque: {
                  prof ? (
                    <span>{attributes[attackBonus].mod + proficiencyBonus}</span>
                  ) : (
                    <span>{attributes[attackBonus].mod}</span>
                  )
                }
            </p>

            <p>
              Dano: {
                attributes[attackBonus].mod > 0 ? (
                  <span>{damage} + {attributes[attackBonus].mod}</span>
                ) : (
                  <span>{damage} {attributes[attackBonus].mod}</span>
                )
              } 
            </p>

            <p>
              Alcance: {
                range === '' ? (
                  <span>Corpo a corpo</span>
                ) : (
                  <span>{range}</span>
                )
              }
            </p>
            
            <button type='button' onClick={() => setShowMoreInfo(!showMoreInfo)}>+</button>
            {
              showMoreInfo && (
                <>
                  <p>
                    Tipo de dano: <span>{damageType}</span>
                  </p>

                  <p>
                    Proficiente: <span>{prof ? 'Sim' : 'Não'}</span>
                  </p>
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
