import React from 'react';

import { Provider, Cart, Products, CartModal } from '@app/features';

export const Shop = () => {
  return (
    <Provider>
      <Cart />
      <Products />
      <CartModal />
    </Provider>
  );
};
