import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../utils/routesName";
import { HelloContainer } from "./styles";

const HelloPage = () => {
  const navigate = useNavigate();

  const handleNaviageToAuth = () => {
    navigate(RoutesName.AUTHORIZATION_ROUTE);
  };

  return (
    <HelloContainer>
      <Typography variant="h2">Добрый день!</Typography>
      <p>Для продолжения необходимо авторизоваться</p>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={handleNaviageToAuth}
      >
        Авторизоваться!
      </Button>
    </HelloContainer>
  );
};

export default HelloPage;
