import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Notes() {
  const { tab } = useContext(AppContext);

  if (tab !== 'Diário') return null;
  return (
    <div>
      {/* { contentTab } */}
      <h1>Diario</h1>
    </div>
  )
}
