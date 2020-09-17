import React from "react";
import MouseMoveCatcher from "./MouseMoveCatcher";
require("./Slider.css");

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.curentSlideNo = 0;
    this.currentTranslatePosition = 0;

    this.movableDivRef = React.createRef();
    this.outerDivRef = React.createRef();
    this.dragDivRef = React.createRef();

    this.sliderViewWidth = 50;
    this.slideWidth = 50;
    this.transitionDuration = 1500;
    this.offsetTranslation = 0;
    this.widthSum = this.slideWidth * this.props.children.length + 100;
    this.mouseDown = false;
  }
  componentDidMount() {
    this.updateWidth();
    this.showSlide(0);
    this.transitionDuration =
      this.props.speed || this.props.speed == 0 ? this.props.speed : 800;
    this.movableDivRef.current.style.transitionDuration =
      this.transitionDuration + "ms";
    new MouseMoveCatcher(
      this.dragDivRef.current,
      (deltaX, deltaY) => {
        this.onMouseMove(deltaX, deltaY);
      },
      () => {
        this.onFinishMouseMoveFn();
      }
    );

    if (this.props.auto !== false) {
      this.autoNext();
    }
  }

  getInfiniteHandledSlides() {
    var content = this.props.children;
    if (this.props.infinite) {
      var clonesFromStart = [];
      var clonesFromEnd = [];

      var counterFromStart = 0;
      var counterFromEnd = content.length - 1;

      for (var k = 0; k < this.getSlidesCountOnScreen(); k++) {
        var elemFromStart = content[counterFromStart];
        clonesFromStart.push(elemFromStart);
        counterFromStart++;
        if (counterFromStart >= content.length) {
          counterFromStart = 0;
        }

        var elemFronEnd = content[counterFromEnd];
        clonesFromEnd.unshift(elemFronEnd);
        counterFromEnd--;
        if (counterFromEnd < 0) {
          counterFromEnd = content.length - 1;
        }
      }

      var contentSlides = clonesFromEnd.concat(content, clonesFromStart);
      return contentSlides;
    } else {
      return content;
    }
  }

  getSlidesCountOnScreen() {
    return this.props.slidesCountOnScreen ? this.props.slidesCountOnScreen : 1;
  }

  render() {
    return (
      <div ref={this.outerDivRef}>
        <div
          style={{
            width: this.sliderViewWidth + "px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="slControlBtn"
            style={{ left: 0 }}
            onClick={() => {
              this.plusSlides(-1);
            }}
          >
            {" "}
            <span> &#10094;</span>
          </div>
          <div
            className="slControlBtn"
            style={{ right: 0 }}
            onClick={() => {
              this.plusSlides(1);
            }}
          >
            {" "}
            <span>&#10095;</span>
          </div>

          <div
            ref={this.dragDivRef}
            className="dragDiv"
            style={{
              width: this.getMediaAdjustedSliderViewVidth() + "px",
              overflow: "hidden",
              cursor: "grab",
              position: "relative",
            }}
          >
            <div style={{ width: this.widthSum + "px" }}>
              <div
                ref={this.movableDivRef}
                style={{ transitionProperty: "transform" }}
              >
                {this.getInfiniteHandledSlides().map((contentElem) =>
                  this.vrapSliderDiv(contentElem)
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: this.props.showPager ? "block" : "none",
            textAlign: "center",
          }}
        >
          {this.props.children.map((contetnElem, index) => (
            <button
              onClick={() => {
                this.showSlide(index);
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }

  vrapSliderDiv(Content) {
    var style = {
      display: "inline-block",
      width: this.slideWidth + "px",
      float: "left",
    };

    var className = "slide";
    return (
      <div className={className} style={style}>
        {Content}
      </div>
    );
  }

  plusSlides(n) {
    this.showSlide((this.curentSlideNo += n));
  }

  showSlide(slideNo) {
    if (this.props.children.length == 0) {
      return;
    }

    this.curentSlideNo = slideNo;

    if (this.curentSlideNo >= this.props.children.length) {
      this.slideOverflowRight();
    }
    if (this.curentSlideNo < 0) {
      this.slideOverflowLeft();
    }

    if (this.props.infinite) {
      this.currentTranslatePosition =
        (this.curentSlideNo + this.getSlidesCountOnScreen()) * this.slideWidth;
    } else {
      this.currentTranslatePosition = this.curentSlideNo * this.slideWidth;
    }

    this.moveSlider(this.currentTranslatePosition);
  }

  slideOverflowLeft() {
    if (!this.props.infinite) {
      this.curentSlideNo = this.props.children.length - 1;
      return;
    }

    setTimeout(() => {
      this.movableDivRef.current.style.transitionDuration = "0ms";
      this.showSlide(this.props.children.length - 1);
      setTimeout(() => {
        this.movableDivRef.current.style.transitionDuration =
          this.transitionDuration + "ms";
      }, 100);
    }, this.props.speed);
  }

  slideOverflowRight() {
    if (!this.props.infinite) {
      this.curentSlideNo = 0;
      return;
    }

    setTimeout(() => {
      this.movableDivRef.current.style.transitionDuration = "0ms";
      this.showSlide(0);
      setTimeout(() => {
        this.movableDivRef.current.style.transitionDuration =
          this.transitionDuration + "ms";
      }, 100);
    }, this.props.speed);
  }

  updateWidth() {
    var slidesOnScreen = this.getSlidesCountOnScreen();
    this.sliderViewWidth = this.outerDivRef.current
      ? this.outerDivRef.current.offsetWidth
      : 50;

    this.slideWidth =
      slidesOnScreen > 1
        ? this.sliderViewWidth / slidesOnScreen
        : this.sliderViewWidth;
    if (this.isMobileDev()) {
      this.slideWidth = Math.round(this.slideWidth * 0.8);
    }
    this.widthSum =
      this.slideWidth *
      (this.props.children.length +
        (this.props.infinite ? 2 * slidesOnScreen : 0));
    this.forceUpdate();
  }

  moveSlider(byPixels) {
    this.movableDivRef.current.style.transform =
      "translate3d(" + -byPixels + "px, 0px, 0px)";
  }

  onMouseMove(deltaX, deltaY) {
    this.mouseDown = true;
    this.movableDivRef.current.style.transitionDuration = "0ms";

    this.currentTranslatePosition = this.currentTranslatePosition - deltaX * 1;

    if (this.currentTranslatePosition < 0) {
      this.currentTranslatePosition = 0;
    }

    if (this.currentTranslatePosition > this.widthSum) {
      this.currentTranslatePosition = this.widthSum;
    }

    this.moveSlider(this.currentTranslatePosition);
  }
  onFinishMouseMoveFn() {
    this.movableDivRef.current.style.transitionDuration =
      this.transitionDuration + "ms";

    var slideNo = Math.round(this.currentTranslatePosition / this.slideWidth);
    if (this.props.infinite) {
      slideNo = slideNo - this.getSlidesCountOnScreen();
    }
    this.showSlide(slideNo);
    this.mouseDown = false;
  }

  autoNext() {
    if (this.props.auto !== false) {
      var pause = this.props.pauseTime ? this.props.pauseTime : 5000;

      setTimeout(() => {
        if (!this.mouseDown) {
          this.plusSlides(1);
        }
        this.autoNext();
      }, pause);
    }
  }
  isMobileDev() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }
    return false;
  }
  getMediaAdjustedSliderViewVidth() {
    if (this.isMobileDev()) {
      return Math.round(this.sliderViewWidth * 0.8);
    } else {
      return this.sliderViewWidth;
    }
  }
}

export default Slider;
