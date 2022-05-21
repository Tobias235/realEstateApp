import styles from "./DropDownComponent.module.scss";
import Dropdown from "react-multilevel-dropdown";

const DropDownComponent = () => {
  return (
    <Dropdown className={styles.navButton} position="right" title="Properties">
      <Dropdown.Item className={styles.subMenu}>
        Location
        <Dropdown.Submenu position="right">
          <Dropdown.Item>Metro Manila</Dropdown.Item>
          <Dropdown.Item>Cebu</Dropdown.Item>
          <Dropdown.Item>Siargao</Dropdown.Item>
        </Dropdown.Submenu>
      </Dropdown.Item>
      <Dropdown.Item>
        Property Type
        <Dropdown.Submenu className={styles.subMenu} position="right">
          <Dropdown.Item>Apartment</Dropdown.Item>
          <Dropdown.Item>Condominium</Dropdown.Item>
          <Dropdown.Item>House</Dropdown.Item>
          <Dropdown.Item>Beach House</Dropdown.Item>
        </Dropdown.Submenu>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropDownComponent;
