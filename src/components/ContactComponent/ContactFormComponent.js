import styles from "./ContactFormComponent.module.scss";

const ContactFormComponent = () => {
  return (
    <form className={styles.form}>
      <label>Enter Your Full Name</label>
      <input type="text" placeholder="Full Name" />
      <label>Enter Your E-Mail</label>
      <input type="email" placeholder="E-Mail Address" />
      <label>Subject</label>
      <input type="text" placeholder="Subject" />
      <label>Enter Your Message</label>
      <textarea row="10" placeholder="Enter Your Message"></textarea>
    </form>
  );
};

export default ContactFormComponent;
