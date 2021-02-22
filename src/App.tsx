import React, { useContext } from "react"
import { useRoutes } from 'react-router-dom';
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
