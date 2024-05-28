import { useNavigate } from "react-router-dom";
import { AuthContainer, AuthWrapper, TypographyTitle } from "./styles";
import { RoutesName } from "../../utils/routesName";
import { authorization } from "../../http/userApi";
import { useActions } from "../../hooks/useActions";
import AuthForm from "../../components/AuthForm/AuthForm";
const AuthPage = () => {
  const navigate = useNavigate();

  const { toggleIsAuth } = useActions();

  const handleAuthorization = async (username: string, password: string) => {
    try {
      const { token } = await authorization(username, password);
      if (token) {
        toggleIsAuth(true);
        navigate(RoutesName.HOME);
      }
    } catch (err) {
      //закинуть модалку
      alert(err);
    }
  };

  return (
    <AuthContainer>
      <AuthWrapper>
        <TypographyTitle variant="h4">Авторизация</TypographyTitle>
        <AuthForm handleAuthorization={handleAuthorization} />
      </AuthWrapper>
    </AuthContainer>
  );
};

export default AuthPage;
