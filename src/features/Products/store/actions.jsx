import { DISPATCH_NAME } from '@app/constants';

const {
  SET_FETCHED_STATUS,
  SET_CART_MODAL,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  FETCHED_PRODUCTS,
  INCREMENT_PRODUCT_CART,
  DECREMENT_PRODUCT_CART,
} = DISPATCH_NAME;

export const setCartModal = (isOpen) => (dispatch) => {
  dispatch({ type: SET_CART_MODAL, payload: isOpen });
};

export const addToCart = (productId) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_CART, payload: { productId } });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { productId } });
};

export const addProducts = (fetchedProducts) => (dispatch) => {
  dispatch({ type: FETCHED_PRODUCTS, payload: { fetchedProducts } });
};

export const incProduct = (productId) => (dispatch) => {
  dispatch({ type: INCREMENT_PRODUCT_CART, payload: { productId } });
};

export const decProduct = (productId) => (dispatch) => {
  dispatch({ type: DECREMENT_PRODUCT_CART, payload: { productId } });
};

export const existingInOrderList = (productId, orderedList) => () => {
  return orderedList.find((product) => product.id === productId);
};

export const setFetchingStatus = (fetchingStatus, error) => (dispatch) => {
  dispatch({ type: SET_FETCHED_STATUS, payload: { fetchingStatus, error } });
};
