var gulp = require ('gulp');

var sass = require ('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
});