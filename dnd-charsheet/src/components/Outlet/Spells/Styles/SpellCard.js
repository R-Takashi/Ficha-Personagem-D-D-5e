import styled from "styled-components";

export const SpellCard = styled.li`
  display: flex;
  width: 100%;
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

  .SpellName {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
  }

  .ShowInfo {
    background: transparent;
    width: 20%;
    height: 40px;
    border: none;
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
    transition: max-height .1s linear;

    .InfoSpell {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      padding: 10px 0;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
    }

    .SpellButtons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40px;
      
      
      button {
        border: none;
        width: 30%;
        
        img {
          width: 30px;
        }
      }
    }

    &.Show {
      max-height: 100rem;
      opacity: 1;
      padding: 10px;

      pre {
        width: 100%;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 1.2rem;
        max-height: 100rem;
        text-align: center;
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #7a7d83;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      }

      button {
        background: transparent;
        width: 50%;
        margin-top: 20px;
      }
    }
  }

`;
