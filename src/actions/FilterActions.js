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

export const setUpdateFilter = (city, type) => {
  return {
    type: "SET_UPDATE_FILTER",
    payload: {
      city: city,
      type: type,
    },
  };
};
