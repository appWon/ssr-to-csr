import path from 'path';

export default {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../server/app.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  output: {
    filename: 'bundle.js',
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
};
