import React from 'react'
import AppContext from '../../../Context/AppContext';
import SkillForm from './SkillForm';
import { SkillCard } from './Styles/SkillCard';


export default function CardSkill(props: any) {
  const { index } = props;
  const { listSkills, listResources, setListResources } = React.useContext(AppContext);
  const resource = listResources.findIndex((resource: any) => resource.name === listSkills[index].resource);
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);
  const [proficiencyResource, setProficiencyResource] = React.useState({
    current: 0,
    max: 0,
  });

  React.useEffect(() => {
    const typeResource = listResources[resource].name;

    if (typeResource === 'Proficiência Bonus') {
      setProficiencyResource({
        current: listResources[resource].current,
        max: listResources[resource].max,
      });
    }
  }, [listResources, resource]);


  const handleEdit = () => {
    setToEdit(true);
    setShowDescription(false);
  }

  const checkDisabled = () => {
    if (listResources[resource].name === 'Proficiência Bonus') {
      return Math.floor(proficiencyResource.current / listSkills[index].resourceDrain) === 0;
    }

    return Math.floor(listResources[resource].current / listSkills[index].resourceDrain) === 0;
  }

  const handleUseResource = () => {
    if (listResources[resource].name === 'Proficiência Bonus') {
      setProficiencyResource({
        current: proficiencyResource.current -= listSkills[index].resourceDrain,
        max: proficiencyResource.max,
      });
    } else {
      const newList = [...listResources];
      newList[resource].current -= listSkills[index].resourceDrain;
      setListResources(newList);
    }
  }


  return (
    <SkillCard>
       {
        toEdit ? (
          <SkillForm
            index={index}
            editSkill
            saveSkill={() => setToEdit(false)}
          />
        ) : (
          <>
            <div>
              <p>{listSkills[index].name}</p>
              <p>Usar:</p>
              <button
                type='button'
                disabled={checkDisabled()}
                onClick={() => handleUseResource()}
              >
                <img src='https://super.so/icon/light/disc.svg' alt="show info" />
              </button>
            </div>
      
            {
              listSkills[index].resource && (
                <div>
                  <span>Recurso: {listResources[resource].name}</span>
                  <p>Usos restantes: { 
                    listResources[resource].name === 'Proficiência Bonus' ? (
                      proficiencyResource.current
                    ) : (
                      Math.floor(listResources[resource].current / listSkills[index].resourceDrain)
                    )
                  }
                  </p>
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
