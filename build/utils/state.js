'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var derive=function(a,b){var c=a.duration,d=a.timingFunction,e=a.delay,f=a.direction,g=a.iterations,h=a.fillMode,i=a.playState,j=a.forceInterpolate;return j?b+' '+c+' steps('+j.steps+', '+j.direction+') '+e+' '+g+' '+h+' '+i:b+' '+c+' '+d+' '+e+' '+g+' '+f+' '+h+' '+i},returnAnimation=function(a){return(a.name||'')+' '+(a.duration||'2s')+' '+(a.timingFunction||'ease-in')};exports.derive=derive,exports.returnAnimation=returnAnimation;