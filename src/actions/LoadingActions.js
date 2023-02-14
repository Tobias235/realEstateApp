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
