import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const styles = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    padding: 0,
    margin: 0,
}

const tabs = [
    'Atributos',
    'Itens',
    'Magias',
    'Proficiências',
    'Notas',
]

export default function TabNav() {
  const { tab, setTab } = useContext(AppContext);

  return (
    <div>
      <ul style={ styles }>
        { tabs.map((tabName) => (
          <li
            key={ tabName }
            onClick={ () => setTab(tabName) }
            style={ tabName === tab ? { color: 'red' } : undefined }
          >
            { tabName }
          </li>
        )) }
      </ul>
    </div>
  )
}
