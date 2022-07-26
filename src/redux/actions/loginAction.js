import { apicall } from "../../utils/ApiCall";

export const login = ({ username, password }) => {
  return async (dispatch) => {
    try {
      let res = await apicall.request(
        "post",
        `/auth/login`,
        {
          username,
          password,
        },
        false
      );
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });

      console.log(res);
      localStorage.setItem("TOKEN_KEY", res.data.token);
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: error,
      });
    }
  };
};
