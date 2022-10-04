import classes from "./ContactBody.module.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useRef } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { toast, ToastContainer } from "react-toastify";
import RotateLink from "../links/BoxLink";

const ContactBody = () => {
  const bodyStyles = `${classes.bodyContainer} container`;
  const emailStyles = `${classes.email} row`;
  const [submit, submitting] = useFormspark({
    formId: "jaYHHLcY",
  });
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  let emailRef = useRef();

  const copy = () => {
    navigator.clipboard.writeText(emailRef.current.innerHTML);
    toast.success("Copied!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div>
      <RotateLink text="Home" location="/" />

      <h1 className="p-3">Contact me</h1>
      <p>
        I'd love to hear from you! You can fill out this form to contact me, or
        use this email if thats more convenient.
      </p>
      <div className={bodyStyles}>
        <div className={emailStyles}>
          <div className="col">
            <p className={classes.emailText} ref={emailRef}>
              matthewj1561@gmail.com
            </p>
          </div>
          <div className="col">
            <button onClick={copy} className="btn btn-secondary">
              Copy
            </button>
            <ToastContainer className={classes.notification} />
          </div>
        </div>
      </div>
      <form
        className={bodyStyles}
        onSubmit={async (e) => {
          e.preventDefault();
          await submit({ name, email, subject, message });
          toast.success("Email Sent! Thanks for reaching out!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }}
      >
        <div className="row ">
          <div className="form-group col-sm-6 p-4">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              type="text"
              id="name"
            />
          </div>
          <div className="form-group col p-4 ">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              className="form-control"
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group p-3">
          <label htmlFor="subject">Subject</label>
          <input
            value={subject}
            className="form-control"
            type="text"
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group p-3 ">
          <label htmlFor="area">Message</label>
          <textarea
            id="area"
            rows="3"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary p-3 m-3"
          type="submit"
          disabled={submitting}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactBody;
