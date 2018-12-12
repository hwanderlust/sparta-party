import React, { Component } from 'react';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import ImageContainer from './ImageContainer';
import Pagination from './Pagination';

const captions = [
  {type: "Screening:", title: "DVF Secret Agent Part 2", date: "October 15, 2017", subtext: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director, Peter Lindberg."},
  {type: "Screening:", title: "DVF Secret Agent Part 1", date: "October 8, 2018", subtext: "If you missed the private screening, check out Part 2"},
  {type: "Screening:", title: "After Party", date: "October 16, 2017", subtext: "Celebrate the screening's success with your favorite director Peter Lindberg."},
]

class Carousel extends Component {

  state = {
    slide: slide1,
    caption: captions[0],
    intervalId: null,
    id: 1,
    animationDirection: "left",
  }

  componentDidMount() {
    this.changeInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  changeInterval = () => {
    const intervalId = setInterval(() => {

      this.setState(prevState => {

        switch(prevState.slide) {
          case slide1:
            return { slide: slide2, caption: captions[1], id: 2 };
          case slide2:
            return { slide: slide3, caption: captions[2], id: 3 };
          case slide3:
            return { slide: slide1, caption: captions[0], id: 1 };
          default:
            return
        }
      }, () => {
        // console.log(`reset`, this.state)
      })

    }, 5000); 

    this.setState({
      intervalId
    })
  }
  

  handleClick = (e) => {
    // console.log('clicked')
    const pageNum = Number.parseInt(e.target.dataset.id);
    // console.log(pageNum);

    this.handleSwitch(pageNum);
  }

  handleTouch = (id, direction) => {
    // console.log(`handletouch`, id, direction)

    switch(direction) { 
      case "forward":
        if(id === 3) {
          this.handleSwitch(1, "left")
        } else {
          this.handleSwitch(id + 1, "left")
        }
        return

      case "backward":
        if(id === 1) {
          this.handleSwitch(3, "right")
        } else {
          this.handleSwitch(id - 1, "right")
        }
        return

      default:
        return
    }
  }

  handleSwitch = (n, direction) => {
    // console.log(`handleswitch`, n)

    switch (n) {
      case 1:
        if (this.state.slide !== slide1) {
          this.showSlide(slide1, captions[0], 1, direction);
        }
        return

      case 2:
        if (this.state.slide !== slide2) {
          this.showSlide(slide2, captions[1], 2, direction);
        }
        return

      case 3:
        if (this.state.slide !== slide3) {
          this.showSlide(slide3, captions[2], 3, direction);
        }
        return

      default:
        return
    }
  }

  showSlide = (slide, caption, id, direction) => {
    // console.log(`showSlide`)

    this.setState(prevState => {
      return { 
        slide: slide,
        caption,
        id,
        animationDirection: direction
      }

    }, () => this.resetInterval())
  }

  resetInterval = () => {
    clearInterval(this.state.intervalId);
    this.changeInterval();
  }

  render() {

    return (
      <figure className='carousel'>

        <ImageContainer slide={this.state.slide} caption={this.state.caption} id={this.state.id} handleTouch={this.handleTouch} direction={this.state.animationDirection} />
        
        <Pagination handleClick={this.handleClick} slideNum={this.state.id} />
        
      </figure>
    )
  }
};

export default Carousel;