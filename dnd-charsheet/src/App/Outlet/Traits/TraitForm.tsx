import React, { useContext, useEffect } from 'react'
import AppContext from '../../../Context/AppContext'
import { TraitFormS } from './Styles/TraitForm';

export default function TraitForm(props: any) {
  const { type, index=0, newTrait=false, editTrait=false, saveTrait } = props;

  const { 
    listTraits, setListTraits,
    listLanguages, setListLanguages,
    listProficiencies, setListProficiencies,
    listArmorProficiencies, setListArmorProficiencies,
    listWeaponProficiencies, setListWeaponProficiencies,
  } = useContext(AppContext);

  const [trait, setTrait] = React.useState(
    type === 'general' ? { name: '', description: '' } : { name: '' }
  );

  useEffect(() => {
    switch (type) {
      case 'general':
        if (editTrait) {
          setTrait({...listTraits[index]});
        }
        break;
      case 'languages':
        if (editTrait) {
          setTrait({...listLanguages[index]});
        }
        break;
      case 'proficiencies':
        if (editTrait) {
          setTrait({...listProficiencies[index]});
        }
        break;
      case 'armorProficiencies':
        if (editTrait) {
          setTrait({...listArmorProficiencies[index]});
        }
        break;
      case 'weaponProficiencies':
        if (editTrait) {
          setTrait({...listWeaponProficiencies[index]});
        }
        break;
      default:
        break;

    }
  }, [
      editTrait, 
      index, 
      listLanguages, 
      listProficiencies,
      listArmorProficiencies,
      listWeaponProficiencies,
      listTraits,
      type]);

  const handleSaveTrait = () => {
    if (newTrait) {
      switch (type) {
        case 'general':
          setListTraits([...listTraits, trait]);
          break;
        case 'languages':
          setListLanguages([...listLanguages, trait]);
          break;
        case 'proficiencies':
          setListProficiencies([...listProficiencies, trait]);
          break;
        case 'armorProficiencies':
          setListArmorProficiencies([...listArmorProficiencies, trait]);
          break;
        case 'weaponProficiencies':
          setListWeaponProficiencies([...listWeaponProficiencies, trait]);
          break;
        default:
          break;
      }

      setTrait(type === 'general' ? { name: '', description: '' } : { name: '' });

      return saveTrait();
    }

    const editedTrait = {
      ...trait,
    }

    switch (type) {
      case 'general':
        const updatedGeneralList = [...listTraits];
        updatedGeneralList[index] = editedTrait;
        setListTraits(updatedGeneralList);
        break;
      case 'languages':
        const updatedLanguagesList = [...listLanguages];
        updatedLanguagesList[index] = editedTrait;
        setListLanguages(updatedLanguagesList);
        break;
      case 'proficiencies':
        const updatedProficienciesList = [...listProficiencies];
        updatedProficienciesList[index] = editedTrait;
        setListProficiencies(updatedProficienciesList);
        break
      case 'armorProficiencies':
        const updatedArmorProficienciesList = [...listArmorProficiencies];
        updatedArmorProficienciesList[index] = editedTrait;
        setListArmorProficiencies(updatedArmorProficienciesList);
        break;
      case 'weaponProficiencies':
        const updatedWeaponProficienciesList = [...listWeaponProficiencies];
        updatedWeaponProficienciesList[index] = editedTrait;
        setListWeaponProficiencies(updatedWeaponProficienciesList);
        break;
      default:
        break;
    }

    return saveTrait();
  };



  return (
    <TraitFormS>

      <div>
        {
          type === 'languages' ? (
          <label htmlFor='traitName'>Idioma: </label>
          ) : 
          type === 'proficiencies' ? (
            <label htmlFor='traitName'>Proficiência: </label>
          ) : (
            <label htmlFor='traitName'>Nome: </label>
          )
        }
        <input
          type='text'
          name='traitName'
          value={trait.name}
          onChange={(e) => setTrait({...trait, name: e.target.value})}
          
        />
      </div>

      {
        type === 'general' && (
          <div className='Description'>
            <label htmlFor='traitDescription'>Descrição</label>
            <textarea
              name='traitDescription'
              value={trait.description}
              onChange={(e) => setTrait({...trait, description: e.target.value})}
            />
          </div>
        )
      }

      <section className='Buttons'>
        {
          editTrait && (
            <button type='button' onClick={() => props.removeTrait()}>
              <img src='https://super.so/icon/light/trash.svg' alt="delete" />
            </button>
          )
        }
        
        <button 
          type='button' 
          onClick={handleSaveTrait}
          disabled={trait.name === ''}
        >
          <img src='https://super.so/icon/light/save.svg' alt="save" />
        </button>
      </section>
    </TraitFormS>
  )
}
