import React from 'react'
import AppContext from '../../../Context/AppContext'
import CardResource from './CardResource';
import { Resources } from './Styles/Resources';


export default function ResourceList() {
  const { listResources, setListResources } = React.useContext(AppContext);
  const [resource, setResource] = React.useState({ name: '', current: '', max: '', shortRest: false, longRest: false });
  const [newResource, setNewResource] = React.useState(false);
  const [showResource, setShowResource] = React.useState(false);
  

  return (
    <Resources>

      <section>

        <header>
          {
            listResources.length > 0 && (
              <div
                className='Btn-Show'
                onClick={() => setShowResource(!showResource)}
              >
                {
                  showResource ? (
                    <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                  ) : (
                    <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                  )
                }
              </div>
            )
          }

          <h2
            className={`${showResource ? 'Listed' : ''}`}
            onClick={() => {
              setShowResource(!showResource);
            }}
          >Recursos</h2>

          <button
            type='button'
            onClick={() => {
              setNewResource(!newResource);
            }}
          >
            { 
              newResource ? (
                <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
                ) : (
                <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
                )
            }
          </button>
        </header>


        {
          newResource && (
            <form>
              <label htmlFor='name'>
                Nome
                </label>
                <input
                  type='text'
                  id='name'
                  value={resource.name}
                  onChange={(e) => setResource({ ...resource, name: e.target.value })}
                />

              <label htmlFor='max'>
                Quantidade
                </label>
                <input
                  type='number'
                  id='max'
                  value={resource.max}
                  onChange={(e) => setResource({ ...resource, current: e.target.value ,max: e.target.value })}
                />

              <label htmlFor='shortRest'>
                Recupera em descanso curto?
                </label>
                <input
                  type='checkbox'
                  id='shortRest'
                  checked={resource.shortRest}
                  onChange={(e) => setResource({ ...resource, shortRest: e.target.checked })}
                />

              <label htmlFor='longRest'>
                Recupera em descanso longo?
                </label>
                <input
                  type='checkbox'
                  id='longRest'
                  checked={resource.longRest}
                  onChange={(e) => setResource({ ...resource, longRest: e.target.checked })}
                />

              <button
                type='button'
                disabled={resource.name === '' || resource.max === ''}
                onClick={() => {
                  setListResources([...listResources, resource]);
                  setResource({ name: '', current: '', max: '', shortRest: false, longRest: false });
                  setNewResource(!newResource);
                }}
              >
                Adicionar
              </button>
            </form>
          )
        }
      </section>

      <div className={`${showResource ? 'DisplayOn' : 'DisplayOff'}`}>
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
      </div>

    </Resources>
  )
}
