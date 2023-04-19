import styled from "styled-components";

export const AttributesS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100vw;

  .StatusBase1 {
    display: grid;
    grid: "initiative hp speed" 1fr
          / 1fr 2fr 1fr;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-items: center;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      border: 1px solid black;
      border-radius: 5px;
      margin: 5px;
      padding: 5px;
      width: 95%;

      input[type=number] {
          width: 50px;
          height: 30px;
          border: none;
          border-bottom: 1px solid black;
          text-align: center;
          font-size: 1.2rem;
      }

      input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
      }

      button {
        height: 30px;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        background-color: #f0f0f0;
        border: 1px solid black;
        font-size: 1.2rem;
      }
    }

    .Initiative {
      grid-area: initiative;
      height: 50%;
    }

    .HP {
      grid-area: hp;
      gap: 10px;

      .CurrentHP {
        font-size: 1.2rem;
        font-weight: bold;
      }

      label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 30px;
        margin: 5px;
        padding: 20px;
      }
    }

    .Speed {
      grid-area: speed;
      height: 50%;
      
      input[type=number] {
        font-weight: bold;
      }
    }

  }

  .StatusBase2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;

    p {
      font-weight: bold;
      font-size: 1.2;
    }
  }

  .AttributesSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;
  }

  .SkillsSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;

    .CardSkill {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: 1px solid black;
      border-radius: 5px;
      margin: 10px;
      padding: 10px;
    
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 30px;
        margin: 5px;
      }
    }
  }


`;