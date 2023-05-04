import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import styled from 'styled-components'
import CardItem from './Items/CardItem';

const ItemsS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
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

const CurrencyS = styled.section`
  display: flex;
  flex-direction: column;

  .Currency-Container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .Currency-Container-Item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
  }

  input {
    width: 100%;
    text-align: center;
    height: 50px;
    font-size: 1.5rem;
  }

  label {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
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

  if (tab !== 'Itens') return null;

  const addItem = () => {
    setListItems([...listItems, item]);
    return setItem({ name: '', quantity: '', toEdit: false });
  }

  return (
    <ItemsS>

      <CurrencyS>
        <h2>Carteira</h2>
        <div className='Currency-Container'>
          <div className='Currency-Container-Item'>
            <label htmlFor='pp'>Platina</label>
            <input type='number' id='pp' value={currency.platinum} onChange={(e) => setCurrency({ ...currency, platinum: Number(e.target.value) })} />
          </div>
          <div className='Currency-Container-Item'>
            <label htmlFor='gp'>Ouro</label>
            <input type='number' id='gp' value={currency.gold} onChange={(e) => setCurrency({ ...currency, gold: Number(e.target.value) })} />
          </div>
          <div className='Currency-Container-Item'>
            <label htmlFor='ep'>Electro</label>
            <input type='number' id='ep' value={currency.electrum} onChange={(e) => setCurrency({ ...currency, electrum: Number(e.target.value) })} />
          </div>
          <div className='Currency-Container-Item'>
            <label htmlFor='sp'>Prata</label>
            <input type='number' id='sp' value={currency.silver} onChange={(e) => setCurrency({ ...currency, silver: Number(e.target.value) })} />
          </div>
          <div className='Currency-Container-Item'>
            <label htmlFor='cp'>Cobre</label>
            <input type='number' id='cp' value={currency.copper} onChange={(e) => setCurrency({ ...currency, copper: Number(e.target.value) })} />
          </div>
        </div>
      </CurrencyS>

      <div className='ItemContainer'>
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
        
      </div>
    </ItemsS>
  )
}
