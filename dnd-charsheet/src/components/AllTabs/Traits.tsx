import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Traits() {
  const { tab } = useContext(AppContext);

  if (tab !== 'Características') return null;

  return (
    <div>
      <h1>Características</h1>
    </div>
  )
}
