
import React, { createContext, useContext, useState } from "react";
import { DATA } from "../assets/data";

type GlobalContextType = {
  data: {}[];
  setData: React.Dispatch<React.SetStateAction<any>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(DATA);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
