const InitialState = {
  loading: false,
  uploading_status: false,
  error: null,
};

const LoadingReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_UPLOADING_STATUS":
      return { ...state, uploading_status: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default LoadingReducer;
