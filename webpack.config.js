const path = require("path");

module.exports = {
  entry: {
    main: "./src/js/script.js", 
    pathfinding: "./src/js/algorithms/pathfinding.js"
  },
  output: {
    filename: "[name].bundle.js",
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