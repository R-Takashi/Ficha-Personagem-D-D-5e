import React, { useContext, useEffect } from 'react'
import AppContext from '../../Context/AppContext'
import Appearence from './Biography/Appearence';
import Personality from './Biography/Personality';


export default function Biography() {
  const { tab, bio, setBio } = useContext(AppContext);
  const [ toEdit, setToEdit ] = React.useState(false);
  const [ background, setBackground ] = React.useState('');

  useEffect(() => {
    if (bio.background) {
      setBackground(bio.background);
    }
  }, [bio.background]);

  const handleSave = () => {
    setBio({ ...bio, background });
    setToEdit(!toEdit);
  }


  if (tab !== 'Biografia') return null;

  return (
    <div>
      <Appearence />
      <Personality />

      {
        toEdit ? (
          <div>
            <label htmlFor='background'>
              História
              <textarea
                id='background'
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </label>

            <button type='button' onClick={handleSave}>Salvar</button>

          </div>

        ) : (

          <div>
            <h1>História do Personagem</h1>
            <button type='button' onClick={() => setToEdit(!toEdit)}>Editar</button>
            <p>{background}</p>
          </div>

        )
      }

    </div>
  )
}
