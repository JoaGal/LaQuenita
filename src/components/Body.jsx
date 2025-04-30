import React from "react";
import { Location } from "./body/Location";
import { Land } from "./body/Land";

import { Gallery } from "./body/Gallery";

export const Body = () => {
  return (
    <div id="main">
      <Land />
      <Location />
      <Gallery />
    </div>
  );
};
