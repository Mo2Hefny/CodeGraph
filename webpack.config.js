const path = require("path");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/assets/js"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};