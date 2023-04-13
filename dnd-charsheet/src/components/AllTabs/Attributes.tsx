import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Attributes() {
  const { contentTab, tab } = useContext(AppContext);

  if (tab !== 'Atributos') return null;

  return (
    <div>
      {/* { contentTab } */}
      <h2>Força: </h2>
      <h2>Destreza: </h2>
      <h2>Constituição: </h2>
      <h2>Inteligência: </h2>
      <h2>Sabedoria: </h2>
      <h2>Carisma: </h2>
    </div>
  )
}
