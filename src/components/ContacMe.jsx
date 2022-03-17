import "../sass/contactMe.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ContactMe() {
  const [disable, setDisable] = useState(false);

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
          setDisable(true);
          alert("Email sent sucessfully!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2>{t("contact title")}</h2>
      <section className="contact-me">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">{t("contact form name")}</label>
          <input
            type="text"
            name="user_name"
            id={`name`}
            placeholder={t("contact form name-place")}
          />
          <label htmlFor="email">{t("contact form email")}</label>
          <input
            type="email"
            name="user_email"
            id={`email`}
            placeholder={t("contact form email-place")}
          />
          <label htmlFor="message">{t("contact form mess")}</label>
          <textarea
            name="message"
            id={`message ${"a"}`}
            placeholder={t("contact form mess-place")}
          />
          <div class="container">
            <div class="center">
              <button class="btn" type="submit" id={disable ? "diss-btn" : ""}>
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
                <span>{disable ? "MESSAGE SENT!" : "Send"}</span>
              </button>
            </div>
          </div>
        </form>
        {/* --- */}
        <div>
          <h3>{t("contact info res")}</h3>
          <a href="9uduR8Ybe">{t("contact info res2")}📎</a>
          <h3>{t("contact info email")}</h3>
          <p>vip.hd777@gmail.com</p>
          <h3>Whatsapp</h3>
          <p>+52 871 510 9227</p>
          <h3>{t("contact info phone")}</h3>
          <p>+52 618 334 4744</p>
          <h3>{t("contact info pos")}</h3>
          <p>Mexico 🇲🇽</p>
          <p className="signature">{t("contact info sign")}</p>
        </div>
      </section>
    </section>
  );
}
