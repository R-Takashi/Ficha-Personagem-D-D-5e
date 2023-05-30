import React from 'react'
import AppContext from '../../../Context/AppContext'
import CardResource from './CardResource';


export default function ResourceList() {
  const { listResources, setListResources, resetResources } = React.useContext(AppContext);
  const [resource, setResource] = React.useState({ name: '', current: '', max: '' });
  const [newResource, setNewResource] = React.useState(false);
  

  return (
    <div>

      <button
        type='button'
        onClick={() => {
          setNewResource(!newResource);
        }}
      >
        {newResource ? 'Cancelar' : 'Novo Recurso'}
      </button>

      {
        newResource && (
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

            <label htmlFor='max'>
              Quantidade
              <input
                type='number'
                id='max'
                value={resource.max}
                onChange={(e) => setResource({ ...resource, current: e.target.value ,max: e.target.value })}
              />
            </label>

            <button
              type='button'
              disabled={resource.name === '' || resource.max === ''}
              onClick={() => {
                setListResources([...listResources, resource]);
                setResource({ name: '', current: '', max: '' });
                setNewResource(!newResource);
              }}
            >
              Adicionar
            </button>
          </div>
        )
      }

      {
        listResources.map((res: any, index: number) => (
          res.name !== 'Proficiência Bonus' &&
          <CardResource
            key={index}
            index={index}
            name={res.name}
            removeResource={() => {
              const updatedList = [...listResources];
              updatedList.splice(index, 1);
              setListResources(updatedList);
            }}
          />
        ))
      }

      <button
        type='button'
        onClick={() => {
          resetResources();
        }}
      >
        Restaurar recursos (temporario)
      </button>

    </div>
  )
}
