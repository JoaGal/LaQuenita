import React from "react";

export const LandCar = ({ land, setLands }) => {
  return (
    <div className="containerCardLand">
      <div className="closeCardLand" onClick={() => setLands()} />
      <div className={`cardLandContent`}>
        <div className="landCard">
          <i
            className="fas fa-times closeButton"
            onClick={() => setLands()}
          ></i>
          <h2>Parcela #{land.id}</h2>
          <div className="landDetails">
            <p>
              <strong>Superficie:</strong> {land.sup}
            </p>
            <p>
              <strong>Dimensiones:</strong> {land.dimension}
            </p>
            <p>
              <strong>Zona:</strong> {land.zone}
            </p>
            <p className="description">{land.description}</p>
          </div>
          {/* {land.sale ? (
            <div className="landStatus available">Disponible para la venta</div>
          ) : (
            <div className="landStatus available inactive">
              No disponible para la venta
            </div>
          )} */}
          <ul className="actions special">
            <li>
              <a href="#location" className="button">
                Como llegar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
