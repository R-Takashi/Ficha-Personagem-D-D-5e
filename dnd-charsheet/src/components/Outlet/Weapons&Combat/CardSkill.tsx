import React from 'react'
import AppContext from '../../../Context/AppContext';
import styled from 'styled-components';
import SkillForm from './SkillForm';


const CardSkillS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
`;


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
    <CardSkillS>
      <p>{listSkills[index].name}</p>

      {
        showDescription && (
          <>
            <p>{listSkills[index].description}</p>

            <button type='button' onClick={handleEdit}>Editar</button>

          </>
        )
      }

      {
        toEdit && (
          <SkillForm
            index={index}
            editSkill
            saveSkill={() => setToEdit(false)}
          />
        )
      }

      <button type='button' onClick={() => setShowDescription(!showDescription)}>+</button>

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

            <button
              type='button'
              disabled={checkDisabled()}
              onClick={() => handleUseResource()
            }
            >
              Usar
            </button>
          </div>
        )
      }
      
    </CardSkillS>
  )
}
