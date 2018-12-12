import React from 'react'
import { storeCtx } from './index';

const WithStore = (WrappedComponent) => {
  return (props) => {
    return (
      <storeCtx.Consumer>
        {ctx => <WrappedComponent {...props} store={ctx} />}
      </storeCtx.Consumer>
    )
  }
}

export default WithStore;