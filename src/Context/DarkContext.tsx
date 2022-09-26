import React, {createContext, useState } from 'react'

type childrenType = {
    children: React.ReactNode;
};

// declaring createContext type, for preventing error in value of DarkContext.Provider
type DarkContextType = {
  isDark: string | null,
  setIsDark: React.Dispatch<React.SetStateAction<string | null>>
}

// import it in App.tsx
export const DarkContext = createContext({} as DarkContextType)

// import this DarkContextProvider in index.tsx
export const DarkContextProvider = ({children}: childrenType) => {
  const [ isDark, setIsDark ] = useState(localStorage.getItem('isDark'))
  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  )
}

