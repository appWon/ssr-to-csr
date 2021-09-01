import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  mode: 'development',
  entry: path.resolve(__dirname, '../client/index.tsx'),
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '../build/client'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // alias: {
    //   '@pages': path.resolve(__dirname, '../client/src/pages'),
    //   '@hooks': path.resolve(__dirname, '../client/src/hooks'),
    //   '@components': path.resolve(__dirname, '../client/src/components'),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'page.html',
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
  ],
};
