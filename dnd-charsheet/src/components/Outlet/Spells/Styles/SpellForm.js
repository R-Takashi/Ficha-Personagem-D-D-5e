import styled from "styled-components";

export const SpellFormS = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  transition: all 0.5s ease-in-out;

  div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 10px 0;
      padding: 10px 0;

      label {
        font-size: 1.2rem;
        width: 30%;
        text-align: center;
      }
      
      input, textarea {
        width: 60%;
        height: 40px;
        border: none;
        border-radius: 5px;
        text-align: center;
        font-size: var(--font-size-large);
        margin-right: 10px;
      }

      textarea {
        height: 150px;
        font-size: var(--font-size-medium);
        text-align: left;
        padding: 5px;
      }

      input:focus {
        outline: none;
      }
    }

    button {
      width: 80%;
      height: 40px;
      border: none;
      border-radius: 5px;
      font-size: var(--font-size-medium);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      color: #000;
      margin: 10px 0;
    }
`;
