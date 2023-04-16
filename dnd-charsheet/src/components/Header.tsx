import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { HeaderS } from './Styles/HeaderS'


export default function Header() {
  const {
    name, setName,
    race, setRace,
    classChar, setClassChar,
    level, setLevel,
  } = useContext(AppContext) as any

  return (
    <HeaderS>
      <div>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="race">Raça: </label>
        <input
          type="text"
          name="race"
          value={race}
          onChange={(e) => setRace(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="class">Classe: </label>
        <input
          type="text"
          name="class"
          value={classChar}
          onChange={(e) => setClassChar(e.target.value)}
        />
      </div>

      <div className='Level'>
        <label htmlFor="level">Nível: </label>
        <input
          type="number"
          name="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>

    </HeaderS>
  )
}
