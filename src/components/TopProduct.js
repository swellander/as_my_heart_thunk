import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

class TopProduct extends Component {
  render() {
    console.log(faker.image.image())
    return (
      <h1>Top Product: {this.props.topProduct.name}</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    topProduct: state.products ? state.products[0] : {}
  }
}

export default connect(mapStateToProps)(TopProduct);