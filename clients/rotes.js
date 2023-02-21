import { HOME_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";



export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login />
  }
]

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />
  }
]