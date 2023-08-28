import styled from "styled-components";

export const CharClassFormS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--white);
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 80%;
  

  input, select {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: var(--font-size-large);
    margin: 5px;
    color: black;
  }

  select {
    text-align-last: center; /* Centralizar o texto dentro do select */
    -webkit-appearance: none; /* Remover a aparência padrão do iOS */
    appearance: none;
  }

  input:focus, select:focus {
    outline: none;
  }

  // opções do select centralizada
  option {
  background-color: #1f2024;
  color: #fff;
  text-align: center;

  padding: 5px; /* Espaçamento interno das opções */
  border: none; /* Remova a borda das opções */
  border-radius: 5px; /* Adicione um raio de borda nas opções */

  width: 50px;
  }

  option:checked {
  background-color: #f5f5f5; /* Cor de fundo das opções selecionadas */
  color: #333; /* Cor do texto das opções selecionadas */
}



  button {
    margin-top: 20px !important;
  }
`;
