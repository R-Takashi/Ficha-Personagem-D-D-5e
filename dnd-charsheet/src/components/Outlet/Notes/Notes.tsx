import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import BasicList from './BasicList';
import { NotesS } from './Styles/Notes';


export default function Notes() {
  const { tab } = useContext(AppContext);

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

    </NotesS>
  )
}
