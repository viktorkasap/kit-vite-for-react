import styled from '@emotion/styled';

import { colors } from '@app/theme';

export const CheckStyled = styled.span(({ color }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  position: 'absolute',
  top: 0,
  right: 0,
  color: colors[color],
}));
