import React, { useContext, useEffect } from 'react'
import AppContext from '../../../../../Context/AppContext'
import { SkillFormS } from './Styles/SkillForm';


export default function SkillForm(props: any) {
  const { index=0, newSkill=false, editSkill=false, saveSkill } = props;

  const { listSkills, setListSkills, listResources } = useContext(AppContext);

  const [skill, setSkill] = React.useState({
    name: '',
    description: '',
    consumeResource: false,
    resource: '',
    resourceDrain: '',
    shortRest: false,
    longRest: false,
    activeSkill: false,
  });

  const [useResource, setUseResource] = React.useState(false);


  useEffect(() => {
    if (editSkill) {
      setSkill({...listSkills[index]});
      if (listSkills[index].resource !== '') {
        setUseResource(true);
      }
    }
  }, [editSkill, index, listSkills]);

  const handleSaveSkill = () => {
    if (newSkill) {
      if ( skill?.resource === 'Proficiência Bonus' ) {
        const skillProfResource = {
          ...skill,
          resourceDrain: 1,
          current: 0,
          max: 0,
        }

        setListSkills([...listSkills, skillProfResource]);
      } else {
        setListSkills([...listSkills, skill]);
      }

      setSkill({
        ...skill,
        name: '',
        description: '',
        consumeResource: false,
        resource: '',
        resourceDrain: '',
        shortRest: false,
        longRest: false,
      });

      setUseResource(false);

      return saveSkill();
    }

    const editedSkill = useResource ? {
      ...skill,
      resourceDrain: Number(skill.resourceDrain),
    } : {
      ...skill,
      resource: '',
      resourceDrain: 0,
    };

    const updatedList = [...listSkills];
    updatedList[index] = editedSkill;

    setListSkills(updatedList);

    return saveSkill();
  }


  return (
    <SkillFormS>

      <div>
        <label htmlFor='skillName'>Nome</label>
        <input
          type='text'
          id='skillName'
          value={skill.name}
          onChange={(e) => setSkill({...skill, name: e.target.value})}
        />
      </div>

      <div className='Description'>
        <label htmlFor='skillDescription'>Descrição</label>
        <textarea
          id='skillDescription'
          value={skill.description}
          onChange={(e) => setSkill({...skill, description: e.target.value})}
        />
      </div>

      <div className='activeSkillCheck'>
        <label htmlFor='activeSkill'>Habilidade Ativa ?</label>
        <input
          type='checkbox'
          id='activeSkill'
          checked={skill.activeSkill}
          onChange={(e) => setSkill({...skill, activeSkill: e.target.checked})}
        />
      </div>


      {
        skill.activeSkill && (
          <div className='activeSkill'>

            <div>
              <label htmlFor='skillResource'>Utiliza Recurso ?</label>
              <input
                type='checkbox'
                id='skillResource'
                checked={useResource}
                onChange={(e) => {
                  setUseResource(e.target.checked);
                  setSkill({...skill, consumeResource: e.target.checked});
                }}
              />
            </div>

            {useResource && (
              <>
                <div>
                  <select
                    name='resource'
                    id='resource'
                    value={skill.resource}
                    onChange={(e) => setSkill({...skill, resource: e.target.value})}
                  >
                    <option value=''>Selecione um recurso</option>
                    {listResources.map((resource: any, index: number) => (
                      <option key={index} value={resource.name}>
                        {resource.name}
                      </option>
                    ))}
                  </select>
                </div>

                {
                  skill.resource !== 'Proficiência Bonus' ? (
                    <div>
                      <label htmlFor='resourceDrain'>Dreno de recurso</label>
                      <input
                        type='number'
                        id='resourceDrain'
                        value={skill.resourceDrain}
                        onChange={(e) => setSkill({...skill, resourceDrain: e.target.value})}
                      />
                    </div>
                  ) : (
                    <div className='RechargeResource'>
                      <h2>Recarga</h2>

                        <div>
                          <label htmlFor='shortRest'>Descanso Curto</label>
                          <input
                            type='checkbox'
                            id='shortRest'
                            checked={skill.shortRest}
                            onChange={(e) => setSkill({...skill, shortRest: e.target.checked})}
                          />
                        </div>

                        <div>
                          <label htmlFor='longRest'>Descanso Longo</label>
                          <input
                            type='checkbox'
                            id='longRest'
                            checked={skill.longRest}
                            onChange={(e) => setSkill({...skill, longRest: e.target.checked})}
                          />
                        </div>

                    </div>
                  )
                }

              </>
            )}
        </div>

        )
      }




      <button 
        className={ editSkill ? 'SaveSkill' : ''}
        type='button' 
        onClick={handleSaveSkill}>
        <img src='https://super.so/icon/light/save.svg' alt="save" />
      </button>

      {
        editSkill && (
          <button type='button' onClick={props.removeSkill}>
            <img src='https://super.so/icon/light/trash.svg' alt="remove" />
          </button>
        )
      }

    </SkillFormS>
  )
}
