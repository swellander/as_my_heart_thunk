import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const GET_PRODUCTS = 'GET_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const _getProducts = (products) => (
  {
    type: GET_PRODUCTS,
    products
  }
);

const _deleteProduct = id => (
  {
    type: DELETE_PRODUCT,
    id
  }
)

export const deleteProduct = id => (
  dispatch => {
    axios.delete(`/api/products/${id}`)
      .then(() => dispatch(_deleteProduct(id)))
      .catch(err => console.log(err))
  }
)

export const getProducts = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(_getProducts(products)))
  }
}

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case DELETE_PRODUCT:
      return { ...state, products: state.products.filter(product => product.id !== action.id) }
  }
  return state;
};

export default createStore(productsReducer, applyMiddleware(thunk));