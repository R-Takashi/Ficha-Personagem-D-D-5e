import React from 'react'
import AppContext from '../../../Context/AppContext';
import CardSkill from './CardSkill';
import SkillForm from './SkillForm';
import { Skills } from './Styles/Skills';


export default function SkillList() {
  const { listSkills } = React.useContext(AppContext);
  const [newSkill, setNewSkill] = React.useState(false);
  const [showSkill, setShowSkill] = React.useState(false);

  return (
    <Skills>

      <header>
        <h2
          className={`${showSkill ? 'Listed' : ''}`}
          onClick={() => setShowSkill(!showSkill)}
        >Habilidades</h2>
        
        <button
          type='button'
          onClick={() => setNewSkill(!newSkill)}
        >
          {
            newSkill ? (
              <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
            ) : (
              <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
            )
          }
        </button>
     
        {
          newSkill && (
            <SkillForm
              newSkill
              saveSkill={() => setNewSkill(!newSkill)}
            />
          )
        }
      </header>


      <div className={`${showSkill ? 'DisplayOn' : 'DisplayOff'}`}>
        {
          listSkills.map((skill: any, index: number) => (
            <CardSkill
              key={skill.name}
              index={index}
            />
        ))}
      </div>
      
    </Skills>
  )
}
