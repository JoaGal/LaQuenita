import React from "react";
import { Link } from "react-router-dom";

export const SendMessage = () => {
  return (
    <footer id="footer">
      {/* <section>
        <form method="POST" action="https://formspree.io/f/xvgakgwj">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows="3"
                required
              ></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <button type="submit">Enviar mensaje</button>
            </li>
          </ul>
        </form>
      </section> */}
      <section className="split contact">
        <section className="alt">
          <h3>Direccion</h3>
          <p>
            <a href="https://www.google.com/maps/search/?api=1&query=-27.3796136,-59.0493142" target="_blank">
              Autopista Ruta 16, km 23,5 (Tercer Retorno).
            </a>
          </p>
        </section>
        <section>
          <h3>Numero</h3>
          <p>
            <a href="https://wa.me/543624622844" target="_blank">
              +54 3624 712344
            </a>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="mailto:laquenitaloteos@gmail.com" target="_blank">
              laquenitaloteos@gmail.com
            </a>
          </p>
        </section>
        <section>
          <h3>Redes</h3>
          <ul className="icons alt">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61575569984411"
                className="icon brands fa-facebook-f"
                target="_blank"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/laquenita_"
                className="icon brands fa-instagram"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/543624622844"
                className="icon brands fa-whatsapp"
                target="_blank"
              >
                <span className="label">WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:laquenitaloteos@gmail.com"
                className="icon solid fa-envelope"
                target="_blank"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};
