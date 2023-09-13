import { createContext, useState } from "react";
export const ContextFAV = createContext({});

// eslint-disable-next-line react/prop-types
export function ContextFAVProvider({ children }) {
  const [dataFav, SetDataFav] = useState([]);

  return (
    <ContextFAV.Provider
      value={{
        dataFav,
        SetDataFav,
      }}
    >
      {children}
    </ContextFAV.Provider>
  );
}
