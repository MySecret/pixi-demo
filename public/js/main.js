var PIXI = require('pixi.js');
var type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    PIXI.utils.sayHello(type)