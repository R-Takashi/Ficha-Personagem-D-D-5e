import styled from "styled-components";

export const SpellList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  header {
    width: 370px;
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
    position: relative;

    h2 {
      width: 30%;
    }

    .ShowList {
      width: 30px;
      position: absolute;
      left: 10px;
      top: 10px;
      border: none;
      background-color: transparent;
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

    li {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 10px 0;
      padding: 10px 0;
    }

  }

  .NewSpell {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;


    button {
      width: 80%;
      height: 40px;
      border: none;
      border-radius: 5px;
      font-size: var(--font-size-medium);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: #000;
      margin: 10px 0;
    }
      
  }
  


`;
