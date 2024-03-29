import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import useForm from "../../../hooks/useForm";
import { contactValidation } from "../../utils/ValidationRules";
import Button from "../../UI/Button/Button";
import ErrorDisplay from "../../UI/ErrorDisplay/ErrorDisplay";
import styles from "./ContactFormComponent.module.scss";

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
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="from_name"
        value={from_name}
        className={errors.from_name && styles.error}
        onChange={(e) => handleChange(e)}
      />
      <ErrorDisplay errorText={errors.from_name} />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="reply_to"
        value={reply_to}
        className={errors.reply_to && styles.error}
        onChange={(e) => handleChange(e)}
      />
      <ErrorDisplay errorText={errors.reply_to} />

      <label htmlFor="subject">Subject:</label>
      <input
        id="subject"
        type="text"
        name="subject"
        value={subject}
        className={errors.subject && styles.error}
        onChange={(e) => handleChange(e)}
      />
      <ErrorDisplay errorText={errors.subject} />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        className={errors.message && styles.error}
        onChange={(e) => handleChange(e)}
      />
      <ErrorDisplay errorText={errors.message} />

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
