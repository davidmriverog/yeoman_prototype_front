const gulp = require('gulp');

const gulpNgConfig = require('gulp-ng-config');
const expect = require('gulp-expect-file');
const rename = require("gulp-rename");
const fileExists = require('file-exists');

const conf = require('../conf/gulp.conf');

gulp.task('environment', environments);
gulp.task('configenv',configenv);

function environments(done) {

  if(!fileExists.sync(conf.path.const('environment.json'))){

    const create = gulp.src(conf.path.const('envexample.json'))
    .pipe(rename('environment.json'))
    .pipe(gulp.dest(conf.path.const()));

    return create;
  }else{
    console.log('environment is created!');
    done();
  }
}

function configenv(){
  const config = gulp.src(conf.path.const('environment.json'))
    .pipe(gulpNgConfig('app', {environment:'env.build', pretty:true}))
    .pipe(gulp.dest(conf.path.src('app/constants')));

  console.log('config success environment!');
  return config;
}
