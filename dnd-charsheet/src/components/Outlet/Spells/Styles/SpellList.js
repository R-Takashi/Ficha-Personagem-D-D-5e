import styled from "styled-components";

export const SpellList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  header {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 10px 0; 
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    padding: 10px 0px;

    h2 {
      width: 30%;
    }

    .Cantrip {
      width: 100%;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;

      label {
        width: 50%;
        text-align: center;
      }

      input {
        width: 50%;
        height: 30px;
        text-align: center;
        background: none;
        border: none;
        border-bottom: 2px solid #7a7d83;
        border-radius: 5px;
        font-size: 1.2rem;
        color: var(--white);
        outline: none;
        margin-right: 10px;
      }
    }

  }

  ul {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 10px 0;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
  }

`;
