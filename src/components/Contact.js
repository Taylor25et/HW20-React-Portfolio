import React from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

init("OQad9KeZOv91N1mFN");

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();
    sendForm("default_service", "YOUR_TEMPLATE_ID", "#form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  
  const message = watch("message") || "";
  const messageCharsLeft = 2000 - message.length;

  return (
    <div className="contact">
      <h1 className="contact-me">Contact Me</h1>
      <form id="form" className="topBefore" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <textarea
          name="message"
          id="email"
          placeholder="Message"
          maxLength="2000"
          {...register("message", { required: true })}
        />
        <p className="message-chars-left">{messageCharsLeft}</p>
        <input type="submit" id="submit" value="Send" />
      </form>
    </div>
  );
}
