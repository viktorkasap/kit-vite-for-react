import styled from '@emotion/styled';

import { colors, spacing } from '@app/theme';
import { COLOR_NAME } from '@app/constants';

export const CartModalContainer = styled.div();

export const CartModalHeader = styled.div({
  marginBottom: spacing.medium,
  padding: spacing.medium,
  backgroundColor: colors[COLOR_NAME.WARNING02],
  color: colors[COLOR_NAME.BLACK],
});

export const CartModalFooter = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: spacing.medium,
  backgroundColor: colors[COLOR_NAME.BLACK],
  color: colors[COLOR_NAME.WHITE],
});

export const CartModalBody = styled.div({
  padding: spacing.medium,
});
