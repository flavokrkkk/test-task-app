import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { DownFormWrapper } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import ValidateInput from "../Input/ValidateInput";
import { IAuth } from "../../models/IAuth";

interface AuthFormProps {
  handleAuthorization: (username: string, password: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ handleAuthorization }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IAuth>({
    mode: "onChange",
  });

  const handleAuthorizationCustomer: SubmitHandler<IAuth> = (data) => {
    handleAuthorization(data.username, data.password);
    reset();
  };

  useEffect(() => {
    const subscription = watch((value) => {
      value.username && value.password
        ? setIsDisabled(false)
        : setIsDisabled(true);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(handleAuthorizationCustomer)}>
      <ValidateInput errors={errors} register={register} />
      <DownFormWrapper>
        <Button
          disabled={isDisabled}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Войти
        </Button>
      </DownFormWrapper>
    </form>
  );
};

export default AuthForm;
