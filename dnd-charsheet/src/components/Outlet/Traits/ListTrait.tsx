import React from 'react'
import CardTrait from './CardTrait'
import TraitForm from './TraitForm';


export default function ListTrait(props: any) {
  const { title, type, listTrait, setListTrait } = props;
  const [ newTrait, setNewTrait ] = React.useState(false);

  const handleRemoveTrait = (index: number) => {
    const updatedList = [...listTrait];
    updatedList.splice(index, 1);
    setListTrait(updatedList);
  }


  return (
    <div>
      <h2>{title}</h2>

      <ul>
        {listTrait.map((trait: any, index: number) => (
          <CardTrait
            key={index}
            index={index}
            name={trait.name}
            type={type}
            removeTrait={() => handleRemoveTrait(index)}
          />
        ))}

        {
          newTrait ? (
            <li>
              <TraitForm
                type={type}
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
  )
}
