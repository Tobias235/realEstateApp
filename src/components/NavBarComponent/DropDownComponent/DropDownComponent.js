import { useState, useRef } from "react";
import styles from "./DropDownComponent.module.scss";

const DropDownComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

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
        <ul className={styles.dropDownList}>
          <li className={styles.locationList}>
            Location
            <ul className={styles.secondList}>
              <li>Metro Manila</li>
              <li>Cebu</li>
              <li>Siargao</li>
            </ul>
          </li>
          <li className={styles.propertyList}>
            Property Type
            <ul className={styles.secondList}>
              <li>Apartment</li>
              <li>Condominum</li>
              <li>House</li>
              <li>Beach House</li>
            </ul>
          </li>
        </ul>
      )}
    </ul>
  );
};

export default DropDownComponent;
