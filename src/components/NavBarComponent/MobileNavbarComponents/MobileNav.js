import styles from "./MobileNav.module.scss";

const Hamburger = ({ onClose }) => {
  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.hamburger}>
        <h1>Commerce</h1>
        <ul>
          <li onClick={onClose}>
            <a to="/">Home</a>
          </li>
          <li onClick={onClose}>
            <a to="/contacts">Contacts</a>
          </li>
          <li onClick={onClose}>
            <a to="/products">Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
