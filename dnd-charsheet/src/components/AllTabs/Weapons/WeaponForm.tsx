import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'


export default function WeaponForm(props: any) {
  const { index=0, newWeapon=false, editWeapon=false, saveWeapon } = props;

  const { listWeapons, setListWeapons } = useContext(AppContext);

  const [weapon, setWeapon] = React.useState({ 
    name: '', 
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
      setWeapon({ name: '', damage: '', damageType: '', range: '', prof: false });

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
