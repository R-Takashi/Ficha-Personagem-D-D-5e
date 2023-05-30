import React, { useEffect } from 'react'
import AppContext from '../../../Context/AppContext';


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
    <div>
      <form>
        <label htmlFor='age'>
          Idade
          <input
            id='age'
            type='text'
            value={appearence.age}
            onChange={(e) => setAppearence({ ...appearence, age: e.target.value })}
          />
        </label>

        <label htmlFor='size'>
          Tamanho
          <input
            id='size'
            type='text'
            value={appearence.size}
            onChange={(e) => setAppearence({ ...appearence, size: e.target.value })}
          />
        </label>

        <label htmlFor='height'>
          Altura
          <input
            id='height'
            type='text'
            value={appearence.height}
            onChange={(e) => setAppearence({ ...appearence, height: e.target.value })}
          />
        </label>

        <label htmlFor='weight'>
          Peso
          <input
            id='weight'
            type='text'
            value={appearence.weight}
            onChange={(e) => setAppearence({ ...appearence, weight: e.target.value })}
          />
        </label>

        <label htmlFor='eyes'>
          Olhos
          <input
            id='eyes'
            type='text'
            value={appearence.eyes}
            onChange={(e) => setAppearence({ ...appearence, eyes: e.target.value })}
          />
        </label>

        <label htmlFor='skin'>
          Pele
          <input
            id='skin'
            type='text'
            value={appearence.skin}
            onChange={(e) => setAppearence({ ...appearence, skin: e.target.value })}
          />
        </label>

        <label htmlFor='hair'>
          Cabelo
          <input
            id='hair'
            type='text'
            value={appearence.hair}
            onChange={(e) => setAppearence({ ...appearence, hair: e.target.value })}
          />
        </label>

        <label htmlFor='gender'>
          Genero
          <input
            id='gender'
            type='text'
            value={appearence.gender}
            onChange={(e) => setAppearence({ ...appearence, gender: e.target.value })}
          />
        </label>

        <label htmlFor='alignment'>
          Alinhamento
          <input
            id='alignment'
            type='text'
            value={appearence.alignment}
            onChange={(e) => setAppearence({ ...appearence, alignment: e.target.value })}
          />
        </label>

        <label htmlFor='background'>
          Antecedente
          <input
            id='background'
            type='text'
            value={appearence.background}
            onChange={(e) => setAppearence({ ...appearence, background: e.target.value })}
          />
        </label>

        <label htmlFor='appearence'>
          Aparência
          <textarea
            id='appearence'
            value={appearence.appearence}
            onChange={(e) => setAppearence({ ...appearence, appearence: e.target.value })}
          />
        </label>


        <button
          type='button'
          onClick={() => {
            setBio({ ...bio, appearence });
            saveAppearence();
          }}
        >
          Salvar
        </button>

      </form>

    </div>
  )
}
