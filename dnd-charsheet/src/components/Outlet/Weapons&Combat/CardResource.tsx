import React from 'react'
import AppContext from '../../../Context/AppContext';


export default function CardResource(props :any) {
  const { index, name, removeResource } = props;
  const { listResources, setListResources } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);
  const [resource, setResource] = React.useState({
    name: '',
    current: '',
    max: '',
  });

  React.useEffect(() => {
    setResource(listResources[index]);
  }, [index, listResources]);


  const handleSaveResource = (index: number) => {
    if (toEdit) {
      const editedResource = { ...resource };
      const updatedList = [...listResources];
      updatedList[index] = editedResource;

      setListResources(updatedList);
    }

    setToEdit(!toEdit);
  }

  const handleRemove = () => {
    setToEdit(!toEdit);
    removeResource();
  }


  return (
    <div>

      {
        toEdit ? (
          <div>
            <label htmlFor='name'>
              Nome
              <input
                type='text'
                id='name'
                value={resource.name}
                onChange={(e) => setResource({ ...resource, name: e.target.value })}
              />
            </label>

            <label htmlFor='current'>
              Quantidade Atual
              <input
                type='number'
                id='current'
                value={resource.current}
                min={0}
                max={resource.max}
                onChange={(e) => setResource({ ...resource, current: e.target.value })}
              />
            </label>

            <label htmlFor='max'>
              Quantidade
              <input
                type='number'
                id='max'
                value={resource.max}
                min={0}
                onChange={(e) => setResource({ ...resource, max: e.target.value })}
              />
            </label>

            <button
              type='button'
              onClick={() => { handleRemove() }}
            >
              Remover Recurso
            </button>

          </div>
        ) : (
          <div>
            <p>{name}</p>
            <p>{resource.current}/{resource.max}</p>
          </div>
        )
      }
      

      <button
        type='button'
        onClick={() => {
          handleSaveResource(index);
        }}
      >
        {toEdit ? 'Salvar' : 'Editar'}
      </button>
      
    </div>
  )
}
