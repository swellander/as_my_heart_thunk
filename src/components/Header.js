import React from 'react';
import faker from 'faker';
import { connect } from 'react-redux';
import { createProduct } from '../store';

const capitalizeFirst = string => (
  string[0].toUpperCase() + string.slice(1)
)

const mapDispatchToProps = dispatch => (
  {
    createProduct: () => dispatch(createProduct())
  }
)

export default connect(null, mapDispatchToProps)((props) => (
  <div>
    <h1>Sam's {capitalizeFirst(faker.company.bsAdjective())} Products</h1>
    <button onClick={() => props.createProduct()}>Create Product</button>
    <hr />
  </div>
))