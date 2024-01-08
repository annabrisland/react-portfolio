import React from "react";

function Contact() {
  return (
    <div>
      <h1>CONTACT</h1>
      <ul>
        <li>Email</li>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>CV</li>
      </ul>
      <section>
        <h3>Got a question? Fire away</h3>
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="John Smith"></input>
          <label for="email-input">Email</label>
          <input
            type="text"
            id="email-input"
            placeholder="johnsmith@email.com"
          ></input>
          <input type="text" id="question" placeholder="Fire away..."></input>
          <input type="submit" value="Contact Me"></input>
        </form>
      </section>
    </div>
  );
}

export default Contact;
