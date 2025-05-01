import React, { useState } from "react";
import image from "../../images/map/map0.png";
import { Segments } from "./components/Segments";
import { LandsSlot } from "./components/landsSlot";
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
              <LandsSlot box="boxSector" start={173} end={196} setLands={setLands}/>
              <LandsSlot box="boxSector" start={149} end={172} setLands={setLands}/>
              {/* Sector Vacio */}
              <div></div>
              {/* Sector B */}
              <LandsSlot box="boxSector" start={126} end={147} setLands={setLands}/>
              <LandsSlot box="boxSector" start={104} end={125} setLands={setLands}/>
              <LandsSlot box="boxSector alone" start={93} end={103} oneFile={true} setLands={setLands}/>
              {/* Sector D */}
              <LandsSlot box="boxSector" start={283} end={306} setLands={setLands}/>
              <LandsSlot box="boxSector" start={259} end={282} setLands={setLands}/>
              <LandsSlot box="boxSector alone" start={247} end={258} oneFile={true} setLands={setLands}/>
              {/* Sector C */}
              <LandsSlot box="boxSector" start={227} end={246} setLands={setLands}/>
              <LandsSlot box="boxSector" start={207} end={226} setLands={setLands}/>
              <LandsSlot box="boxSector alone" start={197} end={206} oneFile={true} setLands={setLands}/>
            </div>
          </div>
          {lands && <LandCar land={lands} setLands={setLands}/>}
          <img src={image} alt="" />
        </div>
      </section>
      {/* <Segments /> */}
    </>
  );
};
