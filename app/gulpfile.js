var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var scss = require('gulp-sass');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');

gulp.task('clean', function(done){
    return del(['./build/'], done);
});

gulp.task('browserify', function(){
    var b = browserify();
    b.transform(reactify);
    b.add('./src/js/main.js');
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function(){ // , ['clean']
    browserify('./src/js/main.js')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('scss', function(){ // , ['clean']
    return gulp.src('./src/styles/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./build/'));
});

gulp.task('templates', function(){ // , ['clean']
    return gulp.src('./src/templates/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function(){
    gulp.watch(['src/js/*.js', 'src/js/*.jsx'], ['scripts']);
    gulp.watch('src/styles/*.scss', ['scss']);
    gulp.watch('src/templates/*.html', ['templates']);
});

gulp.task('server', ['templates', 'scripts'], function(){
    gulp.src('./build')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('build', ['browserify', 'scss', 'templates']);
gulp.task('rebuild', ['clean', 'build']);
gulp.task('default', ['build', 'watch', 'server']);
