import React, { Component, Fragment } from 'react';
import store, { loadProducts } from '../store';
import { connect } from 'react-redux';
import Header from './Header';
import Body from './Body';


class Main extends Component {
  componentDidMount() {
    store.dispatch(loadProducts())
  }

  static defaultProps = {
    products: []
  }

  render = () => {
    return (
      <Fragment>
        <Header />
        <Body />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps)(Main);