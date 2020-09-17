import React from "react";
import ReactDOM from "react-dom";

import { ImageSlider, SliderWithOptions, SliderScrolToSlide } from "./demo";

const App = () => {
  return (
    <div>
      <h2 style={{ paddingTop: "10px" }}>Basic Slider</h2>
      <div style={{ width: "400px", border: "3px solid black" }}>
        <ImageSlider />
      </div>
      <h2 style={{ paddingTop: "100px" }}>Slider with optional params</h2>
      <div style={{ width: "400px", border: "3px solid black" }}>
        <SliderWithOptions />
      </div>
      <h2 style={{ paddingTop: "100px" }}>showSlide() demonstration</h2>
      <div style={{ width: "400px", border: "3px solid black" }}>
        <SliderScrolToSlide />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
