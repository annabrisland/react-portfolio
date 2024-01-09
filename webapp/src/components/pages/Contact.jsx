import React from "react";

function Contact() {
  // Change background colour for home page
  document.body.style.backgroundColor = "white";

  return (
    <div>
      <h1 className="title">CONTACT</h1>
      <ul>
        <li>
          <a href="mailto:annabrisland@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/annabrisland" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anna-brisland-2b5734232/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            CV
          </a>
        </li>
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
