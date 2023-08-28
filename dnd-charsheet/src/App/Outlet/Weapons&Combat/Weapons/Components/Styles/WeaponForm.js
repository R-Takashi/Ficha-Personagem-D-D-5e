import styled from "styled-components";

export const WeaponFormS = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 5px 0;
  width: 100%;
/* 
  * {
    outline: 2px solid white;
  } */

  div {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    
    /* outline: 2px solid var(--white); */


    label {
      width: 45%;
      margin: 5px 0;
      padding: 5px 10px;
      font-size: 1.2rem;
    }

    input {
      width: 50%;
      margin: 5px 0;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      text-align: center;
    }
    
    input[type="checkbox"] {
      display: flex;
      justify-content: center;
      align-items: center;
      scale: 1.5;
      margin: 0;
      padding: 10px 10px;

      width: 50%;
    }

    select {
      width: 50%;
      margin: 5px 0;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      text-align: center;
      text-align-last: center;
    }

    
      
  }

  button {
    width: 100%;
    margin: 5px 0;
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    /* outline: 2px solid var(--white); */
  }
`;
