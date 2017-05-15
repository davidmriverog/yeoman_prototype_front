
const env = require('../conf/env.conf');

const os = require('os');

module.exports = {
  extends: [
    'angular'
  ],
  rules: {
    'angular/no-service-method': 0,
    'linebreak-style': function(){
      swith(os.type()){
        case 'Windows_NT':
          return ['error','windows'];
          break;
      }
    }
  },
  
}
