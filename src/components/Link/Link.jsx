import PropTypes from 'prop-types';

import { LinkStyled } from './styled';

export const Link = ({ href = '#', target = '_blank', children }) => {
  return (
    <LinkStyled href={href} target={target} rel="noreferrer">
      {children}
    </LinkStyled>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};
