import React from 'react'
import Attributes from './Attributes/Attributes'
import Items from './Items/Items'
import Spells from './Spells/Spells'
import Traits from './Traits/Traits'
import Notes from './Notes/Notes'
import Weapons from './Weapons&Combat/Weapons'
import Biography from './Biography/Biography'


export default function Outlet() {
  return (
    <div>
      <Attributes />
      <Items />
      <Spells />
      <Traits />
      <Notes />
      <Weapons />
      <Biography />
    </div>
  )
}

