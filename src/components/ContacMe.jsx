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
    <section id="contact">
      <h2>Contact Me</h2>
      <section className="contact-me">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
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
                <span>Send</span>
              </button>
            </div>
          </div>
        </form>
        <div>
          <h3>Take a look at my resume</h3>
          <a href="#">here 📎</a>
          <h3>Bussines email</h3>
          <p>vip.hd777@gmail.com</p>
          <h3>Phone number</h3>
          <p>+871 576 1593</p>
          <h3>Location</h3>
          <p>Mexico 🇲🇽</p>
          <p className="signature">Made by 8koi</p>
        </div>
      </section>
    </section>
  );
}
