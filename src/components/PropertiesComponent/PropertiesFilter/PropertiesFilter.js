import { useDispatch, useSelector } from "react-redux";
import { setUpdateFilter } from "../../../actions/FilterActions";
import SelectMenu from "../../UI/SelectMenu/SelectMenu";
import styles from "./PropertiesFilter.module.scss";

const PropertiesFilter = () => {
  const dispatch = useDispatch();

  const { city, type, cities, property_types } = useSelector(
    (state) => state.filterReducer
  );

  return (
    <div className={styles.filter}>
      <SelectMenu
        value={city}
        onChange={(e) => dispatch(setUpdateFilter(e.target.value, type))}
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
        value={type}
        onChange={(e) => dispatch(setUpdateFilter(city, e.target.value))}
      >
        <option value="default">All Properties</option>
        {property_types?.map((type) => {
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
