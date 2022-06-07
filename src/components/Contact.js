import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  function handleChange(e) {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  const styles = {
    main: {
      justifyContent: "center",
      height: 600,
    },
  };

  return (
    <section style={styles.main}>
      <h1>Contact Me</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/taylor25et@gmail.com"
        method="POST"
        className="justify-content-center"
        id="contact-form"
      >
        <div class="form-group">
          <div class="form-row">
            <div className="mt-5">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mt-5">
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
        <div className="mt-5">
          <textarea
            placeholder="Your Message"
            class="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          onSubmit={handleSubmit}
          class="btn btn-lg btn-dark btn-block"
        >
          Submit Form
        </button>
      </form>
    </section>
  );
}
