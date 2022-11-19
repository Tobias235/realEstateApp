import PropertiesFilter from "../../components/PropertiesComponent/PropertiesFilter/PropertiesFilter";
import PropertyCard from "../../components/PropertiesComponent/PropertyCard/PropertyCard";
import PropertiesModalContainer from "./../PropertiesModalContainer/PropertiesModalContainer";
import { useDispatch, useSelector } from "react-redux";
import { setBackground, setShowDetails } from "../../actions/Actions";
import styles from "./PropertiesContainer.module.scss";

const PropertiesContainer = () => {
  const showModal = useSelector((state) => state.show_details);
  const dispatch = useDispatch();

  const handleShowDetails = () => {
    dispatch(setBackground(true));
    dispatch(setShowDetails(true));
  };

  const handleCloseDetails = () => {
    dispatch(setBackground(false));
    dispatch(setShowDetails(false));
  };

  return (
    <div id="properties" className={styles.properties}>
      {showModal && <PropertiesModalContainer onClose={handleCloseDetails} />}
      <h1 className={styles.propertyHeader}>Our Properties</h1>
      <PropertiesFilter />
      <div className={styles.grid}>
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
        <PropertyCard onShowDetails={handleShowDetails} />
      </div>
    </div>
  );
};

export default PropertiesContainer;
