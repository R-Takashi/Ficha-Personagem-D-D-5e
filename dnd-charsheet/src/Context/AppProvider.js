import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [tab, setTab] = useState('Personagem');
  const [contentTab, setContentTab] = useState({});
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [charClass, setCharClass] = useState([]);
  const [level, setLevel] = useState(0);
  const [experience, setExperience] = useState(0);
  const [attributes, setAttributes] = useState([
    { name: 'Força', value: 0, mod: -5, save: -5, prof: false, attr: 'strength' },
    { name: 'Destreza', value: 0, mod: -5, save: -5, prof: false, attr: 'dexterity' },
    { name: 'Constituição', value: 0, mod: -5, save: -5, prof: false, attr: 'constitution' },
    { name: 'Inteligência', value: 0, mod: -5, save: -5, prof: false, attr: 'intelligence' },
    { name: 'Sabedoria', value: 0, mod: -5, save: -5, prof: false, attr: 'wisdom' },
    { name: 'Carisma', value: 0, mod: -5, save: -5, prof: false, attr: 'charisma' },
  ]);
  const [proficiencyBonus, setProficiencyBonus] = useState(2);
  const [lifePoints, setLifePoints] = useState({
    max: 0,
    current: 0,
    temporary: 0,
    dice: "1d?"
  });
  const [movement, setMovement] = useState(0);
  const [skills, setSkills] = useState({
    strength: [
      { name: 'Atletismo', value: attributes[0].mod, baseMod: attributes[0].mod, prof: 'notProf' },
    ],
    dexterity: [
      { name: 'Acrobacia', value: attributes[1].mod, baseMod: attributes[1].mod, prof: 'notProf' },
      { name: 'Furtividade', value: attributes[1].mod, baseMod: attributes[1].mod, prof: 'notProf' },
      { name: 'Prestidigitação', value: attributes[1].mod, baseMod: attributes[1].mod, prof: 'notProf' },
    ],
    intelligence: [
      { name: 'Arcanismo', value: attributes[3].mod, baseMod: attributes[3].mod, prof: 'notProf' },
      { name: 'História', value: attributes[3].mod, baseMod: attributes[3].mod, prof: 'notProf' },
      { name: 'Investigação', value: attributes[3].mod, baseMod: attributes[3].mod, prof: 'notProf' },
      { name: 'Natureza', value: attributes[3].mod, baseMod: attributes[3].mod, prof: 'notProf' },
      { name: 'Religião', value: attributes[3].mod, baseMod: attributes[3].mod, prof: 'notProf' },
    ],
    wisdom: [
      { name: 'Lidar com Animais', value: attributes[4].mod, baseMod: attributes[4].mod, prof: 'notProf' },
      { name: 'Intuição', value: attributes[4].mod, baseMod: attributes[4].mod, prof: 'notProf' },
      { name: 'Medicina', value: attributes[4].mod, baseMod: attributes[4].mod, prof: 'notProf' },
      { name: 'Percepção', value: attributes[4].mod, baseMod: attributes[4].mod, prof: 'notProf' },
      { name: 'Sobrevivência', value: attributes[4].mod, baseMod: attributes[4].mod, prof: 'notProf' },
    ],
    charisma: [
      { name: 'Atuação', value: attributes[5].mod, baseMod: attributes[5].mod, prof: 'notProf' },
      { name: 'Enganação', value: attributes[5].mod, baseMod: attributes[5].mod, prof: 'notProf' },
      { name: 'Intimidação', value: attributes[5].mod, baseMod: attributes[5].mod, prof: 'notProf' },
      { name: 'Persuasão', value: attributes[5].mod, baseMod: attributes[5].mod, prof: 'notProf' },
    ],
  });
  const [currency, setCurrency] = useState({
    platinum: 0,
    gold: 0,
    electrum: 0,
    silver: 0,
    copper: 0,
  });
  const [listItems, setListItems] = useState([]);
  const [listSpells, setListSpells] = useState({
    "Truques": [],
    "1º": [],
    "2º": [],
    "3º": [],
    "4º": [],
    "5º": [],
    "6º": [],
    "7º": [],
    "8º": [],
    "9º": [],
  });
  const [attributeSpell, setAttributeSpell] = useState({
    attr: '',
    mod: 0,
    CD: 0,
    bonus: 0,
  });
  const [listTraits, setListTraits] = useState([{ name: 'Teste', description: 'Teste Descrição' }]);
  const [listLanguages, setListLanguages] = useState([]);
  const [listProficiencies, setListProficiencies] = useState([]);
  const [listWeapons, setListWeapons] = useState([]);
  const [listSkills, setListSkills] = useState([]);
  const [listResources, setListResources] = useState([
    { name: 'Proficiência Bonus', current: proficiencyBonus, max: proficiencyBonus },
  ]);
  const [bio, setBio] = useState({});
  const [notes, setNotes] = useState({});


  useEffect(() => {
    const bonus = Math.floor((level - 1) / 4) + 2;
    setProficiencyBonus(bonus);
    const updateResources = listResources.map((resource) => {
      return resource.name === 'Proficiência Bonus' ? { ...resource, current: bonus, max: bonus } : resource;
    });
    setListResources(updateResources);

    const hitDice = `${level}d?`;
    setLifePoints({ ...lifePoints, dice: hitDice });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  useEffect(() => {
    
    const proficiencyValue = (skill, attr) => {
      const proficiencyLevel = ['notProf', 'prof', 'halfProf', 'expert'];
      const profIndex = proficiencyLevel.indexOf(skill.prof);
      const proficiencyValue = [
        attr.mod,
        (attr.mod + proficiencyBonus),
        (attr.mod + Math.floor(proficiencyBonus / 2)), 
        (attr.mod + (proficiencyBonus * 2))
      ]
      return proficiencyValue[profIndex];
    };
      

    const strengthSkills = skills.strength.map((skill) => {
      return { 
        ...skill, 
        baseMod: attributes[0].mod,
        value: proficiencyValue(skill, attributes[0]),
      };
    });

    const dexteritySkills = skills.dexterity.map((skill) => {
      return { 
        ...skill, 
        baseMod: attributes[1].mod,
        value: proficiencyValue(skill, attributes[1]),
      };
    });

    const intelligenceSkills = skills.intelligence.map((skill) => {
      return { 
        ...skill, 
        baseMod: attributes[3].mod,
        value: proficiencyValue(skill, attributes[3]),
      };
    });

    const wisdomSkills = skills.wisdom.map((skill) => {
      return {
        ...skill,
        baseMod: attributes[4].mod,
        value: proficiencyValue(skill, attributes[4]),
      };
    });

    const charismaSkills = skills.charisma.map((skill) => {
      return {
        ...skill,
        baseMod: attributes[5].mod,
        value: proficiencyValue(skill, attributes[5]),
      };
    });

    setSkills({
      strength: strengthSkills,
      dexterity: dexteritySkills,
      intelligence: intelligenceSkills,
      wisdom: wisdomSkills,
      charisma: charismaSkills,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes, proficiencyBonus]);

  useEffect(() => {
    if (attributeSpell.attr) {
      const attr = attributes.find((attribute) => attribute.attr === attributeSpell.attr);
      const mod = attr.mod;
      const CD = 8 + mod + proficiencyBonus;
      const bonus = proficiencyBonus + mod;
      setAttributeSpell({ ...attributeSpell, mod, CD, bonus });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeSpell.attr, attributes, proficiencyBonus]);
    


  const resetResources = () => {
    const updateResources = listResources.map((resource) => resource.current !== resource.max ? { ...resource, current: resource.max } : resource);
    setListResources(updateResources);
  };


  const contextValue = {
    tab, setTab,
    contentTab, setContentTab,
    name, setName,
    race, setRace,
    charClass, setCharClass,
    level, setLevel,
    experience, setExperience,
    attributes, setAttributes,
    proficiencyBonus,
    lifePoints, setLifePoints,
    movement, setMovement,
    skills, setSkills,
    currency, setCurrency,
    listItems, setListItems,
    listSpells, setListSpells,
    attributeSpell, setAttributeSpell,
    listTraits, setListTraits,
    listLanguages, setListLanguages,
    listProficiencies, setListProficiencies,
    listWeapons, setListWeapons,
    listSkills, setListSkills,
    listResources, setListResources,
    resetResources,
    bio, setBio,
    notes, setNotes,
  };


  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
