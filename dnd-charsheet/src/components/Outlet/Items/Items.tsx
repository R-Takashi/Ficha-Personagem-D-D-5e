import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import styled from 'styled-components'
import CardItem from './CardItem';
import { Wallet } from './Styles/Wallet';
import { ListItems } from './Styles/ListItems';
import Coin from './Images/crown-coin.svg'

const ItemsS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .chest {
    width: 50px;
  }
  
  .ItemContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
    
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    gap: 5%;
  }


`;


type TItem = {
  name: string;
  quantity: string;
  toEdit: boolean;
}

export default function Items() {
  const { tab, listItems, setListItems, currency, setCurrency } = useContext(AppContext);
  const [item, setItem] = React.useState<TItem>({ name: '', quantity: '', toEdit: false });
  const [treasure, setTreasure] = React.useState(false)

  if (tab !== 'Itens') return null;

  const addItem = () => {
    setListItems([...listItems, item]);
    return setItem({ name: '', quantity: '', toEdit: false });
  }

  const clearZeroWallet = (e: any) => {
    for (let i = 0; i < e.target.value.length; i += 1) {
      if (e.target.value[i] !== '0') {
        e.target.value = e.target.value.slice(i);
        break;
      }
    }
  
    return e.target.value
  }

  return (
    <ItemsS>

      <Wallet>

        <button
          type='button'
          className={`Coin ${treasure ? 'Open' : 'Close'}`}
          onClick={() => setTreasure(!treasure)}
        >
          <img src={Coin} alt='Coin' />
        </button>

        
        <div className={`Wallet-Container ${treasure ? 'Open' : ''}`}>
          <div>
            <label htmlFor='pp'>Platina</label>
            <input type='number' id='pp' value={currency.platinum} onChange={(e) => setCurrency({ ...currency, platinum: clearZeroWallet(e) })} />
          </div>
          <div>
            <label htmlFor='gp'>Ouro</label>
            <input type='number' id='gp' value={currency.gold} onChange={(e) => setCurrency({ ...currency, gold: clearZeroWallet(e) })} />
          </div>
          <div>
            <label htmlFor='ep'>Electro</label>
            <input type='number' id='ep' value={currency.electrum} onChange={(e) => setCurrency({ ...currency, electrum: clearZeroWallet(e) })} />
          </div>
          <div>
            <label htmlFor='sp'>Prata</label>
            <input type='number' id='sp' value={currency.silver} onChange={(e) => setCurrency({ ...currency, silver: clearZeroWallet(e) })} />
          </div>
          <div>
            <label htmlFor='cp'>Cobre</label>
            <input type='number' id='cp' value={currency.copper} onChange={(e) => setCurrency({ ...currency, copper: clearZeroWallet(e) })} />
          </div>
        </div>

      </Wallet>

      <ListItems>
        <h2>Itens</h2>
        
          <div>
          <div>
            <label htmlFor='item'>Item</label>
            <input type='text' id='item' value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor='quantity'>Quantidade</label>
            <input type='text' id='quantity' value={item.quantity} onChange={(e) => setItem({ ...item, quantity: e.target.value })} />
          </div>
            <button
              type='button'
              onClick={() => addItem()}
            >Adicionar</button>
          </div>
          <ul>
            {listItems.map((item: TItem, index: number) => (
              <CardItem
                key={index}
                index={index}
                {...item}
              />
            ))}
          </ul>
        
      </ListItems>
    </ItemsS>
  )
}
