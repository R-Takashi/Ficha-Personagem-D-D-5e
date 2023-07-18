import React from 'react'
import CardTrait from './CardTrait'
import TraitForm from './TraitForm';
import { BasicTrait } from './Styles/BasicTraits';


export default function ListTrait(props: any) {
  const { title, type, listTrait, setListTrait } = props;
  const [ newTrait, setNewTrait ] = React.useState(false);
  const [showTrait, setShowTrait] = React.useState(false);

  const handleRemoveTrait = (index: number) => {
    const updatedList = [...listTrait];
    updatedList.splice(index, 1);
    setListTrait(updatedList);
  }


  return (
    
    <BasicTrait>
      <header>
        <h2
          className={`${showTrait ? 'Listed' : ''}`}
          onClick={() => setShowTrait(!showTrait)}
        >{title}</h2>

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
              type={type}
              newTrait
              saveTrait={() => setNewTrait(!newTrait)}
            />
          )
        }

      </header>


      <div className={`${showTrait ? 'DisplayOn' : 'DisplayOff'}`}>
        {listTrait.map((trait: any, index: number) => (
          <CardTrait
            key={index}
            index={index}
            name={trait.name}
            type={type}
            removeTrait={() => handleRemoveTrait(index)}
          />
        ))}
      </div>
    </BasicTrait>
  )
}
