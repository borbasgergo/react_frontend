import React, { useContext } from "react"
import { useRoutes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { appStateI, authStateI } from "./types/types";
import { routes } from "./routes";
import { authContext } from "./context/authContext";


const App: React.FC = () => {

  const { isLoggedIn } = useContext(authContext) //useSelector<appStateI, authStateI>( state => state.authState)

  const routing = useRoutes(routes(isLoggedIn))

  return <>
    {routing}
  </>
};

export default App;
