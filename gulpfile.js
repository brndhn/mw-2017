var gulp = require ('gulp');
var sass = require ('gulp-sass');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(plumber())
        .pipe(sass()
                    .on("error", notify.onError({
                        title: "Sass Error",
                        message: "Error: <%= error.message %>"
                    }))
                )
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// BrowserSync server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
    gulp.watch('*html').on('change',browserSync.reload);
});
