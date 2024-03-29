import styled from "styled-components";

export const AppearenceS = styled.div`
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
    position: relative;

    .Btn-Show {
      position: absolute;
      left: 20px;
    }

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

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border-left: 2px solid #7a7d83;
      border-right: 2px solid #7a7d83;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

      p, span {
        width: 50%;
        text-align: center;
        font-size: 1.2rem;
      }
    }

    .Appearence {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;

      p {
        padding: 15px 0;
      }
      
      p, pre {
        width: 100%;
        font-size: 1.2rem;
      }

      pre {
        width: 100%;
        margin: 5px 0;
        padding: 5px 10px;
        white-space: pre-wrap;
        text-align: center;
        text-align-last: center;
        height: 50px auto;
      }
    }
  }
`;
