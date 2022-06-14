import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactFormComponent.module.scss";

const ContactFormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [subjectError, setSubjectError] = useState(true);
  const [messageError, setMessageError] = useState(true);
  const [disabledButton, setDisabledButton] = useState(true);

  const form = useRef();
  const to_name = "PRESMIY";

  const checkNameHandler = (e) => {
    if (e.target.value.length < 5) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(e.target.value);
    checkErrorHandler();
  };

  const checkEmailHandler = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
    checkErrorHandler();
  };

  const checkSubjectHandler = (e) => {
    if (e.target.value === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
    setSubject(e.target.value);
    checkErrorHandler();
  };

  const checkMessageHandler = (e) => {
    if (e.target.value.length < 19) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    setMessage(e.target.value);
    checkErrorHandler();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_c414x4w",
      "template_db8af1h",
      form.current,
      "user_9ib4kqWUGVsJ6gQ1eBR1k",
      to_name
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const checkErrorHandler = () => {
    if (nameError || emailError || subjectError || messageError) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Enter Your Full Name</label>
      <input
        type="text"
        id="name"
        placeholder="Full Name"
        name="from_name"
        value={name}
        className={nameError ? styles.error : null}
        onChange={checkNameHandler}
        onBlur={checkErrorHandler}
      />

      {nameError && (
        <span className={styles.errorText}>
          Please enter your full name (first and last name).
        </span>
      )}

      <label>Enter Your E-Mail</label>
      <input
        type="email"
        placeholder="E-Mail Address"
        name="reply_to"
        id="email"
        value={email}
        className={emailError ? styles.error : null}
        onChange={checkEmailHandler}
        onBlur={checkErrorHandler}
      />
      {emailError && (
        <span className={styles.errorText}>
          Please enter a valid e-mail address.
        </span>
      )}

      <label>Subject</label>
      <input
        type="text"
        id="subject"
        placeholder="Subject"
        name="email_subject"
        value={subject}
        className={subjectError ? styles.error : null}
        onChange={checkSubjectHandler}
        onBlur={checkErrorHandler}
      />

      {subjectError && (
        <span className={styles.errorText}>Please enter a subject.</span>
      )}

      <label>Enter Your Message</label>
      <textarea
        row="10"
        placeholder="Enter Your Message"
        name="message"
        id="message"
        value={message}
        className={messageError ? styles.error : null}
        onChange={checkMessageHandler}
        onBlur={checkErrorHandler}
      ></textarea>

      {messageError && (
        <span className={styles.errorText}>
          Please enter a message of atleast 20 characters.
        </span>
      )}

      <button
        className={disabledButton ? styles.disabled : styles.active}
        disabled={disabledButton}
        type="submit"
        value="send"
      >
        Send
      </button>
    </form>
  );
};

export default ContactFormComponent;
