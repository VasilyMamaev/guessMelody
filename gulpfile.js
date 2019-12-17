/* eslint-disable no-undef */
const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const mqpacker = require('css-mqpacker');
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const rollup = require('gulp-better-rollup');
const sourcemaps = require('gulp-sourcemaps');
const mocha = require('gulp-mocha');
const commonjs = require('rollup-plugin-commonjs');


gulp.task('style', () => gulp.src('sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
    }),
    mqpacker({ sort: true }),
  ]))
  .pipe(gulp.dest('build/css'))
  .pipe(server.stream())
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('build/css')));

gulp.task('scripts', () => gulp.src('js/**/*.js')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(rollup({}, 'iife'))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('build/js/')));

gulp.task('imagemin', () => gulp.src('build/img/**/*.{jpg,png,gif}')
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.jpegtran({ progressive: true }),
  ]))
  .pipe(gulp.dest('build/img')));


gulp.task('copy-html', () => gulp.src('*.{html,ico}')
  .pipe(gulp.dest('build'))
  .pipe(server.stream()));

gulp.task('copy-img', () => gulp.src([
  'fonts/**/*.{woff,woff2}',
  'img/*.*',
], { base: '.' })
  .pipe(gulp.dest('build/')));

gulp.task('copy', gulp.series('copy-html', 'scripts', 'style', 'copy-img'), () => {

});

gulp.task('clean', () => del('build'));

gulp.task('js-watch', gulp.parallel('scripts'), (done) => {
  server.reload();
  done();
});

gulp.task('assemble', gulp.series('clean', 'copy'), () => {

});

gulp.task('serve', () => {
  server.init({
    server: './build',
    notify: false,
    open: true,
    port: 3508,
    ui: false,
  });

  gulp.watch('sass/**/*.{scss,sass}', gulp.parallel('style'));
  gulp.watch('*.html').on('change', (e) => {
    if (e.type !== 'deleted') {
      gulp.start('copy-html');
    }
  });
  gulp.watch('js/**/*.js', gulp.parallel('js-watch')).on('change', server.reload);
});


gulp.task('start', gulp.series('assemble', 'serve'), () => {

});

gulp.task('test', () => gulp
  .src(['js/**/*.test.js'])
  .pipe(rollup({ plugins: [commonjs()] }, 'cjs'))
  .pipe(gulp.dest('build/test'))
  .pipe(mocha({ reporter: 'spec' })));
