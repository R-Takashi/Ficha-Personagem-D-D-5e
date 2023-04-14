import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`


export default function Header() {
  const {
    name, setName,
    race, setRace,
    classChar, setClassChar,
    level, setLevel,
    experience, setExperience,
  } = useContext(AppContext) as any

  return (
    <HeaderContainer>
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

      <div>
        <label htmlFor="level">Nível: </label>
        <input
          type="number"
          name="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="experience">Experiência: </label>
        <input
          type="number"
          name="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>

    </HeaderContainer>
  )
}
