import PropTypes from 'prop-types';

import { Container } from '@app/layouts';

import { HeaderStyled } from './styled';

export const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <Container>{children}</Container>
    </HeaderStyled>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
