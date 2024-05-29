import { useNavigate } from "react-router-dom";
import { AuthContainer, AuthWrapper, TypographyTitle } from "./styles";
import { RoutesName } from "../../utils/routesName";
import { useActions } from "../../hooks/useActions";
import AuthForm from "../../components/Form/AuthForm";
import { authorizeUserAsync } from "../../http/userApi";
import { useAppSelector } from "../../hooks/useAppSelector";
import { UserSelectors } from "../../store/selectors";
import ModalError from "../../components/Modal/ModalError/ModalError";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
const AuthPage = () => {
  const navigate = useNavigate();

  const { toggleIsAuth, toggleIsLoading, setErrorAuth } = useActions();

  const { isLoading, authError } = useAppSelector(UserSelectors);

  const [isVisibleModalError, setIsVisibleModalError] = useState(false);

  //В иделе вынести в асинхронный экшен
  const handleAuthorization = async (username: string, password: string) => {
    try {
      toggleIsLoading(true);
      const { token } = await authorizeUserAsync(username, password);
      if (token) {
        toggleIsAuth(true);
        navigate(RoutesName.HOME);
      }
    } catch (err) {
      setErrorAuth(`${err}`);
      setIsVisibleModalError(true);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContainer>
      <AuthWrapper>
        <TypographyTitle variant="h4">Авторизация</TypographyTitle>
        <AuthForm handleAuthorization={handleAuthorization} />
      </AuthWrapper>
      <ModalError
        isVisible={isVisibleModalError}
        error={authError}
        setIsVisible={setIsVisibleModalError}
      />
    </AuthContainer>
  );
};

export default AuthPage;
