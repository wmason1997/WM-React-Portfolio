// import React, useState for error handling
import React, { useState } from "react";

const ContactPage = () => {

  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
        // Display a notification to the user that the email address is invalid
        console.log("Invalid email address entered."); /// CHANGE THIS TO DISPLAY TEXT ON PAGE
    }
}

// DO SIMILAR THINGS FOR NAME AND MESSAGE BEING LEFT BLANK

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* Your contact page content here */}
      <form className="new-contact-submission">
        <input type="text" placeholder="Your name" name="your_name" required></input>
        <br></br>
        <input type="email" value={email} name="your_email" onChange={handleEmailChange} required></input>
        <br></br>
        <textarea
          placeholder="Your message"
          name="your_message"
          style={{ height: "150px", width: "189px" }} 
          required
        ></textarea>
        <br></br>
        <button className="contact-inquiry-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
