import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateFilter } from "../../../actions/Actions";
import styles from "./DropDownComponent.module.scss";

const DropDownComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
  const cities = useSelector((state) => state.cities);
  const propertyTypes = useSelector((state) => state.propertyTypes);

  const dispatch = useDispatch();

  const closeOpenMenus = (e) => {
    if (
      dropdown.current &&
      showDropdown &&
      !dropdown.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  const handleFilter = (e) => {
    dispatch(setUpdateFilter(e.currentTarget.getAttribute("value")));
  };

  return (
    <ul
      className={styles.dropDownComponent}
      onClick={() =>
        showDropdown ? setShowDropdown(false) : setShowDropdown(true)
      }
      ref={dropdown}
    >
      <li className={styles.propertiesButton}>Properties</li>
      {showDropdown && (
        <ul className={styles.dropDownList}>
          <li className={styles.locationList}>
            Location
            <ul className={styles.secondList}>
              {cities?.map((city) => {
                return (
                  <li key={city} value={city} onClick={handleFilter}>
                    {city}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className={styles.propertyList}>
            Property Type
            <ul className={styles.secondList}>
              {propertyTypes?.map((type) => {
                return (
                  <li key={type} value={type} onClick={handleFilter}>
                    {type}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      )}
    </ul>
  );
};

export default DropDownComponent;
