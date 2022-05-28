import styles from "./ContactInformationComponent.module.scss";

const ContactInformationComponent = () => {
  return (
    <div className={styles.contactInformation}>
      <p>E-Mail:</p>
      <span>companyemail@yourdomain.com</span>
      <p>Phone:</p>
      <span>123456789</span>
    </div>
  );
};

export default ContactInformationComponent;
