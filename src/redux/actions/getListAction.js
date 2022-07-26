import { apicall } from "../../utils/ApiCall";

export const listAction = () => {
  return async (dispatch) => {
    try {
      let res = await apicall.request("get", `/client/get-all`, null, true);
      dispatch({
        type: "LIST_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "LIST_FAILED",
        payload: error,
      });
    }
  };
};
