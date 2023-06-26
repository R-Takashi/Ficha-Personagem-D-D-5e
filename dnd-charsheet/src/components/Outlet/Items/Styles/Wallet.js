import styled from "styled-components";

export const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .Coin {
    position: fixed;
    bottom: 0;
    right: -8px;
    margin: 1rem;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: 0.3s;
    border: none;
    border-radius: 15px;

    &.Open {
      animation: flip 0.5s ease-in-out alternate;

      @keyframes flip {
        0% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-2rem) rotate(180deg);
        }
        100% {
          transform: translateY(0) rotate(360deg);
        }
      }
    }

    &.Close {
      animation: spin 0.5s ease-in-out alternate;

      @keyframes spin {
        0% {
          transform: rotateY(-180deg);
        }
        100% {
          transform: rotateY(180deg);
        }
      }
    }
  }

  .Wallet-Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 1rem;
    width: 80%;
    height: 80px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s ease-in;
    transform: translateX(200%);
    
    &.Open {
      transform: translateX(0%);
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        font-size: 1.2rem;
      }
      
      input {
        width: 80%;
        text-align: center;
        height: 40px;
        font-size: 1.5rem;
        border: none;
        border-radius: 15px;
        outline: none;
      }
    }

  }

`;
