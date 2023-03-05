"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//class -es5
//var Person = function(){
//}
var Person = /*#__PURE__*/function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Guest';
    var year = arguments.length > 1 ? arguments[1] : undefined;
    _classCallCheck(this, Person);
    this.name = name;
    this.year = year;
    console.log('constructer çalıştı.');
  }
  _createClass(Person, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.year;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", My name is ").concat(this.name, " ");
    }
  }]);
  return Person;
}(); //nesne - object
var p = new Person("Ömer", 1998);
var p2 = new Person();
console.log(p.greeting('Hello'));
console.log(p2.greeting('Good Morning'));
console.log(p.calculateAge());
console.log(p2.calculateAge());
console.log(p);
