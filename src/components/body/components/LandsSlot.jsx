import React from "react";
import lands from "../../../data/lands";

export const LandsSlot = ({ box, start, end, oneFile, setLands }) => {
  const handleClick = (land) => {
    if (land.sale) {
      setLands(land);
    }
  };

  return (
    <div class={box}>
      {(() => {
        const landsFiltered = lands.filter(
          (land) => land.id >= start && land.id <= end
        );
        if (oneFile) {
          return landsFiltered.map((land) => (
            <div
              className={`land ${!land.sale && "landsSells"} 
              ${land.sup.includes("1.043") && "landDouble"}
              ${land.sup.includes("863") && "landSemiDouble"}
              ${land.sup.includes("988") && "landMedium"}`}
              key={land.id}
              onClick={() => {
                handleClick(land);
              }}
            >
              <span>P. {land.id}</span>
            </div>
          ));
        } else {
          const pairedLands = [];
          for (let i = 0; i < landsFiltered.length; i += 2) {
            if (landsFiltered[i + 1]) {
              pairedLands.push(landsFiltered[i + 1], landsFiltered[i]);
            } else {
              pairedLands.push(landsFiltered[i]);
            }
          }
          return pairedLands.map((land) => (
            <div
              className={`land ${!land.sale && "landsSells"} 
              ${
                (land.sup.includes("1.200") || land.sup.includes("1.001")) &&
                "landDouble"
              }
              ${land.sup.includes("822") && "landSemiDouble"}
              ${land.sup.includes("718") && "landMedium"}`}
              key={land.id}
              onClick={() => {
                handleClick(land);
              }}
            >
              <span>P. {land.id}</span>
            </div>
          ));
        }
      })()}
    </div>
  );
};
