import PropTypes from 'prop-types';

import { H1Styled, H2Styled, H3Styled, H4Styled } from './styled';

export const Title = ({ type = 'h1', size = 'h1', variant = 'normal', color = 'inherit', children }) => {
  const titleVariant = {
    h1: H1Styled,
    h2: H2Styled,
    h3: H3Styled,
    h4: H4Styled,
  };

  const TitleComponent = titleVariant[type];

  return (
    <TitleComponent size={size} variant={variant} color={color}>
      {children}
    </TitleComponent>
  );
};

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  variant: PropTypes.oneOf(['thin', 'normal', 'semiBold', 'bold']),
  color: PropTypes.oneOf(['accent01', 'success', 'warning', 'danger', 'error', 'black', 'white']),
  children: PropTypes.node.isRequired,
};
