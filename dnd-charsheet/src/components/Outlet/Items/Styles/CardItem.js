import styled from "styled-components";

export const CardItemS = styled.li`
  display: flex;
  width: 90%;
  outline: 2px solid #7a7d83;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  margin: 10px 0;
  height: auto;
  padding: 10px;
  align-items: center;
  justify-items: center;
  transition: all 0.5s ease-in-out;
  flex-wrap: wrap;

  .ItemName, .ItemQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 40px;
    text-align: center;
    border: none;
    border-radius: 15px;
    outline: none;
    font-size: 1.5rem;
  }

  .ItemQuantity {
    width: 15%;
    font-size: 1.2rem;
  }

  .ItemDescription {
  
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 5px;
    text-align: center;


    height: 150px;
    font-size: var(--font-size-medium);
    text-align: left;
    padding: 5px;
     
    }

  .ShowInfo {
    background: transparent;
    width: 20%;
  }

  .Description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
    word-break: break-all;
    width: 100%;
    max-height: 0px;
    opacity: 0;
    font-size: 1.2rem;
    border: none;
    border-radius: 15px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transition: max-height .1s linear;

    .ItemButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
    }


    &.Show {
      max-height: 100rem;
      opacity: 1;
      padding: 10px;

      pre {
        width: 80%;
        white-space: pre-wrap;
        font-size: 1.2rem;
        max-height: 100rem;
        text-align: center;
      }

      button {
        background: transparent;
        width: 50%;
        margin-top: 20px;
      }
    }
  }
`;
