import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Skills() {
  const { contentTab, tab } = useContext(AppContext);

  if (tab !== 'Proficiências') return null;

  return (
    <div>
      {/* { contentTab } */}
      <h1>Skills</h1>
    </div>
  )
}
