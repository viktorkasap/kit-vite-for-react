import PropTypes from 'prop-types';

import { COLOR_NAME } from '@app/constants';

import { CheckStyled } from './styled';

export const Check = ({ color = COLOR_NAME.SUCCESS_COLOR_NAME }) => {
  return (
    <CheckStyled color={color}>
      <span className="material-icons" style={{ fontSize: 32 }}>
        check_circle
      </span>
    </CheckStyled>
  );
};

Check.propTypes = {
  color: PropTypes.string,
};
