const gulp = require('gulp');
const del = require('del');

const BUILD_DIR = './dist';

gulp.task('clean', () => {
    return del([BUILD_DIR]);
});
