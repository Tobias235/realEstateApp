//Different actions that will dispatch from the file it gets used
//and tell the reducer what to do and change the state accordingly.

//Switches between the different marks (Astronaut and Rocket)
export const setLoginStatus = (login_status) => {
  return {
    type: "SET_LOGIN_STATUS",
    payload: login_status,
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
