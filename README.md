# React Slider

## How to use.
Include "Slider.js" and "Slider.css" from "./src" folder to your React project source folder.

###### Import it in beginning of your code file.
`import Slider from "./Slider";`


###### Use as React component in any place where you render component.
(In example it's used in "./src/demo.js")
`content` is mandatory property. It must be array of html strings or react components. These will be slides displayed by slider.
	```
  class BasicSlider extends React.Component{
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
  ```

###### Add some optional settings
```
class SliderWithOptions extends React.Component{
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
      speed={3000}
      auto={true}
      pauseTime={2000}
      showPager={false}
      />
    )
  }
};
```

* `infinite` Boolean, false by default. If true, slider will behave like it would be infinite.
* `slidesCountOnScreen` Number, 1 by default. Use integer greater than 1 if you want multiple parallel slides visible.
* `speed` Number, 800 by default. Slides transition time in ms.
* `auto` Boolean, true by default. Slider will automatically change slides.
* `pauseTime` Number, 5000 by default. Time in ms between slider changes slides if auto property is set true.
* `showPager`Boolean, false by default. Shows navigation buttons for each slide.


###### Slider has method "showSlide(slideNo)". So one can scroll to selected slide by code.
```
class SliderScrolToSlide extends React.Component{
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
```

