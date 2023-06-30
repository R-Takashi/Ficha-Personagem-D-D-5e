import styled from "styled-components";

export const SpellS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  .Title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 10px 0; 
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    padding: 10px 50px;

    h1 {
      margin-left: auto;
      width: 90%;
      text-align: center;
    }

    button {
      margin-left: auto;
      border: none;
      background-color: transparent;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin: 10px 0;
      gap: 10px;
 
      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 300px;
        gap: 10px;
        /* outline: 2px solid #7a7d83; */


        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;

          label {
            text-align: center;
            margin-top: 10px;
          }

          input[type="checkbox"] {
            margin: 0;
            padding: 0;
            border: none;
            background-color: transparent;
            outline: none;
            scale: 3;

          }

        }
      }
    }

  }

  .AttrKey {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    width: 90%;
    margin: 10px 0;
    padding: 10px 0;
    flex-wrap: wrap;
    gap: 10px;
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      label {
        width: 50%;
        text-align: center;
      }

      input, select {
        width: 50%;
        height: 30px;
        text-align: center;
        background: none;
        border: none;
        border-bottom: 2px solid #7a7d83;
        border-radius: 5px;
        font-size: 1.2rem;
        color: var(--white);
        outline: none;
        margin-right: 10px;
      }

      select {
        text-align-last: center;
      }

      select > option {
        background: var(--primary-color);
        color: var(--white);
      }


    }

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 10px;
    }

  }
`;
