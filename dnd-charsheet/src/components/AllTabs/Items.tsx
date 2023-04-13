import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Items() {
  const { contentTab, tab } = useContext(AppContext);

  if (tab !== 'Itens') return null;

  return (
    <div>
      {/* { contentTab } */}
      <h1>Items</h1>
    </div>
  )
}
