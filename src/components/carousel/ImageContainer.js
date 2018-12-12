import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Image from "./Image";
import { storeCtx } from '../../context';


class ImageContainer extends React.Component {
  
  static contextType = storeCtx.Consumer;
  
  state = {
    left: 0,
    originalOffset: 0,
    velocity: 0,
    timeOfLastDragEvent: 0,
    touchStartX: 0,
    prevTouchX: 0,
    beingTouched: false,
    intervalId: null,
    imageId: null,
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  handleMovement = () => {
    // console.log(`animate`, this.state.intervalId)

    let { left, velocity, beingTouched, prevTouchX } = this.state;
    const forwardMovement = !beingTouched && prevTouchX && left < -0.01;
    const backwardMovement = !beingTouched && prevTouchX && left > 0.01;
    const threshold = 50;
    velocity += 10 * 0.033;

    if (forwardMovement) {
      left += velocity;
    } 

    if (backwardMovement) {
      left -= velocity;
    }

    if (left < -threshold) {
      this.handleSwitch("forward")
    }

    if (left > threshold) {
      this.handleSwitch("backward")
    }

    window.clearInterval(this.state.intervalId);
  }

  handleSwitch = (direction) => {
    this.props.handleTouch(this.state.imageId, direction)
    window.clearInterval(this.state.intervalId);

    this.setState({
      left: 0,
      velocity: 0,
      intervalId: null,
      originalOffset: 0,
      timeOfLastDragEvent: 0,
      touchStartX: 0,
      prevTouchX: 0,
    })
  }

  handleSetup = (clientX) => {
    // console.log(`handleStart`, this.state)

    if (this.state.intervalId !== null) {
      window.clearInterval(this.state.intervalId);
    }

    this.setState({
      originalOffset: this.state.left,
      velocity: 0,
      timeOfLastDragEvent: Date.now(),
      touchStartX: clientX,
      beingTouched: true,
      intervalId: null
    }, () => console.log(this.state));
  }

  handleTouchStart = (e) => {
    const id = e.target.dataset.id;
    // console.log(`id`, id);

    if(this.state.imageId !== id) {
      this.setState({ imageId: + id });
    }

    this.handleSetup(e.targetTouches[0].clientX);
  }

  handleTouchMove = (e) => {
    const clientX = e.targetTouches[0].clientX;

    if (this.state.beingTouched) {
      // console.log(`handlemove`, e.timeStamp)
      const currTime = Date.now();
      const elapsed = currTime - this.state.timeOfLastDragEvent;
      const velocity = 20 * (clientX - this.state.prevTouchX) / elapsed;
      let deltaX = clientX - this.state.touchStartX + this.state.originalOffset;

      this.setState({
        left: deltaX,
        velocity,
        timeOfLastDragEvent: currTime,
        prevTouchX: clientX
      }, () => console.log(this.state));
    }
  }

  handleTouchEnd = (e) => {
    // console.log(`end`, e.timeStamp)

    this.setState({
      velocity: this.state.velocity,
      touchStartX: 0,
      beingTouched: false,
      intervalId: window.setInterval(this.handleMovement, 33),
    }, () => console.log(this.state));
  }

  render() {
    const { slide, caption, id } = this.props;

    return (
      <div 
        className='carousel__img-container' 
        onTouchStart={this.handleTouchStart} 
        onTouchEnd={this.handleTouchEnd} 
        onTouchMove={this.handleTouchMove} 
      >
        <TransitionGroup component={null}>
          <CSSTransition
            key={slide}
            timeout={1000}
            classNames={this.props.direction === "left" ? "slideInLeft" : "slideInRight"}
            in={true}
            appear={true}
            unmountOnExit
          >

            <Image slide={slide} {...caption} id={id} left={this.state.left} />

          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
};

export default ImageContainer;
