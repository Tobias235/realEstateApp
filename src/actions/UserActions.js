export const setCurrentUser = (name) => {
  return {
    type: "SET_CURRENT_USER",
    payload: name,
  };
};
