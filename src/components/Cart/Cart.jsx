import PropTypes from 'prop-types';

import { CartCounterStyled, CartStyled } from './styled';

export const Cart = ({ count = 0, onClick }) => {
  return (
    <CartStyled onClick={onClick}>
      <CartCounterStyled>{count}</CartCounterStyled>
      <span className="material-icons">shopping_cart</span>
    </CartStyled>
  );
};

Cart.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};
