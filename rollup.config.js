import { resolve } from 'path';

export default {
  input: [resolve(__dirname, 'index.html')],

  output: {
    entryFileNames: 'js/[name].js',
    chunkFileNames: 'js/[name]-[hash].js',
    assetFileNames: ({ name }) => {
      const extType = name.split('.').at(1);

      if (/\.css$/i.test(name ?? '')) {
        return 'css/[name].css';
      }

      if (/\.(png|jpe?g|gif|webp)$/i.test(name ?? '')) {
        return 'img/[name][extname]';
      }

      if (/\.(svg)$/i.test(name ?? '')) {
        return 'svg/[name].svg';
      }

      if (/\.(woff(2)?|ttf|eot)$/i.test(name ?? '')) {
        return 'fonts/[name][extname]';
      }

      return `${extType}/[name][extname]`;
    },
  },
};
