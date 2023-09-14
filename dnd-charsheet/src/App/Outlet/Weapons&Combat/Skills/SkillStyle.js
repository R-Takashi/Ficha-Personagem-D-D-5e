import styled from "styled-components";

export const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;


  * {
    min-width: 0;
    min-height: 0;
  }
  
  header {
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
    position: relative;

    .Btn-Show {
      position: absolute;
      right: 20px;
      top: 10px;
    }

    h2 {
      margin: auto;
      margin-right: 25%;
      width: 50%;
      text-align: center;
      border-bottom: 2px solid var(--white);
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    .Listed {
        border: none;
        border-radius: 10px;
        background-color: transparent;
        border-bottom: 4px solid var(--white);
      }
  
    button {
      border: none;
      background-color: transparent;
    }
  }

  .DisplayOn, .DisplayOff {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .DisplayOn {
    h3 {
      width: 100%;
      margin: 10px 0;
      text-align: center;
    }
  }

  .DisplayOff {
    display: none;
  }

`;
