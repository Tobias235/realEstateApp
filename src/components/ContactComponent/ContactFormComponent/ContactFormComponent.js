import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactFormComponent.module.scss";
import useForm from "../../../hooks/useForm";
import { contactValidation } from "../../utils/ValidationRules";
import Button from "../../UI/Button/Button";

const ContactFormComponent = () => {
  const form = useRef();
  const to_name = "PRESMIY";
  const initialValues = {
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  };

  const sendEmail = () => {
    if (form.current && handleSubmit) {
      emailjs.sendForm(
        "service_c414x4w",
        "template_db8af1h",
        form.current,
        "user_9ib4kqWUGVsJ6gQ1eBR1k",
        to_name
      );
    }
  };

  const { formData, handleChange, handleSubmit, errors } = useForm(
    initialValues,
    contactValidation,
    sendEmail
  );
  const { from_name, reply_to, subject, message } = formData;

  return (
    <form ref={form} onSubmit={handleSubmit} className={styles.form}>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        name="from_name"
        value={from_name}
        className={errors.name && styles.error}
        onChange={(e) => handleChange(e)}
      />
      {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      <label>E-Mail:</label>
      <input
        type="email"
        placeholder="E-Mail"
        name="reply_to"
        value={reply_to}
        className={errors.email && styles.error}
        onChange={(e) => handleChange(e)}
      />
      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      <label>Subject:</label>
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={subject}
        className={errors.subject && styles.error}
        onChange={(e) => handleChange(e)}
      />
      {errors.subject && (
        <span className={styles.errorText}>{errors.subject}</span>
      )}
      <label>Message:</label>
      <textarea
        placeholder="Message"
        name="message"
        value={message}
        className={errors.message && styles.error}
        onChange={(e) => handleChange(e)}
      />
      {errors.message && (
        <span className={styles.errorText}>{errors.message}</span>
      )}
      <Button
        className={styles.active}
        type="submit"
        value="send"
        text="Send"
        onSubmit={handleSubmit}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactFormComponent;
