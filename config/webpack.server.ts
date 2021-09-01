import path from 'path';
import webpackNodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../server/index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
