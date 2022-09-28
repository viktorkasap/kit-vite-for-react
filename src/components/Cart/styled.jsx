import styled from '@emotion/styled';

import { colors } from '@app/theme';
import { COLOR_NAME } from '@app/constants';

export const CartStyled = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 60,
  height: 60,
  borderRadius: 4,
  background: colors[COLOR_NAME.WARNING02],
  color: colors.black,
  position: 'fixed',
  right: 30,
  top: 30,
  cursor: 'pointer',
  transition: 'background .2s ease',
  border: 'none',

  '&:hover': {
    background: colors[COLOR_NAME.WARNING01],
  },
});

export const CartCounterStyled = styled.span({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  borderRadius: 50,
  background: colors[COLOR_NAME.ERROR],
  color: colors[COLOR_NAME.WHITE],
  position: 'absolute',
  left: -10,
  top: -10,
  cursor: 'pointer',
});
