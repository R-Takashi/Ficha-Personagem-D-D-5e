import styled from "styled-components";

export const CardStatus = styled.div`
  display: grid;
  grid: 'title' 1fr
        'value' 1fr
        / 1fr;
  height: 120px;
  text-align: center;
  align-items: center;
  justify-items: center;
  border: 1px solid #7a7d83;
  border-radius: 5px;
  background-color: #151618;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  
  h3 {
    grid-area: title;
    font-size: var(--font-size-small);
  }

  span {
    width: 80%;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    color: var(--white);
  }

  input {
    grid-area: value;
    font-size: 2rem;
    text-align: center;
    width: 80%;
    border: none;
    background-color: transparent;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    color: var(--white);

    &:focus {
      outline: none;
    }
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &.DiceLife {
    width: 100%;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      font-size: 4.5vw;
      word-break: break-word;
    }
  }
`;