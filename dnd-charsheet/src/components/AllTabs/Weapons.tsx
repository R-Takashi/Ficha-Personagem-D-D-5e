import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import WeaponForm from './Weapons&Combat/WeaponForm'
import CardWeapon from './Weapons&Combat/CardWeapon'
import ResourceSkill from './Weapons&Combat/ResourceList'
import SkillList from './Weapons&Combat/SkillList'


export default function Notes() {
  const { tab, listWeapons, setListWeapons } = useContext(AppContext);
  const [newWeapon, setNewWeapon] = React.useState(false);
  
  const handleRemoveWeapon = (index: number) => {
    const updatedList = [...listWeapons];
    updatedList.splice(index, 1);
    setListWeapons(updatedList);
  }


  if (tab !== 'Combate') return null;

  return (
    <div>
      <h1>Armas & combate</h1>

      <div>
        <h2>Recursos</h2>

        <ResourceSkill />
      </div>

      <div>
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
          {newWeapon ? 'Cancelar' : 'Nova arma'}
        </button>

        {newWeapon && (
          <WeaponForm
            newWeapon
            saveWeapon={() => setNewWeapon(false)}
          />
        )}
      </div>

      <div>
        <h2>Habilidades</h2>

        <SkillList />

      </div>

      

    </div>
  )
}
