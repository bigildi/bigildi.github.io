const
    gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    postcss 		= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    imagemin        = require('gulp-imagemin');

gulp.task('scss', () => gulp.src('./src/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' })
        .on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({
        browsers: ['> 5%', 'IE 11']
    })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/')));

gulp.task('images', () => gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/')));

gulp.task('watch', ['default'], () => {
    gulp.watch('./src/scss/**/*', ['scss']);
    gulp.watch('./src/images/**/*', ['images']);
});

gulp.task('default', [
    'scss',
    'images'
]);