import React, { useState } from 'react';

export const MenuContext = React.createContext({});

function GlobalState({ children }) {
  const [showOverlay, toggleShowOverlay] = useState(false);

  function showNav() {
      toggleShowOverlay(true)
  }
  
  function closeNav() {
      toggleShowOverlay(false)
  }

  return (
    <MenuContext.Provider value={{ showNav, closeNav, showOverlay }}>
      {children}
    </MenuContext.Provider>
  );
}

export default GlobalState;
