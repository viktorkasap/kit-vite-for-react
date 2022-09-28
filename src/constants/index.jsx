export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

export const STATUS = {
  IDLE: 'idle',
  FAILED: 'failed',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
};

export const COLOR_NAME = {
  ACCENT01: 'accent01',
  ACCENT02: 'accent02',
  WARNING01: 'warning01',
  WARNING02: 'warning02',
  DANGER: 'danger',
  ERROR: 'error',
  BLACK: 'black',
  WHITE: 'white',
  GRAY01: 'gray01',
  GRAY02: 'gray02',
  GRAY03: 'gray03',
  SUCCESS: 'success',
};

export const DISPATCH_NAME = {
  SET_CART_MODAL: 'SET_CART_MODAL',
  SET_FETCHED_STATUS: 'SET_FETCHED_STATUS',
  FETCHED_PRODUCTS: 'FETCHED_PRODUCTS',
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
  INCREMENT_PRODUCT_CART: 'INCREMENT_PRODUCT_CART',
  DECREMENT_PRODUCT_CART: 'DECREMENT_PRODUCT_CART',
};
