import styled from '@emotion/styled';

import { colors, spacing } from '@app/theme';
import { COLOR_NAME } from '@app/constants';

export const CartItemStyled = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingBottom: spacing.medium,
  marginBottom: spacing.medium,
  borderBottom: '1px solid',
  borderColor: colors[COLOR_NAME.GRAY01],

  '&:last-child': {
    marginBottom: 0,
    borderBottom: 'none',
  },
});

export const CartItemName = styled.div({
  width: '40%',
  minWidth: 250,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const CartItemCount = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 160,
  padding: `0 ${spacing.large}`,
});

export const CartItemCost = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  minWidth: 120,
});

export const CartItemRemove = styled.div({
  marginLeft: 'auto',
});
