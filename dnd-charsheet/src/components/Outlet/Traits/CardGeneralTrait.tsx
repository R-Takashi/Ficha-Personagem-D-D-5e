import React from 'react'
import TraitForm from './TraitForm';
import { CardGeneralTraitS } from './Styles/CardGeneralTrait';


export default function CardGeneralTrait(props: any) {
  const { name, description, removeTrait } = props;
  const [showDescription, setShowDescription] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <CardGeneralTraitS>
      
        {
          toEdit ? (
            <TraitForm
              type='general'
              index={props.index}
              saveTrait={() => setToEdit(!toEdit)}
              editTrait
              removeTrait={removeTrait}
            />
          ) : (
            <>
              <span>{name}</span>
              {
                showDescription && (
                  <button type='button' onClick={() => setToEdit(!toEdit)}>
                    <img src='https://super.so/icon/light/edit.svg' alt="edit" />
                  </button>
                )
              }
                {
                  showDescription && (
                    <div>
                      <pre>{description}</pre>
                    </div>
                )}

              <button type='button' onClick={() => setShowDescription(!showDescription)}>
                {
                  showDescription ? (
                    <img src='https://super.so/icon/light/chevron-up.svg' alt="show info" />
                  ) : (
                    <img src='https://super.so/icon/light/chevron-down.svg' alt="show info" />
                  )
                }
              </button>
            </>
          )
        }
    </CardGeneralTraitS>
  )
}
