import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import Appearence from './Appearence';
import Personality from './Personality';
import { BiographyS } from './Styles/Biography';


export default function Biography() {
  const { tab, bio, setBio } = useContext(AppContext);
  const [ toEdit, setToEdit ] = React.useState(false);
  const [ background, setBackground ] = React.useState('');
  const [ showBackground, setShowBackground ] = React.useState(false);

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
    <BiographyS>
      <Appearence />
      <Personality />

      {
        toEdit ? (
          <form className='BGForm'>
            <div className='Description'>
              <label htmlFor='background'>
                História
              </label>
              <textarea
                id='background'
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </div>

            <button type='button' onClick={handleSave}>
              <img src='https://super.so/icon/light/save.svg' alt="save" />
            </button>

          </form>

        ) : (

          <div className='BGChar'>
            <header>
              <h2
                className={`${showBackground ? 'Listed' : ''}`}
                onClick={() => setShowBackground(!showBackground)}
              >História do Personagem</h2>
              <button type='button' onClick={() => setToEdit(!toEdit)}>
                <img src='https://super.so/icon/light/settings.svg' alt="Edit Background" />
              </button>
            </header>

            <div className={`${showBackground ? 'DisplayOn' : 'DisplayOff'}`}>
              <pre>{background}</pre>
            </div>
          </div>

        )
      }

    </BiographyS>
  )
}
