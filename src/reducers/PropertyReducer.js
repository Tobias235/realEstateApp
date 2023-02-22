const InitialState = {
  current_property: null,
  current_property_data: null,
  properties_update: false,
};

const PropertyReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PROPERTY":
      return { ...state, current_property: action.payload };
    case "SET_CURRENT_PROPERTY_DATA":
      return { ...state, current_property_data: action.payload };
    case "SET_PROPERTIES_UPDATE":
      return { ...state, properties_update: action.payload };
    default:
      return state;
  }
};

export default PropertyReducer;
