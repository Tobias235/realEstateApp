//Different actions that will dispatch from the file it gets used
//and tell the reducer what to do and change the state accordingly.

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

export const setBackground = (show_background) => {
  return {
    type: "SET_SHOW_BACKGROUND",
    payload: show_background,
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
