import pkg from 'gulp';
const { dest, src, watch, parallel } = pkg;
//css
import dartSass from 'sass';
const sass = gulpSass(dartSass);
import gulpSass from 'gulp-sass';
//Tools
import plumber from 'gulp-plumber';
//Img
import webp from 'gulp-webp';
import avif from 'gulp-avif';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';

function compileScss(done) {
  src('src/scss/**/*.scss') //Identificar el scss
    .pipe(plumber()) //No detiene el WorkFlow en caso de errores
    .pipe(sass()) //Compilarlo
    .pipe(dest('build/css')); //ALmacenarlo a css

  done(); //CallBack indica fin de la tarea
}

function imageMin(done) {
  const options = {
    optimizationLevel: 3,
  };
  src('src/img/**/*.{png,jpg}')
    .pipe(cache(imagemin(options)))
    .pipe(dest('build/img'));
  done();
}

function convertWebp(done) {
  const options = {
    quality: 50,
  };
  src('src/img/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('build/img'));
  done();
}

function convertAvif(done) {
  const options = {
    quality: 50,
  };
  src('src/img/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('build/img'));
  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', compileScss);
  done();
}

function build(done) {
  // Ejecuta convertWebp y dev en paralelo
  return parallel(imageMin, convertWebp, convertAvif, dev)(done);
}

export { compileScss, convertWebp, dev, build };
