import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by <a href="https://github.com/Tobias235/">Tobias235</a>
      </p>
      <a href="http://www.freepik.com">Contact image by Freepik</a>
    </footer>
  );
};

export default Footer;
