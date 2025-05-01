import React from "react";
import sky from "../../images/real/sky.webp";
import sky0 from "../../images/real/sky0.webp";
import sky1 from "../../images/real/sky1.webp";
import sky2 from "../../images/real/sky2.webp";
import sky3 from "../../images/real/sky3.webp";
export const Gallery = () => {
  return (
    <section className="post featured" id="gallery">
      <header className="major">
        <h2>Galeria</h2>
      </header>
      <span className="image fit">
        <img src={sky} alt="La Quenita" />
      </span>
      <div className="box alt">
        <div className="row gtr-50 gtr-uniform">
          <div className="col-4">
            <span className="image fit">
              <img src={sky} alt="Loteo La Quenita" />
            </span>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={sky0} alt="Loteo La Quenita" />
            </span>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src={sky1} alt="Loteo La Quenita" />
            </span>
          </div>

          {/* <div className="col-4">
            <span className="image fit">
              <img src="images/pic04.jpg" alt="" />
            </span>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src="images/pic02.jpg" alt="" />
            </span>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src="images/pic03.jpg" alt="" />
            </span>
          </div>

          <div className="col-4">
            <span className="image fit">
              <img src="images/pic03.jpg" alt="" />
            </span>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src="images/pic04.jpg" alt="" />
            </span>
          </div>
          <div className="col-4">
            <span className="image fit">
              <img src="images/pic02.jpg" alt="" />
            </span>
          </div> */}
        </div>
      </div>

      <hr />
      <h3>La Quenita</h3>
      <p>
        <span className="image left">
          <img src={sky2} alt="" />
        </span>
        Este loteo de 214 terrenos sobre la Autopista Ruta 16, km 23,5 (Tercer
        Retorno), es una excelente oportunidad para invertir en una zona con
        alto potencial de crecimiento. Su ubicación, a solo 300
        metros de la ruta y con acceso directo, lo convierte en una opción
        ideal tanto para construir tu hogar como para desarrollar un
        emprendimiento. Las calles internas son de ripio compactado, lo que
        permite una circulación cómoda y segura durante todo el año. La zona
        combina tranquilidad, naturaleza y una conexión rápida con los
        principales puntos de la región, lo que garantiza una valorización
        constante de los terrenos con el paso del tiempo.
      </p>
      <p>
        <span className="image right">
          <img src={sky3} alt="" />
        </span>
        Además, los terrenos ya cuentan con todas las obras de infraestructura
        necesarias: red eléctrica instalada, alumbrado público en
        funcionamiento, red de agua potable y desagües pluviales. Esto significa
        que no tenés que esperar ni hacer grandes inversiones adicionales para
        empezar a construir. Todo está listo para avanzar. Ya sea para vivir,
        invertir o proyectar un futuro desarrollo, este loteo ofrece seguridad
        jurídica, accesibilidad y una ubicación privilegiada. Si estás buscando
        un lugar con servicios, buen acceso y proyección a futuro, esta es tu
        oportunidad. No lo pienses demasiado: terrenos como estos no se
        mantienen disponibles por mucho tiempo.
      </p>
    </section>
  );
};
