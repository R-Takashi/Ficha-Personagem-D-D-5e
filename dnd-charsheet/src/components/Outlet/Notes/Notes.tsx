import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import BasicList from './BasicList';
import { NotesS } from './Styles/Notes';


export default function Notes() {
  const { tab, saveSheet, loadSheet, exportSheet, importSheet, } = useContext(AppContext);

  if (tab !== 'Diário') return null;
  return (
    <NotesS>
      <BasicList
        title='Organizações'
        type='organizations'
      />

      <BasicList
        title='Aliados'
        type='allies'
      />

      <BasicList
        title='Inimigos'
        type='enemies'
      />

      <BasicList
        title='Locais Importantes'
        type='importantLocations'
      />

      <BasicList
        title='Anotações'
        type='notes'
      />

      <BasicList
        title='Tesouros'
        type='treasures'
      />

      <div className='SaveSheet'>
        <button
          type='button'
          onClick={() => saveSheet()}
          >
          Salvar Ficha localmente
        </button>

        <button
          type='button'
          onClick={() => loadSheet()}
          >
          Carregar Ficha localmente
        </button>

        <button
          type='button'
          onClick={() => exportSheet()}
        >
          Exportar Ficha
        </button>

        <input
          type='file'
          id='importSheet'
          accept='.json'
          onChange={(e) => importSheet(e)}
        />
      </div>


    </NotesS>
  )
}
