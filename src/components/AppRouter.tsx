import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoutes } from "../routes/routes";
import HomePage from "../pages/HomePage/HomePage";
import { useAppSelector } from "../hooks/useAppSelector";
import { UserSelectors } from "../store/selectors";
import HelloPage from "../pages/HelloPage/HelloPage";

const AppRouter = () => {
  const { isAuth } = useAppSelector(UserSelectors);
  return (
    <Routes>
      {isAuth &&
        privateRoute.map(({ path, component }) => (
          <Route key={path} path={path} Component={component} />
        ))}
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} path={path} Component={component} />
      ))}
      <Route path="*" Component={isAuth ? HomePage : HelloPage} />
    </Routes>
  );
};

export default AppRouter;
