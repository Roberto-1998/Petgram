const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.webp'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
          handler: 'CacheFirst',
          options: { cacheName: 'images' },
        },

        {
          urlPattern: /https:\/\/petgram-server-roberto-1998.vercel.app/,
          handler: 'NetworkFirst',
          options: { cacheName: 'api' },
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
