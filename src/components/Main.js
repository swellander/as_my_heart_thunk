import React, { Component } from 'react';
import store, { getProducts } from '../store';
import { connect } from 'react-redux';
import uuid from 'uuid';

class Main extends Component {
  componentDidMount() {
    store.dispatch(getProducts())
  }

  static defaultProps = {
    products: []
  }

  render = () => {
    return (
      <div>
        {this.props.products.map(product => (
          <h3 key={uuid()}>{product.name}</h3>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps)(Main);