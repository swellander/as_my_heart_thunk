import { createStore } from 'redux';

const GET_PRODUCTS = 'GET_PRODUCTS';
const _getProducts = (products) => (
  {
    type: GET_PRODUCTS,
    products
  }
)