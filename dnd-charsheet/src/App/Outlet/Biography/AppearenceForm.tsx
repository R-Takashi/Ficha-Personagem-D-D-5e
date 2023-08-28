import React, { useEffect } from 'react'
import AppContext from '../../../Context/AppContext';
import { AppearenceFormS } from './Styles/AppearenceForm';


export default function AppearenceForm(props: any) {
  const { saveAppearence } = props;
  const { bio, setBio } = React.useContext(AppContext);
  const [appearence, setAppearence] = React.useState({
    age: '',
    size: '',
    height: '',
    weight: '',
    eyes: '',
    skin: '',
    hair: '',
    gender: '',
    alignment: '',
    background: '',
    appearence: '',
  });

  useEffect(() => {
    if (bio.appearence) {
      setAppearence(bio.appearence);
    }
  }, [bio.appearence]);


  return (
    <AppearenceFormS>

        <div>
          <label htmlFor='age'>
            Idade :
          </label>
          <input
            id='age'
            type='text'
            value={appearence.age}
            onChange={(e) => setAppearence({ ...appearence, age: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='size'>
            Tamanho
          </label>
          <input
            id='size'
            type='text'
            value={appearence.size}
            onChange={(e) => setAppearence({ ...appearence, size: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='height'>
            Altura
          </label>
          <input
            id='height'
            type='text'
            value={appearence.height}
            onChange={(e) => setAppearence({ ...appearence, height: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='weight'>
            Peso
          </label>
          <input
            id='weight'
            type='text'
            value={appearence.weight}
            onChange={(e) => setAppearence({ ...appearence, weight: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='eyes'>
            Olhos
          </label>
          <input
            id='eyes'
            type='text'
            value={appearence.eyes}
            onChange={(e) => setAppearence({ ...appearence, eyes: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='skin'>
            Pele
          </label>
          <input
              id='skin'
              type='text'
              value={appearence.skin}
              onChange={(e) => setAppearence({ ...appearence, skin: e.target.value })}
            />
        </div>

        <div>
          <label htmlFor='hair'>
            Cabelo
          </label>
          <input
              id='hair'
              type='text'
              value={appearence.hair}
              onChange={(e) => setAppearence({ ...appearence, hair: e.target.value })}
            />
        </div>

        <div>
          <label htmlFor='gender'>
            Genero
          </label>
          <input
            id='gender'
            type='text'
            value={appearence.gender}
            onChange={(e) => setAppearence({ ...appearence, gender: e.target.value })}
            />
        </div>

        <div>
          <label htmlFor='alignment'>
            Alinhamento
          </label>
          <input
            id='alignment'
            type='text'
            value={appearence.alignment}
            onChange={(e) => setAppearence({ ...appearence, alignment: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor='background'>
            Antecedente
          </label>
          <input
              id='background'
              type='text'
              value={appearence.background}
              onChange={(e) => setAppearence({ ...appearence, background: e.target.value })}
          />
        </div>

        <div className='Description'>
          <label htmlFor='appearence'>
            Aparência
          </label>
          <textarea
            id='appearence'
            value={appearence.appearence}
            onChange={(e) => setAppearence({ ...appearence, appearence: e.target.value })}
          />
        </div>

        <button
          type='button'
          onClick={() => {
            setBio({ ...bio, appearence });
            saveAppearence();
          }}
        >
          <img src='https://super.so/icon/light/save.svg' alt="save" />
        </button>

    </AppearenceFormS>
  )
}
