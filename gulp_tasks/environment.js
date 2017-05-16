const gulp = require('gulp');
const gulpNgConfig = require('gulp-ng-config');

const conf = require('../conf/gulp.conf');

gulp.task('environment', environments);

function environments() {
  return gulp.src(conf.path.const('environment.json'))
    .pipe(gulpNgConfig('app', {environment:'env.build', pretty:true}))
    .pipe(gulp.dest(conf.path.src('app/constants')));
}
