import PropTypes from 'prop-types';

import { ContainerStyled } from './styled';

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.node,
};
