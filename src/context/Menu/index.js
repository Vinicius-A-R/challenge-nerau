import React, { useState, createContext, useContext } from 'react';

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [active, setActive] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) throw new Error('useMenu must be used within a CountProvider');

  const { active, setActive } = context;

  return { active, setActive };
}
