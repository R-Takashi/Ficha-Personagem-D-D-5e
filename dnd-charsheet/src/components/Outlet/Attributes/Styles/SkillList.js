import styled from "styled-components";

export const SkillList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  h4 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    height: auto;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

  }
  
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    
    li {
      width: 98%;
      height: 40px;
      margin: 0.5rem 0;
      display: grid;
      grid: 'name value prof' 1fr 
            / 2fr 1fr 1fr;
      align-items: center;
      justify-content: center;
      border-left: 1px solid var(--white);
      border-right: 1px solid var(--white);
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

      .name {
        grid-area: name;
        text-align: left;
        margin-left: 10px;
      }

      .value {
        grid-area: value;
        text-align: center;
      }

      .prof {
        grid-area: prof;
        width: 100%;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;

        .Circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid var(--white);
        }

        .CircleHalf {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid var(--white);
          background-color: var(--white);
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }

        .CircleFull {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid var(--white);
          background-color: var(--white);
        }

        .Star {
          position: relative;
          display: inline-block;
          width: 0;
          height: 0;
          
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
            top: .6em;
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
  }
`;
