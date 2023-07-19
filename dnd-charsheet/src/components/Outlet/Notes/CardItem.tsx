import React from 'react'
import AppContext from '../../../Context/AppContext';
import BasicForm from './BasicForm';
import { CardItemS } from './Styles/CardItem';


export default function CardItem(props: any) {
  const { index=0, type, removeItem } = props;
  const { notes } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <CardItemS>

      {
        toEdit ? (
          <BasicForm
            index={index}
            type={type}
            saveItem={() => setToEdit(!toEdit)}
            removeItem={removeItem}
            editItem
          />

        ) : (

          <>
            <span>
              {notes[type][index]}
            </span>

            <button type='button' onClick={() => setToEdit(!toEdit)}>
              <img src='https://super.so/icon/light/edit.svg' alt="edit" />
            </button>
          </>
        )
      }
      
    </CardItemS>
  )
}
