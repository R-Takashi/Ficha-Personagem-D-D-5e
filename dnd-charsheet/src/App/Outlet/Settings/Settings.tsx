import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import styled from 'styled-components';

const SaveSheet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    border-radius: 10px;
    border-left: 2px solid #7a7d83;
    border-right: 2px solid #7a7d83;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    padding: 1rem;

    span {
      font-size: var(--font-size-medium);
      padding: 5px;
      text-align: center;
    }

    &.SaveData {
      h2 {
        padding: 5px;
      }
    }
  }

  button {
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: var(--font-size-medium);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    color: #000;
    margin: 10px 0;
  }
  
  input[type='file'] {
    display: none;
  }
`;


export default function Settings() {
  const { tab, saveSheet, loadSheet, exportSheet, importSheet, } = useContext(AppContext);
  const [isSaved, setIsSaved] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [actualSaveLocal, setActualSaveLocal] = React.useState('' as string);

  const handleSaveSheet = () => {
    saveSheet();
    setIsSaved(true);
    setActualSaveLocal(JSON.parse(localStorage.getItem('sheet')|| '').name);
    setTimeout(() => setIsSaved(false), 3000);
  }

  const handleLoadSheet = () => {
    loadSheet();
    setIsLoaded(true);
    setTimeout(() => setIsLoaded(false), 3000);
  }

  React.useEffect(() => {
    const saveLocal = localStorage.getItem('sheet')|| '';
    
    if (saveLocal !== '') {
      setActualSaveLocal(JSON.parse(saveLocal).name);
      setIsSaved(false);
    }
  }, []);


  if (tab !== 'Configurações') return null;

  return (
    <SaveSheet>

        {
          actualSaveLocal !== '' && (
            <div>
              <span>Atenção</span>
              <span>
                Ao salvar, os dados da ficha atual serão sobrescritos.
                <br />
                <br />
                Considere exportar a ficha atual antes de salvar uma nova.
              </span>
            </div>
          )
        }

        <div>
          <h2>Salvar Ficha Localmente</h2>
          
          <span>
            Ficha Local Atual:
          </span>
          
          <span>
            {
              actualSaveLocal !== '' ? actualSaveLocal : 'Nenhuma ficha salva localmente'
            }
          </span>

          <button
            type='button'
            onClick={() => handleSaveSheet()}
            >
            <span>
              {isSaved ? 'Ficha salva!' : 'Salvar Ficha'}
          </span>
          </button>

          <button
            type='button'
            onClick={() => handleLoadSheet()}
            disabled={actualSaveLocal === ''}
            >
            {
              isLoaded ? 'Ficha  Local Restaurada!' : 'Carregar Ficha'
            }
          </button>

          <button
            type='button'
            onClick={() => localStorage.removeItem('sheet')}
            disabled={actualSaveLocal === ''}
            >
            Limpar Ficha Local
          </button>
        </div>

        <div className='SaveData'>
          <h2>Exportar / Importar Ficha</h2>

          <button
            type='button'
            onClick={() => exportSheet()}
          >
            Exportar Ficha
          </button>

          <button
            type='button'
            onClick={() => document.getElementById('importSheet')?.click()}
          >
            Importar Ficha
          </button>
        </div>

          <input
            type='file'
            id='importSheet'
            accept='.json'
            onChange={(e) => importSheet(e)}
          />
    </SaveSheet>
  )
}
