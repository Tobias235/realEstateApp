import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCities, setPropertyTypes } from "../actions/FilterActions";
import { setError } from "../actions/LoadingActions";
import ErrorMessages from "../components/utils/ErrorMessages";
import { filterProperties } from "../components/utils/FilterProperties";

const useFetch = (url, location, propertyType) => {
  const [properties, setProperties] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch properties.");
        }
        const data = await response.json();

        dispatch(
          setPropertyTypes([
            ...new Set(
              Object.values(data).map((property) => property.propertyType)
            ),
          ])
        );
        dispatch(
          setCities([
            ...new Set(Object.values(data).map((property) => property.city)),
          ])
        );

        const filteredProperties = filterProperties(
          data,
          location,
          propertyType
        );
        setProperties(filteredProperties);
      } catch (error) {
        let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
        dispatch(setError(errorMessage));
        setProperties(null);
      }
    };

    fetchProperties();
  }, [url, location, propertyType, dispatch]);

  return [properties];
};

export default useFetch;
