import { Button, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useState } from "react";
import { DownFormWrapper } from "./styles";

interface AuthFormProps {
  handleAuthorization: (username: string, password: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ handleAuthorization }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleAuthorizationCustomer = () => {
    handleAuthorization(username, password);
  };

  return (
    <form onSubmit={handleAuthorizationCustomer}>
      <TextField
        fullWidth
        size="small"
        placeholder="Name"
        variant="outlined"
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
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      <DownFormWrapper>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleAuthorizationCustomer}
        >
          Авторизоваться
        </Button>
      </DownFormWrapper>
    </form>
  );
};

export default AuthForm;
