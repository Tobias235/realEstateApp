export const FetchProperties = async (allLocations) => {
  try {
    const response = await fetch(allLocations);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
};
