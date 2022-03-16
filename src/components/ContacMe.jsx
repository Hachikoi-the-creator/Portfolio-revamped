import "../sass/contactMe.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <section className="contact-me">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="user_name"
            id={`name`}
            placeholder="Escribe tu nombre"
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="user_email"
            id={`email`}
            placeholder="Escribe tu correo"
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id={`message ${"a"}`}
            placeholder="En que te puedo ayudar?"
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
        <div>
          {/* <h3>Take a look at my resume</h3> */}
          <h3>Hecha un vistazo a mi CV</h3>
          <a href="9uduR8Ybe">Aqui📎</a>
          {/* <h3>Bussines email</h3> */}
          <h3>Correo personal</h3>
          <p>vip.hd777@gmail.com</p>
          <h3>Whatsapp</h3>
          <p>+52 871 510 9227</p>
          {/* <h3>Phone number</h3> */}
          <h3>Telefono personal</h3>
          <p>+52 618 334 4744</p>
          <h3>Ubicacion</h3>
          <p>Mexico 🇲🇽</p>
          <p className="signature">Hecho por 8koi</p>
        </div>
      </section>
    </section>
  );
}
