import styled from '@emotion/styled';

import { fontSizes, fontVariants, colors } from '@app/theme';

const textStyles = (size, variant, color) => {
  return {
    fontSize: fontSizes[size],
    fontWeight: fontVariants[variant],
    color: color === 'inherit' ? 'inherit' : colors[color],
  };
};

export const H1Styled = styled.h1(({ size, variant, color }) => ({
  lineHeight: 1,
  ...textStyles(size, variant, color),
}));

export const H2Styled = styled.h2(({ size, variant, color }) => ({
  lineHeight: 1.2,
  ...textStyles(size, variant, color),
}));

export const H3Styled = styled.h3(({ size, variant, color }) => ({
  lineHeight: 1.2,
  ...textStyles(size, variant, color),
}));

export const H4Styled = styled.h4(({ size, variant, color }) => ({
  lineHeight: 1.2,
  ...textStyles(size, variant, color),
}));
