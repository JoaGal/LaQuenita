import React from "react";
import { Link } from "react-router-dom";

export const SendMessage = () => {
  return (
    <footer id="footer">
      <section>
        <form method="post" action="#">
          <div className="fields">
            <div className="field">
              <label for="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split contact">
        <section className="alt">
          <h3>Direccion</h3>
          <p>
            Autopista Ruta 16, km 23,5 (Tercer Retorno).
          </p>
        </section>
        <section>
          <h3>Numero</h3>
          <p>
            <Link href="tel:+543624712344">+54 3624 712344</Link>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            laquenita@gmail.com
          </p>
        </section>
        <section>
          <h3>Redes</h3>
          <ul className="icons alt">
            <li>
              <Link href="#" className="icon brands alt fa-twitter">
                <span className="label">Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands alt fa-facebook-f">
                <span className="label">Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/laquenita_" className="icon brands alt fa-instagram">
                <span className="label">Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands alt fa-github">
                <span className="label">GitHub</span>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};
