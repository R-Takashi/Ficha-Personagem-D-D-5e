import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import CardGeneralTrait from './CardGeneralTrait';
import TraitForm from './TraitForm';

export default function GeneralTraits() {
  const { listTraits, setListTraits } = useContext(AppContext);
  const [newTrait, setNewTrait] = React.useState(false);

  const handleRemoveTrait = (index: number) => {
    const updatedList = [...listTraits];
    updatedList.splice(index, 1);
    setListTraits(updatedList);
  }


  return (
    <div>
      <h2>Características</h2>

      <div>
        <ul>
          {listTraits.map((trait: any, index: number) => (
            <CardGeneralTrait
              key={index}
              index={index}
              name={trait.name}
              description={trait.description}
              removeTrait={() => handleRemoveTrait(index)}
            />
          ))}

          {
            newTrait ? (
              <li>
                <TraitForm
                  type='general'
                  newTrait
                  saveTrait={() => setNewTrait(!newTrait)}
                />
              </li>
            ) : (

              <button type='button' onClick={() => setNewTrait(!newTrait)}>Adicionar</button>
            )

          }
        </ul>
      </div> 

    </div>
  )
}
