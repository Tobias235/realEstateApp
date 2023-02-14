export const setMobileMenu = (mobile_menu) => {
  return {
    type: "SET_MOBILE_MENU",
    payload: mobile_menu,
  };
};

export const setShowMobileUserDropdown = (show_options) => {
  return {
    type: "SET_SHOW_MOBILE_USER_DROPDOWN",
    payload: show_options,
  };
};
