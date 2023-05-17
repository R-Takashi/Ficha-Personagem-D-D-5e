import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import BasicList from './Notes/BasicList';


export default function Notes() {
  const { tab } = useContext(AppContext);

  if (tab !== 'Diário') return null;
  return (
    <div>
      <h1>Diario</h1>

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

    </div>
  )
}
