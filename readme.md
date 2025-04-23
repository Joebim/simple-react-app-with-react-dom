# 📘 Simple React App with ReactDOM, Webpack & Babel

A minimal React setup using **ReactDOM**, **Webpack**, and **Babel**—no CRA or Vite involved.

---

## 🗂️ Folder Structure
```
react-dom-example/
├── dist/
│   └── index.html
├── src/
│   └── index.js
├── .babelrc
├── .gitignore
├── index.html
├── package.json
└── webpack.config.js
```

---

## ⚙️ Setup

### 1. 📦 Install Packages
```bash
npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
```

### 2. 🛠️ Babel Config (`.babelrc`)
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 3. ⚙️ Webpack Config (`webpack.config.js`)
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
  },
};
```

### 4. 🧾 `.gitignore`
```
/node_modules
/dist
.DS_Store
.env
```

---

## 🚀 Initialization & Run

### 1. Create Entry File (`src/index.js`)
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <h1>Hello React + Webpack + Babel!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### 2. Create HTML Template (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Webpack Babel</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3. Add Scripts to `package.json`
```json
"scripts": {
  "start": "webpack serve --open",
  "build": "webpack"
}
```

### 4. 🏃 Run Your App
```bash
npm start
```

This launches your app at `http://localhost:3000` with hot-reloading.

---

Feel free to expand this setup by adding SASS, images, React Router, or Redux!

