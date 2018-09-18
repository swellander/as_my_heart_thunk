import React, { Component } from 'react';
import { connect } from 'react-redux';

const getHighestRated = productArr => (
  productArr.reduce((highest, curr) => {
    if (highest.rating > curr.rating) return highest;
    else return curr;
  })
);

class TopProduct extends Component {
  render() {
    return (
      <h1>Top Product: {this.props.topProduct.name || <em>You</em>}</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    topProduct: state.products.length > 0 ? getHighestRated(state.products) : {}
  }
}

export default connect(mapStateToProps)(TopProduct);