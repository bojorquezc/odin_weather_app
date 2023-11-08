# odin_template
Template repo for projects using webpack (HtmlWebpackPlugin, Style Loader, CSS Loader, Image Asset Module) ESlint, gitignore (for node_modules).
The idea for this template is to have a straightforward installation process guide and a template created for future projects.

## Starting Webpack Installation
Follow these steps in the root folder of your project:
1. Create package.json file
`npm init -y`
1. Install webpack locally and install webpack-cli
`npm install webpack webpack-cli --save-dev`
1. Create webpack config file in root project folder
`webpack.config.js`
1. Add initial webpack.config.js configuration:
    ``` javascript
    const path = require('path');
    
    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    };
    ```
1. Create `src` folder in root project folder with `src/index.js file` and `src/index.html` since we will be using HtmlWebpackPlugin
2. Create `dist` empty folder in root project folder
3. Add `mode: 'development'` to `webpack.config.js` inside of `module.exports` also add `clean: true,` inside of `output` so only used files are generated with each build
    ``` javascript
    const path = require('path');
    module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
    };
    ```

## Webpack Plugins

### HtmlWebpackPlugin
1. Install HtmlWebpackPlugin
    `npm install --save-dev html-webpack-plugin`
1. Update webpack.config.js configuration, adding `const HtmlWebpackPlugin = require('html-webpack-plugin');` and `plugins: [ new HtmlWebpackPlugin({ title: 'Output Management', template: './src/index.html' }),],`
    ``` javascript
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
        mode: 'development',
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management',
                template: './src/index.html'
            }),
        ],
    };
     ```

## Webpack Modules

### Style Loader and CSS Loader
1. Install Style Loader and CSS Loader
`npm install --save-dev style-loader css-loader`
1. `import 'src/style.css';` in the file `src/index.js`
1. Update webpack.config.js configuration, adding `module: { rules:[{ test: /\.css$/i, use: ['style-loader', 'css-loader'], }, ], },`
    ``` javascript
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
        mode: 'development',
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management',
                template: './src/index.html'
            }),
        ],
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
    };
    ```

### Image Asset Module
1. Update webpack.config.js `module` object in configuration, adding `{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', },`
    ``` javascript
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
        mode: 'development',
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management',
                template: './src/index.html'
            }),
        ],
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            ],
          },
    };
    ```

## Webpack NPM Scripts (Build and Dev)
1. Add `"build": "webpack"` to `"scripts"` object in `package.json` to be able to run `npm run build` to start the compilation process
1. Install Webpack dev server
    `npm install --save-dev webpack-dev-server`
1. Add `"dev": "webpack-dev-server --open"` to `"scripts"` object in `package.json` to be able to run `npm run dev` to open local server for live preview 
1. Update webpack.config.js with `devServer: { static: './dist', },` in configuration:
    ``` javascript
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
        mode: 'development',
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        devServer: {
            static: './dist',
          },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Output Management',
                template: './src/index.html'
            }),
        ],
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
            ],
          },
    };
    ```
    
## ESLint
1. Install ESLint
`npm install eslint --save-dev`
1. Initialize ESLint configuration process
`./node_modules/.bin/eslint --init`
1. When running the configuration, use your prefered settings, I personally use the following currently:
    1. "How would you like to use ESLint?"
        1. To check syntax, find problems, and enforce code style
    2. "What type of modules does your project use?"
        1. JavaScript modules (import/export)
    3. Which framework does your project use?
        1. None of these
    4. Does your project use TypeScript?
        1. No
    5. Where does your code run?
        1. Browser
    6. How would you like to define a style for your project?
        1. Use a popular style guide -> Airbnb
    7. What format do youwant your config file to be in?
        1. JSON
    8. Install the dependencies of the style guide you chose, use npm to install when asked

    
## Gitignore file
In the root folder of your project, create a `.gitignore` file. Add `node_modules` in the first line of the `.gitignore` file, this will exclude the `node_modules` folder from being pushed to your repo.

## Final Comments
1. When you start working with this setup, work with the `src` files `index.html` `index.js` `style.css` change the name as needed, just make sure to change in any config files like `webpack.config.js`
2. To test progress use `npm run dev` this will open a live preview of the site, it will update as you work on changes
3. To compile use `npm run build` this will pack your project