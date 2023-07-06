import React from 'react'
import WeaponForm from './WeaponForm';
import AppContext from '../../../Context/AppContext'
import { WeaponCard } from './Styles/WeaponCard';


export default function CardWeapon(props: any) {
  const { index, name, attribute, attackAttr, attackBonus, damage, damageType, range, prof, removeWeapon } = props;
  const { proficiencyBonus } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);
  const [showMoreInfo, setShowMoreInfo] = React.useState(false);


  return (
    <WeaponCard>
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
                    <span>{attackAttr + proficiencyBonus + attackBonus}</span>
                  ) : (
                    <span>{attackAttr + attackBonus}</span>
                  )
                }
            </p>

            <p>
              Dano: {
                attackAttr > 0 ? (
                  <span>{damage} + {attackAttr}</span>
                ) : (
                  <span>{damage} {attackAttr}</span>
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
                  <div>
                    Atributo: <span>{attribute}</span>
                  </div>

                  <div>
                    Bonus de ataque:
                      <span>Atributo: {attackAttr}</span> 
                      <span>Bônus: {attackBonus}</span>
                  </div>

                  <div>
                    Dano: 
                      <span>Dado: {damage}</span>
                      <span>Atributo: {attackAttr}</span>
                  </div>

                  <div>
                    Tipo de dano: <span>{damageType}</span>
                  </div>

                  <div>
                    Proficiente: <span>{prof ? 'Sim' : 'Não'}</span>
                  </div>
                </>
              )
            }

            <button type='button' onClick={() => setToEdit(!toEdit)}>Editar</button>
            <button type='button' onClick={removeWeapon}>X</button>
          </>

        )
      }

    </WeaponCard>
  )
}
