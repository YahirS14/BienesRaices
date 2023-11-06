import pkg from 'gulp';
const { dest, src, watch } = pkg;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

function compileScss(done) {
  src('src/scss/**/*.scss') //Identificar el scss
    .pipe(sass()) //Compilarlo
    .pipe(dest('build/css')); //ALmacenarlo a css

  done(); //CallBack indica fin de la tarea
}

function dev(done) {
  watch('src/scss/**/*.scss', compileScss);
  done();
}

export { compileScss, dev };
