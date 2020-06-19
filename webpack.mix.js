const mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets/js')
   .sass('src/css/app.scss', 'assets/css')
   .setPublicPath('assets');