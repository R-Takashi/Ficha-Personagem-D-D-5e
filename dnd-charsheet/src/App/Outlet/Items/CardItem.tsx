import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import { CardItemS } from './Styles/CardItem';


type TItemProps = {
  index: number;
  name: string;
  description?: string;
  quantity: number;
  toEdit?: boolean;
}

type TItemEdit = {
  name: string;
  description?: string;
  quantity: number;
}


export default function CardItem(props: TItemProps) {
  const { index, name, quantity, toEdit} = props;
  const { listItems, setListItems } = useContext(AppContext);
  const [editItem, setEditItem] = React.useState<TItemEdit>({ name: '', description: '', quantity: 1 });
  const [showInfo, setShowInfo] = React.useState(false);


  const handleRemoveItem = (index: number) => {
    setListItems(listItems.filter((_: any, i: number) => i !== index))
  }

  const handleEditItem = (index: number) => {
    if (toEdit) {
      const newItem = {
        name: editItem.name,
        description: editItem.description || '',
        quantity: editItem.quantity,
        toEdit: false
      }

      const updatedList = [...listItems];
      updatedList[index] = newItem;
      return setListItems(updatedList);
    }

    setEditItem({
      name,
      description: props.description,
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
          <>
            <input
              className='ItemName'
              type="text"
              value={editItem.name}
              onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
            />
            <input
              className='ItemQuantity'
              type="number"
              value={editItem.quantity}
              onChange={(e) => setEditItem({ ...editItem, quantity: +e.target.value })}
            />
          </>
        ) : (
          <>
            <h3 className='ItemName'>{name}</h3>
            <h4 className='ItemQuantity'>{quantity} x</h4>
          </>
        )
      }

      <button
        type='button'
        className='ShowInfo'
        onClick={() => setShowInfo(!showInfo)}
      >
        { 
          showInfo ? (
            <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
            ) : (
            <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
          )
        }
      </button>

      <span className={`Description ${showInfo ? 'Show' : ''}`}>
        {
          toEdit ? (
            <textarea
              className='ItemDescription'
              value={editItem.description}
              onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
            />
          ) : (
            <pre>{props.description}</pre>
          )
        }

        <div className='ItemButtons'>

          {
            toEdit && (
              <>
                <button
                  type='button'
                  onClick={() => handleRemoveItem(index)}
                  >
                  <img src='https://super.so/icon/light/trash.svg' alt="trash" />
                </button>

                |
              </>
            )
          }

          <button
            type='button'
            onClick={() => handleEditItem(index)}
          >
            {
              toEdit ? (
                <img src='https://super.so/icon/light/save.svg' alt="save" />
              ) : (
                <img src='https://super.so/icon/light/edit.svg' alt="edit" />
              )
            }
          </button>
        
        </div>
      </span>

    </CardItemS>
  )
}
