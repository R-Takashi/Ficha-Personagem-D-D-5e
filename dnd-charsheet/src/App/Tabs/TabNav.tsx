import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import { TabNavS } from './Styles/TabNavS'

const selected = {
  color: '#fdfef9',
  border: '2px solid #c53131',
}

const tabs = [
    'Atributos',
    'Combate',
    'Magias',
    'Itens',
    'Características',
    'Biografia',
    'Diário',
    'Configurações',
]

export default function TabNav() {
  const { tab, setTab } = useContext(AppContext);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const scroll = scrollLeft - (x - startX);
    e.currentTarget.scrollLeft = scroll;
  };

  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
  };

  return (
    <TabNavS>
      <div className="TabContainer">
        <ul 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
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
      </div>
    </TabNavS>
  )
}
