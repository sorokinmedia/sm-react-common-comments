'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@keyframes OpeningSequence {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes  OpeningSequence {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.modal-backdrop-open, .modal-dialog-open {\n    animation: OpeningSequence 0.2s linear forwards;\n    -webkit-animation: OpeningSequence 0.2s linear forwards;\n}\n\n\n";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Modal = function (_React$Component) {
	inherits(Modal, _React$Component);

	function Modal() {
		var _ref;

		var _temp, _this, _ret;

		classCallCheck(this, Modal);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleAreaClick = function (ev) {
			if (ev.target.classList.contains('modal-backdrop')) _this.props.onRequestHide();
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	createClass(Modal, [{
		key: 'render',
		value: function render() {
			if (this.props.isOpen) {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{
							className: 'modal-backdrop modal-backdrop-open',
							onClick: this.handleAreaClick,
							style: { backgroundColor: '#00000094', overflowY: 'auto' },
							name: 'modal-backdrop'
						},
						React.createElement(
							'div',
							{ className: 'modal-dialog modal-dialog-open', style: { zIndex: '900' } },
							React.createElement(
								'div',
								{ className: 'modal-content' },
								this.props.children
							)
						)
					)
				);
			}
			return null;
		}
	}]);
	return Modal;
}(React.Component);


Modal.propTypes = {
	isOpen: propTypes.bool.isRequired,
	onRequestHide: propTypes.func.isRequired,
	children: propTypes.node
};

function ModalBody(props) {
	return React.createElement(
		'div',
		{ className: 'modal-body' },
		props.children
	);
}

ModalBody.propTypes = {
	children: propTypes.node
};

function ModalClose(props) {
	return React.createElement(
		'button',
		{ type: 'button', className: 'close', onClick: props.onClick },
		React.createElement(
			'span',
			null,
			'\xD7'
		)
	);
}

ModalClose.propTypes = {
	children: propTypes.node,
	onClick: propTypes.func
};

function ModalFooter(props) {
	return React.createElement(
		'div',
		{ className: 'modal-footer' },
		props.children
	);
}

ModalFooter.propTypes = {
	children: propTypes.node
};

function ModalHeader(props) {
	return React.createElement(
		'div',
		{ className: 'modal-header' },
		props.children
	);
}

ModalHeader.propTypes = {
	children: propTypes.node
};

function ModalTitle(props) {
	return React.createElement(
		'h4',
		{ className: 'modal-title' },
		props.children
	);
}

ModalTitle.propTypes = {
	children: propTypes.node
};

function ModalForm(props) {
	return React.createElement(
		Modal,
		{
			isOpen: props.modalIsOpen,
			onRequestHide: props.closeModal,
			size: props.size
		},
		React.createElement(
			ModalHeader,
			null,
			React.createElement(ModalClose, { onClick: props.closeModal }),
			React.createElement(
				ModalTitle,
				null,
				props.title
			)
		),
		React.createElement(
			ModalBody,
			null,
			props.children
		)
	);
}

ModalForm.propTypes = {
	closeModal: propTypes.func.isRequired,
	modalIsOpen: propTypes.bool.isRequired,
	title: propTypes.string.isRequired,
	size: propTypes.string,
	children: propTypes.node
};

ModalForm.defaultProps = {
	size: ''
};

exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalClose = ModalClose;
exports.ModalFooter = ModalFooter;
exports.ModalForm = ModalForm;
exports.ModalHeader = ModalHeader;
exports.ModalTitle = ModalTitle;
