import React from 'react'
import AppContext from '../../../Context/AppContext';
import CardSkill from './CardSkill';


type Skill = {
  name: string;
  description: string;
  resource?: string;
  resourceDrain?: number;
}

const SKILL = {
  name: '',
  description: '',
  resource: '',
  resourceDrain: 1,
} as Skill;


export default function SkillList() {
  const { listSkills, setListSkills, listResources } = React.useContext(AppContext);
  const [newSkill, setNewSkill] = React.useState({...SKILL});
  const [useResource, setUseResource] = React.useState(false);
  
  const handleCheck = newSkill.name === '' || newSkill.description === '' || (useResource && (newSkill.resource === '' || newSkill.resourceDrain === 0));


  return (
    <div>

      <label htmlFor='skillName'>Nome</label>
      <input
        type='text'
        id='skillName'
        value={newSkill.name}
        onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
      />

      <label htmlFor='skillDescription'>Descrição</label>
      <input
        type='text'
        id='skillDescription'
        value={newSkill.description}
        onChange={(e) => setNewSkill({...newSkill, description: e.target.value})}
      />

      <label htmlFor='skillResource'>Recurso ?</label>
      <input
        type='checkbox'
        id='skillResource'
        checked={useResource}
        onChange={(e) => setUseResource(e.target.checked)}
      />

      {useResource && (
        <>
          <select
            name='resource'
            id='resource'
            onChange={(e) => setNewSkill({...newSkill, resource: e.target.value})}
          >
            <option value=''>Selecione um recurso</option>
            {listResources.map((resource: any) => (
              <option key={resource.name} value={resource.name}>
                {resource.name}
              </option>
            ))}
          </select>

          <label htmlFor='resourceDrain'>Gasto por uso</label>
          <input
            type='number'
            id='resourceDrain'
            value={newSkill.resourceDrain}
            onChange={(e) => setNewSkill({...newSkill, resourceDrain: Number(e.target.value)})}
          />
        </>

        
      )}

      <button
        type='button'
        disabled={handleCheck}
        onClick={() => {
          setListSkills([...listSkills, newSkill]);
          setNewSkill({...SKILL});
        }}
      >
        Adicionar
      </button>

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
