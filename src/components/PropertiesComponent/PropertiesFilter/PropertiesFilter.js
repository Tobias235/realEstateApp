import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties, setUpdateFilter } from "../../../actions/Actions";
import SelectMenu from "../../UI/SelectMenu/SelectMenu";
import { FetchProperties } from "../../utils/FetchProperties";
import styles from "./PropertiesFilter.module.scss";

const PropertiesFilter = () => {
  const [location, setLocation] = useState("default");
  const [propertyType, setPropertyType] = useState("default");

  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const propertyTypes = useSelector((state) => state.propertyTypes);
  const updateFilter = useSelector((state) => state.update_filter);

  useEffect(() => {
    if (updateFilter) {
      if (cities.includes(updateFilter)) {
        setLocation(updateFilter);
      }
      if (propertyTypes.includes(updateFilter)) {
        setPropertyType(updateFilter);
      }
    }
  }, [updateFilter, cities, propertyTypes]);

  useEffect(() => {
    dispatch(setUpdateFilter(null));
    const allLocations =
      location === "default"
        ? `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties.json`
        : `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties.json?orderBy="city"&equalTo="${location}"`;

    FetchProperties(allLocations).then((properties) => {
      if (propertyType === "default") {
        return dispatch(setProperties(properties));
      }

      const propertiesValues = Object.entries(properties)
        .filter((property) => property[1].propertyType === propertyType)
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
      dispatch(setProperties(propertiesValues));
    });
  }, [location, propertyType, dispatch]);

  return (
    <div className={styles.filter}>
      <SelectMenu
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="default">All Locations</option>
        {cities?.map((city) => {
          return (
            <option value={city} key={city}>
              {city}
            </option>
          );
        })}
      </SelectMenu>
      <SelectMenu
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="default">All Properties</option>
        {propertyTypes?.map((type) => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          );
        })}
      </SelectMenu>
    </div>
  );
};

export default PropertiesFilter;
