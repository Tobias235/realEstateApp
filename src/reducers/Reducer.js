const InitialState = {
  properties: [],
  login_status: false,
  current_user: null,
  login_modal: false,
  mobile_menu: false,
  show_details: false,
  show_options: false,
  show_comment: false,
  show_properties_modal: false,
};

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };
    case "SET_LOGIN_STATUS":
      return { ...state, login_status: action.payload };
    case "SET_CURRENT_USER":
      return { ...state, current_user: action.payload };
    case "SET_LOGIN_MODAL":
      return { ...state, login_modal: action.payload };
    case "SET_MOBILE_MENU":
      return { ...state, mobile_menu: action.payload };
    case "SET_SHOW_DETAILS":
      return { ...state, show_details: action.payload };
    case "SET_SHOW_MOBILE_NAV_OPTIONS":
      return { ...state, show_options: action.payload };
    case "SET_SHOW_ADD_COMMENT":
      return { ...state, show_comment: action.payload };
    case "SET_SHOW_PROPERTIES_MODAL":
      return { ...state, show_properties_modal: action.payload };

    default:
      return state;
  }
};

export default Reducer;
