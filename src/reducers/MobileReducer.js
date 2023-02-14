const InitialState = {
  mobile_menu: false,
  show_options: false,
};

const MobileReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_MOBILE_MENU":
      return { ...state, mobile_menu: action.payload };
    case "SET_SHOW_MOBILE_USER_DROPDOWN":
      return { ...state, show_options: action.payload };
    default:
      return state;
  }
};

export default MobileReducer;
