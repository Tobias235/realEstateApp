import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

import styles from "./ContactInformationComponent.module.scss";
import contactUs from "../../assets/images/contactUs.webp";

const ContactInformationComponent = () => {
  return (
    <div className={styles.contactInformation}>
      <a href="mailto:presmiy@gmail.com" className={styles.email}>
        <FaRegEnvelope />
        <span>Write us an email</span>
      </a>
      <a href="tel:123456789" className={styles.phone}>
        <FiPhone />
        <span>Call us at +123456789</span>
      </a>
      {/* <span>companyemail@yourdomain.com</span>
      <p>Phone:</p>
      <span>123456789</span> */}

      <img src={contactUs} alt="Contact us" />
    </div>
  );
};

export default ContactInformationComponent;
