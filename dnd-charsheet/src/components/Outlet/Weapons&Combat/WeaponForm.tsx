import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import { WeaponFormS } from './Styles/WeaponForm'


export default function WeaponForm(props: any) {
  const { index=0, newWeapon=false, editWeapon=false, saveWeapon } = props;

  const { listWeapons, setListWeapons, attributes } = useContext(AppContext);

  const [weapon, setWeapon] = React.useState({ 
    name: '',
    attribute: '',
    versatility: false,
    damageVersatile: '',
    attackAttr: 0,
    attackBonus: 0,
    damage: '',
    damageBonusFlat: 0,
    bonusDice: false,
    damageBonusDice: '',
    damageTypeBonus: '',
    damageType: '', 
    range: '',
    prof: false,
  });

  useEffect(() => {
    if (editWeapon) {
      setWeapon({...listWeapons[index]});
    }

  }, [editWeapon, index, listWeapons]);

  const handleSaveWeapon = () => {
    if (newWeapon) {
      setListWeapons([...listWeapons, weapon]);
      setWeapon({ 
        name: '',
        attribute: '',
        versatility: false,
        damageVersatile: '',
        attackAttr: 0,
        attackBonus: 0,
        damage: '',
        damageBonusFlat: 0,
        bonusDice: false,
        damageBonusDice: '',
        damageTypeBonus: '',
        damageType: '',
        range: '', 
        prof: false,
      });

      return saveWeapon();
    }

    const editedWeapon = {
      ...weapon,
    }

    const updatedList = [...listWeapons];
    updatedList[index] = editedWeapon;

    setListWeapons(updatedList);

    return saveWeapon();
  };

  const handleChangeAttr = (e: any) => {
    const modAttr = e.target.value !== '' && 
      attributes.find((attribute: any) => attribute.name === e.target.value).mod;

    setWeapon({ 
      ...weapon, 
      attribute: e.target.value,
      attackAttr: modAttr, 
    });
  }
  

  return (
    <WeaponFormS>

      <div>
        <label htmlFor='weaponName'>Nome</label>
        <input
          id='weaponName'
          type='text'
          value={weapon.name}
          onChange={(e) => setWeapon({ ...weapon, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='weaponAttackAttr'>Atributo</label>
        <select
          id='weaponAttackAttr'
          onChange={(e) => handleChangeAttr(e)}
        >
          <option value={''}>Selecione</option>
          {
            attributes.map((attribute: any) => (
              <option key={attribute.name} value={attribute.name}>
                {attribute.name}
              </option>
            ))
          }
        </select>
      </div>

      <div>
        <label htmlFor='weaponDamage'>Dano</label>
        <input
          id='weaponDamage'
          type='text'
          value={weapon.damage}
          onChange={(e) => setWeapon({ ...weapon, damage: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='weaponProf'>Proficiente</label>
        <input
          id='weaponProf'
          type='checkbox'
          checked={weapon.prof}
          onChange={(e) => setWeapon({ ...weapon, prof: e.target.checked })}
        />
      </div>


      <div>
        <label htmlFor='weaponVersatility'>Versátil?</label>
        <input
          id='weaponVersatility'
          type='checkbox'
          checked={weapon.versatility}
          onChange={(e) => setWeapon({ ...weapon, versatility: e.target.checked })}
        />
      </div>

      {
        weapon.versatility && (
          <div>
            <label htmlFor='weaponDamageVersatile'>Dano Versátil</label>
            <input
              id='weaponDamageVersatile'
              type='text'
              value={weapon.damageVersatile}
              onChange={(e) => setWeapon({ ...weapon, damageVersatile: e.target.value })}
            />
          </div>
        )
      }

      <div>
        <label htmlFor='weaponAttackBonus'>Bonus de Ataque</label>
        <input
          id='weaponAttackBonus'
          type='number'
          value={weapon.attackBonus}
          onChange={(e) => setWeapon({ ...weapon, attackBonus: +e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='weaponDamageBonusFlat'>Bônus de dano fixo</label>
        <input
          id='weaponDamageBonusFlat'
          type='number'
          value={weapon.damageBonusFlat}
          onChange={(e) => setWeapon({ ...weapon, damageBonusFlat: +e.target.value })}
        />
      </div>


      <div>
        <label htmlFor="BonusDice">Dado Adicional? </label>
        <input
          id='BonusDice'
          type='checkbox'
          checked={weapon.bonusDice}
          onChange={(e) => setWeapon({ ...weapon, bonusDice: e.target.checked })}
        />
      </div>

      {
        weapon.bonusDice && (
          <div>
            <label htmlFor='weaponDamageBonusDice'>Bônus de dano de dado</label>
            <input
              id='weaponDamageBonusDice'
              type='text'
              value={weapon.damageBonusDice}
              onChange={(e) => setWeapon({ ...weapon, damageBonusDice: e.target.value })}
            />
          </div>
        )
      }

      {
        weapon.bonusDice && (
          <div>
            <label htmlFor='weaponDamageTypeBonus'>Tipo de dano Adicional</label>
            <input
              id='weaponDamageTypeBonus'
              type='text'
              value={weapon.damageTypeBonus}
              onChange={(e) => setWeapon({ ...weapon, damageTypeBonus: e.target.value })}
            />
          </div>
        )
      }

      <div>
        <label htmlFor='weaponDamageType'>Tipo de dano</label>
        <input
          id='weaponDamageType'
          type='text'
          value={weapon.damageType}
          onChange={(e) => setWeapon({ ...weapon, damageType: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='weaponRange'>Alcance</label>
        <input
          id='weaponRange'
          type='text'
          value={weapon.range}
          placeholder='Corpo a corpo'
          onChange={(e) => setWeapon({ ...weapon, range: e.target.value })}
        />
      </div>

      <div className='Btn-Form'>
        {
          editWeapon && (
            <button onClick={props.removeWeapon}>
              <img src='https://super.so/icon/light/trash.svg' alt="show info" />
            </button>
          )
        }


        <button onClick={handleSaveWeapon}>
          {
            newWeapon ? 
            <img src='https://super.so/icon/light/save.svg' alt="show info" /> :
            <img src='https://super.so/icon/light/edit.svg' alt="show info" />
          }
        </button>
      </div>


    </WeaponFormS>
  )
}
