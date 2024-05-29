import { AppBar, Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ToolbarWrapper } from "./styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelectors } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";
import { RoutesName } from "../../utils/routesName";

const NavBar = () => {
  const { isAuth } = useAppSelector(UserSelectors);

  const { logOutApp } = useActions();

  return (
    <Box>
      <AppBar position="static" variant="outlined">
        <ToolbarWrapper>
          <Typography variant="h6" component="div">
            <NavLink className="link" to={RoutesName.HOME}>
              Data App
            </NavLink>
          </Typography>
          {isAuth && (
            <Button variant="outlined" color="inherit" onClick={logOutApp}>
              Выйти
            </Button>
          )}
        </ToolbarWrapper>
      </AppBar>
    </Box>
  );
};

export default NavBar;
