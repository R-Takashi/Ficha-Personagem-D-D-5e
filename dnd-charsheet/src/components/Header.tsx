import React from 'react'

const styles = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0,
}

export default function Header() {
  return (
    <div style={ styles }>
      <h3>Nome: </h3>
      <h3>Raça: </h3>
      <h3>Classe: </h3>
      <h3>Nível: </h3>
      <h3>Experiência: </h3>
    </div>
  )
}
