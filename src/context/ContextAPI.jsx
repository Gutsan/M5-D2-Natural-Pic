/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const ContextAPI = createContext({});

export function ContextAPIProvider({ children }) {
  const [dataImg, SetDataImg] = useState([]);

  return (
    <ContextAPI.Provider
      value={{
        dataImg,
        SetDataImg,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}
