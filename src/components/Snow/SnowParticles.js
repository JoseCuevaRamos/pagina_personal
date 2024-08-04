import configuracionsnow from "./Snowconfig"
import Particles from "react-tsparticles"
import React from "react";
import './Snow.css'

export const SnowParticles = () => {
  return (
    <div className="snow-particles-container">
      <Particles params={configuracionsnow} />
    </div>
  )
}
export default SnowParticles