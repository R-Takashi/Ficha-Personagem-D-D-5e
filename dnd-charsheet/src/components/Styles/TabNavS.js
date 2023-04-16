import styled from "styled-components";

export const TabNavS = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 10px;
  

    li {
      font-size: 1.2rem;
      cursor: pointer;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px 10px;
      background-color: #f5f5f5;
    }

  }

`;
