import React, { useContext } from 'react'
import AppContext from '../../../Context/AppContext'
import GeneralTraits from './GeneralTraits';
import ListTrait from './ListTrait';
import { TraitS } from './Styles/Traits';


export default function Traits() {
  const { tab, listLanguages, setListLanguages,
    listProficiencies, setListProficiencies, } = useContext(AppContext);

  if (tab !== 'Características') return null;

  return (
    <TraitS>
    
      <h1 className='Title'>Características & Talentos</h1>
      
      <GeneralTraits /> 
      
      <ListTrait
        listTrait={listLanguages}
        setListTrait={setListLanguages}
        title='Idiomas'
        type='languages'
      />
    
      <ListTrait
        listTrait={listProficiencies}
        setListTrait={setListProficiencies}
        title='Outras Proficiências'
        type='proficiencies' 
      />
        
    </TraitS>
  )
}
