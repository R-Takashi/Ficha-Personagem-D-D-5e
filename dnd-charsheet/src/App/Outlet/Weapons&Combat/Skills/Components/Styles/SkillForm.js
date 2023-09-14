import styled from "styled-components";

export const SkillFormS = styled.form`
    display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px; 
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  padding: 10px 10px;
  text-align: center;
  width: 95%;
  gap: 10px;
  font-size: 1.3rem;

  * {
    /* outline: 2px solid white; */
  }

  div {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    
    /* outline: 2px solid var(--white); */


    label {
      width: 45%;
      margin: 5px 0;
      padding: 5px 10px;
      font-size: 1.2rem;
    }

    input {
      width: 50%;
      margin: 5px 0;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      text-align: center;
    }
    
    input[type="checkbox"] {
      display: flex;
      justify-content: center;
      align-items: center;
      scale: 1.5;
      margin: 0;
      padding: 10px 10px;

      width: 50%;
    }

    select {
      width: 100%;
      margin: 5px 0;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      text-align: center;
      text-align-last: center;
    }
  }

  .activeSkillCheck, .activeSkill {
    label {
      width: 80%;
    }

    input[type="checkbox"] {
      position: relative;
      appearance: none;
      width: 2rem;
      height: 1rem;
      background: #ccc;
      border-radius: 50px;
      cursor: pointer;
      transition: 0.4s;
      margin-right: 50px;
    }

    input:checked[type="checkbox"] {
      background: #c53131;
    }

    input[type="checkbox"]::after {
      position: absolute;
      content: "";
      width: 1rem;
      height: 1rem;
      top: 1;
      left: 0;
      background: #fff;
      border-radius: 50%;
      transform: scale(1.1);
      transition: 0.4s;
    }

    input:checked[type="checkbox"]::after {
        left: 50%;
    }
  }

  .activeSkill {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    width: 100%;
    flex-direction: column;
  }

  .RechargeResource {
    display: flex;  
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    width: 100%;
    flex-direction: column;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0;
      width: 100%;
      flex-direction: row;

      label {
        width: 80%;
        margin: 5px 0;
        padding: 5px 10px;
      }
    }
  }

  .Description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    textarea {
      width: 100%;
      height: 100px;
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
    width: 100%;
    margin: 5px 0;
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    /* outline: 2px solid var(--white); */
  }

  .SaveSkill {
    width: 50%;
  }
`;
