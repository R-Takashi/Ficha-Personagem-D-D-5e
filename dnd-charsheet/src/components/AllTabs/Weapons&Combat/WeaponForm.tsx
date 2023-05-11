import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'


export default function WeaponForm(props: any) {
  const { index=0, newWeapon=false, editWeapon=false, saveWeapon } = props;

  const { listWeapons, setListWeapons, attributes } = useContext(AppContext);

  const [weapon, setWeapon] = React.useState({ 
    name: '',
    attackBonus: 0,
    damage: '',
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
        attackBonus: 0,
        damage: '',
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

  console.log(weapon);
  


  return (
    <div>

      <label htmlFor='weaponName'>Nome</label>
      <input
        id='weaponName'
        type='text'
        value={weapon.name}
        onChange={(e) => setWeapon({ ...weapon, name: e.target.value })}
      />

      <label htmlFor='weaponDamage'>Dano</label>
      <input
        id='weaponDamage'
        type='text'
        value={weapon.damage}
        onChange={(e) => setWeapon({ ...weapon, damage: e.target.value })}
      />

      <label htmlFor='weaponAttackBonus'>Atributo</label>

      <select
        id='weaponAttackBonus'
        value={weapon.attackBonus}
        onChange={(e) => setWeapon({ ...weapon, attackBonus: Number(e.target.value) })}
      >
        <option value={0}>Selecione</option>
        {
          attributes.map((attribute: any, index: number) => (
            <option key={attribute.name} value={index}>
              {attribute.name}
            </option>
          ))
        }

      </select>

      <label htmlFor='weaponDamageType'>Tipo de dano</label>
      <input
        id='weaponDamageType'
        type='text'
        value={weapon.damageType}
        onChange={(e) => setWeapon({ ...weapon, damageType: e.target.value })}
      />

      <label htmlFor='weaponRange'>Alcance</label>
      <input
        id='weaponRange'
        type='text'
        value={weapon.range}
        onChange={(e) => setWeapon({ ...weapon, range: e.target.value })}
      />

      <label htmlFor='weaponProf'>Proficiente</label>
      <input
        id='weaponProf'
        type='checkbox'
        checked={weapon.prof}
        onChange={(e) => setWeapon({ ...weapon, prof: e.target.checked })}
      />

      <button onClick={handleSaveWeapon}>
        {newWeapon ? 'Salvar' : 'Editar'}
      </button>

    </div>
  )
}
