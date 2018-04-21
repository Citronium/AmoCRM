'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EntityResponseErrorHandler = require('../../base/errorHandlers/EntityResponseErrorHandler');

var _EntityResponseErrorHandler2 = _interopRequireDefault(_EntityResponseErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PipelineResponseErrorHandler = function (_EntityResponseErrorH) {
  _inherits(PipelineResponseErrorHandler, _EntityResponseErrorH);

  function PipelineResponseErrorHandler() {
    _classCallCheck(this, PipelineResponseErrorHandler);

    return _possibleConstructorReturn(this, (PipelineResponseErrorHandler.__proto__ || Object.getPrototypeOf(PipelineResponseErrorHandler)).apply(this, arguments));
  }

  _createClass(PipelineResponseErrorHandler, [{
    key: 'getErrorsData',
    value: function getErrorsData() {
      var modifyResponse = this._response.response && this._response.response.pipelines;

      if (!modifyResponse) {
        return _get(PipelineResponseErrorHandler.prototype.__proto__ || Object.getPrototypeOf(PipelineResponseErrorHandler.prototype), 'getErrorsData', this).call(this);
      }

      if (modifyResponse.add && modifyResponse.add.errors) {
        return modifyResponse.add.errors;
      }
      if (modifyResponse.update && modifyResponse.update.errors) {
        return modifyResponse.update.errors;
      }
      return _get(PipelineResponseErrorHandler.prototype.__proto__ || Object.getPrototypeOf(PipelineResponseErrorHandler.prototype), 'getErrorsData', this).call(this);
    }
  }, {
    key: 'getFirstError',
    value: function getFirstError() {
      var errors = this.getErrorsData();
      if (Array.isArray(errors) && typeof errors[0] === 'string') {
        return new Error(errors[0]);
      }
      return _get(PipelineResponseErrorHandler.prototype.__proto__ || Object.getPrototypeOf(PipelineResponseErrorHandler.prototype), 'getFirstError', this).call(this);
    }
  }]);

  return PipelineResponseErrorHandler;
}(_EntityResponseErrorHandler2.default);

exports.default = PipelineResponseErrorHandler;