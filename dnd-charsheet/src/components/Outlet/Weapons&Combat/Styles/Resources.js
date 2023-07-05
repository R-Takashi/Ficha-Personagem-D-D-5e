import styled from "styled-components";

export const Resources = styled.div`
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

    header {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        margin-left: auto;
        width: 50%;
        text-align: center;
        border-bottom: 2px solid var(--white);
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
      }

      .Listed {
        border: none;
        border-radius: 10px;
        background-color: transparent;
        border-bottom: 4px solid var(--white);
      }

      button {
        margin-left: auto;
        border: none;
        background-color: transparent;
      }
    }

    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 10px;
      margin: 10px 0;
      padding: 10px 0;
      border: none;
      border-radius: 10px;
      border-left: 2px solid #7a7d83;
      border-right: 2px solid #7a7d83;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      transition: all 0.5s ease-in-out;

    
      label {
        font-size: 1.2rem;
        width: 30%;
        text-align: center;
      }
      
      input {
        width: 60%;
        height: 40px;
        border: none;
        border-radius: 5px;
        text-align: center;
        font-size: var(--font-size-large);
      }


      input:focus {
        outline: none;
      }
      

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 40px;
        margin: 10px 0;
        font-size: var(--font-size-medium);
        transition: all 0.5s ease-in-out;
        border: none;
        border-radius: 5px;
      }
    }
  }

  .DisplayOn, .DisplayOff {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .DisplayOff {
    display: none;
  }

`;
