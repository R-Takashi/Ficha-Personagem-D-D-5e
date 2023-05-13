import React from 'react'
import AppContext from '../../../Context/AppContext';
import CardSkill from './CardSkill';
import SkillForm from './SkillForm';


export default function SkillList() {
  const { listSkills } = React.useContext(AppContext);
  const [newSkill, setNewSkill] = React.useState(false);

  return (
    <div>
      <button
        type='button'
        onClick={() => setNewSkill(!newSkill)}
      >
        Nova habilidade
      </button>

      {
        newSkill && (
          <SkillForm
            newSkill
            saveSkill={() => setNewSkill(!newSkill)}
          />
        )
      }

      <ul>
        {listSkills.map((skill: any, index: number) => (
          <CardSkill
            key={skill.name}
            index={index}
          />
        ))}
      </ul>

      
    </div>
  )
}
