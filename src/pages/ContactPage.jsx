// import React, useState for error handling
import React, { useState } from "react";

const ContactPage = () => {
  // Set up the React hooks
  const [name, setName] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [message, setMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");

  // Name logic
  const validateName = (name) => {
    return name.length > 0; // Validates that name is not empty
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (!validateName(newName)) {
      setNameErrorMessage("Name is empty.");
    } else {
      setNameErrorMessage(""); // Good name. Empty string reassigned for rendering.
    }
  };

  // Email logic
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      // Display a notification to the user that the email address is invalid
      setEmailErrorMessage("Invalid email address entered."); /// Changed to display the error message under the submit button
    } else {
      setEmailErrorMessage(""); // Good email name. Empty string reassigned
    }
  };

  // Message logic

  const validateMessage = (message) => {
    return message.length > 0; // Validates that name is not empty
  };

  const handleMessageChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);

    if (!validateMessage(newMessage)) {
      setMessageErrorMessage("Message is empty.");
    } else {
      setMessageErrorMessage(""); // Good message. Empty string reassigned for rendering.
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* Your contact page content here */}
      <form
        className="new-contact-submission"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={name}
          placeholder="Your name"
          name="your_name"
          onChange={handleNameChange}
          required
        ></input>
        <br></br>
        <input
          type="email"
          value={email}
          name="your_email"
          placeholder="Your email"
          onChange={handleEmailChange}
          required
        ></input>
        <br></br>
        <textarea
          placeholder="Your message"
          value={message}
          name="your_message"
          onChange={handleMessageChange}
          style={{ height: "150px", width: "189px" }}
          required
        ></textarea>
        <br></br>
        <button className="contact-inquiry-button">Submit</button>
        <p>{nameErrorMessage}</p>

        <p>{emailErrorMessage}</p>

        <p>{messageErrorMessage}</p>
      </form>
    </div>
  );
};

export default ContactPage;
