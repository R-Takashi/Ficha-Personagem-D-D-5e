import React from 'react'
import AppContext from '../../../Context/AppContext';
import BasicForm from './BasicForm';


export default function CardItem(props: any) {
  const { index=0, type, removeItem } = props;
  const { notes } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <li>

      {
        toEdit ? (
          <BasicForm
            index={index}
            type={type}
            saveItem={() => setToEdit(!toEdit)}
            editItem
          />

        ) : (

          <>
            <p>
              {notes[type][index]}
            </p>

            <button type='button' onClick={() => setToEdit(!toEdit)}>Editar</button>
            <button type='button' onClick={removeItem}>X</button>
          </>
        )
      }
      
    </li>
  )
}
