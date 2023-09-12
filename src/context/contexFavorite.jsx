
import { createContext, useState } from "react";
export const ContextFAV = createContext({});

export function ContextFAVProvider({ children }) {
  const [dataFav, SetDataFav] =useState([
    {
      id: "",
      width: "",
      height: "",
      url: "",
      photographer: "No Found",
      photographer_url: "",
      photographer_id: "",
      avg_color: "",
      src: {
        original: "",
        large2x: "",
        large: "",
        medium: "",
        small: "",
        portrait: "",
        landscape: "",
        tiny: "",
      },
      liked: false,
      alt: "Nofound",
    },
  ]);

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