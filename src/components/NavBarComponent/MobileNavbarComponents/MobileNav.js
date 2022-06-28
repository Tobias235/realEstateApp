import styles from "./MobileNav.module.scss";

const Hamburger = ({ onClose, onSignIn }) => {
  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.hamburger}>
        <h1>Commerce</h1>
        <ul>
          <li onClick={onClose}>
            <a href="#home">Home</a>
          </li>
          <li onClick={onClose}>
            <a href="#contact">Contacts</a>
          </li>
          <li onClick={onClose}>
            <a href="#properties">Properties</a>
          </li>
          <li onClick={onSignIn}>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
