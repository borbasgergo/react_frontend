import { Navigate, PartialRouteObject } from "react-router";
import { Home } from "../comps/Home"
import { Dashboard } from "../comps/Dashboard"

export const routes = (loggedIn: boolean): PartialRouteObject[] => {
    return [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/app",
        element: loggedIn ? <Dashboard /> : <Navigate to="/" />
      }
    ]
}