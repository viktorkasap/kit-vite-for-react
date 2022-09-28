import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { fontSizes } from '@app/theme';
import { Button, Text } from '@app/components';
import { incProduct, decProduct, removeFromCart, useTrackedState, useDispatch } from '@app/features';

import { CartItemName, CartItemRemove, CartItemStyled, CartItemCount, CartItemCost } from './styled';

export const CartItem = ({ productId }) => {
  const state = useTrackedState();
  const dispatch = useDispatch();
  const { products } = state;

  const product = products.cartOrderInfo.find((product) => product.id === productId);
  const { id, cost, count, name, total } = product;

  const handleIncrement = (productId) => () => {
    incProduct(productId)(dispatch);
  };

  const handleDecrement = (productId) => () => {
    decProduct(productId)(dispatch);
  };

  const handleRemove = (productId) => () => {
    removeFromCart(productId)(dispatch);
    toast.success('Товар удален', { theme: 'dark' });
  };

  return (
    <CartItemStyled>
      <CartItemName>
        <Text variant="semiBold" size="large">
          {name}
        </Text>
      </CartItemName>

      <CartItemCost>{cost} руб.</CartItemCost>

      <CartItemCount>
        <Button variant="black" size="small" onClick={handleDecrement(id)}>
          -
        </Button>
        <Text variant="semiBold" size="large">
          {count}
        </Text>
        <Button variant="black" size="small" onClick={handleIncrement(id)}>
          +
        </Button>
      </CartItemCount>

      <CartItemCost>Всего: {total || cost} руб.</CartItemCost>

      <CartItemRemove>
        <Button variant="black" size="small" onClick={handleRemove(id)}>
          <span className="material-icons" style={{ fontSize: fontSizes.large }}>
            close
          </span>
        </Button>
      </CartItemRemove>
    </CartItemStyled>
  );
};

CartItem.propTypes = {
  productId: PropTypes.string,
};
