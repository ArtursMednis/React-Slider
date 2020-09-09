import React from "react";
import Slider from "./Slider";


export class BasicSlider extends React.Component{
  render(){
    return (
      <Slider content={[
        "<h3>0  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        "<h3>First Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        "<h3>Second  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        () => {
        return (
          <div>
            <h4>Third slide as React component</h4>
            <p> Lorem ipsum dolor sit amet </p>
          </div>
        );
      },
      ]} />
    )
  }
};

export class SliderWithOptions extends React.Component{
  render(){
    return (
      <Slider 
      content={[
        "<h3>0  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        "<h3>First Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        "<h3>Second  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        "<h3>Third  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
        "<h3>4th  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
      ]} 
      infinite={true}
      slidesCountOnScreen={2}
      speed={1200}
      auto={true}
      pauseTime={3000}
      showPager={true}
      />
    )
  }
};

export class SliderScrolToSlide extends React.Component{
  constructor(props){
    super(props);
    this.sliderRef = React.createRef();
  }

  render(){
    return (
      <div>
        <Slider 
        ref={this.sliderRef}
        content={[
          "<h3>0  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
          "<h3>First Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
          "<h3>Second  Slide</h3><p> Lorem ipsum dolor sit amet </p> ",
          "<h3>Third  Slide</h3><p> Lorem ipsum dolor sit amet </p> "
        ]} 
        infinite={true}
        />
        <button onClick={()=>{this.sliderRef.current.showSlide(2)}}>Go to slide 2</button>
      </div>
    )
  }
};
