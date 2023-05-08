import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import CardTrait from './CardTrait';

export default function GeneralTraits() {
  const { listTraits, setListTraits } = useContext(AppContext);
  const [trait, setTrait] = React.useState({
    name: '',
    description: '',
  });


  return (
    <div>
      <h2>Características</h2>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          value={trait.name}
          onChange={(e) => setTrait({...trait, name: e.target.value})}
        />

        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          value={trait.description}
          onChange={(e) => setTrait({...trait, description: e.target.value})}
        />

        <button
          type="button"
          onClick={() => {
            setListTraits([...listTraits, trait]);
            setTrait({
              name: '',
              description: '',
            })
          }}
        >
          Adicionar
        </button>

      </div>

      <div>
        <ul>
          {listTraits.map((trait: any, index: number) => (
            <CardTrait
              key={index}
              index={index}
              name={trait.name}
              description={trait.description}
            />
          ))}
        </ul>
      </div> 

    </div>
  )
}
