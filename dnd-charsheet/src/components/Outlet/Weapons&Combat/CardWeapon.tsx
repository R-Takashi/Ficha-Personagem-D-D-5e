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
            removeWeapon={removeWeapon}
            saveWeapon={() => setToEdit(!toEdit)}
          />

        ) : (

          <div className={
            `Card ${showMoreInfo ? 'MoreInfo' : ''}`
          }>
            <div className='Name'>
              <span>{name}</span>
            </div>

            <button 
              type='button' 
              onClick={() => setToEdit(!toEdit)}
              className='Btn-Edit'
            >
              <img src='https://super.so/icon/light/settings.svg' alt='Editar' />
            </button>


            <div className='AtkBonus'>
              <p>Ataque: </p>
              <p>
                 {
                  prof ? (
                    <span>{attackAttr + proficiencyBonus + attackBonus}</span>
                    ) : (
                      <span>{attackAttr + attackBonus}</span>
                    )
                  }
              </p>
            </div>

            
            <div className='Damage'>
              <p>Dano: </p>
              <p>
                {
                  attackAttr > 0 ? (
                    <span>{damage} + {attackAttr}</span>
                  ) : (
                    <span>{damage} {attackAttr}</span>
                  )
                } 
              </p>
            </div>

            {
              showMoreInfo && (
                <>
                  <div className='Range'>
                    <p>Alcance: </p>
                      {
                        range === '' ? (
                          <span>Corpo a corpo</span>
                        ) : (
                          <span>{range}</span>
                          )
                      }
                  </div>

                  <div className='Attr'>
                    <p>Atributo:</p>
                    <span>{attribute}</span>
                  </div>

                  <div className='AtkDesc'>
                    <p>Bonus de ataque: </p>
                    <div>
                      <span>
                        <p>Atributo: </p> 
                        <p>{attackAttr}</p>
                      </span>

                      <span>
                        <p>Bônus: </p> 
                        <p>{attackBonus}</p>
                      </span> 
                    </div>
                  </div>

                  <div className='DmgDesc'>
                    <p>Dano: </p>
                    <div>
                      <span>
                        <p>Dado: </p> 
                        <p>{damage}</p>
                      </span>

                      <span>
                        <p>Atributo: </p> 
                        <p>{attackAttr}</p>
                      </span> 
                    </div>
                  </div>

                  <div className='DmgType'>
                    Tipo de dano: <span>{damageType}</span>
                  </div>

                  <div className='Prof'>
                    Proficiente: <span>{prof ? 'Sim' : 'Não'}</span>
                  </div>
                </>
              )
            }

                       
            
            <button 
              type='button' 
              onClick={() => setShowMoreInfo(!showMoreInfo)}
              className='Btn-Info'
            >
                {
                  showMoreInfo ? (
                    <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                  ) : (
                    <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                  )
                }
            </button>
            
          </div>

        )
      }

    </WeaponCard>
  )
}
