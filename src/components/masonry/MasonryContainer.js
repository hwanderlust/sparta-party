import React, { Component } from 'react';
import MasonryColumn from './MasonryColumn';
import jsonData from '../../data';
import { storeCtx } from '../../context';

const breakpoint = 1000;

class MasonryContainer extends Component {

  static contextType = storeCtx.Consumer;

  state = {
    windowWidthGreaterOrEqualToBreakpoint: false,
    twoCols: {
      col1of2: [jsonData[0], jsonData[2], jsonData[4]],
      col2of2: [jsonData[1], jsonData[3], jsonData[5]],
    },
    threeCols: {
      col1of3: [jsonData[0], jsonData[3]],
      col2of3: [jsonData[1], jsonData[4]],
      col3of3: [jsonData[2], jsonData[5]],
    }
  };

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth = () => {

    if(window.innerWidth <= 768 && this.context.updateWidth) {
      this.context.updateWidth(window.innerWidth);
    }

    this.setState(prevState => {
      if(window.innerWidth >= breakpoint && !prevState.windowWidthGreaterOrEqualToBreakpoint) {
        return {
          windowWidthGreaterOrEqualToBreakpoint: true
        }
      }

      if(window.innerWidth < breakpoint && prevState.windowWidthGreaterOrEqualToBreakpoint) {
        return {
          windowWidthGreaterOrEqualToBreakpoint: false
        }
      }
    })
  };

  render() {
    return (
      <main className="masonry">
        <div className='masonry__wrapper'>
          
          {
            this.state.windowWidthGreaterOrEqualToBreakpoint ? (
              <>
                <MasonryColumn items={this.state.threeCols.col1of3} colNum='1' threeCols={this.state.windowWidthGreaterOrEqualToBreakpoint} />
                <MasonryColumn items={this.state.threeCols.col2of3} colNum='2' threeCols={this.state.windowWidthGreaterOrEqualToBreakpoint} />
                <MasonryColumn items={this.state.threeCols.col3of3} colNum='3' threeCols={this.state.windowWidthGreaterOrEqualToBreakpoint}/>
              </>
            ) : (
              <>
                <MasonryColumn items={this.state.twoCols.col1of2} colNum='1' threeCols={this.state.windowWidthGreaterOrEqualToBreakpoint} />
                <MasonryColumn items={this.state.twoCols.col2of2} colNum='2' threeCols={this.state.windowWidthGreaterOrEqualToBreakpoint}/>
              </>
            ) 
          }
        </div>
      </main>
    );
  }
};

export default MasonryContainer;
