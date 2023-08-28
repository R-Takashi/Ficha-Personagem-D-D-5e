import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'



export default function SkillCard(props: any) {
  const { skill, attr } = props;
  const { skills, setSkills, proficiencyBonus } = useContext(AppContext);

  const changeProficiency = () => {
    const proficiencyLevel = ['notProf', 'prof', 'halfProf', 'expert'];
    const proficiencyValue = [
      skill.baseMod,
      (skill.baseMod + proficiencyBonus), 
      (skill.baseMod + Math.floor(proficiencyBonus / 2)), 
      (skill.baseMod + (proficiencyBonus * 2))
    ]

    let index = proficiencyLevel.indexOf(skill.prof) + 1;

    index = index > 3 ? 0 : index;

    const updateSkill = {
      ...skill,
      prof: proficiencyLevel[index],
      value: proficiencyValue[index]
    }


    const updateSkills = skills[attr].map((skill: any) => {
      if (skill.name === updateSkill.name) {
        return updateSkill;
      }
      return skill;
    })

    return setSkills({...skills, [attr]: updateSkills})
  }

  const iconProf = () => {
    switch (skill.prof) {
      case 'halfProf':
        return <div className='CircleHalf'/>
      case 'prof':
        return <div className='CircleFull'/>
      case 'expert':
        return <div className='Star'/>
      default:
        return <div className='Circle'/>
    }
  }


  return (
    <li>
      <span className='name'>{skill.name}</span>
      <span className='value'>{skill.value}</span>
      <button
        type='button'
        className='prof'
        onClick={changeProficiency}
      >
        {iconProf()}
      </button>
    </li>
  )
}
