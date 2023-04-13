import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Notes() {
  const { contentTab, tab } = useContext(AppContext);

  if (tab !== 'Notas') return null;
  return (
    <div>
      {/* { contentTab } */}
      <h1>Notes</h1>
    </div>
  )
}
