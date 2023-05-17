import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import Appearence from './Biography/Appearence';
import Personality from './Biography/Personality';


export default function Biography() {
  const { tab } = useContext(AppContext);



  if (tab !== 'Biografia') return null;

  return (
    <div>
      <Appearence />
      <Personality />
    </div>
  )
}
