import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./DropDownComponent.module.scss";
import DropdownList from "./NestedDropdown/DropdownList";

const DropdownComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
  const { cities, property_types } = useSelector(
    (state) => state.filterReducer
  );

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
        <ul className={styles.dropdownList}>
          <li className={styles.nestedListDropdown}>
            <a className={styles.locationButton} href="#properties">
              Location
            </a>
            <DropdownList
              className={styles.nestedList}
              items={cities}
              filterType="city"
            />
          </li>
          <li className={styles.nestedListDropdown}>
            <a href="#properties">Property Type</a>
            <DropdownList
              className={styles.nestedList}
              items={property_types}
              filterType="type"
            />
          </li>
        </ul>
      )}
    </ul>
  );
};

export default DropdownComponent;
