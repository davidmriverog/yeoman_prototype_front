const gulp = require('gulp');

const gulpNgConfig = require('gulp-ng-config');
const expect = require('gulp-expect-file');


gulp.task('environments', environments);

function environments() {
  return gulp.src('environment.json')
    .pipe(gulpNgConfig('app', {environment:'env.build', pretty:true}))
    .pipe(gulp.dest('src/app/constants/'));
}
