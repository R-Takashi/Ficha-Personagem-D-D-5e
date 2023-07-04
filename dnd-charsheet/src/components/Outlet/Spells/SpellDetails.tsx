import React, { useContext } from 'react'
import SpellForm from './SpellForm';
import { SpellCard } from './Styles/SpellCard';
import Spell from './Icon/spell.svg';
import AppContext from '../../../Context/AppContext';


export default function SpellDetails(props: any) {
  const { name, school, action, duration, range, components, description, index, level } = props;
  const { listSpells, setListSpells } = useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);

  const castSpell = () => {
    const updatedList = [...listSpells[level]];
    updatedList[0] = { ...updatedList[0], uses: updatedList[0].uses -1 };

    setListSpells({ ...listSpells, [level]: updatedList });
  }


  return (
    <SpellCard>
      <h3 className='SpellName'>{name}</h3>
      
      <button
        type='button'
        className='ShowInfo'
        onClick={() => setShowInfo(!showInfo)}
      >
        { 
          showInfo ? (
            <img src='https://super.so/icon/light/minus-square.svg' alt="show info" />
            ) : (
            <img src='https://super.so/icon/light/plus-square.svg' alt="show info" />
          )
        }
      </button>
      
      {
        toEdit ? (
          <SpellForm
            level={level}
            index={index+1}
            saveSpell={() => setToEdit(!toEdit)}
            editSpell
          />
        ) : (
          <span className={`Description ${showInfo ? 'Show' : ''}`}>
            <div className='InfoSpell'>
              <div className='School'>
                <img src='https://super.so/icon/light/book.svg' alt="school" />
                <span>{school}</span>
              </div>
              <div>
                <img src='https://super.so/icon/light/activity.svg' alt="action" />
                <span>{action}</span>
              </div>

              <div>
                <img src='https://super.so/icon/light/clock.svg' alt="duration" />
                <span>{duration}</span>
              </div>

              <div>
                <img src='https://super.so/icon/light/crosshair.svg' alt="range" />
                <span>{range}</span>
              </div>

              <div>
                <img src='https://super.so/icon/light/grid.svg' alt="components" />
                <span>{components}</span>
              </div>

            </div>
            <pre>{description}</pre>

          {
            showInfo && (
              <div className='SpellButtons'>
                <button
                  type='button'
                  onClick={() => props.removeSpell(index)}
                  >
                  <img src='https://super.so/icon/light/trash.svg' alt="trash" />
                </button>

                <button
                  type='button'
                  onClick={castSpell}
                  disabled={listSpells[level][0].uses === 0}
                  style={listSpells[level][0].uses === 0 ? { opacity: 0.5 } : {}}
                >
                  <img src={ Spell } alt="Cast Spell" />
                </button>

                <button
                  type='button'
                  onClick={() => setToEdit(!toEdit)}
                  >
                  <img src='https://super.so/icon/light/edit.svg' alt="edit" />
                </button>
              </div>
            )
          }

          </span>
        )
      }


    </SpellCard>
  )
}
