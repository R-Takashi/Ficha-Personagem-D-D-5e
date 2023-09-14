import React from 'react'
import AppContext from '../../../../../Context/AppContext';
import SkillForm from './SkillForm';
import { SkillCard } from './Styles/SkillCard';


export default function CardSkill(props: any) {
  const {
    name,
    description,
    resourceDrain,
    consumeResource,
    current,
  } = props;
  const { listSkills, listResources, setListResources, setListSkills } = React.useContext(AppContext);
  const indexSkill = listSkills.findIndex((skill: any) => skill?.name === name);
  const resource = listResources.findIndex((resource: any) => resource?.name === listSkills[indexSkill].resource);
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);


  React.useEffect(() => {
    if (listSkills[indexSkill]?.resource === 'Proficiência Bonus' && listSkills[indexSkill]?.max === 0) {
      const updatedlist = [...listSkills];
      updatedlist[indexSkill] = {
        ...updatedlist[indexSkill],
        current: listResources[resource]?.current,
        max: listResources[resource]?.max,
      }
      setListSkills(updatedlist);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleEdit = () => {
    setToEdit(true);
    setShowDescription(false);
  }

  const checkDisabled = (consumeResource: boolean) => {
    if (!consumeResource) {
      return false;
    }

    if (listResources[resource]?.name === 'Proficiência Bonus') {
      
      return Math.floor(listSkills[indexSkill]?.current / listSkills[indexSkill].resourceDrain) === 0;
    }

    return Math.floor(listResources[resource]?.current / listSkills[indexSkill].resourceDrain) === 0;
  }

  const handleUseResource = () => {
    if (listResources[resource].name === 'Proficiência Bonus') {
      const updatedlist = [...listSkills];
      updatedlist[indexSkill] = {
        ...updatedlist[indexSkill],
        current: updatedlist[indexSkill].current -= resourceDrain,
      }
      setListSkills(updatedlist);
    } else {
      const newList = [...listResources];
      newList[resource].current -= resourceDrain;
      setListResources(newList);
    }
  }

  const removeSkill = () => {
    const newList = [...listSkills];
    newList.splice(indexSkill, 1);
    setListSkills(newList);
  }


  return toEdit ? (
    <SkillForm
      index={indexSkill}
      editSkill
      saveSkill={() => setToEdit(false)}
      removeSkill={removeSkill}
    />
  ) : (
    <SkillCard>
      <div className={ consumeResource && 'WithResource'}>
        <p>{name}</p>

        { consumeResource && (
          <>
            <p>Usar:</p>
            <button
              type='button'
              disabled={checkDisabled(consumeResource)}
              onClick={() => handleUseResource()}
            >
              <img src='https://super.so/icon/light/disc.svg' alt="show info" />
            </button>
          </>
        )}
        
      </div>

      {
        listSkills[indexSkill]?.resource && (
          <div className='Resources'>
            <span>{listResources[resource].name}</span>
            <span>Usos: { 
              listResources[resource].name === 'Proficiência Bonus' ? (
                current
              ) : (
                Math.floor(listResources[resource].current / listSkills[indexSkill].resourceDrain)
              )
            }
            </span>
          </div>
        )
      }

      {
        showDescription && (
          <div>
            <pre>{description}</pre>
    
            <button type='button' onClick={handleEdit}>
              <img src='https://super.so/icon/light/edit.svg' alt="show info" />
            </button>
    
          </div>
        )
      }

      <button type='button' onClick={() => setShowDescription(!showDescription)}>
        {
          showDescription ? (
            <img src='https://super.so/icon/light/chevron-up.svg' alt="show info" />
          ) : (
            <img src='https://super.so/icon/light/chevron-down.svg' alt="show info" />
          )
        }
      </button>
    </SkillCard>
  )
}
