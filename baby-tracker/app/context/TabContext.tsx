import React, { createContext, useContext, useState, ReactNode } from 'react';

type TabContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>('home');

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};

export const useTabContext = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};
