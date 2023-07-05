import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import ResourceSkill from './ResourceList'
import WeaponList from './WeaponList'
import SkillList from './SkillList'
import { CombatS } from './Styles/CombatS'


export default function Combat() {
  const { tab } = useContext(AppContext);

  if (tab !== 'Combate') return null;

  return (
    <CombatS>
      <h1 className='Title'>Combate & Recursos</h1>

      <WeaponList />

      <ResourceSkill />


      <div>
        <h2>Habilidades</h2>

        <SkillList />

      </div>

      

    </CombatS>
  )
}
