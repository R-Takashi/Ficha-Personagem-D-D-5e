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
    { name: 'Força', value: 0, mod: -5, save: -5, prof: false },
    { name: 'Destreza', value: 0, mod: -5, save: -5, prof: false },
    { name: 'Constituição', value: 0, mod: -5, save: -5, prof: false },
    { name: 'Inteligência', value: 0, mod: -5, save: -5, prof: false },
    { name: 'Sabedoria', value: 0, mod: -5, save: -5, prof: false },
    { name: 'Carisma', value: 0, mod: -5, save: -5, prof: false },
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

    const hitDice = `${level}d?`;
    setLifePoints({ ...lifePoints, dice: hitDice });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  useEffect(() => {
    const updateSkills = {
      strength: skills.strength.map((skill) => {
        return skill.prof ? { ...skill, value: attributes[0].mod + proficiencyBonus } : { ...skill, value: attributes[0].mod };
      }),
      dexterity: skills.dexterity.map((skill) => {
        return skill.prof ? { ...skill, value: attributes[1].mod + proficiencyBonus } : { ...skill, value: attributes[1].mod };
      }),
      intelligence: skills.intelligence.map((skill) => {
        return skill.prof ? { ...skill, value: attributes[3].mod + proficiencyBonus } : { ...skill, value: attributes[3].mod };
      }),
      wisdom: skills.wisdom.map((skill) => {
        return skill.prof ? { ...skill, value: attributes[4].mod + proficiencyBonus } : { ...skill, value: attributes[4].mod };
      }),
      charisma: skills.charisma.map((skill) => {
        return skill.prof ? { ...skill, value: attributes[5].mod + proficiencyBonus } : { ...skill, value: attributes[5].mod };
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
