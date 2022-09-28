import PropTypes from 'prop-types';

import { PosterStyled } from './styled';

export const Poster = ({ src, alt }) => {
  return <PosterStyled src={src} alt={alt} />;
};

Poster.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
