import styles from "./PropertiesFilter.module.scss";

const PropertiesFilter = () => {
  return (
    <div className={styles.filter}>
      <select>
        <option>All Locations</option>
        <option>Metro Manila</option>
        <option>Cebu</option>
        <option>Siargao</option>
      </select>
      <select>
        <option>All Properties</option>
        <option>Apartment</option>
        <option>Condominium</option>
        <option>House</option>
        <option>Beach House</option>
      </select>

      <button>Search</button>
    </div>
  );
};

export default PropertiesFilter;
