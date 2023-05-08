import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { TabNavS } from './Styles/TabNavS'

const selected = {
  color: '#fff',
  backgroundColor: 'black',
}

const tabs = [
    'Atributos',
    'Itens',
    'Magias',
    'Características',
    'Notas',
]

export default function TabNav() {
  const { tab, setTab } = useContext(AppContext);

  return (
    <TabNavS >
      <ul>
        { tabs.map((tabName) => (
          <li
            key={ tabName }
            onClick={ () => setTab(tabName) }
            style={ tabName === tab ? selected : undefined }
          >
            { tabName }
          </li>
        )) }
      </ul>
    </TabNavS>
  )
}
