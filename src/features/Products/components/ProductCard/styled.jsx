import styled from '@emotion/styled';

import { COLOR_NAME } from '@app/constants';
import { colors, spacing } from '@app/theme';

export const ProductCardContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: 460,
  border: '1px solid',
  borderColor: colors[COLOR_NAME.GRAY02],
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
});

export const ProductCardHeader = styled.div({
  paddingBottom: spacing.small,

  '& *': {
    lineHeight: '1.2',
  },
});

export const ProductCardBody = styled.div({
  flexGrow: 1,
});

export const ProductCardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '40%',
  width: '100%',
  padding: spacing.medium,
  backgroundColor: colors[COLOR_NAME.GRAY01],
});

export const ProductCardFooter = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 45,
});
