import {src, dest, watch, series} from 'gulp'
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export function css(done) {
    src('src/scss/app.scss', {sourcemaps:true}) //Utilizamos la funcion src que importamos arriba y 
    //le pasamos la ruta de donde se encuentra nuestro archivo scss incluido el archivo que queremos compilar
        .pipe(sass({
            outputStyle: 'compressed' //le pasamos la opcion outputStyle: 'compressed' para que el archivo css se comprima
        }).on('error', sass.logError)) //llamamos a la funcion sass
        .pipe(dest('build/css', {sourcemaps: true})); //por ultimo llamamos a la funcion dest y le pasamos la ruta donde queremos guardar el archivo css
        //Lo anterior es lo mismo que "sass": "sass --watch src/scss:build/css", en el package.json
    done();
}

import terser from 'gulp-terser'; //Importamos la libreria gulp-terser para minificar el archivo js
export function js(done) {
    src('src/js/app.js', {sourcemaps:true})
        .pipe(terser()) //Llamamos a la funcion terser para minificar el archivo js
        .pipe(dest('build/js', {sourcemaps: true}));
    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css); 
    //Con la funcion watch le decimos a gulp que archivo debe ejecutar y que funcion queremos que se ejecute (la funcion css en este caso)
    //El watch ejecuta automaticamente cuando hacemos cambios en el archivo scss.
    watch('src/js/**/*.js', js); //Tambien debemos crear un watch para js para que se ejecuten los cambios en el momento
}

export default series(css, js, dev); //Con la funcion default le decimos a gulp que funciones queremos que se ejecuten por defecto