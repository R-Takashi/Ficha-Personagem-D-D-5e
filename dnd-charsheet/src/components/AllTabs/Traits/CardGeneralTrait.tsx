import React from 'react'
import TraitForm from './TraitForm';


export default function CardGeneralTrait(props: any) {
  const { name, description, removeTrait } = props;
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <li>
      <div className='Trait'>
        {
          toEdit ? (
            <TraitForm
              type='general'
              index={props.index}
              saveTrait={() => setToEdit(!toEdit)}
              editTrait
            />
          ) : (
            <>
              <span>{name}</span>
              <button type='button' onClick={() => setShowDescription(!showDescription)}>+</button>
                {
                  showDescription && (
                    <>
                      <span>{description}</span>
                    </>
                )}
              <button type='button' onClick={() => setToEdit(!toEdit)}>Editar</button>
              <button type='button' onClick={removeTrait}>X</button>
            </>
          )
        }
      </div>
    </li>
  )
}
