import React from 'react';
import img from "../../../assets/Images/practo-main-image.png"

const HeroImage = () => {
  return (
    <>
    <img style={{height: "28%" , width: "80vw", padding: "2.6rem 0"}}
    src={img} alt='main-img'/>
    </>
  )
}

export default HeroImage;