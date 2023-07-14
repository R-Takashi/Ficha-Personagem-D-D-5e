import styled from "styled-components";

export const WeaponCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0; 
  border: none;
  border-radius: 10px;
  border-left: 2px solid #7a7d83;
  border-right: 2px solid #7a7d83;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  padding: 10px 10px;
  text-align: center;
  width: 95%;
  font-size: 1.3rem;

  .Card {
    display: grid;
    grid: 'name name btn' 1fr
          'atk  space dmg' 1fr
          'btnDesc btnDesc btnDesc' 1fr
          / 1fr 0.5fr 1fr;
    width: 100%;
    grid-gap: 10px;

    &.MoreInfo {
      grid: 'name name btn' 1fr
            'atk  dmg dmg' 1fr
            'range range range' 1fr
            'attr attr attr' 1fr
            'atkDesc atkDesc atkDesc' 1fr
            'dmgDesc dmgDesc dmgDesc' 1fr
            'dmgType dmgType dmgType' 1fr
            'prof prof prof' 1fr
            'btnDesc btnDesc btnDesc' 1fr
            / 1fr 0.5fr 1fr;
    }

    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }

    div > span {
      width: 50%;
    }
    
    .Name {
      grid-area: name;
    }

    .Btn-Edit {
      grid-area: btn;
    }

    .AtkBonus {
      grid-area: atk;
    }

    .Damage {
      grid-area: dmg;
    }

    .Btn-Info {
      grid-area: btnDesc;
    }
    
    .Range {
      grid-area: range;
    }

    .Attr {
      grid-area: attr;
    }

    .AtkDesc {
      grid-area: atkDesc;

      p {
        width: 50%;
      }

      div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        width: 60%;
        height: 50px;
        padding: 1rem;
        /* outline: 1px solid var(--white); */
        border-left: 1px solid var(--white);
        border-right: 1px solid var(--white);
        border-radius: 10px;

        
        span {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
        }
      }
    }

    .DmgDesc {
      grid-area: dmgDesc;
      
      p {
        width: 50%;
      }

      div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        width: 60%;
        height: 50px;
        padding: 1rem;
        /* outline: 1px solid var(--white); */
        border-left: 1px solid var(--white);
        border-right: 1px solid var(--white);
        border-radius: 10px;
        
        span {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
        }
      }
    }

    .DmgType {
      grid-area: dmgType;
    }

    .Prof {
      grid-area: prof;
    }
  }
  

  button {
    background: transparent;
    border: none;
  }

`;
