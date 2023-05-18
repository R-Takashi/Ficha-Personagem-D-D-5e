import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { TabNavS } from './Styles/TabNavS'

const selected = {
  color: '#fdfef9',
  border: '2px solid #c53131',
}

const tabs = [
    'Atributos',
    'Itens',
    'Magias',
    'Armas',
    'Características',
    'Biografia',
    'Diário',
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
