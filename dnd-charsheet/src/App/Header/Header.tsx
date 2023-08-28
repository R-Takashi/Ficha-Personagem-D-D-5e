import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import { HeaderS } from './HeaderStyles'
import HeaderForm from './Components/HeaderForm';
import ShortRest from '../../Assets/campfire.svg';
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
    resetResources, resetSpellSlots, resetUseProfSkills,
    inspiration, listResources, setListResources,
    listSkills, setListSkills, ShortRestSpell,
  } = useContext(AppContext)

  const [toEdit, setToEdit] = React.useState(false);
  const [charMenu, setCharMenu] = React.useState(false);
  const [timerClose, setTimerClose] = React.useState(false);
  const [timerOpen, setTimerOpen] = React.useState(false);
  const [modalShortRest, setModalShortRest] = React.useState(false);
  const [modalLongRest, setModalLongRest] = React.useState(false);

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
    resetUseProfSkills();
    resetSpellSlots();
  }

  const editEnd = () => {
    if (toEdit === true) return setTimerOpen(true);

    if (toEdit === false) return setTimerClose(true);
  }

  const ShortRestSkills = () => {

    const profSkills = listSkills.map((skill: any, index: number) => {
      if (skill.resource === 'Proficiência Bonus' && skill.shortRest === true) {
        return {
          name: skill.name,
          index: index,
         };
      };

      return skill;
    }).filter((skill: any) => skill?.index !== undefined);

    const updateList = [...listSkills];

    profSkills.forEach((skill: any) => {
      updateList[skill.index].current = updateList[skill.index].max;
    });

    return setListSkills([...updateList]);
  }

  const ShortRestResources = () => {
    const resources = listResources.map((resource: any, index: number) => {
      if (resource.shortRest === true) {
        return {
          name: resource.name,
          index: index,
          }
      };
      return resource;
    }).filter((resource: any) => resource?.index !== undefined);

    const updateList = [...listResources];

    resources.forEach((resource: any) => {
      updateList[resource.index].current = updateList[resource.index].max;
    });

    return setListResources([...updateList]);

  }

  const ShortRestDone = () => {   
    if (ShortRestSpell === true) {
      resetSpellSlots();
    }
    ShortRestSkills();
    ShortRestResources();
  }

  const handleRestMenu = () => {
    setCharMenu(!charMenu);

    if (charMenu === false) {
      setModalLongRest(false);
      return setModalShortRest(false);
    }
  }

  const handleModal = (modalOpen: boolean, type: string) => {
    if (modalOpen === true && type === 'short') {
      setModalShortRest(modalOpen);
      return setModalLongRest(false);
    }

    if (modalOpen === true && type === 'long') {
      setModalLongRest(modalOpen);
      return setModalShortRest(false);
    }

    if (modalOpen === false) {
      setModalLongRest(false);
      return setModalShortRest(false);
    }
  }
    

  return (
    <>
      <HeaderS>
            <div
              className={`NameRace ${charMenu ? 'RestMenuActive' : ''}`}
            >
              <div 
                className='DefaultDisplay'
                onClick={() => handleRestMenu()}  
              >
                <h1>{name}</h1>
                <p>{race}</p>
              </div>

              <div className={`RestMenu ${charMenu ? 'Open' : 'Close'}`}>

                  <p>Descanso: </p>

                  <div className='Buttons'>

                    <div className='ShortRest'>
                      <button
                        type='button'
                        disabled={!charMenu}
                        onClick={() => handleModal(!modalShortRest, 'short')}
                      >
                        <img src={ ShortRest } alt="Descanso curto" />
                      </button>
                      <p>Curto</p>

                      <div className={`Modal ${modalShortRest ? 'Open' : 'Close'}`}>
                        <div className='ModalContent'>
                          <div>
                            <h2>Descanso curto</h2>
                            <p>Você pode recuperar vida utilizando seus dados de vida.</p>
                          </div>

                          <div>
                            <button
                              type='button'
                              onClick={() => ShortRestDone()}
                            >
                              Descansar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='LongRest'>
                      <button
                        type='button'
                        disabled={!charMenu}
                        onClick={() => handleModal(!modalLongRest, 'long')}
                      >
                        <img src="https://super.so/icon/light/moon.svg" alt="Descanso longo" />
                      </button>
                      <p>Longo</p>

                      <div className={`Modal ${modalLongRest ? 'Open' : 'Close'}`}>
                        <div className='ModalContent'>
                          <div>
                            <h2>Descanso longo</h2>
                            <p>Ao descançar, você recupera todos os seus pontos de vida, recursos e habilidades.</p>
                          </div>

                          <div>
                            <button
                              type='button'
                              onClick={() => longRest()}
                            >
                              Descansar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <img
                  src={
                    charMenu ? 'https://super.so/icon/light/chevron-left.svg' : 'https://super.so/icon/light/chevron-right.svg'
                  }
                  alt='menu'
                  className='MenuIcon'
                  onClick={() => handleRestMenu()}
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
              className={`Edit ${toEdit ? 'Close' : 'Open'}`}
              onClick={() => {
                setToEdit(!toEdit);
                editEnd();
              }}
            >
              {
                toEdit ? (
                  <img src="https://super.so/icon/light/x.svg" alt="Close Menu" />
                ) : (
                  <img src='https://super.so/icon/light/menu.svg' alt='Menu' />
                )
              }
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
