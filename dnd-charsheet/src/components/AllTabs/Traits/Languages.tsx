import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'

export default function Languages() {
  const { listLanguages, setListLanguages } = useContext(AppContext);
  const [languages, setLanguages] = React.useState('');


  return (
    <div>
      <h1>Idiomas</h1>

      <div>
        <label htmlFor="languages">Idiomas: </label>
        <input
          type="text"
          name="languages"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />

        <button
          type="button"
          onClick={() => {
            setListLanguages([...listLanguages, languages]);
            setLanguages('');
          }}
        >
          Adicionar
        </button>

      </div>

      <div>
        <ul>
          {listLanguages.map((language: any, index: number) => (
            <li key={index}>{language}</li>
          ))}
        </ul>

      </div>

    </div>
  )
}
