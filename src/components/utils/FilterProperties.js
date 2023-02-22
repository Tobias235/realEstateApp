export const filterProperties = (properties, city, propertyType) => {
  let filteredProperties = properties;

  if (city !== "default") {
    filteredProperties = Object.fromEntries(
      Object.entries(filteredProperties).filter(
        ([_, property]) => property.city === city
      )
    );
  }

  if (propertyType !== "default") {
    filteredProperties = Object.fromEntries(
      Object.entries(filteredProperties).filter(
        ([_, property]) => property.propertyType === propertyType
      )
    );
  }

  return filteredProperties;
};
