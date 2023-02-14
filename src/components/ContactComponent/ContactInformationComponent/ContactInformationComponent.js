import { ReactComponent as CallIcon } from "../../../assets/images/callIcon.svg";
import { ReactComponent as MessageIcon } from "../../../assets/images/messageIcon.svg";
import contactUs from "../../../assets/images/contactUs.webp";
import styles from "./ContactInformationComponent.module.scss";

const ContactInformationComponent = () => {
  return (
    <div className={styles.contactInformation}>
      <a href="mailto:presmiy@gmail.com" className={styles.email}>
        <MessageIcon />
        <span>Write us an email</span>
      </a>
      <a href="tel:123456789" className={styles.phone}>
        <CallIcon />
        <span>Call us at +123456789</span>
      </a>
      <img src={contactUs} alt="Contact us" className={styles.img} />
    </div>
  );
};

export default ContactInformationComponent;
