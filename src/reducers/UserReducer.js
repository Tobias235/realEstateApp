const InitialState = {
  name: "",
  id: "",
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default UserReducer;
