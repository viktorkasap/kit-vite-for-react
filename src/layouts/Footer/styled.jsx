import styled from '@emotion/styled';

import { spacing, colors } from '@app/theme';

export const FooterStyled = styled.footer({
  height: 70,
  padding: `${spacing.medium} 0`,
  backgroundColor: colors.accent02,
  color: colors.white,
});

export const FooterContainer = styled.footer({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
