import React from 'react'
import AppContext from '../../../Context/AppContext'
import CardResource from './CardResource';


export default function ResourceSkill() {
  const { listResources, setListResources, resetResources } = React.useContext(AppContext);
  const [resource, setResource] = React.useState({ name: '', current: '', max: '' });
  

  return (
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

      <button
        type='button'
        onClick={() => {
          setListResources([...listResources, resource]);
          setResource({ name: '', current: '', max: '' });
        }}
      >
        Adicionar
      </button>

      {
        listResources.map((res: any, index: number) => (
          res.name !== 'Proficiencia Bonus' &&
          <CardResource
            key={index}
            index={index}
            name={res.name}
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
