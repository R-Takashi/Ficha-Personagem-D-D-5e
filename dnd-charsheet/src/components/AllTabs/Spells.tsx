import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Spells() {
  const { contentTab, tab } = useContext(AppContext);

  if (tab !== 'Magias') return null;

  return (
    <div>
      {/* { contentTab } */}
      <h1>Magias</h1>
    </div>
  )
}
