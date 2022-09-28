import styled from '@emotion/styled';

import { spacing } from '@app/theme';

export const ProductsStyled = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: spacing.medium,
  margin: '0 auto',
  padding: `${spacing.medium} 0`,
});
