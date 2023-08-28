import React from 'react'
import AppContext from '../../../Context/AppContext';
import { BasicFormS } from './Styles/BasicForm';


export default function BasicForm(props: any) {
  const { type, newItem=false, editItem=false, index=0, saveItem } = props;
  const { notes, setNotes } = React.useContext(AppContext);

  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (editItem) {
      setValue(notes[type][index]);
    }
  }, [editItem, index, notes, type]);

  const handleSave = () => {
    if (newItem) {
      const newNotes = notes[type] ? [...notes[type], value] : [value];
      setNotes({ ...notes, [type]: [...newNotes] });
      setValue('');

      return saveItem();
    }

    const editedItem = value;

    const updatedList = [...notes[type]];
    updatedList[index] = editedItem;

    setNotes({ ...notes, [type]: updatedList });

    return saveItem();

  }


  return (
    <BasicFormS>
        <div>
          <input
            type='text'
            id={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

        </div>

        <div className='Buttons'>
          {
            editItem && (
              <button type='button' onClick={() => props.removeItem()}>
                <img src='https://super.so/icon/light/trash.svg' alt="remove" />
              </button>
            )
          }

          <button type='button' onClick={handleSave}>
            <img src='https://super.so/icon/light/save.svg' alt="save" />
          </button>
        </div>

    </BasicFormS>
  )
}
