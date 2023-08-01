import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import { HeaderS } from './Styles/HeaderS'
import HeaderForm from './HeaderForm';
import ShortRest from './campfire.svg'
import styled from 'styled-components';

const FormOpen = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: all 0.2s ease-in-out;

  & > div {
    overflow: hidden;
  }

  &.Closing > div, &.Opening > div {
    display: block;
  }

  &.Closing {
    opacity: 0.5;
  }

  &.Closed {
    opacity: 0;
    margin: 0;
    padding: 0;
    height: 0;
  }

  &.Opening, &.Open {
    opacity: 0.5;
    grid-template-rows: 1fr;
  }

  &.Open {
    opacity: 1;
  }

`;


export default function Header() {
  const {
    name,
    race,
    charClass,
    level,
    lifePoints, setLifePoints,
    resetResources, resetSpellSlots,
    inspiration,
  } = useContext(AppContext)

  const [toEdit, setToEdit] = React.useState(false);
  const [charMenu, setCharMenu] = React.useState(false);
  const [timerClose, setTimerClose] = React.useState(false);
  const [timerOpen, setTimerOpen] = React.useState(false);

  useEffect(() => {
    if (!toEdit && timerClose) {
      const timer = setTimeout(() => {
        setTimerClose(!timerClose);
      }, 200);
      return () => clearTimeout(timer);
    }

    if (toEdit && timerOpen) {
      const timer = setTimeout(() => {
        setTimerOpen(!timerOpen);
      } , 230);
      return () => clearTimeout(timer);
    }

  }, [toEdit, timerClose, timerOpen]);


  const longRest = () => {
    setLifePoints({
      ...lifePoints,
      current: lifePoints.max,
    });
    resetResources();
    resetSpellSlots();
  }

  const editEnd = () => {
    if (toEdit === true) return setTimerOpen(true);

    if (toEdit === false) return setTimerClose(true);
  }

  return (
    <>
      <HeaderS>
            <div
              className={`NameRace ${charMenu ? 'RestMenuActive' : ''}`}
              onClick={() => setCharMenu(!charMenu)}
            >
              <div 
                className='DefaultDisplay'>
                <h1>{name}</h1>
                <p>{race}</p>
              </div>

              <div className={`RestMenu ${charMenu ? 'Open' : 'Close'}`}>

                  <p>Descanso: </p>

                  <div className='Buttons'>

                    <div>
                      <button
                        type='button'
                        disabled={!charMenu}
                      >
                        <img src={ ShortRest } alt="Descanso curto" />
                      </button>
                      <p>Curto</p>
                    </div>

                    <div>
                      <button
                        type='button'
                        disabled={!charMenu}
                        onClick={() => longRest()}
                      >
                        <img src="https://super.so/icon/light/moon.svg" alt="Descanso longo" />
                      </button>
                      <p>Longo</p>
                    </div>

                  </div>
                </div>

                <img
                  src={
                    charMenu ? 'https://super.so/icon/light/chevron-left.svg' : 'https://super.so/icon/light/chevron-right.svg'
                  }
                  alt='menu'
                  className='MenuIcon'
                />


            </div>

            <div className={`InfoChar ${charMenu ? 'Close' : 'Open'}`}>
              <div className='ClassLevel'>
                
                {
                  charClass.map((cClass: any, index: number) => (
                    <div 
                      key={cClass.name + cClass.level}
                      className={index === 0 ? 'MainClass' : ''}
                    >
                      <p>{cClass.name} {cClass.level}</p>
                    </div>
                  ))
                }

                {inspiration && (
                  <p className='Inspiration'>Inspiração: <div /></p>
                )
                }
              </div>

              <div className='Level'>
                <p>Nível</p>
                <p>{level}</p>
              </div>
            </div>

            <button
              type='button'
              className='Edit'
              onClick={() => {
                setToEdit(!toEdit);
                editEnd();
              }}
            >
              <img src='https://super.so/icon/light/menu.svg' alt='edit' />
            </button>
      </HeaderS>
      <FormOpen className={`${toEdit || name.length < 1 ? (
        timerOpen ? 'Opening' : 'Open'
      ) : (
        timerClose ? 'Closing' : 'Closed'
      )}`}>
        <HeaderForm
          toEdit={toEdit}
          saveChar={() => setToEdit(!toEdit)}
        />
      </FormOpen>
      
    </>
  )
}
