import React from 'react'
import AppContext from '../../../Context/AppContext';
import AppearenceForm from './AppearenceForm';
import { AppearenceS } from './Styles/Appearence';


export default function Appearence() {
  const { bio } = React.useContext(AppContext);
  const [showAppearence, setShowAppearence] = React.useState(false);
  const [toEdit, setToEdit] = React.useState(false);


  return (
    <AppearenceS>
      <header>
        {
          bio?.appearence && (
            <div
              className='Btn-Show'
              onClick={() => setShowAppearence(!showAppearence)}
            >
              {
                showAppearence ? (
                  <img src='https://super.so/icon/light/chevron-up.svg' alt='Mais informações' />
                ) : (
                  <img src='https://super.so/icon/light/chevron-down.svg' alt='Mais informações' />
                )
              }
            </div>
          )
        }

        <h2
          className={`${showAppearence ? 'Listed' : ''}`}
          onClick={() => setShowAppearence(!showAppearence)}
        >Aparência</h2>

        <button
          type='button'
          onClick={() => setToEdit(!toEdit)}
        >
          <img src='https://super.so/icon/light/settings.svg' alt="Edit Appearence" />
        </button>
      </header>
      {
        toEdit ? (
          <AppearenceForm
            saveAppearence={() => setToEdit(!toEdit)}
          />
        ) : (
          <div className={`${showAppearence ? 'DisplayOn' : 'DisplayOff'}`}>
            <div>
              <p>Idade: </p>
              <span>{bio?.appearence?.age}</span>
            </div>

            <div>
              <p>Tamanho: </p>
              <span>{bio?.appearence?.size}</span>
            </div>

            <div>
              <p>Altura: </p>
              <span>{bio?.appearence?.height}</span>
            </div>

            <div>
              <p>Peso: </p>
              <span>{bio?.appearence?.weight}</span>
            </div>

            <div>
              <p>Olhos: </p>
              <span>{bio?.appearence?.eyes}</span>
            </div>

            <div>
              <p>Pele: </p>
              <span>{bio?.appearence?.skin}</span>
            </div>

            <div>
              <p>Cabelo: </p>
              <span>{bio?.appearence?.hair}</span>
            </div>

            <div>
              <p>Gênero: </p>
              <span>{bio?.appearence?.gender}</span>
            </div>

            <div>
              <p>Alinhamento: </p>
              <span>{bio?.appearence?.alignment}</span>
            </div>

            <div>
              <p>Antecedente: </p>
              <span>{bio?.appearence?.background}</span>
            </div>

            <div className='Appearence'>
              <p>Aparência: </p>
              <pre>{bio?.appearence?.appearence}</pre>
            </div>
          </div>
        )
      }

    </AppearenceS>
  )
}
