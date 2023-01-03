import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProperties,
  setError,
  setCities,
  setPropertyTypes,
} from "../actions/Actions";

const useFetchProperties = (url) => {
  const dispatch = useDispatch();
  const propertiesUpdate = useSelector((state) => state.properties_update);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        dispatch(setProperties(json));
        dispatch(
          setPropertyTypes(
            Array.from(
              new Set(
                Object.values(json).map((property) => property.propertyType)
              )
            )
          )
        );
        dispatch(
          setCities(
            Array.from(
              new Set(Object.values(json).map((property) => property.city))
            )
          )
        );
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch, url, propertiesUpdate]);
};

export default useFetchProperties;
