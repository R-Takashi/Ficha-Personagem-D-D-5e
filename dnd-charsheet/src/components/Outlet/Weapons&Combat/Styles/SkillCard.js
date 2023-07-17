import styled from "styled-components";

export const SkillCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0; 
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  padding: 10px 10px;
  text-align: center;
  width: 95%;
  font-size: 1.3rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0;
    padding: 15px 10px;
    height: auto;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    pre {
      width: 100%;
      margin: 5px 0;
      padding: 5px 10px;
      white-space: pre-wrap;
    }
  }

  button {
    background: transparent;
    border: none;
  }

  button:disabled {
    opacity: 0.5;
  }

`;
