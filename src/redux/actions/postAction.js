import { apicall } from "../../utils/ApiCall";

export const PostDataAction = ({ data }) => {
  console.log(data);
  return async (dispatch) => {
    try {
      let res = await apicall.request("put", `/client/add`, data, true);
      dispatch({
        type: "ADD_POST_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "ADD_POST_FAILED",
        payload: error,
      });
    }
  };
};
