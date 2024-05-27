import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { DownFormWrapper } from "./styles";

interface AuthFormProps {
  handleAuthorization: (username: string, password: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ handleAuthorization }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAuthorizationCustomer = () => {
    handleAuthorization(username, password);
  };
  return (
    <form onSubmit={handleAuthorizationCustomer}>
      <TextField
        size="small"
        placeholder="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={handleChangeUsername}
      />
      <TextField
        size="small"
        placeholder="Password"
        variant="outlined"
        fullWidth
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
