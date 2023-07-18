import React from 'react'
import AppContext from '../../../Context/AppContext';
import PersonalityForm from './PersonalityForm';
import { PersonalityS } from './Styles/Personality';


export default function Personality() {
  const { bio } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);
  const [showPersonality, setShowPersonality] = React.useState(false);


  return (
    <PersonalityS>
      <header>
        <h2
          className={`${showPersonality ? 'Listed' : ''}`}
          onClick={() => setShowPersonality(!showPersonality)}
        >Personalidade</h2>

        <button
          type='button'
          onClick={() => setToEdit(!toEdit)}
        >
          <img src='https://super.so/icon/light/settings.svg' alt="Edit Personality" />
        </button>
      </header>

      {
        toEdit ? (
          <PersonalityForm
            savePersonality={() => setToEdit(!toEdit)}
          />
        ) : (
          <div className={`${showPersonality ? 'DisplayOn' : 'DisplayOff'}`}>
            <div>
              <p>Personalidade: </p>
              <span>{bio?.personality?.personalityTraits}</span>
            </div>

            <div>
              <p>Ideais: </p>
              <span>{bio?.personality?.ideals}</span>
            </div>

            <div>
              <p>Vínculos: </p>
              <span>{bio?.personality?.bonds}</span>
            </div>

            <div>
              <p>Fraquezas: </p>
              <span>{bio?.personality?.flaws}</span>
            </div>
          </div>
        )
      }
    </PersonalityS>
  )
}
