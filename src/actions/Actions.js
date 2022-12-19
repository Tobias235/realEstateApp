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

export const setLoginStatus = (login_status) => {
  return {
    type: "SET_LOGIN_STATUS",
    payload: login_status,
  };
};

export const setCurrentUser = (current_user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: current_user,
  };
};

export const setCurrentUserId = (current_user_id) => {
  return {
    type: "SET_CURRENT_USER_ID",
    payload: current_user_id,
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

export const setShowMobileNavOptions = (show_options) => {
  return {
    type: "SET_SHOW_MOBILE_NAV_OPTIONS",
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
