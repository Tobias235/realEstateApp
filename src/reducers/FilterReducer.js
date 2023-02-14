const InitialState = {
  cities: [],
  property_types: [],
  update_filter: false,
};

const FilterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CITIES":
      return { ...state, cities: action.payload };
    case "SET_PROPERTY_TYPES":
      return { ...state, property_types: action.payload };
    case "SET_UPDATE_FILTER":
      return { ...state, update_filter: action.payload };
    default:
      return state;
  }
};

export default FilterReducer;
