import styled from "styled-components";

export const NotesS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  .SaveSheet {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    gap: 25px;

    button {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      font-size: 1.2rem;
      background-color: transparent;
      border-color: white;
      color: white;
    }

    input {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      font-size: 1.2rem;
      background-color: transparent;
      border-color: white;
      color: white;
      text-align: center;
    }
  }
  
`;
