import React from 'react'
import TraitForm from './TraitForm';


export default function CardTrait(props: any) {
  const { name, removeTrait, type, index } = props;
  const [toEdit, setToEdit] = React.useState(false);

  return (
    <li>
      <div className='Trait'>
        {
          toEdit ? (
            <TraitForm
              type={type}
              index={index}
              editTrait
              saveTrait={() => setToEdit(!toEdit)}
            />
          ) : (
            <>
              <span>{name}</span>
              <button type='button' onClick={() => setToEdit(!toEdit)}>Editar</button>
              <button type='button' onClick={removeTrait}>X</button>
            </>
          )
        }
      </div>
    </li>
  )
}
