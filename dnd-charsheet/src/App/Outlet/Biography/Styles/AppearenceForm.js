import styled from "styled-components";

export const AppearenceFormS = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

  div {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;

    label {
      width: 40%;
      margin: 5px 0;
      padding: 5px 10px;
      font-size: 1.2rem;
    }

    input {
      width: 60%;
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

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    margin: 10px 0;
    background: transparent;
  }
`;
