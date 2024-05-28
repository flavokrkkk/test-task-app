import { Button, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { DownFormWrapper } from "./styles";

interface AuthFormProps {
  handleAuthorization: (username: string, password: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ handleAuthorization }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.target.value);
    username.length === 0 ? setErrorName(true) : setErrorName(false);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleAuthorizationCustomer = () => {
    handleAuthorization(username, password);
  };
  useEffect(() => {
    username.length === 0 ? setErrorName(true) : setErrorName(false);
    password.length === 0 ? setErrorPassword(true) : setErrorPassword(false);
  }, [username.length, password.length]);
  return (
    <form onSubmit={handleAuthorizationCustomer}>
      <TextField
        fullWidth
        size="small"
        placeholder="Name"
        variant="outlined"
        error={errorName}
        helperText={errorName && "Пожалуйста заполните поле"}
        margin="normal"
        value={username}
        onChange={handleChangeUsername}
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Password"
        variant="outlined"
        margin="normal"
        error={errorPassword}
        helperText={errorPassword && "Пожалуйста заполните поле"}
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      <DownFormWrapper>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAuthorizationCustomer}
        >
          Войти
        </Button>
      </DownFormWrapper>
    </form>
  );
};

export default AuthForm;
