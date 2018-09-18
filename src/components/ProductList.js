import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class ProductList extends React.Component {
  render = () => (
    <div>
      {this.props.products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

const mapStateToProps = state => (
  { ...state }
)

export default connect(mapStateToProps)(ProductList);