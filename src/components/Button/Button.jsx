import PropTypes from 'prop-types';

import { ButtonStyled } from './styled';

export const Button = ({ size = 'regular', variant = 'accent01', onClick, children }) => {
  return (
    <ButtonStyled size={size} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['regular', 'full', 'small']),
  variant: PropTypes.oneOf(['accent01', 'black', 'danger', 'warning', 'error']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
