import React from 'react'
import SkillCard from './SkillCard';
import { SkillList } from './Styles/SkillList';

export default function SkillSection(props: any) {
  const { title, listSkill, attr } = props;

  return (
    <SkillList>
      <h4>{title}</h4>
      <ul>
        { listSkill.map((skill: any) => {
          return (
            <SkillCard skill={skill} key={skill.name} attr={attr} />
          )
        })}
      </ul>
    </SkillList>
  )
}
