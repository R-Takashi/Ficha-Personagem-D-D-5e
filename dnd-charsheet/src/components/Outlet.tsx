import React from 'react'
import Attributes from './AllTabs/Attributes'
import Items from './AllTabs/Items'
import Spells from './AllTabs/Spells'
import Skills from './AllTabs/Skills'
import Notes from './AllTabs/Notes'

export default function Outlet() {
  return (
    <div>
      <Attributes />
      <Items />
      <Spells />
      <Skills />
      <Notes />
    </div>
  )
}

