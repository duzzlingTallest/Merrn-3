import React, { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";
import Body from "../../Components/Body/Body";
import { useNavigate } from "react-router-dom";

export default function Home() {
  
  return (
    <>
      <Slider />
      <Body />
    </>
  );
}
