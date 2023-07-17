import styled from "styled-components";

export const TraitFormS = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 5px 0;
  width: 100%;

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

  }

  .Description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    textarea {
      width: 100%;
      height: 100px;
      margin: 5px 0;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      text-align: center;
      text-align-last: center;
    }
  }

  .Buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 5px 0;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 5px;
    }

    button:disabled {
      opacity: 0.5;
    }
  }

`;
