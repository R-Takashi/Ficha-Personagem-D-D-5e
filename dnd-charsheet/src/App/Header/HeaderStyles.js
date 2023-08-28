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

  // Name Race Rests

  .NameRace {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border-left: 2px solid #c53131;
    border-right: 2px solid #c53131;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
    height: 100%;
    width: 50%;
    padding: 0 5%;
    position: relative;

    transition: all 0.5s linear;

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


    .RestMenu.Close {
      opacity: 0;
      width: 0;

      * {
        opacity: 0;
        width: 0;
      }
    }

  }

  .NameRace.RestMenuActive {
    width: 95%;

    .RestMenu.Open {
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      width: 80%;
      height: 100%;

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

      .ShortRest, .LongRest {
        position: relative;

        .Modal.Close {
          display: none;
        }
      
        .Modal.Open {
          position: absolute;
          top: 60px;
          z-index: 1;

          .ModalContent {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            gap: 10px;
            padding: 10px;
            width: 300px;
            height: auto;
            background-color: #1c1c1c;
            border-radius: 10px;
            border: 1px solid #7a7d83;
            box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
            

            div {
              text-align: center;

              button {
                border-left: 1px solid #7a7d83;
                border-right: 1px solid #7a7d83;
                border-radius: 10px;
                box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
                width: 100%;
                padding: 5px;
                margin: 10px 0;
                color: white;
                font-size: 1.2rem;
              }
            }

            .SkillsReset, .ResourcesReset {
              display: flex;
              align-items: center;
              justify-content: center;
              
              button {
                border-left: 1px solid #7a7d83;
                border-right: 1px solid #7a7d83;
                border-radius: 10px;
                box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
                width: 100%;
                padding: 5px;
                margin: 10px 0;
                color: white;
                font-size: 1.2rem;
              }
            }
          }
        }

      }

      .LongRest {
      
        .Modal.Open {
          position: absolute;
          top: 60px;
          right: 60px;
          z-index: 1;
        }
      }
    }
  }

  // Name Race Rests

  //----------------------//

  // Class Level

  .InfoChar {
    height: 100%;
    transition: all 0.5s linear;
  }

  .InfoChar.Open {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    opacity: 1;

    .ClassLevel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #7a7d83;

      .MainClass {
        color: var(--white);
      }

      .Inspiration {
        color: var(--white);
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

  .InfoChar.Close {
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition: all 0.5s linear;

    * {
      opacity: 0;
      width: 0;
    }
  }

  // Class Level

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
      transition: 0.3s;
    }

    &.Close {
      img {
        rotate: 180deg;
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