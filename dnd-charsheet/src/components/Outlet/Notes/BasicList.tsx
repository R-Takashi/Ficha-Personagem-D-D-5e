import React, { useState } from 'react'
import AppContext from '../../../Context/AppContext';
import CardItem from './CardItem';
import BasicForm from './BasicForm';
import { BasicListS } from './Styles/BasicList';


export default function BasicList(props: any) {
  const { title, type } = props;
  const { notes, setNotes } = React.useContext(AppContext);
  const [ newItem, setNewItem ] = useState(false);
  const [ showList, setShowList ] = useState(false);

  const handleRemove = (index: number) => {
    const newNotes = notes[type]?.filter((note: any, i: number) => i !== index);
    setNotes({ ...notes, [type]: newNotes });
  }


  return (
    <BasicListS>
      <header>
        <h2
          className={`${showList ? 'Listed' : ''}`}
          onClick={() => setShowList(!showList)}
        >{title}</h2>

        <button
          type='button'
          onClick={() => setNewItem(!newItem)}
        >
          {
            newItem ? (
              <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
            ) : (
              <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
            )
          }
        </button>

        {
          newItem && (
            <BasicForm
              type={type}
              saveItem={() => setNewItem(!newItem)}
              newItem
            />
          )
        }
        
      </header>

      <div className={`${showList ? 'DisplayOn' : 'DisplayOff'}`}>

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

      </div>

    </BasicListS>
  )
}
