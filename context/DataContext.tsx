'use client';

import { createContext, useState, ReactNode, useContext } from 'react';

interface DataContextType {
 
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

const DataContext = createContext<DataContextType>('' as any);

export const DataProvider = ({children}:{children:ReactNode}) => {
    const [data,setData] = useState<DataContextType>('' as any);
    const [moveTo,setMoveTo] = useState<string | null>(null);
    const [isActive,setIsActive] = useState<boolean>(false);
    return (
      <DataContext.Provider value={{isActive,setIsActive}}>
        {children}
      </DataContext.Provider>
    );  
    
}

export const useDataContext = () => useContext(DataContext);