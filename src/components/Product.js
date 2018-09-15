import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../store';

class Product extends Component {
  render = () => {
    const { name, id, rating } = this.props.product;
    return (
      <div style={{ display: 'flex' }}>
        <h3>{rating} | {name}</h3>
        <button onClick={() => this.props.deleteProduct(id)}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: id => dispatch(deleteProduct(id))
  }
}

export default connect(null, mapDispatchToProps)(Product);
