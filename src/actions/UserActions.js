export const setCurrentUser = (name, id) => {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      name: name,
      id: id,
    },
  };
};
