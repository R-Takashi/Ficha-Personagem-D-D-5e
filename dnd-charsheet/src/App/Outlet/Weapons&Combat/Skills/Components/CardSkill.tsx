import React from 'react'
import AppContext from '../../../../../Context/AppContext';
import SkillForm from './SkillForm';
import { SkillCard } from './Styles/SkillCard';


export default function CardSkill(props: any) {
  const { index } = props;
  const { listSkills, listResources, setListResources, setListSkills } = React.useContext(AppContext);
  const resource = listResources.findIndex((resource: any) => resource?.name === listSkills[index].resource);
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);


  React.useEffect(() => {
    if (listSkills[index]?.resource === 'Proficiência Bonus' && listSkills[index]?.max === 0) {
      const updatedlist = [...listSkills];
      updatedlist[index] = {
        ...updatedlist[index],
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
      
      return Math.floor(listSkills[index]?.current / listSkills[index].resourceDrain) === 0;
    }

    return Math.floor(listResources[resource]?.current / listSkills[index].resourceDrain) === 0;
  }

  const handleUseResource = () => {
    if (listResources[resource].name === 'Proficiência Bonus') {
      const updatedlist = [...listSkills];
      updatedlist[index] = {
        ...updatedlist[index],
        current: updatedlist[index].current -= listSkills[index].resourceDrain,
      }
      setListSkills(updatedlist);
    } else {
      const newList = [...listResources];
      newList[resource].current -= listSkills[index].resourceDrain;
      setListResources(newList);
    }
  }

  const removeSkill = () => {
    const newList = [...listSkills];
    newList.splice(index, 1);
    setListSkills(newList);
  }


  return (
    <SkillCard>
       {
        toEdit ? (
          <SkillForm
            index={index}
            editSkill
            saveSkill={() => setToEdit(false)}
            removeSkill={removeSkill}
          />
        ) : (
          <>
            <div className={ listSkills[index].consumeResource && 'WithResource'}>
              <p>{listSkills[index].name}</p>

              { listSkills[index].consumeResource && (
                <>
                  <p>Usar:</p>
                  <button
                    type='button'
                    disabled={checkDisabled(listSkills[index].consumeResource)}
                    onClick={() => handleUseResource()}
                  >
                    <img src='https://super.so/icon/light/disc.svg' alt="show info" />
                  </button>
                </>
              )}
              
            </div>
      
            {
              listSkills[index]?.resource && (
                <div className='Resources'>
                  <span>{listResources[resource].name}</span>
                  <span>Usos: { 
                    listResources[resource].name === 'Proficiência Bonus' ? (
                      listSkills[index].current
                    ) : (
                      Math.floor(listResources[resource].current / listSkills[index].resourceDrain)
                    )
                  }
                  </span>
                </div>
              )
            }

            {
              showDescription && (
                <div>
                  <pre>{listSkills[index].description}</pre>
      
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
          </>
        )
      }

      
    </SkillCard>
  )
}
