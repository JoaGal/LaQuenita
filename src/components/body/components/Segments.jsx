import React from "react";
import segments from "../../../data/segments";
import imagen from "../../../images/pic01.jpg"; 
export const Segments = () => {
    return (
      <div className="posts" id="location/segmented">
        {segments.map((segment) => (
          <article key={segment.id}>
            <header>
              {/* <span className="date">{segment.cantidad}</span> */}
              <h2>
                <a href="#terrenos">{segment.name}</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img src={imagen} alt={segment.name} />
            </a>
            <p>{segment.description}</p>
            <ul className="actions special">
              <li>
                <a href="#terrenos" className="button">
                  Ver más
                </a>
              </li>
            </ul>
          </article>
        ))}
      </div>
    );
  };
