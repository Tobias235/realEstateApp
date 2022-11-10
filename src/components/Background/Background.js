import { useDispatch } from "react-redux";
import {
  setBackground,
  setMobileMenu,
  setShowDetails,
  setShowLoginModal,
  setShowMobileNavOptions,
  setShowPropertiesModal,
} from "../../actions/Actions";
import styles from "./Background.module.scss";

const Background = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setBackground(false));
    dispatch(setMobileMenu(false));
    dispatch(setShowLoginModal(false));
    dispatch(setShowDetails(false));
    dispatch(setShowMobileNavOptions(false));
    dispatch(setShowPropertiesModal(false));
  };

  return <div className={styles.background} onClick={onClose}></div>;
};

export default Background;
