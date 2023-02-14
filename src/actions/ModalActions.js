export const setModalName = (modal_name) => {
  return {
    type: "SET_MODAL_NAME",
    payload: modal_name,
  };
};

export const setShowProfile = (show_profile) => {
  return {
    type: "SET_SHOW_PROFILE",
    payload: show_profile,
  };
};

export const setShowAddReview = (show_review) => {
  return {
    type: "SET_SHOW_ADD_REVIEW",
    payload: show_review,
  };
};

export const setShowUploadPropertiesModal = (show_upload_properties_modal) => {
  return {
    type: "SET_SHOW_UPLOAD_PROPERTIES_MODAL",
    payload: show_upload_properties_modal,
  };
};

export const setShowDetails = (show_details) => {
  return {
    type: "SET_SHOW_DETAILS",
    payload: show_details,
  };
};

export const setShowLoginModal = (login_modal) => {
  return {
    type: "SET_LOGIN_MODAL",
    payload: login_modal,
  };
};
