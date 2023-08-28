import styled from "styled-components";

export const TabNavS = styled.nav`
  border-bottom: 1px solid #7a7d83;
  padding: 10px;
  /* margin: 10px; */
  margin-top: -5px;
  user-select: none;

  ul::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow-x: auto;
    white-space: nowrap;
    cursor: grab;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    width: 98%;
  
    li {
      font-size: var(--font-size-medium);
      text-align: center;
      border: 1px solid black;
      border-radius: 10px;
      padding: 10px 30px;
      margin: 10px ;
      margin-right: 10px;
      background-color: #151618;
      color: #979aa1;
    }
  }

  .TabContainer {
    position: relative;
  }

  ul::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    width: 25px; /* Largura do gradiente de continuação */
    pointer-events: none;
    background: linear-gradient(to right, #1f2024, rgba(31, 32, 36, 0.9), rgba(31, 32, 36, 0.8), rgba(31, 32, 36, 0.7), transparent); /* Gradiente de continuação */
  }

  ul::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -6px;
    width: 25px; /* Largura do gradiente de continuação */
    pointer-events: none;
    background: linear-gradient(to left, #1f2024, rgba(31, 32, 36, 0.9), rgba(31, 32, 36, 0.8), rgba(31, 32, 36, 0.7), transparent); /* Gradiente de continuação */
  }




`;
