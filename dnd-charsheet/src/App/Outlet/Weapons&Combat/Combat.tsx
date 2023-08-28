import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import ResourceSkill from './Resources/Resource'
import WeaponList from './Weapons/Weapon'
import SkillList from './Skills/Skill'
import { CombatS } from './CombatStyles'


export default function Combat() {
  const { tab } = useContext(AppContext);

  if (tab !== 'Combate') return null;

  return (
    <CombatS>
      <h1 className='Title'>Combate & Recursos</h1>

      <WeaponList />

      <ResourceSkill />

      <SkillList />

    </CombatS>
  )
}
