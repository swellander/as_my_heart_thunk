import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const GET_PRODUCTS = 'GET_PRODUCTS';

const _getProducts = (products) => (
  {
    type: GET_PRODUCTS,
    products
  }
);

export const getProducts = () => {
  return (dispatch) => {
    axios.get('/api/all')
      .then(response => response.data)
      .then(products => dispatch(_getProducts(products)))
  }
}



const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
  }
  return state;
};

export default createStore(productsReducer, applyMiddleware(thunk));