const initialState = {
  isLoading: true,
  data: null,
  error: null,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_DATA":
      return {
        ...state,
        ...action,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        data: action,
        isLoading: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action,
      };

    default:
      return state;
  }
};
export default loginReducer;
