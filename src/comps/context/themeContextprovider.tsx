import React, { useEffect } from "react";
import { themeContext } from "../../context/themeContext";
import { useSelector } from "react-redux";
import { appStateI } from "../../types/types";

export const ThemeContextProvider: React.FC = ({ children }) => {

  const theme = useSelector<appStateI, string>((state) => state.rootState.theme);


  useEffect(() => {
    console.log("themeprovider");
  }, []);

  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};
