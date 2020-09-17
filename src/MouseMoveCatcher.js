class MouseMoveCatcher {
  constructor(element, onMoveFn, onFinishMoveFn) {
    this.addMouseHandler(element);
    this.onMoveFn = onMoveFn;
    this.onFinishMoveFn = onFinishMoveFn;

    this.mouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;
  }

  onMouseMove(evt) {
    if (!this.mouseDown) {
      return;
    }
    evt.preventDefault();
    var deltaX = evt.clientX - this.mouseX,
      deltaY = evt.clientY - this.mouseY;

    this.mouseX = evt.clientX;
    this.mouseY = evt.clientY;
    this.onMoveFn(deltaX, deltaY);
  }

  onMouseDown(evt) {
    evt.preventDefault();

    this.mouseDown = true;
    this.mouseX = evt.clientX;
    this.mouseY = evt.clientY;
  }

  onMouseUp(evt) {
    if (!this.mouseDown) {
      return;
    }

    evt.preventDefault();
    this.mouseDown = false;
    this.onFinishMoveFn();
  }

  addMouseHandler(targetElem) {
    document.addEventListener(
      "mousemove",
      (e) => {
        this.onMouseMove(e);
      },
      false
    );
    targetElem.addEventListener(
      "mousedown",
      (e) => {
        this.onMouseDown(e);
      },
      false
    );
    document.addEventListener(
      "mouseup",
      (e) => {
        this.onMouseUp(e);
      },
      false
    );

    //for tablet too
    document.addEventListener(
      "touchmove",
      (e) => {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
        this.onMouseMove(e);
      },
      false
    );
    targetElem.addEventListener(
      "touchstart",
      (e) => {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
        this.onMouseDown(e);
      },
      false
    );
    document.addEventListener(
      "touchend",
      (e) => {
        this.onMouseUp(e);
      },
      false
    );
  }
}
export default MouseMoveCatcher;
