import DesktopDetails from "./DesktopDetails/DesktopDetails";
import MobileDetails from "./MobileDetails/MobileDetails";
import styles from "./PropertiesModal.module.scss";

const PropertiesModal = () => {
  return (
    <>
      <DesktopDetails className={styles.showDesktop} />
      <MobileDetails className={styles.showMobile} />
    </>
  );
};

export default PropertiesModal;
