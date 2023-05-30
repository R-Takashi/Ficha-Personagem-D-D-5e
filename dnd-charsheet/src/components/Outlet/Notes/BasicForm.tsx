import React from 'react'
import AppContext from '../../../Context/AppContext';



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
    <div>
      <form>
        <label htmlFor={type}>
          <input
            type='text'
            id={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>

        <button type='button' onClick={handleSave}>Salvar</button>
      </form>
    </div>
  )
}
