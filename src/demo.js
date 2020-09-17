import React from "react";
import Slider from "./Slider";
import imgSlide1 from "./assets/slide1.jpg";
import imgSlide2 from "./assets/slide2.jpg";
import imgSlide3 from "./assets/slide3.jpg";
import imgSlide4 from "./assets/slide4.jpg";
import imgSlide5 from "./assets/slide5.jpg";
import imgSlide6 from "./assets/slide6.jpg";
import imgSlide7 from "./assets/slide7.jpg";

export class ImageSlider extends React.Component {
  render() {
    return (
      <Slider auto={false}>
        <div>
          <h2> Image slider</h2>
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide1}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide2}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide3}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide4}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide5}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide6}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide7}
          />
        </div>
      </Slider>
    );
  }
}

export class SliderWithOptions extends React.Component {
  render() {
    return (
      <Slider
        infinite={true}
        slidesCountOnScreen={2}
        speed={1200}
        auto={true}
        pauseTime={3000}
        showPager={true}
      >
        <div>
          <p> Image slider</p>{" "}
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide1}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide2}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide3}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide4}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide5}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide6}
          />
        </div>
        <div style={{ lineHeight: "0" }}>
          <img
            style={{ width: "100%", margin: 0, padding: 0 }}
            src={imgSlide7}
          />
        </div>
      </Slider>
    );
  }
}

export class SliderScrolToSlide extends React.Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Slider ref={this.sliderRef} infinite={true}>
          <div>
            <p> Image slider</p>{" "}
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide1}
            />
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide2}
            />
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide3}
            />
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide4}
            />
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide5}
            />
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide6}
            />
          </div>
          <div style={{ lineHeight: "0" }}>
            <img
              style={{ width: "100%", margin: 0, padding: 0 }}
              src={imgSlide7}
            />
          </div>
        </Slider>
        <button
          onClick={() => {
            this.sliderRef.current.showSlide(2);
          }}
        >
          Go to slide 2
        </button>
      </div>
    );
  }
}
