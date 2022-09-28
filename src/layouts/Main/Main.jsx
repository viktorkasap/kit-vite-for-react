import PropTypes from 'prop-types';

import { Container } from '@app/layouts';

import { MainStyled } from './styled';

export const Main = ({ children }) => {
  return (
    <MainStyled>
      <Container>{children}</Container>
    </MainStyled>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};
