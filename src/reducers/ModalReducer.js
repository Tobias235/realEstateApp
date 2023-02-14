const InitialState = {
  modal_name: "",
  show_profile: false,
  show_review: false,
  show_upload_properties_modal: false,
  show_details: false,
  login_modal: false,
};

const ModalReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_MODAL_NAME":
      return { ...state, modal_name: action.payload };
    case "SET_SHOW_PROFILE":
      return { ...state, show_profile: action.payload };
    case "SET_SHOW_ADD_REVIEW":
      return { ...state, show_review: action.payload };
    case "SET_SHOW_UPLOAD_PROPERTIES_MODAL":
      return { ...state, show_upload_properties_modal: action.payload };
    case "SET_SHOW_DETAILS":
      return { ...state, show_details: action.payload };
    case "SET_LOGIN_MODAL":
      return { ...state, login_modal: action.payload };
    default:
      return state;
  }
};

export default ModalReducer;
