import 'normalize.css';

// GLOBAL
import { injectGlobal } from '@emotion/css';

// FONTS
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

// ICONS
import '@fontsource/material-icons';

// PRELOADER
import 'loaders.css/src/animations/ball-pulse.scss';

// TOASTIFY
import 'react-toastify/dist/ReactToastify.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    height: 100%;
    line-height: 1.5;
    color: #333333;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button,
  select {
    text-transform: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
