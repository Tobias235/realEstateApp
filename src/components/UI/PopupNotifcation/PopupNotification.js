import styles from "./PopupNotification.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PopupNotifications = () => {
  const [showMessage, setShowMessage] = useState(false);
  const name = useSelector((state) => state.userReducer.name);

  useEffect(() => {
    if (name) {
      setShowMessage(true);
    }
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  const showNotifcation = showMessage ? styles.notification : styles.hidden;
  return <span className={showNotifcation}>Welcome, {name}</span>;
};

export default PopupNotifications;
