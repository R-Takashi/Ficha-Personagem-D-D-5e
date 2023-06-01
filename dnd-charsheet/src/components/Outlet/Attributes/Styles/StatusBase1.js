import styled from "styled-components";

export const StatusBase1 = styled.div`
  display: grid;
  grid: 'hp hp hp' 1fr
        'ini ac speed' 1fr
        / 1fr 1fr 1fr;

  grid-gap: 0.5rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  
  h3 {
    text-align: center;
    color: var(--white);
    font-size: 2rem;
  }

  .TitleHP {
    display: flex;
    justify-content: space-between;
    
    h3 {
      margin-left: auto;
      width: 10%;
    }
    
    button {
      margin-left: auto;
      border: none;
      background-color: transparent;
      transition: 0.3s;
    }
    
  }
  
  .HP {
    grid-area: hp;
    border: 1px solid #7a7d83;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 0.5rem;
    
    .DisplayHP{
      display: grid;
      display: grid;
      grid: 'current current' 1fr
      / 1fr 1fr;
      
      grid-gap: 0.5rem;
      margin: 0.5rem 0;
      padding: 0.5rem;
      
      &.EditHP {
        grid: 'current current' 1fr
        'input dmg' 1fr
        'input heal' 1fr
        'input temp' 1fr
        'save save' 1fr
        / 1fr 1fr;
      }
      
      .CurrentHP {
        grid-area: current;
        display: grid;
        grid: 'HP TempHP' 1fr
              / 3fr 1fr;
        align-items: center;
        font-size: 2rem;
        background-color: #151618;
        border-left: 2px solid #7a7d83;
        border-right: 2px solid #7a7d83;
        border-radius: 10px;
        padding: 0.8rem;

        img {
          grid-area: HP;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 60%;
        }

        .DispĺayCurrentHP {
          grid-area: HP;
          display: flex;
          justify-content: center;
          margin-left: 35%;

          input {
            font-size: 2rem;
            text-align: center;
            width: 70px;
            background-color: transparent;
            border: none;

            &:focus {
              outline: none;
            }
          }
        }

        .DisplayTempHP {
          grid-area: TempHP;
          color: lightblue !important;
        }
      }
      
      .InputHP {
        grid-area: input;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        
        * {
        background-color: #151618;
        }
        
        input {
          font-size: 1.5rem;
          text-align: center;
          color: var(--white);
          width: 70px;
          height: 70px;
          margin: 10px;
          border: none;
          border-radius: 10px;
          border-top: 2px solid var(--secondary-color);
          border-bottom: 2px solid var(--secondary-color);
          
        }

        input:focus {
          outline: none;
        }

        button {
          border: none;
          border-radius: 10px;
          border-left: 1px solid #7a7d83;
          border-right: 1px solid #7a7d83;
          cursor: pointer;
          width: 60px;
          height: 60px; 
          font-size: var(--font-size-large);
          color: var(--white);
        }
      }

      input[type=radio]{
        display: none;
      }

      .DmgHP {
        grid-area: dmg;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 1.5rem;
        color: var(--white);
        border-radius: 10px;
        border-left: 1px solid #7a7d83;
        border-right: 1px solid #7a7d83;
      }

      .DmgHP.Active {
        border-color: var(--secondary-color);
        border-width: 2px;
        background-color: #151618;
      }
      
      .HealHP {
        grid-area: heal;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 1.5rem;
        color: var(--white);
        border-radius: 10px;
        border-left: 1px solid #7a7d83;
        border-right: 1px solid #7a7d83;
      }

      .HealHP.Active {
        border-color: lightgreen;
        border-width: 2px;
        background-color: #151618;
      }

      .TempHP {
        grid-area: temp;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 1.5rem;
        color: var(--white);
        border-radius: 10px;
        border-left: 1px solid #7a7d83;
        border-right: 1px solid #7a7d83;
      }

      .TempHP.Active {
        border-color: lightblue;
        border-width: 2px;
        background-color: #151618;
      }

      .SaveHP {
        grid-area: save;
        font-size: 1.5rem;
        color: var(--white);
        border: none;
        border-radius: 10px;
        border-left: 2px solid var(--secondary-color);
        border-right: 2px solid var(--secondary-color);
        background-color: #151618;
        padding: 10px;
        margin-top: 10px;
      }
    }

  }

  .Initiative {
    grid-area: ini;
  }

  .Speed {
    grid-area: speed;
  }

`;