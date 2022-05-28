import styles from "./ContactContainer.module.scss";
import ContactFormComponent from "../components/ContactComponent/ContactFormComponent";
import ContactInformationComponent from "../components/ContactComponent/ContactInformationComponent";

const ContactContainer = () => {
  return (
    <div className={styles.contact}>
      <h1>Got any questions?</h1>
      <h2>
        Interested in any rental unit? <br /> Don't hesitate to ask!
      </h2>
      <div>
        <ContactFormComponent />
        <ContactInformationComponent />
      </div>
    </div>
  );
};

export default ContactContainer;
