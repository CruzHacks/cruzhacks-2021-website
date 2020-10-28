/* eslint-disable @typescript-eslint/no-var-requires */
import webpack from "webpack";
require("dotenv").config();

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_SUBSCRIBE_ENDPOINT: JSON.stringify(
          process.env.REACT_APP_SUBSCRIBE_ENDPOINT
        ),
      },
    }),
  ],
};
