import React from 'react'
import AppContext from '../../../Context/AppContext';
import PersonalityForm from './PersonalityForm';


export default function Personality() {
  const { bio } = React.useContext(AppContext);
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <div>
      <h1>Personalidade</h1>

      {
        toEdit ? (
          <PersonalityForm
            savePersonality={() => setToEdit(!toEdit)}
          />
        ) : (
          <div>
            <p>Personalidade: {bio?.personality?.personalityTraits}</p>
            <p>Ideais: {bio?.personality?.ideals}</p>
            <p>Vínculos: {bio?.personality?.bonds}</p>
            <p>Fraquezas: {bio?.personality?.flaws}</p>

            <button
              type='button'
              onClick={() => setToEdit(!toEdit)}
            >
              Editar
            </button>
          </div>
        )
      }
    </div>
  )
}
