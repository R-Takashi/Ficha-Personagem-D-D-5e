import React, { useEffect } from 'react'
import AppContext from '../../../Context/AppContext';
import { PersonalityFormS } from './Styles/PersonalityForm';


export default function PersonalityForm(props: any) {
  const { savePersonality } = props;
  const {bio, setBio} = React.useContext(AppContext);
  const [personality, setPersonality] = React.useState({
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
  });

  useEffect(() => {
    if (bio.personality) {
      setPersonality(bio.personality);
    }
  }, [bio.personality]);


  return (
    <PersonalityFormS>
      <div>
        <label htmlFor='personalityTraits'>
          Personalidade
        </label>
        <input
          id='personalityTraits'
          type='text'
          value={personality.personalityTraits}
          onChange={(e) => setPersonality({ ...personality, personalityTraits: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='ideals'>
          Ideais
        </label>
        <input
          id='ideals'
          type='text'
          value={personality.ideals}
          onChange={(e) => setPersonality({ ...personality, ideals: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='bonds'>
          Vínculos
        </label>
        <input
          id='bonds'
          type='text'
          value={personality.bonds}
          onChange={(e) => setPersonality({ ...personality, bonds: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor='flaws'>
          Fraquezas
        </label>
        <input
          id='flaws'
          type='text'
          value={personality.flaws}
          onChange={(e) => setPersonality({ ...personality, flaws: e.target.value })}
        />
      </div>


        <button
          type='button'
          onClick={() => {
            setBio({ ...bio, personality });
            savePersonality();
          }}
        >
          <img src='https://super.so/icon/light/save.svg' alt="save" />
        </button>
    </PersonalityFormS>
  )
}
