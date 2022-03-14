import "../sass/contactMe.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mwpv66p",
        "template_vfkzpsk",
        form.current,
        "user_Wj53Lp2h0tStUvR4LKEDp"
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
    <>
      <h2>Contact Me</h2>
      <section className="contact-me" id="contact-me">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required />
          <div class="container">
            <div class="center">
              <button class="btn" type="submit">
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  class="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>HOVER ME</span>
              </button>
            </div>
          </div>
        </form>
        <div>
          <h3>Take a look at my resume</h3>
          <a href="#">resume link</a>
          <h3>Bussines email</h3>
          <a href="#">emil link</a>
        </div>
      </section>
    </>
  );
}
