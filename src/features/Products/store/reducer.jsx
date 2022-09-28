import produce from 'immer';

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

export const reducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CART_MODAL: {
      draft.isCartModal = payload;

      return;
    }

    case FETCHED_PRODUCTS: {
      const { fetchedProducts } = action.payload;

      draft.products.list = fetchedProducts;

      return;
    }

    case SET_FETCHED_STATUS: {
      const { fetchingStatus, error } = action.payload;

      draft.fetching.status = fetchingStatus;
      draft.fetching.error = error;

      return;
    }

    case ADD_PRODUCT_TO_CART: {
      const { productId } = action.payload;
      const orderedProduct = draft.products.list.find((product) => product.id === productId);

      draft.products.orderedList.push(orderedProduct);
      draft.countProducts = draft.products.orderedList.length;
      draft.products.cartOrderInfo.push({
        count: 1,
        id: orderedProduct.id,
        name: orderedProduct.name,
        cost: orderedProduct.price,
        total: orderedProduct.price,
      });

      return;
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const { productId } = action.payload;
      const newOrderList = draft.products.orderedList.filter((product) => product.id !== productId);
      const newCartOrderInfo = draft.products.cartOrderInfo.filter((product) => product.id !== productId);

      draft.products.orderedList = newOrderList;
      draft.products.cartOrderInfo = newCartOrderInfo;
      draft.countProducts = draft.products.orderedList.length;

      return;
    }

    case INCREMENT_PRODUCT_CART: {
      const { productId } = action.payload;
      const product = draft.products.cartOrderInfo.find((product) => product.id === productId);

      product.count = product.count + 1;
      product.total = product.cost * product.count;

      return;
    }

    case DECREMENT_PRODUCT_CART: {
      const { productId } = action.payload;
      const product = draft.products.cartOrderInfo.find((product) => product.id === productId);

      if (product.count >= 2) {
        product.count = product.count - 1;
        product.total = product.cost * product.count;
      }

      return;
    }

    default:
      return draft;
  }
});
