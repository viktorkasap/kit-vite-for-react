import React from 'react';

import { Text, Modal } from '@app/components';
import { setCartModal, useTrackedState, useDispatch } from '@app/features';

import { CartModalBody, CartModalContainer, CartModalFooter, CartModalHeader } from './styled';
import { CartItem } from './components';

export const CartModal = () => {
  const state = useTrackedState();
  const dispatch = useDispatch();
  const { products, isCartModal } = state;

  const handleClose = () => {
    setCartModal(false)(dispatch);
  };

  const totalCost = () => {
    if (products.cartOrderInfo.length) {
      return products.cartOrderInfo.reduce((acc, prev) => {
        const cost = prev.total ?? prev.cost;
        return Number(acc) + Number(cost);
      }, 0);
    }
  };

  return (
    <Modal isOpen={isCartModal} onClose={handleClose}>
      <CartModalContainer>
        <CartModalHeader>
          <Text variant="semiBold" size="xxlarge">
            Корзина: {!products.length ? 'пуста' : products.length}
          </Text>
        </CartModalHeader>
        <CartModalBody>
          {!products.cartOrderInfo.length && 'Товаров пока нет'}
          {products.cartOrderInfo.map((product) => (
            <CartItem key={product.id} productId={product.id} />
          ))}
        </CartModalBody>
        {!!products.cartOrderInfo.length && (
          <CartModalFooter>
            <Text variant="bold" size="xxlarge">
              Итого: {totalCost()} руб.
            </Text>
          </CartModalFooter>
        )}
      </CartModalContainer>
    </Modal>
  );
};
