import React, { useState } from 'react'
import AppContext from '../../../Context/AppContext';
import CardItem from './CardItem';
import BasicForm from './BasicForm';


export default function BasicList(props: any) {
  const { title, type } = props;
  const { notes, setNotes } = React.useContext(AppContext);
  const [ newItem, setNewItem ] = useState(false);

  const handleRemove = (index: number) => {
    const newNotes = notes[type]?.filter((note: any, i: number) => i !== index);
    setNotes({ ...notes, [type]: newNotes });
  }


  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
          notes[type]?.map((note: any, index: number) => (
            <CardItem
              key={note}
              index={index}
              type={type}
              removeItem={() => handleRemove(index)}
            />
          ))
        }

        <li>
          {
            newItem ? (
              <BasicForm
                type={type}
                saveItem={() => setNewItem(!newItem)}
                newItem
              />

            ) : (
              <button 
                type='button' 
                onClick={() => setNewItem(!newItem)}
              >
                + Adicionar {title}
              </button>
            )
          }
        </li>

      </ul>

    </div>
  )
}
