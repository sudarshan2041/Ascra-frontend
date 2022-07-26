import React, { useEffect } from "react";
import {
  FormWrapper,
  FormCard,
  ErrorMsg,
  AutoCompleteTextField,
  InputTextField,
  LabelStyle,
  Header,
} from "./style";
import { useForm, Controller } from "react-hook-form";
import {
  representCompnayArr,
  bankArr,
  territoryArr,
  typeArr,
  gender,
} from "../../utils/Contants";
import { Paper, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PostDataAction } from "../../redux/actions/postAction";
import { listAction } from "../../redux/actions/getListAction";

function AddForm({ setOpenForm }) {
  const dispatch = useDispatch();
  const { postData } = useSelector((state) => state.postReducer);
  console.log("final update", postData);

  useEffect(() => {
    if (postData?.payload?.code === 200) {
      setOpenForm(false);
      dispatch(listAction());
    }
  }, [postData]);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    dispatch(PostDataAction({ data }));
  }

  function formClose() {
    setOpenForm(false);
  }

  return (
    <FormWrapper>
      <FormCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header>Add Form</Header>
          <div>
            <LabelStyle>Represents Company :</LabelStyle>
            <Controller
              render={({ ...props }) => (
                <AutoCompleteTextField
                  disablePortal
                  disableClearable
                  id="text"
                  type="text"
                  options={representCompnayArr}
                  getOptionLabel={(option) => option.name || ""}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  PaperComponent={({ children }) => (
                    <Paper style={{ fontSize: "12px" }}>{children}</Paper>
                  )}
                  ListboxProps={{
                    style: {
                      maxHeight: "150px",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      type={"text"}
                      placeholder={"Select represents company.."}
                      {...register("represents_company", {
                        required: true,
                      })}
                      {...params}
                    />
                  )}
                  {...props}
                />
              )}
              onChange={([, data]) => data}
              name="represents_company"
              control={control}
            />
            {errors?.represents_company?.type === "required" && (
              <ErrorMsg>Please select represents company</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Customer Name :</LabelStyle>
            <InputTextField
              id="text"
              size="small"
              sx={{ fontSize: "12px" }}
              fullWidth={true}
              name={"customer_name"}
              type={"text"}
              min="1"
              max="1000"
              {...register("customer_name", {
                required: "Please enter specification.",
              })}
            />
            {errors?.customer_name?.type === "required" && (
              <ErrorMsg>Please enter customer name</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Email ID :</LabelStyle>
            <InputTextField
              id="text"
              size="small"
              sx={{ fontSize: "12px" }}
              fullWidth={true}
              name={"email"}
              type={"text"}
              min="1"
              max="1000"
              {...register("email", {
                required: "Please enter specification.",
              })}
            />
            {errors?.email?.type === "required" && (
              <ErrorMsg>Please enter email</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Gender :</LabelStyle>
            <Controller
              render={({ ...props }) => (
                <AutoCompleteTextField
                  disablePortal
                  disableClearable
                  id="text"
                  type="text"
                  options={gender}
                  getOptionLabel={(option) => option.name || ""}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  PaperComponent={({ children }) => (
                    <Paper style={{ fontSize: "12px" }}>{children}</Paper>
                  )}
                  ListboxProps={{
                    style: {
                      maxHeight: "150px",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      type={"text"}
                      placeholder={"Select Gender.."}
                      {...register("gender", {
                        required: true,
                      })}
                      {...params}
                    />
                  )}
                  {...props}
                />
              )}
              onChange={([, data]) => data}
              name="gender"
              control={control}
            />
            {errors?.gender?.type === "required" && (
              <ErrorMsg>Please select your gender</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Address :</LabelStyle>
            <InputTextField
              id="text"
              size="small"
              sx={{ fontSize: "12px" }}
              fullWidth={true}
              name={"address"}
              type={"text"}
              min="1"
              max="1000"
              {...register("address", {
                required: "Please enter specification.",
              })}
            />
            {errors?.address?.type === "required" && (
              <ErrorMsg>Please enter your address</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Mobile Number :</LabelStyle>
            <InputTextField
              id="text"
              size="small"
              sx={{ fontSize: "12px" }}
              fullWidth={true}
              name={"mobile_no"}
              type={"text"}
              min="1"
              max="1000"
              {...register("mobile_no", {
                required: true,
              })}
            />
            {errors?.mobile_no?.type === "required" && (
              <ErrorMsg>Please enter your mobile number</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Bank :</LabelStyle>
            <Controller
              render={({ ...props }) => (
                <AutoCompleteTextField
                  disablePortal
                  disableClearable
                  id="text"
                  type="text"
                  options={bankArr}
                  getOptionLabel={(option) => option.name || ""}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  PaperComponent={({ children }) => (
                    <Paper style={{ fontSize: "12px" }}>{children}</Paper>
                  )}
                  ListboxProps={{
                    style: {
                      maxHeight: "150px",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      type={"text"}
                      placeholder={"Select Bank.."}
                      {...register("bank", {
                        required: true,
                      })}
                      {...params}
                    />
                  )}
                  {...props}
                />
              )}
              onChange={([, data]) => data}
              name="bank"
              control={control}
            />
            {errors?.bank?.type === "required" && (
              <ErrorMsg>Please select your bank</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Customer Type :</LabelStyle>
            <Controller
              render={({ ...props }) => (
                <AutoCompleteTextField
                  disablePortal
                  disableClearable
                  id="text"
                  type="text"
                  options={typeArr}
                  getOptionLabel={(option) => option.name || ""}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  PaperComponent={({ children }) => (
                    <Paper style={{ fontSize: "12px" }}>{children}</Paper>
                  )}
                  ListboxProps={{
                    style: {
                      maxHeight: "150px",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      type={"text"}
                      placeholder={"Select custome type.."}
                      {...register("customer_type", {
                        required: true,
                      })}
                      {...params}
                    />
                  )}
                  {...props}
                />
              )}
              onChange={([, data]) => data}
              name="customer_type"
              control={control}
            />
            {errors?.customer_type?.type === "required" && (
              <ErrorMsg>Please select your customer type</ErrorMsg>
            )}
          </div>
          <div>
            <LabelStyle>Territory Type :</LabelStyle>
            <Controller
              render={({ ...props }) => (
                <AutoCompleteTextField
                  disablePortal
                  disableClearable
                  id="text"
                  type="text"
                  options={territoryArr}
                  getOptionLabel={(option) => option.name || ""}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  PaperComponent={({ children }) => (
                    <Paper style={{ fontSize: "12px" }}>{children}</Paper>
                  )}
                  ListboxProps={{
                    style: {
                      maxHeight: "150px",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      type={"text"}
                      placeholder={"Select territory.."}
                      {...register("territory", {
                        required: true,
                      })}
                      {...params}
                    />
                  )}
                  {...props}
                />
              )}
              onChange={([, data]) => data}
              name="territory"
              control={control}
            />
            {errors?.territory?.type === "required" && (
              <ErrorMsg>Please select your territory</ErrorMsg>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{ mt: 2, ml: 4, width: "300px" }}
              variant="outlined"
              onClick={formClose}
            >
              cancel
            </Button>
            <Button
              sx={{ mt: 2, ml: 9, mr: 4, width: "300px" }}
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </FormCard>
    </FormWrapper>
  );
}

export default AddForm;
