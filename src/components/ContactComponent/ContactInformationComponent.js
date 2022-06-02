import styles from "./ContactInformationComponent.module.scss";
import contactUs from "../../assets/images/contactUs.webp";

const ContactInformationComponent = () => {
  return (
    <div className={styles.contactInformation}>
      <p>E-Mail:</p>
      <span>companyemail@yourdomain.com</span>
      <p>Phone:</p>
      <span>123456789</span>

      <img src={contactUs} alt="Contact us" />
    </div>
  );
};

export default ContactInformationComponent;
