import { useState } from "react";

import PropertiesFilter from "../components/PropertiesComponent/PropertiesFilter";
import PropertyCard from "../components/PropertiesComponent/PropertyCard";
import PropertiesModal from "../components/PropertiesComponent/PropertiesModal";
import Background from "../components/Background";
import styles from "./PropertiesContainer.module.scss";

const PropertiesContainer = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    if (showDetails) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
    }
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div id="properties" className={styles.properties}>
      {showDetails && <Background onClose={handleCloseDetails} />}
      {showDetails && <PropertiesModal onClose={handleCloseDetails} />}
      <h1>Our Properties</h1>
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
