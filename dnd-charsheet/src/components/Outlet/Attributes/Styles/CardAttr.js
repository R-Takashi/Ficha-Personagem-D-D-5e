import styled from "styled-components";

export const CardAttr = styled.div`
  display: grid;
  width: 30%;
  height: 140px;
  grid: 'title title' 1fr
        'value value' 2fr
        'modAttr saveAttr' 1fr
        / 1fr 1fr ;
  text-align: center;
  justify-items: center;
  align-items: center;
  border: 1px solid #7a7d83;
  border-radius: 5px;
  background-color: #151618;
  margin: 5px;
  padding: 10px;

  h3 {
    grid-area: title;
    font-size: 4vw;
  }

  input {
    grid-area: value;
    font-size: 3rem;
    text-align: center;
    color: var(--white);
    width: 80%;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;

    &:focus {
      outline: none;
    }

    &.Maxed {
      border-color: #ffd700;
    }

    &.Negative {
      border-color: #ff0000;
    }
  }

  .ModAttr {
    grid-area: modAttr;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    color: var(--white);
  }

  .SaveAttr {
    grid-area: saveAttr;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    font-size: 0.8rem;
    color: var(--white);

    .CheckSave {
      display: flex;

      input {
        display: none;
      }

      &.BonusProf {
        span {
          text-shadow: 0 0 5px #fff,
            0 0 15px #fff, 0 0 10px #fff
        }
      }

    }

  }

  .ValueDisplay {
    font-size: 1.5rem;
  }

`;
