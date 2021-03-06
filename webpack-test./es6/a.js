"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fn = function fn() {
	console.log("这是es6文件a");
};
fn();

var Student = function () {
	function Student() {
		_classCallCheck(this, Student);
	}

	_createClass(Student, [{
		key: "hello",
		value: function hello() {
			console.log("hello");
		}
	}]);

	return Student;
}();

var s = new Student();
s.hello();

var Eva = function (_Student) {
	_inherits(Eva, _Student);

	function Eva() {
		_classCallCheck(this, Eva);

		return _possibleConstructorReturn(this, (Eva.__proto__ || Object.getPrototypeOf(Eva)).apply(this, arguments));
	}

	_createClass(Eva, [{
		key: "grade",
		value: function grade() {
			console.log("grade");
		}
	}]);

	return Eva;
}(Student);

var e = new Eva();
e.hello();
e.grade();
