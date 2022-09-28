import PropTypes from 'prop-types';

import { Container } from '@app/layouts';

import { FooterContainer, FooterStyled } from './styled';

export const Footer = ({ children }) => {
  return (
    <FooterStyled>
      <Container>
        <FooterContainer>{children}</FooterContainer>
      </Container>
    </FooterStyled>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};
