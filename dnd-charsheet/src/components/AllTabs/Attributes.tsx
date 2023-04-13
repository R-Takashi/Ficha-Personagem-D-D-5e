import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import styled from 'styled-components';

const AtributesTabStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const CardAttributeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
  }

  input {
    width: 50px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

type Attribute = {
  name: string,
  value: number,
  mod: number,
};

export default function Attributes() {
  const { attributes, setAttributes, tab } = useContext(AppContext);

  const changeAttribute = (e: any) => {
    const { name, value } = e.target;
    const newAttributes = attributes.map((attribute: Attribute) => {
      if (attribute.name === name) {
        return {
          ...attribute,
          value: Number(value),
          mod: Math.floor((Number(value) - 10) / 2),
        }
      }
      return attribute;
    });
    
    return setAttributes(newAttributes);
  }

  if (tab !== 'Atributos') return null;

  return (
    <AtributesTabStyle>
      { attributes.map((attribute: Attribute) => (
        <CardAttributeStyle key={ attribute.name } >
          <h3>{ attribute.name }</h3>
          <input
            name={ attribute.name }
            type="number" 
            value={ attribute.value }
            onChange={ changeAttribute }
          />
          <p>{ attribute.mod }</p>
        </CardAttributeStyle>
      )) }
    </AtributesTabStyle>
  )
}
