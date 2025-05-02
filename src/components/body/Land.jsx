import React, { useState } from "react";
import map from "../../images/map/map0.webp";
import mapMobile from "../../images/map/map.webp";
// import { Segments } from "./components/Segments";
import { LandSlot } from "./components/LandSlot";
import { LandCar } from "./components/LandCar";

export const Land = () => {
  const [lands, setLands] = useState();
  return (
    <>
      <section className="post featured" id="land">
        <header className="major">
          {/* <span className="date">La Quenita</span> */}
          <h2>Terrenos</h2>
          <p>Seleccionar el lote para obtener mas informacion del mismo.</p>
        </header>
        <div className="image main">
          <div className="containerLand">
            <div className="boxLand">
              {/* Sector A */}
              <LandSlot box="boxSector" start={173} end={196} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector" start={149} end={172} oneFile={false} setLands={setLands}/>
              {/* Sector Vacio */}
              <div></div>
              {/* Sector B */}
              <LandSlot box="boxSector" start={126} end={147} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector" start={104} end={125} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector alone" start={93} end={103} oneFile={true} setLands={setLands}/>
              {/* Sector D */}
              <LandSlot box="boxSector" start={283} end={306} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector" start={259} end={282} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector alone" start={247} end={258} oneFile={true} setLands={setLands}/>
              {/* Sector C */}
              <LandSlot box="boxSector" start={227} end={246} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector" start={207} end={226} oneFile={false} setLands={setLands}/>
              <LandSlot box="boxSector alone" start={197} end={206} oneFile={true} setLands={setLands}/>
            </div>
          </div>
          {lands && <LandCar land={lands} setLands={setLands}/>}
          <img src={map} alt="La Quenita" className="map"/>
          <img src={mapMobile} alt="La Quenita" className="map mobile"/>
        </div>
      </section>
      {/* <Segments /> */}
    </>
  );
};