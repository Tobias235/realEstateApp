import { useDispatch } from "react-redux";
import {
  setBackground,
  setMobileMenu,
  setShowLoginModal,
} from "../actions/Actions";
import styles from "./Background.module.scss";

const Background = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setBackground(false));
    dispatch(setMobileMenu(false));
    dispatch(setShowLoginModal(false));
  };

  return <div className={styles.background} onClick={onClose}></div>;
};

export default Background;
