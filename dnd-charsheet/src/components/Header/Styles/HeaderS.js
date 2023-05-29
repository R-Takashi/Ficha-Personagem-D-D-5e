import styled from 'styled-components';

export const HeaderS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #7a7d83;
  border-radius: 10px;

  .NameRace {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
      color: #7a7d83
    }
  }

  .ClassLevel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #7a7d83;

    .MainClass {
      color: var(--white)
    }
  }

  .Level {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;

    img {
      filter: invert(50%) sepia(9%) saturate(210%) hue-rotate(182deg) brightness(95%) contrast(91%);
      transform: scale(0.8);
      position: absolute;
      bottom: 10px;
      right: 2px;

    }
  }


`;