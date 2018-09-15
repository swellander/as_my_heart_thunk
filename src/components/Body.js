import React from 'react';
import ProductList from './ProductList';
import TopProduct from './TopProduct';

const Body = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  return (
    <div style={styles}>
      <ProductList />
      <TopProduct />
    </div>
  )
}

export default Body;