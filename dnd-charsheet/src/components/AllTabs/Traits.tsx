import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import GeneralTraits from './Traits/GeneralTraits';
import ListTrait from './Traits/ListTrait';


export default function Traits() {
  const { tab, listLanguages, setListLanguages,
    listProficiencies, setListProficiencies, } = useContext(AppContext);

  if (tab !== 'Características') return null;

  return (
    <>
      <div>
        <h1>Características e Talentos</h1>
        <GeneralTraits />
      </div>

      <div>
        <ListTrait
          listTrait={listLanguages}
          setListTrait={setListLanguages}
          title='Idiomas'
        />
      </div>

      <div>
        <ListTrait
          listTrait={listProficiencies}
          setListTrait={setListProficiencies}
          title='Outras Proficiências' 
        />
      </div>
        
    </>
  )
}
