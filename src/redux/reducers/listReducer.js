const initialState = {
  isLoading: true,
  listData: null,
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_DATA":
      return {
        ...state,
        ...action,
        isLoading: true,
      };
    case "LIST_SUCCESS":
      return {
        ...state,
        listData: action.payload,
        isLoading: false,
      };
    case "LIST_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action,
      };

    default:
      return state;
  }
};
export default listReducer;
