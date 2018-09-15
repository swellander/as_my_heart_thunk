import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import faker from 'faker';

//helper function
const getRandomRating = () => {
  return Math.ceil(Math.random() * 10);
}
const sortByRating = productArr => (
  productArr.sort((a, b) => b.rating - a.rating)
)

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';


//functions with underscores_ are action creaters
const _loadProducts = (products) => (
  {
    type: LOAD_PRODUCTS,
    products
  }
);

const _createProduct = product => (
  {
    type: CREATE_PRODUCT,
    product
  }
)

const _deleteProduct = id => (
  {
    type: DELETE_PRODUCT,
    id
  }
)

export const loadProducts = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(_loadProducts(products)))
  }
}

export const createProduct = () => {
  const newProduct = {
    name: faker.commerce.productName(),
    rating: getRandomRating()
  }

  return dispatch => {
    axios.post('api/products', newProduct)
      .then(response => response.data)
      .then(product => {
        dispatch(_createProduct(product))
      })
      .catch(err => console.log(err))
  }
}

export const deleteProduct = id => (
  dispatch => {
    axios.delete(`/api/products/${id}`)
      .then(() => dispatch(_deleteProduct(id)))
      .catch(err => console.log(err))
  }
)

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, products: action.products };
    case CREATE_PRODUCT:
      const sorted = sortByRating([...state.products, action.product])
      return { ...state, products: sorted }
    case DELETE_PRODUCT:
      return { ...state, products: state.products.filter(product => product.id !== action.id) }
  }
  return state;
};

export default createStore(productsReducer, applyMiddleware(thunk));