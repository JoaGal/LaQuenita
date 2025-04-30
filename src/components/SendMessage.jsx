import React from "react";
import { Link } from "react-router-dom";

export const SendMessage = () => {
  return (
    <footer id="footer">
      <section>
        <form method="post" action="#">
          <div class="fields">
            <div class="field">
              <label for="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Mensaje</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
      <section class="split contact">
        <section class="alt">
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
          <ul class="icons alt">
            <li>
              <Link href="#" class="icon brands alt fa-twitter">
                <span class="label">Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="#" class="icon brands alt fa-facebook-f">
                <span class="label">Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/laquenita_" class="icon brands alt fa-instagram">
                <span class="label">Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="#" class="icon brands alt fa-github">
                <span class="label">GitHub</span>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};
