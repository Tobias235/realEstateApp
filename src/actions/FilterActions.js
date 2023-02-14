export const setCities = (cities) => {
  return {
    type: "SET_CITIES",
    payload: cities,
  };
};

export const setPropertyTypes = (property_types) => {
  return {
    type: "SET_PROPERTY_TYPES",
    payload: property_types,
  };
};

export const setUpdateFilter = (update_filter) => {
  return {
    type: "SET_UPDATE_FILTER",
    payload: update_filter,
  };
};
