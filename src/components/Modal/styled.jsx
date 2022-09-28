import styled from '@emotion/styled';

import { colors, spacing } from '@app/theme';
import { COLOR_NAME } from '@app/constants';

export const ModalStyled = styled.div(() => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
}));

export const ModalContainer = styled.div(() => ({
  width: '100%',
  maxWidth: 920,
  height: 'auto',
  maxHeight: 620,
  minHeight: 200,
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 20,
  transform: 'translate(-50%, -50%)',
  backgroundColor: colors[COLOR_NAME.WHITE],
  borderRadius: 10,
  overflow: 'hidden',
}));

export const ModalBody = styled.div(() => ({
  width: '100%',
  height: '100%',
}));

export const ModalClose = styled.div(() => ({
  position: 'absolute',
  right: spacing.medium,
  top: spacing.medium,
}));

export const ModalBackground = styled.div(() => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  background: colors[COLOR_NAME.GRAY03],
  zIndex: 10,
  cursor: 'pointer',
}));
