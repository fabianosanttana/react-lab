// react context sample

import React, { createContext } from "react";
import { AppContext } from "./context";

interface AppProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppProps> = ({ children }) => {
  const [name, setName] = React.useState("1");
  const [secondName, setSecondName] = React.useState("2");

  const value = {
    name,
    setName,
    secondName,
    setSecondName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
