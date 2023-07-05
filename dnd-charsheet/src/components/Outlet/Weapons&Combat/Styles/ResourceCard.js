import styled from "styled-components";

export const ResourceCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0; 
  border: none;
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  padding: 10px 10px;
  text-align: center;
  width: 95%;
  font-size: 1.3rem;
  

  
  input {
    font-size: 1.5rem;
    text-align: center;
    width: 100px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--white);
    border-radius: 5px; 
    color: var(--white);
    padding: 5px 0;

    &:focus {
      outline: none;
    }
  }

  input[type="number"] {
    width: 50px;
  }

  button {
    background: transparent;
    border: none;
  }

`;
