import styled from "styled-components";

export const CharClassFormS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--white);
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 80%;
  

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: var(--font-size-large);
    margin: 5px;
  }

  input:focus {
    outline: none;
  }

  button {
    margin-top: 20px !important;
  }
`;
