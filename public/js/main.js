var PIXI = require('pixi.js');
console.log(456);
console.log(PIXI); 
var type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    PIXI.utils.sayHello(type)