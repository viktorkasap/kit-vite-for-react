import styled from '@emotion/styled';

import { fontSizes, fontVariants, colors } from '@app/theme';

const textStyles = (size, variant, color) => {
  return {
    fontSize: fontSizes[size],
    fontWeight: fontVariants[variant],
    color: color === 'inherit' ? 'inherit' : colors[color],
  };
};

export const PStyled = styled.p(({ size, variant, color }) => ({
  ...textStyles(size, variant, color),
}));

export const SpanStyled = styled.span(({ size, variant, color }) => ({
  ...textStyles(size, variant, color),
}));

export const DivStyled = styled.div(({ size, variant, color }) => ({
  ...textStyles(size, variant, color),
}));
