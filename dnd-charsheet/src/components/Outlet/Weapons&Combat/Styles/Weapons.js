import styled from "styled-components";

export const Weapons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 0; 
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    padding: 10px 10px;
    text-align: center;

    h2 {
      margin-left: auto;
      width: 50%;
      text-align: center;
      border-bottom: 2px solid var(--white);
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
    }
  
    button {
      margin-left: auto;
      border: none;
      background-color: transparent;
    }
  }

  
`;
