import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DropdownContextType {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Today');

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
