const initialState = {
  isLoading: true,
  postData: null,
  error: null,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST_DATA":
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case "ADD_POST_SUCCESS":
      return {
        ...state,
        postData: action,
        isLoading: false,
      };
    case "ADD_POST_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default postReducer;
