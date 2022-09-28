import styled from '@emotion/styled';

import { colors } from '@app/theme';
import { COLOR_NAME } from '@app/constants';

export const PreloaderWrapper = styled.div({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,

  '.ball-pulse > div': {
    backgroundColor: colors[COLOR_NAME.ACCENT01],
  },
});
