import styled from "styled-components";

export const AttributesS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: auto;

  .StatusBase1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;
  }

  .StatusBase2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 100%;
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