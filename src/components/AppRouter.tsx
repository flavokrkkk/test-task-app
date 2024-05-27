import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoutes } from "../routes/routes";
import HomePage from "../pages/HomePage/HomePage";

const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth &&
        privateRoute.map(({ path, component }) => (
          <Route key={path} path={path} Component={component} />
        ))}
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={HomePage} />
    </Routes>
  );
};

export default AppRouter;
