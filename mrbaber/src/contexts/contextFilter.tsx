'use client'

import { FilterType } from "@/types/filter";
import { ReactNode, createContext, useState } from "react";

export const ContextFilter = createContext({
  type: FilterType.Todos,
  setType: (value: FilterType) => {},
});

interface ProviderProps{
  children: ReactNode,
}

export function ContextFilterProvider({children}: ProviderProps){
  const [type, setType] = useState(FilterType.Todos);

  return(
    <ContextFilter.Provider value={{type, setType}}>
      {children}
    </ContextFilter.Provider>
  )
}