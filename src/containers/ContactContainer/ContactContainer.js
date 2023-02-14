import styles from "./ContactContainer.module.scss";
import ContactFormComponent from "../../components/ContactComponent/ContactFormComponent/ContactFormComponent";
import ContactInformationComponent from "../../components/ContactComponent/ContactInformationComponent/ContactInformationComponent";
import contactUs from "../../assets/images/contactUs.webp";

const ContactContainer = () => {
  return (
    <div id="contact" className={styles.contact}>
      <h1>Interested in any rental units?</h1>
      <p>Don't hesitate to ask any questions. We're here to serve you!</p>
      <div className={styles.contactInfo}>
        <div className={styles.formContainer}>
          <ContactFormComponent />
        </div>
        <div className={styles.middle}></div>
        <ContactInformationComponent />
        <img src={contactUs} alt="Contact us" />
      </div>
    </div>
  );
};

export default ContactContainer;
