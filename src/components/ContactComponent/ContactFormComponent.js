import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactFormComponent.module.scss";

const ContactFormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef();
  const to_name = "PRESMIY";

  const checkNameHandler = (e) => {
    if (e.target.value.length < 5) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(e.target.value);
  };

  const checkEmailHandler = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
  };

  const checkSubjectHandler = (e) => {
    if (e.target.value === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
    setSubject(e.target.value);
  };

  const checkMessageHandler = (e) => {
    if (e.target.value.length < 20) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (nameError || emailError || subjectError || messageError) {
      return;
    }

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

  const nameHasError = nameError ? styles.error : "";
  const emailHasError = emailError ? styles.error : "";
  const subjectHasError = subjectError ? styles.error : "";
  const messageHasError = messageError ? styles.error : "";
  const isButtonDisabled =
    name === "" || email === "" || subject === "" || message === "";

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Enter Your Full Name</label>
      <input
        type="text"
        id="name"
        placeholder="Full Name"
        name="from_name"
        value={name}
        className={nameHasError}
        onChange={checkNameHandler}
        onBlur={checkNameHandler}
      />
      {nameHasError && (
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
        className={emailHasError}
        onChange={checkEmailHandler}
        onBlur={checkEmailHandler}
      />
      {emailHasError && (
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
        className={subjectHasError}
        onChange={checkSubjectHandler}
        onBlur={checkSubjectHandler}
      />
      {subjectHasError && (
        <span className={styles.errorText}>Please enter a subject.</span>
      )}
      <label>Enter Your Message</label>
      <textarea
        row="10"
        placeholder="Enter Your Message"
        name="message"
        id="message"
        value={message}
        className={messageHasError}
        onChange={checkMessageHandler}
        onBlur={checkMessageHandler}
      ></textarea>
      {messageHasError && (
        <span className={styles.errorText}>
          Please enter a message of atleast 20 characters.
        </span>
      )}
      <button disabled={isButtonDisabled} type="submit" value="send">
        Send
      </button>
    </form>
  );
};

export default ContactFormComponent;
