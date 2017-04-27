'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.starWars = exports.hatch = exports.entrance = exports.expandUp = exports.pulse = exports.hinge = exports.zoom = exports.swing = exports.rubber = exports.rollIn = exports.rollOut = exports.flash = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  25% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  75% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  25% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  75% {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    opacity: 0;\n  }\n\n  to {\n    -ms-transform: none;\n    transform: none;\n    opacity: 1;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    opacity: 0;\n  }\n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    opacity: 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n'], ['\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n    transform: scale3d(.4, .4, .4);\n  }\n\n  to {\n    opacity: 1;\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale3d(.4, .4, .4);\n  }\n\n  to {\n    opacity: 1;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  from {\n    -ms-transform-origin: top-left;\n    transform-origin: top-left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  20%, 40% {\n    -ms-transform-origin: top-left;\n    transform-origin: top-left;\n    -ms-transform: rotate(0, 0, 1, 80deg);\n    transform: rotate(0, 0, 1, 80deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  60%, 80% {\n    -ms-transform-origin: top-left;\n    transform-origin: top-left;\n    -ms-transform: rotate(0, 0, 1, 20deg);\n    transform: rotate(0, 0, 1, 20deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n'], ['\n  from {\n    -ms-transform-origin: top-left;\n    transform-origin: top-left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  20%, 40% {\n    -ms-transform-origin: top-left;\n    transform-origin: top-left;\n    -ms-transform: rotate(0, 0, 1, 80deg);\n    transform: rotate(0, 0, 1, 80deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  60%, 80% {\n    -ms-transform-origin: top-left;\n    transform-origin: top-left;\n    -ms-transform: rotate(0, 0, 1, 20deg);\n    transform: rotate(0, 0, 1, 20deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.4, 1.4, 1.4);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n'], ['\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.4, 1.4, 1.4);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  0% {\n    transform: translateY(100%) scale(0.6) scaleY(0.5);\n  }\n\n  60%{\n    transform: translateY(-7%) scaleY(1.12);\n  }\n\n  75%{\n    transform: translateY(3%);\n  }\n\n  100% {\n    transform: translateY(0%) scale(1) scaleY(1);\n  }\n'], ['\n  0% {\n    transform: translateY(100%) scale(0.6) scaleY(0.5);\n  }\n\n  60%{\n    transform: translateY(-7%) scaleY(1.12);\n  }\n\n  75%{\n    transform: translateY(3%);\n  }\n\n  100% {\n    transform: translateY(0%) scale(1) scaleY(1);\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  0% {\n    transform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);\n    opacity: 0.1;\n  }\n\n  30% {\n    transform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);\n    opacity: 1;\n  }\n\n  45% {\n    transform: scale(0.98);\n    opacity: 1;\n  }\n\n  60% {\n    transform: scale(1.01);\n    opacity: 1;\n  }\n\n  75% {\n    transform: scale(0.99);\n    opacity: 1;\n  }\n\n  90% {\n    transform: scale(1.01);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n'], ['\n  0% {\n    transform: scale(0.3) rotate(6deg) translateX(-30%) translateY(30%);\n    opacity: 0.1;\n  }\n\n  30% {\n    transform: scale(1.03) rotate(-2deg) translateX(2%) translateY(-2%);\n    opacity: 1;\n  }\n\n  45% {\n    transform: scale(0.98);\n    opacity: 1;\n  }\n\n  60% {\n    transform: scale(1.01);\n    opacity: 1;\n  }\n\n  75% {\n    transform: scale(0.99);\n    opacity: 1;\n  }\n\n  90% {\n    transform: scale(1.01);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  0% {\n    transform: scaleY(0.6);\n  }\n\n  20% {\n    transform: rotate(-2deg) scaleY(1.05);\n  }\n\n  35% {\n    transform: rotate(2deg) scaleY(1);\n  }\n\n  50% {\n    transform: rotate(-2deg);\n  }\n\n  65% {\n    transform: rotate(1deg);\n  }\n\n  80% {\n    transform: rotate(-1deg);\n  }\n\n  100% {\n    transform: none;\n  }\n'], ['\n  0% {\n    transform: scaleY(0.6);\n  }\n\n  20% {\n    transform: rotate(-2deg) scaleY(1.05);\n  }\n\n  35% {\n    transform: rotate(2deg) scaleY(1);\n  }\n\n  50% {\n    transform: rotate(-2deg);\n  }\n\n  65% {\n    transform: rotate(1deg);\n  }\n\n  80% {\n    transform: rotate(-1deg);\n  }\n\n  100% {\n    transform: none;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    transform: scale(1.5) translateY(-0.75em);\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateZ(-1000em);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    transform: scale(1.5) translateY(-0.75em);\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateZ(-1000em);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flash = (0, _styledComponents.keyframes)(_templateObject);

var rollIn = (0, _styledComponents.keyframes)(_templateObject2);

var rollOut = (0, _styledComponents.keyframes)(_templateObject3);

var rubber = (0, _styledComponents.keyframes)(_templateObject4);

var swing = (0, _styledComponents.keyframes)(_templateObject5);

var zoom = (0, _styledComponents.keyframes)(_templateObject6);

var hinge = (0, _styledComponents.keyframes)(_templateObject7);

var pulse = (0, _styledComponents.keyframes)(_templateObject8);

var expandUp = (0, _styledComponents.keyframes)(_templateObject9);

var entrance = (0, _styledComponents.keyframes)(_templateObject10);

var hatch = (0, _styledComponents.keyframes)(_templateObject11);

var starWars = (0, _styledComponents.keyframes)(_templateObject12);

exports.flash = flash;
exports.rollOut = rollOut;
exports.rollIn = rollIn;
exports.rubber = rubber;
exports.swing = swing;
exports.zoom = zoom;
exports.hinge = hinge;
exports.pulse = pulse;
exports.expandUp = expandUp;
exports.entrance = entrance;
exports.hatch = hatch;
exports.starWars = starWars;