export const setProperties = (properties) => {
  return {
    type: "SET_PROPERTIES",
    payload: properties,
  };
};

export const setCurrentProperty = (id) => {
  return {
    type: "SET_CURRENT_PROPERTY",
    payload: id,
  };
};

export const setCurrentPropertyData = (data) => {
  return {
    type: "SET_CURRENT_PROPERTY_DATA",
    payload: data,
  };
};

export const setPropertiesUpdated = (update) => {
  return {
    type: "SET_PROPERTIES_UPDATE",
    payload: update,
  };
};
