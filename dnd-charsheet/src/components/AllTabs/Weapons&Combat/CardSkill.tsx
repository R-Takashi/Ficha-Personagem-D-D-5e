import React from 'react'
import AppContext from '../../../Context/AppContext';


export default function CardSkill(props: any) {
  const { index } = props;
  const { listSkills, setListSkills, listResources, setListResources } = React.useContext(AppContext);
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);
  const resource = listResources.findIndex((res: any) => res.name === listSkills[index].resource);

  const handleEdit = () => {
    setToEdit(!toEdit);
    setShowDescription(!showDescription);
  }


  return (
    <div>
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
                value={listSkills[index].name}
                onChange={(e) => {
                  const newList = [...listSkills];
                  newList[index].name = e.target.value;
                  setListSkills(newList);
                }}
              />
            </label>

            <label htmlFor='description'>
              Descrição
              <input
                type='text'
                id='description'
                value={listSkills[index].description}
                onChange={(e) => {
                  const newList = [...listSkills];
                  newList[index].description = e.target.value;
                  setListSkills(newList);
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
                      value={listSkills[index].resourceDrain}
                      onChange={(e) => {
                        const newList = [...listSkills];
                        newList[index].resourceDrain = Number(e.target.value);
                        setListSkills(newList);
                      }}
                    />
                  </label>

                </div>
              )
            }

            <button type='button' onClick={handleEdit}>Salvar</button>
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
      
    </div>
  )
}
