const InitialState = {
  name: "",
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
