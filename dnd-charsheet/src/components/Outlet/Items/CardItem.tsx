import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import styled from 'styled-components'

const CardItemS = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
`;

type TItemProps = {
  index: number;
  name: string;
  quantity: number;
  toEdit?: boolean;
}

type TItemEdit = {
  name: string;
  quantity: number;
}


export default function CardItem(props: TItemProps) {
  const { index, name, quantity, toEdit} = props;
  const { listItems, setListItems } = useContext(AppContext);
  const [editItem, setEditItem] = React.useState<TItemEdit>({ name: '', quantity: 1 });

  const handleRemoveItem = (index: number) => {
    setListItems(listItems.filter((_: any, i: number) => i !== index))
  }

  const handleEditItem = (index: number) => {
    if (toEdit) {
      const newItem = {
        name: editItem.name,
        quantity: editItem.quantity,
        toEdit: false
      }

      const updatedList = [...listItems];
      updatedList[index] = newItem;
      return setListItems(updatedList);
    }

    setEditItem({
      name,
      quantity
    })

    setListItems(listItems.map((item: any, i: number) => {
      if (i === index) {
        return {
          ...item,
          toEdit: !item.toEdit
        }
      }

      return item;
    }))
  }


  return (
    <CardItemS>
      {
        toEdit ? (
          <div>
            <input
              type="text"
              value={editItem.name}
              onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
            />
            <input
              type="number"
              value={editItem.quantity}
              onChange={(e) => setEditItem({ ...editItem, quantity: +e.target.value })}
            />
          </div>
        ) : (
          <div>
            <h3>{name}</h3>
            <h3>{quantity}</h3>
          </div>
        )
      }

      <button
        type='button'
        onClick={() => handleEditItem(index)}
      >
        {toEdit ? 'Salvar' : 'Editar'}
      </button>

      <button
        type='button'
        onClick={() => handleRemoveItem(index)}
      >
        Delete
      </button>

    </CardItemS>
  )
}
