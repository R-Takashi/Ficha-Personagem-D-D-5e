import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [tab, setTab] = useState('Personagem');
  const [contentTab, setContentTab] = useState({});
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [classChar, setClassChar] = useState('');
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [attributes, setAttributes] = useState([
    { name: 'Força', value: 0, mod: -5 },
    { name: 'Destreza', value: 0, mod: -5 },
    { name: 'Constituição', value: 0, mod: -5 },
    { name: 'Inteligência', value: 0, mod: -5 },
    { name: 'Sabedoria', value: 0, mod: -5 },
    { name: 'Carisma', value: 0, mod: -5 },
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
      { name: 'Atletismo', value: attributes[0].mod, prof: false },
    ],
    dexterity: [
      { name: 'Acrobacia', value: attributes[1].mod, prof: false },
      { name: 'Furtividade', value: attributes[1].mod, prof: false },
      { name: 'Prestidigitação', value: attributes[1].mod, prof: false },
    ],
    intelligence: [
      { name: 'Arcanismo', value: attributes[3].mod, prof: false },
      { name: 'História', value: attributes[3].mod, prof: false },
      { name: 'Investigação', value: attributes[3].mod, prof: false },
      { name: 'Natureza', value: attributes[3].mod, prof: false },
      { name: 'Religião', value: attributes[3].mod, prof: false },
    ],
    wisdom: [
      { name: 'Lidar com Animais', value: attributes[4].mod, prof: false },
      { name: 'Intuição', value: attributes[4].mod, prof: false },
      { name: 'Medicina', value: attributes[4].mod, prof: false },
      { name: 'Percepção', value: attributes[4].mod, prof: false },
      { name: 'Sobrevivência', value: attributes[4].mod, prof: false },
    ],
    charisma: [
      { name: 'Atuação', value: attributes[5].mod, prof: false },
      { name: 'Enganação', value: attributes[5].mod, prof: false },
      { name: 'Intimidação', value: attributes[5].mod, prof: false },
      { name: 'Persuasão', value: attributes[5].mod, prof: false },
    ],
  });

  useEffect(() => {
    const bonus = Math.floor((level - 1) / 4) + 2;
    setProficiencyBonus(bonus);
  }, [level]);

  useEffect(() => {
    const updateSkills = {
      strength: skills.strength.map((skill) => {
        if (skill.prof === true) {
          return { ...skill, value: attributes[0].mod + proficiencyBonus };
        }
        return { ...skill, value: attributes[0].mod };
      }),
      dexterity: skills.dexterity.map((skill) => {
        if (skill.prof === true) {
          return { ...skill, value: attributes[1].mod + proficiencyBonus };
        }
        return { ...skill, value: attributes[1].mod };
      }),
      intelligence: skills.intelligence.map((skill) => {
        if (skill.prof === true) {
          return { ...skill, value: attributes[3].mod + proficiencyBonus };
        }
        return { ...skill, value: attributes[3].mod };
      }),
      wisdom: skills.wisdom.map((skill) => {
        if (skill.prof === true) {
          return { ...skill, value: attributes[4].mod + proficiencyBonus };
        }
        return { ...skill, value: attributes[4].mod };
      }),
      charisma: skills.charisma.map((skill) => {
        if (skill.prof === true) {
          return { ...skill, value: attributes[5].mod + proficiencyBonus };
        }
        return { ...skill, value: attributes[5].mod };
      })
    };

    setSkills(updateSkills);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes, proficiencyBonus]);


  const contextValue = {
    tab, setTab,
    contentTab, setContentTab,
    name, setName,
    race, setRace,
    classChar, setClassChar,
    level, setLevel,
    experience, setExperience,
    attributes, setAttributes,
    proficiencyBonus,
    lifePoints, setLifePoints,
    movement, setMovement,
    skills, setSkills
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
