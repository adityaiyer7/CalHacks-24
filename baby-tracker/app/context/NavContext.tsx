"use client";
import React, { createContext, useContext, useState } from 'react';

interface NavContextType {
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState('Home'); // Default value

  return (
    <NavContext.Provider value={{ selectedNav, setSelectedNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNavContext must be used within a NavProvider');
  }
  return context;
};
