import React from "react";
import location from "../../images/map/location.webp";

export const Location = () => {
  return (
    <>
      <section class="post featured" id="location">
        <header class="major">
          {/* <span class="date">La Quenita</span> */}
          <h2>Ubicacion</h2>
          <p>
            Loteo de 214 terrenos, estratégicamente ubicado sobre la Autopista
            Ruta 16, km 23,5 (Tercer Retorno). <br />
            Cuenta con desagües pluviales, red eléctrica, alumbrado público y
            red de agua potable. <br /> A solo 300 metros de la colectora, con
            acceso directo y calles de ripio compactado. <br />{" "}
            <b> ¡Escritura inmediata! </b>
          </p>
        </header>
        <a
          href="https://www.google.com/maps/search/?api=1&query=-27.3796136,-59.0493142"
          target="_blank"
          class="image main"
        >
          <img src={location} alt="La Quenita location" />
        </a>
        <ul class="actions special">
          <li>
            <a href="#land" class="button large">
              Ver más
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
