import React from 'react'


export default function ListTrait(props: any) {
  const { title, listTrait, setListTrait } = props;
  const [ toEdit, setToEdit ] = React.useState(false);
  const [ editTrait, setEditTrait ] = React.useState('');
  const [ trait, setTrait ] = React.useState('');

  const addTrait = () => {
    setListTrait([...listTrait, trait]);
    setTrait('');
  }

  const removeTrait = (index: number) => {
    setListTrait(listTrait.filter((_: any, i: number) => i !== index));
  }

  const handleEditTrait = (index: number) => {
    if (toEdit) {
      const updatedList = [...listTrait];
      updatedList[index] = trait;

      setListTrait(updatedList);

      setEditTrait('');

      return setToEdit(!toEdit);
    }

    setEditTrait(listTrait[index]);

    return setToEdit(!toEdit);
  }


  return (
    <div>
      <h2>{title}</h2>

      <div>
        <ul>
          {
            listTrait?.map((trait: any, index: number) => (
              <li key={index}>
                <div>
                  { toEdit ? (
                    <input
                      type='text'
                      value={trait}
                      onChange={(e) => setEditTrait(e.target.value)}
                    />
                  ) : (
                    trait
                  )}
                </div>
                  <button type='button' onClick={() => handleEditTrait(index)}>Editar</button>
                  <button type='button' onClick={() => removeTrait(index)}>X</button>
              </li>
            ))
          }

          <li>
            <div>
              <input
                type='text'
                value={trait}
                onChange={(e) => setTrait(e.target.value)}
              />
              <button type='button' onClick={addTrait}>Adicionar</button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}
