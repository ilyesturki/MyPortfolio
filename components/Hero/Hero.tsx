import React from "react";
import CustomSpotLights from "./CustomSpotLights";
import GridBackground from "./GridBackground";
import GridContent from "./GridContent";

const Hero = () => {
  return (
    <div className="  pt-36 pb-20 ">
      <CustomSpotLights />
      <GridBackground />
      <GridContent />
    </div>
  );
};

export default Hero;
