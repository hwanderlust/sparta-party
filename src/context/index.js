import React from 'react'

export const storeCtx = React.createContext();

export default class Store extends React.Component {
  state = {
    windowWidth: 0,
    updateWidth: null
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
      updateWidth: this.updateWidth
    }, () => console.log(`store mounted update`, this.state))
  }

  updateWidth = (newWidth) => {
    this.setState(prevState => {
      if(prevState.windowWidth !== newWidth) {
        return {
          windowWidth: newWidth
        }
      }
    }, () => console.log(`store updated`, this.state))
  }

  render() {

    return (
      <storeCtx.Provider value={this.state}>
        {this.props.children}
      </storeCtx.Provider>
    )
  }
}
