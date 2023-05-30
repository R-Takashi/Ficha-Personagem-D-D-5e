import React from 'react'
import AppContext from '../../../Context/AppContext';
import AppearenceForm from './AppearenceForm';


export default function Appearence() {
  const { bio } = React.useContext(AppContext);

  const [toEdit, setToEdit] = React.useState(false);


  return (
    <div>
      <h1>Aparência</h1>
      {
        toEdit ? (
          <AppearenceForm
            saveAppearence={() => setToEdit(!toEdit)}
          />
        ) : (
          <div>
            <p>Idade: {bio?.appearence?.age}</p>
            <p>Tamanho: {bio?.appearence?.size}</p>
            <p>Altura: {bio?.appearence?.height}</p>
            <p>Peso: {bio?.appearence?.weight}</p>
            <p>Olhos: {bio?.appearence?.eyes}</p>
            <p>Pele: {bio?.appearence?.skin}</p>
            <p>Cabelo: {bio?.appearence?.hair}</p>
            <p>Genero: {bio?.appearence?.gender}</p>
            <p>Alinhamento: {bio?.appearence?.alignment}</p>
            <p>Antecedente: {bio?.appearence?.background}</p>
            <p>Aparência: {bio?.appearence?.appearence}</p>

            <button
              type='button'
              onClick={() => setToEdit(!toEdit)}
            >
              Editar
            </button>
          </div>
        )
      }



    </div>
  )
}
