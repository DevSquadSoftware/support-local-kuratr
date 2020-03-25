# gift-card-kuratr

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app

Build files to dist folder.

    npm run build



## Clear tracing cache

In rare situation, you might need to run clear-cache after upgrading to new version of dumber bundler.

    npm run clear-cache

## index.html

`index.html` is generated from `_index.html` every time `npm run build` runs. It is handled by dumber's `onManifest()` option, check `gulpfile.js` for details.
