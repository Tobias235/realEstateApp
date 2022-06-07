import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactFormComponent.module.scss";

const ContactFormComponent = () => {
  const form = useRef();
  const to_name = "PRESMIY";

  const sendEmail = (e) => {
    e.preventDefault();

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

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Enter Your Full Name</label>
      <input
        type="text"
        id="name"
        placeholder="Full Name"
        name="from_name"
        onChange={sendEmail}
      />
      <label>Enter Your E-Mail</label>
      <input
        type="email"
        placeholder="E-Mail Address"
        name="reply_to"
        id="email"
        onChange={sendEmail}
      />
      <label>Subject</label>
      <input
        type="text"
        id="subject"
        placeholder="Subject"
        name="email_subject"
        onChange={sendEmail}
      />
      <label>Enter Your Message</label>
      <textarea
        row="10"
        placeholder="Enter Your Message"
        name="message"
        id="message"
        onChange={sendEmail}
      ></textarea>
      <button type="submit" value="send">
        Send
      </button>
    </form>
  );
};

export default ContactFormComponent;
