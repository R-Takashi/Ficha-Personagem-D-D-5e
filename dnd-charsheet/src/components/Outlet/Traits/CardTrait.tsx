import React from 'react'
import TraitForm from './TraitForm';
import { BasicTraitCardS } from './Styles/BasicTraitCard';
import AppContext from '../../../Context/AppContext';


export default function CardTrait(props: any) {
  const { proficiencyBonus } = React.useContext(AppContext);
  const { name, removeTrait, type, index } = props;
  const [toEdit, setToEdit] = React.useState(false);

  return (
    <BasicTraitCardS>
        {
          toEdit ? (
            <TraitForm
              type={type}
              index={index}
              editTrait
              saveTrait={() => setToEdit(!toEdit)}
              removeTrait={removeTrait}
            />
          ) : (
            <>
              <span>{name}
                {
                  type === 'proficiencies' && (
                    <span className='proficiency'>
                      +{proficiencyBonus}
                    </span>
                  )
                }
              </span>
              <button type='button' onClick={() => setToEdit(!toEdit)}>
                <img src='https://super.so/icon/light/edit.svg' alt="edit" />
              </button>
            </>
          )
        }
    </BasicTraitCardS>
  )
}
