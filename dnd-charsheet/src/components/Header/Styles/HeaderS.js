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
    border-left: 1px solid #c53131;
    border-right: 1px solid #c53131;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
    margin: 0 5px;
    width: 50%;

    h1 {
      padding: 5px 5px;
    }
    
    p {
      color: #7a7d83;
      padding: 0 0 5px 0;
    }
  }

  .InfoChar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .ClassLevel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #7a7d83;

      .MainClass {
        color: var(--white);
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
        bottom: 20px;
        left: -10px;

      }
    }

  }

  

  .CharMenu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;

    p {
      color: #7a7d83;
    }
    

    .Buttons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      margin: 5px 0;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin: 0 5px;

        button {
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
    
        img {
          width: 30px;
          height: 30px;
        }

        p {
          color: white;
        }
      }
    }


  }


`;