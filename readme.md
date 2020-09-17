# React Slider

## Demo
You can see demonstration here: <br> 
http://htmlpreview.github.io/?https://github.com/ArtursMednis/React-Slider/blob/master/dist/index.html

## How to launc this project
Download all files from the project;

Install dev dependencies: <br>
  `npm i`

#### Run development
You can run project development:<br>
  `npm run start`

If your browser doesn't load, then open your browser on http://localhost:8080

#### Build release
To bild release:<br>
  `npm run build`  <br>

Then all files ar compiled in "./dist" folder.

## How to reuse in other projects.
Include "Slider.js", "MouseMoveCatcher.js" and "Slider.css" in your React project source folder (In this project they are in "./src" folder.)

###### Import it in beginning of your code file.
`import Slider from "./Slider";`


###### Use as React component in any place where you render component.
(In example it's used in "./src/demo.js")
Slider direct childrens will be slides. Here are example of image slider. 


```
class ImageSlider extends React.Component {
  render() {
    return (
      <Slider>
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
```

Note: Here 'img' tag is nested in 'div' tag with 0 line-height; It's due to remove ugly space gap after image.

###### Add some optional settings

```
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
        {/*Some Slides*/}
      </Slider>
    );
  }
}
```

* `infinite` Boolean, false by default. If true, slider will behave like it would be infinite.
* `slidesCountOnScreen` Number, 1 by default. Use integer greater than 1 if you want multiple parallel slides visible.
* `speed` Number, 800 by default. Slides transition time in ms.
* `auto` Boolean, true by default. Slider will automatically change slides.
* `pauseTime` Number, 5000 by default. Time in ms between slider changes slides if auto property is set true.
* `showPager`Boolean, false by default. Shows navigation buttons for each slide.


###### Slider has method "showSlide(slideNo)". So one can scroll to selected slide by code.

```
export class SliderScrolToSlide extends React.Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Slider ref={this.sliderRef} infinite={true}>
          {/*Some Slides*/}
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
```

