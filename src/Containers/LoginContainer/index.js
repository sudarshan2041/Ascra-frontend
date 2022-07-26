import React from "react";

import {
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Wrapper, ErrorMsg, Demo } from "./style";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.loginReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  function onSubmit(data) {
    dispatch(login(data));
  }

  return (
    <div>
      <Demo>
        <span>EMAIL ID :</span> test@gmail.com
      </Demo>
      <Demo>
        <span>PASSWORD :</span>
        Ascra@123
      </Demo>

      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email ID"
            sx={{ m: 1, width: "300px" }}
            {...register("username", {
              required: true,
            })}
          />
          {errors?.username?.type === "required" && (
            <ErrorMsg>Email id required</ErrorMsg>
          )}

          <FormControl variant="outlined" sx={{ m: 1, width: "300px" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              {...register("password", {
                required: true,
              })}
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {errors?.password?.type === "required" && (
            <ErrorMsg>Password required</ErrorMsg>
          )}

          {data?.payload?.code === 400 && (
            <ErrorMsg>{data.payload.error}</ErrorMsg>
          )}

          <Button
            sx={{ m: 1, width: "300px" }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Wrapper>
    </div>
  );
}

export default LoginContainer;
