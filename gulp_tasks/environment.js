const gulp = require('gulp');

const gulpNgConfig = require('gulp-ng-config');
const expect = require('gulp-expect-file');
const es = require("event-stream");
const rename = require("gulp-rename");
const fileExists = require('file-exists');

const conf = require('../conf/gulp.conf');

gulp.task('environment', environments);

function environments() {

  if(fileExists.sync(conf.path.const('environment.json'))){
    const config = gulp.src(conf.path.const('environment.json'))
    .pipe(gulpNgConfig('app.const', {environment:'env.build', pretty:true}))
    .pipe(gulp.dest(conf.path.const()));

    return config;
  }else{
    const create = gulp.src(conf.path.const('envexample.json'))
    .pipe(rename('environment.json'))
    .pipe(gulp.dest(conf.path.const()));

    return es.merge(create).pipe(config);
  }
}
