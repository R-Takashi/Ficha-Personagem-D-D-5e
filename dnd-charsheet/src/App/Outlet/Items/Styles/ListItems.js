import styled from "styled-components";

export const ListItems = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  h2 {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    margin: 10px 0; 
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    padding: 10px 50px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transition: all 0.5s ease-in-out;

    &.DisplayOn {
      opacity: 1;
    }

    &.DisplayOff, &.DisplayOff * {
      opacity: 0;
      height: 0;
      margin: 0;
      padding: 0;
    }
    
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 10px 0;
      padding: 10px 0;

      label {
        font-size: 1.2rem;
        width: 30%;
        text-align: center;
      }
      
      input, textarea {
        width: 60%;
        height: 40px;
        border: none;
        border-radius: 5px;
        text-align: center;
        font-size: var(--font-size-large);
        margin-right: 10px;
      }

      textarea {
        height: 150px;
        font-size: var(--font-size-medium);
        text-align: left;
        padding: 5px;
      }

      input:focus {
        outline: none;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      transition: all 0.5s ease-in-out;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 0px;
        opacity: 0;
        transition: all 0.5s ease-in-out;

      }

      .Disabled {
        opacity: 1;
        max-width: 300px;
      }

      .SaveItem {
        opacity: 1;
        max-width: 300px;
      }

    }

  }

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

    &.DisplayOff {
      opacity: 0;
      height: 0;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
    gap: 5px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      button {
        width: 20%;
      }
    }
  }


`;
