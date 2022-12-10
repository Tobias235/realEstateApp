import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties, setError } from "../actions/Actions";

const useFetchProperties = (url) => {
  const dispatch = useDispatch();
  const propertiesUpdate = useSelector((state) => state.properties_update);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        dispatch(setProperties(json));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch, url, propertiesUpdate]);
};

export default useFetchProperties;
