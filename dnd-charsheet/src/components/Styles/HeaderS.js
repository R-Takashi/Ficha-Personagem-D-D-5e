import styled from 'styled-components';

export const HeaderS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: auto;

  div {
    display: flex;
    align-items: center;

    label {
      margin-right: 10px;
    }

    input {
      width: 200px;
      height: 40px;
      border: none;
      border-bottom: 1px solid black;
      text-align: center;
      font-size: 1.2rem;
    }
  }

  .Level {
    input {
      width: 50px;
    }

    input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;