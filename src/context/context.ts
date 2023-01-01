import { createContext } from "react";

export interface AppContextInterface {
  name: string;
  setName: (name: string) => void;
  secondName: string;
  setSecondName: (secondName: string) => void;
}

export const AppContext = createContext<AppContextInterface>({
  name: "",
  setName: () => {},
  secondName: "",
  setSecondName: () => {},
});
