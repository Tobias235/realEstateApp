import styles from "./ContactContainer.module.scss";
import ContactFormComponent from "../components/ContactFormComponent";

const ContactContainer = () => {
  return (
    <div className={styles.contact}>
      <ContactFormComponent />
    </div>
  );
};

export default ContactContainer;
