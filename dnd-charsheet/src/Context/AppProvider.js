import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [tab, setTab] = useState('Personagem');
  const [contentTab, setContentTab] = useState({});
  const [attributes, setAttributes] = useState([
    { name: 'Força', value: 0, mod: -5 },
    { name: 'Destreza', value: 0, mod: -5 },
    { name: 'Constituição', value: 0, mod: -5 },
    { name: 'Inteligência', value: 0, mod: -5 },
    { name: 'Sabedoria', value: 0, mod: -5 },
    { name: 'Carisma', value: 0, mod: -5 },
  ]);

  const contextValue = {
    tab, setTab,
    contentTab, setContentTab,
    attributes, setAttributes
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
