import styled from "styled-components";

export const BiographyS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  .BGChar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    
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

      h2 {
        margin-left: auto;
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
        margin-left: auto;
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

    .DisplayOff {
      display: none;
    }


    .DisplayOn {
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      border-radius: 10px;
      border-left: 2px solid #7a7d83;
      border-right: 2px solid #7a7d83;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      padding: 10px 10px;

      pre {
        width: 100%;
        white-space: pre-wrap;
        text-align: center;
        text-align-last: center;
        font-size: 1.2rem;
        padding: 10px 10px;
      }
    }
  }

  .BGForm {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 5px 0;
    width: 90%;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin: 5px 0;

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 5px 0;
        padding: 5px 10px;
        font-size: 1.5rem;
      }

      textarea {
        width: 100%;
        height: 150px;
        margin: 5px 0;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        text-align: center;
        text-align-last: center;
      }

    }


    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      border-radius: 5px;
      border: none;
      padding: 5px 10px;
      margin: 10px 0;
      background: transparent;
    }
  }
`;
