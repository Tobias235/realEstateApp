import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactFormComponent.module.scss";

const ContactFormComponent = () => {
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
  };

  const checkEmailHandler = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const checkSubjectHandler = (e) => {
    if (e.target.value.length === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
  };

  const checkMessageHandler = (e) => {
    if (e.target.value.length < 20) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (nameError || emailError || subjectError || messageError) {
      return;
    }
    console.log("test");
    emailjs
      .sendForm(
        "service_c414x4w",
        "template_db8af1h",
        form.current,
        "user_9ib4kqWUGVsJ6gQ1eBR1k",
        to_name
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const nameHasError = nameError ? styles.error : "";
  const emailHasError = emailError ? styles.error : "";
  const subjectHasError = subjectError ? styles.error : "";
  const messageHasError = messageError ? styles.error : "";

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Enter Your Full Name</label>
      <input
        type="text"
        id="name"
        placeholder="Full Name"
        name="from_name"
        className={nameHasError}
        onChange={checkNameHandler}
      />
      <label>Enter Your E-Mail</label>
      <input
        type="email"
        placeholder="E-Mail Address"
        name="reply_to"
        id="email"
        className={emailHasError}
        onChange={checkEmailHandler}
      />
      <label>Subject</label>
      <input
        type="text"
        id="subject"
        placeholder="Subject"
        name="email_subject"
        className={subjectHasError}
        onChange={checkSubjectHandler}
      />
      <label>Enter Your Message</label>
      <textarea
        row="10"
        placeholder="Enter Your Message"
        name="message"
        id="message"
        className={messageHasError}
        onChange={checkMessageHandler}
      ></textarea>
      <button type="submit" value="send">
        Send
      </button>
    </form>
  );
};

export default ContactFormComponent;
