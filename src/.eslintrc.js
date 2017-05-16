const os = require('os');

switch(os.type()){
  case 'Windows_NT':
  
    module.exports = {
        extends: [
          'angular'
        ],
        rules: {
          'angular/no-service-method': 0,
          'linebreak-style': ['error','windows']
        }
        
    }

    break;
}

