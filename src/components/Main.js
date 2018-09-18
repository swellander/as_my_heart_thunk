import React, { Component, Fragment } from 'react';
import { loadProducts } from '../store';
import { connect } from 'react-redux';
import Header from './Header';
import Body from './Body';


class Main extends Component {

  componentDidMount() {
    this.props.initProducts();
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

const dispatchStateToProps = dispatch => ({
  initProducts: () => dispatch(loadProducts())
})

export default connect(null, dispatchStateToProps)(Main);