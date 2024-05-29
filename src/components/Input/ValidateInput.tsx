import { TextField } from "@mui/material";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IAuth } from "../../models/IAuth";

interface ValidateFormProps {
  errors: FieldErrors<IAuth>;
  register: UseFormRegister<IAuth>;
}

const ValidateInput: FC<ValidateFormProps> = ({ errors, register }) => {
  return (
    <>
      <TextField
        {...register("username", {
          required: "Пожалуйста заполните поле",
        })}
        fullWidth
        size="small"
        placeholder="Name"
        variant="outlined"
        margin="normal"
      />
      {errors.username && (
        <span style={{ color: "red" }}>{errors.username.message}</span>
      )}

      <TextField
        {...register("password", {
          required: "Пожлауйста заполните поле",
        })}
        fullWidth
        size="small"
        placeholder="Password"
        variant="outlined"
        margin="normal"
        type="password"
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}
    </>
  );
};

export default ValidateInput;
