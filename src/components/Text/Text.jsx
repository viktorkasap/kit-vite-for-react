import PropTypes from 'prop-types';

import { SpanStyled, PStyled, DivStyled } from './styled';

export const Text = ({ type = 'div', size = 'medium', variant = 'normal', color = 'inherit', children }) => {
  const textVariant = {
    p: PStyled,
    div: DivStyled,
    span: SpanStyled,
  };

  const TextComponent = textVariant[type];

  return (
    <TextComponent size={size} variant={variant} color={color}>
      {children}
    </TextComponent>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf(['p', 'div', 'span']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  variant: PropTypes.oneOf(['thin', 'normal', 'semiBold', 'bold']),
  color: PropTypes.oneOf(['accent01', 'success', 'warning', 'danger', 'error', 'black', 'white']),
  children: PropTypes.node.isRequired,
};
