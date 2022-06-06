import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  function handleSubmit(e) {
    e.preventDefault();
}

  return (
    <div class="container">
      <h1>Contact Me</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/taylor25et@gmail.com"
        method="POST"
      >
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="col">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea
            placeholder="Your Message"
            class="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" onBlur={handleChange} class="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
}
