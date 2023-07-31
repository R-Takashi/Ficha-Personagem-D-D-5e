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
  position: relative;

  .NameRace {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border-left: 2px solid #c53131;
    border-right: 2px solid #c53131;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
    height: 100%;
    padding: 0 5%;
    position: relative;

    .DefaultDisplay {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        font-size: 1.5rem;
        padding: 5px 15px;
        text-align: center;
      }
      
      p {
        color: #7a7d83;
        padding: 0 0 5px 0;
      }
    }


    .MenuIcon {
      position: absolute;
      top: 50;
      right: 0;
      width: 20px;
      filter: invert(50%) sepia(9%) saturate(210%) hue-rotate(182deg) brightness(95%) contrast(91%);
    }


    .CharMenu {
      opacity: 0;
      width: 0;

      * {
        opacity: 0;
        width: 0;
      }
    }

    transition: all 0.5s linear;

  }

  .NameRace.HeaderActive {
    width: 95%;

    .CharMenuActive {
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      width: 80%;
      height: 100%;
      margin-left: 15%;

      .Buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;


            button {
              border: none;
              background-color: transparent;
              cursor: pointer;
            }
        
            img {
              width: 20px;
              height: 20px;
            }

            p {
              color: white;
            }
          }
        }

    }
  }

  .CharMenuOpen{
    opacity: 0;
    width: 0;

    * {
      opacity: 0;
      width: 0;
    }
  }

  .InfoChar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10px;
    position: relative;

    .ClassLevel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #7a7d83;
      position: relative;

      .MainClass {
        color: var(--white);
      }

      .Inspiration {
        /* position: absolute; */
        /* top: 25px; */
        color: var(--white);
        /* left: 17%; */
        width: 100%;
        text-align: center;
        
        div {
          position: relative;
          display: inline-block;
          top: 5px;
          
          margin-left: .9em;
          margin-right: .9em;
          margin-bottom: 1.2em;
          
          border-right:  .3em solid transparent;
          border-bottom: .7em  solid var(--white);
          border-left:   .3em solid transparent;

          /* Controlls the size of the stars. */
          font-size: 0.7rem;
          
          &:before, &:after {
            content: '';
            
            display: block;
            width: 0;
            height: 0;
            
            position: absolute;
            top: .5em;
            left: -1em;
          
            border-right:  1em solid transparent;
            border-bottom: .7em  solid var(--white);
            border-left:   1em solid transparent;
          
            transform: rotate(-35deg);
          }
          
          &:after {  
            transform: rotate(35deg);
          }
        }
        
      }
    }

    .Level {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .Edit {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 65px;
    right: 5px;

    img {
      filter: invert(50%) sepia(9%) saturate(210%) hue-rotate(182deg) brightness(95%) contrast(91%);
      transform: scale(0.8);
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