import React from 'react'
import Attributes from './AllTabs/Attributes'
import Items from './AllTabs/Items'
import Spells from './AllTabs/Spells'
import Traits from './AllTabs/Traits'
import Notes from './AllTabs/Notes'

export default function Outlet() {
  return (
    <div>
      <Attributes />
      <Items />
      <Spells />
      <Traits />
      <Notes />
    </div>
  )
}

