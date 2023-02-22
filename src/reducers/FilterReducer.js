const InitialState = {
  cities: [],
  property_types: [],
  update_filter: false,
  city: "default",
  type: "default",
};

const FilterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CITIES":
      return { ...state, cities: action.payload };
    case "SET_PROPERTY_TYPES":
      return { ...state, property_types: action.payload };
    case "SET_UPDATE_FILTER":
      return {
        ...state,
        city: action.payload.city,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

export default FilterReducer;
