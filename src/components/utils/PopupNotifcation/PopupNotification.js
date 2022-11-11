import styles from "./PopupNotification.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PopupNotifications = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const loginStatus = useSelector((state) => state.login_status);
  const currentUser = useSelector((state) => state.current_user);

  useEffect(() => {
    if (loginStatus) {
      setShowMessage(true);
      setMessage(`Welcome, ${currentUser}`);
    }
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [loginStatus, currentUser]);

  const style = showMessage ? styles.notification : styles.hidden;
  return <span className={style}>{message}</span>;
};

export default PopupNotifications;
