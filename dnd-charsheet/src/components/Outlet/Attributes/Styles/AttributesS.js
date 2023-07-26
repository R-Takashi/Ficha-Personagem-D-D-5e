import styled from "styled-components";

export const AttributesS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .SkillsSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    

    h3 {
      width: 100%;
      text-align: center;
      margin: 10px 0;
      font-size: 1.5rem;
      
    }
  }

  .Inspiration {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border-top: 1px solid #7a7d83;
    border-bottom: 1px solid #7a7d83;
    border-radius: 10px;
    padding: 0.5rem 0;
    text-transform: capitalize;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    label {
      width: 50%;
      font-size: 1.5rem;
    }

    input {
      scale: 1.5;
    }
  }
`;