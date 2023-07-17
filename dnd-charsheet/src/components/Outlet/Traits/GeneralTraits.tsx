import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import CardGeneralTrait from './CardGeneralTrait';
import TraitForm from './TraitForm';
import { GeneralTraitS } from './Styles/GeneralTrait';

export default function GeneralTraits() {
  const { listTraits, setListTraits } = useContext(AppContext);
  const [newTrait, setNewTrait] = React.useState(false);
  const [showTrait, setShowTrait] = React.useState(false);

  const handleRemoveTrait = (index: number) => {
    const updatedList = [...listTraits];
    updatedList.splice(index, 1);
    setListTraits(updatedList);
  }


  return (
    <GeneralTraitS>

      <header>
      
        <h2
          className={`${showTrait ? 'Listed' : ''}`}
          onClick={() => setShowTrait(!showTrait)}
        >Características</h2>

        <button
          type='button'
          onClick={() => setNewTrait(!newTrait)}
        >
          {
            newTrait ? (
              <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
            ) : (
              <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
            )
          }
        </button>

        {
          newTrait && (
            <TraitForm
              type='general'
              newTrait
              saveTrait={() => setNewTrait(!newTrait)}
            />
          )
        }

      </header>

      <div className={`${showTrait ? 'DisplayOn' : 'DisplayOff'}`}>
          {listTraits.map((trait: any, index: number) => (
            <CardGeneralTrait
              key={index}
              index={index}
              name={trait.name}
              description={trait.description}
              removeTrait={() => handleRemoveTrait(index)}
            />
          ))}
      </div> 

    </GeneralTraitS>
  )
}
