import styled from "styled-components";

export const CardItemS = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin: 5px 0; 
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  padding: 10px 5px;
  text-align: center;
  width: 95%;
  font-size: 1.3rem;

  span {
    padding: 10px 10px;
  }

  button {
    background: transparent;
    border: none;
    padding: 10px 10px;
  }
`;

