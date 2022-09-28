import styled from '@emotion/styled';

import { colors, spacing, shadows } from '@app/theme';
import { COLOR_NAME } from '@app/constants';

const colorsList = ['accent01', 'accent02', 'error', 'black', 'danger'];

const colorText = (variant) => {
  switch (true) {
    case colorsList.includes(variant):
      return colors[COLOR_NAME.WHITE];
    default:
      return colors[COLOR_NAME.BLACK];
  }
};

const sizeButton = (size) => {
  switch (size) {
    case 'full':
      return {
        width: '100%',
        padding: `${spacing.small} ${spacing.medium}`,
      };

    case 'small':
      return {
        width: '30px',
        height: '30px',
      };

    default:
      return {
        width: 'auto',
        padding: `${spacing.small} ${spacing.medium}`,
      };
  }
};

export const ButtonStyled = styled.button(({ size, variant }) => ({
  ...sizeButton(size),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
  borderRadius: '4px',
  border: 'none',
  backgroundColor: colors[variant],
  color: colorText(variant),
  boxShadow: shadows.regular,
  transition: 'box-shadow .2s ease',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: shadows.hover,
  },

  '&:active': {
    boxShadow: shadows.press,
  },
}));
