# Webpack DLL Plugin Configuration

A boilerplate implementing [DLL plugin](https://webpack.js.org/plugins/dll-plugin/)

As a sample, I have configured `react, react-dom` and `redux` as vendor libraries. To run the project, do the following

```
git clone https://github.com/jazzominy/webpack-dll.git
npm i
npm run build:dll
npm start
```

If all goes well, you can load `localhost:8080` to see the home page

The `npm run build:dll` command should generate `dll` folder with `vendor-manifest.json` and `vendor.dll.js` files
