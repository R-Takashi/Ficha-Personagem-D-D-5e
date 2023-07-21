import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import { TabNavS } from './Styles/TabNavS'

const selected = {
  color: '#fdfef9',
  border: '2px solid #c53131',
}

const tabs = [
    'Atributos',
    'Itens',
    'Magias',
    'Combate',
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
  // const [isTouch, setIsTouch] = React.useState(false); // ** Device simulation touch events with mouse *

  // React.useEffect(() => { // ** Device simulation touch events with mouse *
  //   const handleTouchStart = (e: any) => {
  //     setIsTouch(true);
  //     setIsDragging(true);
  //     setStartX(e.touches[0].pageX - e.currentTarget.offsetLeft);
  //     setScrollLeft(e.currentTarget.scrollLeft);
  //   };
  //   const handleTouchMove = (e: any) => {
  //     if (!isDragging) return;
  //     const x = e.touches[0].pageX - e.currentTarget.offsetLeft;
  //     const scroll = scrollLeft - (x - startX);
  //     e.currentTarget.scrollLeft = scroll;
  //   };
  //   const handleTouchEnd = (e: any) => {
  //     setIsDragging(false);
  //     setIsTouch(false);
  //   };
  //   const nav = document.querySelector('nav ul');
  //   nav?.addEventListener('touchstart', handleTouchStart);
  //   nav?.addEventListener('touchmove', handleTouchMove);
  //   nav?.addEventListener('touchend', handleTouchEnd);
  //   return () => {
  //     nav?.removeEventListener('touchstart', handleTouchStart);
  //     nav?.removeEventListener('touchmove', handleTouchMove);
  //     nav?.removeEventListener('touchend', handleTouchEnd);
  //   };
  // }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (e: any) => {

    // if (isTouch) return; // ** ** Device simulation touch events with mouse *
    
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: any) => {
    // if (isTouch) return; // ** Device simulation touch events with mouse *

    if (!isDragging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const scroll = scrollLeft - (x - startX);
    e.currentTarget.scrollLeft = scroll;
  };

  const handleMouseUp = (e: any) => {

    // if (isTouch) return; // ** Device simulation touch events with mouse *

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
