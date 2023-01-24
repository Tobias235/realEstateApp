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

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const setLoading = (loading) => {
  return {
    type: "SET_LOADING",
    payload: loading,
  };
};

export const setUploadingStatus = (status) => {
  return {
    type: "SET_UPLOADING_STATUS",
    payload: status,
  };
};

export const setCurrentUser = (name) => {
  return {
    type: "SET_CURRENT_USER",
    payload: name,
  };
};

export const setShowLoginModal = (login_modal) => {
  return {
    type: "SET_LOGIN_MODAL",
    payload: login_modal,
  };
};

export const setMobileMenu = (mobile_menu) => {
  return {
    type: "SET_MOBILE_MENU",
    payload: mobile_menu,
  };
};

export const setShowDetails = (show_details) => {
  return {
    type: "SET_SHOW_DETAILS",
    payload: show_details,
  };
};

export const setShowMobileUserDropdown = (show_options) => {
  return {
    type: "SET_SHOW_MOBILE_USER_DROPDOWN",
    payload: show_options,
  };
};

export const setShowAddComment = (show_comment) => {
  return {
    type: "SET_SHOW_ADD_COMMENT",
    payload: show_comment,
  };
};

export const setShowUploadPropertiesModal = (show_upload_properties_modal) => {
  return {
    type: "SET_SHOW_UPLOAD_PROPERTIES_MODAL",
    payload: show_upload_properties_modal,
  };
};

export const setCities = (cities) => {
  return {
    type: "SET_CITIES",
    payload: cities,
  };
};

export const setPropertyTypes = (propertyTypes) => {
  return {
    type: "SET_PROPERTY_TYPES",
    payload: propertyTypes,
  };
};

export const setUpdateFilter = (update_filter) => {
  return {
    type: "SET_UPDATE_FILTER",
    payload: update_filter,
  };
};

export const setModalName = (modalName) => {
  return {
    type: "SET_MODAL_NAME",
    payload: modalName,
  };
};
