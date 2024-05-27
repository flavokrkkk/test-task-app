import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import { RoutesName } from "../utils/routesName";
import { IRoute } from "../models/IRoute";

export const publicRoutes = <IRoute[]>[
  {
    path: RoutesName.HELLO,
    component: AuthPage,
  },
  {
    path: RoutesName.AUTHORIZATION_ROUTE,
    component: AuthPage,
  },
];

export const privateRoute = <IRoute[]>[
  {
    path: RoutesName.HOME,
    component: HomePage,
  },
];
