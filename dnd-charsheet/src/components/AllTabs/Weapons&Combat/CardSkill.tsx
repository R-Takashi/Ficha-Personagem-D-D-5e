import React from 'react'
import AppContext from '../../../Context/AppContext';
import styled from 'styled-components';

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
  const { listSkills, setListSkills, listResources, setListResources } = React.useContext(AppContext);
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);
  const [editedSkill, setEditedSkill] = React.useState({
    name: '',
    description: '',
    resourceDrain: '',
  });

  const resource = listResources.findIndex((res: any) => res.name === listSkills[index].resource);

  const handleEdit = () => {
    setEditedSkill({
      name: listSkills[index].name,
      description: listSkills[index].description,
      resourceDrain: listSkills[index]?.resourceDrain,
    });
    setToEdit(!toEdit);
    setShowDescription(!showDescription);
  }

  const handleSave = () => {
    const newList = [...listSkills];
    const edited = listSkills[index].resource ? {
      ...newList[index],
      ...editedSkill
    } : {
      ...newList[index],
      name: editedSkill.name,
      description: editedSkill.description,
    }

    newList[index] = edited;
    setListSkills(newList);
    setToEdit(!toEdit);
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
          <div>
            <label htmlFor='name'>
              Nome
              <input
                type='text'
                id='name'
                value={editedSkill.name}
                onChange={(e) => {
                  setEditedSkill({ ...editedSkill, name: e.target.value });
                }}
              />
            </label>

            <label htmlFor='description'>
              Descrição
              <input
                type='text'
                id='description'
                value={editedSkill.description}
                onChange={(e) => {
                  setEditedSkill({ ...editedSkill, description: e.target.value });
                }}
              />
            </label>

            {
              listSkills[index].resource && (
                <div>
                  <label htmlFor='resourceDrain'>
                    Dreno de Recurso
                    <input
                      type='number'
                      id='resourceDrain'
                      value={editedSkill.resourceDrain}
                      onChange={(e) => {
                        setEditedSkill({ ...editedSkill, resourceDrain: e.target.value });
                      }}
                    />
                  </label>
                </div>
              )
            }

            <button type='button' onClick={handleSave}>Salvar</button>
          </div>
        )
      }

      <button type='button' onClick={() => setShowDescription(!showDescription)}>+</button>

      {
        listSkills[index].resource && (
          <div>
            <span>Recurso: {listResources[resource].name}</span>
            <p>Usos restantes: { Math.floor(listResources[resource].current / listSkills[index].resourceDrain) }</p>

            <button
              type='button'
              disabled={Math.floor(listResources[resource].current / listSkills[index].resourceDrain) === 0}
              onClick={() => {
                const newList = [...listResources];
                newList[resource].current -= listSkills[index].resourceDrain;
                setListResources(newList);
              }
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
