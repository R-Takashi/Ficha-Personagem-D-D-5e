import React from 'react'
import AppContext from '../../../../Context/AppContext';
import CardSkill from './Components/CardSkill';
import SkillForm from './Components/SkillForm';
import { Skills } from './SkillStyle';


export default function SkillList() {
  const { listSkills } = React.useContext(AppContext);
  const [newSkill, setNewSkill] = React.useState(false);
  const [showSkill, setShowSkill] = React.useState(false);
  

  return (
    <Skills>

      <header>
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

        <h2
          className={`${showSkill ? 'Listed' : ''}`}
          onClick={() => setShowSkill(!showSkill)}
        >Habilidades</h2>

        {
          listSkills.length > 0 && (
            <div
              className='Btn-Show'
              onClick={() => setShowSkill(!showSkill)}
            >
              {
                showSkill ? (
                  <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                ) : (
                  <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                )
              }
            </div>
          )
        }

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
