import Loader from 'react-loaders';

import { PreloaderWrapper } from './styled';

export const Preloader = () => {
  return (
    <PreloaderWrapper>
      <Loader type="ball-pulse" active />
    </PreloaderWrapper>
  );
};
