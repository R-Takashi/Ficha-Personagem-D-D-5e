import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'


export default function OtherProficiencies() {
  const { listProficiencies, setListProficiencies } = useContext(AppContext);
  const [ proficience, setProficience ] = React.useState('');


  return (
    <div>
      <h1>Outras Proficiências</h1>

      <div>
        <label htmlFor="proficience">Proficiência: </label>
        <input
          type="text"
          name="proficience"
          value={proficience}
          onChange={(e) => setProficience(e.target.value)}
        />

        <button
          type="button"
          onClick={() => {
            setListProficiencies([...listProficiencies, proficience]);
            setProficience('');
          }}
        >
          Adicionar
        </button>
        
      </div>

      <div>
        <ul>
          {listProficiencies.map((proficience: any, index: number) => (
            <li key={index}>
              {proficience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
