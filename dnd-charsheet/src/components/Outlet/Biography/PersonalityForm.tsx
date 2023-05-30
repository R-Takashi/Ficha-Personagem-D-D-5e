import React, { useEffect } from 'react'
import AppContext from '../../../Context/AppContext';


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
    <div>
      <form>
        <label htmlFor='personalityTraits'>
          Personalidade
          <input
            id='personalityTraits'
            type='text'
            value={personality.personalityTraits}
            onChange={(e) => setPersonality({ ...personality, personalityTraits: e.target.value })}
          />
        </label>

        <label htmlFor='ideals'>
          Ideais
          <input
            id='ideals'
            type='text'
            value={personality.ideals}
            onChange={(e) => setPersonality({ ...personality, ideals: e.target.value })}
          />
        </label>

        <label htmlFor='bonds'>
          Vínculos
          <input
            id='bonds'
            type='text'
            value={personality.bonds}
            onChange={(e) => setPersonality({ ...personality, bonds: e.target.value })}
          />
        </label>

        <label htmlFor='flaws'>
          Fraquezas
          <input
            id='flaws'
            type='text'
            value={personality.flaws}
            onChange={(e) => setPersonality({ ...personality, flaws: e.target.value })}
          />
        </label>

        <button
          type='button'
          onClick={() => {
            setBio({ ...bio, personality });
            savePersonality();
          }}
        >
          Salvar
        </button>

      </form>
    </div>
  )
}
