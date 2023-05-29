import styled from "styled-components";

export const HeaderFormS = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--white);
  border-radius: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: auto;
  text-align: center;
  font-size: var(--font-size-medium);
  margin: 10px;

  .InputHeader {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 5px;

    label {
      width: 20%;
      
      font-size: var(--font-size-medium);
    }

    input {
      width: 70%;
      height: 40px;
      border: none;
      border-radius: 5px;
      text-align: center;
      font-size: var(--font-size-large);
      margin-right: 10px;
    }

    input:focus {
      outline: none;
    }

    .ButtonClass {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 5px;

      .EditClass {
        border: none;
        background-color: transparent;
        width: 20%;
        transition: 0.3s;
      }

      .activeEdit {
        rotate: 75deg;
        transition: 0.3s;
      }

    }
    
  }

  .DisplayClass {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5px;
    flex-wrap: wrap;

    p {
      width: 30%;
    }

  }

  button {
    width: 80%;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    background-color: #f0f0f0;
    border: none;
    color: #1f2024;
    font-size: var(--font-size-medium);
  }

  button:disabled {
    background-color: #979aa1;
    color: #1f2024;
  }
`;
