const InitialState = {
  properties: [],
  current_property: null,
  current_property_data: null,
  loading: false,
  login_modal: false,
  mobile_menu: false,
  show_details: false,
  show_options: false,
  show_comment: false,
  show_upload_properties_modal: false,
  properties_update: false,
  update_filter: false,
};

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return { ...state, properties: action.payload };
    case "SET_CURRENT_PROPERTY":
      return { ...state, current_property: action.payload };
    case "SET_CURRENT_PROPERTY_DATA":
      return { ...state, current_property_data: action.payload };
    case "SET_PROPERTIES_UPDATE":
      return { ...state, properties_update: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_UPLOADING_STATUS":
      return { ...state, uploading_status: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_CURRENT_USER":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
      };
    case "SET_LOGIN_MODAL":
      return { ...state, login_modal: action.payload };
    case "SET_MOBILE_MENU":
      return { ...state, mobile_menu: action.payload };
    case "SET_SHOW_DETAILS":
      return { ...state, show_details: action.payload };
    case "SET_SHOW_MOBILE_USER_DROPDOWN":
      return { ...state, show_options: action.payload };
    case "SET_SHOW_ADD_COMMENT":
      return { ...state, show_comment: action.payload };
    case "SET_SHOW_UPLOAD_PROPERTIES_MODAL":
      return { ...state, show_upload_properties_modal: action.payload };
    case "SET_CITIES":
      return { ...state, cities: action.payload };
    case "SET_PROPERTY_TYPES":
      return { ...state, propertyTypes: action.payload };
    case "SET_UPDATE_FILTER":
      return { ...state, update_filter: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_MODAL_NAME":
      return { ...state, modalName: action.payload };
    default:
      return state;
  }
};

export default Reducer;
