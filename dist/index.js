'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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

var jquery = createCommonjsModule(function (module) {
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	{

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : commonjsGlobal, function( window, noGlobal ) {

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof undefined === "function" && undefined.amd ) {
	undefined( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
});

var ckeditor = createCommonjsModule(function (module, exports) {
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(function(e){e.en=Object.assign(e.en||{},{a:'Cannot upload file:',b:'Block quote',c:'Italic',d:'Bold',e:'Choose heading',f:'Heading',g:'image widget',h:'Enter image caption',i:'Full size image',j:'Side image',k:'Left aligned image',l:'Centered image',m:'Right aligned image',n:'Insert image',o:'Upload failed',p:'Link',q:'Numbered List',r:'Bulleted List',s:'Paragraph',t:'Heading 1',u:'Heading 2',v:'Heading 3',w:'Change image text alternative',x:'Unlink',y:'Edit link',z:'Open link in new tab',aa:'This link has no URL',ab:'Save',ac:'Cancel',ad:'Link URL',ae:'Upload in progress',af:'Rich Text Editor, %0',ag:'Rich Text Editor',ah:'Text alternative',ai:'Undo',aj:'Redo'});})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(e,t){module.exports=t();}('undefined'==typeof self?commonjsGlobal:self,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n});},t.n=function(e){var o=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(o,'a',o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=6)}([function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=g[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(c(n.parts[r],t));}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(c(n.parts[r],t));g[n.id]={id:n.id,refs:1,parts:a};}}}function i(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],d=i[3],c={css:s,media:l,sourceMap:d};n[a]?n[a].parts.push(c):o.push(n[a]={id:a,parts:[c]});}return o}function r(e,t){var o=b(e.insertInto);if(!o)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var n=w[w.length-1];if('top'===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),w.push(t);else if('bottom'===e.insertAt)o.appendChild(t);else if('object'==typeof e.insertAt&&e.insertAt.before){var i=b(e.insertInto+' '+e.insertAt.before);o.insertBefore(t,i);}else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);0<=t&&w.splice(t,1);}function s(e){var t=document.createElement('style');return e.attrs.type='text/css',d(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement('link');return e.attrs.type='text/css',e.attrs.rel='stylesheet',d(t,e.attrs),r(e,t),t}function d(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o]);});}function c(e,t){var o,n,i,r;if(t.transform&&e.css)if(r=t.transform(e.css),r)e.css=r;else return function(){};if(t.singleton){var d=_++;o=k||(k=s(t)),n=m.bind(null,o,d,!1),i=m.bind(null,o,d,!0);}else e.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(o=l(t),n=p.bind(null,o,t),i=function(){a(o),o.href&&URL.revokeObjectURL(o.href);}):(o=s(t),n=u.bind(null,o),i=function(){a(o);});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t);}else i();}}function m(e,t,o,n){var i=o?'':n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r);}}function u(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute('media',n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o));}}function p(e,t,o){var n=o.css,i=o.sourceMap,r=t.convertToAbsoluteUrls===void 0&&i;(t.convertToAbsoluteUrls||r)&&(n=v(n)),i&&(n+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+' */');var a=new Blob([n],{type:'text/css'}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s);}var g={},f=function(e){var t;return function(){return'undefined'==typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){return document.querySelector(e)},b=function(){var e={};return function(t){if('function'==typeof t)return t();if('undefined'==typeof e[t]){var o=h.call(this,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head;}catch(t){o=null;}e[t]=o;}return e[t]}}(),k=null,_=0,w=[],v=o(13);e.exports=function(e,t){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');t=t||{},t.attrs='object'==typeof t.attrs?t.attrs:{},t.singleton||'boolean'==typeof t.singleton||(t.singleton=f()),t.insertInto||(t.insertInto='head'),t.insertAt||(t.insertAt='bottom');var o=i(e,t);return n(o,t),function(e){for(var r=[],a=0;a<o.length;a++){var s=o[a],l=g[s.id];l.refs--,r.push(l);}if(e){var d=i(e,t);n(d,t);}for(var a=0,l;a<r.length;a++)if(l=r[a],0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id];}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join('\n')}}();},function(e,t,o){(function(e,n){var i=o(8),r={function:!0,object:!0},a=r['object']&&exports&&!exports.nodeType?exports:void 0,s=r[typeof e]&&e&&!e.nodeType?e:void 0,l=Object(i.a)(a&&s&&'object'==typeof n&&n),d=Object(i.a)(r[typeof self]&&self),c=Object(i.a)(r[typeof window]&&window),m=Object(i.a)(r[typeof this]&&this),u=l||c!==(m&&m.window)&&c||d||m||Function('return this')();t.a=u;}).call(t,o(2)(e),o(7));},function(e){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,'loaded',{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,'id',{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,'exports',{enumerable:!0}),t.webpackPolyfill=1;}return t};},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z" fill="#000" fill-rule="evenodd"/></svg>';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z" fill="#000" fill-rule="evenodd"/></svg>';},function(e,t,o){var n=o(63);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e,t,o){function n(e){const t=e.match(/^([^:]+):/);return t?e+` Read more: ${ks}#error-${t[1]}\n`:e}function i(){let e='e';for(let t=0;8>t;t++)e+=as(65536*(1+Math.random())).toString(16).substring(1);return e}function r(e,t){return e[Cs]&&e[Cs][t]?e[Cs][t].emitter:null}function a(e,t){e[As]||(e[As]=t||i());}function s(e){return e[As]}function l(e){return e._events||Object.defineProperty(e,'_events',{value:{}}),e._events}function d(){return{callbacks:[],childEvents:[]}}function c(e,t){const o=l(e);if(o[t])return;let n=t,i=null;const r=[];for(;''!==n&&!o[n];)o[n]=d(),r.push(o[n]),i&&o[n].childEvents.push(i),i=n,n=n.substr(0,n.lastIndexOf(':'));if(''!==n){for(const e of r)e.callbacks=o[n].callbacks.slice();o[n].childEvents.push(i);}}function m(e,t){const o=l(e)[t];if(!o)return[];let n=[o.callbacks];for(let r=0;r<o.childEvents.length;r++){const t=m(e,o.childEvents[r]);n=n.concat(t);}return n}function u(e,t){let o;return e._events&&(o=e._events[t])&&o.callbacks.length?o.callbacks:-1<t.indexOf(':')?u(e,t.substr(0,t.lastIndexOf(':'))):null}function p(e,t,o){for(let[n,i]of e){i?'function'==typeof i&&(i=i(t.name)):i=t.name;const e=new vs(t.source,i);e.path=[...t.path],n.fire(e,...o);}}function g(e,t,o){const n=m(e,t);for(const r of n)for(let e=0;e<r.length;e++)r[e].callback==o&&(r.splice(e,1),e--);}function f(e,...t){t.forEach((t)=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach((o)=>{if(!(o in e.prototype)){const n=Object.getOwnPropertyDescriptor(t,o);n.enumerable=!1,Object.defineProperty(e.prototype,o,n);}});});}function h(e){var t=-1,o=e?e.length:0;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1]);}}function b(e){var t=-1,o=e?e.length:0;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1]);}}function k(e){var t=-1,o=e?e.length:0;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1]);}}function _(e){this.__data__=new Rs(e);}function w(e,t,o){var n=e[t];dl.call(e,t)&&Es(n,o)&&(o!==void 0||t in e)||(e[t]=o);}function v(e,t){return pl.call(e,t)||'object'==typeof e&&t in e&&null===ls(e)}function y(e){return ql(Object(e))}function x(e){return ld.call(e)}function C(e,t,o,n,i,r,a){var s;if(n&&(s=r?n(e,i,r,a):n(e)),void 0!==s)return s;if(!Vs(e))return e;var l=Sl(e);if(!l){var d=gd(e),c=d==Wd||d==Ud;if(Object(jd.a)(e))return zl(e,t);if(d==Hd||d==qd||c&&!r){if(ds(e))return r?e:{};if(s=zd(c?{}:e),!t)return Ul(e,Ll(s,e))}else{if(!Kd[d])return r?e:{};s=Md(e,d,C,t);}}else if(s=bd(e),!t)return jl(e,s);a||(a=new al);var m=a.get(e);if(m)return m;if(a.set(e,s),!l)var u=o?Gl(e):Bl(e);return sl(u||e,function(i,r){u&&(r=i,i=e[r]),cl(s,r,C(i,t,o,n,r,e,a));}),s}function A(e,t){const o=rs(e.length,t.length);for(let n=0;n<o;n++)if(e[n]!=t[n])return n;return e.length==t.length?'same':e.length<t.length?'prefix':'extension'}function T(e){const t=new Map;for(const o in e)t.set(o,e[o]);return t}function P(e){return!!(e&&e[Symbol.iterator])}function E(e,t){if('function'==typeof t)return t(e);const o={};return t.name&&(o.name=S(t.name,e.name),!o.name)?null:t.attributes&&(o.attributes=O(t.attributes,e),!o.attributes)?null:!(t.classes&&(o.classes=I(t.classes,e),!o.classes))&&!(t.styles&&(o.styles=R(t.styles,e),!o.styles))&&o}function S(e,t){return e instanceof RegExp?e.test(t):e===t}function O(e,t){const o=[];for(const n in e){const i=e[n];if(t.hasAttribute(n)){const e=t.getAttribute(n);if(!0===i)o.push(n);else if(i instanceof RegExp){if(i.test(e))o.push(n);else return null;}else if(e===i)o.push(n);else return null}else return null}return o}function I(e,t){const o=[];for(const n of e)if(n instanceof RegExp){const e=t.getClassNames();for(const t of e)n.test(t)&&o.push(t);if(0===o.length)return null}else if(t.hasClass(n))o.push(n);else return null;return o}function R(e,t){const o=[];for(const n in e){const i=e[n];if(t.hasStyle(n)){const e=t.getStyle(n);if(i instanceof RegExp){if(i.test(e))o.push(n);else return null;}else if(e===i)o.push(n);else return null}else return null}return o}function V(e){e=hs(e)?T(e):new Map(e);for(const[t,o]of e)null===o?e.delete(t):'string'!=typeof o&&e.set(t,o+'');return e}function F(e,t){let o=null,n=0,r=0,a=null;if(e.clear(),''!==t){';'!=t.charAt(t.length-1)&&(t+=';');for(let s=0;s<t.length;s++){const i=t.charAt(s);if(null===o)switch(i){case':':a||(a=t.substr(n,s-n),r=s+1);break;case'"':case'\'':o=i;break;case';':const l=t.substr(r,s-r);a&&e.set(a.trim(),l.trim()),a=null,n=s+1;}else i===o&&(o=null);}}}function N(e,t){const o=t.split(/\s+/);e.clear(),o.forEach((t)=>e.add(t));}function D(e){return'string'==typeof e?[new Qd(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new Qd(e):e instanceof Yd?new Qd(e.data):e))}function M(){const e=[...this.getChildren()],t=e[this.childCount-1];if(t&&t.is('element','br'))return this.childCount;for(const t of e)if(!t.is('uiElement'))return null;return this.childCount}function B(e,t,o){if(!Vs(o))return!1;var n=typeof t;return!('number'==n?!(vl(o)&&Nl(t,o.length)):!('string'==n&&t in o))&&Es(o[t],e)}function L(e){e=null==e?e:Object(e);var t=[];for(var o in e)t.push(o);return t}function z(e){Vc in e||(Object.defineProperty(e,Vc,{value:new Map}),Object.defineProperty(e,Fc,{value:new Map}),Object.defineProperty(e,Nc,{value:new Map}));}function j(...e){const t=H(...e),o=Array.from(this._bindings.keys()),n=o.length;if(!t.callback&&1<t.to.length)throw new _s('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');if(1<n&&t.callback)throw new _s('observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.');t.to.forEach((e)=>{if(e.properties.length&&e.properties.length!==n)throw new _s('observable-bind-to-properties-length: The number of properties must match.');e.properties.length||(e.properties=this._bindProperties);}),this._to=t.to,t.callback&&(this._bindings.get(o[0]).callback=t.callback),J(this._observable,this._to),G(this),this._bindProperties.forEach((e)=>{$(this._observable,e);});}function q(e,t,o){if(1<this._bindings.size)throw new _s('observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().');this.to(...W(e,t),o);}function W(e,t){const o=e.map((e)=>[e,t]);return Array.prototype.concat.apply([],o)}function U(e){return e.every((e)=>'string'==typeof e)}function H(...e){if(!e.length)throw new _s('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');const t={to:[]};let o;return'function'==typeof e[e.length-1]&&(t.callback=e.pop()),e.forEach((e)=>{if('string'==typeof e)o.properties.push(e);else if('object'==typeof e)o={observable:e,properties:[]},t.to.push(o);else throw new _s('observable-bind-to-parse-error: Invalid argument syntax in `to()`.')}),t}function K(e,t,o,n){const i=e[Fc],r=i.get(o),a=r||{};a[n]||(a[n]=new Set),a[n].add(t),r||i.set(o,a);}function G(e){let t;e._bindings.forEach((o,n)=>{e._to.forEach((i)=>{t=i.properties[o.callback?0:e._bindProperties.indexOf(n)],o.to.push([i.observable,t]),K(e._observable,o,i.observable,t);});});}function $(e,t){const o=e[Nc],n=o.get(t);let i;n.callback?i=n.callback.apply(e,n.to.map((e)=>e[0][e[1]])):(i=n.to[0],i=i[0][i[1]]),e.hasOwnProperty(t)?e[t]=i:e.set(t,i);}function J(e,t){t.forEach((t)=>{const o=e[Fc];let n;o.get(t.observable)||e.listenTo(t.observable,'change',(i,r)=>{n=o.get(t.observable)[r],n&&n.forEach((t)=>{$(e,t.property);});});});}function Q(e){return!!(e.item.is('attributeElement')||e.item.is('uiElement'))}function Y(e){let t=0;for(const o of e)t++;return t}function X(){if(Z(this))return null;let e=this.parent;for(;e&&e.is('attributeElement');){if(1<Z(e))return null;e=e.parent;}return!e||1<Z(e)?null:this.childCount}function Z(e){return Array.from(e.getChildren()).filter((e)=>!e.is('uiElement')).length}function ee(){return null}function te(e){let t;if('string'!=typeof e)t=e.keyCode+(e.altKey?nm.alt:0)+(e.ctrlKey?nm.ctrl:0)+(e.shiftKey?nm.shift:0);else if(t=nm[e.toLowerCase()],!t)throw new _s('keyboard-unknown-key: Unknown key name.',{key:e});return t}function oe(e){return'string'==typeof e&&(e=ie(e)),e.map((e)=>'string'==typeof e?te(e):e).reduce((e,t)=>t+e,0)}function ne(e){return em.isMac?ie(e).map((e)=>om[e.toLowerCase()]||e).reduce((e,t)=>e.slice(-1)in tm?e+t:e+'+'+t):e}function ie(e){return e.split(/\s*\+\s*/)}function re(e){e.document.on('keydown',(t,o)=>se(t,o,e.domConverter));}function ae(){return null}function se(e,t,o){if(t.keyCode==nm.arrowright){const e=t.domTarget.ownerDocument.defaultView.getSelection(),n=1==e.rangeCount&&e.getRangeAt(0).collapsed;if(n||t.shiftKey){const t=e.focusNode,i=e.focusOffset,r=o.domPositionToView(t,i);if(null===r)return;let a=!1;const s=r.getLastMatchingPosition((e)=>(e.item.is('uiElement')&&(a=!0),!!(e.item.is('uiElement')||e.item.is('attributeElement'))));if(a){const t=o.viewPositionToDom(s);n?e.collapse(t.parent,t.offset):e.extend(t.parent,t.offset);}}}}function le(e){return'string'==typeof e?[new Qd(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new Qd(e):e instanceof Yd?new Qd(e.data):e))}function de(e){return Array.from(e.getChildren()).some((e)=>!e.is('uiElement'))}function ce(e){let t=e.parent;for(;!be(t);){if(!t)return;t=t.parent;}return t}function me(e,t){if(e.priority<t.priority)return!0;return!(e.priority>t.priority)&&e.getIdentity()<t.getIdentity()}function ue(e){const t=e.nodeBefore;if(t&&t.is('text'))return new Wc(t,t.data.length);const o=e.nodeAfter;return o&&o.is('text')?new Wc(o,0):e}function pe(e){if(e.offset==e.parent.data.length)return new Wc(e.parent.parent,e.parent.index+1);if(0===e.offset)return new Wc(e.parent.parent,e.parent.index);const t=e.parent.data.slice(e.offset);return e.parent._data=e.parent.data.slice(0,e.offset),e.parent.parent._insertChild(e.parent.index+1,new Qd(t)),new Wc(e.parent.parent,e.parent.index+1)}function ge(e,t){const o=e.data.length;return e._data+=t.data,t._remove(),new Wc(e,o)}function fe(e){return e.start.parent==e.end.parent&&e.start.parent.is('attributeElement')&&0===e.start.offset&&e.end.offset===e.start.parent.childCount}function he(e){for(const t of e){if(!sm.some((e)=>t instanceof e))throw new _s('view-writer-insert-invalid-node');t.is('text')||he(t.getChildren());}}function be(e){return e&&(e.is('containerElement')||e.is('documentFragment'))}function ke(e){const t=ce(e.start),o=ce(e.end);if(!t||!o||t!==o)throw new _s('view-writer-invalid-range-container')}function _e(e,t){return null===e.id&&null===t.id}function we(e){return e instanceof Text&&e.data.substr(0,cm)===mm}function ve(e){return e.data.length==cm&&we(e)}function ye(e){return we(e)?e.data.slice(cm):e.data}function xe(e,t){let o=um.get(t);return o||(o=t(window.document),um.set(t,o)),e.isEqualNode(o)}function Ce(e){e.document.on('keydown',Ae);}function Ae(e,t){if(t.keyCode==nm.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(1==e.rangeCount&&e.getRangeAt(0).collapsed){const t=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;we(t)&&o<=cm&&e.collapse(t,0);}}}function Te(e,t,o){function i(n){const i=(c[n-1]===void 0?-1:c[n-1])+1,m=c[n+1]===void 0?-1:c[n+1],u=i>m?-1:1;d[n+u]&&(d[n]=d[n+u].slice(0)),d[n]||(d[n]=[]),d[n].push(i>m?r:a);let p=is(i,m),g=p-n;for(;g<s&&p<l&&o(e[g],t[p]);)g++,p++,d[n].push('equal');return p}o=o||function(e,t){return e===t};let r,a;if(t.length<e.length){const o=e;e=t,t=o,r='delete',a='insert';}else r='insert',a='delete';const s=e.length,l=t.length,n=l-s,d={},c={};let m=0,u;do{for(u=-m;u<n;u++)c[u]=i(u);for(u=n+m;u>n;u--)c[u]=i(u);c[n]=i(n),m++;}while(c[n]!==l);return d[n].slice(1)}function Pe(e,t,o){e.insertBefore(o,e.childNodes[t]||null);}function Ee(e){const t=e.parentNode;t&&t.removeChild(e);}function Se(e){return'[object Text]'==Object.prototype.toString.call(e)}function Oe(e){if(e){if(e.defaultView)return e instanceof e.defaultView.Document;if(e.ownerDocument&&e.ownerDocument.defaultView)return e instanceof e.ownerDocument.defaultView.Node}return!1}function Ie(e,t){if(e===t)return[];const o=Re(e,t);return Ne(t,o)}function Re(e,t){const o=Ve(e,t),n=Fe(e,o),i=Fe(t,o),r=Ve(n,i),a=e.length-r,s=t.length-r;return{firstIndex:o,lastIndexOld:a,lastIndexNew:s}}function Ve(e,t){for(let o=0;o<is(e.length,t.length);o++)if(e[o]!==t[o])return o}function Fe(e,t){return e.substring(t).split('').reverse().join('')}function Ne(e,t){const o=[],{firstIndex:n,lastIndexOld:i,lastIndexNew:r}=t;return 0<r-n&&o.push({index:n,type:'insert',values:e.substring(n,r).split('')}),0<i-n&&o.push({index:n+(r-n),type:'delete',howMany:i-n}),o}function De(e){if('false'==e.getAttribute('contenteditable'))return!1;const t=e.findAncestor((e)=>e.hasAttribute('contenteditable'));return!t||'true'==t.getAttribute('contenteditable')}function Me(e,t){return Oe(e)&&Oe(t)&&!Se(e)&&!Se(t)&&e.tagName.toLowerCase()===t.tagName.toLowerCase()}function Be(e,t,o){if(t===o)return!0;return Se(t)&&Se(o)?t.data===o.data:!!(xe(t,e)&&xe(o,e))}function Le(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}function ze(e){const t=[];for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}function je(e,t){const o=ze(e),n=ze(t);let r=0;for(;o[r]==n[r]&&o[r];)r++;return 0==r?null:o[r-1]}function qe(e,t,o){let n=ze(e);return o&&(n=n.slice(n.indexOf(o)+1)),n.some((e)=>e.tagName&&t.includes(e.tagName.toLowerCase()))}function We(e,t){for(;e&&e!=gm.document;)t(e),e=e.parentNode;}function Ue(e){return'[object Window]'==Object.prototype.toString.apply(e)}function He(e){return e['data-ck-expando']||(e['data-ck-expando']=i())}function Ke(e){var t=-1,o=e?e.length:0;for(this.__data__=new rl;++t<o;)this.add(e[t]);}function Ge(e,t,o,n,i,r){var a=i&Pm,s=Bl(e),l=s.length,d=Bl(t),c=d.length;if(l!=c&&!a)return!1;for(var m=l,u;m--;)if(u=s[m],a?!(u in t):!gl(t,u))return!1;var p=r.get(e);if(p)return p==t;var g=!0;r.set(e,t);for(var f=a;++m<l;){u=s[m];var h=e[u],b=t[u];if(n)var k=a?n(b,h,u,t,e,r):n(h,b,u,e,t,r);if(void 0===k?!(h===b||o(h,b,n,i,r)):!k){g=!1;break}f||(f='constructor'==u);}if(g&&!f){var _=e.constructor,w=t.constructor;_!=w&&'constructor'in e&&'constructor'in t&&!('function'==typeof _&&_ instanceof _&&'function'==typeof w&&w instanceof w)&&(g=!1);}return r['delete'](e),g}function $e(e,t,o,n,i){return!(e!==t)||(null!=e&&null!=t&&(Vs(e)||cs(t))?Mm(e,t,$e,o,n,i):e!==e&&t!==t)}function Je(e,t,o){function n(t){var o=b,n=k;return b=k=void 0,p=t,w=e.apply(n,o),w}function i(e){return p=e,v=setTimeout(s,t),g?n(e):w}function r(e){var o=e-u,n=e-p,i=t-o;return f?$m(i,_-n):i}function a(e){var o=e-u,n=e-p;return!u||o>=t||0>o||f&&n>=_}function s(){var e=Hm();return a(e)?l(e):void(v=setTimeout(s,r(e)))}function l(e){return(clearTimeout(v),v=void 0,h&&b)?n(e):(b=k=void 0,w)}function d(){void 0!==v&&clearTimeout(v),u=p=0,b=k=v=void 0;}function c(){return void 0===v?w:l(Hm())}function m(){var e=Hm(),o=a(e);if(b=arguments,k=this,u=e,o){if(void 0===v)return i(u);if(f)return clearTimeout(v),v=setTimeout(s,t),n(u)}return void 0===v&&(v=setTimeout(s,t)),w}var u=0,p=0,g=!1,f=!1,h=!0,b,k,_,w,v;if('function'!=typeof e)throw new TypeError(Km);return t=uc(t)||0,Vs(o)&&(g=!!o.leading,f='maxWait'in o,_=f?Gm(uc(o.maxWait)||0,t):_,h='trailing'in o?!!o.trailing:h),m.cancel=d,m.flush=c,m}function Qe(e){return e==nm.arrowright||e==nm.arrowleft||e==nm.arrowup||e==nm.arrowdown}function Ye(e){return'[object Range]'==Object.prototype.toString.apply(e)}function Xe(e){const t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function Ze(e,t){for(const o of nu)e[o]=t[o];}function et(e){return!!fm(e)&&e===e.ownerDocument.body}function tt({target:e,viewportOffset:t=0}){const o=dt(e);for(let n=o,i=null;n;){let r;r=n==o?ct(e):ct(i),it(r,()=>mt(e,n));const a=mt(e,n);if(nt(n,a,t),n.parent==n)n=null;else if(i=n.frameElement,n=n.parent,!i)return}}function nt(e,t,o){const n=t.clone().moveBy(0,o),i=t.clone().moveBy(0,-o),r=new ou(e).excludeScrollbarsAndBorders();if(![i,n].every((e)=>r.contains(e))){let{scrollX:a,scrollY:s}=e;at(i,r)?s-=r.top-t.top+o:rt(n,r)&&(s+=t.bottom-r.bottom+o),st(t,r)?a-=r.left-t.left+o:lt(t,r)&&(a+=t.right-r.right+o),e.scrollTo(a,s);}}function it(e,t){const o=dt(e);for(let n,i;e!=o.document.body;)i=t(),n=new ou(e).excludeScrollbarsAndBorders(),n.contains(i)||(at(i,n)?e.scrollTop-=n.top-i.top:rt(i,n)&&(e.scrollTop+=i.bottom-n.bottom),st(i,n)?e.scrollLeft-=n.left-i.left:lt(i,n)&&(e.scrollLeft+=i.right-n.right)),e=e.parentNode;}function rt(e,t){return e.bottom>t.bottom}function at(e,t){return e.top<t.top}function st(e,t){return e.left<t.left}function lt(e,t){return e.right>t.right}function dt(e){return Ye(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function ct(e){if(Ye(e)){let t=e.commonAncestorContainer;return Se(t)&&(t=t.parentNode),t}return e.parentNode}function mt(e,t){const o=dt(e),n=new ou(e);if(o===t)return n;for(let i=o;i!=t;){const e=i.frameElement,t=new ou(e).excludeScrollbarsAndBorders();n.moveBy(t.left,t.top),i=i.parent;}return n}function ut(e){return hs(e)?T(e):new Map(e)}function pt(e){return'string'==typeof e?[new au(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new au(e):e instanceof su?new au(e.data,e.getAttributes()):e))}function gt(e,t,o,n,i){return{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:n,length:i}}}function ft(e){const t=e.split(':');return 1<t.length?t[0]+':'+t[1]:t[0]}function ht(e,t,o){const n=t.getRange(),i=Array.from(e.getAncestors());i.shift(),i.reverse();const r=i.some((e)=>{if(n.containsItem(e)){const t=o.toViewElement(e);return!!t.getCustomProperty('addHighlight')}});return!r}function bt(e,t){return!t.has(e)&&(t.add(e),e.document.model.schema.isBlock(e)&&e.parent)}function kt(e,t){const o=e.parent.getAncestors({parentFirst:!0,includeSelf:!0}),n=o.find((e)=>bt(e,t));return o.forEach((e)=>t.add(e)),n}function _t(){const e=new Set(['insert','move','remove','reinsert']);this.listenTo(this.root.document.model,'applyOperation',(t,o)=>{const n=o[0];!n.isDocumentOperation||e.has(n.type)&&wt.call(this,n);},{priority:'low'});}function wt(e){const t=e.type,o=e.delta.batch;let n,i;'insert'==t?n=pu.createFromPositionAndShift(e.position,e.nodes.maxOffset):(n=pu.createFromPositionAndShift(e.getMovedRangeStart(),e.howMany),i=e.sourcePosition);const r=n.end.offset-n.start.offset;let a=n.start;('move'==t||'remove'==t||'reinsert'==t)&&(a=a._getTransformedByInsertion(i,r));const s=this._getTransformedByDocumentChange(t,e.delta.type,a,r,i);('move'==t||'remove'==t||'reinsert'==t)&&3==s.length&&(s[2]=n);const l=pu.createFromRanges(s),d=!l.isEqual(this),c=this.containsPosition(a),m=i&&(this.containsPosition(i)||this.start.isEqual(i));if(d){const e=pu.createFromRange(this);this.start=l.start,this.end=l.end,this.fire('change:range',e,{type:t,batch:o,range:n,sourcePosition:i});}else(c||m)&&this.fire('change:content',pu.createFromRange(this),{type:t,batch:o,range:n,sourcePosition:i});}function vt(e){return e instanceof su||e instanceof au?e.getAttributes():null}function yt(e,t){const o=e.document.differ;for(const n of o.getChanges()){if('insert'!=n.type)continue;const o=n.position.parent,i=n.length===o.maxOffset;i&&e.enqueueChange(t,(e)=>{const t=Array.from(o.getAttributeKeys()).filter((e)=>e.startsWith(_u));for(const n of t)e.removeAttribute(n,o);});}}function xt(e){return e=yu(e),e.view=Tt(e.view,'container'),(t)=>{t.on('insert:'+e.model,Ot(e.view),{priority:e.converterPriority||'normal'});}}function Ct(e){e=yu(e);const t=e.model.key?e.model.key:e.model;let o='attribute:'+t;if(e.model.name&&(o+=':'+e.model.name),e.model.values)for(const t of e.model.values)e.view[t]=Tt(e.view[t],'attribute');else e.view=Tt(e.view,'attribute');const n=Et(e);return(t)=>{t.on(o,Ft(n),{priority:e.converterPriority||'normal'});}}function At(e){e=yu(e);const t=e.model.key?e.model.key:e.model;let o='attribute:'+t;if(e.model.name&&(o+=':'+e.model.name),e.model.values)for(const t of e.model.values)e.view[t]=St(e.view[t]);else e.view=St(e.view);const n=Et(e);return(t)=>{t.on(o,Vt(n),{priority:e.converterPriority||'normal'});}}function Tt(e,t){return'function'==typeof e?e:(o,n)=>Pt(e,n,t)}function Pt(e,t,o){'string'==typeof e&&(e={name:e});let n;const i=Object.assign({},e.attributes);if('container'==o)n=t.createContainerElement(e.name,i);else if('attribute'==o){const o={priority:e.priority||Qc.DEFAULT_PRIORITY};n=t.createAttributeElement(e.name,i,o);}else n=t.createUIElement(e.name,i);if(e.styles){const o=Object.keys(e.styles);for(const i of o)t.setStyle(i,e.styles[i],n);}if(e.classes){const o=e.classes;if('string'==typeof o)t.addClass(o,n);else for(const e of o)t.addClass(e,n);}return n}function Et(e){return e.model.values?(t,o)=>{const n=e.view[t];return n?n(t,o):null}:e.view}function St(e){return'string'==typeof e?(t)=>({key:e,value:t}):'object'==typeof e?e.value?()=>e:(t)=>({key:e.key,value:t}):e}function Ot(e){return(t,o,n)=>{const i=e(o.item,n.writer);if(i&&n.consumable.consume(o.item,'insert')){const e=n.mapper.toViewPosition(o.range.start);n.mapper.bindElements(o.item,i),n.writer.insert(e,i);}}}function It(){return(e,t,o)=>{if(o.consumable.consume(t.item,'insert')){const e=o.writer,n=o.mapper.toViewPosition(t.range.start),i=e.createText(t.item.data);e.insert(n,i);}}}function Rt(){return(e,t,o)=>{const n=o.mapper.toViewPosition(t.position),i=t.position.getShiftedBy(t.length),r=o.mapper.toViewPosition(i,{isPhantom:!0}),a=new Uc(n,r),s=o.writer.remove(a.getTrimmed());for(const n of Uc.createIn(s).getItems())o.mapper.unbindViewElement(n);}}function Vt(e){return e=e||((e,t)=>({value:e,key:t.attributeKey})),(t,o,n)=>{const i=e(o.attributeOldValue,o),r=e(o.attributeNewValue,o);if((i||r)&&n.consumable.consume(o.item,t.name)){const e=n.mapper.toViewElement(o.item),t=n.writer;if(null!==o.attributeOldValue&&i)if('class'==i.key){const o=Array.isArray(i.value)?i.value:[i.value];for(const n of o)t.removeClass(n,e);}else if('style'==i.key){const o=Object.keys(i.value);for(const n of o)t.removeStyle(n,e);}else t.removeAttribute(i.key,e);if(null!==o.attributeNewValue&&r)if('class'==r.key){const o=Array.isArray(r.value)?r.value:[r.value];for(const n of o)t.addClass(n,e);}else if('style'==r.key){const o=Object.keys(r.value);for(const n of o)t.setStyle(n,r.value[n],e);}else t.setAttribute(r.key,r.value,e);}}}function Ft(e){return(t,o,n)=>{const i=e(o.attributeOldValue,n.writer),r=e(o.attributeNewValue,n.writer);if((i||r)&&n.consumable.consume(o.item,t.name)){const e=n.writer,t=e.document.selection;if(o.item instanceof bu||o.item instanceof wu)e.wrap(t.getFirstRange(),r);else{let t=n.mapper.toViewRange(o.range);null!==o.attributeOldValue&&i&&(t=e.unwrap(t,i)),null!==o.attributeNewValue&&r&&e.wrap(t,r);}}}}function Nt(e,t){return(o,n)=>{const i=n.newSelection,r=new bu,a=[];for(const e of i.getRanges())a.push(t.toModelRange(e));r.setTo(a,{backward:i.isBackward}),r.isEqual(e.document.selection)||e.change((e)=>{e.setSelection(r);});}}function Dt(){return(e,t,o)=>{const n=t.selection;if(!n.isCollapsed&&o.consumable.consume(n,'selection')){const e=[];for(const t of n.getRanges()){const n=o.mapper.toViewRange(t);e.push(n);}o.writer.setSelection(e,{backward:n.isBackward});}}}function Mt(){return(e,t,o)=>{const n=t.selection;if(n.isCollapsed&&o.consumable.consume(n,'selection')){const e=o.writer,t=n.getFirstPosition(),i=o.mapper.toViewPosition(t),r=e.breakAttributes(i);e.setSelection(r);}}}function Bt(){return(e,t,o)=>{const n=o.writer,i=n.document.selection;for(const n of i.getRanges())n.isCollapsed&&n.end.parent.document&&o.writer.mergeAttributes(n.start);n.setSelection(null);}}function Lt(e,t){const o=jt();if(1===o&&(e=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0===o||!zt(e,t))return t.replace(/ \[context: [^\]]+\]$/,'');const n=window.CKEDITOR_TRANSLATIONS[e];return n[t].replace(/ \[context: [^\]]+\]$/,'')}function zt(e,t){return e in window.CKEDITOR_TRANSLATIONS&&t in window.CKEDITOR_TRANSLATIONS[e]}function jt(){return Object.keys(window.CKEDITOR_TRANSLATIONS).length}function qt(e,t){const o={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return Jt(e,o),Qt(e,o,'allowIn'),Qt(e,o,'allowContentOf'),Qt(e,o,'allowWhere'),Qt(e,o,'allowAttributes'),Qt(e,o,'allowAttributesOf'),Qt(e,o,'inheritTypesFrom'),Yt(e,o),o}function Wt(e,t){for(const o of e[t].allowContentOf)if(e[o]){const n=Xt(e,o);n.forEach((e)=>{e.allowIn.push(t);});}delete e[t].allowContentOf;}function Ut(e,t){for(const o of e[t].allowWhere){const n=e[o];if(n){const o=n.allowIn;e[t].allowIn.push(...o);}}delete e[t].allowWhere;}function Ht(e,t){for(const o of e[t].allowAttributesOf){const n=e[o];if(n){const o=n.allowAttributes;e[t].allowAttributes.push(...o);}}delete e[t].allowAttributesOf;}function Kt(e,t){const o=e[t];for(const n of o.inheritTypesFrom){const t=e[n];if(t){const e=Object.keys(t).filter((e)=>e.startsWith('is'));for(const n of e)n in o||(o[n]=t[n]);}}delete o.inheritTypesFrom;}function Gt(e,t){const o=e[t],n=o.allowIn.filter((t)=>e[t]);o.allowIn=Array.from(new Set(n));}function $t(e,t){const o=e[t];o.allowAttributes=Array.from(new Set(o.allowAttributes));}function Jt(e,t){for(const o of e){const e=Object.keys(o).filter((e)=>e.startsWith('is'));for(const n of e)t[n]=o[n];}}function Qt(e,t,o){for(const n of e)'string'==typeof n[o]?t[o].push(n[o]):Array.isArray(n[o])&&t[o].push(...n[o]);}function Yt(e,t){for(const o of e){const e=o.inheritAllFrom;e&&(t.allowContentOf.push(e),t.allowWhere.push(e),t.allowAttributesOf.push(e),t.inheritTypesFrom.push(e));}}function Xt(e,t){const o=e[t];return Zt(e).filter((e)=>e.allowIn.includes(o.name))}function Zt(e){return Object.keys(e).map((t)=>e[t])}function eo(e){return'string'==typeof e?{name:e,*getAttributeKeys(){},getAttribute(){}}:{name:e.is('element')?e.name:'$text',*getAttributeKeys(){yield*e.getAttributeKeys();},getAttribute(t){return e.getAttribute(t)}}}function*to(e,t){for(let o=!1;!o;){if(o=!0,e){const t=e.next();t.done||(o=!1,yield{walker:e,value:t.value});}if(t){const e=t.next();e.done||(o=!1,yield{walker:t,value:e.value});}}}function oo(e,t){const o=new Set,n=new Map,i=pu.createIn(e).getItems();for(const n of i)'$marker'==n.name&&o.add(n);for(const i of o){const e=i.getAttribute('data-name'),o=uu.createBefore(i);n.has(e)?n.get(e).end=uu.createFromPosition(o):n.set(e,new pu(uu.createFromPosition(o))),t.remove(i);}return n}function no(e,t){let o;for(const n of new Ou(e)){const e={};for(const t of n.getAttributeKeys())e[t]=n.getAttribute(t);const i=t.createElement(n.name,e);o&&t.append(i,o),o=uu.createAt(i);}return o}function io(e){e=yu(e);const t=lo(e),o=so(e),n=o?'element:'+o:'element';return(o)=>{o.on(n,t,{priority:e.converterPriority||'normal'});}}function ro(e){e=yu(e),uo(e);const t=po(e),o=so(e),n=o?'element:'+o:'element';return(o)=>{o.on(n,t,{priority:e.converterPriority||'normal'});}}function ao(e){e=yu(e);let t=null;('string'==typeof e.view||e.view.key)&&(t=mo(e)),uo(e,t);const o=po(e);return(t)=>{t.on('element',o,{priority:e.converterPriority||'low'});}}function so(e){return'string'==typeof e.view?e.view:'object'==typeof e.view&&'string'==typeof e.view.name?e.view.name:null}function lo(e){const t=new Xd(e.view);return(o,n,i)=>{const r=t.match(n.viewItem);if(r){r.match.name=!0;const t=co(e.model,n.viewItem,i.writer);if(t&&i.consumable.test(n.viewItem,r.match)){const e=i.splitToAllowedParent(t,n.modelCursor);if(e){i.writer.insert(t,e.position);const o=i.convertChildren(n.viewItem,uu.createAt(t));i.consumable.consume(n.viewItem,r.match),n.modelRange=new pu(uu.createBefore(t),uu.createAfter(o.modelCursor.parent)),n.modelCursor=e.cursorParent?uu.createAt(e.cursorParent):n.modelRange.end;}}}}}function co(e,t,o){return e instanceof Function?e(t,o):o.createElement(e)}function mo(e){'string'==typeof e.view&&(e.view={key:e.view});const t=e.view.key;let o;if('class'==t||'style'==t){const n='class'==t?'classes':'styles';o={[n]:e.view.value};}else{const n='undefined'==typeof e.view.value?/[\s\S]*/:e.view.value;o={attributes:{[t]:n}};}return e.view.name&&(o.name=e.view.name),e.view=o,t}function uo(e,t=null){const o='object'==typeof e.model?e.model.key:e.model,n='object'!=typeof e.model||'undefined'==typeof e.model.value?!(null!==t)||((e)=>e.getAttribute(t)):e.model.value;e.model={key:o,value:n};}function po(e){const t=new Xd(e.view);return(o,n,i)=>{const r=t.match(n.viewItem);if(r){const t=e.model.key,o='function'==typeof e.model.value?e.model.value(n.viewItem):e.model.value;if(null!==o&&(go(e)?r.match.name=!0:delete r.match.name,!!i.consumable.test(n.viewItem,r.match))){n.modelRange||(n=Object.assign(n,i.convertChildren(n.viewItem,n.modelCursor)));const e=fo(n.modelRange,{key:t,value:o},i);e&&i.consumable.consume(n.viewItem,r.match);}}}}function go(e){return!!('object'!=typeof e.view||so(e))&&!e.view.classes&&!e.view.attributes&&!e.view.styles}function fo(e,t,o){let n=!1;for(const i of Array.from(e.getItems()))o.schema.checkAttribute(i,t.key)&&(o.writer.setAttribute(t.key,t.value,i),n=!0);return n}function ho(){return(e,t,o)=>{if(!t.modelRange&&o.consumable.consume(t.viewItem,{name:!0})){const{modelRange:e,modelCursor:n}=o.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=n;}}}function bo(){return(e,t,o)=>{if(o.schema.checkChild(t.modelCursor,'$text')&&o.consumable.consume(t.viewItem)){const e=o.writer.createText(t.viewItem.data);o.writer.insert(e,t.modelCursor),t.modelRange=pu.createFromPositionAndShift(t.modelCursor,e.offsetSize),t.modelCursor=t.modelRange.end;}}}function ko(e){const t=[],o=e.root.document;if(!o)return[];const n=pu.createIn(e);for(const i of o.model.markers){const e=n.getIntersection(i.getRange());e&&t.push([i.name,e]);}return t}function _o(e,t){for(const o of e)t(o);}function*wo(e){if(e.model.values)for(const t of e.model.values){const o={key:e.model.key,value:t},n=e.view[t],i=e.upcastAlso?e.upcastAlso[t]:void 0;yield*vo(o,n,i);}else yield*vo(e.model,e.view,e.upcastAlso);}function*vo(e,t,o){if(yield{model:e,view:t},o){o=Array.isArray(o)?o:[o];for(const t of o)yield{model:e,view:t};}}function yo(e){return'string'==typeof e?[new au(e)]:(P(e)||(e=[e]),Array.from(e).map((e)=>'string'==typeof e?new au(e):e instanceof su?new au(e.data,e.getAttributes()):e))}function xo(e,t){t=Po(t);const o=t.reduce((e,t)=>e+t.offsetSize,0),n=e.parent;So(e);const i=e.index;return n._insertChild(i,t),Eo(n,i+t.length),Eo(n,i),new pu(e,e.getShiftedBy(o))}function Co(e){if(!e.isFlat)throw new _s('operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.');const t=e.start.parent;So(e.start),So(e.end);const o=t._removeChildren(e.start.index,e.end.index-e.start.index);return Eo(t,e.start.index),o}function Ao(e,t){if(!e.isFlat)throw new _s('operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.');const o=Co(e);return t=t._getTransformedByDeletion(e.start,e.end.offset-e.start.offset),xo(t,o)}function To(e,t,o){So(e.start),So(e.end);for(const n of e.getItems()){const e=n.is('textProxy')?n.textNode:n;null===o?e._removeAttribute(t):e._setAttribute(t,o),Eo(e.parent,e.index);}Eo(e.end.parent,e.end.index);}function Po(e){const t=[];e instanceof Array||(e=[e]);for(let o=0;o<e.length;o++)if('string'==typeof e[o])t.push(new au(e[o]));else if(e[o]instanceof su)t.push(new au(e[o].data,e[o].getAttributes()));else if(e[o]instanceof Nu||e[o]instanceof lu)for(const n of e[o])t.push(n);else e[o]instanceof ru&&t.push(e[o]);for(let o=1;o<t.length;o++){const e=t[o],n=t[o-1];e instanceof au&&n instanceof au&&Oo(e,n)&&(t.splice(o-1,2,new au(n.data+e.data,n.getAttributes())),o--);}return t}function Eo(e,t){const o=e.getChild(t-1),n=e.getChild(t);if(o&&n&&o.is('text')&&n.is('text')&&Oo(o,n)){const i=new au(o.data+n.data,o.getAttributes());e._removeChildren(t-1,2),e._insertChild(t-1,i);}}function So(e){const t=e.textNode,o=e.parent;if(t){const n=e.offset-t.startOffset,i=t.index;o._removeChildren(i,1);const r=new au(t.data.substr(0,n),t.getAttributes()),a=new au(t.data.substr(n),t.getAttributes());o._insertChild(i,[r,a]);}}function Oo(e,t){const o=e.getAttributes(),n=t.getAttributes();for(const i of o){if(i[1]!==t.getAttribute(i[0]))return!1;n.next();}return n.next().done}function Io(e){return[e.clone()]}function Ro(e,t){for(let o=0;o<t.length;o++)t[o].baseVersion=e+o+1;return t}function Vo(e,t){return null===e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)}function Fo(e){return 0===e.length?null:1==e.length?e[0]:(e[0].end=e[e.length-1].end,e[0])}function No(e,t,o){const n=[];for(let r=0;r<e.length;r++){const i=Do(e[r],t,o.isSticky);n.push(i);for(let t=r+1;t<e.length;t++)e[t]=e[t]._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany)[0];t=t._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!0,!1);}return n}function Do(e,t,o){let n='$graveyard'==t.root.rootName?zu:'$graveyard'==e.start.root.rootName?Lu:Bu;const i=new n(e.start,e.end.offset-e.start.offset,t,0);return i.isSticky=o,i}function Mo(e,t,o,n,i){var r=-1,a=e.length;for(o||(o=cp),i||(i=[]);++r<a;){var s=e[r];0<t&&o(s)?1<t?Mo(s,t-1,o,n,i):Hl(i,s):!n&&(i[i.length]=s);}return i}function Bo(e,t,o,n){var i=o.length,r=i,a=!n;if(null==e)return!r;for(e=Object(e);i--;){var s=o[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<r;){s=o[i];var l=s[0],d=e[l],c=s[1];if(!(a&&s[2])){var m=new al;if(n)var u=n(d,c,l,e,t,m);if(void 0===u?!Bm(c,d,n,vp|yp,m):!u)return!1}else if(void 0===d&&!(l in e))return!1}return!0}function Lo(e,t){if('function'!=typeof e||t&&'function'!=typeof t)throw new TypeError(Op);var o=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=o.cache;if(r.has(i))return r.get(i);var a=e.apply(this,n);return o.cache=r.set(i,a),a};return o.cache=new(Lo.Cache||rl),o}function zo(e,t){if(Sl(e))return!1;var o=typeof e;return!!('number'==o||'symbol'==o||'boolean'==o||null==e||rc(e))||zp.test(e)||!Lp.test(e)||null!=t&&e in Object(t)}function jo(e,t){return t in Object(e)}function qo(e,t){for(const o of t)for(const t of o.operations)t.baseVersion=++e;return t}function Wo(e){return e.reduce((e,t)=>e+t.operations.length,0)}function Uo(e,t){const o=e[e.length-1];let n=o.operations.length+o.baseVersion;const r=new Qu;for(let o=0;o<t;o++)r.addOperation(new Wu(n++));e.push(r);}function Ho(e,t,o){Jo(e,t,o),Ko(e,t,o),$o(t,o),Go(t,o);}function Ko(e,t,o){const n=o.originalDelta.get(t);if(o.document.history.isUndoingDelta(n)){const t=o.document.history.getUndoneDelta(n),i=o.wasAffected.get(e),r=i.get(t);r!==void 0&&(o.insertBefore=r);}}function Go(e,t){const o=t.originalDelta.get(e),n=t.document.history;t.forceNotSticky=n.isUndoneDelta(o)||n.isUndoingDelta(o);}function $o(e,t){const o=t.document.history,n=t.originalDelta.get(e);t.forceWeakRemove=o.isUndoneDelta(n);}function Jo(e,t,o){o.wasAffected.get(e)||o.wasAffected.set(e,new Map);const n=o.originalDelta.get(t);let i=!!o.wasAffected.get(e).get(n);for(const n of e.operations){for(const e of t.operations)if(n instanceof Bu&&e instanceof Bu&&Qo(n,e)){i=!0;break}if(i)break}o.wasAffected.get(e).set(n,i);}function Qo(e,t){const o=e.targetPosition,n=t.sourcePosition,i=A(n.getParentPath(),o.getParentPath());return!(o.root!=n.root)&&'same'==i&&n.offset<o.offset}function Yo(e,t,o){delete o.insertBefore,delete o.forceNotSticky,delete o.forceWeakRemove;const n=o.wasAffected.get(e);o.wasAffected.delete(e);for(const i of t)o.wasAffected.set(i,new Map(n));}function Xo(e,t){let n=[],i=null,o;switch(e){case ep:case tp:for(const e of t)i=e instanceof Wu?new Qu:e instanceof zu?new tp:new ep,i.addOperation(e),n.push(i);return n;case Xu:case np:return i=new e,i.addOperation(t[0]),i.addOperation(t[1]),n=Xo(ep,t.slice(2)),[i].concat(n);case Zu:case ip:return n=Xo(ep,t.slice(0,-2)),i=new e,i.addOperation(t[t.length-2]),i.addOperation(t[t.length-1]),n.concat(i);case op:return i=t[0]instanceof Wu?new Qu:new op,i.addOperation(t[0]),[i];case Yu:for(o=0;o<t.length&&!!(t[o]instanceof Wu);o++);o==t.length?i=new Qu:(i=new Yu,0!=o&&t.unshift(t.splice(o,1)[0]));for(const e of t)i.addOperation(e);return[i];default:i=new e;for(const e of t)i.addOperation(e);return[i];}}function Zo(e,t){const o=e.clone(),n=o.operations[0];return n.oldRange&&(n.oldRange=n.oldRange.getTransformedByDelta(t)[0]),n.newRange&&(n.newRange=n.newRange.getTransformedByDelta(t)[0]),[o]}function en(e,t){function o(){const o=new pu(e.position.getShiftedBy(s),e.position.getShiftedBy(l)),i=new Mu(o,t.key,a,t.value,0);n.addOperation(i);}const n=new Yu,r=e.nodes;let a=r.getNode(0).getAttribute(t.key),s=0,l=r.getNode(0).offsetSize;for(let n=1;n<r.length;n++){const e=r.getNode(n),i=e.getAttribute(t.key);i!=a&&(a!=t.value&&o(),a=i,s=l),l+=e.offsetSize;}return o(),n}function tn(){const e=new Qu;return e.addOperation(new Wu(0)),e}function on(e,t,o,n){function i(){0===r.operations.length&&e.batch.addDelta(r);const n=new pu(l,d),i=n.root.document?s.version:null,m=new Mu(n,t,c,o,i);r.addOperation(m),a.applyOperation(m);}const r=new Yu,a=e.model,s=a.document;let l=n.start,d,c,m;for(const r of n)m=r.item.getAttribute(t),d&&c!=m&&(c!=o&&i(),l=d),d=r.nextPosition,c=m;d instanceof uu&&d!=l&&c!=o&&i();}function nn(e,t,o,n){const i=e.model,r=i.document,a=n.getAttribute(t);let s,l;if(a!=o){const d=n.root===n,c=d?new af:new Yu;if(e.batch.addDelta(c),d){const e=n.document?r.version:null;l=new Hu(n,t,a,o,e);}else{s=n.is('element')?new pu(uu.createBefore(n),uu.createFromParentAndOffset(n,0)):new pu(uu.createBefore(n),uu.createAfter(n));const e=s.root.document?r.version:null;l=new Mu(s,t,a,o,e);}c.addOperation(l),i.applyOperation(l);}}function rn(e,t,o,n,i){const r=e.model,a=r.document,s=new tf,l=new qu(t,o,n,r.markers,a.version,i);e.batch.addDelta(s),s.addOperation(l),r.applyOperation(l);}function an(e,t,o,n){let i;if(e.root.document){const o=n.document,r=new uu(o.graveyard,[0]);i=new zu(e,t,r,o.version);}else i=new sf(e,t);o.addOperation(i),n.applyOperation(i);}function sn(e,t){return!(e!==t)||!!(e instanceof lf&&t instanceof lf)}function ln(e){const t=[];for(const o of e)if(o.is('text'))for(let e=0;e<o.data.length;e++)t.push({name:'$text',attributes:new Map(o.getAttributes())});else t.push({name:o.name,attributes:new Map(o.getAttributes())});return t}function dn(e,t){const o=[];let n=0,i=0;for(const r of t)r.offset>n&&(o.push(...'e'.repeat(r.offset-n).split('')),i+=r.offset-n),'insert'==r.type?(o.push(...'i'.repeat(r.howMany).split('')),n=r.offset+r.howMany):'remove'==r.type?(o.push(...'r'.repeat(r.howMany).split('')),n=r.offset,i+=r.howMany):(o.push(...'a'.repeat(r.howMany).split('')),n=r.offset+r.howMany,i+=r.howMany);return i<e&&o.push(...'e'.repeat(e-i).split('')),o}function cn(e){const t=e.position&&'$graveyard'==e.position.root.rootName,o=e.range&&'$graveyard'==e.range.root.rootName;return!t&&!o}function mn(e){return!!e&&1==e.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e)}function un(e){return!!e&&1==e.length&&/[\ud800-\udbff]/.test(e)}function pn(e){return!!e&&1==e.length&&/[\udc00-\udfff]/.test(e)}function gn(e,t){return un(e.charAt(t-1))&&pn(e.charAt(t))}function fn(e,t){return mn(e.charAt(t))}function hn(e){const t=e.textNode;if(t){const o=t.data,n=e.offset-t.startOffset;return!gn(o,n)&&!fn(o,n)}return!0}function bn(){const e=new Set(['insert','move','remove','reinsert']);this.listenTo(this.root.document.model,'applyOperation',(t,o)=>{const n=o[0];!n.isDocumentOperation||e.has(n.type)&&kn.call(this,n);},{priority:'low'});}function kn(e){let t,o;'insert'==e.type?t=pu.createFromPositionAndShift(e.position,e.nodes.maxOffset):(t=pu.createFromPositionAndShift(e.getMovedRangeStart(),e.howMany),o=e.sourcePosition);const n=t.end.offset-t.start.offset;let i;switch(e.type){case'insert':const r='sticksToNext'==this.stickiness;i=this._getTransformedByInsertion(t.start,n,r);break;case'move':case'remove':case'reinsert':const a=pu.createFromPositionAndShift(o,n),s=a.containsPosition(this)||a.start.isEqual(this)&&'sticksToNext'==this.stickiness||a.end.isEqual(this)&&'sticksToPrevious'==this.stickiness;if(s)i=this._getCombined(o,t.start);else{const e='sticksToNext'==this.stickiness,r=t.start._getTransformedByInsertion(o,n);i=this._getTransformedByMove(o,r,n,e);}}if(!this.isEqual(i)){const e=uu.createFromPosition(this);this.path=i.path,this.root=i.root,this.fire('change',e);}}function _n(e,t,o){e.change((n)=>{o.isCollapsed||e.deleteContent(o);const i=new bf(e,n,o.anchor);let r;r=t.is('documentFragment')?t.getChildren():[t],i.handleNodes(r,{isFirst:!0,isLast:!0});const a=i.getSelectionRange();a?o instanceof wu?n.setSelection(a):o.setTo(a):Xm.warn('insertcontent-no-range: Cannot determine a proper selection range after insertion.');});}function wn(e,t,o={}){if(t.isCollapsed)return;const n=e.schema;e.change((e)=>{if(!o.doNotResetEntireContent&&Tn(n,t))return void An(e,t,n);const i=t.getFirstRange(),r=i.start,a=hf.createFromPosition(i.end);i.start.isTouching(i.end)||e.remove(i),o.leaveUnmerged||(vn(e,r,a),n.removeDisallowedAttributes(r.parent.getChildren(),e)),t instanceof wu?e.setSelection(r):t.setTo(r),yn(n,r)&&Cn(e,r,t),a.detach();});}function vn(e,t,o){const n=t.parent,i=o.parent;if(n!=i&&n.parent&&i.parent&&xn(t,o,e.model.schema)){for(t=uu.createAfter(n),o=uu.createBefore(i),o.isEqual(t)||e.insert(i,t),e.merge(t);o.parent.isEmpty;){const t=o.parent;o=uu.createBefore(t),e.remove(t);}vn(e,t,o);}}function yn(e,t){const o=e.checkChild(t,'$text'),n=e.checkChild(t,'paragraph');return!o&&n}function xn(e,t,o){const n=new pu(e,t);for(const i of n.getWalker())if(o.isLimit(i.item))return!1;return!0}function Cn(e,t,o){const n=e.createElement('paragraph');e.insert(n,t),o instanceof wu?e.setSelection(n,0):o.setTo(n,0);}function An(e,t){const o=e.model.schema.getLimitElement(t);e.remove(pu.createIn(o)),Cn(e,uu.createAt(o),t);}function Tn(e,t){const o=e.getLimitElement(t);if(!t.containsEntireContent(o))return!1;const n=t.getFirstRange();return n.start.parent!=n.end.parent&&e.checkChild(o,'paragraph')}function Pn(e,t,o={}){const n=e.schema,i='backward'!=o.direction,r=o.unit?o.unit:'character',a=t.focus,s=new cu({boundaries:In(a,i),singleCharacters:!0,direction:i?'forward':'backward'}),l={walker:s,schema:n,isForward:i,unit:r};for(let n;n=s.next();){if(n.done)return;const o=En(l,n.value);if(o)return void(t instanceof wu?e.change((e)=>{e.setSelectionFocus(o);}):t.setFocus(o))}}function En(e,t){if('text'==t.type)return'word'===e.unit?On(e.walker,e.isForward):Sn(e.walker,e.unit,e.isForward);if(t.type==(e.isForward?'elementStart':'elementEnd')){if(e.schema.isObject(t.item))return uu.createAt(t.item,e.isForward?'after':'before');if(e.schema.checkChild(t.nextPosition,'$text'))return t.nextPosition}else{if(e.schema.isLimit(t.item))return void e.walker.skip(()=>!0);if(e.schema.checkChild(t.nextPosition,'$text'))return t.nextPosition}}function Sn(e,t){const o=e.position.textNode;if(o){const n=o.data;for(let i=e.position.offset-o.startOffset;gn(n,i)||'character'==t&&fn(n,i);)e.next(),i=e.position.offset-o.startOffset;}return e.position}function On(e,t){let o=e.position.textNode;if(o)for(let n=e.position.offset-o.startOffset;!Rn(o.data,n,t)&&!Vn(o,n,t);){e.next();const i=t?e.position.nodeAfter:e.position.nodeBefore;if(i){const n=i.data.charAt(t?0:i.data.length-1);kf.includes(n)||(e.next(),o=e.position.textNode);}n=e.position.offset-o.startOffset;}return e.position}function In(e,t){const o=e.root,n=uu.createAt(o,t?'end':0);return t?new pu(e,n):new pu(n,e)}function Rn(e,t,o){const n=t+(o?0:-1);return kf.includes(e.charAt(n))}function Vn(e,t,o){return t===(o?e.endOffset:0)}function Fn(e,t){return e.change((e)=>{const o=e.createDocumentFragment(),n=t.getFirstRange();if(!n||n.isCollapsed)return o;const i=n.start.root,r=n.start.getCommonPath(n.end),a=i.getNodeByPath(r);let s=n.start.parent==n.end.parent?n:pu.createFromParentsAndOffsets(a,n.start.path[r.length],a,n.end.path[r.length]+1);const l=s.end.offset-s.start.offset;for(const t of s.getItems({shallow:!0}))t.is('textProxy')?e.appendText(t.data,t.getAttributes(),o):e.append(t._clone(!0),o);if(s!=n){const t=n._getTransformedByMove(s.start,uu.createAt(o,0),l)[0],i=new pu(uu.createAt(o),t.start),r=new pu(t.end,uu.createAt(o,'end'));Nn(r,e),Nn(i,e);}return o})}function Nn(e,t){const o=[];Array.from(e.getItems({direction:'backward'})).map((e)=>pu.createOn(e)).filter((t)=>{const o=(t.start.isAfter(e.start)||t.start.isEqual(e.start))&&(t.end.isBefore(e.end)||t.end.isEqual(e.end));return o}).forEach((e)=>{o.push(e.start.parent),t.remove(e);}),o.forEach((e)=>{for(let o=e;o.parent&&o.isEmpty;){const e=pu.createOn(o);o=o.parent,t.remove(e);}});}function Dn(e){e.document.registerPostFixer((t)=>Mn(t,e));}function Mn(e,t){const o=t.document.selection,n=t.schema,i=[];let r=!1;for(const a of o.getRanges()){const e=Bn(a,n);e?(i.push(e),r=!0):i.push(a);}if(r){const t=qn(i);e.setSelection(t,{backward:o.isBackward});}}function Bn(e,t){return e.isCollapsed?Ln(e,t):zn(e,t)}function Ln(e,t){const o=e.start,n=t.getNearestSelectionRange(o);if(!n)return null;const i=n.start;return o.isEqual(i)?null:i.nodeAfter&&t.isLimit(i.nodeAfter)?new pu(i,uu.createAfter(i.nodeAfter)):new pu(i)}function zn(e,t){if(e.isFlat)return null;const o=e.start,n=e.end,i=jn(o,t,'start'),r=jn(n,t,'end');return o.isEqual(i)&&n.isEqual(r)?null:new pu(i,r)}function jn(e,t,o){let n=e.parent,i=n;for(;t.isLimit(i)&&i.parent;)n=i,i=i.parent;return n===i?e:'start'===o?uu.createBefore(n):uu.createAfter(n)}function qn(e){const t=[];let o=e[0];t.push(o);for(const n of e)if(!n.isEqual(o)){if(n.isIntersecting(o)){const e=o.start.isBefore(n.start)?o.start:n.start,i=n.end.isAfter(o.end)?n.end:o.end,r=new pu(e,i);t.splice(t.indexOf(o),1,r),o=r;continue}o=n,t.push(n);}return t}function Wn(e,t){e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t;}function Un(e){if(!Ds(e.updateElement))throw new _s('attachtoform-missing-elementapi-interface: ElementApi interface is required.');const t=e.element;if(t&&'textarea'===t.tagName.toLowerCase()&&t.form){let o;const n=t.form,i=()=>e.updateElement();Ds(n.submit)&&(o=n.submit,n.submit=()=>{i(),o.apply(n);}),n.addEventListener('submit',i),e.on('destroy',()=>{n.removeEventListener('submit',i),o&&(n.submit=o);});}}function Hn(e){return(e+'').toLowerCase()}function Kn({origin:e,originKeystrokeHandler:t,originFocusTracker:o,toolbar:n,beforeFocus:i,afterBlur:r}){o.add(n.element),t.set('Alt+F10',(e,t)=>{o.isFocused&&!n.focusTracker.isFocused&&(i&&i(),n.focus(),t());}),n.keystrokes.set('Esc',(t,o)=>{n.focusTracker.isFocused&&(e.focus(),r&&r(),o());});}function Gn(e){return Array.isArray(e)?{items:e}:e?Object.assign({items:[]},e):{items:[]}}function $n(e){return e.every((e)=>'string'==typeof e)}function Jn(e){return!!e&&((e.value&&(e=e.value),Array.isArray(e))?e.some(Jn):!!(e instanceof Vf))}function Qn(e,t){return e.map((e)=>e instanceof Vf?e.getValue(t):e)}function Yn(e,t,{node:o}){let n=Qn(e,o);n=1==e.length&&e[0]instanceof Nf?n[0]:n.reduce(li,''),mi(n)?t.remove():t.set(n);}function Xn(e){return{set(t){e.textContent=t;},remove(){e.textContent='';}}}function Zn(e,t,o){return{set(n){e.setAttributeNS(o,t,n);},remove(){e.removeAttributeNS(o,t);}}}function ei(e,t){return{set(o){e.style[t]=o;},remove(){e.style[t]=null;}}}function ti(e){const t=If(e,(e)=>{if(e&&(e instanceof Vf||pi(e)||ui(e)||gi(e)))return e});return t}function oi(e){if('string'==typeof e?e=ri(e):e.text&&ai(e),e.on&&(e.eventListeners=ii(e.on),delete e.on),!e.text){e.attributes&&ni(e.attributes);const t=[];if(e.children)if(gi(e.children))t.push(e.children);else for(const o of e.children)pi(o)||ui(o)||Oe(o)?t.push(o):t.push(new Rf(o));e.children=t;}return e}function ni(e){for(const t in e)e[t].value&&(e[t].value=[].concat(e[t].value)),si(e,t);}function ii(e){for(const t in e)si(e,t);return e}function ri(e){return{text:[e]}}function ai(e){Array.isArray(e.text)||(e.text=[e.text]);}function si(e,t){Array.isArray(e[t])||(e[t]=[e[t]]);}function li(e,t){return mi(t)?e:mi(e)?t:`${e} ${t}`}function di(e,t){for(const o in t)e[o]?e[o].push(...t[o]):e[o]=t[o];}function ci(e,t){if(t.attributes&&(!e.attributes&&(e.attributes={}),di(e.attributes,t.attributes)),t.eventListeners&&(!e.eventListeners&&(e.eventListeners={}),di(e.eventListeners,t.eventListeners)),t.text&&e.text.push(...t.text),t.children&&t.children.length){if(e.children.length!=t.children.length)throw new _s('ui-template-extend-children-mismatch: The number of children in extended definition does not match.');let o=0;for(const n of t.children)ci(e.children[o++],n);}}function mi(e){return!e&&0!==e}function ui(e){return e instanceof Bf}function pi(e){return e instanceof Rf}function gi(e){return e instanceof Of}function fi(){return{children:[],bindings:[],attributes:{}}}function hi(e){return'class'==e||'style'==e}function bi(e){return(t)=>t+e}function ki(e){return!!(e.focus&&'none'!=gm.window.getComputedStyle(e.element).display)}function _i(e){return e.bindTemplate.to((t)=>{t.target===e.element&&t.preventDefault();})}function wi(e){return e instanceof HTMLTextAreaElement?e.value:e.innerHTML}function vi(e){const t=e.files?Array.from(e.files):[],o=e.items?Array.from(e.items):[];return t.length?t:o.filter((e)=>'file'===e.kind).map((e)=>e.getAsFile())}function yi(e,t){const o=t.target.ownerDocument,n=t.clientX,i=t.clientY;let r;return o.caretRangeFromPoint&&o.caretRangeFromPoint(n,i)?r=o.caretRangeFromPoint(n,i):t.rangeParent&&(r=o.createRange(),r.setStart(t.rangeParent,t.rangeOffset),r.collapse(!0)),r?e.domConverter.domRangeToView(r):e.document.selection.getFirstRange()}function xi(e){return e=e.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>').replace(/^\s/,'&nbsp;').replace(/\s$/,'&nbsp;').replace(/\s\s/g,' &nbsp;'),-1<e.indexOf('</p><p>')&&(e=`<p>${e}</p>`),e}function Ci(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1==t.length?' ':t)}function Ai(e){let t='';if(e.is('text')||e.is('textProxy'))t=e.data;else if(e.is('img')&&e.hasAttribute('alt'))t=e.getAttribute('alt');else{let o=null;for(const n of e.getChildren()){const e=Ai(n);o&&(o.is('containerElement')||n.is('containerElement'))&&(mh.includes(o.name)||mh.includes(n.name)?t+='\n':t+='\n\n'),t+=e,o=n;}}return t}function Ti(e){e.return=!1,e.stop();}function Pi(e,t,o,n){const i=o.isCollapsed,r=o.getFirstRange(),a=r.start.parent,s=r.end.parent;if(n.isLimit(a)||n.isLimit(s))return void(i||a!=s||e.deleteContent(o));if(i)Ei(t,o,r.start);else{const n=!(r.start.isAtStart&&r.end.isAtEnd);e.deleteContent(o,{leaveUnmerged:n}),n&&(a==s?Ei(t,o,o.focus):t.setSelection(s,0));}}function Ei(e,t,o){const n=o.parent,i=new n.constructor(n.name,n.getAttributes());o.isAtEnd?e.insert(i,o.parent,'after'):o.isAtStart?e.insert(i,o.parent,'before'):e.split(o),e.setSelection(o.parent.nextSibling,0);}function Si(e,t){if(1<t.rangeCount)return!1;const o=t.anchor;if(!o||!e.checkChild(o,'softBreak'))return!1;const n=t.getFirstRange(),i=n.start.parent,r=n.end.parent;return!((Ri(i,e)||Ri(r,e))&&i!==r)}function Oi(e,t,o){const n=o.isCollapsed,i=o.getFirstRange(),r=i.start.parent,a=i.end.parent;if(n)Ii(t,i.end);else{const n=!(i.start.isAtStart&&i.end.isAtEnd);e.deleteContent(o,{leaveUnmerged:n}),r==a?Ii(t,o.focus):n&&t.setSelection(a,0);}}function Ii(e,t){const o=e.createElement('softBreak');e.insert(o,t),e.setSelection(o,'after');}function Ri(e,t){return!e.is('rootElement')&&(t.isLimit(e)||Ri(e.parent,t))}function Vi(e,t){function o(){a&&(i.push(a),a=null);}function n(e){return a&&a.type==e}const i=[];let r=0,a;return e.forEach((e)=>{'equal'==e?(o(),r++):'insert'==e?(n('insert')?a.values.push(t[r]):(o(),a={type:'insert',index:r,values:[t[r]]}),r++):n('delete')?a.howMany++:(o(),a={type:'delete',index:r,howMany:1});}),o(),i}function Fi(e){return!!e.ctrlKey||xh.includes(e.keyCode)}function Ni(e,t){return e instanceof Qd&&t instanceof Qd?e.data===t.data:e===t}function Di(e){if(1==e.newChildren.length-e.oldChildren.length){const t=Te(e.oldChildren,e.newChildren,Ni),o=Vi(t,e.newChildren);if(!(1<o.length)){const e=o[0];return e.values[0]instanceof Qd?e:void 0}}}function Mi(e){const t=e.map((e)=>e.node).reduce((e,t)=>e.getCommonAncestor(t,{includeSelf:!0}));return t?t.getAncestors({includeSelf:!0,parentFirst:!0}).find((e)=>e.is('containerElement')||e.is('rootElement')):void 0}function Bi(e){if(0==e.length)return!1;for(const t of e)if('children'===t.type&&!Di(t))return!0;return!1}function Li(e){return e.every((e)=>e.is('text')||e.is('softBreak'))}function zi(e){let t=null,o=null;for(let n=0;n<e.length;n++){const i=e[n];'equal'!=i&&(t=null===t?n:t,o=n);}let n=0,r=0;for(let a=t;a<=o;a++)'insert'!=e[a]&&n++,'delete'!=e[a]&&r++;return{insertions:r,deletions:n,firstChangeAt:t}}function ji(e,t){const o=qi([e],t);o.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let n=1;n<o.length;n++){const e=o[n-1],t=o[n];e.end.isTouching(t.start)&&(e.end=t.end,o.splice(n,1),n--);}return o}function qi(e,t){for(const o of t)for(const t of o.operations)for(let o=0;o<e.length;o++){let n;switch(t.type){case'insert':n=e[o]._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0);break;case'move':case'remove':case'reinsert':n=e[o]._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!0);}n&&(e.splice(o,1,...n),o=o+n.length-1);}return e}function Wi(){let e=Ui(Xh);return e&&e.length==Zh||(e=Ki(Zh),Hi(Xh,e)),e}function Ui(e){e=e.toLowerCase();const t=document.cookie.split(';');for(const o of t){const t=o.split('='),n=decodeURIComponent(t[0].trim().toLowerCase());if(n===e)return decodeURIComponent(t[1])}return null}function Hi(e,t){document.cookie=encodeURIComponent(e)+'='+encodeURIComponent(t)+';path=/';}function Ki(e){let t='';const o=new Uint8Array(e);window.crypto.getRandomValues(o);for(let n=0;n<o.length;n++){const e=eb.charAt(o[n]%eb.length);t+=.5<Math.random()?e.toUpperCase():e;}return t}function Gi(e){return Array.from(e.getChildren()).reduce((e,t)=>e+t.data,'')}function $i(e,t){return t.filter((e)=>e[0]!==void 0&&e[1]!==void 0).map((t)=>pu.createFromParentsAndOffsets(e,t[0],e,t[1]))}function Ji(e){const t=e.next();return t.done?null:t.value}function Qi(e){return'blockQuote'==e.parent.name?e.parent:null}function Yi(e){let t=0,o;const n=[];for(;t<e.length;){const i=e[t],r=e[t+1];o||(o=uu.createBefore(i)),r&&i.nextSibling==r||(n.push(new pu(o,uu.createAfter(i))),o=null),t++;}return n}function Xi(e,t){const o=e.checkChild(t.parent,'blockQuote'),n=e.checkChild(['$root','blockQuote'],t);return o&&n}function Zi(e,t=512){try{const o=e.match(Sb)[1],n=atob(e.replace(Sb,'')),i=[];for(let e=0;e<n.length;e+=t){const o=n.slice(e,e+t),r=Array(o.length);for(let e=0;e<o.length;e++)r[e]=o.charCodeAt(e);i.push(new Uint8Array(r));}return new Blob(i,{type:o})}catch(e){throw new Error('Problem with decoding Base64 image data.')}}function er(e){if('string'!=typeof e)return!1;const t=e.match(Sb);return!!(t&&t.length)}function tr(){function e(e,t,o){if(o.consumable.test(t.viewItem,{name:!0,classes:'image'})){const e=Array.from(t.viewItem.getChildren()).find((e)=>e.is('img'));if(e&&e.hasAttribute('src')&&o.consumable.test(e,{name:!0})){const n=o.convertItem(e,t.modelCursor),i=Ji(n.modelRange.getItems());i&&(o.convertChildren(t.viewItem,uu.createAt(i)),t.modelRange=n.modelRange,t.modelCursor=n.modelCursor);}}}return(t)=>{t.on('element:figure',e);}}function or(){function e(e,t,o){if(o.consumable.consume(t.item,e.name)){const e=o.writer,n=o.mapper.toViewElement(t.item),i=n.getChild(0);if(null===t.attributeNewValue){const o=t.attributeOldValue;o.data&&(e.removeAttribute('srcset',i),e.removeAttribute('sizes',i),o.width&&e.removeAttribute('width',i));}else{const o=t.attributeNewValue;o.data&&(e.setAttribute('srcset',o.data,i),e.setAttribute('sizes','100vw',i),o.width&&e.setAttribute('width',o.width,i));}}}return(t)=>{t.on('attribute:srcset:image',e);}}function nr(e){function t(e,t,o){if(o.consumable.consume(t.item,e.name)){const e=o.writer,n=o.mapper.toViewElement(t.item),i=n.getChild(0);null===t.attributeNewValue?e.removeAttribute(t.attributeKey,i):e.setAttribute(t.attributeKey,t.attributeNewValue,i);}}return(o)=>{o.on(`attribute:${e}:image`,t);}}function ir(e,t){return e&&t&&e.priority==t.priority&&ar(e.classes)==ar(t.classes)}function rr(e,t){if(e.priority>t.priority)return!0;return!(e.priority<t.priority)&&ar(e.classes)>ar(t.classes)}function ar(e){return Array.isArray(e)?e.sort().join(','):e}function sr(e){return!!e.getCustomProperty(Mb)}function lr(e,t,o={}){function n(e){return Array.isArray(e)?e:[e]}return t.setAttribute('contenteditable','false',e),t.addClass(Lb,e),t.setCustomProperty(Mb,!0,e),e.getFillerOffset=pr,o.label&&cr(e,o.label,t),dr(e,t,(e,t,o)=>o.addClass(n(t.classes),e),(e,t,o)=>o.removeClass(n(t.classes),e)),e}function dr(e,t,o,n){const i=new Db;i.on('change:top',(t,i)=>{i.oldDescriptor&&n(e,i.oldDescriptor,i.writer),i.newDescriptor&&o(e,i.newDescriptor,i.writer);}),t.setCustomProperty('addHighlight',(e,t,o)=>i.add(t,o),e),t.setCustomProperty('removeHighlight',(e,t,o)=>i.remove(t,o),e);}function cr(e,t,o){o.setCustomProperty(Bb,t,e);}function mr(e){const t=e.getCustomProperty(Bb);return t?'function'==typeof t?t():t:''}function ur(e,t){return t.addClass(['ck-editor__editable','ck-editor__nested-editable'],e),t.setAttribute('contenteditable',e.isReadOnly?'false':'true',e),e.on('change:isReadOnly',(o,n,i)=>{t.setAttribute('contenteditable',i?'false':'true',e);}),e.on('change:isFocused',(o,n,i)=>{i?t.addClass('ck-editor__nested-editable_focused',e):t.removeClass('ck-editor__nested-editable_focused',e);}),e}function pr(){return null}function gr(e,t,o){return t.setCustomProperty(jb,!0,e),lr(e,t,{label:function(){const t=e.getChild(0),n=t.getAttribute('alt');return n?`${n} ${o}`:o}})}function fr(e){return!!e.getCustomProperty(jb)&&sr(e)}function hr(e){const t=e.getSelectedElement();return!!(t&&fr(t))}function br(e){return e instanceof du&&'image'==e.name}function kr(e){const t=e.createEmptyElement('img'),o=e.createContainerElement('figure',{class:'image'});return e.insert(Wc.createAt(o),t),o}function _r(e){return e==nm.arrowright||e==nm.arrowleft||e==nm.arrowup||e==nm.arrowdown}function wr(e){return te(e)==Kb}function vr(e){for(;e;){if(e instanceof Lc&&!(e instanceof jc))return!0;e=e.parent;}return!1}function yr({emitter:e,activator:t,callback:o,contextElements:n}){e.listenTo(document,'mousedown',(e,{target:i})=>{if(t()){for(const e of n)if(e.contains(i))return;o();}});}function xr({view:e}){e.listenTo(e.element,'submit',(t,o)=>{o.preventDefault(),e.fire('submit');},{useCapture:!0});}function Cr(e){for(;e&&'html'!=e.tagName.toLowerCase();){if('static'!=gm.window.getComputedStyle(e).position)return e;e=e.parentElement;}return null}function Ar({element:e,target:t,positions:o,limiter:n,fitInViewport:i}){Ds(t)&&(t=t()),Ds(n)&&(n=n());const r=Cr(e.parentElement),a=new ou(e),s=new ou(t);let l,d;if(!n&&!i)[d,l]=Tr(o[0],s,a);else{const e=n&&new ou(n).getVisible(),t=i&&new ou(gm.window);[d,l]=Pr(o,s,a,e,t)||Tr(o[0],s,a);}let{left:c,top:m}=Er(l);if(r){const e=Er(new ou(r)),t=Xe(r);c-=e.left,m-=e.top,c+=r.scrollLeft,m+=r.scrollTop,c-=t.left,m-=t.top;}return{left:c,top:m,name:d}}function Tr(e,t,o){const{left:n,top:i,name:r}=e(t,o);return[r,o.clone().moveTo(n,i)]}function Pr(e,t,o,n,i){let r=0,a=0,s,l;const d=o.getArea();return e.some((e)=>{function c(){a=g,r=p,s=u,l=m;}const[m,u]=Tr(e,t,o);let p,g;if(n)if(i){const e=n.getIntersection(i);p=e?e.getIntersectionArea(u):0;}else p=n.getIntersectionArea(u);return i&&(g=i.getIntersectionArea(u)),i&&!n?g>a&&c():!i&&n?p>r&&c():g>a&&p>=r?c():g>=a&&p>r&&c(),p===d}),s?[l,s]:null}function Er({left:e,top:t}){const{scrollX:o,scrollY:n}=gm.window;return{left:e+o,top:t+n}}function Sr(e){return fm(e)?e:Ye(e)?e.commonAncestorContainer:'function'==typeof e?Sr(e()):null}function Or(e,t){return e.top-t.height-mk.arrowVerticalOffset}function Ir(e){return e.bottom+mk.arrowVerticalOffset}function Rr(e){const t=e.plugins.get('ContextualBalloon');if(hr(e.editing.view.document.selection)){const o=Vr(e);t.updatePosition(o);}}function Vr(e){const t=e.editing.view,o=mk.defaultPositions;return{target:t.domConverter.viewToDom(t.document.selection.getSelectedElement()),positions:[o.northArrowSouth,o.northArrowSouthWest,o.northArrowSouthEast,o.southArrowNorth,o.southArrowNorthWest,o.southArrowNorthEast]}}function Fr(e){const t=/^image\/(jpeg|png|gif|bmp)$/;return t.test(e.type)}function Nr(e){const t=e.getSelectedElement();if(t)return uu.createAfter(t);const o=e.getSelectedBlocks().next().value;if(o){if(o.isEmpty)return uu.createAt(o);const t=uu.createAfter(o);return e.focus.isTouching(t)?t:uu.createBefore(o)}return e.focus}function Dr(e,t){e.hasClass('ck-appear')||t.addClass('ck-appear',e);}function Mr(e,t){t.removeClass('ck-appear',e);}function Br(e,t,o){t.hasClass('ck-image-upload-placeholder')||o.addClass('ck-image-upload-placeholder',t),t.hasClass('ck-infinite-progress')||o.addClass('ck-infinite-progress',t);const n=t.getChild(0);n.getAttribute('src')!==e&&o.setAttribute('src',e,n);}function Lr(e,t){e.hasClass('ck-image-upload-placeholder')&&t.removeClass('ck-image-upload-placeholder',e),e.hasClass('ck-infinite-progress')&&t.removeClass('ck-infinite-progress',e);}function zr(e,t,o,n){const i=Wr(t);t.insert(Wc.createAt(e,'end'),i),o.on('change:uploadedPercent',(e,t,o)=>{n.change((e)=>{e.setStyle('width',o+'%',i);});});}function jr(e,t){const o=Ur(e);o&&t.remove(Uc.createOn(o));}function qr(e,t,o){const n=new im('div',{class:'ck-image-upload-complete-icon'});t.insert(Wc.createAt(e,'end'),n),setTimeout(()=>{o.change((e)=>e.remove(Uc.createOn(n)));},3e3);}function Wr(e){const t=e.createUIElement('div',{class:'ck-progress-bar'});return e.setCustomProperty(Rk,!0,t),t}function Ur(e){for(const t of e.getChildren())if(t.getCustomProperty(Rk))return t}function Hr(e){return Array.from(e.types).includes('text/html')&&''!==e.getData('text/html')}function Kr(e,t){return t.checkChild(e.parent,'paragraph')&&!t.isObject(e)}function Gr(e,t,o){const n=o.writer.createElement('paragraph');return o.writer.insert(n,t),o.convertItem(e,uu.createAt(n))}function $r(e,t,o){const n=new Ou(t);return!!o.checkChild(n,'paragraph')&&!!o.checkChild(n.push('paragraph'),e)}function Jr(e,t,o){return o.checkChild(e.parent,t)&&!o.isObject(e)}function Qr(e,t=Qk){const o=new t(e),n=new Uk(e),i=new Gk(e,o,n);return o.bind('isEnabled').to(i),o instanceof Qk?o.bind('isOn').to(i,'isOpen'):o.arrowView.bind('isOn').to(i,'isOpen'),Xr(i),i}function Yr(e,t){const o=e.locale,n=e.listView=new Zk(o);n.items.bindTo(t).using((e)=>{let t;return e.isSeparator?t=new t_(o):(t=new e_(o),t.bind(...Object.keys(e)).to(e)),t}),e.panelView.children.add(n),n.items.delegate('execute').to(e);}function Xr(e){Zr(e),ea(e),ta(e);}function Zr(e){e.on('render',()=>{yr({emitter:e,activator:()=>e.isOpen,callback:()=>{e.isOpen=!1;},contextElements:[e.element]});});}function ea(e){e.on('execute',()=>{e.isOpen=!1;});}function ta(e){e.keystrokes.set('arrowdown',(t,o)=>{e.isOpen&&(e.panelView.focus(),o());}),e.keystrokes.set('arrowup',(t,o)=>{e.isOpen&&(e.panelView.focusLast(),o());});}function oa(e){const o=e.t,t={Paragraph:o('s'),"Heading 1":o('t'),"Heading 2":o('u'),"Heading 3":o('v')};return e.config.get('heading.options').map((e)=>{const o=t[e.title];return o&&o!=e.title&&(e=Object.assign({},e,{title:o})),e})}function na(e,t,o,n){const i=e.document;u_.has(i)||(u_.set(i,new Map),i.registerPostFixer((e)=>ia(i,e))),u_.get(i).set(t,{placeholderText:o,checkFunction:n}),e.render();}function ia(e,t){const o=u_.get(e);let n=!1;for(const[i,r]of o)ra(t,i,r)&&(n=!0);return n}function ra(e,t,o){const n=t.document,i=o.placeholderText;let r=!1;if(!n)return!1;t.getAttribute('data-placeholder')!==i&&(e.setAttribute('data-placeholder',i,t),r=!0);const a=n.selection,s=a.anchor,l=o.checkFunction;if(l&&!l())return t.hasClass('ck-placeholder')&&(e.removeClass('ck-placeholder',t),r=!0),r;const d=!Array.from(t.getChildren()).some((e)=>!e.is('uiElement'));return!n.isFocused&&d?(t.hasClass('ck-placeholder')||(e.addClass('ck-placeholder',t),r=!0),r):(d&&s&&s.parent!==t?!t.hasClass('ck-placeholder')&&(e.addClass('ck-placeholder',t),r=!0):t.hasClass('ck-placeholder')&&(e.removeClass('ck-placeholder',t),r=!0),r)}function aa(e,t){return(o)=>{const n=o.createEditableElement('figcaption');return o.setCustomProperty(p_,!0,n),na(e,n,t),ur(n,o)}}function sa(e){for(const t of e.getChildren())if(t instanceof du&&'caption'==t.name)return t;return null}function la(e){const t=e.parent;return'figcaption'==e.name&&t&&'figure'==t.name&&t.hasClass('image')?{name:!0}:null}function da(e,t=!0){return(o,n,i)=>{const r=n.item;if((r.childCount||t)&&br(r.parent)){if(!i.consumable.consume(n.item,'insert'))return;const t=i.mapper.toViewElement(n.range.start.parent),o=e(i.writer),a=i.writer;r.childCount||a.addClass('ck-hidden',o),ca(o,n.item,t,i);}}}function ca(e,t,o,n){const i=Wc.createAt(o,'end');n.writer.insert(i,e),n.mapper.bindElements(t,e);}function ma(e){const t=e.getAncestors({includeSelf:!0}),o=t.find((e)=>'caption'==e.name);return o&&o.parent&&'image'==o.parent.name?o:null}function ua(e,t){return!(e.childCount||e.hasClass('ck-hidden'))&&(t.addClass('ck-hidden',e),!0)}function pa(e,t){return!!e.hasClass('ck-hidden')&&(t.removeClass('ck-hidden',e),!0)}function ga(e){return(t,o,n)=>{if(n.consumable.consume(o.item,t.name)){const t=ha(o.attributeNewValue,e),i=ha(o.attributeOldValue,e),r=n.mapper.toViewElement(o.item),a=n.writer;i&&a.removeClass(i.className,r),t&&a.addClass(t.className,r);}}}function fa(e){const t=e.filter((e)=>!e.isDefault);return(e,o,n)=>{if(o.modelRange){const e=o.viewItem,i=Ji(o.modelRange.getItems());if(n.schema.checkAttribute(i,'imageStyle'))for(const o of t)n.consumable.consume(e,{classes:o.className})&&n.writer.setAttribute('imageStyle',o.name,i);}}}function ha(e,t){for(const o of t)if(o.name===e)return o}function ba(e=[]){return e.map(ka).map((e)=>Object.assign({},e))}function ka(e){if('string'==typeof e){const t=e;P_[t]?e=Object.assign({},P_[t]):(Xm.warn('image-style-not-found: There is no such image style of given name.',{name:t}),e={name:t});}else if(P_[e.name]){const t=P_[e.name],o=Object.assign({},e);for(const n in t)e.hasOwnProperty(n)||(o[n]=t[n]);e=o;}return'string'==typeof e.icon&&E_[e.icon]&&(e.icon=E_[e.icon]),e}function _a(e,t){for(const o of e)t[o.title]&&(o.title=t[o.title]);return e}function wa(e,t){return new pu(va(e,t,!0),va(e,t,!1))}function va(e,t,o){let n=e.textNode||(o?e.nodeBefore:e.nodeAfter),i=null;for(;n&&n.getAttribute('linkHref')==t;)i=n,n=o?n.previousSibling:n.nextSibling;return i?uu.createAt(i,o?'before':'after'):e}function ya(e){return e.is('attributeElement')&&!!e.getCustomProperty(M_)}function xa(e,t){const o=t.createAttributeElement('a',{href:e},{priority:5});return t.setCustomProperty(M_,!0,o),o}function Ca(e){return e+='',Aa(e)?e:'#'}function Aa(e){const t=e.replace(B_,'');return t.match(L_)}function Ta(e,t,o,n){const i=new z_(t,o,n),r=t.document.selection;o.listenTo(e.document,'keydown',(e,t)=>{if(!r.isCollapsed)return;if(t.shiftKey||t.altKey||t.ctrlKey)return;const o=t.keyCode==nm.arrowright,n=t.keyCode==nm.arrowleft;if(!o&&!n)return;const a=r.getFirstPosition();let s;s=o?i.handleForwardMovement(a,t):i.handleBackwardMovement(a,t),s&&e.stop();},{priority:xs.get('high')+1});}function Pa(e,t){return Ea(e,t)||Sa(e,t)}function Ea(e,t){const{nodeBefore:o,nodeAfter:n}=e,i=!!o&&o.hasAttribute(t),r=!!n&&n.hasAttribute(t);return r&&(!i||o.getAttribute(t)!==n.getAttribute(t))}function Sa(e,t){const{nodeBefore:o,nodeAfter:n}=e,i=!!o&&o.hasAttribute(t),r=!!n&&n.hasAttribute(t);return i&&(!r||o.getAttribute(t)!==n.getAttribute(t))}function Oa(e,t){const{nodeBefore:o,nodeAfter:n}=e,i=!!o&&o.hasAttribute(t),r=!!n&&n.hasAttribute(t);return r&&i?n.getAttribute(t)!==o.getAttribute(t):void 0}function Ia(e,t){return Pa(e.getShiftedBy(-1),t)}function Ra(e){return e.getAncestors().find((e)=>ya(e))}function Va(e,t,o){const n=t?e[0]:e[e.length-1];if(n.is('listItem'))for(let i=n[t?'previousSibling':'nextSibling'],r=n.getAttribute('listIndent');i&&i.is('listItem')&&i.getAttribute('listIndent')>=o;)r>i.getAttribute('listIndent')&&(r=i.getAttribute('listIndent')),i.getAttribute('listIndent')==r&&e[t?'unshift':'push'](i),i=i[t?'previousSibling':'nextSibling'];}function Fa(e,t){return t.checkChild(e.parent,'listItem')&&!t.isObject(e)}function Na(e){const t=e.createContainerElement('li');return t.getFillerOffset=Da,t}function Da(){const e=!this.isEmpty&&('ul'==this.getChild(0).name||'ol'==this.getChild(0).name);return this.isEmpty||e?0:null}function Ma(e,t,o){const n=o.consumable;if(n.test(t.item,'insert')&&n.test(t.item,'attribute:listType')&&n.test(t.item,'attribute:listIndent')){n.consume(t.item,'insert'),n.consume(t.item,'attribute:listType'),n.consume(t.item,'attribute:listIndent');const e=t.item,i=Qa(e,o);Za(e,i,o);}}function Ba(e,t,o){const n=o.mapper.toViewPosition(t.position).getLastMatchingPosition((e)=>!e.item.is('li')),i=n.nodeAfter,r=o.writer;r.breakContainer(Wc.createBefore(i)),r.breakContainer(Wc.createAfter(i));const a=i.parent,s=a.previousSibling,l=Uc.createOn(a),d=r.remove(l);s&&s.nextSibling&&Xa(r,s,s.nextSibling);const c=o.mapper.toModelElement(i);es(c.getAttribute('listIndent')+1,t.position,l.start,i,o);for(const n of Uc.createIn(d).getItems())o.mapper.unbindViewElement(n);e.stop();}function La(e,t,o){if(!o.consumable.consume(t.item,'attribute:listType'))return;const n=o.mapper.toViewElement(t.item),i=o.writer;i.breakContainer(Wc.createBefore(n)),i.breakContainer(Wc.createAfter(n));let r=n.parent;const a='numbered'==t.attributeNewValue?'ol':'ul';r=i.rename(r,a),Xa(i,r,r.nextSibling),Xa(i,r.previousSibling,r);for(const n of t.item.getChildren())o.consumable.consume(n,'insert');}function za(e,t,o){if(o.consumable.consume(t.item,'attribute:listIndent')){const e=o.mapper.toViewElement(t.item),n=o.writer;n.breakContainer(Wc.createBefore(e)),n.breakContainer(Wc.createAfter(e));const i=e.parent,r=i.previousSibling,a=Uc.createOn(i);n.remove(a),r&&r.nextSibling&&Xa(n,r,r.nextSibling),es(t.attributeOldValue+1,t.range.start,a.start,e,o),Za(t.item,e,o);for(const e of t.item.getChildren())o.consumable.consume(e,'insert');}}function ja(e,t,o){if('listItem'!=t.item.name){let e=o.mapper.toViewPosition(t.range.start);const n=o.writer,r=[];for(;('ul'==e.parent.name||'ol'==e.parent.name)&&(e=n.breakContainer(e),'li'==e.parent.name);){const t=e,o=Wc.createAt(e.parent,'end');if(!t.isEqual(o)){const e=n.remove(new Uc(t,o));r.push(e);}e=Wc.createAfter(e.parent);}if(0<r.length){for(let t=0;t<r.length;t++){const o=e.nodeBefore,i=n.insert(e,r[t]);if(e=i.end,0<t){const t=Xa(n,o,o.nextSibling);t&&t.parent==o&&e.offset--;}}Xa(n,e.nodeBefore,e.nodeAfter);}}}function qa(e,t,o){const n=o.mapper.toViewPosition(t.position),i=n.nodeBefore,r=n.nodeAfter;Xa(o.writer,i,r);}function Wa(e,t,o){if(o.consumable.consume(t.viewItem,{name:!0})){const e=o.writer,n=this.conversionApi.store,i=e.createElement('listItem');n.indent=n.indent||0,e.setAttribute('listIndent',n.indent,i);const r=t.viewItem.parent&&'ol'==t.viewItem.parent.name?'numbered':'bulleted';e.setAttribute('listType',r,i),n.indent++;const a=o.splitToAllowedParent(i,t.modelCursor);if(!a)return;e.insert(i,a.position);let s=uu.createAfter(i);for(const e of t.viewItem.getChildren())'ul'==e.name||'ol'==e.name?s=o.convertItem(e,s).modelCursor:o.convertItem(e,uu.createAt(i,'end'));n.indent--,t.modelRange=new pu(t.modelCursor,s),t.modelCursor=a.cursorParent?uu.createAt(a.cursorParent):t.modelRange.end;}}function Ua(e,t,o){if(o.consumable.test(t.viewItem,{name:!0})){const e=Array.from(t.viewItem.getChildren());for(const t of e)t.is('li')||t._remove();}}function Ha(e,t,o){if(o.consumable.test(t.viewItem,{name:!0})){if(0===t.viewItem.childCount)return;const e=[...t.viewItem.getChildren()];let o=!1,n=!0;for(const t of e)!o||t.is('ul')||t.is('ol')||t._remove(),t.is('text')?(n&&(t._data=t.data.replace(/^\s+/,'')),(!t.nextSibling||t.nextSibling.is('ul')||t.nextSibling.is('ol'))&&(t._data=t.data.replace(/\s+$/,''))):(t.is('ul')||t.is('ol'))&&(o=!0),n=!1;}}function Ka(e,t){if(!t.isPhantom){const e=t.modelPosition.nodeBefore;if(e&&e.is('listItem')){const o=t.mapper.toViewElement(e),n=o.getAncestors().find((e)=>e.is('ul')||e.is('ol')),i=new qc({startPosition:Wc.createAt(o,0)});for(const e of i)if('elementStart'==e.type&&e.item.is('li')){t.viewPosition=e.previousPosition;break}else if('elementEnd'==e.type&&e.item==n){t.viewPosition=e.nextPosition;break}}}}function Ga(e,t){const o=t.viewPosition,n=o.parent,i=t.mapper;if('ul'==n.name||'ol'==n.name){if(!o.isAtEnd){const e=i.toModelElement(o.nodeAfter);t.modelPosition=uu.createBefore(e);}else{const e=i.toModelElement(o.nodeBefore),n=i.getModelLength(o.nodeBefore);t.modelPosition=uu.createBefore(e).getShiftedBy(n);}e.stop();}else if('li'==n.name&&o.nodeBefore&&('ul'==o.nodeBefore.name||'ol'==o.nodeBefore.name)){const r=i.toModelElement(n);let a=1,s=o.nodeBefore;for(;s&&(s.is('ul')||s.is('ol'));)a+=i.getModelLength(s),s=s.previousSibling;t.modelPosition=uu.createBefore(r).getShiftedBy(a),e.stop();}}function $a(e,t){function o(e){const t=e.nodeBefore;if(!t||!t.is('listItem')){const t=e.nodeAfter;t&&t.is('listItem')&&a.set(t,t);}else{let o=t;if(a.has(o))return;for(;o.previousSibling&&o.previousSibling.is('listItem');)if(o=o.previousSibling,a.has(o))return;a.set(e.nodeBefore,o);}}function n(e){for(let o=0,n=null;e&&e.is('listItem');){const i=e.getAttribute('listIndent');if(i>o){let r;null===n?(n=i-o,r=o):(n>i&&(n=i),r=i-n),t.setAttribute('listIndent',r,e),s=!0;}else n=null,o=e.getAttribute('listIndent')+1;e=e.nextSibling;}}function i(e){for(let o=[],n=null;e&&e.is('listItem');){const i=e.getAttribute('listIndent');if(n&&n.getAttribute('listIndent')>i&&(o=o.slice(0,i+1)),0!=i)if(o[i]){const n=o[i];e.getAttribute('listType')!=n&&(t.setAttribute('listType',n,e),s=!0);}else o[i]=e.getAttribute('listType');n=e,e=e.nextSibling;}}const r=e.document.differ.getChanges(),a=new Map;let s=!1;for(const n of r)if('insert'==n.type&&'listItem'==n.name)o(n.position);else if('insert'==n.type&&'listItem'!=n.name){if('$text'!=n.name){const e=n.position.nodeAfter;e.hasAttribute('listIndent')&&(t.removeAttribute('listIndent',e),s=!0),e.hasAttribute('listType')&&(t.removeAttribute('listType',e),s=!0);}const e=n.position.getShiftedBy(n.length);o(e);}else'remove'==n.type&&'listItem'==n.name?o(n.position):'attribute'==n.type&&'listIndent'==n.attributeKey?o(n.range.start):'attribute'==n.type&&'listType'==n.attributeKey&&o(n.range.start);for(const o of a.values())n(o),i(o);return s}function Ja(e,[t,o]){let n=t.is('documentFragment')?t.getChild(0):t;if(n&&n.is('listItem')){const e=o.getFirstPosition();let t=null;if(e.parent.is('listItem')?t=e.parent:e.nodeBefore&&e.nodeBefore.is('listItem')&&(t=e.nodeBefore),t){const e=t.getAttribute('listIndent');if(0<e)for(;n&&n.is('listItem');)n._setAttribute('listIndent',n.getAttribute('listIndent')+e),n=n.nextSibling;}}}function Qa(e,t){const o=t.mapper,n=t.writer,i='numbered'==e.getAttribute('listType')?'ol':'ul',r=Na(n),a=n.createContainerElement(i,null);return n.insert(Wc.createAt(a),r),o.bindElements(e,r),r}function Ya(e,t){const o=!!t.sameIndent,n=!!t.smallerIndent,i=e instanceof du?e.getAttribute('listIndent'):t.listIndent;for(let r=e instanceof du?e.previousSibling:e.nodeBefore;r&&'listItem'==r.name;){const e=r.getAttribute('listIndent');if(o&&i==e||n&&i>e)return r;r=r.previousSibling;}return null}function Xa(e,t,o){return t&&o&&('ul'==t.name||'ol'==t.name)&&t.name==o.name?e.mergeContainers(Wc.createAfter(t)):null}function Za(e,t,o){const n=t.parent,i=o.mapper,r=o.writer;let a=i.toViewPosition(uu.createBefore(e));const s=Ya(e,{sameIndent:!0,smallerIndent:!0}),l=e.previousSibling;if(s&&s.getAttribute('listIndent')==e.getAttribute('listIndent')){const e=i.toViewElement(s);a=r.breakContainer(Wc.createAfter(e));}else a=l&&'listItem'==l.name?i.toViewPosition(uu.createAt(l,'end')):i.toViewPosition(uu.createBefore(e));if(a=ts(a),r.insert(a,n),l&&'listItem'==l.name){const e=i.toViewElement(l),o=new qc({boundaries:new Uc(Wc.createAt(e,0),a),ignoreElementEnd:!0});for(const e of o)if(e.item.is('li')){const n=r.breakContainer(Wc.createBefore(e.item)),i=e.item.parent,a=Wc.createAt(t,'end');Xa(r,a.nodeBefore,a.nodeAfter),r.move(Uc.createOn(i),a),o.position=n;}}else{const o=n.nextSibling;if(o&&(o.is('ul')||o.is('ol'))){let n=null;for(const t of o.getChildren()){const o=i.toModelElement(t);if(o&&o.getAttribute('listIndent')>e.getAttribute('listIndent'))n=t;else break}n&&(r.breakContainer(Wc.createAfter(n)),r.move(Uc.createOn(n.parent),Wc.createAt(t,'end')));}}Xa(r,n,n.nextSibling),Xa(r,n.previousSibling,n);}function es(e,t,o,n,i){const r=Ya(t,{sameIndent:!0,smallerIndent:!0,listIndent:e}),a=i.mapper,s=i.writer,l=r?r.getAttribute('listIndent'):null;let d;if(!r)d=o;else if(l==e){const e=a.toViewElement(r).parent;d=Wc.createAfter(e);}else{const e=uu.createAt(r,'end');d=a.toViewPosition(e);}d=ts(d);for(const r of[...n.getChildren()])(r.is('ul')||r.is('ol'))&&(d=s.move(Uc.createOn(r),d).end,Xa(s,r,r.nextSibling),Xa(s,r.previousSibling,r));}function ts(e){return e.getLastMatchingPosition((e)=>e.item.is('uiElement'))}function os(e){let t=1;for(const o of e.getChildren())if('ul'==o.name||'ol'==o.name)for(const e of o.getChildren())t+=os(e);return t}var ns=Number.POSITIVE_INFINITY,is=Math.max,rs=Math.min,as=Math.floor;Object.defineProperty(t,'__esModule',{value:!0});var ss=Object.getPrototypeOf,ls=function(e){return ss(Object(e))},ds=function(e){var t=!1;if(null!=e&&'function'!=typeof e.toString)try{t=!!(e+'');}catch(t){}return t},cs=function(e){return!!e&&'object'==typeof e},ms=Object.prototype,us=Function.prototype.toString,ps=ms.hasOwnProperty,gs=us.call(Object),fs=ms.toString,hs=function(e){if(!cs(e)||fs.call(e)!='[object Object]'||ds(e))return!1;var t=ls(e);if(null===t)return!0;var o=ps.call(t,'constructor')&&t.constructor;return'function'==typeof o&&o instanceof o&&us.call(o)==gs};class bs{constructor(e,t){this._config={},t&&this.define(t),e&&this._setObjectToTarget(this._config,e);}set(e,t){this._setToTarget(this._config,e,t);}define(e,t){this._setToTarget(this._config,e,t,!0);}get(e){return this._getFromSource(this._config,e)}_setToTarget(e,t,o,n=!1){if(hs(t))return void this._setObjectToTarget(e,t,n);const i=t.split('.');t=i.pop();for(const r of i)hs(e[r])||(e[r]={}),e=e[r];return hs(o)?(hs(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,o,n)):void(n&&'undefined'!=typeof e[t]||(e[t]=o))}_getFromSource(e,t){const o=t.split('.');t=o.pop();for(const n of o){if(!hs(e[n])){e=null;break}e=e[n];}return e?e[t]:void 0}_setObjectToTarget(e,t,o){Object.keys(t).forEach((n)=>{this._setToTarget(e,n,t[n],o);});}}const ks='https://docs.ckeditor.com/ckeditor5/latest/framework/guides/support/error-codes.html';class _s extends Error{constructor(e,t){e=n(e),t&&(e+=' '+JSON.stringify(t)),super(e),this.name='CKEditorError',this.data=t;}static isCKEditorError(e){return e instanceof _s}}var ws=function(){return function e(){e.called=!0;}};class vs{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=ws(),this.off=ws();}}const ys={get(e){return'number'==typeof e?e:this[e]||this.normal},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};var xs=ys;const Cs=Symbol('listeningTo'),As=Symbol('emitterId'),Ts={on(e,t,o={}){this.listenTo(this,e,t,o);},once(e,t,o){this.listenTo(this,e,function(e,...o){e.off(),t.call(this,e,...o);},o);},off(e,t){this.stopListening(this,e,t);},listenTo(e,t,o,n={}){let i,r;this[Cs]||(this[Cs]={});const l=this[Cs];s(e)||a(e);const d=s(e);(i=l[d])||(i=l[d]={emitter:e,callbacks:{}}),(r=i.callbacks[t])||(r=i.callbacks[t]=[]),r.push(o),c(e,t);const u=m(e,t),p=xs.get(n.priority),g={callback:o,priority:p};for(const r of u){let e=!1;for(let t=0;t<r.length;t++)if(r[t].priority<p){r.splice(t,0,g),e=!0;break}e||r.push(g);}},stopListening(e,t,o){const n=this[Cs];let i=e&&s(e);const r=n&&i&&n[i],a=r&&t&&r.callbacks[t];if(n&&(!e||r)&&(!t||a))if(o)g(e,t,o);else if(a){for(;o=a.pop();)g(e,t,o);delete r.callbacks[t];}else if(r){for(t in r.callbacks)this.stopListening(e,t);delete n[i];}else{for(i in n)this.stopListening(n[i].emitter);delete this[Cs];}},fire(e,...t){const o=e instanceof vs?e:new vs(this,e),n=o.name;let r=u(this,n);if(o.path.push(this),r){const e=[o,...t];r=Array.from(r);for(let t=0;t<r.length&&(r[t].callback.apply(this,e),o.off.called&&(delete o.off.called,g(this,n,r[t].callback)),!o.stop.called);t++);}if(this._delegations){const e=this._delegations.get(n),i=this._delegations.get('*');e&&p(e,o,t),i&&p(i,o,t);}return o.return},delegate(...e){return{to:(t,o)=>{this._delegations||(this._delegations=new Map);for(const n of e){const e=this._delegations.get(n);e?e.set(t,o):this._delegations.set(n,new Map([[t,o]]));}}}},stopDelegating(e,t){if(this._delegations)if(!e)this._delegations.clear();else if(!t)this._delegations.delete(e);else{const o=this._delegations.get(e);o&&o.delete(t);}}};var Ps=Ts,Es=function(e,t){return e===t||e!==e&&t!==t},Ss=function(e,t){for(var o=e.length;o--;)if(Es(e[o][0],t))return o;return-1},Os=Array.prototype,Is=Os.splice;h.prototype.clear=function(){this.__data__=[];},h.prototype['delete']=function(e){var t=this.__data__,o=Ss(t,e);if(0>o)return!1;var n=t.length-1;return o==n?t.pop():Is.call(t,o,1),!0},h.prototype.get=function(e){var t=this.__data__,o=Ss(t,e);return 0>o?void 0:t[o][1]},h.prototype.has=function(e){return-1<Ss(this.__data__,e)},h.prototype.set=function(e,t){var o=this.__data__,n=Ss(o,e);return 0>n?o.push([e,t]):o[n][1]=t,this};var Rs=h,Vs=function(e){var t=typeof e;return!!e&&('object'==t||'function'==t)},Fs=Object.prototype,Ns=Fs.toString,Ds=function(e){var t=Vs(e)?Ns.call(e):'';return t=='[object Function]'||t=='[object GeneratorFunction]'},Ms=Function.prototype.toString,Bs=function(e){if(null!=e){try{return Ms.call(e)}catch(t){}try{return e+''}catch(t){}}return''},Ls=/[\\^$.*+?()[\]{}|]/g,zs=/^\[object .+?Constructor\]$/,js=Object.prototype,qs=Function.prototype.toString,Ws=js.hasOwnProperty,Us=RegExp('^'+qs.call(Ws).replace(Ls,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),Hs=function(e){if(!Vs(e))return!1;var t=Ds(e)||ds(e)?Us:zs;return t.test(Bs(e))},Ks=function(e,t){var o=e[t];return Hs(o)?o:void 0},Gs=Ks(Object,'create'),$s=Gs,Js=Object.prototype,Qs=Js.hasOwnProperty,Ys=Object.prototype,Xs=Ys.hasOwnProperty;b.prototype.clear=function(){this.__data__=$s?$s(null):{};},b.prototype['delete']=function(e){return this.has(e)&&delete this.__data__[e]},b.prototype.get=function(e){var t=this.__data__;if($s){var o=t[e];return o==='__lodash_hash_undefined__'?void 0:o}return Qs.call(t,e)?t[e]:void 0},b.prototype.has=function(e){var t=this.__data__;return $s?t[e]!==void 0:Xs.call(t,e)},b.prototype.set=function(e,t){var o=this.__data__;return o[e]=$s&&void 0===t?'__lodash_hash_undefined__':t,this};var Zs=b,el=o(1),tl=Ks(el.a,'Map'),ol=tl,nl=function(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e},il=function(e,t){var o=e.__data__;return nl(t)?o['string'==typeof t?'string':'hash']:o.map};k.prototype.clear=function(){this.__data__={hash:new Zs,map:new(ol||Rs),string:new Zs};},k.prototype['delete']=function(e){return il(this,e)['delete'](e)},k.prototype.get=function(e){return il(this,e).get(e)},k.prototype.has=function(e){return il(this,e).has(e)},k.prototype.set=function(e,t){return il(this,e).set(e,t),this};var rl=k;_.prototype.clear=function(){this.__data__=new Rs;},_.prototype['delete']=function(e){return this.__data__['delete'](e)},_.prototype.get=function(e){return this.__data__.get(e)},_.prototype.has=function(e){return this.__data__.has(e)},_.prototype.set=function(e,t){var o=this.__data__;return o instanceof Rs&&o.__data__.length==200&&(o=this.__data__=new rl(o.__data__)),o.set(e,t),this};var al=_,sl=function(e,t){for(var o=-1,n=e.length;++o<n&&!(!1===t(e[o],o,e)););return e},ll=Object.prototype,dl=ll.hasOwnProperty,cl=w,ml=function(e,t,o,n){o||(o={});for(var i=-1,r=t.length;++i<r;){var a=t[i],s=n?n(o[a],e[a],a,o,e):e[a];cl(o,a,s);}return o},ul=Object.prototype,pl=ul.hasOwnProperty,gl=v,fl=Object.keys,hl=function(e){return fl(Object(e))},bl=function(e,t){for(var o=-1,n=Array(e);++o<e;)n[o]=t(o);return n},kl=function(e){return function(t){return null==t?void 0:t[e]}},_l=kl('length'),wl=function(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},vl=function(e){return null!=e&&wl(_l(e))&&!Ds(e)},yl=function(e){return cs(e)&&vl(e)},xl=Object.prototype,Cl=xl.hasOwnProperty,Al=xl.toString,Tl=xl.propertyIsEnumerable,Pl=function(e){return yl(e)&&Cl.call(e,'callee')&&(!Tl.call(e,'callee')||Al.call(e)=='[object Arguments]')},El=Array.isArray,Sl=El,Ol=Object.prototype,Il=Ol.toString,Rl=function(e){return'string'==typeof e||!Sl(e)&&cs(e)&&Il.call(e)=='[object String]'},Vl=function(e){var t=e?e.length:void 0;return wl(t)&&(Sl(e)||Rl(e)||Pl(e))?bl(t,String):null},Fl=/^(?:0|[1-9]\d*)$/,Nl=function(e,t){return t=null==t?9007199254740991:t,!!t&&('number'==typeof e||Fl.test(e))&&-1<e&&0==e%1&&e<t},Dl=Object.prototype,Ml=function(e){var t=e&&e.constructor,o='function'==typeof t&&t.prototype||Dl;return e===o},Bl=function(e){var t=Ml(e);if(!(t||vl(e)))return hl(e);var o=Vl(e),n=o||[],i=n.length;for(var r in e)!gl(e,r)||!!o&&('length'==r||Nl(r,i))||t&&'constructor'==r||n.push(r);return n},Ll=function(e,t){return e&&ml(t,Bl(t),e)},zl=function(e,t){if(t)return e.slice();var o=new e.constructor(e.length);return e.copy(o),o},jl=function(e,t){var o=-1,n=e.length;for(t||(t=Array(n));++o<n;)t[o]=e[o];return t},ql=Object.getOwnPropertySymbols;ql||(y=function(){return[]});var Wl=y,Ul=function(e,t){return ml(e,Wl(e),t)},Hl=function(e,t){for(var o=-1,n=t.length,i=e.length;++o<n;)e[i+o]=t[o];return e},Kl=function(e,t,o){var n=t(e);return Sl(e)?n:Hl(n,o(e))},Gl=function(e){return Kl(e,Bl,Wl)},$l=Ks(el.a,'DataView'),Jl=$l,Ql=Ks(el.a,'Promise'),Yl=Ql,Xl=Ks(el.a,'Set'),Zl=Xl,ed=Ks(el.a,'WeakMap'),td=ed,od='[object Map]',nd='[object Promise]',id='[object Set]',rd='[object WeakMap]',ad='[object DataView]',sd=Object.prototype,ld=sd.toString,dd=Bs(Jl),cd=Bs(ol),md=Bs(Yl),ud=Bs(Zl),pd=Bs(td);(Jl&&x(new Jl(new ArrayBuffer(1)))!=ad||ol&&x(new ol)!=od||Yl&&x(Yl.resolve())!=nd||Zl&&x(new Zl)!=id||td&&x(new td)!=rd)&&(x=function(e){var t=ld.call(e),o=t=='[object Object]'?e.constructor:void 0,n=o?Bs(o):void 0;if(n)switch(n){case dd:return ad;case cd:return od;case md:return nd;case ud:return id;case pd:return rd;}return t});var gd=x,fd=Object.prototype,hd=fd.hasOwnProperty,bd=function(e){var t=e.length,o=e.constructor(t);return t&&'string'==typeof e[0]&&hd.call(e,'index')&&(o.index=e.index,o.input=e.input),o},kd=el.a.Uint8Array,_d=kd,wd=function(e){var t=new e.constructor(e.byteLength);return new _d(t).set(new _d(e)),t},vd=function(e,t){var o=t?wd(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)},yd=function(e,t){return e.set(t[0],t[1]),e},xd=function(e,t,o,n){var i=-1,r=e.length;for(n&&r&&(o=e[++i]);++i<r;)o=t(o,e[i],i,e);return o},Cd=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e,n){o[++t]=[n,e];}),o},Ad=function(e,t,o){var n=t?o(Cd(e),!0):Cd(e);return xd(n,yd,new e.constructor)},Td=/\w*$/,Pd=function(e){var t=new e.constructor(e.source,Td.exec(e));return t.lastIndex=e.lastIndex,t},Ed=function(e,t){return e.add(t),e},Sd=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=e;}),o},Od=function(e,t,o){var n=t?o(Sd(e),!0):Sd(e);return xd(n,Ed,new e.constructor)},Id=el.a.Symbol,Rd=Id,Vd=Rd?Rd.prototype:void 0,Fd=Vd?Vd.valueOf:void 0,Nd=function(e){return Fd?Object(Fd.call(e)):{}},Dd=function(e,t){var o=t?wd(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)},Md=function(e,t,o,n){var i=e.constructor;return t==='[object ArrayBuffer]'?wd(e):t==='[object Boolean]'||t==='[object Date]'?new i(+e):t==='[object DataView]'?vd(e,n):t==='[object Float32Array]'||t==='[object Float64Array]'||t==='[object Int8Array]'||t==='[object Int16Array]'||t==='[object Int32Array]'||t==='[object Uint8Array]'||t==='[object Uint8ClampedArray]'||t==='[object Uint16Array]'||t==='[object Uint32Array]'?Dd(e,n):t==='[object Map]'?Ad(e,n,o):t==='[object Number]'||t==='[object String]'?new i(e):t==='[object RegExp]'?Pd(e):t==='[object Set]'?Od(e,n,o):t==='[object Symbol]'?Nd(e):void 0},Bd=Object.create,Ld=function(e){return Vs(e)?Bd(e):{}},zd=function(e){return'function'!=typeof e.constructor||Ml(e)?{}:Ld(ls(e))},jd=o(9),qd='[object Arguments]',Wd='[object Function]',Ud='[object GeneratorFunction]',Hd='[object Object]',Kd={};Kd[qd]=Kd['[object Array]']=Kd['[object ArrayBuffer]']=Kd['[object DataView]']=Kd['[object Boolean]']=Kd['[object Date]']=Kd['[object Float32Array]']=Kd['[object Float64Array]']=Kd['[object Int8Array]']=Kd['[object Int16Array]']=Kd['[object Int32Array]']=Kd['[object Map]']=Kd['[object Number]']=Kd[Hd]=Kd['[object RegExp]']=Kd['[object Set]']=Kd['[object String]']=Kd['[object Symbol]']=Kd['[object Uint8Array]']=Kd['[object Uint8ClampedArray]']=Kd['[object Uint16Array]']=Kd['[object Uint32Array]']=!0,Kd['[object Error]']=Kd[Wd]=Kd['[object WeakMap]']=!1;var Gd=C,$d=function(e){return Gd(e,!1,!0)};class Jd{constructor(){this.parent=null;}get index(){let e;if(!this.parent)return null;if(-1==(e=this.parent.getChildIndex(this)))throw new _s('view-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get document(){return this.parent instanceof Jd?this.parent.document:null}getPath(){const e=[];for(let t=this;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this:this.parent;o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),n=e.getAncestors(t);let r=0;for(;o[r]==n[r]&&o[r];)r++;return 0==r?null:o[r-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),n=A(t,o);return!('prefix'!==n)||'extension'!==n&&t[n]<o[n]}isAfter(e){return this!=e&&!(this.root!==e.root)&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index);}_fireChange(e,t){this.fire('change:'+e,t),this.parent&&this.parent._fireChange(e,t);}toJSON(){const e=$d(this);return delete e.parent,e}is(e){return'node'==e}}f(Jd,Ps);class Qd extends Jd{constructor(e){super(),this._textData=e;}is(e){return'text'==e||super.is(e)}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange('text',this),this._textData=e;}isSimilar(e){return!!(e instanceof Qd)&&(this===e||this.data===e.data)}_clone(){return new Qd(this.data)}}class Yd{constructor(e,t,o){if(this.textNode=e,0>t||t>e.data.length)throw new _s('view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');if(0>o||t+o>e.data.length)throw new _s('view-textproxy-wrong-length: Given length value is incorrect.');this.data=e.data.substring(t,t+o),this.offsetInText=t;}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return'textProxy'==e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this.textNode:this.parent;null!==o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}}class Xd{constructor(...e){this._patterns=[],this.add(...e);}add(...e){for(let t of e)('string'==typeof t||t instanceof RegExp)&&(t={name:t}),t.classes&&('string'==typeof t.classes||t.classes instanceof RegExp)&&(t.classes=[t.classes]),this._patterns.push(t);}match(...e){for(const t of e)for(const e of this._patterns){const o=E(t,e);if(o)return{element:t,pattern:e,match:o}}return null}matchAll(...e){const t=[];for(const o of e)for(const e of this._patterns){const n=E(o,e);n&&t.push({element:o,pattern:e,match:n});}return 0<t.length?t:null}getElementName(){if(1!==this._patterns.length)return null;const e=this._patterns[0],t=e.name;return'function'!=typeof e&&t&&!(t instanceof RegExp)?t:null}}class Zd extends Jd{constructor(e,t,o){if(super(),this.name=e,this._attrs=V(t),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has('class')){const e=this._attrs.get('class');N(this._classes,e),this._attrs.delete('class');}this._styles=new Map,this._attrs.has('style')&&(F(this._styles,this._attrs.get('style')),this._attrs.delete('style')),this._customProperties=new Map;}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(e,t=null){return t?'element'==e&&t==this.name:'element'==e||e==this.name||super.is(e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){0<this._classes.size&&(yield'class'),0<this._styles.size&&(yield'style');for(const e of this._attrs.keys())yield e;}*getAttributes(){yield*this._attrs.entries(),0<this._classes.size&&(yield['class',this.getAttribute('class')]),0<this._styles.size&&(yield['style',this.getAttribute('style')]);}getAttribute(e){if('class'==e)return 0<this._classes.size?[...this._classes].join(' '):void 0;if('style'==e){if(0<this._styles.size){let e='';for(const[t,o]of this._styles)e+=`${t}:${o};`;return e}return}return this._attrs.get(e)}hasAttribute(e){return'class'==e?0<this._classes.size:'style'==e?0<this._styles.size:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Zd))return!1;if(this===e)return!0;if(this.name!=e.name)return!1;if(this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,o]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==o)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const[t,o]of this._styles)if(!e._styles.has(t)||e._styles.get(t)!==o)return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.get(e)}getStyleNames(){return this._styles.keys()}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Xd(...e);for(let o=this.parent;o;){if(t.match(o))return o;o=o.parent;}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries();}getIdentity(){const e=Array.from(this._classes).sort().join(','),t=Array.from(this._styles).map((e)=>`${e[0]}:${e[1]}`).sort().join(';'),o=Array.from(this._attrs).map((e)=>`${e[0]}="${e[1]}"`).sort().join(' ');return this.name+(''==e?'':` class="${e}"`)+(''==t?'':` style="${t}"`)+(''==o?'':` ${o}`)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const o=new this.constructor(this.name,this._attrs,t);return o._classes=new Set(this._classes),o._styles=new Map(this._styles),o._customProperties=new Map(this._customProperties),o.getFillerOffset=this.getFillerOffset,o}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange('children',this);let o=0;const n=D(t);for(const i of n)null!==i.parent&&i._remove(),i.parent=this,this._children.splice(e,0,i),e++,o++;return o}_removeChildren(e,t=1){this._fireChange('children',this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=t+'',this._fireChange('attributes',this),'class'==e?N(this._classes,t):'style'==e?F(this._styles,t):this._attrs.set(e,t);}_removeAttribute(e){return this._fireChange('attributes',this),'class'==e?!!(0<this._classes.size)&&(this._classes.clear(),!0):'style'==e?!!(0<this._styles.size)&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange('attributes',this),e=Array.isArray(e)?e:[e],e.forEach((e)=>this._classes.add(e));}_removeClass(e){this._fireChange('attributes',this),e=Array.isArray(e)?e:[e],e.forEach((e)=>this._classes.delete(e));}_setStyle(e,t){if(this._fireChange('attributes',this),hs(e)){const t=Object.keys(e);for(const o of t)this._styles.set(o,e[o]);}else this._styles.set(e,t);}_removeStyle(e){this._fireChange('attributes',this),e=Array.isArray(e)?e:[e],e.forEach((e)=>this._styles.delete(e));}_setCustomProperty(e,t){this._customProperties.set(e,t);}_removeCustomProperty(e){return this._customProperties.delete(e)}}class ec extends Zd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=M;}is(e,t=null){return t?'containerElement'==e&&t==this.name||super.is(e,t):'containerElement'==e||super.is(e)}}var tc=B,oc=function(e,t,o){var n=o.length;return 0===n?e.call(t):1===n?e.call(t,o[0]):2===n?e.call(t,o[0],o[1]):3===n?e.call(t,o[0],o[1],o[2]):e.apply(t,o)},nc=Object.prototype,ic=nc.toString,rc=function(e){return'symbol'==typeof e||cs(e)&&ic.call(e)=='[object Symbol]'},ac=0/0,sc=/^\s+|\s+$/g,lc=/^[-+]0x[0-9a-f]+$/i,dc=/^0b[01]+$/i,cc=/^0o[0-7]+$/i,mc=parseInt,uc=function(e){if('number'==typeof e)return e;if(rc(e))return ac;if(Vs(e)){var t=Ds(e.valueOf)?e.valueOf():e;e=Vs(t)?t+'':t;}if('string'!=typeof e)return 0===e?e:+e;e=e.replace(sc,'');var o=dc.test(e);return o||cc.test(e)?mc(e.slice(2),o?2:8):lc.test(e)?ac:+e},pc=1/0,gc=function(e){if(!e)return 0===e?e:0;if(e=uc(e),e===pc||e===-pc){var t=0>e?-1:1;return t*17976931348623157e292}return e===e?e:0},fc=function(e){var t=gc(e),o=t%1;return t===t?o?t-o:t:0},hc=is,bc=function(e,t){if('function'!=typeof e)throw new TypeError('Expected a function');return t=hc(void 0===t?e.length-1:fc(t),0),function(){for(var o=arguments,n=-1,i=hc(o.length-t,0),r=Array(i);++n<i;)r[n]=o[t+n];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,o[0],r);case 2:return e.call(this,o[0],o[1],r);}var a=Array(t+1);for(n=-1;++n<t;)a[n]=o[n];return a[t]=r,oc(e,this,a)}},kc=el.a.Reflect,_c=kc,wc=function(e){for(var t=[],o;!(o=e.next()).done;)t.push(o.value);return t},vc=Object.prototype,yc=_c?_c.enumerate:void 0,xc=vc.propertyIsEnumerable;yc&&!xc.call({valueOf:1},'valueOf')&&(L=function(e){return wc(yc(e))});var Cc=L,Ac=Object.prototype,Tc=Ac.hasOwnProperty,Pc=function(e){for(var t=-1,o=Ml(e),n=Cc(e),i=n.length,r=Vl(e),a=r||[],s=a.length;++t<i;){var l=n[t];!!r&&('length'==l||Nl(l,s))||'constructor'==l&&(o||!Tc.call(e,l))||a.push(l);}return a},Ec=Object.prototype,Sc=Ec.propertyIsEnumerable,Oc=!Sc.call({valueOf:1},'valueOf'),Ic=function(e){return bc(function(t,o){var n=-1,i=o.length,r=1<i?o[i-1]:void 0,a=2<i?o[2]:void 0;for(r=3<e.length&&'function'==typeof r?(i--,r):void 0,a&&tc(o[0],o[1],a)&&(r=3>i?void 0:r,i=1),t=Object(t);++n<i;){var s=o[n];s&&e(t,s,n,r);}return t})}(function(e,t){if(Oc||Ml(t)||vl(t))return void ml(t,Pc(t),e);for(var o in t)cl(e,o,t[o]);}),Rc=Ic;const Vc=Symbol('observableProperties'),Fc=Symbol('boundObservables'),Nc=Symbol('boundProperties'),Dc={set(e,t){if(Vs(e))return void Object.keys(e).forEach((t)=>{this.set(t,e[t]);},this);z(this);const o=this[Vc];if(e in this&&!o.has(e))throw new _s('observable-set-cannot-override: Cannot override an existing property.');Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get(){return o.get(e)},set(t){const n=o.get(e);let i=this.fire('set:'+e,e,t,n);i===void 0&&(i=t),n===i&&o.has(e)||(o.set(e,i),this.fire('change:'+e,e,i,n));}}),this[e]=t;},bind(...e){if(!e.length||!U(e))throw new _s('observable-bind-wrong-properties: All properties must be strings.');if(new Set(e).size!==e.length)throw new _s('observable-bind-duplicate-properties: Properties must be unique.');z(this);const t=this[Nc];e.forEach((e)=>{if(t.has(e))throw new _s('observable-bind-rebind: Cannot bind the same property more that once.')});const o=new Map;return e.forEach((e)=>{const n={property:e,to:[]};t.set(e,n),o.set(e,n);}),{to:j,toMany:q,_observable:this,_bindProperties:e,_to:[],_bindings:o}},unbind(...e){if(!(Vc in this))return;const t=this[Nc],o=this[Fc];if(e.length){if(!U(e))throw new _s('observable-unbind-wrong-properties: Properties must be strings.');e.forEach((e)=>{const n=t.get(e);if(!n)return;let i,r,a,s;n.to.forEach((e)=>{i=e[0],r=e[1],a=o.get(i),s=a[r],s.delete(n),s.size||delete a[r],Object.keys(a).length||(o.delete(i),this.stopListening(i,'change'));}),t.delete(e);});}else o.forEach((e,t)=>{this.stopListening(t,'change');}),o.clear(),t.clear();},decorate(e){const t=this[e];if(!t)throw new _s('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.',{object:this,methodName:e});this.on(e,(e,o)=>{e.return=t.apply(this,o);}),this[e]=function(...t){return this.fire(e,t)};}};Rc(Dc,Ps);var Mc=Dc;const Bc=Symbol('document');class Lc extends ec{constructor(e,t,o){super(e,t,o),this.set('isReadOnly',!1),this.set('isFocused',!1);}get document(){return this.getCustomProperty(Bc)}set _document(e){if(this.getCustomProperty(Bc))throw new _s('view-editableelement-document-already-set: View document is already set.');this._setCustomProperty(Bc,e),this.bind('isReadOnly').to(e),this.bind('isFocused').to(e,'isFocused',(t)=>t&&e.selection.editableElement==this),this.listenTo(e.selection,'change',()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this;});}}f(Lc,Mc);const zc=Symbol('rootName');class jc extends Lc{constructor(e){super(e),this.rootName='main';}is(e,t=null){return t?'rootElement'==e&&t==this.name||super.is(e,t):'rootElement'==e||super.is(e)}get rootName(){return this.getCustomProperty(zc)}set rootName(e){this._setCustomProperty(zc,e);}set _name(e){this.name=e;}}class qc{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new _s('view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');if(e.direction&&'forward'!=e.direction&&'backward'!=e.direction)throw new _s('view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.',{direction:e.direction});this.boundaries=e.boundaries||null,this.position=e.startPosition?Wc.createFromPosition(e.startPosition):Wc.createFromPosition(e.boundaries['backward'==e.direction?'end':'start']),this.direction=e.direction||'forward',this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null;}[Symbol.iterator](){return this}skip(e){let t,o,n;do n=this.position,({done:t,value:o}=this.next());while(!t&&e(o));t||(this.position=n);}next(){return'forward'==this.direction?this._next():this._previous()}_next(){let e=Wc.createFromPosition(this.position);const t=this.position,o=e.parent;if(null===o.parent&&e.offset===o.childCount)return{done:!0};if(o===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let n;if(o instanceof Qd){if(e.isAtEnd)return this.position=Wc.createAfter(o),this._next();n=o.data[e.offset];}else n=o.getChild(e.offset);if(n instanceof Zd)return this.shallow?e.offset++:e=new Wc(n,0),this.position=e,this._formatReturnValue('elementStart',n,t,e,1);if(!(n instanceof Qd)){if('string'==typeof n){let n;if(this.singleCharacters)n=1;else{const t=o===this._boundaryEndParent?this.boundaries.end.offset:o.data.length;n=t-e.offset;}const i=new Yd(o,e.offset,n);return e.offset+=n,this.position=e,this._formatReturnValue('text',i,t,e,n)}return e=Wc.createAfter(o),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue('elementEnd',o,t,e)}if(this.singleCharacters)return e=new Wc(n,0),this.position=e,this._next();else{let o=n.data.length,i;return n==this._boundaryEndParent?(o=this.boundaries.end.offset,i=new Yd(n,0,o),e=Wc.createAfter(i)):(i=new Yd(n,0,n.data.length),e.offset++),this.position=e,this._formatReturnValue('text',i,t,e,o)}}_previous(){let e=Wc.createFromPosition(this.position);const t=this.position,o=e.parent;if(null===o.parent&&0===e.offset)return{done:!0};if(o==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let n;if(o instanceof Qd){if(e.isAtStart)return this.position=Wc.createBefore(o),this._previous();n=o.data[e.offset-1];}else n=o.getChild(e.offset-1);if(n instanceof Zd)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue('elementStart',n,t,e,1)):(e=new Wc(n,n.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue('elementEnd',n,t,e));if(!(n instanceof Qd)){if('string'==typeof n){let n;if(!this.singleCharacters){const t=o===this._boundaryStartParent?this.boundaries.start.offset:0;n=e.offset-t;}else n=1;e.offset-=n;const i=new Yd(o,e.offset,n);return this.position=e,this._formatReturnValue('text',i,t,e,n)}return e=Wc.createBefore(o),this.position=e,this._formatReturnValue('elementStart',o,t,e,1)}if(this.singleCharacters)return e=new Wc(n,n.data.length),this.position=e,this._previous();else{let o=n.data.length,i;if(n==this._boundaryStartParent){const t=this.boundaries.start.offset;i=new Yd(n,t,n.data.length-t),o=i.data.length,e=Wc.createBefore(i);}else i=new Yd(n,0,n.data.length),e.offset--;return this.position=e,this._formatReturnValue('text',i,t,e,o)}}_formatReturnValue(e,t,o,n,i){return t instanceof Yd&&(t.offsetInText+t.data.length==t.textNode.data.length&&('forward'!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?o=Wc.createAfter(t.textNode):(n=Wc.createAfter(t.textNode),this.position=n)),0===t.offsetInText&&('backward'!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?o=Wc.createBefore(t.textNode):(n=Wc.createBefore(t.textNode),this.position=n))),{done:!1,value:{type:e,item:t,previousPosition:o,nextPosition:n,length:i}}}}class Wc{constructor(e,t){this.parent=e,this.offset=t;}get nodeAfter(){return this.parent.is('text')?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is('text')?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const e=this.parent.is('text')?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Lc);)if(e.parent)e=e.parent;else return null;return e}getShiftedBy(e){const t=Wc.createFromPosition(this),o=t.offset+e;return t.offset=0>o?0:o,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new qc(t);return o.skip(e),o.position}getAncestors(){return this.parent.is('documentFragment')?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let n=0;for(;t[n]==o[n]&&t[n];)n++;return 0==n?null:t[n-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return'before'==this.compareWith(e)}isAfter(e){return'after'==this.compareWith(e)}compareWith(e){if(this.root!==e.root)return'different';if(this.isEqual(e))return'same';const t=this.parent.is('node')?this.parent.getPath():[],o=e.parent.is('node')?e.parent.getPath():[];t.push(this.offset),o.push(e.offset);const n=A(t,o);return'prefix'===n?'before':'extension'===n?'after':t[n]<o[n]?'before':'after'}static createAt(e,t){if(e instanceof Wc)return this.createFromPosition(e);else{const o=e;if('end'==t)t=o.is('text')?o.data.length:o.childCount;else{if('before'==t)return this.createBefore(o);if('after'==t)return this.createAfter(o);t||(t=0);}return new Wc(o,t)}}static createAfter(e){if(e.is('textProxy'))return new Wc(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new _s('view-position-after-root: You can not make position after root.',{root:e});return new Wc(e.parent,e.index+1)}static createBefore(e){if(e.is('textProxy'))return new Wc(e.textNode,e.offsetInText);if(!e.parent)throw new _s('view-position-before-root: You can not make position before root.',{root:e});return new Wc(e.parent,e.index)}static createFromPosition(e){return new this(e.parent,e.offset)}}class Uc{constructor(e,t=null){this.start=Wc.createFromPosition(e),this.end=t?Wc.createFromPosition(t):Wc.createFromPosition(e);}*[Symbol.iterator](){yield*new qc({boundaries:this,ignoreElementEnd:!0});}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Q,{direction:'backward'}),t=this.end.getLastMatchingPosition(Q);return e.parent.is('text')&&e.isAtStart&&(e=Wc.createBefore(e.parent)),t.parent.is('text')&&t.isAtEnd&&(t=Wc.createAfter(t.parent)),new Uc(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Q);if(e.isAfter(this.end)||e.isEqual(this.end))return new Uc(e,e);let t=this.end.getLastMatchingPosition(Q,{direction:'backward'});const o=e.nodeAfter,n=t.nodeBefore;return o&&o.is('text')&&(e=new Wc(o,0)),n&&n.is('text')&&(t=new Wc(n,n.data.length)),new Uc(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&n}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Uc(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Uc(e.end,this.end))):t.push(Uc.createFromRange(this)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new Uc(t,o)}return null}getWalker(e={}){return e.boundaries=this,new qc(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new qc(e);for(const o of t)yield o.item;}*getPositions(e={}){e.boundaries=this;const t=new qc(e);yield t.position;for(const o of t)yield o.nextPosition;}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static createFromParentsAndOffsets(e,t,o,n){return new this(new Wc(e,t),new Wc(o,n))}static createFromRange(e){return new this(e.start,e.end)}static createFromPositionAndShift(e,t){const o=e,n=e.getShiftedBy(t);return 0<t?new this(o,n):new this(n,o)}static createIn(e){return this.createFromParentsAndOffsets(e,0,e,e.childCount)}static createOn(e){const t=e.is('textProxy')?e.offsetSize:1;return this.createFromPositionAndShift(Wc.createBefore(e),t)}static createCollapsedAt(e,t){const o=Wc.createAt(e,t),n=Wc.createFromPosition(o);return new Uc(o,n)}}class Hc{constructor(e=null,t,o){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel='',this.setTo(e,t,o);}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1],t=this._lastRangeBackward?e.end:e.start;return Wc.createFromPosition(t)}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1],t=this._lastRangeBackward?e.start:e.end;return Wc.createFromPosition(t)}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield Uc.createFromRange(e);}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?Uc.createFromRange(e):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?Uc.createFromRange(e):null}getFirstPosition(){const e=this.getFirstRange();return e?Wc.createFromPosition(e.start):null}getLastPosition(){const e=this.getLastRange();return e?Wc.createFromPosition(e.end):null}isEqual(e){if(this.isFake!=e.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel)return!1;if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const n of e._ranges)if(t.isEqual(n)){o=!0;break}if(!o)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Y(this.getRanges()),o=Y(e.getRanges());if(t!=o)return!1;if(0==t)return!0;for(let t of this.getRanges()){t=t.getTrimmed();let o=!1;for(let n of e.getRanges())if(n=n.getTrimmed(),t.start.isEqual(n.start)&&t.end.isEqual(n.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const e=this.getFirstRange(),t=e.start.nodeAfter,o=e.end.nodeBefore;return t instanceof Zd&&t==o?t:null}setTo(e,t,o){if(null===e)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof Hc||e instanceof Kc)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Uc)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof Wc)this._setRanges([new Uc(e)]),this._setFakeOptions(t);else if(e instanceof Jd){const n=!!o&&!!o.backward;let i;if(t===void 0)throw new _s('view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.');else i='in'==t?Uc.createIn(e):'on'==t?Uc.createOn(e):Uc.createCollapsedAt(e,t);this._setRanges([i],n),this._setFakeOptions(o);}else if(P(e))this._setRanges(e,t&&t.backward),this._setFakeOptions(t);else throw new _s('view-selection-setTo-not-selectable: Cannot set selection to given place.');this.fire('change');}setFocus(e,t){if(null===this.anchor)throw new _s('view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.');const o=Wc.createAt(e,t);if('same'!=o.compareWith(this.focus)){const e=this.anchor;this._ranges.pop(),'before'==o.compareWith(e)?this._addRange(new Uc(o,e),!0):this._addRange(new Uc(e,o)),this.fire('change');}}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const o of e)this._addRange(o);this._lastRangeBackward=!!t;}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake?e.label||'':'';}_addRange(e,t=!1){if(!(e instanceof Uc))throw new _s('view-selection-invalid-range: Invalid Range.');this._pushRange(e),this._lastRangeBackward=!!t;}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new _s('view-selection-range-intersects: Trying to add a range that intersects with another range from selection.',{addedRange:e,intersectingRange:t});this._ranges.push(Uc.createFromRange(e));}}f(Hc,Ps);class Kc{constructor(e=null,t,o){this._selection=new Hc,this._selection.delegate('change').to(this),this._selection.setTo(e,t,o);}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges();}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(e,t,o){this._selection.setTo(e,t,o);}_setFocus(e,t){this._selection.setFocus(e,t);}}f(Kc,Ps);class Gc{constructor(e={}){this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||'id',this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[];}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){let o;const n=this._idProperty;if(n in e){if(o=e[n],'string'!=typeof o)throw new _s('collection-add-invalid-id');if(this.get(o))throw new _s('collection-add-item-already-exists')}else e[n]=o=i();if(void 0===t)t=this._items.length;else if(t>this._items.length||0>t)throw new _s('collection-add-item-invalid-index');return this._items.splice(t,0,e),this._itemMap.set(o,e),this.fire('add',e,t),this}get(e){let t;if('string'==typeof e)t=this._itemMap.get(e);else if('number'==typeof e)t=this._items[e];else throw new _s('collection-get-invalid-arg: Index or id must be given.');return t||null}getIndex(e){let t;return t='string'==typeof e?this._itemMap.get(e):e,this._items.indexOf(t)}remove(e){let t=!1,o,n,i;const r=this._idProperty;if('string'==typeof e?(n=e,i=this._itemMap.get(n),t=!i,i&&(o=this._items.indexOf(i))):'number'==typeof e?(o=e,i=this._items[o],t=!i,i&&(n=i[r])):(i=e,n=i[r],o=this._items.indexOf(i),t=-1==o||!this._itemMap.get(n)),t)throw new _s('collection-remove-404: Item not found.');this._items.splice(o,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire('remove',i,o),i}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0);}bindTo(e){if(this._bindToCollection)throw new _s('collection-bind-to-rebind: The collection cannot be bound more than once.');return this._bindToCollection=e,{as:(e)=>{this._setUpBindToBinding((t)=>new e(t));},using:(e)=>{'function'==typeof e?this._setUpBindToBinding((t)=>e(t)):this._setUpBindToBinding((t)=>t[e]);}}}_setUpBindToBinding(e){const t=this._bindToCollection,o=(o,n,i)=>{const r=t._bindToCollection==this,a=t._bindToInternalToExternalMap.get(n);if(r&&a)this._bindToExternalToInternalMap.set(n,a),this._bindToInternalToExternalMap.set(a,n);else{const o=e(n);if(!o)return void this._skippedIndexesFromExternal.push(i);let r=i;for(const e of this._skippedIndexesFromExternal)i>e&&r--;for(const e of t._skippedIndexesFromExternal)r>=e&&r++;this._bindToExternalToInternalMap.set(n,o),this._bindToInternalToExternalMap.set(o,n),this.add(o,r);for(let e=0;e<t._skippedIndexesFromExternal.length;e++)r<=t._skippedIndexesFromExternal[e]&&t._skippedIndexesFromExternal[e]++;}};for(const n of t)o(null,n,t.getIndex(n));this.listenTo(t,'add',o),this.listenTo(t,'remove',(e,t,o)=>{const n=this._bindToExternalToInternalMap.get(t);n&&this.remove(n),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((e,t)=>(o<t&&e.push(t-1),o>t&&e.push(t),e),[]);});}[Symbol.iterator](){return this._items[Symbol.iterator]()}}f(Gc,Ps);class $c{constructor(){this.selection=new Kc,this.roots=new Gc({idProperty:'rootName'}),this.set('isReadOnly',!1),this.set('isFocused',!1),this.set('isComposing',!1),this._postFixers=new Set;}getRoot(e='main'){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e);}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}f($c,Mc);const Jc=10;class Qc extends Zd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=X,this._priority=Jc,this._id=null,this._clonesGroup=null;}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new _s('attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.');return new Set(this._clonesGroup)}is(e,t=null){return t?'attributeElement'==e&&t==this.name||super.is(e,t):'attributeElement'==e||super.is(e)}isSimilar(e){return null!==this.id||null!==e.id?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}Qc.DEFAULT_PRIORITY=Jc;class Yc extends Zd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=ee;}is(e,t=null){return t?'emptyElement'==e&&t==this.name||super.is(e,t):'emptyElement'==e||super.is(e)}_insertChild(e,t){if(t&&(t instanceof Jd||0<Array.from(t).length))throw new _s('view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.')}}const Xc=navigator.userAgent.toLowerCase(),Zc={isMac:function(e){return-1<e.indexOf('macintosh')}(Xc)};var em=Zc;const tm={"⌘":'ctrl',"⇧":'shift',"⌥":'alt'},om={ctrl:'\u2318',shift:'\u21E7',alt:'\u2325'},nm=function(){const e={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let t=65;90>=t;t++){const o=String.fromCharCode(t);e[o.toLowerCase()]=t;}for(let t=48;57>=t;t++)e[t-48]=t;for(let t=112;123>=t;t++)e['f'+(t-111)]=t;return e}();class im extends Zd{constructor(e,t,o){super(e,t,o),this.getFillerOffset=ae;}is(e,t=null){return t?'uiElement'==e&&t==this.name||super.is(e,t):'uiElement'==e||super.is(e)}_insertChild(e,t){if(t&&(t instanceof Jd||0<Array.from(t).length))throw new _s('view-uielement-cannot-add: Cannot add child nodes to UIElement instance.')}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const o of this.getAttributeKeys())t.setAttribute(o,this.getAttribute(o));return t}}class rm{constructor(e){this._children=[],e&&this._insertChild(0,e);}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return'documentFragment'==e}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange('children',this);let o=0;const n=le(t);for(const i of n)null!==i.parent&&i._remove(),i.parent=this,this._children.splice(e,0,i),e++,o++;return o}_removeChildren(e,t=1){this._fireChange('children',this);for(let o=e;o<e+t;o++)this._children[o].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire('change:'+e,t);}}f(rm,Ps);class am{constructor(e){this.document=e,this._cloneGroups=new Map;}setSelection(e,t,o){this.document.selection._setTo(e,t,o);}setSelectionFocus(e,t){this.document.selection._setFocus(e,t);}createText(e){return new Qd(e)}createAttributeElement(e,t,o={}){const n=new Qc(e,t);return o.priority&&(n._priority=o.priority),o.id&&(n._id=o.id),n}createContainerElement(e,t){return new ec(e,t)}createEditableElement(e,t){const o=new Lc(e,t);return o._document=this.document,o}createEmptyElement(e,t){return new Yc(e,t)}createUIElement(e,t,o){const n=new im(e,t);return o&&(n.render=o),n}setAttribute(e,t,o){o._setAttribute(e,t);}removeAttribute(e,t){t._removeAttribute(e);}addClass(e,t){t._addClass(e);}removeClass(e,t){t._removeClass(e);}setStyle(e,t,o){hs(e)&&o===void 0&&(o=t),o._setStyle(e,t);}removeStyle(e,t){t._removeStyle(e);}setCustomProperty(e,t,o){o._setCustomProperty(e,t);}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Wc?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is('containerElement'))throw new _s('view-writer-break-non-container-element: Trying to break an element which is not a container element.');if(!t.parent)throw new _s('view-writer-break-root: Trying to break root element.');if(e.isAtStart)return Wc.createBefore(t);if(!e.isAtEnd){const o=t._clone(!1);this.insert(Wc.createAfter(t),o);const n=new Uc(e,Wc.createAt(t,'end')),i=new Wc(o,0);this.move(n,i);}return Wc.createAfter(t)}mergeAttributes(e){const t=e.offset,o=e.parent;if(o.is('text'))return e;if(o.is('attributeElement')&&0===o.childCount){const e=o.parent,t=o.index;return o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Wc(e,t))}const n=o.getChild(t-1),i=o.getChild(t);if(!n||!i)return e;if(n.is('text')&&i.is('text'))return ge(n,i);if(n.is('attributeElement')&&i.is('attributeElement')&&n.isSimilar(i)){const e=n.childCount;return n._appendChild(i.getChildren()),i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new Wc(n,e))}return e}mergeContainers(e){const t=e.nodeBefore,o=e.nodeAfter;if(!t||!o||!t.is('containerElement')||!o.is('containerElement'))throw new _s('view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.');const n=t.getChild(t.childCount-1),i=n instanceof Qd?Wc.createAt(n,'end'):Wc.createAt(t,'end');return this.move(Uc.createIn(o),Wc.createAt(t,'end')),this.remove(Uc.createOn(o)),i}insert(e,t){t=P(t)?[...t]:[t],he(t);const o=ce(e);if(!o)throw new _s('view-writer-invalid-position-container');const n=this._breakAttributes(e,!0),i=o._insertChild(n.offset,t);for(const o of t)this._addToClonedElementsGroup(o);const r=n.getShiftedBy(i),a=this.mergeAttributes(n);if(0===i)return new Uc(a,a);else{a.isEqual(n)||r.offset--;const e=this.mergeAttributes(r);return new Uc(a,e)}}remove(e){if(ke(e),e.isCollapsed)return new rm;const{start:t,end:o}=this._breakAttributesRange(e,!0),n=t.parent,i=o.offset-t.offset,r=n._removeChildren(t.offset,i);for(const t of r)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(t);return e.start=a,e.end=Wc.createFromPosition(a),new rm(r)}clear(e,t){ke(e);const o=e.getWalker({direction:'backward',ignoreElementEnd:!0});for(const n of o){const o=n.item;let i;if(o.is('element')&&t.isSimilar(o))i=Uc.createOn(o);else if(!n.nextPosition.isAfter(e.start)&&o.is('textProxy')){const e=o.getAncestors().find((e)=>e.is('element')&&t.isSimilar(e));e&&(i=Uc.createIn(e));}i&&(i.end.isAfter(e.end)&&(i.end=e.end),i.start.isBefore(e.start)&&(i.start=e.start),this.remove(i));}}move(e,t){let o;if(t.isAfter(e.end)){t=this._breakAttributes(t,!0);const n=t.parent,i=n.childCount;e=this._breakAttributesRange(e,!0),o=this.remove(e),t.offset+=n.childCount-i;}else o=this.remove(e);return this.insert(t,o)}wrap(e,t){if(!(t instanceof Qc))throw new _s('view-writer-wrap-invalid-attribute');if(ke(e),!e.isCollapsed)return this._wrapRange(e,t);else{let o=e.start;o.parent.is('element')&&!de(o.parent)&&(o=o.getLastMatchingPosition((e)=>e.item.is('uiElement'))),o=this._wrapPosition(o,t);const n=this.document.selection;return n.isCollapsed&&n.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new Uc(o)}}unwrap(e,t){if(!(t instanceof Qc))throw new _s('view-writer-unwrap-invalid-attribute');if(ke(e),e.isCollapsed)return e;const{start:o,end:n}=this._breakAttributesRange(e,!0);if(n.isEqual(o.getShiftedBy(1))){const e=o.nodeAfter;if(!t.isSimilar(e)&&e instanceof Qc&&this._unwrapAttributeElement(t,e)){const e=this.mergeAttributes(o);e.isEqual(o)||n.offset--;const t=this.mergeAttributes(n);return new Uc(e,t)}}const i=o.parent,r=this._unwrapChildren(i,o.offset,n.offset,t),a=this.mergeAttributes(r.start);a.isEqual(r.start)||r.end.offset--;const s=this.mergeAttributes(r.end);return new Uc(a,s)}rename(e,t){const o=new ec(t,e.getAttributes());return this.insert(Wc.createAfter(e),o),this.move(Uc.createIn(e),Wc.createAt(o)),this.remove(Uc.createOn(e)),o}_wrapChildren(e,t,o,n){let r=t;const i=[];for(;r<o;){const t=e.getChild(r),o=t.is('text'),a=t.is('attributeElement'),s=t.is('emptyElement'),l=t.is('uiElement');if(o||s||l||a&&me(n,t)){const o=n._clone();t._remove(),o._appendChild(t),e._insertChild(r,o),this._addToClonedElementsGroup(o),i.push(new Wc(e,r));}else a&&this._wrapChildren(t,0,t.childCount,n);r++;}let a=0;for(const r of i){if(r.offset-=a,r.offset==t)continue;const e=this.mergeAttributes(r);e.isEqual(r)||(a++,o--);}return Uc.createFromParentsAndOffsets(e,t,e,o)}_unwrapChildren(e,t,o,n){let r=t;const i=[];for(;r<o;){const t=e.getChild(r);if(t.isSimilar(n)){const n=t.getChildren(),a=t.childCount;t._remove(),e._insertChild(r,n),this._removeFromClonedElementsGroup(t),i.push(new Wc(e,r),new Wc(e,r+a)),r+=a,o+=a-1;}else t.is('attributeElement')&&this._unwrapChildren(t,0,t.childCount,n),r++;}let a=0;for(const r of i){if(r.offset-=a,r.offset==t||r.offset==o)continue;const e=this.mergeAttributes(r);e.isEqual(r)||(a++,o--);}return Uc.createFromParentsAndOffsets(e,t,e,o)}_wrapRange(e,t){if(fe(e)&&this._wrapAttributeElement(t,e.start.parent)){const t=e.start.parent,o=this.mergeAttributes(Wc.createAfter(t)),n=this.mergeAttributes(Wc.createBefore(t));return new Uc(n,o)}const{start:o,end:n}=this._breakAttributesRange(e,!0);if(n.isEqual(o.getShiftedBy(1))){const e=o.nodeAfter;if(e instanceof Qc&&this._wrapAttributeElement(t,e)){const e=this.mergeAttributes(o);e.isEqual(o)||n.offset--;const t=this.mergeAttributes(n);return new Uc(e,t)}}const i=o.parent,r=this._unwrapChildren(i,o.offset,n.offset,t),a=this._wrapChildren(i,r.start.offset,r.end.offset,t),s=this.mergeAttributes(a.start);s.isEqual(a.start)||a.end.offset--;const l=this.mergeAttributes(a.end);return new Uc(s,l)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return ue(Wc.createFromPosition(e));e.parent.is('text')&&(e=pe(e));const o=this.createAttributeElement();o._priority=ns,o.isSimilar=()=>!1,e.parent._insertChild(e.offset,o);const n=new Uc(e,e.getShiftedBy(1));this.wrap(n,t);const i=new Wc(o.parent,o.index);o._remove();const r=i.nodeBefore,a=i.nodeAfter;return r instanceof Qd&&a instanceof Qd?ge(r,a):ue(i)}_wrapAttributeElement(e,t){if(!_e(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if('class'!==o&&'style'!==o&&t.hasAttribute(o)&&t.getAttribute(o)!==e.getAttribute(o))return!1;for(const o of e.getStyleNames())if(t.hasStyle(o)&&t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())'class'!==o&&'style'!==o&&(t.hasAttribute(o)||this.setAttribute(o,e.getAttribute(o),t));for(const o of e.getStyleNames())t.hasStyle(o)||this.setStyle(o,e.getStyle(o),t);for(const o of e.getClassNames())t.hasClass(o)||this.addClass(o,t);return!0}_unwrapAttributeElement(e,t){if(!_e(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const o of e.getAttributeKeys())if('class'!==o&&'style'!==o&&(!t.hasAttribute(o)||t.getAttribute(o)!==e.getAttribute(o)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const o of e.getStyleNames())if(!t.hasStyle(o)||t.getStyle(o)!==e.getStyle(o))return!1;for(const o of e.getAttributeKeys())'class'!==o&&'style'!==o&&this.removeAttribute(o,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const o=e.start,n=e.end;if(ke(e),e.isCollapsed){const o=this._breakAttributes(e.start,t);return new Uc(o,o)}const i=this._breakAttributes(n,t),r=i.parent.childCount,a=this._breakAttributes(o,t);return i.offset+=i.parent.childCount-r,new Uc(a,i)}_breakAttributes(e,t=!1){const o=e.offset,n=e.parent;if(e.parent.is('emptyElement'))throw new _s('view-writer-cannot-break-empty-element');if(e.parent.is('uiElement'))throw new _s('view-writer-cannot-break-ui-element');if(!t&&n.is('text')&&be(n.parent))return Wc.createFromPosition(e);if(be(n))return Wc.createFromPosition(e);if(n.is('text'))return this._breakAttributes(pe(e),t);const i=n.childCount;if(o==i){const e=new Wc(n.parent,n.index+1);return this._breakAttributes(e,t)}if(0===o){const e=new Wc(n.parent,n.index);return this._breakAttributes(e,t)}else{const e=n.index+1,i=n._clone();n.parent._insertChild(e,i),this._addToClonedElementsGroup(i);const r=n.childCount-o,a=n._removeChildren(o,r);i._appendChild(a);const s=new Wc(n.parent,e);return this._breakAttributes(s,t)}}_addToClonedElementsGroup(e){if(!e.root.is('rootElement'))return;if(e.is('element'))for(const t of e.getChildren())this._addToClonedElementsGroup(t);const t=e.id;if(!t)return;let o=this._cloneGroups.get(t);o||(o=new Set,this._cloneGroups.set(t,o)),o.add(e),e._clonesGroup=o;}_removeFromClonedElementsGroup(e){if(e.is('element'))for(const t of e.getChildren())this._removeFromClonedElementsGroup(t);const t=e.id;if(t){const o=this._cloneGroups.get(t);o&&(o.delete(e),0===o.size&&this._cloneGroups.delete(t));}}}const sm=[Qd,Qc,ec,Yc,im],lm=(e)=>{const t=e.createElement('br');return t.dataset.ckeFiller=!0,t},dm=(e)=>e.createTextNode('\xA0'),cm=7;let mm='';for(let n=0;n<cm;n++)mm+='\u200B';const um=new WeakMap;class pm{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null;}markToSync(e,t){if('text'===e)this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if('attributes'===e)this.markedAttributes.add(t);else if('children'===e)this.markedChildren.add(t);else throw new _s('view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.')}}render(){let e;for(const e of this.markedChildren)this._updateChildrenMappings(e);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent));for(const e of this.markedAttributes)this._updateAttrs(e);for(const t of this.markedChildren)this._updateChildren(t,{inlineFillerPosition:e});for(const t of this.markedTexts)!this.markedChildren.has(t.parent)&&this.domConverter.mapViewToDom(t.parent)&&this._updateText(t,{inlineFillerPosition:e});if(e){const t=this.domConverter.viewPositionToDom(e),o=t.parent.ownerDocument;this._inlineFiller=we(t.parent)?t.parent:this._addInlineFiller(o,t.parent,t.offset);}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear();}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(t){const t=this._diffChildren(e),o=this._findReplaceActions(t.actions,t.actualDomChildren,t.expectedDomChildren);if(-1!==o.indexOf('replace')){const n={equal:0,insert:0,delete:0};for(const i of o)if('replace'===i){const o=n.equal+n.insert,i=n.equal+n.delete,r=e.getChild(o);r&&!r.is('uiElement')&&this._updateElementMappings(r,t.actualDomChildren[i]),Ee(t.expectedDomChildren[o]),n.equal++;}else n[i]++;}}}_updateElementMappings(e,t){const o=this.domConverter.mapDomToView(t);o&&(!o||o.isSimilar(e))||this.markedAttributes.add(e),this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e);}_addInlineFiller(e,t,o){const n=t instanceof Array?t:t.childNodes,i=n[o];if(Se(i))return i.data=mm+i.data,i;else{const i=e.createTextNode(mm);return Array.isArray(t)?n.splice(o,0,i):Pe(t,o,i),i}}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is('text')?Wc.createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Se(t.parent)&&we(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!we(e))throw new _s('view-renderer-filler-was-lost: The inline filler node was lost.');ve(e)?e.parentNode.removeChild(e):e.data=e.data.substr(cm),this._inlineFiller=null;}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,o=e.offset;if(!this.domConverter.mapViewToDom(t.root))return!1;if(!t.is('element'))return!1;if(!De(t))return!1;if(o===t.getFillerOffset())return!1;const n=e.nodeBefore,i=e.nodeAfter;return!(n instanceof Qd||i instanceof Qd)}_updateText(e,t){const o=this.domConverter.findCorrespondingDomText(e),n=this.domConverter.viewToDom(e,o.ownerDocument),i=o.data;let r=n.data;const a=t.inlineFillerPosition;if(a&&a.parent==e.parent&&a.offset==e.index&&(r=mm+r),i!=r){const e=Ie(i,r);for(const t of e)'insert'===t.type?o.insertData(t.index,t.values.join('')):o.deleteData(t.index,t.howMany);}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(t){const o=Array.from(t.attributes).map((e)=>e.name),n=e.getAttributeKeys();for(const o of n)t.setAttribute(o,e.getAttribute(o));for(const n of o)e.hasAttribute(n)||t.removeAttribute(n);}}_updateChildren(e,t){const o=this.domConverter.mapViewToDom(e);if(o){const n=t.inlineFillerPosition,r=this._getElementExpectedChildren(e,o,{bind:!0,inlineFillerPosition:n}),a=this._diffChildren(e,n),s=a.actualDomChildren;let l=0;const i=new Set;for(const e of a.actions)'insert'===e?(Pe(o,l,r[l]),l++):'delete'===e?(i.add(s[l]),Ee(s[l])):(this._markDescendantTextToSync(this.domConverter.domToView(r[l])),l++);for(const e of i)e.parentNode||this.domConverter.unbindDomElement(e);}}_diffChildren(e,t=null){const o=this.domConverter.mapViewToDom(e),n=o.childNodes,i=this._getElementExpectedChildren(e,o,{withChildren:!1,inlineFillerPosition:t});return{actions:Te(n,i,Be.bind(null,this.domConverter.blockFiller)),actualDomChildren:n,expectedDomChildren:i}}_getElementExpectedChildren(e,t,o){const n=Array.from(this.domConverter.viewChildrenToDom(e,t.ownerDocument,o)),i=o.inlineFillerPosition;return i&&i.parent===e&&this._addInlineFiller(t.ownerDocument,n,i.offset),n}_findReplaceActions(e,t,o){if(-1===e.indexOf('insert')||-1===e.indexOf('delete'))return e;let n=[],i=[],r=[];const a={equal:0,insert:0,delete:0};for(const s of e)'insert'===s?r.push(o[a.equal+a.insert]):'delete'===s?i.push(t[a.equal+a.delete]):(n=n.concat(Te(i,r,Me).map((e)=>'equal'===e?'replace':e)),n.push('equal'),i=[],r=[]),a[s]++;return n.concat(Te(i,r,Me).map((e)=>'equal'===e?'replace':e))}_markDescendantTextToSync(e){if(e)if(e.is('text'))this.markedTexts.add(e);else if(e.is('element'))for(const t of e.getChildren())this._markDescendantTextToSync(t);}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)));}_updateFakeSelection(e){const t=e.ownerDocument;let o=this._fakeSelectionContainer;o||(this._fakeSelectionContainer=o=t.createElement('div'),Object.assign(o.style,{position:'fixed',top:0,left:'-9999px',width:'42px'}),o.appendChild(t.createTextNode('\xA0'))),o.parentElement||e.appendChild(o),o.firstChild.data=this.selection.fakeSelectionLabel||'\xA0';const n=t.getSelection(),i=t.createRange();n.removeAllRanges(),i.selectNodeContents(o),n.addRange(i),this.domConverter.bindFakeSelection(o,this.selection);}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(this._domSelectionNeedsUpdate(t)){const o=this.domConverter.viewPositionToDom(this.selection.anchor),n=this.domConverter.viewPositionToDom(this.selection.focus);e.focus(),t.collapse(o.parent,o.offset),t.extend(n.parent,n.offset);}}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return!(t&&this.selection.isEqual(t))&&(this.selection.isCollapsed||!this.selection.isSimilar(t))}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const t=e.activeElement,o=this.domConverter.mapDomToView(t);t&&o&&e.getSelection().removeAllRanges();}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove();}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e);}}}f(pm,Mc);var gm={window,document},fm=function(e){return!!e&&1===e.nodeType&&cs(e)&&!hs(e)};class hm{constructor(e={}){this.blockFiller=e.blockFiller||lm,this.preElements=['pre'],this.blockElements=['p','div','h1','h2','h3','h4','h5','h6'],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap;}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Hc(t));}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e);}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const t of Array.from(e.childNodes))this.unbindDomElement(t);}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e);}viewToDom(e,t,o={}){if(e.is('text')){const o=this._processDataFromViewText(e);return t.createTextNode(o)}else{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is('documentFragment'))n=t.createDocumentFragment(),o.bind&&this.bindDocumentFragments(n,e);else{if(e.is('uiElement'))return n=e.render(t),o.bind&&this.bindElements(n,e),n;n=t.createElement(e.name),o.bind&&this.bindElements(n,e);for(const t of e.getAttributeKeys())n.setAttribute(t,e.getAttribute(t));}if(o.withChildren||void 0===o.withChildren)for(const i of this.viewChildrenToDom(e,t,o))n.appendChild(i);return n}}*viewChildrenToDom(e,t,o={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren())n===i&&(yield this.blockFiller(t)),yield this.viewToDom(r,t,o),i++;n===i&&(yield this.blockFiller(t));}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),o=this.viewPositionToDom(e.end),n=document.createRange();return n.setStart(t.parent,t.offset),n.setEnd(o.parent,o.offset),n}viewPositionToDom(e){const t=e.parent;if(t.is('text')){const o=this.findCorrespondingDomText(t);if(!o)return null;let n=e.offset;return we(o)&&(n+=cm),{parent:o,offset:n}}else{let o,n,i;if(0===e.offset){if(o=this.mapViewToDom(t),!o)return null;i=o.childNodes[0];}else{const t=e.nodeBefore;if(n=t.is('text')?this.findCorrespondingDomText(t):this.mapViewToDom(e.nodeBefore),!n)return null;o=n.parentNode,i=n.nextSibling;}if(Se(i)&&we(i))return{parent:i,offset:cm};const r=n?Le(n)+1:0;return{parent:o,offset:r}}}domToView(e,t={}){if(xe(e,this.blockFiller))return null;const o=this.getParentUIElement(e,this._domToViewMapping);if(o)return o;if(Se(e)){if(ve(e))return null;else{const t=this._processDataFromDomText(e);return''===t?null:new Qd(t)}}else if(this.isComment(e))return null;else{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new rm,t.bind&&this.bindDocumentFragments(e,o);else{const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();o=new Zd(n),t.bind&&this.bindElements(e,o);const r=e.attributes;for(let e=r.length-1;0<=e;e--)o._setAttribute(r[e].name,r[e].value);}if(t.withChildren||void 0===t.withChildren)for(const n of this.domChildrenToView(e,t))o._appendChild(n);return o}}*domChildrenToView(e,t={}){for(let o=0;o<e.childNodes.length;o++){const n=e.childNodes[o],i=this.domToView(n,t);null!==i&&(yield i);}}domSelectionToView(e){if(1===e.rangeCount){let t=e.getRangeAt(0).startContainer;Se(t)&&(t=t.parentNode);const o=this.fakeSelectionToView(t);if(o)return o}const t=this.isDomSelectionBackward(e),o=[];for(let t=0;t<e.rangeCount;t++){const n=e.getRangeAt(t),i=this.domRangeToView(n);i&&o.push(i);}return new Hc(o,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),o=this.domPositionToView(e.endContainer,e.endOffset);return t&&o?new Uc(t,o):null}domPositionToView(e,t){if(xe(e,this.blockFiller))return this.domPositionToView(e.parentNode,Le(e));const o=this.mapDomToView(e);if(o&&o.is('uiElement'))return Wc.createBefore(o);if(Se(e)){if(ve(e))return this.domPositionToView(e.parentNode,Le(e));const o=this.findCorrespondingViewText(e);let n=t;return o?(we(e)&&(n-=cm,n=0>n?0:n),new Wc(o,n)):null}if(0===t){const t=this.mapDomToView(e);if(t)return new Wc(t,0)}else{const o=e.childNodes[t-1],n=Se(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(n&&n.parent)return new Wc(n.parent,n.index+1)}return null}mapDomToView(e){return this.getParentUIElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(ve(e))return null;const t=this.getParentUIElement(e);if(t)return t;const o=e.previousSibling;if(o){if(!this.isElement(o))return null;const e=this.mapDomToView(o);if(e){const t=e.nextSibling;return t instanceof Qd?e.nextSibling:null}}else{const t=this.mapDomToView(e.parentNode);if(t){const e=t.getChild(0);return e instanceof Qd?e:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:e,scrollY:o}=gm.window,n=[];We(t,(e)=>{const{scrollLeft:t,scrollTop:o}=e;n.push([t,o]);}),t.focus(),We(t,(e)=>{const[t,o]=n.shift();e.scrollLeft=t,e.scrollTop=o;}),gm.window.scrollTo(e,o);}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(e){return e&&e.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const o=t.collapsed;return t.detach(),o}getParentUIElement(e){const t=ze(e);for(t.pop();t.length;){const e=t.pop(),o=this._domToViewMapping.get(e);if(o&&o.is('uiElement'))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}_isDomSelectionPositionCorrect(e,t){if(Se(e)&&we(e)&&t<cm)return!1;if(this.isElement(e)&&we(e.childNodes[t]))return!1;const o=this.mapDomToView(e);return!(o&&o.is('uiElement'))}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some((e)=>this.preElements.includes(e.name)))return t;if(' '==t.charAt(0)){const o=this._getTouchingViewTextNode(e,!1),n=o&&this._nodeEndsWithSpace(o);(n||!o)&&(t='\xA0'+t.substr(1));}if(' '==t.charAt(t.length-1)){const o=this._getTouchingViewTextNode(e,!0);o||(t=t.substr(0,t.length-1)+'\xA0');}return t.replace(/ {2}/g,' \xA0')}_nodeEndsWithSpace(e){if(e.getAncestors().some((e)=>this.preElements.includes(e.name)))return!1;const t=this._processDataFromViewText(e);return' '==t.charAt(t.length-1)}_processDataFromDomText(e){let t=e.data;if(qe(e,this.preElements))return ye(e);t=t.replace(/[ \n\t\r]{1,}/g,' ');const o=this._getTouchingInlineDomNode(e,!1),n=this._getTouchingInlineDomNode(e,!0),i=this._checkShouldLeftTrimDomText(o),r=this._checkShouldRightTrimDomText(e,n);return i&&(t=t.replace(/^ /,'')),r&&(t=t.replace(/ $/,'')),t=ye(new Text(t)),t=t.replace(/ \u00A0/g,'  '),i&&(t=t.replace(/^\u00A0/,' ')),(!Se(n)||'\xA0'==n.data.charAt(0))&&(t=t.replace(/\u00A0( *)$/,' $1')),t}_checkShouldLeftTrimDomText(e){return!e||!!fm(e)||/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1))}_checkShouldRightTrimDomText(e,t){return!t&&!we(e)}_getTouchingViewTextNode(e,t){const o=new qc({startPosition:t?Wc.createAfter(e):Wc.createBefore(e),direction:t?'forward':'backward'});for(const n of o){if(n.item.is('containerElement'))return null;if(n.item.is('br'))return null;if(n.item.is('textProxy'))return n.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const o=t?'nextNode':'previousNode',n=e.ownerDocument,i=ze(e)[0],r=n.createTreeWalker(i,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode(e){return Se(e)?NodeFilter.FILTER_ACCEPT:'BR'==e.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});r.currentNode=e;const a=r[o]();if(null!==a){const t=je(e,a);if(t&&!qe(e,this.blockElements,t)&&!qe(a,this.blockElements,t))return a}return null}}const bm=Rc({},Ps,{listenTo(e,...t){if(Oe(e)||Ue(e)){const o=this._getProxyEmitter(e)||new _m(e);o.attach(...t),e=o;}Ps.listenTo.call(this,e,...t);},stopListening(e,t,o){if(Oe(e)||Ue(e)){const t=this._getProxyEmitter(e);if(!t)return;e=t;}Ps.stopListening.call(this,e,t,o),e instanceof _m&&e.detach(t);},_getProxyEmitter(e){return r(this,He(e))}});var km=bm;class _m{constructor(e){a(this,He(e)),this._domNode=e;}}Rc(_m.prototype,Ps,{attach(e,t,o={}){if(!(this._domListeners&&this._domListeners[e])){const t=this._createDomListener(e,!!o.useCapture);this._domNode.addEventListener(e,t,!!o.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[e]=t;}},detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener();},_createDomListener(e,t){const o=(t)=>{this.fire(e,t);};return o.removeListener=()=>{this._domNode.removeEventListener(e,o,t),delete this._domListeners[e];},o}});class wm{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1;}enable(){this.isEnabled=!0;}disable(){this.isEnabled=!1;}destroy(){this.disable(),this.stopListening();}}f(wm,km);Ke.prototype.add=Ke.prototype.push=function(e){return this.__data__.set(e,'__lodash_hash_undefined__'),this},Ke.prototype.has=function(e){return this.__data__.has(e)};var vm=Ke,ym=function(e,t){for(var o=-1,n=e.length;++o<n;)if(t(e[o],o,e))return!0;return!1},xm=function(e,t,o,n,i,r){var a=i&2,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=r.get(e);if(d)return d==t;var c=-1,m=!0,u=i&1?new vm:void 0;for(r.set(e,t);++c<s;){var p=e[c],g=t[c];if(n)var f=a?n(g,p,c,t,e,r):n(p,g,c,e,t,r);if(void 0!==f){if(f)continue;m=!1;break}if(u){if(!ym(t,function(e,t){if(!u.has(t)&&(p===e||o(p,e,n,i,r)))return u.add(t)})){m=!1;break}}else if(!(p===g||o(p,g,n,i,r))){m=!1;break}}return r['delete'](e),m},Cm=Rd?Rd.prototype:void 0,Am=Cm?Cm.valueOf:void 0,Tm=function(e,t,o,n,i,r,a){switch(o){case'[object DataView]':if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case'[object ArrayBuffer]':return!!(e.byteLength==t.byteLength&&n(new _d(e),new _d(t)));case'[object Boolean]':case'[object Date]':return+e==+t;case'[object Error]':return e.name==t.name&&e.message==t.message;case'[object Number]':return e==+e?e==+t:t!=+t;case'[object RegExp]':case'[object String]':return e==t+'';case'[object Map]':var s=Cd;case'[object Set]':var l=r&2;if(s||(s=Sd),e.size!=t.size&&!l)return!1;var d=a.get(e);return d?d==t:(r|=1,a.set(e,t),xm(s(e),s(t),n,i,r,a));case'[object Symbol]':if(Am)return Am.call(e)==Am.call(t);}return!1},Pm=2,Em={};Em['[object Float32Array]']=Em['[object Float64Array]']=Em['[object Int8Array]']=Em['[object Int16Array]']=Em['[object Int32Array]']=Em['[object Uint8Array]']=Em['[object Uint8ClampedArray]']=Em['[object Uint16Array]']=Em['[object Uint32Array]']=!0,Em['[object Arguments]']=Em['[object Array]']=Em['[object ArrayBuffer]']=Em['[object Boolean]']=Em['[object DataView]']=Em['[object Date]']=Em['[object Error]']=Em['[object Function]']=Em['[object Map]']=Em['[object Number]']=Em['[object Object]']=Em['[object RegExp]']=Em['[object Set]']=Em['[object String]']=Em['[object WeakMap]']=!1;var Sm=Object.prototype,Om=Sm.toString,Im=function(e){return cs(e)&&wl(e.length)&&!!Em[Om.call(e)]},Rm='[object Arguments]',Vm='[object Array]',Fm='[object Object]',Nm=Object.prototype,Dm=Nm.hasOwnProperty,Mm=function(e,t,o,n,i,r){var a=Sl(e),s=Sl(t),l=Vm,d=Vm;a||(l=gd(e),l=l==Rm?Fm:l),s||(d=gd(t),d=d==Rm?Fm:d);var c=l==Fm&&!ds(e),m=d==Fm&&!ds(t),u=l==d;if(u&&!c)return r||(r=new al),a||Im(e)?xm(e,t,o,n,i,r):Tm(e,t,l,o,n,i,r);if(!(i&2)){var p=c&&Dm.call(e,'__wrapped__'),g=m&&Dm.call(t,'__wrapped__');if(p||g){var f=p?e.value():e,h=g?t.value():t;return r||(r=new al),o(f,h,n,i,r)}}return!!u&&(r||(r=new al),Ge(e,t,o,n,i,r))},Bm=$e,Lm=function(e,t,o){o='function'==typeof o?o:void 0;var n=o?o(e,t):void 0;return n===void 0?Bm(e,t,o):!!n};class zm extends wm{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this));}flush(){this._onMutations(this._mutationObserver.takeRecords());}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config);}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config);}disable(){super.disable(),this._mutationObserver.disconnect();}destroy(){super.destroy(),this._mutationObserver.disconnect();}_onMutations(e){function t(e,t){if(!Array.isArray(e))return e===t||!!(e.is('text')&&t.is('text'))&&e.data===t.data}if(0===e.length)return;const o=this.domConverter,n=new Map,i=new Set;for(const t of e)if('childList'===t.type){const e=o.mapDomToView(t.target);if(e&&e.is('uiElement'))continue;e&&!this._isBogusBrMutation(t)&&i.add(e);}for(const t of e){const e=o.mapDomToView(t.target);if(!(e&&e.is('uiElement'))&&'characterData'===t.type){const e=o.findCorrespondingViewText(t.target);e&&!i.has(e.parent)?n.set(e,{type:'text',oldText:e.data,newText:ye(t.target),node:e}):!e&&we(t.target)&&i.add(o.mapDomToView(t.target.parentNode));}}const r=[];for(const t of n.values())this.renderer.markToSync('text',t.node),r.push(t);for(const n of i){const e=o.mapViewToDom(n),i=Array.from(n.getChildren()),a=Array.from(o.domChildrenToView(e,{withChildren:!1}));Lm(i,a,t)||(this.renderer.markToSync('children',n),r.push({type:'children',oldChildren:i,newChildren:a,node:n}));}const a=e[0].target.ownerDocument.getSelection();let s=null;if(a&&a.anchorNode){const e=o.domPositionToView(a.anchorNode,a.anchorOffset),t=o.domPositionToView(a.focusNode,a.focusOffset);e&&t&&(s=new Hc(e),s.setFocus(t));}this.document.fire('mutations',r,s),this.view.render();}_isBogusBrMutation(e){let t=null;return null===e.nextSibling&&0===e.removedNodes.length&&1==e.addedNodes.length&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is('element','br')}}class jm{constructor(e,t,o){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Rc(this,o);}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault();}stopPropagation(){this.domEvent.stopPropagation();}}class qm extends wm{constructor(e){super(e),this.useCapture=!1;}observe(e){const t='string'==typeof this.domEventType?[this.domEventType]:this.domEventType;t.forEach((t)=>{this.listenTo(e,t,(e,t)=>{this.isEnabled&&this.onDomEvent(t);},{useCapture:this.useCapture});});}fire(e,t,o){this.isEnabled&&this.document.fire(e,new jm(this.view,t,o));}}class Wm extends qm{constructor(e){super(e),this.domEventType=['keydown','keyup'];}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey||e.metaKey,shiftKey:e.shiftKey,get keystroke(){return te(this)}});}}var Um=Date.now,Hm=Um,Km='Expected a function',Gm=is,$m=rs,Jm=Je;class Qm extends wm{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Jm((e)=>this.document.fire('selectionChangeDone',e),200);}observe(){const e=this.document;e.on('keydown',(t,o)=>{const n=e.selection;n.isFake&&Qe(o.keyCode)&&this.isEnabled&&(o.preventDefault(),this._handleSelectionMove(o.keyCode));},{priority:'lowest'});}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel();}_handleSelectionMove(e){const t=this.document.selection,o=new Hc(t.getRanges(),{backward:t.isBackward,fake:!1});(e==nm.arrowleft||e==nm.arrowup)&&o.setTo(o.getFirstPosition()),(e==nm.arrowright||e==nm.arrowdown)&&o.setTo(o.getLastPosition());const n={oldSelection:t,newSelection:o,domSelection:null};this.document.fire('selectionChange',n),this._fireSelectionChangeDoneDebounced(n);}}const Ym={error(e,t){console.error(n(e),t);},warn(e,t){console.warn(n(e),t);}};var Xm=Ym;class Zm extends wm{constructor(e){super(e),this.mutationObserver=e.getObserver(zm),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Jm((e)=>this.document.fire('selectionChangeDone',e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0;}observe(e){const t=e.ownerDocument;this._documents.has(t)||(this.listenTo(t,'selectionchange',()=>{this._handleSelectionChange(t);}),this._documents.add(t));}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel();}_handleSelectionChange(e){if(this.isEnabled&&(this.document.isFocused||this.document.isReadOnly)){this.mutationObserver.flush();const t=e.defaultView.getSelection(),o=this.domConverter.domSelectionToView(t);if(!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(t))){if(60<++this._loopbackCounter)return void Xm.warn('selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.');if(this.selection.isSimilar(o))this.view.render();else{const e={oldSelection:this.selection,newSelection:o,domSelection:t};this.document.fire('selectionChange',e),this._fireSelectionChangeDoneDebounced(e);}}}}_clearInfiniteLoop(){this._loopbackCounter=0;}}class eu extends qm{constructor(e){super(e),this.domEventType=['focus','blur'],this.useCapture=!0;const t=this.document;t.on('focus',()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.render(),50);}),t.on('blur',(o,n)=>{const i=t.selection.editableElement;(null===i||i===n.target)&&(t.isFocused=!1,e.render());});}onDomEvent(e){this.fire(e.type,e);}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy();}}class tu extends qm{constructor(e){super(e),this.domEventType=['compositionstart','compositionupdate','compositionend'];const t=this.document;t.on('compositionstart',()=>{t.isComposing=!0;}),t.on('compositionend',()=>{t.isComposing=!1;});}onDomEvent(e){this.fire(e.type,e);}}class ou{constructor(e){const t=Ye(e);if(Object.defineProperty(this,'_source',{value:e._source||e,writable:!0,enumerable:!1}),fm(e)||t){const o=t?e.startContainer:e;o.ownerDocument&&o.ownerDocument.body.contains(o)||Xm.warn('rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.',{source:e}),t?Ze(this,ou.getDomRangeRects(e)[0]):Ze(this,e.getBoundingClientRect());}else if(Ue(e)){const{innerWidth:t,innerHeight:o}=e;Ze(this,{top:0,right:t,bottom:o,left:0,width:t,height:o});}else Ze(this,e);}clone(){return new ou(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:is(this.top,e.top),right:rs(this.right,e.right),bottom:rs(this.bottom,e.bottom),left:is(this.left,e.left)};return t.width=t.right-t.left,t.height=t.bottom-t.top,0>t.width||0>t.height?null:new ou(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!et(e))for(let o=e.parentNode||e.commonAncestorContainer;o&&!et(o);){const e=new ou(o),n=t.getIntersection(e);if(n)n.getArea()<t.getArea()&&(t=n);else return null;o=o.parentNode;}return t}isEqual(e){for(const t of nu)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!!(t&&t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,o;if(Ue(e))t=e.innerWidth-e.document.documentElement.clientWidth,o=e.innerHeight-e.document.documentElement.clientHeight;else{const n=Xe(this._source);t=e.offsetWidth-e.clientWidth,o=e.offsetHeight-e.clientHeight,this.moveBy(n.left,n.top);}return this.width-=t,this.right-=t,this.height-=o,this.bottom-=o,this}static getDomRangeRects(e){const t=[],o=Array.from(e.getClientRects());if(o.length)for(const e of o)t.push(new ou(e));else{let o=e.startContainer;Se(o)&&(o=o.parentNode);const n=new ou(o.getBoundingClientRect());n.right=n.left,n.width=0,t.push(n);}return t}}const nu=['top','right','bottom','left','width','height'];Object.assign({},{scrollViewportToShowTarget:tt,scrollAncestorsToShowTarget:function(e){const t=ct(e);it(t,()=>new ou(e));}});class iu{constructor(){this.document=new $c,this.domConverter=new hm,this._renderer=new pm(this.domConverter,this.document.selection),this._renderer.bind('isFocused').to(this.document),this.domRoots=new Map,this._observers=new Map,this._ongoingChange=!1,this._renderingInProgress=!1,this._postFixersInProgress=!1,this._writer=new am(this.document),this.addObserver(zm),this.addObserver(Zm),this.addObserver(eu),this.addObserver(Wm),this.addObserver(Qm),this.addObserver(tu),Ce(this),re(this),this.on('render',()=>{this._render();});}attachDomRoot(e,t='main'){const o=this.document.getRoot(t);o._name=e.tagName.toLowerCase(),this.domRoots.set(t,e),this.domConverter.bindElements(e,o),this._renderer.markToSync('children',o),this._renderer.domDocuments.add(e.ownerDocument),o.on('change:children',(e,t)=>this._renderer.markToSync('children',t)),o.on('change:attributes',(e,t)=>this._renderer.markToSync('attributes',t)),o.on('change:text',(e,t)=>this._renderer.markToSync('text',t));for(const o of this._observers.values())o.observe(e,t);}getDomRoot(e='main'){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[o,n]of this.domRoots)t.observe(n,o);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable();}enableObservers(){for(const e of this._observers.values())e.enable();}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&tt({target:this.domConverter.viewRangeToDom(e),viewportOffset:20});}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e?(this.domConverter.focus(e),this.render()):Xm.warn('view-focus-no-selection: There is no selection in any editable to focus.');}}change(e){if(this._renderingInProgress||this._postFixersInProgress)throw new _s('cannot-change-view-tree: Attempting to make changes to the view when it is in incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behaviour and inconsistency between the DOM and the view.');return this._ongoingChange?void e(this._writer):void(this._ongoingChange=!0,e(this._writer),this._ongoingChange=!1,this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire('render'))}render(){this.change(()=>{});}destroy(){for(const e of this._observers.values())e.destroy();this.stopListening();}_render(){this._renderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this._renderingInProgress=!1;}}f(iu,Mc);class ru{constructor(e){this.parent=null,this._attrs=ut(e);}get index(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildIndex(this)))throw new _s('model-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get startOffset(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildStartOffset(this)))throw new _s('model-node-not-found-in-parent: The node\'s parent does not contain this node.');return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}get document(){return this.root==this?null:this.root.document||null}getPath(){const e=[];for(let t=this;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this:this.parent;o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}getCommonAncestor(e,t={}){const o=this.getAncestors(t),n=e.getAncestors(t);let r=0;for(;o[r]==n[r]&&o[r];)r++;return 0==r?null:o[r-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),o=e.getPath(),n=A(t,o);return!('prefix'!==n)||'extension'!==n&&t[n]<o[n]}isAfter(e){return this!=e&&!(this.root!==e.root)&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=[...this._attrs]),e}_clone(){return new ru(this._attrs)}_remove(){this.parent._removeChildren(this.index);}_setAttribute(e,t){this._attrs.set(e,t);}_setAttributesTo(e){this._attrs=ut(e);}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear();}is(e){return'node'==e}}class au extends ru{constructor(e,t){super(t),this._data=e||'';}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return'text'==e||super.is(e)}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new au(this.data,this.getAttributes())}static fromJSON(e){return new au(e.data,e.attributes)}}class su{constructor(e,t,o){if(this.textNode=e,0>t||t>e.offsetSize)throw new _s('model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');if(0>o||t+o>e.offsetSize)throw new _s('model-textproxy-wrong-length: Given length value is incorrect.');this.data=e.data.substring(t,t+o),this.offsetInText=t;}get startOffset(){return null===this.textNode.startOffset?null:this.textNode.startOffset+this.offsetInText}get offsetSize(){return this.data.length}get endOffset(){return null===this.startOffset?null:this.startOffset+this.offsetSize}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return'textProxy'==e}getPath(){const e=this.textNode.getPath();return 0<e.length&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];for(let o=e.includeSelf?this:this.parent;o;)t[e.parentFirst?'push':'unshift'](o),o=o.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class lu{constructor(e){this._nodes=[],e&&this._insertNodes(0,e);}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return-1==t?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return null===t?null:this._nodes.slice(0,t).reduce((e,t)=>e+t.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new _s('model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.');return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const o of this._nodes){if(e>=t&&e<t+o.offsetSize)return this.getNodeIndex(o);t+=o.offsetSize;}if(t!=e)throw new _s('model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.',{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const o of t)if(!(o instanceof ru))throw new _s('model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.');this._nodes.splice(e,0,...t);}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map((e)=>e.toJSON())}}class du extends ru{constructor(e,t,o){super(t),this.name=e,this._children=new lu,o&&this._insertChild(0,o);}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(e,t=null){return t?'element'==e&&t==this.name:'element'==e||e==this.name||super.is(e)}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const o of e)t=t.getChild(t.offsetToIndex(o));return t}toJSON(){const e=super.toJSON();if(e.name=this.name,0<this._children.length){e.children=[];for(const t of this._children)e.children.push(t.toJSON());}return e}_clone(e=!1){const t=e?Array.from(this._children).map((e)=>e._clone(!0)):null;return new du(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e);}_insertChild(e,t){const o=pt(t);for(const n of o)null!==n.parent&&n._remove(),n.parent=this;this._children._insertNodes(e,o);}_removeChildren(e,t=1){const o=this._children._removeNodes(e,t);for(const n of o)n.parent=null;return o}static fromJSON(e){let t=null;if(e.children){t=[];for(const o of e.children)o.name?t.push(du.fromJSON(o)):t.push(au.fromJSON(o));}return new du(e.name,e.attributes,t)}}class cu{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new _s('model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');const t=e.direction||'forward';if('forward'!=t&&'backward'!=t)throw new _s('model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.',{direction:t});this.direction=t,this.boundaries=e.boundaries||null,this.position=e.startPosition?uu.createFromPosition(e.startPosition):uu.createFromPosition(this.boundaries['backward'==this.direction?'end':'start']),this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent;}[Symbol.iterator](){return this}skip(e){let t,o,n,i;do n=this.position,i=this._visitedParent,({done:t,value:o}=this.next());while(!t&&e(o));t||(this.position=n,this._visitedParent=i);}next(){return'forward'==this.direction?this._next():this._previous()}_next(){const e=this.position,t=uu.createFromPosition(this.position),o=this._visitedParent;if(null===o.parent&&t.offset===o.maxOffset)return{done:!0};if(o===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const n=t.textNode?t.textNode:t.nodeAfter;if(n instanceof du)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=n),this.position=t,gt('elementStart',n,e,t,1);if(n instanceof au){let i;if(this.singleCharacters)i=1;else{let e=n.endOffset;this._boundaryEndParent==o&&this.boundaries.end.offset<e&&(e=this.boundaries.end.offset),i=e-t.offset;}const r=t.offset-n.startOffset,a=new su(n,r,i);return t.offset+=i,this.position=t,gt('text',a,e,t,i)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=o.parent,this.ignoreElementEnd?this._next():gt('elementEnd',o,e,t)}_previous(){const e=this.position,t=uu.createFromPosition(this.position),o=this._visitedParent;if(null===o.parent&&0===t.offset)return{done:!0};if(o==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const n=t.textNode?t.textNode:t.nodeBefore;if(n instanceof du)return t.offset--,this.shallow?(this.position=t,gt('elementStart',n,e,t,1)):(t.path.push(n.maxOffset),this.position=t,this._visitedParent=n,this.ignoreElementEnd?this._previous():gt('elementEnd',n,e,t));if(n instanceof au){let i;if(this.singleCharacters)i=1;else{let e=n.startOffset;this._boundaryStartParent==o&&this.boundaries.start.offset>e&&(e=this.boundaries.start.offset),i=t.offset-e;}const r=t.offset-n.startOffset,a=new su(n,r-i,i);return t.offset-=i,this.position=t,gt('text',a,e,t,i)}return t.path.pop(),this.position=t,this._visitedParent=o.parent,gt('elementStart',o,e,t,1)}}var mu=function(e){var t=e?e.length:0;return t?e[t-1]:void 0};class uu{constructor(e,t){if(!e.is('element')&&!e.is('documentFragment'))throw new _s('model-position-root-invalid: Position root invalid.');if(!(t instanceof Array)||0===t.length)throw new _s('model-position-path-incorrect: Position path must be an array with at least one item.',{path:t});t=e.getPath().concat(t),e=e.root,this.root=e,this.path=t;}get offset(){return mu(this.path)}set offset(e){this.path[this.path.length-1]=e;}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)e=e.getChild(e.offsetToIndex(this.path[t]));return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const e=this.parent.getChild(this.index);return e instanceof au&&e.startOffset<this.offset?e:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return'different';const t=A(this.path,e.path);return'same'===t?'same':'prefix'===t?'before':'extension'===t?'after':this.path[t]<e.path[t]?'before':'after'}getLastMatchingPosition(e,t={}){t.startPosition=this;const o=new cu(t);return o.skip(e),o.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is('documentFragment')?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(e){if(this.root!=e.root)return[];const t=A(this.path,e.path),o='string'==typeof t?rs(this.path.length,e.path.length):t;return this.path.slice(0,o)}getCommonAncestor(e){const t=this.getAncestors(),o=e.getAncestors();let n=0;for(;t[n]==o[n]&&t[n];)n++;return 0==n?null:t[n-1]}getShiftedBy(e){const t=uu.createFromPosition(this),o=t.offset+e;return t.offset=0>o?0:o,t}isAfter(e){return'after'==this.compareWith(e)}isBefore(e){return'before'==this.compareWith(e)}isEqual(e){return'same'==this.compareWith(e)}isTouching(e){let t=null,o=null;const n=this.compareWith(e);switch(n){case'same':return!0;case'before':t=uu.createFromPosition(this),o=uu.createFromPosition(e);break;case'after':t=uu.createFromPosition(e),o=uu.createFromPosition(this);break;default:return!1;}for(let n=t.parent;t.path.length+o.path.length;){if(t.isEqual(o))return!0;if(t.path.length>o.path.length){if(t.offset!==n.maxOffset)return!1;t.path=t.path.slice(0,-1),n=n.parent,t.offset++;}else{if(0!==o.offset)return!1;o.path=o.path.slice(0,-1);}}}_getTransformedByDeletion(e,t){const o=uu.createFromPosition(this);if(this.root!=e.root)return o;if('same'==A(e.getParentPath(),this.getParentPath())){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;o.offset-=t;}}else if('prefix'==A(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;if(e.offset<=this.path[n]){if(e.offset+t>this.path[n])return null;o.path[n]-=t;}}return o}_getTransformedByInsertion(e,t,o){const n=uu.createFromPosition(this);if(this.root!=e.root)return n;if('same'==A(e.getParentPath(),this.getParentPath()))(e.offset<this.offset||e.offset==this.offset&&o)&&(n.offset+=t);else if('prefix'==A(e.getParentPath(),this.getParentPath())){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t);}return n}_getTransformedByMove(e,t,o,n,i){let r=this._getTransformedByDeletion(e,o);return t=t._getTransformedByDeletion(e,o),r=null===r||i&&r.isEqual(e)?this._getCombined(e,t):r._getTransformedByInsertion(t,o,n),r}_getCombined(e,t){const o=e.path.length-1,n=uu.createFromPosition(t);return n.offset=n.offset+this.path[o]-e.offset,n.path=n.path.concat(this.path.slice(o+1)),n}static createAt(e,t){if(e instanceof uu)return this.createFromPosition(e);else{const o=e;if('end'==t)t=o.maxOffset;else{if('before'==t)return this.createBefore(o);if('after'==t)return this.createAfter(o);t||(t=0);}return this.createFromParentAndOffset(o,t)}}static createAfter(e){if(!e.parent)throw new _s('model-position-after-root: You cannot make a position after root.',{root:e});return this.createFromParentAndOffset(e.parent,e.endOffset)}static createBefore(e){if(!e.parent)throw new _s('model-position-before-root: You cannot make a position before root.',{root:e});return this.createFromParentAndOffset(e.parent,e.startOffset)}static createFromParentAndOffset(e,t){if(!e.is('element')&&!e.is('documentFragment'))throw new _s('model-position-parent-incorrect: Position parent have to be a element or document fragment.');const o=e.getPath();return o.push(t),new this(e.root,o)}static createFromPosition(e){return new this(e.root,e.path.slice())}static fromJSON(e,t){if('$graveyard'===e.root)return new uu(t.graveyard,e.path);if(!t.getRoot(e.root))throw new _s('model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.',{rootName:e.root});return new uu(t.getRoot(e.root),e.path)}}class pu{constructor(e,t=null){this.start=uu.createFromPosition(e),this.end=t?uu.createFromPosition(t):uu.createFromPosition(e);}*[Symbol.iterator](){yield*new cu({boundaries:this,ignoreElementEnd:!0});}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const o=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return o&&n}containsItem(e){const t=uu.createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new pu(this.start,e.start)),this.containsPosition(e.end)&&t.push(new pu(e.end,this.end))):t.push(pu.createFromRange(this)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,o=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(o=e.end),new pu(t,o)}return null}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,o=uu.createFromPosition(this.start);for(let n=o.parent;o.path.length>t+1;){const t=n.maxOffset-o.offset;0!=t&&e.push(new pu(o,o.getShiftedBy(t))),o.path=o.path.slice(0,-1),o.offset++,n=n.parent;}for(;o.path.length<=this.end.path.length;){const t=this.end.path[o.path.length-1],n=t-o.offset;0!=n&&e.push(new pu(o,o.getShiftedBy(n))),o.offset=t,o.path.push(0);}return e}getWalker(e={}){return e.boundaries=this,new cu(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new cu(e);for(const o of t)yield o.item;}*getPositions(e={}){e.boundaries=this;const t=new cu(e);yield t.position;for(const o of t)yield o.nextPosition;}getTransformedByDelta(e){const t=[pu.createFromRange(this)],o=new Set(['insert','move','remove','reinsert']);for(const n of e.operations)if(o.has(n.type))for(let o=0;o<t.length;o++){let i;i='insert'==n.type?t[o]._getTransformedByDocumentChange(n.type,e.type,n.position,n.nodes.maxOffset):t[o]._getTransformedByDocumentChange(n.type,e.type,n.targetPosition,n.howMany,n.sourcePosition),t.splice(o,1,...i),o+=i.length-1;}return t}getTransformedByDeltas(e){const t=[pu.createFromRange(this)];for(const o of e)for(let e=0;e<t.length;e++){const n=t[e].getTransformedByDelta(o);t.splice(e,1,...n),e+=n.length-1;}for(let o=0;o<t.length;o++){const e=t[o];for(let n=o+1;n<t.length;n++){const o=t[n];(e.containsRange(o)||o.containsRange(e)||e.isEqual(o))&&t.splice(n,1);}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}_getTransformedByDocumentChange(e,t,o,n,i){if('insert'==e)return this._getTransformedByInsertion(o,n,!1,!1);else{const e=pu.createFromPositionAndShift(i,n);if('merge'==t&&this.isCollapsed&&(this.start.isEqual(e.start)||this.start.isEqual(e.end))){const t=this.start.offset-e.start.offset;return[new pu(o.getShiftedBy(t))]}if('split'==t&&this.isCollapsed&&this.end.isEqual(e.end))return[new pu(o.getShiftedBy(n))];if((e.containsPosition(this.start)||e.start.isEqual(this.start))&&this.containsPosition(e.end)&&this.end.isAfter(o)){const e=this.start._getCombined(i,o._getTransformedByDeletion(i,n)),t=this.end._getTransformedByMove(i,o,n,!1,!1);return[new pu(e,t)]}if((e.containsPosition(this.end)||e.end.isEqual(this.end))&&this.containsPosition(e.start)&&this.start.isBefore(o)){const e=this.start._getTransformedByMove(i,o,n,!0,!1),t=this.end._getCombined(i,o._getTransformedByDeletion(i,n));return[new pu(e,t)]}return this._getTransformedByMove(i,o,n)}}_getTransformedByInsertion(e,t,o=!1,n=!1){if(o&&this.containsPosition(e))return[new pu(this.start,e),new pu(e._getTransformedByInsertion(e,t,!0),this.end._getTransformedByInsertion(e,t,this.isCollapsed))];else{const o=pu.createFromRange(this),i=!!o.isCollapsed||n;return o.start=o.start._getTransformedByInsertion(e,t,!n),o.end=o.end._getTransformedByInsertion(e,t,i),[o]}}_getTransformedByMove(e,t,o){if(this.isCollapsed){const n=this.start._getTransformedByMove(e,t,o,!0,!1);return[new pu(n)]}let n;const i=new pu(e,e.getShiftedBy(o)),r=this.getDifference(i);let a=null;const s=this.getIntersection(i);1==r.length?a=new pu(r[0].start._getTransformedByDeletion(e,o),r[0].end._getTransformedByDeletion(e,o)):2==r.length&&(a=new pu(this.start,this.end._getTransformedByDeletion(e,o)));const l=t._getTransformedByDeletion(e,o);return n=a?a._getTransformedByInsertion(l,o,null!==s):[],s&&n.push(new pu(s.start._getCombined(i.start,l),s.end._getCombined(i.start,l))),n}static createFromPositionAndShift(e,t){const o=e,n=e.getShiftedBy(t);return 0<t?new this(o,n):new this(n,o)}static createFromParentsAndOffsets(e,t,o,n){return new this(uu.createFromParentAndOffset(e,t),uu.createFromParentAndOffset(o,n))}static createFromRange(e){return new this(e.start,e.end)}static createIn(e){return this.createFromParentsAndOffsets(e,0,e,e.maxOffset)}static createOn(e){return this.createFromPositionAndShift(uu.createBefore(e),e.offsetSize)}static createCollapsedAt(e,t){const o=uu.createAt(e,t),n=uu.createFromPosition(o);return new pu(o,n)}static createFromRanges(e){if(0===e.length)throw new _s('range-create-from-ranges-empty-array: At least one range has to be passed.');else if(1==e.length)return this.createFromRange(e[0]);const t=e[0];e.sort((e,t)=>e.start.isAfter(t.start)?1:-1);const o=e.indexOf(t),n=new this(t.start,t.end);for(let t=o-1;0<=t&&e[t].end.isEqual(n.start);t++)n.start=uu.createFromPosition(e[t].start);for(let t=o+1;t<e.length&&e[t].start.isEqual(n.end);t++)n.end=uu.createFromPosition(e[t].end);return n}static fromJSON(e,t){return new this(uu.fromJSON(e.start,t),uu.fromJSON(e.end,t))}}class gu{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this.on('modelToViewPosition',(e,t)=>{if(!t.viewPosition){const e=this._modelToViewMapping.get(t.modelPosition.parent);t.viewPosition=this._findPositionIn(e,t.modelPosition.offset);}},{priority:'low'}),this.on('viewToModelPosition',(e,t)=>{if(t.modelPosition)return;let o=t.viewPosition.parent,n=this._viewToModelMapping.get(o);for(;!n;)o=o.parent,n=this._viewToModelMapping.get(o);const i=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,o);t.modelPosition=uu.createFromParentAndOffset(n,i);},{priority:'low'});}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e);}unbindViewElement(e){const t=this.toModelElement(e);this._viewToModelMapping.delete(e),this._modelToViewMapping.get(t)==e&&this._modelToViewMapping.delete(t);}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t);}bindElementToMarker(e,t){const o=this._markerNameToElements.get(t)||new Set;o.add(e),this._markerNameToElements.set(t,o);}unbindElementsFromMarkerName(e){this._markerNameToElements.delete(e);}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map;}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new pu(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new Uc(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire('viewToModelPosition',t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const o={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire('modelToViewPosition',o),o.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const o=new Set;for(const n of t)if(n.is('attributeElement'))for(const e of n.getElementsWithSameId())o.add(e);else o.add(n);return o}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t);}_toModelOffset(e,t,o){if(o!=e){const n=this._toModelOffset(e.parent,e.index,o),i=this._toModelOffset(e,t,e);return n+i}if(e.is('text'))return t;let n=0;for(let r=0;r<t;r++)n+=this.getModelLength(e.getChild(r));return n}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name)){const t=this._viewToModelLengthCallbacks.get(e.name);return t(e)}if(this._viewToModelMapping.has(e))return 1;if(e.is('text'))return e.data.length;if(e.is('uiElement'))return 0;else{let t=0;for(const o of e.getChildren())t+=this.getModelLength(o);return t}}_findPositionIn(e,t){let o=0,n=0,i=0,r;if(e.is('text'))return new Wc(e,t);for(;n<t;)r=e.getChild(i),o=this.getModelLength(r),n+=o,i++;return n==t?this._moveViewPositionToTextNode(new Wc(e,i)):this._findPositionIn(r,t-(n-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,o=e.nodeAfter;if(t instanceof Qd)return new Wc(t,t.data.length);return o instanceof Qd?new Wc(o,0):e}}f(gu,Ps);class fu{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map;}add(e,t){t=ft(t),e instanceof su&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0);}consume(e,t){return t=ft(t),e instanceof su&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=ft(t),e instanceof su&&(e=this._getSymbolForTextProxy(e));const o=this._consumable.get(e);if(o===void 0)return null;const n=o.get(t);return void 0===n?null:n}revert(e,t){t=ft(t),e instanceof su&&(e=this._getSymbolForTextProxy(e));const o=this.test(e,t);return!1===o?(this._consumable.get(e).set(t,!0),!0):!0!==o&&null}_getSymbolForTextProxy(e){let t=null;const o=this._textProxyRegistry.get(e.startOffset);if(o){const n=o.get(e.endOffset);n&&(t=n.get(e.parent));}return t||(t=this._addSymbolForTextProxy(e.startOffset,e.endOffset,e.parent)),t}_addSymbolForTextProxy(e,t,o){const n=Symbol('textProxySymbol');let i,r;return i=this._textProxyRegistry.get(e),i||(i=new Map,this._textProxyRegistry.set(e,i)),r=i.get(t),r||(r=new Map,i.set(t,r)),r.set(o,n),n}}class hu{constructor(e={}){this.conversionApi=Rc({dispatcher:this},e);}convertChanges(e,t){for(const o of e.getMarkersToRemove())this.convertMarkerRemove(o.name,o.range,t);for(const o of e.getChanges())'insert'==o.type?this.convertInsert(pu.createFromPositionAndShift(o.position,o.length),t):'remove'==o.type?this.convertRemove(o.position,o.length,o.name,t):this.convertAttribute(o.range,o.attributeKey,o.attributeOldValue,o.attributeNewValue,t);for(const o of e.getMarkersToAdd())this.convertMarkerAdd(o.name,o.range,t);}convertInsert(e,t){this.conversionApi.writer=t,this.conversionApi.consumable=this._createInsertConsumable(e);for(const o of e){const e=o.item,t=pu.createFromPositionAndShift(o.previousPosition,o.length),n={item:e,range:t};this._testAndFire('insert',n);for(const t of e.getAttributeKeys())n.attributeKey=t,n.attributeOldValue=null,n.attributeNewValue=e.getAttribute(t),this._testAndFire(`attribute:${t}`,n);}this._clearConversionApi();}convertRemove(e,t,o,n){this.conversionApi.writer=n,this.fire('remove:'+o,{position:e,length:t},this.conversionApi),this._clearConversionApi();}convertAttribute(e,t,o,n,i){this.conversionApi.writer=i,this.conversionApi.consumable=this._createConsumableForRange(e,`attribute:${t}`);for(const r of e){const e=r.item,i=pu.createFromPositionAndShift(r.previousPosition,r.length);this._testAndFire(`attribute:${t}`,{item:e,range:i,attributeKey:t,attributeOldValue:o,attributeNewValue:n});}this._clearConversionApi();}convertSelection(e,t,o){const n=Array.from(t.getMarkersAtPosition(e.getFirstPosition()));if(this.conversionApi.writer=o,this.conversionApi.consumable=this._createSelectionConsumable(e,n),this.fire('selection',{selection:e},this.conversionApi),!!e.isCollapsed){for(const t of n){const o=t.getRange();if(!ht(e.getFirstPosition(),t,this.conversionApi.mapper))continue;const n={item:e,markerName:t.name,markerRange:o};this.conversionApi.consumable.test(e,'addMarker:'+t.name)&&this.fire('addMarker:'+t.name,n,this.conversionApi);}for(const t of e.getAttributeKeys()){const o={item:e,range:e.getFirstRange(),attributeKey:t,attributeOldValue:null,attributeNewValue:e.getAttribute(t)};this.conversionApi.consumable.test(e,'attribute:'+o.attributeKey)&&this.fire('attribute:'+o.attributeKey,o,this.conversionApi);}this._clearConversionApi();}}convertMarkerAdd(e,t,o){if(t.root.document&&'$graveyard'!=t.root.rootName){this.conversionApi.writer=o;const n='addMarker:'+e;if(t.isCollapsed){const o=new fu;return o.add(t,n),this.conversionApi.consumable=o,void this.fire(n,{markerName:e,markerRange:t},this.conversionApi)}this.conversionApi.consumable=this._createConsumableForRange(t,n);for(const o of t.getItems()){if(!this.conversionApi.consumable.test(o,n))continue;const i={item:o,range:pu.createOn(o),markerName:e,markerRange:t};this.fire(n,i,this.conversionApi);}this._clearConversionApi();}}convertMarkerRemove(e,t,o){t.root.document&&'$graveyard'!=t.root.rootName&&(this.conversionApi.writer=o,this.fire('removeMarker:'+e,{markerName:e,markerRange:t},this.conversionApi),this._clearConversionApi());}_createInsertConsumable(e){const t=new fu;for(const o of e){const e=o.item;t.add(e,'insert');for(const o of e.getAttributeKeys())t.add(e,'attribute:'+o);}return t}_createConsumableForRange(e,t){const o=new fu;for(const n of e.getItems())o.add(n,t);return o}_createSelectionConsumable(e,t){const o=new fu;o.add(e,'selection');for(const n of t)o.add(e,'addMarker:'+n.name);for(const n of e.getAttributeKeys())o.add(e,'attribute:'+n);return o}_testAndFire(e,t){if(this.conversionApi.consumable.test(t.item,e)){const o=t.item.name||'$text';this.fire(e+':'+o,t,this.conversionApi);}}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable;}}f(hu,Ps);class bu{constructor(e,t,o){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,o);}get anchor(){if(0<this._ranges.length){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(0<this._ranges.length){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){const e=this._ranges.length;return!(1!==e)&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let o=!1;for(const n of e._ranges)if(t.isEqual(n)){o=!0;break}if(!o)return!1}return!0}*getRanges(){for(const e of this._ranges)yield pu.createFromRange(e);}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?pu.createFromRange(e):null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?pu.createFromRange(e):null}getFirstPosition(){const e=this.getFirstRange();return e?uu.createFromPosition(e.start):null}getLastPosition(){const e=this.getLastRange();return e?uu.createFromPosition(e.end):null}setTo(e,t,o){if(null===e)this._setRanges([]);else if(e instanceof bu)this._setRanges(e.getRanges(),e.isBackward);else if(e&&'function'==typeof e.getRanges)this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof pu)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof uu)this._setRanges([new pu(e)]);else if(e instanceof ru){const n=!!o&&!!o.backward;let i;if('in'==t)i=pu.createIn(e);else if('on'==t)i=pu.createOn(e);else if(t!==void 0)i=pu.createCollapsedAt(e,t);else throw new _s('model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.');this._setRanges([i],n);}else if(P(e))this._setRanges(e,t&&!!t.backward);else throw new _s('model-selection-setTo-not-selectable: Cannot set selection to given place.')}_setRanges(e,t=!1){e=Array.from(e);const o=e.some((e)=>{if(!(e instanceof pu))throw new _s('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');return this._ranges.every((t)=>!t.isEqual(e))});if(e.length!==this._ranges.length||o){this._removeAllRanges();for(const t of e)this._pushRange(t);this._lastRangeBackward=!!t,this.fire('change:range',{directChange:!0});}}setFocus(e,t){if(null===this.anchor)throw new _s('model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.');const o=uu.createAt(e,t);if('same'!=o.compareWith(this.focus)){const e=this.anchor;this._ranges.length&&this._popRange(),'before'==o.compareWith(e)?(this._pushRange(new pu(o,e)),this._lastRangeBackward=!0):(this._pushRange(new pu(e,o)),this._lastRangeBackward=!1),this.fire('change:range',{directChange:!0});}}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire('change:attribute',{attributeKeys:[e],directChange:!0}));}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire('change:attribute',{attributeKeys:[e],directChange:!0}));}getSelectedElement(){if(1!==this.rangeCount)return null;const e=this.getFirstRange(),t=e.start.nodeAfter,o=e.end.nodeBefore;return t instanceof du&&t==o?t:null}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const o=kt(t.start,e);o&&(yield o);for(const o of t.getWalker())'elementEnd'==o.type&&bt(o.item,e)&&(yield o.item);const n=kt(t.end,e);n&&!t.end.isTouching(uu.createAt(n))&&(yield n);}}containsEntireContent(e=this.anchor.root){const t=uu.createAt(e),o=uu.createAt(e,'end');return t.isTouching(this.getFirstPosition())&&o.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(pu.createFromRange(e));}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new _s('model-selection-range-intersects: Trying to add a range that intersects with another range from selection.',{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;0<this._ranges.length;)this._popRange();}_popRange(){this._ranges.pop();}}f(bu,Ps);class ku extends pu{constructor(e,t){super(e,t),_t.call(this);}detach(){this.stopListening();}}f(ku,Ps);const _u='selection:';class wu{constructor(e){this._selection=new vu(e),this._selection.delegate('change:range').to(this),this._selection.delegate('change:attribute').to(this);}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy();}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}_setFocus(e,t){this._selection.setFocus(e,t);}_setTo(e,t,o){this._selection.setTo(e,t,o);}_setAttribute(e,t){this._selection.setAttribute(e,t);}_removeAttribute(e){this._selection.removeAttribute(e);}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e);}static _getStoreAttributeKey(e){return _u+e}static _isStoreAttributeKey(e){return e.startsWith(_u)}}f(wu,Ps);class vu extends bu{constructor(e){super(),this._model=e.model,this._document=e,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.on('change:range',()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new _s('document-selection-wrong-position: Range from document selection starts or ends at incorrect position.',{range:e})}),this.listenTo(this._document,'change',(e,t)=>{this._updateAttributes(!1),yt(this._model,t);}),this.listenTo(this._model,'applyOperation',()=>{for(;this._fixGraveyardRangesData.length;){const{liveRange:e,sourcePosition:t}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(e,t);}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire('change:range',{directChange:!1}));},{priority:'lowest'});}get isCollapsed(){const e=this._ranges.length;return 0===e?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return 0<this._ranges.length}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening();}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange();}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,o){super.setTo(e,t,o),this._refreshAttributes();}setFocus(e,t){super.setFocus(e,t),this._refreshAttributes();}setAttribute(e,t){if(this._setAttribute(e,t)){this.fire('change:attribute',{attributeKeys:[e],directChange:!0});}}removeAttribute(e){if(this._removeAttribute(e)){this.fire('change:attribute',{attributeKeys:[e],directChange:!0});}}overrideGravity(){const e=i();return this._overriddenGravityRegister.add(e),1===this._overriddenGravityRegister.size&&this._refreshAttributes(),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new _s('document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.',{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._refreshAttributes();}_refreshAttributes(){this._updateAttributes(!0);}_popRange(){this._ranges.pop().detach();}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t);}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return void Xm.warn('model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.');const t=ku.createFromRange(e);return t.on('change:range',(e,o,n)=>{this._hasChangedRange=!0,t.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:t,sourcePosition:n.sourcePosition});}),t}_updateAttributes(e){const t=ut(this._getSurroundingAttributes()),o=ut(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[e,t]of this._attributePriority)'low'==t&&(this._attrs.delete(e),this._attributePriority.delete(e));this._setAttributesTo(t);const n=[];for(const[t,i]of this.getAttributes())o.has(t)&&o.get(t)===i||n.push(t);for(const[t]of o)this.hasAttribute(t)||n.push(t);0<n.length&&this.fire('change:attribute',{attributeKeys:n,directChange:!1});}_setAttribute(e,t,o=!0){const n=o?'normal':'low';if('low'==n&&'normal'==this._attributePriority.get(e))return!1;const i=super.getAttribute(e);return i!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,n),!0)}_removeAttribute(e,t=!0){const o=t?'normal':'low';return('low'!=o||'normal'!=this._attributePriority.get(e))&&(this._attributePriority.set(e,o),!!super.hasAttribute(e))&&(this._attrs.delete(e),!0)}_setAttributesTo(e){const t=new Set;for(const[t,o]of this.getAttributes())e.get(t)!==o&&this._removeAttribute(t,!1);for(const[o,n]of e){const e=this._setAttribute(o,n,!1);e&&t.add(o);}return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())if(t.startsWith(_u)){const o=t.substr(_u.length);yield[o,e.getAttribute(t)];}}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let o=null;if(!this.isCollapsed){const e=this.getFirstRange();for(const n of e){if(n.item.is('element')&&t.isObject(n.item))break;'text'==n.type&&null===o&&(o=n.item.getAttributes());}}else{const t=e.textNode?e.textNode:e.nodeBefore,n=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(o=vt(t)),o||(o=vt(n)),!this.isGravityOverridden&&!o)for(let e=t;e&&!o;)e=e.previousSibling,o=vt(e);if(!o)for(let e=n;e&&!o;)e=e.nextSibling,o=vt(e);o||(o=this._getStoredAttributes());}return o}_fixGraveyardSelection(e,t){const o=uu.createFromPosition(t),n=this._model.schema.getNearestSelectionRange(o),i=this._ranges.indexOf(e);if(this._ranges.splice(i,1),e.detach(),n){const e=this._prepareRange(n);this._ranges.splice(i,0,e);}}}var yu=function(e){return Gd(e,!0,!0)};class xu{constructor(e){this.model=e,this.view=new iu,this.mapper=new gu,this.downcastDispatcher=new hu({mapper:this.mapper});const t=this.model.document,o=t.selection,n=this.model.markers;this.listenTo(t,'change',()=>{this.view.change((e)=>{this.downcastDispatcher.convertChanges(t.differ,e),this.downcastDispatcher.convertSelection(o,n,e);});},{priority:'low'}),this.listenTo(this.view.document,'selectionChange',Nt(this.model,this.mapper)),this.downcastDispatcher.on('insert:$text',It(),{priority:'lowest'}),this.downcastDispatcher.on('remove',Rt(),{priority:'low'}),this.downcastDispatcher.on('selection',Bt(),{priority:'low'}),this.downcastDispatcher.on('selection',Dt(),{priority:'low'}),this.downcastDispatcher.on('selection',Mt(),{priority:'low'}),this.view.document.roots.bindTo(this.model.document.roots).using((e)=>{if('$graveyard'==e.rootName)return null;const t=new jc(e.name);return t.rootName=e.rootName,t._document=this.view.document,this.mapper.bindElements(e,t),t});}destroy(){this.view.destroy(),this.stopListening();}}f(xu,Mc);class Cu{constructor(e,t=[]){this._editor=e,this._availablePlugins=new Map,this._plugins=new Map;for(const o of t)this._availablePlugins.set(o,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o);}*[Symbol.iterator](){for(const e of this._plugins)'function'==typeof e[0]&&(yield e);}get(e){return this._plugins.get(e)}load(e,t=[]){function o(e){return m.includes(e)||a.get(e)||l.has(e)?void 0:n(e).catch((t)=>{throw Xm.error('plugincollection-load: It was not possible to load the plugin.',{plugin:e}),t})}function n(e){return new Promise((n)=>{l.add(e),e.requires&&e.requires.forEach((n)=>{const r=i(n);if(t.includes(r))throw new _s('plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.',{plugin:r,requiredBy:e});o(r);});const r=new e(s);a._add(e,r),d.push(r),n();})}function i(e){return'function'==typeof e?e:a._availablePlugins.get(e)}function r(e){return e.map((e)=>i(e)).filter((e)=>!!e)}const a=this,s=this._editor,l=new Set,d=[],c=r(e),m=r(t),u=function(e){const t=[];for(const o of e)i(o)||t.push(o);return t.length?t:null}(e);if(u){const e='plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.';return Xm.error(e,{plugins:u}),Promise.reject(new _s(e,{plugins:u}))}return Promise.all(c.map(o)).then(()=>d)}destroy(){const e=Array.from(this).map(([,e])=>e).filter((e)=>'function'==typeof e.destroy).map((e)=>e.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const o=e.pluginName;o&&(this._plugins.has(o)?Xm.warn('plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.',{pluginName:o,plugin1:this._plugins.get(o).constructor,plugin2:e}):this._plugins.set(o,t));}}class Au{constructor(){this._commands=new Map;}add(e,t){this._commands.set(e,t);}get(e){return this._commands.get(e)}execute(e,...t){const o=this.get(e);if(!o)throw new _s('commandcollection-command-not-found: Command does not exist.',{commandName:e});o.execute(...t);}*names(){yield*this._commands.keys();}*commands(){yield*this._commands.values();}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy();}}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});class Tu{constructor(e){this.language=e||'en',this.t=(...e)=>this._t(...e);}_t(e,t){let o=Lt(this.language,e);return t&&(o=o.replace(/%(\d+)/g,(e,o)=>o<t.length?t[o]:e)),o}}class Pu{constructor(){this._consumables=new Map;}add(e,t){let o;return e.is('text')||e.is('documentFragment')?void this._consumables.set(e,!0):void(this._consumables.has(e)?o=this._consumables.get(e):(o=new Eu,this._consumables.set(e,o)),o.add(t))}test(e,t){const o=this._consumables.get(e);return void 0===o?null:e.is('text')||e.is('documentFragment')?o:o.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is('text')||e.is('documentFragment')?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const o=this._consumables.get(e);o!==void 0&&(e.is('text')||e.is('documentFragment')?this._consumables.set(e,!0):o.revert(t));}static consumablesFromElement(e){const t={name:!0,attributes:[],classes:[],styles:[]},o=e.getAttributeKeys();for(const n of o)'style'!=n&&'class'!=n&&t.attributes.push(n);const n=e.getClassNames();for(const o of n)t.classes.push(o);const i=e.getStyleNames();for(const o of i)t.styles.push(o);return t}static createFrom(e,t){if(t||(t=new Pu),e.is('text'))return t.add(e),t;e.is('element')&&t.add(e,Pu.consumablesFromElement(e)),e.is('documentFragment')&&t.add(e);for(const o of e.getChildren())t=Pu.createFrom(o,t);return t}}class Eu{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map};}add(e){for(const t in e.name&&(this._canConsumeName=!0),this._consumables)t in e&&this._add(t,e[t]);}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const o=this._test(t,e[t]);if(!0!==o)return o}return!0}consume(e){for(const t in e.name&&(this._canConsumeName=!1),this._consumables)t in e&&this._consume(t,e[t]);}revert(e){for(const t in e.name&&(this._canConsumeName=!0),this._consumables)t in e&&this._revert(t,e[t]);}_add(e,t){const o=Sl(t)?t:[t],n=this._consumables[e];for(const i of o){if('attributes'===e&&('class'===i||'style'===i))throw new _s('viewconsumable-invalid-attribute: Classes and styles should be handled separately.');n.set(i,!0);}}_test(e,t){const o=Sl(t)?t:[t],n=this._consumables[e];for(const i of o)if('attributes'===e&&('class'===i||'style'===i)){const e='class'==i?'classes':'styles',t=this._test(e,[...this._consumables[e].keys()]);if(!0!==t)return t}else{const e=n.get(i);if(e===void 0)return null;if(!e)return!1}return!0}_consume(e,t){const o=Sl(t)?t:[t],n=this._consumables[e];for(const i of o)if('attributes'===e&&('class'===i||'style'===i)){const e='class'==i?'classes':'styles';this._consume(e,[...this._consumables[e].keys()]);}else n.set(i,!1);}_revert(e,t){const o=Sl(t)?t:[t],n=this._consumables[e];for(const i of o)if('attributes'===e&&('class'===i||'style'===i)){const e='class'==i?'classes':'styles';this._revert(e,[...this._consumables[e].keys()]);}else{const e=n.get(i);!1===e&&n.set(i,!0);}}}class Su{constructor(){this._sourceDefinitions={},this.decorate('checkChild'),this.decorate('checkAttribute'),this.on('checkAttribute',(e,t)=>{t[0]=new Ou(t[0]);},{priority:'highest'}),this.on('checkChild',(e,t)=>{t[0]=new Ou(t[0]),t[1]=this.getDefinition(t[1]);},{priority:'highest'});}register(e,t){if(this._sourceDefinitions[e])throw new _s('schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.',{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache();}extend(e,t){if(!this._sourceDefinitions[e])throw new _s('schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.',{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache();}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t='string'==typeof e?e:e.is&&(e.is('text')||e.is('textProxy'))?'$text':e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!!(t&&t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!!(t.isLimit||t.isObject)}isObject(e){const t=this.getDefinition(e);return!!(t&&t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const o=this.getDefinition(e.last);return!!o&&o.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof uu){const t=e.nodeBefore,o=e.nodeAfter;if(!(t instanceof du))throw new _s('schema-check-merge-no-element-before: The node before the merge position must be an element.');if(!(o instanceof du))throw new _s('schema-check-merge-no-element-after: The node after the merge position must be an element.');return this.checkMerge(t,o)}for(const o of t.getChildren())if(!this.checkChild(e,o))return!1;return!0}addChildCheck(e){this.on('checkChild',(t,[o,n])=>{if(n){const i=e(o,n);'boolean'==typeof i&&(t.stop(),t.return=i);}},{priority:'high'});}addAttributeCheck(e){this.on('checkAttribute',(t,[o,n])=>{const i=e(o,n);'boolean'==typeof i&&(t.stop(),t.return=i);},{priority:'high'});}getLimitElement(e){let t=Array.from(e.getRanges()).reduce((e,t)=>{const o=t.getCommonAncestor();return e?e.getCommonAncestor(o,{includeSelf:!0}):o},null);for(;!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed)return this.checkAttribute([...e.getFirstPosition().getAncestors(),'$text'],t);else{const o=e.getRanges();for(const e of o)for(const o of e)if(this.checkAttribute(o.item,t))return!0}return!1}getValidRanges(e,t){const o=[];for(const n of e){let e=n.start,i=n.start;const r=n.end;for(const r of n.getWalker())this.checkAttribute(r.item,t)||(!i.isEqual(e)&&o.push(new pu(i,e)),i=r.nextPosition),e=r.nextPosition;i&&!i.isEqual(r)&&o.push(new pu(i,r));}return o}getNearestSelectionRange(e,t='both'){if(this.checkChild(e,'$text'))return new pu(e);let o,n;('both'==t||'backward'==t)&&(o=new cu({startPosition:e,direction:'backward'})),('both'==t||'forward'==t)&&(n=new cu({startPosition:e}));for(const i of to(o,n)){const e=i.walker==o?'elementEnd':'elementStart',t=i.value;if(t.type==e&&this.isObject(t.item))return pu.createOn(t.item);if(this.checkChild(t.nextPosition,'$text'))return new pu(t.nextPosition)}return null}findAllowedParent(e,t){for(let o=t.parent;o;){if(this.checkChild(o,e))return o;if(this.isLimit(o))return null;o=o.parent;}return null}removeDisallowedAttributes(e,t){for(const o of e){for(const e of o.getAttributeKeys())this.checkAttribute(o,e)||t.removeAttribute(e,o);o.is('element')&&this.removeDisallowedAttributes(o.getChildren(),t);}}_clearCache(){this._compiledDefinitions=null;}_compile(){const e={},t=this._sourceDefinitions,o=Object.keys(t);for(const n of o)e[n]=qt(t[n],n);for(const t of o)Wt(e,t);for(const t of o)Ut(e,t);for(const t of o)Ht(e,t),Kt(e,t);for(const t of o)Gt(e,t),$t(e,t);this._compiledDefinitions=e;}_checkContextMatch(e,t,o=t.length-1){const n=t.getItem(o);if(!e.allowIn.includes(n.name))return!1;else if(0==o)return!0;else{const e=this.getDefinition(n);return this._checkContextMatch(e,t,o-1)}}}f(Su,Mc);class Ou{constructor(e){return e instanceof Ou?e:void('string'==typeof e?e=[e]:!Array.isArray(e)&&(e=e.getAncestors({includeSelf:!0})),e[0]&&'string'!=typeof e[0]&&e[0].is('documentFragment')&&e.shift(),this._items=e.map(eo))}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Ou([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map((e)=>e.name);}endsWith(e){return Array.from(this.getNames()).join(' ').endsWith(e)}}class Iu{constructor(e={}){this._removeIfEmpty=new Set,this._modelCursor=null,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this);}convert(e,t,o=['$root']){this.fire('viewCleanup',e),this._modelCursor=no(o,t),this.conversionApi.writer=t,this.conversionApi.consumable=Pu.createFrom(e),this.conversionApi.store={};const{modelRange:n}=this._convertItem(e,this._modelCursor),i=t.createDocumentFragment();if(n){this._removeEmptyElements();for(const e of Array.from(this._modelCursor.parent.getChildren()))t.append(e,i);i.markers=oo(i,t);}return this._modelCursor=null,this._removeIfEmpty.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,i}_convertItem(e,t){const o=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is('element')?this.fire('element:'+e.name,o,this.conversionApi):e.is('text')?this.fire('text',o,this.conversionApi):this.fire('documentFragment',o,this.conversionApi),o.modelRange&&!(o.modelRange instanceof pu))throw new _s('view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.');return{modelRange:o.modelRange,modelCursor:o.modelCursor}}_convertChildren(e,t){const o=new pu(t);let n=t;for(const i of Array.from(e.getChildren())){const e=this._convertItem(i,n);e.modelRange instanceof pu&&(o.end=e.modelRange.end,n=e.modelCursor);}return{modelRange:o,modelCursor:n}}_splitToAllowedParent(e,t){const o=this.conversionApi.schema.findAllowedParent(e,t);if(!o)return null;if(o===t.parent)return{position:t};if(this._modelCursor.parent.getAncestors().includes(o))return null;const n=this.conversionApi.writer.split(t,o);for(const o of n.range.getPositions())o.isEqual(n.position)||this._removeIfEmpty.add(o.parent);return{position:n.position,cursorParent:n.range.end.parent}}_removeEmptyElements(){let e=!1;for(const t of this._removeIfEmpty)t.isEmpty&&(this.conversionApi.writer.remove(t),this._removeIfEmpty.delete(t),e=!0);e&&this._removeEmptyElements();}}f(Iu,Ps);class Ru{constructor(e,t){this.model=e,this.processor=t,this.mapper=new gu,this.downcastDispatcher=new hu({mapper:this.mapper}),this.downcastDispatcher.on('insert:$text',It(),{priority:'lowest'}),this.upcastDispatcher=new Iu({schema:e.schema}),this.upcastDispatcher.on('text',bo(),{priority:'lowest'}),this.upcastDispatcher.on('element',ho(),{priority:'lowest'}),this.upcastDispatcher.on('documentFragment',ho(),{priority:'lowest'}),this.decorate('init');}get(e='main'){return this.stringify(this.model.document.getRoot(e))}stringify(e){const t=this.toView(e);return this.processor.toData(t)}toView(e){const t=pu.createIn(e),o=new rm,n=new am(new $c());if(this.mapper.bindElements(e,o),this.downcastDispatcher.convertInsert(t,n),!e.is('documentFragment')){const t=ko(e);for(const[e,o]of t)this.downcastDispatcher.convertMarkerAdd(e,o,n);}return this.mapper.clearBindings(),o}init(e,t='main'){if(this.model.document.version)throw new _s('datacontroller-init-document-not-empty: Trying to set initial data to not empty document.');const o=this.model.document.getRoot(t);return this.model.enqueueChange('transparent',(t)=>{t.insert(this.parse(e,o),o);}),Promise.resolve()}set(e,t='main'){const o=this.model.document.getRoot(t);this.model.enqueueChange('transparent',(t)=>{t.setSelection(null),t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys()),t.remove(pu.createIn(o)),t.insert(this.parse(e,o),o);});}parse(e,t='$root'){const o=this.processor.toView(e);return this.toModel(o,t)}toModel(e,t='$root'){return this.model.change((o)=>this.upcastDispatcher.convert(e,o,t))}destroy(){}}f(Ru,Mc);class Vu{constructor(){this._dispatchersGroups=new Map;}register(e,t){if(this._dispatchersGroups.has(e))throw new _s('conversion-register-group-exists: Trying to register a group name that was already registered.');this._dispatchersGroups.set(e,t);}for(e){const t=this._getDispatchers(e);return{add(e){return _o(t,e),this}}}elementToElement(e){this.for('downcast').add(xt(e));for(const{model:t,view:o}of wo(e))this.for('upcast').add(io({model:t,view:o,converterPriority:e.converterPriority}));}attributeToElement(e){this.for('downcast').add(Ct(e));for(const{model:t,view:o}of wo(e))this.for('upcast').add(ro({view:o,model:t,priority:e.priority}));}attributeToAttribute(e){this.for('downcast').add(At(e));for(const{model:t,view:o}of wo(e))this.for('upcast').add(ao({view:o,model:t}));}_getDispatchers(e){const t=this._dispatchersGroups.get(e);if(!t)throw new _s('conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.');return t}}class Fu{constructor(e){this.baseVersion=e,this.isDocumentOperation=null!==this.baseVersion;}_validate(){}toJSON(){const e=$d(this,!0);return e.__className=this.constructor.className,delete e.delta,delete e.isDocumentOperation,e}static get className(){return'engine.model.operation.Operation'}static fromJSON(e){return new this(e.baseVersion)}}class Nu{constructor(e){this.markers=new Map,this._children=new lu,e&&this._insertChild(0,e);}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return'documentFragment'==e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const o of e)t=t.getChild(t.offsetToIndex(o));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const o of e)o.name?t.push(du.fromJSON(o)):t.push(au.fromJSON(o));return new Nu(t)}_appendChild(e){this._insertChild(this.childCount,e);}_insertChild(e,t){const o=yo(t);for(const n of o)null!==n.parent&&n._remove(),n.parent=this;this._children._insertNodes(e,o);}_removeChildren(e,t=1){const o=this._children._removeNodes(e,t);for(const n of o)n.parent=null;return o}}var Du=function(e,t){return Bm(e,t)};class Mu extends Fu{constructor(e,t,o,n,i){super(i),this.range=pu.createFromRange(e),this.key=t,this.oldValue=o===void 0?null:o,this.newValue=n===void 0?null:n;}get type(){return null===this.oldValue?'addAttribute':null===this.newValue?'removeAttribute':'changeAttribute'}clone(){return new Mu(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Mu(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){for(const e of this.range.getItems()){if(null!==this.oldValue&&!Du(e.getAttribute(this.key),this.oldValue))throw new _s('attribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.',{item:e,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&e.hasAttribute(this.key))throw new _s('attribute-operation-attribute-exists: The attribute with given key already exists.',{node:e,key:this.key})}}_execute(){Du(this.oldValue,this.newValue)||To(this.range,this.key,this.newValue);}static get className(){return'engine.model.operation.AttributeOperation'}static fromJSON(e,t){return new Mu(pu.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Bu extends Fu{constructor(e,t,o,n){super(n),this.sourcePosition=uu.createFromPosition(e),this.howMany=t,this.targetPosition=uu.createFromPosition(o),this.isSticky=!1;}get type(){return'move'}clone(){const e=new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion);return e.isSticky=this.isSticky,e}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany),t=new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1);return t.isSticky=this.isSticky,t}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,o=this.sourcePosition.offset,n=this.targetPosition.offset;if(!e||!t)throw new _s('move-operation-position-invalid: Source position or target position is invalid.');else if(o+this.howMany>e.maxOffset)throw new _s('move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.');else if(e===t&&o<n&&n<o+this.howMany)throw new _s('move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.');else if(this.sourcePosition.root==this.targetPosition.root&&'prefix'==A(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const e=this.sourcePosition.path.length-1;if(this.targetPosition.path[e]>=o&&this.targetPosition.path[e]<o+this.howMany)throw new _s('move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.')}}_execute(){Ao(pu.createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition);}static get className(){return'engine.model.operation.MoveOperation'}static fromJSON(e,t){const o=uu.fromJSON(e.sourcePosition,t),n=uu.fromJSON(e.targetPosition,t),i=new this(o,e.howMany,n,e.baseVersion);return e.isSticky&&(i.isSticky=!0),i}}class Lu extends Bu{get position(){return this.targetPosition}set position(e){this.targetPosition=e;}get type(){return'reinsert'}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new zu(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){if(super._validate(),!this.sourcePosition.root.document)throw new _s('reinsert-operation-on-detached-item: Cannot reinsert detached item.');if(!this.targetPosition.root.document)throw new _s('reinsert-operation-to-detached-parent: Cannot reinsert item to detached parent.')}static get className(){return'engine.model.operation.ReinsertOperation'}}class zu extends Bu{get type(){return'remove'}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Lu(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){if(super._validate(),!this.sourcePosition.root.document)throw new _s('remove-operation-on-detached-item: Cannot remove detached item.')}static get className(){return'engine.model.operation.RemoveOperation'}}class ju extends Fu{constructor(e,t,o){super(o),this.position=uu.createFromPosition(e),this.nodes=new lu(Po(t));}get type(){return'insert'}clone(){const e=new lu([...this.nodes].map((e)=>e._clone(!0)));return new ju(this.position,e,this.baseVersion)}getReversed(){const e=this.position.root.document.graveyard,t=new uu(e,[0]);return new zu(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new _s('insert-operation-position-invalid: Insertion position is invalid.')}_execute(){const e=this.nodes;this.nodes=new lu([...e].map((e)=>e._clone(!0))),xo(this.position,e);}static get className(){return'engine.model.operation.InsertOperation'}static fromJSON(e,t){const o=[];for(const n of e.nodes)n.name?o.push(du.fromJSON(n)):o.push(au.fromJSON(n));return new ju(uu.fromJSON(e.position,t),o,e.baseVersion)}}class qu extends Fu{constructor(e,t,o,n,i,r){super(i),this.name=e,this.oldRange=t?pu.createFromRange(t):null,this.newRange=o?pu.createFromRange(o):null,this.affectsData=r,this._markers=n;}get type(){return'marker'}clone(){return new qu(this.name,this.oldRange,this.newRange,this._markers,this.baseVersion,this.affectsData)}getReversed(){return new qu(this.name,this.newRange,this.oldRange,this._markers,this.baseVersion+1,this.affectsData)}_execute(){const e=this.newRange?'_set':'_remove';this._markers[e](this.name,this.newRange,!0,this.affectsData);}toJSON(){const e=super.toJSON();return delete e._markers,e}static get className(){return'engine.model.operation.MarkerOperation'}static fromJSON(e,t){return new qu(e.name,e.oldRange?pu.fromJSON(e.oldRange,t):null,e.newRange?pu.fromJSON(e.newRange,t):null,t.model.markers,e.baseVersion,e.affectsData)}}class Wu extends Fu{get type(){return'noop'}clone(){return new Wu(this.baseVersion)}getReversed(){return new Wu(this.baseVersion+1)}_execute(){}static get className(){return'engine.model.operation.NoOperation'}}class Uu extends Fu{constructor(e,t,o,n){super(n),this.position=e,this.oldName=t,this.newName=o;}get type(){return'rename'}clone(){return new Uu(uu.createFromPosition(this.position),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Uu(uu.createFromPosition(this.position),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof du))throw new _s('rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.');else if(e.name!==this.oldName)throw new _s('rename-operation-wrong-name: Element to change has different name than operation\'s old name.')}_execute(){const e=this.position.nodeAfter;e.name=this.newName;}static get className(){return'engine.model.operation.RenameOperation'}static fromJSON(e,t){return new Uu(uu.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Hu extends Fu{constructor(e,t,o,n,i){super(i),this.root=e,this.key=t,this.oldValue=o,this.newValue=n;}get type(){return null===this.oldValue?'addRootAttribute':null===this.newValue?'removeRootAttribute':'changeRootAttribute'}clone(){return new Hu(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Hu(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is('documentFragment'))throw new _s('rootattribute-operation-not-a-root: The element to change is not a root element.',{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new _s('rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.',{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new _s('rootattribute-operation-attribute-exists: The attribute with given key already exists.',{root:this.root,key:this.key})}_execute(){null===this.newValue?this.root._removeAttribute(this.key):this.root._setAttribute(this.key,this.newValue);}static get className(){return'engine.model.operation.RootAttributeOperation'}static fromJSON(e,t){if(!t.getRoot(e.root))throw new _s('rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.',{rootName:e});return new Hu(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}const Ku={};Ku[Mu.className]=Mu,Ku[ju.className]=ju,Ku[qu.className]=qu,Ku[Bu.className]=Bu,Ku[Wu.className]=Wu,Ku[Fu.className]=Fu,Ku[Lu.className]=Lu,Ku[zu.className]=zu,Ku[Uu.className]=Uu,Ku[Hu.className]=Hu;class Gu{static fromJSON(e,t){return Ku[e.__className].fromJSON(e,t)}}const $u=new Map;class Ju{static fromJSON(e,t){if(!$u.has(e.__className))throw new _s('delta-fromjson-no-deserializer: This delta has no defined deserializer',{name:e.__className});const o=$u.get(e.__className),n=new o;for(const o of e.operations)n.addOperation(Gu.fromJSON(o,t));for(const o in e)'__className'!=o&&void 0===n[o]&&(n[o]=e[o]);return n}static register(e){$u.set(e.className,e);}}class Qu{constructor(){this.batch=null,this.operations=[];}get baseVersion(){return 0<this.operations.length?this.operations[0].baseVersion:null}set baseVersion(e){for(const t of this.operations)t.baseVersion=e++;}get _reverseDeltaClass(){return Qu}addOperation(e){return e.delta=this,this.operations.push(e),e}clone(){const e=new this.constructor;for(const t of this.operations)e.addOperation(t.clone());return e}getReversed(){const e=new this._reverseDeltaClass;for(const t of this.operations)e.addOperation(t.getReversed());e.operations.reverse();for(let t=0;t<e.operations.length;t++)e.operations[t].baseVersion=this.operations[this.operations.length-1].baseVersion+t+1;return e}toJSON(){const e=$d(this);return e.__className=this.constructor.className,delete e.batch,e}static get className(){return'engine.model.delta.Delta'}}Ju.register(Qu);class Yu extends Qu{get type(){return'attribute'}get key(){return this.operations[0]?this.operations[0].key:null}get value(){return this.operations[0]?this.operations[0].newValue:null}get range(){if(this._range)return this._range;let e=null,t=null;for(const o of this.operations)o instanceof Wu||((null===e||e.isAfter(o.range.start))&&(e=o.range.start),(null===t||t.isBefore(o.range.end))&&(t=o.range.end));return e&&t?(this._range=new pu(e,t),this._range):null}get _reverseDeltaClass(){return Yu}toJSON(){const e=super.toJSON();return delete e._range,e}static get className(){return'engine.model.delta.AttributeDelta'}}Ju.register(Yu);class Xu extends Qu{get type(){return'split'}get position(){return this._moveOperation?this._moveOperation.sourcePosition:null}get _cloneOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]&&this.operations[1]instanceof Bu?this.operations[1]:null}get _reverseDeltaClass(){return Zu}static get className(){return'engine.model.delta.SplitDelta'}}Ju.register(Xu);class Zu extends Qu{get type(){return'merge'}get position(){return this._removeOperation?this._removeOperation.sourcePosition:null}get _removeOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return Xu}static get className(){return'engine.model.delta.MergeDelta'}}Ju.register(Zu);class ep extends Qu{get type(){return'move'}get howMany(){return this._moveOperation?this._moveOperation.howMany:null}get sourcePosition(){return this._moveOperation?this._moveOperation.sourcePosition:null}get targetPosition(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return ep}static get className(){return'engine.model.delta.MoveDelta'}}Ju.register(ep);class tp extends ep{static get className(){return'engine.model.delta.RemoveDelta'}}Ju.register(tp);class op extends Qu{get type(){return'rename'}get _reverseDeltaClass(){return op}static get className(){return'engine.model.delta.RenameDelta'}}Ju.register(op);class np extends Qu{get type(){return'wrap'}get range(){const e=this._moveOperation;return e?pu.createFromPositionAndShift(e.sourcePosition,e.howMany):null}get howMany(){const e=this.range;return e?e.end.offset-e.start.offset:0}get _insertOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return ip}static get className(){return'engine.model.delta.WrapDelta'}}Ju.register(np);class ip extends Qu{get type(){return'unwrap'}get position(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return np}static get className(){return'engine.model.delta.UnwrapDelta'}}Ju.register(ip);class rp extends Qu{get type(){return'insert'}get position(){return this._insertOperation?this._insertOperation.position:null}get nodes(){return this._insertOperation?this._insertOperation.nodes:null}get _insertOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return tp}static get className(){return'engine.model.delta.InsertDelta'}}Ju.register(rp);class ap extends rp{static get className(){return'engine.model.delta.WeakInsertDelta'}}Ju.register(ap);var sp=function(e,t,o={isStrong:!1}){let n,i;e instanceof ju?n=lp.InsertOperation:e instanceof Mu?n=lp.AttributeOperation:e instanceof Hu?n=lp.RootAttributeOperation:e instanceof Uu?n=lp.RenameOperation:e instanceof qu?n=lp.MarkerOperation:e instanceof Bu?n=lp.MoveOperation:i=Io,n&&(t instanceof ju?i=n.InsertOperation:t instanceof Mu?i=n.AttributeOperation:t instanceof Hu?i=n.RootAttributeOperation:t instanceof Uu?i=n.RenameOperation:t instanceof qu?i=n.MarkerOperation:t instanceof Bu?i=n.MoveOperation:i=Io);const r=i(e,t,o);return Ro(e.baseVersion,r)};const lp={InsertOperation:{InsertOperation(e,t,o){const n=e.clone(),i=void 0===o.insertBefore?!o.isStrong:o.insertBefore;return n.position=n.position._getTransformedByInsertion(t.position,t.nodes.maxOffset,i),[n]},AttributeOperation:Io,RootAttributeOperation:Io,RenameOperation:Io,MarkerOperation:Io,MoveOperation(e,t,o){const n=e.clone(),i=void 0===o.insertBefore?!o.isStrong:o.insertBefore;return n.position=e.position._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,i,t.isSticky&&!o.forceNotSticky),[n]}},AttributeOperation:{InsertOperation(e,t){const o=e.range._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0,!1);return o.reverse().map((t)=>new Mu(t,e.key,e.oldValue,e.newValue,e.baseVersion))},AttributeOperation(e,t,o){if(e.key===t.key){const n=e.range.getDifference(t.range).map((t)=>new Mu(t,e.key,e.oldValue,e.newValue,e.baseVersion)),i=e.range.getIntersection(t.range);return i&&(o.isStrong?n.push(new Mu(i,t.key,t.newValue,e.newValue,e.baseVersion)):0===n.length&&n.push(new Wu(0))),n}return[e.clone()]},RootAttributeOperation:Io,RenameOperation:Io,MarkerOperation:Io,MoveOperation(e,t){const o=pu.createFromPositionAndShift(t.sourcePosition,t.howMany);let n=[];const i=Fo(e.range.getDifference(o)),r=e.range.getIntersection(o);return null!==i&&(i.start=i.start._getTransformedByDeletion(t.sourcePosition,t.howMany),i.end=i.end._getTransformedByDeletion(t.sourcePosition,t.howMany),n=i._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,!0,!1).reverse()),null!==r&&(r.start=r.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),r.end=r.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.push(r)),n.map((t)=>new Mu(t,e.key,e.oldValue,e.newValue,e.baseVersion))}},RootAttributeOperation:{InsertOperation:Io,AttributeOperation:Io,RootAttributeOperation(e,t,o){return e.root!==t.root||e.key!==t.key||(e.newValue===t.newValue||o.isStrong)&&e.newValue!==t.newValue?[e.clone()]:[new Wu(e.baseVersion)]},RenameOperation:Io,MarkerOperation:Io,MoveOperation:Io},RenameOperation:{InsertOperation(e,t){const o=e.clone();return o.position=o.position._getTransformedByInsertion(t.position,t.nodes.maxOffset,!0),[o]},AttributeOperation:Io,RootAttributeOperation:Io,RenameOperation(e,t,o){const n=e.clone();if(e.position.isEqual(t.position))if(o.isStrong)n.oldName=t.newName;else return[new Wu(e.baseVersion)];return[n]},MarkerOperation:Io,MoveOperation(e,t){const o=e.clone(),n=o.position.isEqual(t.sourcePosition);return o.position=o.position._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!0,n),[o]}},MarkerOperation:{InsertOperation(e,t){const o=e.clone();return o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,!1)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,!1)[0]),[o]},AttributeOperation:Io,RootAttributeOperation:Io,RenameOperation:Io,MarkerOperation(e,t,o){const n=e.clone();if(e.name==t.name)if(o.isStrong)n.oldRange=t.newRange;else return[new Wu(e.baseVersion)];return[n]},MoveOperation(e,t){const o=e.clone();if(o.oldRange){const e=o.oldRange._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany);o.oldRange=pu.createFromRanges(e);}if(o.newRange){const e=o.newRange._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany);o.newRange=pu.createFromRanges(e);}return[o]}},MoveOperation:{InsertOperation(e,t,o){let n=pu.createFromPositionAndShift(e.sourcePosition,e.howMany);const i=e.isSticky&&!o.forceNotSticky;n=n._getTransformedByInsertion(t.position,t.nodes.maxOffset,!1,i)[0];const r=void 0===o.insertBefore?!o.isStrong:o.insertBefore,a=new e.constructor(n.start,n.end.offset-n.start.offset,e.targetPosition._getTransformedByInsertion(t.position,t.nodes.maxOffset,r),e.baseVersion);return a.isSticky=e.isSticky,[a]},AttributeOperation:Io,RootAttributeOperation:Io,RenameOperation:Io,MarkerOperation:Io,MoveOperation(e,t,o){const n=pu.createFromPositionAndShift(e.sourcePosition,e.howMany),i=pu.createFromPositionAndShift(t.sourcePosition,t.howMany);let r=o.isStrong;const a=e.isSticky&&!o.forceNotSticky,s=void 0===o.insertBefore?!r:o.insertBefore,l=e.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,s,t.isSticky&&!o.forceNotSticky);if(Vo(e,t)&&Vo(t,e))return[t.getReversed()];const d=n.containsPosition(t.targetPosition)||n.start.isEqual(t.targetPosition)&&a||n.end.isEqual(t.targetPosition)&&a;if(d&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!a),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,a),No([n],l,e);const c=i.containsPosition(e.targetPosition)||i.start.isEqual(e.targetPosition)&&t.isSticky&&!o.forceNotSticky||i.end.isEqual(e.targetPosition)&&t.isSticky&&!o.forceNotSticky;if(c&&i.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),No([n],l,e);const m=A(e.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if('prefix'==m||'extension'==m)return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!a),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,a),No([n],l,e);o.forceWeakRemove||(e instanceof zu&&!(t instanceof zu)?r=!0:!(e instanceof zu)&&t instanceof zu&&(r=!1));const u=[],p=n.getDifference(i);for(const n of p){n.start=n.start._getTransformedByDeletion(t.sourcePosition,t.howMany),n.end=n.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const e='same'==A(n.start.getParentPath(),t.getMovedRangeStart().getParentPath()),o=n._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,e,a);u.push(...o);}const g=n.getIntersection(i);return null!==g&&r&&!d&&(g.start=g.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),g.end=g.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),0===u.length?u.push(g):1==u.length?i.start.isBefore(n.start)||i.start.isEqual(n.start)?u.unshift(g):u.push(g):u.splice(1,0,g)),0===u.length?[new Wu(e.baseVersion)]:No(u,l,e)}}};var ot=function(e,t,o){var n=-1,i=e.length;0>t&&(t=-t>i?0:i+t),o=o>i?i:o,0>o&&(o+=i),i=t>o?0:o-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=e[n+t];return r},dp=Math.ceil,cp=function(e){return Sl(e)||Pl(e)},mp=Mo,up=function(e,t,o){for(var n=e.length,i=t+(o?0:-1);o?i--:++i<n;){var r=e[i];if(r!==r)return i}return-1},pp=function(e,t,o){if(t!==t)return up(e,o);for(var n=o-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},gp=function(e,t){return!!e.length&&-1<pp(e,t,0)},fp=function(e,t,o){for(var n=-1,i=e.length;++n<i;)if(o(t,e[n]))return!0;return!1},hp=function(e,t){for(var o=-1,n=e.length,i=Array(n);++o<n;)i[o]=t(e[o],o,e);return i},bp=function(e){return function(t){return e(t)}},kp=function(e,t){return e.has(t)},_p=function(e,t,o,n){var i=-1,r=gp,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;o&&(t=hp(t,bp(o))),n?(r=fp,a=!1):t.length>=200&&(r=kp,a=!1,t=new vm(t));outer:for(;++i<s;){var c=e[i],m=o?o(c):c;if(c=n||0!==c?c:0,a&&m===m){for(var u=d;u--;)if(t[u]===m)continue outer;l.push(c);}else r(t,m,n)||l.push(c);}return l},wp=bc(function(e,t){return yl(e)?_p(e,mp(t,1,yl,!0)):[]}),vp=1,yp=2,xp=function(e){return e===e&&!Vs(e)},Cp=function(e,t){return hp(t,function(t){return[t,e[t]]})},Ap=function(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=[e,e];}),o},Tp=function(e){return function(t){var o=gd(t);return o=='[object Map]'?Cd(t):o=='[object Set]'?Ap(t):Cp(t,e(t))}}(Bl),Pp=function(e){for(var t=Tp(e),o=t.length;o--;)t[o][2]=xp(t[o][1]);return t},Ep=function(e,t){return function(o){return null!=o&&o[e]===t&&(t!==void 0||e in Object(o))}},Sp=function(e){var t=Pp(e);return 1==t.length&&t[0][2]?Ep(t[0][0],t[0][1]):function(o){return o===e||Bo(o,e,t)}},Op='Expected a function';Lo.Cache=rl;var Ip=Rd?Rd.prototype:void 0,Rp=Ip?Ip.toString:void 0,Vp=function(e){if('string'==typeof e)return e;if(rc(e))return Rp?Rp.call(e):'';var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t},Fp=function(e){return null==e?'':Vp(e)},Np=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,Dp=/\\(\\)?/g,Mp=Lo(function(e){var t=[];return Fp(e).replace(Np,function(e,o,n,i){t.push(n?i.replace(Dp,'$1'):o||e);}),t}),Bp=function(e){return Sl(e)?e:Mp(e)},Lp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zp=/^\w*$/,jp=zo,qp=function(e){if('string'==typeof e||rc(e))return e;var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t},Wp=function(e,t){t=jp(t,e)?[t]:Bp(t);for(var o=0,n=t.length;null!=e&&o<n;)e=e[qp(t[o++])];return o&&o==n?e:void 0},Up=function(e,t,o){var n=null==e?void 0:Wp(e,t);return n===void 0?o:n},Hp=function(e,t,o){t=jp(t,e)?[t]:Bp(t);for(var n=-1,i=t.length,r;++n<i;){var a=qp(t[n]);if(!(r=null!=e&&o(e,a)))break;e=e[a];}if(r)return r;var i=e?e.length:0;return!!i&&wl(i)&&Nl(a,i)&&(Sl(e)||Rl(e)||Pl(e))},Kp=function(e,t){return null!=e&&Hp(e,t,jo)},Gp=function(e,t){return jp(e)&&xp(t)?Ep(qp(e),t):function(o){var n=Up(o,e);return n===void 0&&n===t?Kp(o,e):Bm(t,n,void 0,1|2)}},$p=function(e){return e},Jp=function(e){return function(t){return Wp(t,e)}},Qp=function(e){return jp(e)?kl(qp(e)):Jp(e)},Yp=function(e){return'function'==typeof e?e:null==e?$p:'object'==typeof e?Sl(e)?Gp(e[0],e[1]):Sp(e):Qp(e)},Xp=bc(function(e,t){var o=mu(t);return yl(o)&&(o=void 0),yl(e)?_p(e,mp(t,1,yl,!0),Yp(o)):[]}),Zp=bc(function(e,t){var o=mu(t);return yl(o)&&(o=void 0),yl(e)?_p(e,mp(t,1,yl,!0),void 0,o):[]}),eg=function(e,t,o){var n=e?e.length:0;return n?(t=o||void 0===t?1:fc(t),ot(e,0>t?0:t,n)):[]},tg=function(e,t,o){var n=e?e.length:0;return n?(t=o||void 0===t?1:fc(t),t=n-t,ot(e,0,0>t?0:t)):[]},og=function(e,t,o,n){for(var i=e.length,r=n?i:-1;(n?r--:++r<i)&&t(e[r],r,e););return o?ot(e,n?0:r,n?r+1:i):ot(e,n?r+1:0,n?i:r)},ng=function(e,t,o){return e===e&&(void 0!==o&&(e=e<=o?e:o),void 0!==t&&(e=e>=t?e:t)),e},ig=function(e){return e?ng(fc(e),0,4294967295):0},rg=function(e,t,o,n){var i=e.length;for(o=fc(o),0>o&&(o=-o>i?0:i+o),n=void 0===n||n>i?i:fc(n),0>n&&(n+=i),n=o>n?0:ig(n);o<n;)e[o++]=t;return e},ag=function(e,t,o){for(var n=e.length,i=o?n:-1;o?i--:++i<n;)if(t(e[i],i,e))return i;return-1},sg=function(e){return e&&e.length?e[0]:void 0},lg=function(e,t,o){for(var n=o?fp:gp,i=e[0].length,r=e.length,a=r,s=Array(r),l=Infinity,d=[];a--;){var c=e[a];a&&t&&(c=hp(c,bp(t))),l=rs(c.length,l),s[a]=!o&&(t||120<=i&&120<=c.length)?new vm(a&&c):void 0;}c=e[0];var m=-1,u=s[0];outer:for(;++m<i&&d.length<l;){var p=c[m],g=t?t(p):p;if(p=o||0!==p?p:0,u?!kp(u,g):!n(d,g,o)){for(a=r;--a;){var f=s[a];if(f?!kp(f,g):!n(e[a],g,o))continue outer}u&&u.push(g),d.push(p);}}return d},dg=function(e){return yl(e)?e:[]},cg=bc(function(e){var t=hp(e,dg);return t.length&&t[0]===e[0]?lg(t):[]}),mg=bc(function(e){var t=mu(e),o=hp(e,dg);return t===mu(o)?t=void 0:o.pop(),o.length&&o[0]===e[0]?lg(o,Yp(t)):[]}),ug=bc(function(e){var t=mu(e),o=hp(e,dg);return t===mu(o)?t=void 0:o.pop(),o.length&&o[0]===e[0]?lg(o,void 0,t):[]}),pg=Array.prototype,gg=pg.join,fg=function(e,t){var o=e.length;if(o)return t+=0>t?o:0,Nl(t,o)?e[t]:void 0},hg=function(e,t,o,n){for(var i=o-1,r=e.length;++i<r;)if(n(e[i],t))return i;return-1},bg=Array.prototype,kg=bg.splice,_g=function(e,t,o,n){var i=n?hg:pp,r=-1,a=t.length,s=e;for(o&&(s=hp(e,bp(o)));++r<a;)for(var l=0,d=t[r],c=o?o(d):d;-1<(l=i(s,c,l,n));)s!==e&&kg.call(s,l,1),kg.call(e,l,1);return e},wg=function(e,t){return e&&e.length&&t&&t.length?_g(e,t):e},vg=bc(wg),yg=function(e,t){for(var o=-1,n=t.length,i=Array(n);++o<n;)i[o]=null==e?void 0:Up(e,t[o]);return i},xg=function(e,t){return 1==t.length?e:Wp(e,ot(t,0,-1))},Cg=Array.prototype,Ag=Cg.splice,Tg=function(e,t){for(var o=e?t.length:0,n=o-1;o--;){var i=t[o];if(o==n||i!==r){var r=i;if(Nl(i))Ag.call(e,i,1);else if(!jp(i,e)){var a=Bp(i),s=xg(e,a);null!=s&&delete s[qp(mu(a))];}else delete e[qp(i)];}}return e},Pg=function(e,t){if(e!==t){var o=e!==void 0,n=null===e,i=e===e,r=rc(e),a=t!==void 0,s=null===t,l=t===t,d=rc(t);if(!s&&!d&&!r&&e>t||r&&a&&l&&!s&&!d||n&&a&&l||!o&&l||!i)return 1;if(!n&&!r&&!d&&e<t||d&&o&&i&&!n&&!r||s&&o&&i||!a&&i||!l)return-1}return 0},Eg=bc(function(e,t){t=mp(t,1);var o=e?e.length:0,n=yg(e,t);return Tg(e,hp(t,function(e){return Nl(e,o)?+e:e}).sort(Pg)),n}),Sg=Array.prototype,Og=Sg.reverse,Ig=function(e,t,o,n){t=o(t);for(var i=0,r=e?e.length:0,a=t!==t,s=null===t,l=rc(t),d=void 0===t;i<r;){var c=as((i+r)/2),m=o(e[c]),u=m!==void 0,p=null===m,g=m===m,f=rc(m);if(a)var h=n||g;else h=d?g&&(n||u):s?g&&u&&(n||!p):l?g&&u&&!p&&(n||!f):!(p||f)&&(n?m<=t:m<t);h?i=c+1:r=c;}return rs(r,4294967295-1)},Rg=function(e,t,o){var n=0,i=e?e.length:n;if('number'==typeof t&&t===t&&i<=4294967295>>>1){for(;n<i;){var r=n+i>>>1,a=e[r];null!==a&&!rc(a)&&(o?a<=t:a<t)?n=r+1:i=r;}return i}return Ig(e,t,$p,o)},Vg=function(e,t){for(var o=-1,n=e.length,i=0,r=[];++o<n;){var a=e[o],s=t?t(a):a;if(!o||!Es(s,l)){var l=s;r[i++]=0===a?0:a;}}return r},Fg=Zl&&1/Sd(new Zl([,-0]))[1]==1/0?function(e){return new Zl(e)}:function(){},Ng=function(e,t,o){var n=-1,i=gp,r=e.length,a=!0,s=[],l=s;if(o)a=!1,i=fp;else if(r>=200){var d=t?null:Fg(e);if(d)return Sd(d);a=!1,i=kp,l=new vm;}else l=t?[]:s;outer:for(;++n<r;){var c=e[n],m=t?t(c):c;if(c=o||0!==c?c:0,a&&m===m){for(var u=l.length;u--;)if(l[u]===m)continue outer;t&&l.push(m),s.push(c);}else i(l,m,o)||(l!==s&&l.push(m),s.push(c));}return s},Dg=bc(function(e){return Ng(mp(e,1,yl,!0))}),Mg=bc(function(e){var t=mu(e);return yl(t)&&(t=void 0),Ng(mp(e,1,yl,!0),Yp(t))}),Bg=bc(function(e){var t=mu(e);return yl(t)&&(t=void 0),Ng(mp(e,1,yl,!0),void 0,t)}),Lg=function(e,t){for(var o=-1,n=e.length,i=0,r=[];++o<n;){var a=e[o];t(a,o,e)&&(r[i++]=a);}return r},zg=function(e){if(!(e&&e.length))return[];var t=0;return e=Lg(e,function(e){if(yl(e))return t=is(e.length,t),!0}),bl(t,function(t){return hp(e,kl(t))})},jg=function(e,t){if(!(e&&e.length))return[];var o=zg(e);return null==t?o:hp(o,function(e){return oc(t,void 0,e)})},qg=bc(function(e,t){return yl(e)?_p(e,t):[]}),Wg=function(e,t,o){for(var n=-1,i=e.length;++n<i;)var r=r?Hl(_p(r,e[n],t,o),_p(e[n],r,t,o)):e[n];return r&&r.length?Ng(r,t,o):[]},Ug=bc(function(e){return Wg(Lg(e,yl))}),Hg=bc(function(e){var t=mu(e);return yl(t)&&(t=void 0),Wg(Lg(e,yl),Yp(t))}),Kg=bc(function(e){var t=mu(e);return yl(t)&&(t=void 0),Wg(Lg(e,yl),void 0,t)}),Gg=bc(zg),$g=function(e,t,o){for(var n=-1,i=e.length,r=t.length,a={};++n<i;){var s=n<r?t[n]:void 0;o(a,e[n],s);}return a},Jg=function(e,t,o,n){t=jp(t,e)?[t]:Bp(t);for(var i=-1,r=t.length,a=e;null!=a&&++i<r;){var s=qp(t[i]);if(Vs(a)){var l=o;if(i!=r-1){var d=a[s];l=n?n(d,s,a):void 0,l===void 0&&(l=null==d?Nl(t[i+1])?[]:{}:d);}cl(a,s,l);}a=a[s];}return e},Qg=bc(function(e){var t=e.length,o=1<t?e[t-1]:void 0;return o='function'==typeof o?(e.pop(),o):void 0,jg(e,o)}),Yg={chunk:function(e,t,o){t=(o?tc(e,t,o):void 0===t)?1:is(fc(t),0);var n=e?e.length:0;if(!n||1>t)return[];for(var i=0,r=0,a=Array(dp(n/t));i<n;)a[r++]=ot(e,i,i+=t);return a},compact:function(e){for(var t=-1,o=e?e.length:0,n=0,i=[];++t<o;){var r=e[t];r&&(i[n++]=r);}return i},concat:function(){for(var e=arguments.length,t=Array(e?e-1:0),o=arguments[0],n=e;n--;)t[n-1]=arguments[n];return e?Hl(Sl(o)?jl(o):[o],mp(t,1)):[]},difference:wp,differenceBy:Xp,differenceWith:Zp,drop:eg,dropRight:tg,dropRightWhile:function(e,t){return e&&e.length?og(e,Yp(t,3),!0,!0):[]},dropWhile:function(e,t){return e&&e.length?og(e,Yp(t,3),!0):[]},fill:function(e,t,o,n){var i=e?e.length:0;return i?(o&&'number'!=typeof o&&tc(e,t,o)&&(o=0,n=i),rg(e,t,o,n)):[]},findIndex:function(e,t){return e&&e.length?ag(e,Yp(t,3)):-1},findLastIndex:function(e,t){return e&&e.length?ag(e,Yp(t,3),!0):-1},first:sg,flatten:function(e){var t=e?e.length:0;return t?mp(e,1):[]},flattenDeep:function(e){var t=e?e.length:0;return t?mp(e,1/0):[]},flattenDepth:function(e,t){var o=e?e.length:0;return o?(t=void 0===t?1:fc(t),mp(e,t)):[]},fromPairs:function(e){for(var t=-1,o=e?e.length:0,n={};++t<o;){var i=e[t];n[i[0]]=i[1];}return n},head:sg,indexOf:function(e,t,o){var n=e?e.length:0;return n?(o=fc(o),0>o&&(o=is(n+o,0)),pp(e,t,o)):-1},initial:function(e){return tg(e,1)},intersection:cg,intersectionBy:mg,intersectionWith:ug,join:function(e,t){return e?gg.call(e,t):''},last:mu,lastIndexOf:function(e,t,o){var n=e?e.length:0;if(!n)return-1;var i=n;if(void 0!==o&&(i=fc(o),i=(0>i?is(n+i,0):rs(i,n-1))+1),t!==t)return up(e,i,!0);for(;i--;)if(e[i]===t)return i;return-1},nth:function(e,t){return e&&e.length?fg(e,fc(t)):void 0},pull:vg,pullAll:wg,pullAllBy:function(e,t,o){return e&&e.length&&t&&t.length?_g(e,t,Yp(o)):e},pullAllWith:function(e,t,o){return e&&e.length&&t&&t.length?_g(e,t,void 0,o):e},pullAt:Eg,remove:function(e,t){var o=[];if(!(e&&e.length))return o;var n=-1,i=[],r=e.length;for(t=Yp(t,3);++n<r;){var a=e[n];t(a,n,e)&&(o.push(a),i.push(n));}return Tg(e,i),o},reverse:function(e){return e?Og.call(e):e},slice:function(e,t,o){var n=e?e.length:0;return n?(o&&'number'!=typeof o&&tc(e,t,o)?(t=0,o=n):(t=null==t?0:fc(t),o=void 0===o?n:fc(o)),ot(e,t,o)):[]},sortedIndex:function(e,t){return Rg(e,t)},sortedIndexBy:function(e,t,o){return Ig(e,t,Yp(o))},sortedIndexOf:function(e,t){var o=e?e.length:0;if(o){var n=Rg(e,t);if(n<o&&Es(e[n],t))return n}return-1},sortedLastIndex:function(e,t){return Rg(e,t,!0)},sortedLastIndexBy:function(e,t,o){return Ig(e,t,Yp(o),!0)},sortedLastIndexOf:function(e,t){var o=e?e.length:0;if(o){var n=Rg(e,t,!0)-1;if(Es(e[n],t))return n}return-1},sortedUniq:function(e){return e&&e.length?Vg(e):[]},sortedUniqBy:function(e,t){return e&&e.length?Vg(e,Yp(t)):[]},tail:function(e){return eg(e,1)},take:function(e,t,o){return e&&e.length?(t=o||void 0===t?1:fc(t),ot(e,0,0>t?0:t)):[]},takeRight:function(e,t,o){var n=e?e.length:0;return n?(t=o||void 0===t?1:fc(t),t=n-t,ot(e,0>t?0:t,n)):[]},takeRightWhile:function(e,t){return e&&e.length?og(e,Yp(t,3),!1,!0):[]},takeWhile:function(e,t){return e&&e.length?og(e,Yp(t,3)):[]},union:Dg,unionBy:Mg,unionWith:Bg,uniq:function(e){return e&&e.length?Ng(e):[]},uniqBy:function(e,t){return e&&e.length?Ng(e,Yp(t)):[]},uniqWith:function(e,t){return e&&e.length?Ng(e,void 0,t):[]},unzip:zg,unzipWith:jg,without:qg,xor:Ug,xorBy:Hg,xorWith:Kg,zip:Gg,zipObject:function(e,t){return $g(e||[],t||[],cl)},zipObjectDeep:function(e,t){return $g(e||[],t||[],Jg)},zipWith:Qg};const Xg=new Map,Zg={transform(e,t,o){const n=Zg.getTransformationCase(e,t)||Zg.defaultTransform,i=n(e,t,Object.assign({},o)),r=Yg.last(t.operations).baseVersion;return qo(r,i)},defaultTransform(e,t,o){const n=[];let i=t.operations,r=[];for(const a of e.operations){const e=[a];for(const t of i)for(let n=0;n<e.length;n++){const i=e[n],a=sp(i,t,o);Array.prototype.splice.apply(e,[n,1].concat(a)),n+=a.length-1;const s=Object.assign({},o);s.isStrong=!o.isStrong,s.insertBefore=o.insertBefore===void 0?void 0:!o.insertBefore;const l=sp(t,i,s);Array.prototype.push.apply(r,l);}i=r,r=[];for(const t of e)n.push(t);}return Xo(e.constructor,n)},addTransformationCase(e,t,o){let n=Xg.get(e);n||(n=new Map,Xg.set(e,n)),n.set(t,o);},getTransformationCase(e,t){let o=Xg.get(e.constructor);if(!o||!o.get(t.constructor)){const n=Xg.keys();for(const i of n)if(e instanceof i&&Xg.get(i).get(t.constructor)){o=Xg.get(i);break}}return o?o.get(t.constructor):void 0},transformDeltaSets(e,t,o=null){const n=Array.from(e),i=Array.from(t),r=null!==o,a={isStrong:!0};if(r){a.wasAffected=new Map,a.originalDelta=new Map,a.document=o,a.undoMode=!0;for(const e of i)a.originalDelta.set(e,e);}for(let s=0;s<n.length;s++){const e=[n[s]];for(let t=0;t<i.length;t++){const o=[i[t]];for(let t=0;t<e.length;t++)for(let n=0;n<o.length;n++){r&&Ho(e[t],o[n],a);const i=Zg.transform(e[t],o[n],{insertBefore:a.insertBefore,forceNotSticky:a.forceNotSticky,isStrong:a.isStrong,forceWeakRemove:a.forceWeakRemove,undoMode:a.undoMode}),s=Zg.transform(o[n],e[t],{insertBefore:!a.insertBefore,forceNotSticky:a.forceNotSticky,isStrong:!a.isStrong,forceWeakRemove:a.forceWeakRemove,undoMode:a.undoMode});if(r){Yo(e[t],i,a);const r=a.originalDelta.get(o[n]);for(const e of s)a.originalDelta.set(e,r);}e.splice(t,1,...i),t+=i.length-1,o.splice(n,1,...s),n+=s.length-1;}i.splice(t,1,...o),t+=o.length-1;}n.splice(s,1,...e),s+=e.length-1;}const s=Wo(n)-Wo(e),l=Wo(i)-Wo(t);return l<s?Uo(i,s-l):s<l&&Uo(n,l-s),{deltasA:n,deltasB:i}}};var ef=Zg;class tf extends Qu{get type(){return'marker'}get _reverseDeltaClass(){return tf}static get className(){return'engine.model.delta.MarkerDelta'}}Ju.register(tf);const of=ef.addTransformationCase,nf=ef.defaultTransform;of(Yu,ap,(e,t,o)=>{const n=nf(e,t,o);return e.range.containsPosition(t.position)&&n.push(en(t,e)),n}),of(Yu,Xu,(e,t,o)=>{if(!t.position)return nf(e,t,o);const n=o.undoMode,i=new uu(t.position.root,t.position.path.slice(0,-1)),r=nf(e,t,o);if(n||!(t._cloneOperation instanceof ju))return r;for(const n of e.operations)if(n.range.containsPosition(i)||n.range.start.isEqual(i)){const e=new Yu,o=i.getShiftedBy(1),a=uu.createFromPosition(o);a.path.push(0);const s=t._cloneOperation.nodes.getNode(0).getAttribute(n.key);e.addOperation(new Mu(new pu(o,a),n.key,s===void 0?null:s,n.newValue,0)),r.push(e);break}return r}),of(rp,Zu,(e,t,o)=>{if(!t.position)return nf(e,t,o);const n=o.undoMode;return!n&&e.position.isEqual(t.position)?[t.getReversed(),e.clone()]:nf(e,t,o)}),of(tf,Xu,Zo),of(tf,Zu,Zo),of(tf,np,Zo),of(tf,ip,Zo),of(tf,ep,Zo),of(tf,op,Zo),of(ep,Zu,(e,t,o)=>{const n=o.undoMode;if(n||!t.position)return nf(e,t,o);const i=e.sourcePosition.root==t.position.root&&'same'===A(e.sourcePosition.getParentPath(),t.position.getParentPath()),r=e.sourcePosition.offset<=t.position.offset&&e.sourcePosition.offset+e.howMany>t.position.offset;return i&&r?[t.getReversed(),e.clone()]:nf(e,t,o)}),of(Zu,rp,(e,t,o)=>{if(!e.position)return nf(e,t,o);const n=o.undoMode;return!n&&e.position.isEqual(t.position)?[tn()]:nf(e,t,o)}),of(Zu,ep,(e,t,o)=>{const n=o.undoMode;if(n||!e.position)return nf(e,t,o);const i=e.position.root==t.sourcePosition.root&&'same'===A(e.position.getParentPath(),t.sourcePosition.getParentPath()),r=t.sourcePosition.offset<=e.position.offset&&t.sourcePosition.offset+t.howMany>e.position.offset;return i&&r?[tn()]:nf(e,t,o)}),of(Xu,Xu,(e,t,o)=>{const n=o.undoMode;if(n)return nf(e,t,o);if(!e.position||!t.position)return nf(e,t,o);const i=e.position.getParentPath(),r=t.position.getParentPath();if(e.position.root==t.position.root&&'same'==A(i,r))if(e=e.clone(),e.position.offset<t.position.offset||e.position.offset==t.position.offset&&o.isStrong){e._cloneOperation instanceof Lu&&t._cloneOperation instanceof Lu&&e._cloneOperation.sourcePosition.offset>t._cloneOperation.sourcePosition.offset&&e._cloneOperation.sourcePosition.offset--;const o=pu.createFromPositionAndShift(e.position,e._moveOperation.howMany),n=pu.createFromPositionAndShift(t.position,t._moveOperation.howMany),i=o.getDifference(n);let r=0;for(const e of i)r+=e.end.offset-e.start.offset;return 0==r?(e.operations.pop(),e.addOperation(new Wu(e.operations[0].baseVersion+1))):e.operations[1].howMany=r,[e]}else{const n=Object.assign({},o);return n.isStrong=!0,n.insertBefore=!0,nf(e,t,n)}return nf(e,t,o)}),of(Xu,ip,(e,t,o)=>e.position?e.position.root==t.position.root&&'same'===A(t.position.path,e.position.getParentPath())?[tn()]:nf(e,t,o):nf(e,t,o)),of(Xu,np,(e,t,o)=>{if(!e.position)return nf(e,t,o);const n=e.position.root==t.range.start.root,i=n&&'same'===A(e.position.getParentPath(),t.range.start.getParentPath()),r=t.range.start.offset<e.position.offset&&t.range.end.offset>=e.position.offset;if(i&&r)return[tn()];if(n&&'same'===A(e.position.getParentPath(),t.range.end.getShiftedBy(-1).path)){const o=e.clone(),n=uu.createFromPosition(t.range.start);n.path.push(t.howMany-1);const i=n.getShiftedBy(1);o._cloneOperation.position=i;const r=uu.createFromPosition(n);r.path.push(e.position.offset),o._moveOperation.sourcePosition=r;const a=uu.createFromPosition(i);return a.path.push(0),o._moveOperation.targetPosition=a,[o]}return nf(e,t,o)}),of(Xu,Yu,(e,t,o)=>{if(!e.position)return nf(e,t,o);e=e.clone();const n=o.undoMode,i=new uu(e.position.root,e.position.path.slice(0,-1));if(n||!(e._cloneOperation instanceof ju))return[e];for(const n of t.operations)if(n.range.containsPosition(i)||n.range.start.isEqual(i)){null===n.newValue?e._cloneOperation.nodes.getNode(0)._removeAttribute(n.key):e._cloneOperation.nodes.getNode(0)._setAttribute(n.key,n.newValue);break}return[e]}),of(ip,Xu,(e,t,o)=>t.position?e.position.root==t.position.root&&'same'===A(e.position.path,t.position.getParentPath())?[t.getReversed(),e.clone()]:nf(e,t,o):nf(e,t,o)),of(ap,Yu,(e,t)=>{const o=[e.clone()];return t.range.containsPosition(e.position)&&o.push(en(e,t)),o}),of(np,Xu,(e,t,o)=>{if(!t.position)return nf(e,t,o);const n=e.range.start.root==t.position.root,i=n&&'same'===A(e.range.start.getParentPath(),t.position.getParentPath()),r=e.range.start.offset<t.position.offset&&e.range.end.offset>=t.position.offset;if(i&&r)return[t.getReversed(),e.clone()];if(n&&'same'===A(t.position.getParentPath(),e.range.end.getShiftedBy(-1).path)){const t=e.clone();return t._insertOperation.position.offset++,t._moveOperation.howMany++,t._moveOperation.targetPosition.path[t._moveOperation.targetPosition.path.length-2]++,[t]}return nf(e,t,o)}),of(op,Xu,(e,t,o)=>{const n=o.undoMode,i=nf(e,t,o);if(n||!(t._cloneOperation instanceof ju))return i;const r=t._cloneOperation.position.getShiftedBy(-1);if(r&&e.operations[0].position.isEqual(r)){const t=e.clone();t.operations[0].position=r.getShiftedBy(1),i.push(t);}return i}),of(Xu,op,(e,t,o)=>{e=e.clone();const n=o.undoMode;if(n||!(e._cloneOperation instanceof ju))return[e];const i=e._cloneOperation.position.getShiftedBy(-1);if(i&&!n&&t.operations[0].position.isEqual(i)){const o=t.clone();return o.operations[0].position=i.getShiftedBy(1),o.operations[0].oldName=e._cloneOperation.nodes.getNode(0).name,[e,o]}return[e]}),of(tp,Xu,(e,t,o)=>{const n=nf(e,t,o),i=t._cloneOperation.position||t._cloneOperation.targetPosition;if(!i)return nf(e,t,o);const r=o.undoMode;if(r)return n;for(const r of n)if(r instanceof tp){const e=r._moveOperation,t=e.sourcePosition.getShiftedBy(e.howMany);t.isEqual(i)&&(e.howMany+=1);}return n}),of(Xu,tp,(e,t,o)=>{const n=o.undoMode;if(n)return nf(e,t,o);const i=e._cloneOperation.position||e._cloneOperation.targetPosition;if(!i)return nf(e,t,o);t=t.clone();const r=t._moveOperation,a=r.sourcePosition.getShiftedBy(r.howMany);return a.isEqual(i)&&(r.howMany+=1),nf(e,t,o)});class rf{constructor(e='default'){this.deltas=[],this.type=e;}get baseVersion(){for(const e of this.deltas)if(null!==e.baseVersion)return e.baseVersion;return null}addDelta(e){return e.batch=this,this.deltas.push(e),e}*getOperations(){for(const e of this.deltas)yield*e.operations;}}class af extends Qu{static get className(){return'engine.model.delta.RootAttributeDelta'}}Ju.register(af);class sf extends Fu{constructor(e,t){super(null),this.sourcePosition=uu.createFromPosition(e),this.howMany=t;}get type(){return'detach'}_validate(){if(this.sourcePosition.root.document)throw new _s('detach-operation-on-document-node: Cannot detach document node.')}_execute(){Co(pu.createFromPositionAndShift(this.sourcePosition,this.howMany));}static get className(){return'engine.model.operation.DetachOperation'}}class lf extends du{constructor(e,t,o='main'){super(t),this._doc=e,this.rootName=o;}get document(){return this._doc}is(e,t){return t?'rootElement'==e&&t==this.name||super.is(e,t):'rootElement'==e||super.is(e)}toJSON(){return this.rootName}}class df{constructor(e,t){this.model=e,this.batch=t;}createText(e,t){return new au(e,t)}createElement(e,t){return new du(e,t)}createDocumentFragment(){return new Nu}insert(e,t,o){this._assertWriterUsedCorrectly();const n=uu.createAt(t,o),i=e instanceof au&&!e.parent?new ap:new rp;if(e.parent){if(sn(e.root,n.root))return void this.move(pu.createOn(e),n);if(e.root.document)throw new Error('model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.');else this.remove(e);}const r=n.root.document?n.root.document.version:null,a=new ju(n,e,r);if(this.batch.addDelta(i),i.addOperation(a),this.model.applyOperation(a),e instanceof Nu)for(const[t,o]of e.markers){const e=uu.createAt(o.root),i=new pu(o.start._getCombined(e,n),o.end._getCombined(e,n));this.addMarker(t,{range:i,usingOperation:!0});}}insertText(e,t,o,n){t instanceof Nu||t instanceof du||t instanceof uu?this.insert(this.createText(e),t,o):this.insert(this.createText(e,t),o,n);}insertElement(e,t,o,n){t instanceof Nu||t instanceof du||t instanceof uu?this.insert(this.createElement(e),t,o):this.insert(this.createElement(e,t),o,n);}append(e,t){this.insert(e,t,'end');}appendText(e,t,o){t instanceof Nu||t instanceof du?this.insert(this.createText(e),t,'end'):this.insert(this.createText(e,t),o,'end');}appendElement(e,t,o){t instanceof Nu||t instanceof du?this.insert(this.createElement(e),t,'end'):this.insert(this.createElement(e,t),o,'end');}setAttribute(e,t,o){this._assertWriterUsedCorrectly(),o instanceof pu?on(this,e,t,o):nn(this,e,t,o);}setAttributes(e,t){for(const[o,n]of ut(e))this.setAttribute(o,n,t);}removeAttribute(e,t){this._assertWriterUsedCorrectly(),t instanceof pu?on(this,e,null,t):nn(this,e,null,t);}clearAttributes(e){this._assertWriterUsedCorrectly();const t=(e)=>{for(const t of e.getAttributeKeys())this.removeAttribute(t,e);};if(!(e instanceof pu))t(e);else for(const o of e.getItems())t(o);}move(e,t,o){if(this._assertWriterUsedCorrectly(),!(e instanceof pu))throw new _s('writer-move-invalid-range: Invalid range to move.');if(!e.isFlat)throw new _s('writer-move-range-not-flat: Range to move is not flat.');const n=uu.createAt(t,o);if(!sn(e.root,n.root))throw new _s('writer-move-different-document: Range is going to be moved between different documents.');const i=new ep;this.batch.addDelta(i);const r=e.root.document?e.root.document.version:null,a=new Bu(e.start,e.end.offset-e.start.offset,n,r);i.addOperation(a),this.model.applyOperation(a);}remove(e){this._assertWriterUsedCorrectly();const t=(e,t)=>{const o=new tp;this.batch.addDelta(o),an(e,t,o,this.model);};if(e instanceof pu){const o=e.getMinimalFlatRanges().reverse();for(const e of o)t(e.start,e.end.offset-e.start.offset);}else{const o=e.is('text')?e.offsetSize:1;t(uu.createBefore(e),o);}}merge(e){this._assertWriterUsedCorrectly();const t=new Zu;this.batch.addDelta(t);const o=e.nodeBefore,n=e.nodeAfter;if(!(o instanceof du))throw new _s('writer-merge-no-element-before: Node before merge position must be an element.');if(!(n instanceof du))throw new _s('writer-merge-no-element-after: Node after merge position must be an element.');const i=uu.createFromParentAndOffset(n,0),r=uu.createFromParentAndOffset(o,o.maxOffset),a=e.root.document?e.root.document.version:null,s=new Bu(i,n.maxOffset,r,a);s.isSticky=!0,t.addOperation(s),this.model.applyOperation(s),an(e,1,t,this.model);}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof du))throw new _s('writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.');const o=new op;this.batch.addDelta(o);const n=e.root.document?e.root.document.version:null,i=new Uu(uu.createBefore(e),e.name,t,n);o.addOperation(i),this.model.applyOperation(i);}split(e,t){this._assertWriterUsedCorrectly();let o=e.parent;if(!o.parent)throw new _s('writer-split-element-no-parent: Element with no parent can not be split.');if(t||(t=o.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new _s('writer-split-invalid-limit-element: Limit element is not a position ancestor.');let n,i;do{const t=new Xu;this.batch.addDelta(t);const r=new du(o.name,o.getAttributes()),a=o.root.document?o.root.document.version:null,s=new ju(uu.createAfter(o),r,a);t.addOperation(s),this.model.applyOperation(s);const l=null===a?null:a+1,d=new Bu(e,o.maxOffset-e.offset,uu.createFromParentAndOffset(r,0),l);d.isSticky=!0,t.addOperation(d),this.model.applyOperation(d),n||i||(n=o,i=r),e=uu.createBefore(r),o=e.parent;}while(o!==t);return{position:e,range:new pu(uu.createAt(n,'end'),uu.createAt(i))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new _s('writer-wrap-range-not-flat: Range to wrap is not flat.');const o=t instanceof du?t:new du(t);if(0<o.childCount)throw new _s('writer-wrap-element-not-empty: Element to wrap with is not empty.');if(null!==o.parent)throw new _s('writer-wrap-element-attached: Element to wrap with is already attached to tree model.');const n=new np;this.batch.addDelta(n);const i=e.root.document?e.root.document.version:null,r=new ju(e.end,o,i);n.addOperation(r),this.model.applyOperation(r);const a=null===i?null:i+1,s=uu.createFromParentAndOffset(o,0),l=new Bu(e.start,e.end.offset-e.start.offset,s,a);n.addOperation(l),this.model.applyOperation(l);}unwrap(e){if(this._assertWriterUsedCorrectly(),null===e.parent)throw new _s('writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.');const t=new ip;this.batch.addDelta(t);const o=uu.createFromParentAndOffset(e,0),n=o.root.document?o.root.document.version:null,i=new Bu(o,e.maxOffset,uu.createBefore(e),n);i.isSticky=!0,t.addOperation(i),this.model.applyOperation(i),an(uu.createBefore(e),1,t,this.model);}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||'boolean'!=typeof t.usingOperation)throw new _s('writer-addMarker-no-usingOperations: The options.usingOperations parameter is required when adding a new marker.');const o=t.usingOperation,n=t.range,i=void 0!==t.affectsData&&t.affectsData;if(this.model.markers.has(e))throw new _s('writer-addMarker-marker-exists: Marker with provided name already exists.');if(!n)throw new _s('writer-addMarker-no-range: Range parameter is required when adding a new marker.');return o?(rn(this,e,null,n,i),this.model.markers.get(e)):this.model.markers._set(e,n,o,i)}updateMarker(e,t={}){this._assertWriterUsedCorrectly();const o='string'==typeof e?e:e.name,n=this.model.markers.get(o);if(!n)throw new _s('writer-updateMarker-marker-not-exists: Marker with provided name does not exists.');const i='boolean'==typeof t.usingOperation,r='boolean'==typeof t.affectsData,a=r?t.affectsData:n.affectsData;if(!i&&!t.range&&!r)throw new _s('writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.');const s=n.getRange(),l=t.range?t.range:s;return i&&t.usingOperation!==n.managedUsingOperations?void(t.usingOperation?rn(this,o,null,l,a):(rn(this,o,s,null,a),this.model.markers._set(o,l,void 0,a))):void(n.managedUsingOperations?rn(this,o,s,l,a):this.model.markers._set(o,l,void 0,a))}removeMarker(e){this._assertWriterUsedCorrectly();const t='string'==typeof e?e:e.name;if(!this.model.markers.has(t))throw new _s('writer-removeMarker-no-marker: Trying to remove marker which does not exist.');const o=this.model.markers.get(t);if(!o.managedUsingOperations)return void this.model.markers._remove(t);const n=o.getRange();rn(this,t,n,null,o.affectsData);}setSelection(e,t,o){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,o);}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t);}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),'string'==typeof e)this._setSelectionAttribute(e,t);else for(const[t,o]of ut(e))this._setSelectionAttribute(t,o);}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),'string'==typeof e)this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t);}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e);}_setSelectionAttribute(e,t){const o=this.model.document.selection;if(o.isCollapsed&&o.anchor.parent.isEmpty){const n=wu._getStoreAttributeKey(e);this.setAttribute(n,t,o.anchor.parent);}o._setAttribute(e,t);}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const o=wu._getStoreAttributeKey(e);this.removeAttribute(o,t.anchor.parent);}t._removeAttribute(e);}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new _s('writer-incorrect-use: Trying to use a writer outside the change() block.')}}class cf{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null;}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}bufferOperation(e){switch(e.type){case'insert':{if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break}case'addAttribute':case'removeAttribute':case'changeAttribute':{for(const t of e.range.getItems())this._isInInsertedElement(t.parent)||this._markAttribute(t);break}case'remove':case'move':case'reinsert':{const t=this._isInInsertedElement(e.sourcePosition.parent),o=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),o||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case'rename':{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=pu.createFromPositionAndShift(e.position,1);for(const e of this._markerCollection.getMarkersIntersectingRange(t)){const t=e.getRange();this.bufferMarkerChange(e.name,t,t,e.affectsData);}break}}this._cachedChanges=null;}bufferMarkerChange(e,t,o,n){const i=this._changedMarkers.get(e);i?(i.newRange=o,i.affectsData=n,null==i.oldRange&&null==i.newRange&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{oldRange:t,newRange:o,affectsData:n});}getMarkersToRemove(){const e=[];for(const[t,o]of this._changedMarkers)null!=o.oldRange&&e.push({name:t,range:o.oldRange});return e}getMarkersToAdd(){const e=[];for(const[t,o]of this._changedMarkers)null!=o.newRange&&e.push({name:t,range:o.newRange});return e}hasDataChanges(){for(const[,e]of this._changedMarkers)if(e.affectsData)return!0;return 0<this._changesInElement.size}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const t=[];for(const o of this._changesInElement.keys()){const e=this._changesInElement.get(o).sort((e,t)=>e.offset===t.offset?e.type==t.type?0:'remove'==e.type?-1:1:e.offset<t.offset?-1:1),n=this._elementSnapshots.get(o),r=ln(o.getChildren()),a=dn(n.length,e);let s=0,i=0;for(const e of a)if('i'===e)t.push(this._getInsertDiff(o,s,r[s].name)),s++;else if('r'===e)t.push(this._getRemoveDiff(o,s,n[i].name)),i++;else if('a'===e){const e=r[s].attributes,a=n[i].attributes;let l;if('$text'==r[s].name)l=pu.createFromParentsAndOffsets(o,s,o,s+1);else{const e=o.offsetToIndex(s);l=pu.createFromParentsAndOffsets(o,s,o.getChild(e),0);}t.push(...this._getAttributesDiff(l,a,e)),s++,i++;}else s++,i++;}t.sort((e,t)=>e.position.root==t.position.root?e.position.isEqual(t.position)?e.changeCount<t.changeCount?-1:1:e.position.isBefore(t.position)?-1:1:e.position.root.rootName<t.position.root.rootName?-1:1);for(let o=1;o<t.length;o++){const e=t[o-1],n=t[o],i='remove'==e.type&&'remove'==n.type&&'$text'==e.name&&'$text'==n.name&&e.position.isEqual(n.position),r='insert'==e.type&&'insert'==n.type&&'$text'==e.name&&'$text'==n.name&&e.position.parent==n.position.parent&&e.position.offset+e.length==n.position.offset,a='attribute'==e.type&&'attribute'==n.type&&e.position.parent==n.position.parent&&e.range.isFlat&&n.range.isFlat&&e.position.offset+e.length==n.position.offset&&e.attributeKey==n.attributeKey&&e.attributeOldValue==n.attributeOldValue&&e.attributeNewValue==n.attributeNewValue;(i||r||a)&&(t[o-1].length++,a&&(t[o-1].range.end=t[o-1].range.end.getShiftedBy(1)),t.splice(o,1),o--);}for(const o of t)delete o.changeCount,'attribute'==o.type&&(delete o.position,delete o.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t.slice(),this._cachedChanges=t.slice().filter(cn),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null;}_markInsert(e,t,o){const n={type:'insert',offset:t,howMany:o,count:this._changeCount++};this._markChange(e,n);}_markRemove(e,t,o){const n={type:'remove',offset:t,howMany:o,count:this._changeCount++};this._markChange(e,n),this._removeAllNestedChanges(e,t,o);}_markAttribute(e){const t={type:'attribute',offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t);}_markChange(e,t){this._makeSnapshot(e);const o=this._getChangesForElement(e);this._handleChange(t,o),o.push(t);for(let n=0;n<o.length;n++)1>o[n].howMany&&(o.splice(n,1),n--);}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,ln(e.getChildren()));}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const o of t){const n=e.offset+e.howMany,i=o.offset+o.howMany;if('insert'==e.type&&('insert'==o.type&&(e.offset<=o.offset?o.offset+=e.howMany:e.offset<i&&(o.howMany+=e.nodesToHandle,e.nodesToHandle=0)),'remove'==o.type&&e.offset<o.offset&&(o.offset+=e.howMany),'attribute'==o.type))if(e.offset<=o.offset)o.offset+=e.howMany;else if(e.offset<i){const i=o.howMany;o.howMany=e.offset-o.offset,t.unshift({type:'attribute',offset:n,howMany:i-o.howMany,count:this._changeCount++});}if('remove'==e.type){if('insert'==o.type)if(n<=o.offset)o.offset-=e.howMany;else if(n<=i){if(e.offset<o.offset){const t=n-o.offset;o.offset=e.offset,o.howMany-=t,e.nodesToHandle-=t;}else o.howMany-=e.nodesToHandle,e.nodesToHandle=0;}else if(e.offset<=o.offset)e.nodesToHandle-=o.howMany,o.howMany=0;else if(e.offset<i){const t=i-e.offset;o.howMany-=t,e.nodesToHandle-=t;}if('remove'==o.type&&(n<=o.offset?o.offset-=e.howMany:e.offset<o.offset&&(e.nodesToHandle+=o.howMany,o.howMany=0)),'attribute'==o.type)if(n<=o.offset)o.offset-=e.howMany;else if(e.offset<o.offset){const t=n-o.offset;o.offset=e.offset,o.howMany-=t;}else if(e.offset<i)if(n<=i){const n=o.howMany;o.howMany=e.offset-o.offset;const i=n-o.howMany-e.nodesToHandle;t.unshift({type:'attribute',offset:e.offset,howMany:i,count:this._changeCount++});}else o.howMany-=i-e.offset;}if('attribute'==e.type){if('insert'==o.type)if(e.offset<o.offset&&n>o.offset){if(n>i){const e={type:'attribute',offset:i,howMany:n-i,count:this._changeCount++};this._handleChange(e,t),t.push(e);}e.nodesToHandle=o.offset-e.offset,e.howMany=e.nodesToHandle;}else e.offset>=o.offset&&e.offset<i&&(n>i?(e.nodesToHandle=n-i,e.offset=i):e.nodesToHandle=0);'attribute'==o.type&&(e.offset>=o.offset&&n<=i?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=o.offset&&n>=i&&(o.howMany=0));}}e.howMany=e.nodesToHandle,delete e.nodesToHandle;}_getInsertDiff(e,t,o){return{type:'insert',position:uu.createFromParentAndOffset(e,t),name:o,length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,o){return{type:'remove',position:uu.createFromParentAndOffset(e,t),name:o,length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,o){const n=[];o=new Map(o);for(const[i,r]of t){const t=o.has(i)?o.get(i):null;t!==r&&n.push({type:'attribute',position:e.start,range:pu.createFromRange(e),length:1,attributeKey:i,attributeOldValue:r,attributeNewValue:t,changeCount:this._changeCount++}),o.delete(i);}for(const[i,r]of o)n.push({type:'attribute',position:e.start,range:pu.createFromRange(e),length:1,attributeKey:i,attributeOldValue:null,attributeNewValue:r,changeCount:this._changeCount++});return n}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const o=this._changesInElement.get(t),n=e.startOffset;if(o)for(const e of o)if('insert'==e.type&&n>=e.offset&&n<e.offset+e.howMany)return!0;return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,o){const n=pu.createFromParentsAndOffsets(e,t,e,t+o);for(const i of n.getItems({shallow:!0}))i.is('element')&&(this._elementSnapshots.delete(i),this._changesInElement.delete(i),this._removeAllNestedChanges(i,0,i.maxOffset));}}class mf{constructor(){this._deltas=[],this._historyPoints=new Map,this._undoPairs=new Map,this._undoneDeltas=new Set;}addDelta(e){if(0<e.operations.length&&!this._historyPoints.has(e.baseVersion)){const t=this._deltas.length;this._deltas[t]=e,this._historyPoints.set(e.baseVersion,t);}}*getDeltas(e=0,t=ns){if(0!==this._deltas.length){let o=this._getIndex(e);if(-1!=o)for(;o<this._deltas.length;){const e=this._deltas[o++];if(e.baseVersion>=t)break;yield e;}}}getDelta(e){const t=this._historyPoints.get(e);return t===void 0?null:this._deltas[t]}setDeltaAsUndone(e,t){this._undoPairs.set(t,e),this._undoneDeltas.add(e);}isUndoingDelta(e){return this._undoPairs.has(e)}isUndoneDelta(e){return this._undoneDeltas.has(e)}getUndoneDelta(e){return this._undoPairs.get(e)}_getIndex(e){const t=this._historyPoints.get(e);if(t===void 0){const t=this._deltas[this._deltas.length-1],o=t.baseVersion+t.operations.length;if(0>e||e>=o)return-1;throw new _s('model-history-wrong-version: Given base version points to the middle of a delta.')}return t}}const uf='$graveyard';class pf{constructor(e){this.model=e,this.version=0,this.history=new mf(this),this.selection=new wu(this),this.roots=new Gc({idProperty:'rootName'}),this.differ=new cf(e.markers),this._postFixers=new Set,this.createRoot('$root',uf),this.listenTo(e,'applyOperation',(e,t)=>{const o=t[0];if(o.isDocumentOperation&&o.baseVersion!==this.version)throw new _s('model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.',{operation:o})},{priority:'highest'}),this.listenTo(e,'applyOperation',(e,t)=>{const o=t[0];o.isDocumentOperation&&this.differ.bufferOperation(o);},{priority:'high'}),this.listenTo(e,'applyOperation',(e,t)=>{const o=t[0];o.isDocumentOperation&&(this.version++,this.history.addDelta(o.delta));},{priority:'low'});let t=!1;this.listenTo(this.selection,'change',()=>{t=!0;}),this.listenTo(e,'_change',(e,o)=>{(!this.differ.isEmpty||t)&&(this._callPostFixers(o),this.differ.hasDataChanges()?this.fire('change:data',o.batch):this.fire('change',o.batch),this.differ.reset(),t=!1);}),this.listenTo(e.markers,'update',(e,t,o,n)=>{this.differ.bufferMarkerChange(t.name,o,n,t.affectsData),null===o&&t.on('change',(e,o)=>{this.differ.bufferMarkerChange(t.name,o,t.getRange(),t.affectsData);});});}get graveyard(){return this.getRoot(uf)}createRoot(e='$root',t='main'){if(this.roots.get(t))throw new _s('model-document-createRoot-name-exists: Root with specified name already exists.',{name:t});const o=new lf(this,e,t);return this.roots.add(o),o}destroy(){this.selection.destroy(),this.stopListening();}getRoot(e='main'){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,(e)=>e.rootName).filter((e)=>e!=uf)}registerPostFixer(e){this._postFixers.add(e);}toJSON(){const e=$d(this);return e.selection='[engine.model.DocumentSelection]',e.model='[engine.model.Model]',e}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model.schema,o=new uu(e,[0]),n=t.getNearestSelectionRange(o);return n||new pu(o)}_validateSelectionRange(e){return hn(e.start)&&hn(e.end)}_callPostFixers(e){let t=!1;do for(const o of this._postFixers)if(t=o(e),t)break;while(t)}}f(pf,Ps);class gf{constructor(){this._markers=new Map;}[Symbol.iterator](){return this._markers.values()}has(e){return this._markers.has(e)}get(e){return this._markers.get(e)||null}_set(e,t,o=!1,n=!1){const i=e instanceof ff?e.name:e,r=this._markers.get(i);if(r){const e=r.getRange();let a=!1;return e.isEqual(t)||(r._attachLiveRange(ku.createFromRange(t)),a=!0),o!=r.managedUsingOperations&&(r._managedUsingOperations=o,a=!0),'boolean'==typeof n&&n!=r.affectsData&&(r._affectsData=n,a=!0),a&&this.fire('update:'+i,r,e,t),r}const a=ku.createFromRange(t),s=new ff(i,a,o,n);return this._markers.set(i,s),this.fire('update:'+i,s,null,t),s}_remove(e){const t=e instanceof ff?e.name:e,o=this._markers.get(t);return!!o&&(this._markers.delete(t),this.fire('update:'+t,o,o.getRange(),null),this._destroyMarker(o),!0)}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t);}*getMarkersIntersectingRange(e){for(const t of this)null!==t.getRange().getIntersection(e)&&(yield t);}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening();}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+':')&&(yield t);}_destroyMarker(e){e.stopListening(),e._detachLiveRange();}}f(gf,Ps);class ff{constructor(e,t,o,n){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=o,this._affectsData=n;}get managedUsingOperations(){if(!this._liveRange)throw new _s('marker-destroyed: Cannot use a destroyed marker instance.');return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new _s('marker-destroyed: Cannot use a destroyed marker instance.');return this._affectsData}getStart(){if(!this._liveRange)throw new _s('marker-destroyed: Cannot use a destroyed marker instance.');return uu.createFromPosition(this._liveRange.start)}getEnd(){if(!this._liveRange)throw new _s('marker-destroyed: Cannot use a destroyed marker instance.');return uu.createFromPosition(this._liveRange.end)}getRange(){if(!this._liveRange)throw new _s('marker-destroyed: Cannot use a destroyed marker instance.');return pu.createFromRange(this._liveRange)}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate('change:range').to(this),e.delegate('change:content').to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating('change:range',this),this._liveRange.stopDelegating('change:content',this),this._liveRange.detach(),this._liveRange=null;}}f(ff,Ps);class hf extends uu{constructor(e,t,o){if(super(e,t),!this.root.is('rootElement'))throw new _s('model-liveposition-root-not-rootelement: LivePosition\'s root has to be an instance of RootElement.');this.stickiness=o||'sticksToNext',bn.call(this);}detach(){this.stopListening();}}f(hf,Ps);class bf{constructor(e,t,o){this.model=e,this.writer=t,this.position=o,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._filterAttributesOf=[];}handleNodes(e,t){e=Array.from(e);for(let o=0;o<e.length;o++){const n=e[o];this._handleNode(n,{isFirst:0===o&&t.isFirst,isLast:o===e.length-1&&t.isLast});}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[];}getSelectionRange(){return this.nodeToSelect?pu.createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}_handleNode(e,t){if(this.schema.isObject(e))return void this._handleObject(e,t);const o=this._checkAndSplitToAllowedPosition(e,t);return o?void(this._insert(e),this._mergeSiblingsOf(e,t)):void this._handleDisallowedNode(e,t)}_handleObject(e,t){this._checkAndSplitToAllowedPosition(e)?this._insert(e):this._tryAutoparagraphing(e,t);}_handleDisallowedNode(e,t){e.is('element')?this.handleNodes(e.getChildren(),t):this._tryAutoparagraphing(e,t);}_insert(e){if(!this.schema.checkChild(this.position,e))return void Xm.error('insertcontent-wrong-position: The node cannot be inserted on the given position.',{node:e,position:this.position});const t=hf.createFromPosition(this.position);this.writer.insert(e,this.position),this.position=uu.createFromPosition(t),t.detach(),this.nodeToSelect=this.schema.isObject(e)&&!this.schema.checkChild(this.position,'$text')?e:null,this._filterAttributesOf.push(e);}_mergeSiblingsOf(e,t){if(e instanceof du){const o=this._canMergeLeft(e,t),n=this._canMergeRight(e,t),i=hf.createBefore(e),r=hf.createAfter(e);if(o){const e=hf.createFromPosition(this.position);this.writer.merge(i),this.position=uu.createFromPosition(e),e.detach();}if(n){this.position.isEqual(r)||Xm.error('insertcontent-wrong-position-on-merge: The insertion position should equal the merge position'),this.position=uu.createAt(r.nodeBefore,'end');const e=new hf(this.position.root,this.position.path,'sticksToPrevious');this.writer.merge(r),this.position=uu.createFromPosition(e),e.detach();}(o||n)&&this._filterAttributesOf.push(this.position.parent),i.detach(),r.detach();}}_canMergeLeft(e,t){const o=e.previousSibling;return t.isFirst&&o instanceof du&&this.canMergeWith.has(o)&&this.model.schema.checkMerge(o,e)}_canMergeRight(e,t){const o=e.nextSibling;return t.isLast&&o instanceof du&&this.canMergeWith.has(o)&&this.model.schema.checkMerge(e,o)}_tryAutoparagraphing(e,t){const o=this.writer.createElement('paragraph');this._getAllowedIn(o,this.position.parent)&&this.schema.checkChild(o,e)&&(o._appendChild(e),this._handleNode(o,t));}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(e,this.position.parent);if(!t)return!1;for(;t!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const e=this.position.parent;this.position=uu.createBefore(e),e.isEmpty&&this.writer.remove(e);}else if(this.position.isAtEnd)this.position=uu.createAfter(this.position.parent);else{const e=uu.createAfter(this.position.parent);this.writer.split(this.position),this.position=e,this.canMergeWith.add(this.position.nodeAfter);}}return!0}_getAllowedIn(e,t){return this.schema.checkChild(t,e)?t:t.parent?this._getAllowedIn(e,t.parent):null}}const kf=' ,.?!:;"-()';class _f{constructor(){this.markers=new gf,this.document=new pf(this),this.schema=new Su,this._pendingChanges=[],this._currentWriter=null,['insertContent','deleteContent','modifySelection','getSelectedContent','applyOperation'].forEach((e)=>this.decorate(e)),this.on('applyOperation',(e,t)=>{const o=t[0];o._validate();},{priority:'highest'}),this.schema.register('$root',{isLimit:!0}),this.schema.register('$block',{allowIn:'$root',isBlock:!0}),this.schema.register('$text',{allowIn:'$block'}),this.schema.register('$clipboardHolder',{allowContentOf:'$root',isLimit:!0}),this.schema.extend('$text',{allowIn:'$clipboardHolder'}),this.schema.register('$marker',{allowIn:['$root','$block']}),Dn(this);}change(e){return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new rf,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}enqueueChange(e,t){'string'==typeof e?e=new rf(e):'function'==typeof e&&(t=e,e=new rf),this._pendingChanges.push({batch:e,callback:t}),1==this._pendingChanges.length&&this._runPendingChanges();}applyOperation(e){e._execute();}transformDeltas(e,t,o=!1){return ef.transformDeltaSets(e,t,o?this.document:null)}insertContent(e,t){_n(this,e,t);}deleteContent(e,t){wn(this,e,t);}modifySelection(e,t){Pn(this,e,t);}getSelectedContent(e){return Fn(this,e)}hasContent(e){if(e instanceof du&&(e=pu.createIn(e)),e.isCollapsed)return!1;for(const t of e.getItems())if(t.is('textProxy')||this.schema.isObject(t))return!0;return!1}destroy(){this.document.destroy(),this.stopListening();}_runPendingChanges(){const e=[];for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new df(this,t);const o=this._pendingChanges[0].callback(this._currentWriter);e.push(o),this.fire('_change',this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null;}return e}}f(_f,Mc);class wf{constructor(){this._listener=Object.create(km);}listenTo(e){this._listener.listenTo(e,'keydown',(e,t)=>{this._listener.fire('_keydown:'+te(t),t);});}set(e,t,o={}){const n=oe(e),i=o.priority;this._listener.listenTo(this._listener,'_keydown:'+n,(e,o)=>{t(o,()=>{o.preventDefault(),o.stopPropagation(),e.stop();}),e.return=!0;},{priority:i});}press(e){return!!this._listener.fire('_keydown:'+te(e),e)}destroy(){this._listener.stopListening();}}class vf extends wf{constructor(e){super(),this.editor=e;}set(e,t,o={}){if('string'==typeof t){const e=t;t=(t,o)=>{this.editor.execute(e),o();};}super.set(e,t,o);}}class yf{constructor(e){const t=this.constructor.build&&this.constructor.build.plugins;this.config=new bs(e,this.constructor.build&&this.constructor.build.config),this.config.define('plugins',t),this.plugins=new Cu(this,t),this.commands=new Au,this.locale=new Tu(this.config.get('language')),this.t=this.locale.t,this.set('isReadOnly',!1),this.model=new _f,this.data=new Ru(this.model),this.editing=new xu(this.model),this.editing.view.document.bind('isReadOnly').to(this),this.conversion=new Vu,this.conversion.register('downcast',[this.editing.downcastDispatcher,this.data.downcastDispatcher]),this.conversion.register('editingDowncast',[this.editing.downcastDispatcher]),this.conversion.register('dataDowncast',[this.data.downcastDispatcher]),this.conversion.register('upcast',[this.data.upcastDispatcher]),this.keystrokes=new vf(this),this.keystrokes.listenTo(this.editing.view.document);}initPlugins(){function e(e,t){return e.reduce((e,o)=>o[t]?e.then(o[t].bind(o)):e,Promise.resolve())}const t=this,o=this.config;return function(){const e=o.get('plugins')||[],n=o.get('removePlugins')||[];return t.plugins.load(e,n)}().then((t)=>e(t,'init').then(()=>e(t,'afterInit'))).then(()=>this.fire('pluginsReady'))}destroy(){return this.fire('destroy'),this.stopListening(),this.commands.destroy(),this.plugins.destroy().then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy();})}execute(...e){this.commands.execute(...e);}static create(e){return new Promise((t)=>{const o=new this(e);t(o.initPlugins().then(()=>{o.fire('dataReady'),o.fire('ready');}).then(()=>o));})}}f(yf,Mc);const xf={setData(e){this.data.set(e);},getData(){return this.data.get()}};const Cf={updateElement(){Wn(this.element,this.data.get());}};class Af{getHtml(e){const t=document.implementation.createHTMLDocument(''),o=t.createElement('div');return o.appendChild(e),o.innerHTML}}class Tf{constructor(){this._domParser=new DOMParser,this._domConverter=new hm({blockFiller:dm}),this._htmlWriter=new Af;}toData(e){const t=this._domConverter.viewToDom(e,document);return this._htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this._domConverter.domToView(t)}_toDom(e){const t=this._domParser.parseFromString(e,'text/html'),o=t.createDocumentFragment(),n=t.body.childNodes;for(;0<n.length;)o.appendChild(n[0]);return o}}class Pf{constructor(e){this.editor=e,this._components=new Map;}*names(){for(const e of this._components.values())yield e.originalName;}add(e,t){if(this.has(e))throw new _s('componentfactory-item-exists: The item already exists in the component factory.',{name:e});this._components.set(Hn(e),{callback:t,originalName:e});}create(e){if(!this.has(e))throw new _s('componentfactory-item-missing: The required component is not registered in the factory.',{name:e});return this._components.get(Hn(e)).callback(this.editor.locale)}has(e){return this._components.has(Hn(e))}}class Ef{constructor(){this.set('isFocused',!1),this.focusedElement=null,this._elements=new Set,this._nextEventLoopTimeout=null;}add(e){if(this._elements.has(e))throw new _s('focusTracker-add-element-already-exist');this.listenTo(e,'focus',()=>this._focus(e),{useCapture:!0}),this.listenTo(e,'blur',()=>this._blur(),{useCapture:!0}),this._elements.add(e);}remove(e){e===this.focusedElement&&this._blur(e),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e));}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0;}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1;},0);}}f(Ef,km),f(Ef,Mc);class Sf{constructor(e,t){this.editor=e,this.view=t,this.componentFactory=new Pf(e),this.focusTracker=new Ef,this._toolbarConfig=Gn(e.config.get('toolbar'));}init(){const e=this.editor,t=this.view;t.render(),t.stickyPanel.bind('isActive').to(this.focusTracker,'isFocused'),t.stickyPanel.limiterElement=t.element,this._toolbarConfig.viewportTopOffset&&(t.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset);const o=e.editing.view.document.getRoot();t.editable.bind('isReadOnly').to(o),t.editable.bind('isFocused').to(e.editing.view.document),t.editable.name=o.rootName,this.focusTracker.add(this.view.editableElement),this.view.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),Kn({origin:e.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:this.view.toolbar});}destroy(){this.view.destroy();}}class Of extends Gc{constructor(e){super({idProperty:'viewUid'}),this.on('add',(e,t,o)=>{t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[o]);}),this.on('remove',(e,t)=>{t.element&&this._parentElement&&t.element.remove();}),this.locale=e,this._parentElement=null;}destroy(){this.map((e)=>e.destroy());}setParent(e){this._parentElement=e;}delegate(...e){if(!e.length||!$n(e))throw new _s('ui-viewcollection-delegate-wrong-events: All event names must be strings.');return{to:(t)=>{for(const o of this)for(const n of e)o.delegate(n).to(t);this.on('add',(o,n)=>{for(const i of e)n.delegate(i).to(t);}),this.on('remove',(o,n)=>{for(const i of e)n.stopDelegating(i,t);});}}}}f(Gc,Mc);var If=function(e,t){return Gd(e,!0,!0,t)};class Rf{constructor(e){Object.assign(this,oi(ti(e))),this._isRendered=!1,this._revertData=null;}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData=fi(),this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new _s('ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.');this._revertTemplateFromNode(e,this._revertData);}*getViews(){function*e(t){if(t.children)for(const o of t.children)ui(o)?yield o:pi(o)&&(yield*e(o));}yield*e(this);}static bind(e,t){return{to(o,n){return new Ff({eventNameOrFunction:o,attribute:o,observable:e,emitter:t,callback:n})},if(o,n,i){return new Nf({observable:e,emitter:t,attribute:o,valueIfTrue:n,callback:i})}}}static extend(e,t){e._isRendered&&Xm.warn('template-extend-render: Attempting to extend a template which has already been rendered.'),ci(e,oi(ti(t)));}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new _s('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||'http://www.w3.org/1999/xhtml',this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(''),Jn(this.text)?this._bindToObservable({schema:this.text,updater:Xn(t),data:e}):t.textContent=this.text.join(''),t}_renderAttributes(e){let t,o,n,i;if(this.attributes){const r=e.node,a=e.revertData;for(t in this.attributes)if(n=r.getAttribute(t),o=this.attributes[t],a&&(a.attributes[t]=n),i=Vs(o[0])&&o[0].ns?o[0].ns:null,Jn(o)){const s=i?o[0].value:o;a&&hi(t)&&s.unshift(n),this._bindToObservable({schema:s,updater:Zn(r,t,i),data:e});}else'style'==t&&'string'!=typeof o[0]?this._renderStyleAttribute(o[0],e):(a&&n&&hi(t)&&o.unshift(n),o=o.map((e)=>e?e.value||e:e).reduce((e,t)=>e.concat(t),[]).reduce(li,''),mi(o)||r.setAttributeNS(i,t,o));}}_renderStyleAttribute(e,t){const o=t.node;for(const n in e){const i=e[n];Jn(i)?this._bindToObservable({schema:[i],updater:ei(o,n),data:t}):o.style[n]=i;}}_renderElementChildren(e){const t=e.node,o=e.intoFragment?document.createDocumentFragment():t,n=e.isApplying;let i=0;for(const r of this.children)if(gi(r)){if(!n){r.setParent(t);for(const e of r)o.appendChild(e.element);}}else if(ui(r))n||(!r.isRendered&&r.render(),o.appendChild(r.element));else if(Oe(r))o.appendChild(r);else if(n){const t=e.revertData,n=fi();t.children.push(n),r._renderNode({node:o.childNodes[i++],isApplying:!0,revertData:n});}else o.appendChild(r.render());e.intoFragment&&t.appendChild(o);}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const o=this.eventListeners[t].map((o)=>{const[n,i]=t.split('@');return o.activateDomEventListener(n,i,e)});e.revertData&&e.revertData.bindings.push(o);}}_bindToObservable({schema:e,updater:t,data:o}){const n=o.revertData;Yn(e,t,o);const i=e.filter((e)=>!mi(e)).filter((e)=>e.observable).map((n)=>n.activateAttributeListener(e,t,o));n&&n.bindings.push(i);}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const e of o)e();if(t.text)return void(e.textContent=t.text);for(const o in t.attributes){const n=t.attributes[o];null===n?e.removeAttribute(o):e.setAttribute(o,n);}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(e.childNodes[o],t.children[o]);}}f(Rf,Ps);class Vf{constructor(e){Object.assign(this,e);}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,o){const n=()=>Yn(e,t,o);return this.emitter.listenTo(this.observable,'change:'+this.attribute,n),()=>{this.emitter.stopListening(this.observable,'change:'+this.attribute,n);}}}class Ff extends Vf{activateDomEventListener(e,t,o){const n=(e,o)=>{(!t||o.target.matches(t))&&('function'==typeof this.eventNameOrFunction?this.eventNameOrFunction(o):this.observable.fire(this.eventNameOrFunction,o));};return this.emitter.listenTo(o.node,e,n),()=>{this.emitter.stopListening(o.node,e,n);}}}class Nf extends Vf{getValue(e){const t=super.getValue(e);return!mi(t)&&(this.valueIfTrue||!0)}}var Df=o(11),Mf=o.n(Df);class Bf{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Gc,this._unboundChildren=this.createCollection(),this._viewCollections.on('add',(t,o)=>{o.locale=e;}),this.decorate('render');}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Rf.bind(this,this)}createCollection(){const e=new Of;return this._viewCollections.add(e),e}registerChild(e){P(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t);}deregisterChild(e){P(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t);}setTemplate(e){this.template=new Rf(e);}extendTemplate(e){Rf.extend(this.template,e);}render(){if(this.isRendered)throw new _s('ui-view-render-already-rendered: This View has already been rendered.');this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0;}destroy(){this.stopListening(),this._viewCollections.map((e)=>e.destroy());}}f(Bf,km),f(Bf,Mc);var Lf=o(14),zf=o.n(Lf);class jf extends Bf{constructor(e){super(e),this.body=this.createCollection();}render(){super.render(),this._renderBodyCollection();}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const e=this._bodyCollectionContainer=new Rf({tag:'div',attributes:{class:['ck','ck-reset_all','ck-body','ck-rounded-corners']},children:this.body}).render();document.body.appendChild(e);}}var qf=o(16),Wf=o.n(qf);class Uf extends Bf{constructor(e){super(e),this.set('text'),this.set('for');const t=this.bindTemplate;this.setTemplate({tag:'label',attributes:{class:['ck','ck-label'],for:t.to('for')},children:[{text:t.to('text')}]});}}class Hf extends jf{constructor(e){super(e);const t=i();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(t),this.setTemplate({tag:'div',attributes:{class:['ck','ck-reset','ck-editor','ck-rounded-corners'],role:'application',dir:'ltr',lang:e.language,"aria-labelledby":`ck-editor__aria-label_${t}`},children:[this._voiceLabelView,{tag:'div',attributes:{class:['ck','ck-editor__top','ck-reset_all'],role:'presentation'},children:this.top},{tag:'div',attributes:{class:['ck','ck-editor__main'],role:'presentation'},children:this.main}]});}_createVoiceLabel(e){const o=this.t,t=new Uf;return t.text=o('ag'),t.extendTemplate({attributes:{id:`ck-editor__aria-label_${e}`,class:'ck-voice-label'}}),t}}class Kf extends Bf{constructor(e,t){super(e);const o=this.bindTemplate;t&&(this.element=this.editableElement=t),this.setTemplate({tag:'div',attributes:{class:['ck','ck-content','ck-editor__editable','ck-rounded-corners',o.to('isFocused',(e)=>e?'ck-focused':'ck-blurred')],contenteditable:o.to('isReadOnly',(e)=>!e)}}),this.set('isReadOnly',!1),this.set('isFocused',!1),this.externalElement=t;}render(){super.render(),this.externalElement?this.template.apply(this.element=this.externalElement):this.editableElement=this.element;}destroy(){this.externalElement&&this.template.revert(this.externalElement),super.destroy();}}class Gf extends Kf{constructor(e,o){super(e,o);const n=this.bindTemplate,i=this.t;this.set('name',null);this.extendTemplate({attributes:{role:'textbox',"aria-label":n.to('name',(e)=>i('af',[e])),class:'ck-editor__editable_inline'}});}}var $f=o(18),Jf=o.n($f);const Qf=bi('px');class Yf extends Bf{constructor(e){super(e);const t=this.bindTemplate;this.set('isActive',!1),this.set('isSticky',!1),this.set('limiterElement',null),this.set('limiterBottomOffset',50),this.set('viewportTopOffset',0),this.set('_marginLeft',null),this.set('_isStickyToTheLimiter',!1),this.set('_hasViewportTopOffset',!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Rf({tag:'div',attributes:{class:['ck','ck-sticky-panel__placeholder'],style:{display:t.to('isSticky',(e)=>e?'block':'none'),height:t.to('isSticky',(e)=>e?Qf(this._panelRect.height):null)}}}).render(),this._contentPanel=new Rf({tag:'div',attributes:{class:['ck','ck-sticky-panel__content',t.if('isSticky','ck-sticky-panel__content_sticky'),t.if('_isStickyToTheLimiter','ck-sticky-panel__content_sticky_bottom-limit')],style:{width:t.to('isSticky',(e)=>e?Qf(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to('_hasViewportTopOffset',(e)=>e?Qf(this.viewportTopOffset):null),bottom:t.to('_isStickyToTheLimiter',(e)=>e?Qf(this.limiterBottomOffset):null),marginLeft:t.to('_marginLeft')}},children:this.content}).render(),this.setTemplate({tag:'div',attributes:{class:['ck','ck-sticky-panel']},children:[this._contentPanelPlaceholder,this._contentPanel]});}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(gm.window,'scroll',()=>{this._checkIfShouldBeSticky();}),this.listenTo(this,'change:isActive',()=>{this._checkIfShouldBeSticky();});}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Qf(-gm.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null);}}class Xf{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let o=e.actions[t];'string'==typeof o&&(o=[o]);for(const n of o)e.keystrokeHandler.set(n,(e,o)=>{this[t](),o();});}}get first(){return this.focusables.find(ki)||null}get last(){return this.focusables.filter(ki).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((t,o)=>{const n=t.element===this.focusTracker.focusedElement;return n&&(e=o),n}),e)}focusFirst(){this._focus(this.first);}focusLast(){this._focus(this.last);}focusNext(){this._focus(this.next);}focusPrevious(){this._focus(this.previous);}_focus(e){e&&e.focus();}_getFocusableItem(e){const t=this.current,o=this.focusables.length;if(!o)return null;if(null===t)return this[1===e?'first':'last'];let n=(t+o+e)%o;do{const t=this.focusables.get(n);if(ki(t))return t;n=(n+o+e)%o;}while(n!==t);return null}}class Zf extends Bf{constructor(e){super(e),this.setTemplate({tag:'span',attributes:{class:['ck','ck-toolbar__separator']}});}}var eh=o(20),th=o.n(eh);class oh extends Bf{constructor(e){super(e);const t=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new Ef,this.keystrokes=new wf,this.set('isVertical',!1),this.set('className'),this._focusCycler=new Xf({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:['arrowleft','arrowup'],focusNext:['arrowright','arrowdown']}}),this.setTemplate({tag:'div',attributes:{class:['ck','ck-toolbar',t.if('isVertical','ck-toolbar_vertical'),t.to('className')]},children:this.items,on:{mousedown:_i(this)}});}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on('add',(e,t)=>{this.focusTracker.add(t.element);}),this.items.on('remove',(e,t)=>{this.focusTracker.remove(t.element);}),this.keystrokes.listenTo(this.element);}focus(){this._focusCycler.focusFirst();}focusLast(){this._focusCycler.focusLast();}fillFromConfig(e,t){e.map((e)=>{'|'==e?this.items.add(new Zf):t.has(e)?this.items.add(t.create(e)):Xm.warn('toolbarview-item-unavailable: The requested toolbar item is unavailable.',{name:e});});}}var nh=o(22),ih=o.n(nh);class rh extends Hf{constructor(e){super(e),this.stickyPanel=new Yf(e),this.toolbar=new oh(e),this.editable=new Gf(e);}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable);}get editableElement(){return this.editable.element}}class ah{constructor(){this._replacedElements=[];}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display='none',t&&e.parentNode.insertBefore(t,e.nextSibling);}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display='',t&&t.remove();}),this._replacedElements=[];}}class sh extends yf{constructor(e,t){super(t),this._elementReplacer=new ah,this.element=e,this.data.processor=new Tf,this.model.document.createRoot(),this.ui=new Sf(this,new rh(this.locale)),Un(this);}destroy(){return this.updateElement(),this._elementReplacer.restore(),this.ui.destroy(),super.destroy()}static create(e,t){return new Promise((o)=>{const n=new this(e,t);o(n.initPlugins().then(()=>n.ui.init()).then(()=>{n._elementReplacer.replace(e,n.ui.view.element),n.fire('uiReady');}).then(()=>n.editing.view.attachDomRoot(n.ui.view.editableElement)).then(()=>n.data.init(wi(e))).then(()=>{n.fire('dataReady'),n.fire('ready');}).then(()=>n));})}}f(sh,xf),f(sh,Cf);class lh{constructor(e){this.editor=e;}destroy(){this.stopListening();}}f(lh,Mc);class dh{constructor(e){this.files=vi(e),this._native=e;}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t);}}class ch extends qm{constructor(e){function t(e,t){t.preventDefault();const n=t.dropRange?[t.dropRange]:Array.from(o.selection.getRanges());o.fire('clipboardInput',{dataTransfer:t.dataTransfer,targetRanges:n});}super(e);const o=this.document;this.domEventType=['paste','copy','cut','drop','dragover'],this.listenTo(o,'paste',t,{priority:'low'}),this.listenTo(o,'drop',t,{priority:'low'});}onDomEvent(e){const t={dataTransfer:new dh(e.clipboardData?e.clipboardData:e.dataTransfer)};'drop'==e.type&&(t.dropRange=yi(this.view,e)),this.fire(e.type,e,t);}}const mh=['figcaption','li'];class uh extends lh{static get pluginName(){return'Clipboard'}init(){function e(e,n){const r=n.dataTransfer;n.preventDefault();const a=t.data.toView(t.model.getSelectedContent(o.selection));i.fire('clipboardOutput',{dataTransfer:r,content:a,method:e.name});}const t=this.editor,o=t.model.document,n=t.editing.view,i=n.document;this._htmlDataProcessor=new Tf,n.addObserver(ch),this.listenTo(i,'clipboardInput',(e)=>{t.isReadOnly&&e.stop();},{priority:'highest'}),this.listenTo(i,'clipboardInput',(e,t)=>{const o=t.dataTransfer;let i='';o.getData('text/html')?i=Ci(o.getData('text/html')):o.getData('text/plain')&&(i=xi(o.getData('text/plain'))),i=this._htmlDataProcessor.toView(i),this.fire('inputTransformation',{content:i}),n.scrollToTheSelection();},{priority:'low'}),this.listenTo(this,'inputTransformation',(e,t)=>{if(!t.content.isEmpty){const e=this.editor.data,n=this.editor.model,i=e.toModel(t.content,'$clipboardHolder');if(0==i.childCount)return;n.insertContent(i,o.selection);}},{priority:'low'}),this.listenTo(i,'copy',e,{priority:'low'}),this.listenTo(i,'cut',(o,n)=>{t.isReadOnly?n.preventDefault():e(o,n);},{priority:'low'}),this.listenTo(i,'clipboardOutput',(e,n)=>{n.content.isEmpty||(n.dataTransfer.setData('text/html',this._htmlDataProcessor.toData(n.content)),n.dataTransfer.setData('text/plain',Ai(n.content))),'cut'==n.method&&t.model.deleteContent(o.selection);},{priority:'low'});}}class ph{constructor(e){this.editor=e,this.set('value',void 0),this.set('isEnabled',!1),this.decorate('execute'),this.listenTo(this.editor.model.document,'change',()=>{this.refresh();}),this.on('execute',(e)=>{this.isEnabled||e.stop();},{priority:'high'}),this.listenTo(e,'change:isReadOnly',(e,t,o)=>{o?(this.on('set:isEnabled',Ti,{priority:'highest'}),this.isEnabled=!1):(this.off('set:isEnabled',Ti),this.refresh());});}refresh(){this.isEnabled=!0;}execute(){}destroy(){this.stopListening();}}f(ph,Mc);class gh extends ph{execute(){const e=this.editor.model,t=e.document;e.change((o)=>{Pi(this.editor.model,o,t.selection,e.schema),this.fire('afterExecute',{writer:o});});}}class fh extends wm{constructor(e){super(e);const t=this.document;t.on('keydown',(e,o)=>{if(this.isEnabled&&o.keyCode==nm.enter){let n;t.once('enter',(e)=>n=e,{priority:'highest'}),t.fire('enter',new jm(t,o.domEvent,{isSoft:o.shiftKey})),n&&n.stop.called&&e.stop();}});}observe(){}}class hh extends lh{static get pluginName(){return'Enter'}init(){const e=this.editor,t=e.editing.view,o=t.document;t.addObserver(fh),e.commands.add('enter',new gh(e)),this.listenTo(o,'enter',(o,n)=>{n.isSoft||(e.execute('enter'),n.preventDefault(),t.scrollToTheSelection());},{priority:'low'});}}class bh extends ph{execute(){const e=this.editor.model,t=e.document;e.change((o)=>{Oi(e,o,t.selection),this.fire('afterExecute',{writer:o});});}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=Si(e.schema,t.selection);}}class kh extends lh{static get pluginName(){return'ShiftEnter'}init(){const e=this.editor,t=e.model.schema,o=e.conversion,n=e.editing.view,i=n.document;t.register('softBreak',{allowWhere:'$text'}),o.for('upcast').add(io({model:'softBreak',view:'br'})),o.for('downcast').add(xt({model:'softBreak',view:(e,t)=>t.createEmptyElement('br')})),n.addObserver(fh),e.commands.add('shiftEnter',new bh(e)),this.listenTo(i,'enter',(t,o)=>{o.isSoft&&(e.execute('shiftEnter'),o.preventDefault(),n.scrollToTheSelection());},{priority:'low'});}}class _h{constructor(e,t=20){this.model=e,this.size=0,this.limit=t,this.isLocked=!1,this._changeCallback=(e,t)=>{'transparent'!=t.type&&t!==this._batch&&this._reset(!0);},this._selectionChangeCallback=()=>{this._reset();},this.model.document.on('change',this._changeCallback),this.model.document.selection.on('change:range',this._selectionChangeCallback),this.model.document.selection.on('change:attribute',this._selectionChangeCallback);}get batch(){return this._batch||(this._batch=new rf),this._batch}input(e){this.size+=e,this.size>=this.limit&&this._reset(!0);}lock(){this.isLocked=!0;}unlock(){this.isLocked=!1;}destroy(){this.model.document.off('change',this._changeCallback),this.model.document.selection.off('change:range',this._selectionChangeCallback),this.model.document.selection.off('change:attribute',this._selectionChangeCallback);}_reset(e){(!this.isLocked||e)&&(this._batch=null,this.size=0);}}class wh extends ph{constructor(e,t){super(e),this._buffer=new _h(e.model,t);}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy();}execute(e={}){const t=this.editor.model,o=t.document,n=e.text||'',i=n.length,r=e.range||o.selection.getFirstRange(),a=e.resultRange;t.enqueueChange(this._buffer.batch,(e)=>{const t=r.isCollapsed;this._buffer.lock(),t||e.remove(r),n&&e.insertText(n,o.selection.getAttributes(),r.start),a?e.setSelection(a):t&&e.setSelection(r.start.getShiftedBy(i)),this._buffer.unlock(),this._buffer.input(i);});}}class vh extends lh{static get pluginName(){return'Input'}init(){const e=this.editor,t=e.editing.view,o=new wh(e,e.config.get('typing.undoStep')||20);e.commands.add('input',o),this.listenTo(t.document,'keydown',(e,t)=>{this._handleKeydown(t,o);},{priority:'lowest'}),this.listenTo(t.document,'mutations',(e,t,o)=>{this._handleMutations(t,o);});}_handleKeydown(e,t){const o=this.editor.model,n=o.document,i=t.buffer;!t.isEnabled||Fi(e)||n.selection.isCollapsed||(i.lock(),o.enqueueChange(i.batch,()=>{this.editor.model.deleteContent(n.selection);}),i.unlock());}_handleMutations(e,t){new yh(this.editor).handle(e,t);}}class yh{constructor(e){this.editor=e,this.editing=this.editor.editing;}handle(e,t){if(Bi(e))this._handleContainerChildrenMutations(e,t);else for(const o of e)this._handleTextMutation(o,t),this._handleTextNodeInsertion(o);}_handleContainerChildrenMutations(e,t){const o=Mi(e);if(!o)return;const n=this.editor.editing.view.domConverter,i=n.mapViewToDom(o),r=new hm,a=this.editor.data.toModel(r.domToView(i)).getChild(0),s=this.editor.editing.mapper.toModelElement(o);if(!s)return;const l=Array.from(a.getChildren()),d=Array.from(s.getChildren()),c=l[l.length-1],m=d[d.length-1];if(c&&c.is('softBreak')&&m&&!m.is('softBreak')&&l.pop(),!Li(l)||!Li(d))return;const u=l.map((e)=>e.is('text')?e.data:'@').join('').replace(/\u00A0/g,' '),p=d.map((e)=>e.is('text')?e.data:'@').join('');if(p===u)return;const g=Te(p,u),{firstChangeAt:f,insertions:h,deletions:b}=zi(g);let k=null;t&&(k=this.editing.mapper.toModelRange(t.getFirstRange()));const _=u.substr(f,h),w=pu.createFromParentsAndOffsets(s,f,s,f+b);this.editor.execute('input',{text:_,range:w,resultRange:k});}_handleTextMutation(e,t){if('text'!=e.type)return;const o=e.newText.replace(/\u00A0/g,' '),n=e.oldText.replace(/\u00A0/g,' '),i=Te(n,o),{firstChangeAt:r,insertions:a,deletions:s}=zi(i);let l=null;t&&(l=this.editing.mapper.toModelRange(t.getFirstRange()));const d=new Wc(e.node,r),c=this.editing.mapper.toModelPosition(d),m=pu.createFromPositionAndShift(c,s),u=o.substr(r,a);this.editor.execute('input',{text:u,range:m,resultRange:l});}_handleTextNodeInsertion(e){if('children'==e.type){const t=Di(e),o=new Wc(e.node,t.index),n=this.editing.mapper.toModelPosition(o),i=t.values[0].data;this.editor.execute('input',{text:i.replace(/\u00A0/g,' '),range:new pu(n)});}}}const xh=[te('arrowUp'),te('arrowRight'),te('arrowDown'),te('arrowLeft'),9,16,17,18,20,27,33,34,35,36,229];for(let n=112;135>=n;n++)xh.push(n);class Ch extends ph{constructor(e,t){super(e),this.direction=t,this._buffer=new _h(e.model,e.config.get('typing.undoStep'));}execute(e={}){const t=this.editor.model,o=t.document;t.enqueueChange(this._buffer.batch,(n)=>{this._buffer.lock();const i=new bu(o.selection),r=i.isCollapsed;if(i.isCollapsed&&t.modifySelection(i,{direction:this.direction,unit:e.unit}),this._shouldEntireContentBeReplacedWithParagraph(e.sequence||1))return void this._replaceEntireContentWithParagraph(n);if(i.isCollapsed)return;let a=0;i.getFirstRange().getMinimalFlatRanges().forEach((e)=>{a+=Y(e.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}));}),t.deleteContent(i,{doNotResetEntireContent:r}),this._buffer.input(a),n.setSelection(i),this._buffer.unlock();});}_shouldEntireContentBeReplacedWithParagraph(e){if(1<e)return!1;const t=this.editor.model,o=t.document,n=o.selection,i=t.schema.getLimitElement(n),r=n.isCollapsed&&n.containsEntireContent(i);if(!r)return!1;if(!t.schema.checkChild(i,'paragraph'))return!1;const a=i.getChild(0);return!(a&&'paragraph'===a.name)}_replaceEntireContentWithParagraph(e){const t=this.editor.model,o=t.document,n=o.selection,i=t.schema.getLimitElement(n),r=new du('paragraph');e.remove(pu.createIn(i)),e.insert(r,i),e.setSelection(r,0);}}class Ah extends wm{constructor(e){super(e);const t=e.document;let o=0;t.on('keyup',(e,t)=>{(t.keyCode==nm.delete||t.keyCode==nm.backspace)&&(o=0);}),t.on('keydown',(e,n)=>{const i={};if(n.keyCode==nm.delete)i.direction='forward',i.unit='character';else if(n.keyCode==nm.backspace)i.direction='backward',i.unit='codePoint';else return;const r=em.isMac?n.altKey:n.ctrlKey;i.unit=r?'word':i.unit,i.sequence=++o;let a;t.once('delete',(e)=>a=e,{priority:'highest'}),t.fire('delete',new jm(t,n.domEvent,i)),a&&a.stop.called&&e.stop();});}observe(){}}class Th extends lh{static get pluginName(){return'Delete'}init(){const e=this.editor,t=e.editing.view,o=t.document;t.addObserver(Ah),e.commands.add('forwardDelete',new Ch(e,'forward')),e.commands.add('delete',new Ch(e,'backward')),this.listenTo(o,'delete',(o,n)=>{e.execute('forward'==n.direction?'forwardDelete':'delete',{unit:n.unit,sequence:n.sequence}),n.preventDefault(),t.scrollToTheSelection();});}}class Ph extends lh{static get requires(){return[vh,Th]}static get pluginName(){return'Typing'}}class Eh extends ph{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh();}refresh(){this.isEnabled=0<this._stack.length;}addBatch(e){const t=this.editor.model.document.selection,o={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:o}),this.refresh();}clearStack(){this._stack=[],this.refresh();}_restoreSelection(e,t,o){const n=this.editor.model,i=n.document,r=[];for(const n of e){const e=ji(n,o),t=e.find((e)=>e.start.root!=i.graveyard);t&&r.push(t);}r.length&&n.change((e)=>{e.setSelection(r,{backward:t});});}_undo(e,t){const o=this.editor.model,n=o.document;this._createdBatches.add(t);const i=e.deltas.slice();i.reverse();for(const r of i)if(r.operations.some((e)=>e.isDocumentOperation)){const e=r.baseVersion+r.operations.length,i=Array.from(n.history.getDeltas(e)),a=o.transformDeltas([r.getReversed()],i,!0),s=a.deltasA;for(const e of s){e.baseVersion=n.version,t.addDelta(e);for(const t of e.operations)o.applyOperation(t);n.history.setDeltaAsUndone(r,e);}}}}class Sh extends Eh{execute(e=null){const t=e?this._stack.findIndex((t)=>t.batch==e):this._stack.length-1,o=this._stack.splice(t,1)[0],n=new rf;this.editor.model.enqueueChange(n,()=>{this._undo(o.batch,n);const e=this.editor.model.document.history.getDeltas(o.batch.baseVersion);this._restoreSelection(o.selection.ranges,o.selection.isBackward,e),this.fire('revert',o.batch,n);}),this.refresh();}}class Oh extends Eh{execute(){const e=this._stack.pop(),t=new rf;this.editor.model.enqueueChange(t,()=>{const o=e.batch.deltas[e.batch.deltas.length-1],n=o.baseVersion+o.operations.length,i=this.editor.model.document.history.getDeltas(n);this._restoreSelection(e.selection.ranges,e.selection.isBackward,i),this._undo(e.batch,t);}),this.refresh();}}class Ih extends lh{constructor(e){super(e),this._batchRegistry=new WeakSet;}init(){const e=this.editor;this._undoCommand=new Sh(e),this._redoCommand=new Oh(e),e.commands.add('undo',this._undoCommand),e.commands.add('redo',this._redoCommand),this.listenTo(e.model,'applyOperation',(e,t)=>{const o=t[0];if(o.isDocumentOperation){const e=o.delta.batch;this._batchRegistry.has(e)||'transparent'==e.type||(this._redoCommand._createdBatches.has(e)?this._undoCommand.addBatch(e):!this._undoCommand._createdBatches.has(e)&&(this._undoCommand.addBatch(e),this._redoCommand.clearStack()),this._batchRegistry.add(e));}},{priority:'highest'}),this.listenTo(this._undoCommand,'revert',(e,t,o)=>{this._redoCommand.addBatch(o);}),e.keystrokes.set('CTRL+Z','undo'),e.keystrokes.set('CTRL+Y','redo'),e.keystrokes.set('CTRL+SHIFT+Z','redo');}}var Rh=o(24),Vh=o.n(Rh);class Fh extends Bf{constructor(){super();const e=this.bindTemplate;this.set('content',''),this.set('viewBox','0 0 20 20'),this.set('fillColor',''),this.setTemplate({tag:'svg',ns:'http://www.w3.org/2000/svg',attributes:{class:['ck','ck-icon'],viewBox:e.to('viewBox')}});}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on('change:content',()=>{this._updateXMLContent(),this._colorFillPaths();}),this.on('change:fillColor',()=>{this._colorFillPaths();});}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),'image/svg+xml'),t=e.querySelector('svg'),o=t.getAttribute('viewBox');for(o&&(this.viewBox=o),this.element.innerHTML='';0<t.childNodes.length;)this.element.appendChild(t.childNodes[0]);}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll('.ck-icon__fill').forEach((e)=>{e.style.fill=this.fillColor;});}}var Nh=o(26),Dh=o.n(Nh);class Mh extends Bf{constructor(e){super(e),this.set('text',''),this.set('position','s');const t=this.bindTemplate;this.setTemplate({tag:'span',attributes:{class:['ck','ck-tooltip',t.to('position',(e)=>'ck-tooltip_'+e),t.if('text','ck-hidden',(e)=>!e.trim())]},children:[{tag:'span',attributes:{class:['ck','ck-tooltip__text']},children:[{text:t.to('text')}]}]});}}var Bh=o(28),Lh=o.n(Bh);class zh extends Bf{constructor(e){super(e);const t=this.bindTemplate,o=i();this.set('icon'),this.set('isEnabled',!0),this.set('isOn',!1),this.set('isVisible',!0),this.set('keystroke'),this.set('label'),this.set('tabindex',-1),this.set('tooltip'),this.set('tooltipPosition','s'),this.set('type','button'),this.set('withText',!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(o),this.iconView=new Fh,this.iconView.extendTemplate({attributes:{class:'ck-button__icon'}}),this.bind('_tooltipString').to(this,'tooltip',this,'label',this,'keystroke',this._getTooltipString.bind(this)),this.setTemplate({tag:'button',attributes:{class:['ck','ck-button',t.if('isEnabled','ck-disabled',(e)=>!e),t.if('isVisible','ck-hidden',(e)=>!e),t.to('isOn',(e)=>e?'ck-on':'ck-off'),t.if('withText','ck-button_with-text')],type:t.to('type',(e)=>e?e:'button'),tabindex:t.to('tabindex'),"aria-labelledby":`ck-editor__aria-label_${o}`,"aria-disabled":t.if('isEnabled',!0,(e)=>!e),"aria-pressed":t.if('isOn',!0)},children:this.children,on:{mousedown:t.to((e)=>{e.preventDefault();}),click:t.to((e)=>{this.isEnabled?this.fire('execute'):e.preventDefault();})}});}render(){super.render(),this.icon&&(this.iconView.bind('content').to(this,'icon'),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView);}focus(){this.element.focus();}_createTooltipView(){const e=new Mh;return e.bind('text').to(this,'_tooltipString'),e.bind('position').to(this,'tooltipPosition'),e}_createLabelView(e){const t=new Bf;return t.setTemplate({tag:'span',attributes:{class:['ck','ck-button__label'],id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to('label')}]}),t}_getTooltipString(e,t,o){return e?'string'==typeof e?e:(o&&(o=ne(o)),e instanceof Function?e(t,o):`${t}${o?` (${o})`:''}`):''}}var jh=o(30),qh=o.n(jh),Wh=o(31),Uh=o.n(Wh);class Hh extends lh{init(){const e=this.editor,o=e.t;this._addButton('undo',o('ai'),'CTRL+Z',qh.a),this._addButton('redo',o('aj'),'CTRL+Y',Uh.a);}_addButton(e,t,o,n){const i=this.editor;i.ui.componentFactory.add(e,(r)=>{const a=i.commands.get(e),s=new zh(r);return s.set({label:t,icon:n,keystroke:o,tooltip:!0}),s.bind('isEnabled').to(a,'isEnabled'),this.listenTo(s,'execute',()=>i.execute(e)),s});}}class Kh extends lh{static get requires(){return[Ih,Hh]}static get pluginName(){return'Undo'}}class Gh extends lh{static get requires(){return[uh,hh,kh,Ph,Kh]}static get pluginName(){return'Essentials'}}class $h extends lh{static get pluginName(){return'PendingActions'}init(){this.set('isPending',!1),this._actions=new Gc({idProperty:'_id'}),this._actions.delegate('add','remove').to(this);}add(e){if('string'!=typeof e)throw new _s('pendingactions-add-invalid-message: The message must be a string.');const t=Object.create(Mc);return t.set('message',e),this._actions.add(t),this.isPending=!0,t}remove(e){this._actions.remove(e),this.isPending=!!this._actions.length;}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class Jh{constructor(){const e=new window.FileReader;this._reader=e,this.set('loaded',0),e.onprogress=(e)=>{this.loaded=e.loaded;};}get error(){return this._reader.error}read(e){const t=this._reader;return this.total=e.size,new Promise((o,n)=>{t.onload=()=>{o(t.result);},t.onerror=()=>{n('error');},t.onabort=()=>{n('aborted');},this._reader.readAsDataURL(e);})}abort(){this._reader.abort();}}f(Jh,Mc);class Qh extends lh{static get pluginName(){return'FileRepository'}static get requires(){return[$h]}init(){this.loaders=new Gc,this.loaders.on('add',()=>this._updatePendingAction()),this.loaders.on('remove',()=>this._updatePendingAction()),this._pendingAction=null,this.set('uploaded',0),this.set('uploadTotal',null),this.bind('uploadedPercent').to(this,'uploaded',this,'uploadTotal',(e,t)=>t?100*(e/t):0);}getLoader(e){for(const t of this.loaders)if(t.file==e)return t;return null}createLoader(e){if(!this.createUploadAdapter)return Xm.error('filerepository-no-upload-adapter: Upload adapter is not defined.'),null;const t=new Yh(e);return t._adapter=this.createUploadAdapter(t),this.loaders.add(t),t.on('change:uploaded',()=>{let e=0;for(const t of this.loaders)e+=t.uploaded;this.uploaded=e;}),t.on('change:uploadTotal',()=>{let e=0;for(const t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e;}),t}destroyLoader(e){const t=e instanceof Yh?e:this.getLoader(e);t._destroy(),this.loaders.remove(t);}_updatePendingAction(){const e=this.editor.plugins.get($h);if(!this.loaders.length)e.remove(this._pendingAction),this._pendingAction=null;else if(!this._pendingAction){const o=this.editor.t,t=(e)=>`${o('ae')} ${parseInt(e)}%.`;this._pendingAction=e.add(t(this.uploadedPercent)),this._pendingAction.bind('message').to(this,'uploadedPercent',t);}}}f(Qh,Mc);class Yh{constructor(e,t){this.id=i(),this.file=e,this._adapter=t,this._reader=new Jh,this.set('status','idle'),this.set('uploaded',0),this.set('uploadTotal',null),this.bind('uploadedPercent').to(this,'uploaded',this,'uploadTotal',(e,t)=>t?100*(e/t):0),this.set('uploadResponse',null);}read(){if('idle'!=this.status)throw new _s('filerepository-read-wrong-status: You cannot call read if the status is different than idle.');return this.status='reading',this._reader.read(this.file).then((e)=>(this.status='idle',e)).catch((e)=>{if('aborted'===e)throw this.status='aborted','aborted';throw this.status='error',this._reader.error})}upload(){if('idle'!=this.status)throw new _s('filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.');return this.status='uploading',this._adapter.upload().then((e)=>(this.uploadResponse=e,this.status='idle',e)).catch((e)=>{if('aborted'===this.status)throw'aborted';throw this.status='error',e})}abort(){const e=this.status;this.status='aborted','reading'==e&&this._reader.abort(),'uploading'==e&&this._adapter.abort&&this._adapter.abort(),this._destroy();}_destroy(){this._reader=void 0,this._adapter=void 0,this.data=void 0,this.uploadResponse=void 0,this.file=void 0;}}f(Yh,Mc);const Xh='ckCsrfToken',Zh=40,eb='abcdefghijklmnopqrstuvwxyz0123456789';class tb extends lh{static get requires(){return[Qh]}static get pluginName(){return'CKFinderUploadAdapter'}init(){const e=this.editor.config.get('ckfinder.uploadUrl');e&&(this.editor.plugins.get(Qh).createUploadAdapter=(t)=>new ob(t,e,this.editor.t));}}class ob{constructor(e,o,n){this.loader=e,this.url=o,this.t=n;}upload(){return new Promise((e,t)=>{this._initRequest(),this._initListeners(e,t),this._sendRequest();})}abort(){this.xhr&&this.xhr.abort();}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open('POST',this.url,!0),e.responseType='json';}_initListeners(e,o){const n=this.xhr,i=this.loader,r=this.t,t=r('a')+` ${i.file.name}.`;n.addEventListener('error',()=>o(t)),n.addEventListener('abort',()=>o()),n.addEventListener('load',()=>{const i=n.response;return i&&i.uploaded?void e({default:i.url}):o(i&&i.error&&i.error.message?i.error.message:t)}),n.upload&&n.upload.addEventListener('progress',(e)=>{e.lengthComputable&&(i.uploadTotal=e.total,i.uploaded=e.loaded);});}_sendRequest(){const e=new FormData;e.append('upload',this.loader.file),e.append('ckCsrfToken',Wi()),this.xhr.send(e);}}class nb{constructor(e,t,o){let n;if('function'==typeof o)n=o;else{n=()=>{e.execute(o);};}e.model.document.on('change',(o,i)=>{if('transparent'==i.type)return;const r=Array.from(e.model.document.differ.getChanges()),a=r[0];if(1!=r.length||'insert'!==a.type||'$text'!=a.name||1!=a.length)return;const s=a.position.textNode||a.position.nodeAfter;if(!s.parent.is('paragraph'))return;const l=t.exec(s.data);l&&e.model.enqueueChange((e)=>{const t=pu.createFromParentsAndOffsets(s.parent,0,s.parent,l[0].length);e.remove(t),n({match:l});});});}}class ib{constructor(e,t,o){let n,i,r,a;t instanceof RegExp?n=t:r=t,'string'==typeof o?i=o:a=o,r=r||((e)=>{let t;const o=[],i=[];for(;null!==(t=n.exec(e))&&!(t&&4>t.length);){let{index:e,1:n,2:r,3:a}=t;e+=t[0].length-(n+r+a).length;const s=[e,e+n.length],l=[e+n.length+r.length,e+n.length+r.length+a.length];o.push(s),o.push(l),i.push([e+n.length,e+n.length+r.length]);}return{remove:o,format:i}}),a=a||((e,t)=>{for(const o of t)e.setAttribute(i,!0,o);e.removeSelectionAttribute(i);}),e.model.document.on('change',(t,o)=>{if('transparent'==o.type)return;const n=e.model.document.selection;if(!n.isCollapsed)return;const s=Array.from(e.model.document.differ.getChanges()),l=s[0];if(1!=s.length||'insert'!==l.type||'$text'!=l.name||1!=l.length)return;const d=n.focus.parent,c=Gi(d).slice(0,n.focus.offset),m=r(c),u=$i(d,m.format),p=$i(d,m.remove);u.length&&p.length&&e.model.enqueueChange((t)=>{const o=e.model.schema.getValidRanges(u,i);a(t,o);for(const e of p.reverse())t.remove(e);});});}}class rb extends lh{static get pluginName(){return'Autoformat'}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats();}_addListAutoformats(){const e=this.editor.commands;e.get('bulletedList')&&new nb(this.editor,/^[*-]\s$/,'bulletedList'),e.get('numberedList')&&new nb(this.editor,/^\d+[.|)]\s$/,'numberedList');}_addBasicStylesAutoformats(){const e=this.editor.commands;e.get('bold')&&(new ib(this.editor,/(\*\*)([^*]+)(\*\*)$/g,'bold'),new ib(this.editor,/(__)([^_]+)(__)$/g,'bold')),e.get('italic')&&(new ib(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,'italic'),new ib(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,'italic')),e.get('code')&&new ib(this.editor,/(`)([^`]+)(`)$/g,'code');}_addHeadingAutoformats(){const e=this.editor.commands.get('heading');e&&e.modelElements.filter((e)=>e.match(/^heading[1-6]$/)).forEach((e)=>{const t=e[7],o=new RegExp(`^(#{${t}})\\s$`);new nb(this.editor,o,()=>{this.editor.execute('heading',{value:e});});});}_addBlockQuoteAutoformats(){this.editor.commands.get('blockQuote')&&new nb(this.editor,/^>\s$/,'blockQuote');}}class ab extends ph{constructor(e,t){super(e),this.attributeKey=t;}refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.hasAttribute(this.attributeKey),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey);}execute(e={}){const t=this.editor.model,o=t.document,n=o.selection,i=e.forceValue===void 0?!this.value:e.forceValue;t.change((e)=>{if(n.isCollapsed)i?e.setSelectionAttribute(this.attributeKey,!0):e.removeSelectionAttribute(this.attributeKey);else{const o=t.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const t of o)i?e.setAttribute(this.attributeKey,i,t):e.removeAttribute(this.attributeKey,t);}});}}const sb='bold';class lb extends lh{init(){const e=this.editor;e.model.schema.extend('$text',{allowAttributes:sb}),e.conversion.attributeToElement({model:sb,view:'strong',upcastAlso:['b',{styles:{"font-weight":'bold'}}]}),e.commands.add(sb,new ab(e,sb)),e.keystrokes.set('CTRL+B',sb);}}var db=o(32),cb=o.n(db);const mb='bold';class ub extends lh{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add(mb,(t)=>{const n=e.commands.get(mb),i=new zh(t);return i.set({label:o('d'),icon:cb.a,keystroke:'CTRL+B',tooltip:!0}),i.bind('isOn','isEnabled').to(n,'value','isEnabled'),this.listenTo(i,'execute',()=>e.execute(mb)),i});}}class pb extends lh{static get requires(){return[lb,ub]}static get pluginName(){return'Bold'}}const gb='italic';class fb extends lh{init(){const e=this.editor;e.model.schema.extend('$text',{allowAttributes:gb}),e.conversion.attributeToElement({model:gb,view:'i',upcastAlso:['em',{styles:{"font-style":'italic'}}]}),e.commands.add(gb,new ab(e,gb)),e.keystrokes.set('CTRL+I',gb);}}var hb=o(33),bb=o.n(hb);const kb='italic';class _b extends lh{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add(kb,(t)=>{const n=e.commands.get(kb),i=new zh(t);return i.set({label:o('c'),icon:bb.a,keystroke:'CTRL+I',tooltip:!0}),i.bind('isOn','isEnabled').to(n,'value','isEnabled'),this.listenTo(i,'execute',()=>e.execute(kb)),i});}}class wb extends lh{static get requires(){return[fb,_b]}static get pluginName(){return'Italic'}}class vb extends ph{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled();}execute(){const e=this.editor.model,t=e.document,o=e.schema,n=Array.from(t.selection.getSelectedBlocks());e.change((e)=>{if(this.value)this._removeQuote(e,n.filter(Qi));else{const t=n.filter((e)=>Qi(e)||Xi(o,e));this._applyQuote(e,t);}});}_getValue(){const e=Ji(this.editor.model.document.selection.getSelectedBlocks());return!!(e&&Qi(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,o=Ji(e.getSelectedBlocks());return!!o&&Xi(t,o)}_removeQuote(e,t){Yi(t).reverse().forEach((t)=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){const o=uu.createBefore(t.start.parent);return void e.move(t,o)}t.end.isAtEnd||e.split(t.end);const o=uu.createAfter(t.end.parent);e.move(t,o);});}_applyQuote(e,t){const o=[];Yi(t).reverse().forEach((t)=>{let n=Qi(t.start);n||(n=new du('blockQuote'),e.wrap(t,n)),o.push(n);}),o.reverse().reduce((t,o)=>t.nextSibling==o?(e.merge(uu.createAfter(t)),t):o);}}class yb extends lh{init(){const e=this.editor,t=e.model.schema;e.commands.add('blockQuote',new vb(e)),t.register('blockQuote',{allowWhere:'$block',allowContentOf:'$root'}),t.addChildCheck((e,t)=>{if(e.endsWith('blockQuote')&&'blockQuote'==t.name)return!1}),e.conversion.elementToElement({model:'blockQuote',view:'blockquote'});}afterInit(){const e=this.editor,t=e.commands.get('blockQuote');this.listenTo(this.editor.editing.view.document,'enter',(e,o)=>{const n=this.editor.model.document,i=n.selection.getLastPosition().parent;n.selection.isCollapsed&&i.isEmpty&&t.value&&(this.editor.execute('blockQuote'),this.editor.editing.view.scrollToTheSelection(),o.preventDefault(),e.stop());});}}var xb=o(34),Cb=o.n(xb),Ab=o(35),Tb=o.n(Ab);class Pb extends lh{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add('blockQuote',(t)=>{const n=e.commands.get('blockQuote'),i=new zh(t);return i.set({label:o('b'),icon:Cb.a,tooltip:!0}),i.bind('isOn','isEnabled').to(n,'value','isEnabled'),this.listenTo(i,'execute',()=>e.execute('blockQuote')),i});}}class Eb extends lh{static get requires(){return[yb,Pb]}static get pluginName(){return'BlockQuote'}}const Sb=/^data:(\S*?);base64,/;class Ob{constructor(e,t,o){if(!e)throw new Error('File must be provided');if(!t)throw new Error('Token must be provided');if(!o)throw new Error('Api address must be provided');this.file=er(e)?Zi(e):e,this._token=t,this._apiAddress=o;}onProgress(e){return this.on('progress',(t,o)=>e(o)),this}onError(e){return this.once('error',(t,o)=>e(o)),this}abort(){this.xhr.abort();}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open('POST',this._apiAddress),e.setRequestHeader('Authorization',this._token.value),e.responseType='json',this.xhr=e;}_attachXHRListeners(){function e(e){return()=>t.fire('error',e)}const t=this,o=this.xhr;o.addEventListener('error',e('Network Error')),o.addEventListener('abort',e('Abort')),o.upload&&o.upload.addEventListener('progress',(e)=>{e.lengthComputable&&this.fire('progress',{total:e.total,uploaded:e.loaded});}),o.addEventListener('load',()=>{const e=o.status,t=o.response;if(200>e||299<e)return this.fire('error',t.message||t.error)});}_sendRequest(){const e=new FormData,t=this.xhr;return e.append('file',this.file),new Promise((o,n)=>{t.addEventListener('load',()=>{const e=t.status,i=t.response;return 200>e||299<e?n(i.message||i.error):o(i)}),t.addEventListener('error',()=>n('Network Error')),t.addEventListener('abort',()=>n('Abort')),t.send(e);})}}f(Ob,Ps);const Ib={refreshInterval:36e5,autoRefresh:!0};class Rb{constructor(e,t=Ib){if(!e)throw new Error('`tokenUrl` must be provided');this.set('value',t.initValue),this._tokenUrl=e,this._options=Object.assign({},Ib,t);}init(){return new Promise((e,t)=>(this._options.autoRefresh&&this._startRefreshing(),this.value?void e(this):void this._refreshToken().then(e).catch(t)))}_refreshToken(){return new Promise((e,t)=>{const o=new XMLHttpRequest;o.open('GET',this._tokenUrl),o.addEventListener('load',()=>{const n=o.status,i=o.response;return 200>n||299<n?t('Cannot download new token!'):(this.set('value',i),e(this))}),o.addEventListener('error',()=>t('Network Error')),o.addEventListener('abort',()=>t('Abort')),o.send();})}_startRefreshing(){this._refreshInterval=setInterval(this._refreshToken.bind(this),this._options.refreshInterval);}_stopRefreshing(){clearInterval(this._refreshInterval);}static create(e,t=Ib){const o=new Rb(e,t);return o.init()}}f(Rb,Mc);class Vb extends lh{init(){const e=this.editor,t=e.config,o=t.get('cloudServices')||{};for(const e in o)this[e]=o[e];return this.tokenUrl?(this.token=new Vb.Token(this.tokenUrl),this.token.init()):void(this.token=null)}}Vb.Token=Rb;class Fb extends lh{static get requires(){return[Qh,Vb]}init(){const e=this.editor,t=e.plugins.get(Vb),o=t.token,n=t.uploadUrl;o&&(this._uploadGateway=new Fb._UploadGateway(o,n),e.plugins.get(Qh).createUploadAdapter=(e)=>new Nb(this._uploadGateway,e));}}class Nb{constructor(e,t){this.uploadGateway=e,this.loader=t;}upload(){return this.fileUploader=this.uploadGateway.upload(this.loader.file),this.fileUploader.on('progress',(e,t)=>{this.loader.uploadTotal=t.total,this.loader.uploaded=t.uploaded;}),this.fileUploader.send()}abort(){this.fileUploader.abort();}}Fb._UploadGateway=class{constructor(e,t){if(!e)throw new Error('Token must be provided');if(!t)throw new Error('Api address must be provided');this._token=e,this._apiAddress=t;}upload(e){return new Ob(e,this._token,this._apiAddress)}};class Db{constructor(){this._stack=[];}add(e,t){const o=this._stack,n=o[0];this._insertDescriptor(e);const i=o[0];n===i||ir(n,i)||this.fire('change:top',{oldDescriptor:n,newDescriptor:i,writer:t});}remove(e,t){const o=this._stack,n=o[0];this._removeDescriptor(e);const i=o[0];n===i||ir(n,i)||this.fire('change:top',{oldDescriptor:n,newDescriptor:i,writer:t});}_insertDescriptor(e){const t=this._stack,o=t.findIndex((t)=>t.id===e.id);if(!ir(e,t[o])){-1<o&&t.splice(o,1);let n=0;for(;t[n]&&rr(t[n],e);)n++;t.splice(n,0,e);}}_removeDescriptor(e){const t=this._stack,o=t.findIndex((t)=>t.id===e);-1<o&&t.splice(o,1);}}f(Db,Ps);const Mb=Symbol('isWidget'),Bb=Symbol('label'),Lb='ck-widget',zb='ck-widget_selected',jb=Symbol('isImage');class qb extends lh{init(){const e=this.editor,o=e.model.schema,n=e.t,t=e.conversion;o.register('image',{isObject:!0,isBlock:!0,allowWhere:'$block',allowAttributes:['alt','src','srcset']}),t.for('dataDowncast').add(xt({model:'image',view:(e,t)=>kr(t)})),t.for('editingDowncast').add(xt({model:'image',view:(e,t)=>gr(kr(t),t,n('g'))})),t.for('downcast').add(nr('src')).add(nr('alt')).add(or()),t.for('upcast').add(io({view:{name:'img',attributes:{src:!0}},model:(e,t)=>t.createElement('image',{src:e.getAttribute('src')})})).add(ao({view:{name:'img',key:'alt'},model:'alt'})).add(ao({view:{name:'img',key:'srcset'},model:{key:'srcset',value:(e)=>{const t={data:e.getAttribute('srcset')};return e.hasAttribute('width')&&(t.width=e.getAttribute('width')),t}}})).add(tr());}}class Wb extends qm{constructor(e){super(e),this.domEventType='mousedown';}onDomEvent(e){this.fire(e.type,e);}}var Ub=o(37),Hb=o.n(Ub);const Kb=oe('Ctrl+A');class Gb extends lh{static get pluginName(){return'Widget'}init(){const e=this.editor.editing.view,t=e.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on('selection',(e,t,o)=>{this._clearPreviouslySelectedWidgets(o.writer);const n=o.writer,i=n.document.selection,r=i.getSelectedElement();for(const a of i.getRanges())for(const e of a){const t=e.item;t.is('element')&&sr(t)&&(n.addClass(zb,t),this._previouslySelected.add(t),t==r&&n.setSelection(i.getRanges(),{fake:!0,label:mr(r)}));}},{priority:'low'}),e.addObserver(Wb),this.listenTo(t,'mousedown',(...e)=>this._onMousedown(...e)),this.listenTo(t,'keydown',(...e)=>this._onKeydown(...e),{priority:'high'}),this.listenTo(t,'delete',(e,t)=>{this._handleDelete('forward'==t.direction)&&(t.preventDefault(),e.stop());},{priority:'high'});}_onMousedown(e,t){const o=this.editor,n=o.editing.view,i=n.document;let r=t.target;if(!vr(r)&&(sr(r)||(r=r.findAncestor(sr),!!r))){t.preventDefault(),i.isFocused||n.focus();const e=o.editing.mapper.toModelElement(r);this._setSelectionOverElement(e);}}_onKeydown(e,t){const o=t.keyCode,n=o==nm.delete||o==nm.arrowdown||o==nm.arrowright;let i=!1;_r(o)?i=this._handleArrowKeys(n):wr(t)?i=this._selectAllNestedEditableContent()||this._selectAllContent():o===nm.enter&&(i=this._handleEnterKey(t.shiftKey)),i&&(t.preventDefault(),e.stop());}_handleDelete(e){if(this.editor.isReadOnly)return;const t=this.editor.model.document,o=t.selection;if(!o.isCollapsed)return;const n=this._getObjectElementNextToSelection(e);if(n)return this.editor.model.change((e)=>{for(let t=o.anchor.parent;t.isEmpty;){const o=t;t=o.parent,e.remove(o);}this._setSelectionOverElement(n);}),!0}_handleArrowKeys(e){const t=this.editor.model,o=t.schema,n=t.document,i=n.selection,r=i.getSelectedElement();if(r&&o.isObject(r)){const n=e?i.getLastPosition():i.getFirstPosition(),r=o.getNearestSelectionRange(n,e?'forward':'backward');return r&&t.change((e)=>{e.setSelection(r);}),!0}if(i.isCollapsed){const t=this._getObjectElementNextToSelection(e);if(t instanceof du&&o.isObject(t))return this._setSelectionOverElement(t),!0}}_handleEnterKey(e){const t=this.editor.model,o=t.document.selection,n=o.getSelectedElement();if(n&&t.schema.isObject(n))return t.change((t)=>{const o=t.createElement('paragraph');t.insert(o,n,e?'before':'after'),t.setSelection(o,'in');}),!0}_selectAllNestedEditableContent(){const e=this.editor.model,t=e.document.selection,o=e.schema.getLimitElement(t);return t.getFirstRange().root!=o&&(e.change((e)=>{e.setSelection(pu.createIn(o));}),!0)}_selectAllContent(){const e=this.editor.model,t=this.editor.editing,o=t.view,n=o.document,i=n.selection,r=i.getSelectedElement();if(r&&sr(r)){const o=t.mapper.toModelElement(r.parent);return e.change((e)=>{e.setSelection(pu.createIn(o));}),!0}return!1}_setSelectionOverElement(e){this.editor.model.change((t)=>{t.setSelection(pu.createOn(e));});}_getObjectElementNextToSelection(e){const t=this.editor.model,o=t.schema,n=t.document.selection,i=new bu(n);t.modifySelection(i,{direction:e?'forward':'backward'});const r=e?i.focus.nodeBefore:i.focus.nodeAfter;return r instanceof du&&o.isObject(r)?r:null}_clearPreviouslySelectedWidgets(e){for(const t of this._previouslySelected)e.removeClass(zb,t);this._previouslySelected.clear();}}class $b extends ph{refresh(){const e=this.editor.model.document.selection.getSelectedElement();this.isEnabled=br(e),this.value=!!(br(e)&&e.hasAttribute('alt'))&&e.getAttribute('alt');}execute(e){const t=this.editor.model,o=t.document.selection.getSelectedElement();t.change((t)=>{t.setAttribute('alt',e.newValue,o);});}}class Jb extends lh{init(){this.editor.commands.add('imageTextAlternative',new $b(this.editor));}}class Qb extends Bf{constructor(e,t){super(e);const o=`ck-input-${i()}`;this.set('label'),this.set('value'),this.set('isReadOnly',!1),this.labelView=this._createLabelView(o),this.inputView=this._createInputView(t,o);const n=this.bindTemplate;this.setTemplate({tag:'div',attributes:{class:['ck','ck-labeled-input',n.if('isReadOnly','ck-disabled')]},children:[this.labelView,this.inputView]});}_createLabelView(e){const t=new Uf(this.locale);return t.for=e,t.bind('text').to(this,'label'),t}_createInputView(e,t){const o=new e(this.locale);return o.id=t,o.bind('value').to(this),o.bind('isReadOnly').to(this),o}select(){this.inputView.select();}focus(){this.inputView.focus();}}var Yb=o(39),Xb=o.n(Yb);class Zb extends Bf{constructor(e){super(e),this.set('value'),this.set('id'),this.set('placeholder'),this.set('isReadOnly',!1);const t=this.bindTemplate;this.setTemplate({tag:'input',attributes:{type:'text',class:['ck','ck-input','ck-input-text'],id:t.to('id'),placeholder:t.to('placeholder'),readonly:t.to('isReadOnly')}});}render(){super.render();const e=(e)=>{this.element.value=e||0===e?e:'';};e(this.value),this.on('change:value',(t,o,n)=>{e(n);});}select(){this.element.select();}focus(){this.element.focus();}}var ek=o(3),tk=o.n(ek),ok=o(4),nk=o.n(ok),ik=o(41),rk=o.n(ik);class ak extends Bf{constructor(e){super(e);const o=this.locale.t;this.focusTracker=new Ef,this.keystrokes=new wf,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(o('ab'),tk.a,'ck-button-save'),this.saveButtonView.type='submit',this.cancelButtonView=this._createButton(o('ac'),nk.a,'ck-button-cancel','cancel'),this._focusables=new Of,this._focusCycler=new Xf({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),this.setTemplate({tag:'form',attributes:{class:['ck','ck-text-alternative-form'],tabindex:'-1'},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]});}render(){super.render(),this.keystrokes.listenTo(this.element),xr({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element);});}_createButton(e,t,o,n){const i=new zh(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:o}}),n&&i.delegate('execute').to(this,n),i}_createLabeledInputView(){const e=this.locale.t,t=new Qb(this.locale,Zb);return t.label=e('ah'),t.inputView.placeholder=e('ah'),t}}var sk=o(43),lk=o.n(sk);const dk=bi('px'),ck=gm.document.body;class mk extends Bf{constructor(e){super(e);const t=this.bindTemplate;this.set('top',0),this.set('left',0),this.set('position','arrow_nw'),this.set('isVisible',!1),this.set('withArrow',!0),this.set('className'),this.content=this.createCollection(),this.setTemplate({tag:'div',attributes:{class:['ck','ck-balloon-panel',t.to('position',(e)=>`ck-balloon-panel_${e}`),t.if('isVisible','ck-balloon-panel_visible'),t.if('withArrow','ck-balloon-panel_with-arrow'),t.to('className')],style:{top:t.to('top',dk),left:t.to('left',dk)}},children:this.content});}show(){this.isVisible=!0;}hide(){this.isVisible=!1;}attachTo(e){this.show();const t=mk.defaultPositions,o=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthWest,t.northArrowSouthEast],limiter:ck,fitInViewport:!0},e),{top:n,left:i,name:r}=Ar(o);Object.assign(this,{top:n,left:i,position:r});}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning();},this._startPinning(e),this.listenTo(this,'change:isVisible',this._pinWhenIsVisibleCallback);}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,'change:isVisible',this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide());}_startPinning(e){this.attachTo(e);const t=Sr(e.target),o=e.limiter?Sr(e.limiter):ck;this.listenTo(gm.document,'scroll',(n,i)=>{const r=i.target,a=t&&r.contains(t),s=o&&r.contains(o);(a||s||!t||!o)&&this.attachTo(e);},{useCapture:!0}),this.listenTo(gm.window,'resize',()=>{this.attachTo(e);});}_stopPinning(){this.stopListening(gm.document,'scroll'),this.stopListening(gm.window,'resize');}}mk.arrowHorizontalOffset=25,mk.arrowVerticalOffset=10,mk.defaultPositions={northArrowSouth:(e,t)=>({top:Or(e,t),left:e.left+e.width/2-t.width/2,name:'arrow_s'}),northArrowSouthEast:(e,t)=>({top:Or(e,t),left:e.left+e.width/2-t.width+mk.arrowHorizontalOffset,name:'arrow_se'}),northArrowSouthWest:(e,t)=>({top:Or(e,t),left:e.left+e.width/2-mk.arrowHorizontalOffset,name:'arrow_sw'}),northWestArrowSouth:(e,t)=>({top:Or(e,t),left:e.left-t.width/2,name:'arrow_s'}),northWestArrowSouthWest:(e,t)=>({top:Or(e,t),left:e.left-mk.arrowHorizontalOffset,name:'arrow_sw'}),northWestArrowSouthEast:(e,t)=>({top:Or(e,t),left:e.left-t.width+mk.arrowHorizontalOffset,name:'arrow_se'}),northEastArrowSouth:(e,t)=>({top:Or(e,t),left:e.right-t.width/2,name:'arrow_s'}),northEastArrowSouthEast:(e,t)=>({top:Or(e,t),left:e.right-t.width+mk.arrowHorizontalOffset,name:'arrow_se'}),northEastArrowSouthWest:(e,t)=>({top:Or(e,t),left:e.right-mk.arrowHorizontalOffset,name:'arrow_sw'}),southArrowNorth:(e,t)=>({top:Ir(e,t),left:e.left+e.width/2-t.width/2,name:'arrow_n'}),southArrowNorthEast:(e,t)=>({top:Ir(e,t),left:e.left+e.width/2-t.width+mk.arrowHorizontalOffset,name:'arrow_ne'}),southArrowNorthWest:(e,t)=>({top:Ir(e,t),left:e.left+e.width/2-mk.arrowHorizontalOffset,name:'arrow_nw'}),southWestArrowNorth:(e,t)=>({top:Ir(e,t),left:e.left-t.width/2,name:'arrow_n'}),southWestArrowNorthWest:(e,t)=>({top:Ir(e,t),left:e.left-mk.arrowHorizontalOffset,name:'arrow_nw'}),southWestArrowNorthEast:(e,t)=>({top:Ir(e,t),left:e.left-t.width+mk.arrowHorizontalOffset,name:'arrow_ne'}),southEastArrowNorth:(e,t)=>({top:Ir(e,t),left:e.right-t.width/2,name:'arrow_n'}),southEastArrowNorthEast:(e,t)=>({top:Ir(e,t),left:e.right-t.width+mk.arrowHorizontalOffset,name:'arrow_ne'}),southEastArrowNorthWest:(e,t)=>({top:Ir(e,t),left:e.right-mk.arrowHorizontalOffset,name:'arrow_nw'})};class uk extends lh{static get pluginName(){return'ContextualBalloon'}init(){this.view=new mk,this.positionLimiter=()=>{const e=this.editor.editing.view,t=e.document,o=t.selection.editableElement;return o?e.domConverter.mapViewToDom(o.root):null},this._stack=new Map,this.editor.ui.view.body.add(this.view),this.editor.ui.focusTracker.add(this.view.element);}get visibleView(){const e=this._stack.get(this.view.content.get(0));return e?e.view:null}hasView(e){return this._stack.has(e)}add(e){if(this.hasView(e.view))throw new _s('contextualballoon-add-view-exist: Cannot add configuration of the same view twice.');this.visibleView&&this.view.content.remove(this.visibleView),this._stack.set(e.view,e),this._show(e);}remove(e){if(!this.hasView(e))throw new _s('contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.');if(this.visibleView===e){this.view.content.remove(e),this._stack.delete(e);const t=Array.from(this._stack.values()).pop();t?this._show(t):this.view.hide();}else this._stack.delete(e);}updatePosition(e){e&&(this._stack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition());}_show({view:e,balloonClassName:t=''}){this.view.className=t,this.view.content.add(e),this.view.pin(this._getBalloonPosition());}_getBalloonPosition(){let e=Array.from(this._stack.values()).pop().position;return e&&!e.limiter&&(e=Object.assign({},e,{limiter:this.positionLimiter})),e}}var pk=o(45),gk=o.n(pk);class fk extends lh{static get requires(){return[uk]}init(){this._createButton(),this._createForm();}_createButton(){const e=this.editor,o=e.t;e.ui.componentFactory.add('imageTextAlternative',(t)=>{const n=e.commands.get('imageTextAlternative'),i=new zh(t);return i.set({label:o('w'),icon:gk.a,tooltip:!0}),i.bind('isEnabled').to(n,'isEnabled'),this.listenTo(i,'execute',()=>this._showForm()),i});}_createForm(){const e=this.editor,t=e.editing.view,o=t.document;this._balloon=this.editor.plugins.get('ContextualBalloon'),this._form=new ak(e.locale),this._form.render(),this.listenTo(this._form,'submit',()=>{e.execute('imageTextAlternative',{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0);}),this.listenTo(this._form,'cancel',()=>{this._hideForm(!0);}),this._form.keystrokes.set('Esc',(e,t)=>{this._hideForm(!0),t();}),this.listenTo(t,'render',()=>{hr(o.selection)?this._isVisible&&Rr(e):this._hideForm(!0);}),yr({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._form.element],callback:()=>this._hideForm()});}_showForm(){if(!this._isVisible){const e=this.editor,t=e.commands.get('imageTextAlternative'),o=this._form.labeledInput;this._balloon.hasView(this._form)||this._balloon.add({view:this._form,position:Vr(e)}),o.value=o.inputView.element.value=t.value||'',this._form.labeledInput.select();}}_hideForm(e){this._isVisible&&(this._balloon.remove(this._form),e&&this.editor.editing.view.focus());}get _isVisible(){return this._balloon.visibleView==this._form}}class hk extends lh{static get requires(){return[Jb,fk]}static get pluginName(){return'ImageTextAlternative'}}var bk=o(46),kk=o.n(bk);class _k extends lh{static get requires(){return[qb,Gb,hk]}static get pluginName(){return'Image'}}class wk extends Bf{constructor(e){super(e),this.buttonView=new zh(e),this._fileInputView=new vk(e),this._fileInputView.bind('acceptedType').to(this),this._fileInputView.bind('allowMultipleFiles').to(this),this._fileInputView.delegate('done').to(this),this.setTemplate({tag:'span',attributes:{class:'ck-file-dialog-button'},children:[this.buttonView,this._fileInputView]}),this.buttonView.on('execute',()=>{this._fileInputView.open();});}focus(){this.buttonView.focus();}}class vk extends Bf{constructor(e){super(e),this.set('acceptedType'),this.set('allowMultipleFiles',!1);const t=this.bindTemplate;this.setTemplate({tag:'input',attributes:{class:['ck-hidden'],type:'file',tabindex:'-1',accept:t.to('acceptedType'),multiple:t.to('allowMultipleFiles')},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire('done',this.element.files),this.element.value='';})}});}open(){this.element.click();}}var yk=o(48),xk=o.n(yk);class Ck extends lh{init(){const e=this.editor,o=e.t;e.ui.componentFactory.add('imageUpload',(t)=>{const n=new wk(t),i=e.commands.get('imageUpload');return n.set({acceptedType:'image/*',allowMultipleFiles:!0}),n.buttonView.set({label:o('n'),icon:xk.a,tooltip:!0}),n.buttonView.bind('isEnabled').to(i),n.on('done',(t,o)=>{for(const n of Array.from(o)){const t=Nr(e.model.document.selection);Fr(n)&&e.execute('imageUpload',{file:n,insertAt:t});}}),n});}}var Ak=o(49),Tk=o.n(Ak),Pk=o(50),Ek=o.n(Pk),Sk=o(52),Ok=o.n(Sk);class Ik extends lh{constructor(e){super(e),this.placeholder='data:image/svg+xml;utf8,'+encodeURIComponent(Tk.a);}init(){const e=this.editor;e.editing.downcastDispatcher.on('attribute:uploadStatus:image',(...e)=>this.uploadStatusChange(...e));}uploadStatusChange(e,t,o){const n=this.editor,i=t.item,r=i.getAttribute('uploadId');if(o.consumable.consume(t.item,e.name)){const e=n.plugins.get(Qh),a=r?t.attributeNewValue:null,s=this.placeholder,l=n.editing.mapper.toViewElement(i),d=o.writer;if('reading'==a)return Dr(l,d),void Br(s,l,d);if('uploading'==a){const t=e.loaders.get(r);return Dr(l,d),void(t?(Lr(l,d),zr(l,d,t,n.editing.view)):Br(s,l,d))}'complete'==a&&e.loaders.get(r)&&qr(l,d,n.editing.view),jr(l,d),Lr(l,d),Mr(l,d);}}}const Rk=Symbol('progress-bar');class Vk extends ph{execute(e){const t=this.editor,o=t.model.document,n=e.file,i=t.plugins.get(Qh);t.model.change((r)=>{const a=i.createLoader(n);if(!a)return;const s=r.createElement('image',{uploadId:a.id});let l;l=e.insertAt?new bu([new pu(e.insertAt)]):o.selection,t.model.insertContent(s,l),s.parent&&r.setSelection(s,'on');});}}class Fk extends lh{static get pluginName(){return'Notification'}init(){this.on('show:warning',(e,t)=>{window.alert(t.message);},{priority:'lowest'});}showSuccess(e,t={}){this._showNotification({message:e,type:'success',namespace:t.namespace,title:t.title});}showInfo(e,t={}){this._showNotification({message:e,type:'info',namespace:t.namespace,title:t.title});}showWarning(e,t={}){this._showNotification({message:e,type:'warning',namespace:t.namespace,title:t.title});}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:'');this.fire(t,{message:e.message,type:e.type,title:e.title||''});}}class Nk extends lh{static get requires(){return[Qh,Fk]}init(){const e=this.editor,t=e.model.document,o=e.model.schema,n=e.plugins.get(Qh);o.extend('image',{allowAttributes:['uploadId','uploadStatus']}),e.commands.add('imageUpload',new Vk(e)),this.listenTo(e.editing.view.document,'clipboardInput',(o,i)=>{if(Hr(i.dataTransfer))return;let r=new bu(i.targetRanges.map((t)=>e.editing.mapper.toModelRange(t)));for(const a of i.dataTransfer.files){if(Fr(a)){const t=Nr(r);e.model.change((o)=>{const i=n.createLoader(a);if(i){const n=o.createElement('image',{uploadId:i.id}),r=new bu([new pu(t)]);e.model.insertContent(n,r),n.parent&&o.setSelection(n,'on');}}),o.stop();}r=t.selection;}}),e.editing.view.document.on('dragover',(e,t)=>{t.preventDefault();}),t.on('change',()=>{const e=t.differ.getChanges({includeChangesInGraveyard:!0});for(const t of e)if('insert'==t.type&&'image'==t.name){const e=t.position.nodeAfter,o='$graveyard'==t.position.root.rootName,i=e.getAttribute('uploadId');if(!i)continue;const r=n.loaders.get(i);if(!r)continue;o?r.abort():'idle'==r.status&&this._load(r,e);}});}_load(e,o){function n(){r.enqueueChange('transparent',(e)=>{e.removeAttribute('uploadId',o),e.removeAttribute('uploadStatus',o);}),t.destroyLoader(e);}const i=this.editor,r=i.model,a=i.locale.t,t=i.plugins.get(Qh),s=i.plugins.get(Fk);return r.enqueueChange('transparent',(e)=>{e.setAttribute('uploadStatus','reading',o);}),e.read().then((t)=>{const n=i.editing.mapper.toViewElement(o),a=n.getChild(0),s=e.upload();return i.editing.view.change((e)=>{e.setAttribute('src',t,a);}),r.enqueueChange('transparent',(e)=>{e.setAttribute('uploadStatus','uploading',o);}),s}).then((e)=>{r.enqueueChange('transparent',(t)=>{t.setAttributes({uploadStatus:'complete',src:e.default},o);let n=0;const i=Object.keys(e).filter((e)=>{const t=parseInt(e,10);if(!isNaN(t))return n=is(n,t),!0}).map((t)=>`${e[t]} ${t}w`).join(', ');''!=i&&t.setAttribute('srcset',{data:i,width:n},o);}),n();}).catch((t)=>{if('error'!==e.status&&'aborted'!==e.status)throw t;'error'==e.status&&s.showWarning(t,{title:a('o'),namespace:'upload'}),n(),r.enqueueChange('transparent',(e)=>{e.remove(o);});})}}class Dk extends lh{static get pluginName(){return'ImageUpload'}static get requires(){return[Nk,Ck,Ik]}}class Mk extends lh{static get requires(){return[Fb,_k,Dk]}static get pluginName(){return'EasyImage'}}class Bk extends ph{refresh(){const e=this.editor.model,t=e.document,o=Ji(t.selection.getSelectedBlocks());this.value=!!o&&o.is('paragraph'),this.isEnabled=!!o&&Kr(o,e.schema);}execute(e={}){const t=this.editor.model,o=t.document;t.change((n)=>{const i=(e.selection||o.selection).getSelectedBlocks();for(const e of i)!e.is('paragraph')&&Kr(e,t.schema)&&n.rename(e,'paragraph');});}}class Lk extends lh{static get pluginName(){return'Paragraph'}init(){const e=this.editor,t=e.model,o=e.data;e.commands.add('paragraph',new Bk(e)),t.schema.register('paragraph',{inheritAllFrom:'$block'}),e.conversion.elementToElement({model:'paragraph',view:'p'}),o.upcastDispatcher.on('element',(e,t,o)=>{if(o.consumable.test(t.viewItem,{name:t.viewItem.name}))if(Lk.paragraphLikeElements.has(t.viewItem.name)){if(t.viewItem.isEmpty)return;const e=o.writer.createElement('paragraph'),n=o.splitToAllowedParent(e,t.modelCursor);if(!n)return;o.writer.insert(e,n.position);const{modelRange:i}=o.convertChildren(t.viewItem,uu.createAt(e));t.modelRange=new pu(uu.createBefore(e),i.end),t.modelCursor=t.modelRange.end;}else $r(t.viewItem,t.modelCursor,o.schema)&&(t=Object.assign(t,Gr(t.viewItem,t.modelCursor,o)));},{priority:'low'}),o.upcastDispatcher.on('text',(e,t,o)=>{t.modelRange||$r(t.viewItem,t.modelCursor,o.schema)&&(t=Object.assign(t,Gr(t.viewItem,t.modelCursor,o)));},{priority:'lowest'}),t.document.registerPostFixer((e)=>this._autoparagraphEmptyRoots(e)),e.on('dataReady',()=>{t.enqueueChange('transparent',(e)=>this._autoparagraphEmptyRoots(e));},{priority:'lowest'});}_autoparagraphEmptyRoots(e){const t=this.editor.model;for(const o of t.document.getRootNames()){const n=t.document.getRoot(o);if(n.isEmpty&&'$graveyard'!=n.rootName&&t.schema.checkChild(n,'paragraph'))return e.insertElement('paragraph',n),!0}}}Lk.paragraphLikeElements=new Set(['blockquote','dd','div','dt','h1','h2','h3','h4','h5','h6','li','p','td']);class zk extends ph{constructor(e,t){super(e),this.modelElements=t;}refresh(){const e=Ji(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some((t)=>Jr(e,t,this.editor.model.schema));}execute(e){const t=this.editor.model,o=t.document,n=e.value;t.change((e)=>{const i=Array.from(o.selection.getSelectedBlocks()).filter((e)=>Jr(e,n,t.schema));for(const t of i)t.is(n)||e.rename(t,n);});}}const jk='paragraph';class qk extends lh{constructor(e){super(e),e.config.define('heading',{options:[{model:'paragraph',title:'Paragraph',class:'ck-heading_paragraph'},{model:'heading1',view:'h2',title:'Heading 1',class:'ck-heading_heading1'},{model:'heading2',view:'h3',title:'Heading 2',class:'ck-heading_heading2'},{model:'heading3',view:'h4',title:'Heading 3',class:'ck-heading_heading3'}]});}static get requires(){return[Lk]}init(){const e=this.editor,t=e.config.get('heading.options'),o=[];for(const n of t)n.model!==jk&&(e.model.schema.register(n.model,{inheritAllFrom:'$block'}),e.conversion.elementToElement(n),o.push(n.model));e.commands.add('heading',new zk(e,o));}afterInit(){const e=this.editor,t=e.commands.get('enter'),o=e.config.get('heading.options');t&&this.listenTo(t,'afterExecute',(t,n)=>{const i=e.model.document.selection.getFirstPosition().parent,r=o.some((e)=>i.is(e.model));r&&!i.is(jk)&&0===i.childCount&&n.writer.rename(i,jk);});}}class Wk{constructor(e,t){t&&Rc(this,t),e&&this.set(e);}}f(Wk,Mc);class Uk extends Bf{constructor(e){super(e);const t=this.bindTemplate;this.set('isVisible',!1),this.children=this.createCollection(),this.setTemplate({tag:'div',attributes:{class:['ck','ck-reset','ck-dropdown__panel',t.if('isVisible','ck-dropdown__panel-visible')]},children:this.children,on:{selectstart:t.to((e)=>e.preventDefault())}});}focus(){this.children.length&&this.children.first.focus();}focusLast(){if(this.children.length){const e=this.children.last;'function'==typeof e.focusLast?e.focusLast():e.focus();}}}var Hk=o(54),Kk=o.n(Hk);class Gk extends Bf{constructor(e,t,o){super(e);const n=this.bindTemplate;this.buttonView=t,this.panelView=o,this.set('isOpen',!1),this.set('isEnabled',!0),this.focusTracker=new Ef,this.keystrokes=new wf,this.setTemplate({tag:'div',attributes:{class:['ck','ck-dropdown',n.if('isEnabled','ck-disabled',(e)=>!e)]},children:[t,o]}),t.extendTemplate({attributes:{class:['ck-dropdown__button']}});}render(){super.render(),this.listenTo(this.buttonView,'open',()=>{this.isOpen=!this.isOpen;}),this.panelView.bind('isVisible').to(this,'isOpen'),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const e=(e,t)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,t());};this.keystrokes.set('arrowdown',(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t());}),this.keystrokes.set('arrowright',(e,t)=>{this.isOpen&&t();}),this.keystrokes.set('arrowleft',e),this.keystrokes.set('esc',e);}focus(){this.buttonView.focus();}}var $k=o(56),Jk=o.n($k);class Qk extends zh{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate('execute').to(this,'open');}render(){super.render(),this.children.add(this.arrowView);}_createArrowView(){const e=new Fh;return e.content=Jk.a,e.extendTemplate({attributes:{class:'ck-dropdown__arrow'}}),e}}var Yk=o(57),Xk=o.n(Yk);class Zk extends Bf{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Ef,this.keystrokes=new wf,this._focusCycler=new Xf({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'arrowup',focusNext:'arrowdown'}}),this.setTemplate({tag:'ul',attributes:{class:['ck','ck-reset','ck-list']},children:this.items});}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on('add',(e,t)=>{this.focusTracker.add(t.element);}),this.items.on('remove',(e,t)=>{this.focusTracker.remove(t.element);}),this.keystrokes.listenTo(this.element);}focus(){this._focusCycler.focusFirst();}focusLast(){this._focusCycler.focusLast();}}class e_ extends Bf{constructor(){super(),this.set('tabindex',-1),this.keystrokes=new wf;const e=this.bindTemplate;this.setTemplate({tag:'li',attributes:{class:['ck','ck-list__item',e.to('class'),e.if('isActive','ck-list__item_active'),e.if('isEnabled','ck-disabled',(e)=>!e)],style:e.to('style'),tabindex:e.to('tabindex')},children:[{text:e.to('label')}],on:{click:e.to((e)=>{this.isEnabled?this.fire('execute'):e.preventDefault();})}}),this.set('isEnabled',!0);}render(){super.render();const e=(e,t)=>{this.fire('execute'),t();};this.keystrokes.listenTo(this.element),this.keystrokes.set('Enter',e),this.keystrokes.set('Space',e);}focus(){this.element.focus();}}class t_ extends Bf{constructor(e){super(e),this.setTemplate({tag:'li',attributes:{class:['ck','ck-list__separator']}});}}var o_=o(59),n_=o.n(o_),i_=o(61),r_=o.n(i_),a_=o(5),s_=o.n(a_);class l_ extends lh{init(){const e=this.editor,o=e.t,t=oa(e),n=o('e'),i=o('f');e.ui.componentFactory.add('heading',(o)=>{const r={},a=new Gc,s=e.commands.get('heading'),l=e.commands.get('paragraph'),d=[s];for(const e of t){const t=new Wk({label:e.title,class:e.class});'paragraph'===e.model?(t.bind('isActive').to(l,'value'),t.set('commandName','paragraph'),d.push(l)):(t.bind('isActive').to(s,'value',(t)=>t===e.model),t.set({commandName:'heading',commandValue:e.model})),a.add(t),r[e.model]=e.title;}const c=Qr(o);return Yr(c,a),c.buttonView.set({isOn:!1,withText:!0,tooltip:i}),c.extendTemplate({attributes:{class:['ck-heading-dropdown']}}),c.bind('isEnabled').toMany(d,'isEnabled',(...e)=>e.some((e)=>e)),c.buttonView.bind('label').to(s,'value',l,'value',(e,t)=>{const o=e||t&&'paragraph';return r[o]?r[o]:n}),this.listenTo(c,'execute',(t)=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus();}),c});}}class d_ extends lh{static get requires(){return[qk,l_]}static get pluginName(){return'Heading'}}var c_=o(64),m_=o.n(c_);const u_=new WeakMap,p_=Symbol('imageCaption');class g_ extends lh{init(){const e=this.editor,o=e.editing.view,n=e.model.schema,i=e.data,r=e.editing,a=e.t;n.register('caption',{allowIn:'image',allowContentOf:'$block',isLimit:!0}),e.model.document.registerPostFixer((e)=>this._insertMissingModelCaptionElement(e)),e.conversion.for('upcast').add(io({view:la,model:'caption'}));i.downcastDispatcher.on('insert:caption',da((e)=>e.createContainerElement('figcaption'),!1));const t=aa(o,a('h'));r.downcastDispatcher.on('insert:caption',da(t)),r.downcastDispatcher.on('insert',this._fixCaptionVisibility((e)=>e.item),{priority:'high'}),r.downcastDispatcher.on('remove',this._fixCaptionVisibility((e)=>e.position.parent),{priority:'high'}),o.document.registerPostFixer((e)=>this._updateCaptionVisibility(e));}_updateCaptionVisibility(e){const t=this.editor.editing.mapper,o=this._lastSelectedCaption;let n;const i=this.editor.model.document.selection,r=i.getSelectedElement();if(r&&r.is('image')){const e=sa(r);n=t.toViewElement(e);}const a=i.getFirstPosition(),s=ma(a.parent);if(s&&(n=t.toViewElement(s)),n)return o?o===n?pa(n,e):(ua(o,e),this._lastSelectedCaption=n,pa(n,e)):(this._lastSelectedCaption=n,pa(n,e));if(o){const t=ua(o,e);return this._lastSelectedCaption=null,t}return!1}_fixCaptionVisibility(e){return(t,o,n)=>{const i=e(o),r=ma(i),a=this.editor.editing.mapper,s=n.writer;if(r){const e=a.toViewElement(r);e&&(r.childCount?s.removeClass('ck-hidden',e):s.addClass('ck-hidden',e));}}}_insertMissingModelCaptionElement(e){const t=this.editor.model,o=t.document.differ.getChanges();for(const t of o)if('insert'==t.type&&'image'==t.name){const o=t.position.nodeAfter;if(!sa(o))return e.appendElement('caption',o),!0}}}var f_=o(66),h_=o.n(f_);class b_ extends lh{static get requires(){return[g_]}static get pluginName(){return'ImageCaption'}}class k_ extends ph{constructor(e,t){super(e),this._defaultStyle=!1,this.styles=t.reduce((e,t)=>(e[t.name]=t,t.isDefault&&(this._defaultStyle=t.name),e),{});}refresh(){const e=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=br(e),!e)this.value=!1;else if(e.hasAttribute('imageStyle')){const t=e.getAttribute('imageStyle');this.value=!!this.styles[t]&&t;}else this.value=this._defaultStyle;}execute(e){const t=e.value,o=this.editor.model,n=o.document.selection.getSelectedElement();o.change((e)=>{this.styles[t].isDefault?e.removeAttribute('imageStyle',n):e.setAttribute('imageStyle',t,n);});}}var __=o(68),w_=o.n(__),v_=o(69),y_=o.n(v_),x_=o(70),C_=o.n(x_),A_=o(71),T_=o.n(A_);const P_={full:{name:'full',title:'Full size image',icon:w_.a,isDefault:!0},side:{name:'side',title:'Side image',icon:T_.a,className:'image-style-side'},alignLeft:{name:'alignLeft',title:'Left aligned image',icon:y_.a,className:'image-style-align-left'},alignCenter:{name:'alignCenter',title:'Centered image',icon:C_.a,className:'image-style-align-center'},alignRight:{name:'alignRight',title:'Right aligned image',icon:T_.a,className:'image-style-align-right'}},E_={full:w_.a,left:y_.a,right:T_.a,center:C_.a};class S_ extends lh{static get requires(){return[qb]}static get pluginName(){return'ImageStyleEditing'}init(){const e=this.editor,t=e.model.schema,o=e.data,n=e.editing;e.config.define('image.styles',['full','side']);const i=ba(e.config.get('image.styles'));t.extend('image',{allowAttributes:'imageStyle'});const r=ga(i);n.downcastDispatcher.on('attribute:imageStyle:image',r),o.downcastDispatcher.on('attribute:imageStyle:image',r),o.upcastDispatcher.on('element:figure',fa(i),{priority:'low'}),e.commands.add('imageStyle',new k_(e,i));}}var O_=o(72),I_=o.n(O_);class R_ extends lh{get localizedDefaultStylesTitles(){const e=this.editor.t;return{"Full size image":e('i'),"Side image":e('j'),"Left aligned image":e('k'),"Centered image":e('l'),"Right aligned image":e('m')}}init(){const e=this.editor,t=e.config.get('image.styles'),o=_a(ba(t),this.localizedDefaultStylesTitles);for(const e of o)this._createButton(e);}_createButton(e){const t=this.editor,o=`imageStyle:${e.name}`;t.ui.componentFactory.add(o,(o)=>{const n=t.commands.get('imageStyle'),i=new zh(o);return i.set({label:e.title,icon:e.icon,tooltip:!0}),i.bind('isEnabled').to(n,'isEnabled'),i.bind('isOn').to(n,'value',(t)=>t===e.name),this.listenTo(i,'execute',()=>t.execute('imageStyle',{value:e.name})),i});}}class V_ extends lh{static get requires(){return[S_,R_]}static get pluginName(){return'ImageStyle'}}class F_ extends lh{static get requires(){return[uk]}static get pluginName(){return'ImageToolbar'}init(){const e=this.editor,t=e.plugins.get('BalloonToolbar');t&&this.listenTo(t,'show',(t)=>{hr(e.editing.view.document.selection)&&t.stop();},{priority:'high'});}afterInit(){const e=this.editor,t=e.config.get('image.toolbar');t&&t.length&&(this._balloon=this.editor.plugins.get('ContextualBalloon'),this._toolbar=new oh,this._toolbar.fillFromConfig(t,e.ui.componentFactory),this.listenTo(e.editing.view,'render',()=>{this._checkIsVisible();}),this.listenTo(e.ui.focusTracker,'change:isFocused',()=>{this._checkIsVisible();},{priority:'low'}));}_checkIsVisible(){const e=this.editor;e.ui.focusTracker.isFocused?hr(e.editing.view.document.selection)?this._showToolbar():this._hideToolbar():this._hideToolbar();}_showToolbar(){const e=this.editor;this._isVisible?Rr(e):!this._balloon.hasView(this._toolbar)&&this._balloon.add({view:this._toolbar,position:Vr(e),balloonClassName:'ck-toolbar-container'});}_hideToolbar(){this._isVisible&&this._balloon.remove(this._toolbar);}get _isVisible(){return this._balloon.visibleView==this._toolbar}}class N_ extends ph{refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.getAttribute('linkHref'),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,'linkHref');}execute(e){const t=this.editor.model,o=t.document.selection;t.change((n)=>{if(o.isCollapsed){const t=o.getFirstPosition();if(o.hasAttribute('linkHref')){const t=wa(o.getFirstPosition(),o.getAttribute('linkHref'));n.setAttribute('linkHref',e,t),n.setSelection(t);}else if(''!==e){const i=ut(o.getAttributes());i.set('linkHref',e);const r=n.createText(e,i);n.insert(r,t),n.setSelection(pu.createOn(r));}}else{const i=t.schema.getValidRanges(o.getRanges(),'linkHref');for(const t of i)n.setAttribute('linkHref',e,t);}});}}class D_ extends ph{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute('linkHref');}execute(){const e=this.editor.model,t=e.document.selection;e.change((e)=>{const o=t.isCollapsed?[wa(t.getFirstPosition(),t.getAttribute('linkHref'))]:t.getRanges();for(const t of o)e.removeAttribute('linkHref',t);});}}const M_=Symbol('linkElement'),B_=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,L_=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;class z_{constructor(e,t,o){this.model=e,this.attribute=o,this._modelSelection=e.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,t.listenTo(this._modelSelection,'change:range',(e,t)=>this._isNextGravityRestorationSkipped?void(this._isNextGravityRestorationSkipped=!1):void(!this._isGravityOverridden||!t.directChange&&Pa(this._modelSelection.getFirstPosition(),o)||this._restoreGravity()));}handleForwardMovement(e,t){const o=this.attribute;return this._isGravityOverridden||e.isAtStart&&this._hasSelectionAttribute?void 0:Oa(e,o)&&this._hasSelectionAttribute?(this._preventCaretMovement(t),this._removeSelectionAttribute(),!0):Ea(e,o)?(this._preventCaretMovement(t),this._overrideGravity(),!0):Sa(e,o)&&this._hasSelectionAttribute?(this._preventCaretMovement(t),this._overrideGravity(),!0):void 0}handleBackwardMovement(e,t){const o=this.attribute;if(this._isGravityOverridden)return Oa(e,o)&&this._hasSelectionAttribute?(this._preventCaretMovement(t),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(t),this._restoreGravity(),e.isAtStart&&this._removeSelectionAttribute(),!0);return Oa(e,o)&&!this._hasSelectionAttribute?(this._preventCaretMovement(t),this._setSelectionAttributeFromTheNodeBefore(e),!0):e.isAtEnd&&Sa(e,o)?this._hasSelectionAttribute?void(Ia(e,o)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(t),this._setSelectionAttributeFromTheNodeBefore(e),!0):e.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(t),!0):void 0:void(Ia(e,o)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change((e)=>e.overrideSelectionGravity());}_restoreGravity(){this.model.change((e)=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null;});}_preventCaretMovement(e){e.preventDefault();}_removeSelectionAttribute(){this.model.change((e)=>{e.removeSelectionAttribute(this.attribute);});}_setSelectionAttributeFromTheNodeBefore(e){const t=this.attribute;this.model.change((o)=>{o.setSelectionAttribute(this.attribute,e.nodeBefore.getAttribute(t));});}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0;}}var j_=o(74),q_=o.n(j_);const W_='ck-link_selected';class U_ extends lh{init(){const e=this.editor;e.model.schema.extend('$text',{allowAttributes:'linkHref'}),e.conversion.for('dataDowncast').add(Ct({model:'linkHref',view:xa})),e.conversion.for('editingDowncast').add(Ct({model:'linkHref',view:(e,t)=>xa(Ca(e),t)})),e.conversion.for('upcast').add(ro({view:{name:'a',attributes:{href:!0}},model:{key:'linkHref',value:(e)=>e.getAttribute('href')}})),e.commands.add('link',new N_(e)),e.commands.add('unlink',new D_(e)),Ta(e.editing.view,e.model,this,'linkHref'),this._setupLinkHighlight();}_setupLinkHighlight(){const e=this.editor,t=e.editing.view,o=new Set;t.document.registerPostFixer((t)=>{const n=e.model.document.selection;if(n.hasAttribute('linkHref')){const i=wa(n.getFirstPosition(),n.getAttribute('linkHref')),r=e.editing.mapper.toViewRange(i);for(const e of r.getItems())e.is('a')&&(t.addClass(W_,e),o.add(e));}}),e.conversion.for('editingDowncast').add((e)=>{function n(){t.change((e)=>{for(const t of o.values())e.removeClass(W_,t),o.delete(t);});}e.on('insert',n,{priority:'highest'}),e.on('remove',n,{priority:'highest'}),e.on('attribute',n,{priority:'highest'}),e.on('selection',n,{priority:'highest'});});}}class H_ extends qm{constructor(e){super(e),this.domEventType='click';}onDomEvent(e){this.fire(e.type,e);}}var K_=o(76),G_=o.n(K_);class $_ extends Bf{constructor(e){super(e);const o=e.t;this.focusTracker=new Ef,this.keystrokes=new wf,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(o('ab'),tk.a,'ck-button-save'),this.saveButtonView.type='submit',this.cancelButtonView=this._createButton(o('ac'),nk.a,'ck-button-cancel','cancel'),this._focusables=new Of,this._focusCycler=new Xf({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),this.setTemplate({tag:'form',attributes:{class:['ck','ck-link-form'],tabindex:'-1'},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]});}render(){super.render(),xr({view:this});const e=[this.urlInputView,this.saveButtonView,this.cancelButtonView];e.forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element);}),this.keystrokes.listenTo(this.element);}focus(){this._focusCycler.focusFirst();}_createUrlInput(){const e=this.locale.t,t=new Qb(this.locale,Zb);return t.label=e('ad'),t.inputView.placeholder='https://example.com',t}_createButton(e,t,o,n){const i=new zh(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:o}}),n&&i.delegate('execute').to(this,n),i}}var J_=o(78),Q_=o.n(J_),Y_=o(79),X_=o.n(Y_),Z_=o(80),ew=o.n(Z_);class tw extends Bf{constructor(e){super(e);const o=e.t;this.focusTracker=new Ef,this.keystrokes=new wf,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(o('x'),Q_.a,'unlink'),this.editButtonView=this._createButton(o('y'),X_.a,'edit'),this.set('href'),this._focusables=new Of,this._focusCycler=new Xf({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:'shift + tab',focusNext:'tab'}}),this.setTemplate({tag:'div',attributes:{class:['ck','ck-link-actions'],tabindex:'-1'},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]});}render(){super.render();const e=[this.previewButtonView,this.editButtonView,this.unlinkButtonView];e.forEach((e)=>{this._focusables.add(e),this.focusTracker.add(e.element);}),this.keystrokes.listenTo(this.element);}focus(){this._focusCycler.focusFirst();}_createButton(e,t,o){const n=new zh(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n.delegate('execute').to(this,o),n}_createPreviewButton(){const e=new zh(this.locale),o=this.bindTemplate,n=this.t;return e.set({withText:!0,tooltip:n('z')}),e.extendTemplate({attributes:{class:['ck','ck-link-actions__preview'],href:o.to('href',(e)=>e&&Ca(e)),target:'_blank'}}),e.bind('label').to(this,'href',(e)=>e||n('aa')),e.bind('isEnabled').to(this,'href',(e)=>!!e),e.template.tag='a',e.template.eventListeners={},e}}var ow=o(82),nw=o.n(ow);const iw='Ctrl+K';class rw extends lh{static get requires(){return[uk]}init(){const e=this.editor;e.editing.view.addObserver(H_),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=e.plugins.get(uk),this._createToolbarLinkButton(),this._enableUserBalloonInteractions();}_createActionsView(){const e=this.editor,t=new tw(e.locale),o=e.commands.get('link'),n=e.commands.get('unlink');return t.bind('href').to(o,'value'),t.editButtonView.bind('isEnabled').to(o),t.unlinkButtonView.bind('isEnabled').to(n),this.listenTo(t,'edit',()=>{this._addFormView();}),this.listenTo(t,'unlink',()=>{e.execute('unlink'),this._hideUI();}),t.keystrokes.set('Esc',(e,t)=>{this._hideUI(),t();}),t.keystrokes.set(iw,(e,t)=>{this._addFormView(),t();}),t}_createFormView(){const e=this.editor,t=new $_(e.locale),o=e.commands.get('link');return t.urlInputView.bind('value').to(o,'value'),t.urlInputView.bind('isReadOnly').to(o,'isEnabled',(e)=>!e),t.saveButtonView.bind('isEnabled').to(o),this.listenTo(t,'submit',()=>{e.execute('link',t.urlInputView.inputView.element.value),this._removeFormView();}),this.listenTo(t,'cancel',()=>{this._removeFormView();}),t.keystrokes.set('Esc',(e,t)=>{this._removeFormView(),t();}),t}_createToolbarLinkButton(){const e=this.editor,o=e.commands.get('link'),n=e.t;e.keystrokes.set(iw,(e,t)=>{t(),o.isEnabled&&this._showUI();}),e.ui.componentFactory.add('link',(e)=>{const t=new zh(e);return t.isEnabled=!0,t.label=n('p'),t.icon=nw.a,t.keystroke=iw,t.tooltip=!0,t.bind('isEnabled').to(o,'isEnabled'),this.listenTo(t,'execute',()=>this._showUI()),t});}_enableUserBalloonInteractions(){const e=this.editor.editing.view.document;this.listenTo(e,'click',()=>{const e=this._getSelectedLinkElement();e&&this._showUI();}),this.editor.keystrokes.set('Tab',(e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t());},{priority:'high'}),this.editor.keystrokes.set('Esc',(e,t)=>{this._isUIVisible&&(this._hideUI(),t());}),yr({emitter:this.formView,activator:()=>this._isUIVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()});}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()});}_addFormView(){if(!this._isFormInPanel){const e=this.editor,t=e.commands.get('link');this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||'';}}_removeFormView(){this._isFormInPanel&&(this._balloon.remove(this.formView),this.editor.editing.view.focus());}_showUI(){const e=this.editor,t=e.commands.get('link');t.isEnabled&&(this._getSelectedLinkElement()?this._areActionsVisible?this._addFormView():this._addActionsView():(this._addActionsView(),this._addFormView()),this._startUpdatingUIOnViewRender());}_hideUI(){if(this._isUIInPanel){const e=this.editor.editing.view;this.stopListening(e,'render'),this._removeFormView(),this._balloon.remove(this.actionsView),e.focus();}}_startUpdatingUIOnViewRender(){function e(){return n.document.selection.focus.getAncestors().reverse().find((e)=>e.is('element'))}const t=this.editor,o=t.editing,n=o.view;let i=this._getSelectedLinkElement(),r=e();this.listenTo(n,'render',()=>{const t=this._getSelectedLinkElement(),o=e();(!i||t)&&(i||o===r)?this._balloon.updatePosition(this._getBalloonPositionData()):this._hideUI(),i=t,r=o;});}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){const e=this._balloon.visibleView;return e==this.formView||this._areActionsVisible}_getBalloonPositionData(){const e=this.editor.editing.view,t=e.document,o=this._getSelectedLinkElement(),n=o?e.domConverter.mapViewToDom(o):e.domConverter.viewRangeToDom(t.selection.getFirstRange());return{target:n}}_getSelectedLinkElement(){const e=this.editor.editing.view.document.selection;if(e.isCollapsed)return Ra(e.getFirstPosition());else{const t=e.getFirstRange().getTrimmed(),o=Ra(t.start),n=Ra(t.end);return o&&o==n?Uc.createIn(o).getTrimmed().isEqual(t)?o:null:null}}}class aw extends lh{static get requires(){return[U_,rw]}static get pluginName(){return'Link'}}class sw extends ph{constructor(e,t){super(e),this.type='bulleted'==t?'bulleted':'numbered';}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled();}execute(){const e=this.editor.model,t=e.document,o=Array.from(t.selection.getSelectedBlocks()).filter((t)=>Fa(t,e.schema)),n=!0===this.value;e.change((e)=>{if(n){let t=o[o.length-1].nextSibling,n=ns,i=[];for(;t&&'listItem'==t.name&&0!==t.getAttribute('listIndent');){const e=t.getAttribute('listIndent');e<n&&(n=e);const o=e-n;i.push({element:t,listIndent:o}),t=t.nextSibling;}i=i.reverse();for(const t of i)e.setAttribute('listIndent',t.listIndent,t.element);}if(!n){let e=ns;for(const t of o)t.is('listItem')&&t.getAttribute('listIndent')<e&&(e=t.getAttribute('listIndent'));e=0===e?1:e,Va(o,!0,e),Va(o,!1,e);}for(const t of o.reverse())n&&'listItem'==t.name?e.rename(t,'paragraph'):n||'listItem'==t.name?n||'listItem'!=t.name||t.getAttribute('listType')==this.type||e.setAttribute('listType',this.type,t):(e.setAttributes({listType:this.type,listIndent:0},t),e.rename(t,'listItem'));});}_getValue(){const e=Ji(this.editor.model.document.selection.getSelectedBlocks());return!!e&&e.is('listItem')&&e.getAttribute('listType')==this.type}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,o=Ji(e.getSelectedBlocks());return!!o&&Fa(o,t)}}class lw extends ph{constructor(e,t){super(e),this._indentBy='forward'==t?1:-1;}refresh(){this.isEnabled=this._checkEnabled();}execute(){const e=this.editor.model,t=e.document;let o=Array.from(t.selection.getSelectedBlocks());e.change((e)=>{const t=o[o.length-1];for(let n=t.nextSibling;n&&'listItem'==n.name&&n.getAttribute('listIndent')>t.getAttribute('listIndent');)o.push(n),n=n.nextSibling;0>this._indentBy&&(o=o.reverse());for(const t of o){const o=t.getAttribute('listIndent')+this._indentBy;0>o?e.rename(t,'paragraph'):e.setAttribute('listIndent',o,t);}});}_checkEnabled(){const e=Ji(this.editor.model.document.selection.getSelectedBlocks());if(!e||!e.is('listItem'))return!1;if(0<this._indentBy){const t=e.getAttribute('listIndent'),o=e.getAttribute('listType');for(let n=e.previousSibling;n&&n.is('listItem')&&n.getAttribute('listIndent')>=t;){if(n.getAttribute('listIndent')==t)return n.getAttribute('listType')==o;n=n.previousSibling;}return!1}return!0}}class dw extends lh{static get requires(){return[Lk]}init(){const e=this.editor;e.model.schema.register('listItem',{inheritAllFrom:'$block',allowAttributes:['listType','listIndent']});const t=e.data,o=e.editing;e.model.document.registerPostFixer((t)=>$a(e.model,t)),o.mapper.registerViewToModelLength('li',os),t.mapper.registerViewToModelLength('li',os),o.mapper.on('modelToViewPosition',Ka),o.mapper.on('viewToModelPosition',Ga),t.mapper.on('modelToViewPosition',Ka),o.downcastDispatcher.on('insert',ja,{priority:'high'}),o.downcastDispatcher.on('insert:listItem',Ma),t.downcastDispatcher.on('insert',ja,{priority:'high'}),t.downcastDispatcher.on('insert:listItem',Ma),o.downcastDispatcher.on('attribute:listType:listItem',La),t.downcastDispatcher.on('attribute:listType:listItem',La),o.downcastDispatcher.on('attribute:listIndent:listItem',za),t.downcastDispatcher.on('attribute:listIndent:listItem',za),o.downcastDispatcher.on('remove:listItem',Ba),o.downcastDispatcher.on('remove',qa,{priority:'low'}),t.downcastDispatcher.on('remove:listItem',Ba),t.downcastDispatcher.on('remove',qa,{priority:'low'}),t.upcastDispatcher.on('element:ul',Ua,{priority:'high'}),t.upcastDispatcher.on('element:ol',Ua,{priority:'high'}),t.upcastDispatcher.on('element:li',Ha,{priority:'high'}),t.upcastDispatcher.on('element:li',Wa),e.model.on('insertContent',Ja,{priority:'high'}),e.commands.add('numberedList',new sw(e,'numbered')),e.commands.add('bulletedList',new sw(e,'bulleted')),e.commands.add('indentList',new lw(e,'forward')),e.commands.add('outdentList',new lw(e,'backward'));const n=this.editor.editing.view.document;this.listenTo(n,'enter',(e,t)=>{const o=this.editor.model.document,n=o.selection.getLastPosition().parent;o.selection.isCollapsed&&'listItem'==n.name&&n.isEmpty&&(this.editor.execute('outdentList'),t.preventDefault(),e.stop());}),this.listenTo(n,'delete',(e,t)=>{if('backward'===t.direction){const o=this.editor.model.document.selection;if(o.isCollapsed){const n=o.getFirstPosition();if(n.isAtStart){const o=n.parent;if('listItem'===o.name){const n=o.previousSibling&&'listItem'===o.previousSibling.name;n||(this.editor.execute('outdentList'),t.preventDefault(),e.stop());}}}}},{priority:'high'});const i=(e)=>(t,o)=>{const n=this.editor.commands.get(e);n.isEnabled&&(this.editor.execute(e),o());};this.editor.keystrokes.set('Tab',i('indentList')),this.editor.keystrokes.set('Shift+Tab',i('outdentList'));}}var cw=o(83),mw=o.n(cw),uw=o(84),pw=o.n(uw);class gw extends lh{init(){const e=this.editor.t;this._addButton('numberedList',e('q'),mw.a),this._addButton('bulletedList',e('r'),pw.a);}_addButton(e,t,o){const n=this.editor;n.ui.componentFactory.add(e,(i)=>{const r=n.commands.get(e),a=new zh(i);return a.set({label:t,icon:o,tooltip:!0}),a.bind('isOn','isEnabled').to(r,'value','isEnabled'),this.listenTo(a,'execute',()=>n.execute(e)),a});}}class fw extends lh{static get requires(){return[dw,gw]}static get pluginName(){return'List'}}class hw extends sh{}t['default']=hw,hw.build={plugins:[Gh,tb,rb,pb,wb,Eb,Mk,d_,_k,b_,V_,F_,Dk,aw,fw,Lk],config:{toolbar:{items:['heading','|','bold','italic','link','bulletedList','numberedList','imageUpload','blockQuote','undo','redo']},image:{toolbar:['imageStyle:full','imageStyle:side','|','imageTextAlternative']},language:'en'}};},function(e){var t=function(){return this}();try{t=t||Function('return this')()||(0, eval)('this');}catch(o){'object'==typeof window&&(t=window);}e.exports=t;},function(e,t){t.a=function(e){return e&&e.Object===Object?e:null};},function(e,t,o){(function(e){var n=o(10),i=o(1),r={function:!0,object:!0},a=r['object']&&exports&&!exports.nodeType?exports:void 0,s=r[typeof e]&&e&&!e.nodeType?e:void 0,l=s&&s.exports===a?a:void 0,d=l?i.a.Buffer:void 0,c=d?function(e){return e instanceof d}:Object(n.a)(!1);t.a=c;}).call(t,o(2)(e));},function(e,t){t.a=function(e){return function(){return e}};},function(e,t,o){var n=o(12);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:999;--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:#77baf8;--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-focus-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-focus-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-focus-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-item-background-hover:var(--ck-color-base-foreground);--ck-color-list-item-background-active:var(--ck-color-base-active);--ck-color-list-item-background-active-focus:var(--ck-color-base-active-focus);--ck-color-list-item-text-active:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#c2c2c2;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:#ebf8ff;--ck-disabled-opacity:.5;--ck-focus-outer-shadow:0 0 3px var(--ck-color-focus-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}';},function(e){e.exports=function(e){var t='undefined'!=typeof window&&window.location;if(!t)throw new Error('fixUrls requires window.location');if(!e||'string'!=typeof e)return e;var o=t.protocol+'//'+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,'/'),i=e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return e;var r;return r=0===i.indexOf('//')?i:0===i.indexOf('/')?o+i:n+i.replace(/^\.\//,''),'url('+JSON.stringify(r)+')'});return i};},function(e,t,o){var n=o(15);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}';},function(e,t,o){var n=o(17);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}';},function(e,t,o){var n=o(19);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}';},function(e,t,o){var n=o(21);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}';},function(e,t,o){var n=o(23);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}';},function(e,t,o){var n=o(25);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon *{fill:currentColor}';},function(e,t,o){var n=o(27);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:transparent transparent var(--ck-color-tooltip-background);border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}';},function(e,t,o){var n=o(29);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):focus,.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):focus,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-focus-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):focus,.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):focus,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-focus-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):focus,.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):focus,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-focus-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z" fill="#000" fill-rule="nonzero"/></svg>';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z" fill="#000" fill-rule="nonzero"/></svg>';},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" fill="#000" fill-rule="evenodd"/></svg>\n';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" fill="#333" fill-rule="evenodd"/></svg>';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563zM11 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563z"/></g></svg>\n';},function(e,t,o){var n=o(36);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}';},function(e,t,o){var n=o(38);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports=':root{--ck-widget-outline-thickness:3px;--ck-color-widget-border-blurred:#dedede;--ck-color-widget-border-hover:#ffd15c;--ck-color-widget-editable-focused-background:var(--ck-color-base-background),}.ck .ck-widget{margin:var(--ck-spacing-standard) 0;padding:0}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck-editor__editable.ck-blurred .ck .ck-widget.ck-widget_selected{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-widget-border-blurred)}.ck .ck-widget:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-widget-border-hover)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focused-background)}';},function(e,t,o){var n=o(40);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports=':root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}';},function(e,t,o){var n=o(42);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}';},function(e,t,o){var n=o(44);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012.9.093 1.676.675 2.017 1.513.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z" fill="#000" fill-rule="evenodd"/></svg>';},function(e,t,o){var n=o(47);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck-content .image{clear:both;text-align:center}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}';},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" fill="#000" fill-rule="nonzero"/></svg>\n';},function(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="none" fill-rule="evenodd"><rect width="700" height="250" fill="#FAFAFA" rx="4"/><text fill="#5F6F77" font-family="Arial,sans-serif" font-size="24"><tspan x="247.9" y="135">Uploading image\u2026</tspan></text></g></svg>\n';},function(e,t,o){var n=o(51);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck-content .image{position:relative;overflow:hidden}.ck-content .image.ck-infinite-progress:before{content:"";position:absolute;top:0;right:0}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:fadeIn .7s}.ck-content .image.ck-infinite-progress:before{width:var(--ck-image-upload-progress-line-width);height:2px;background:var(--ck-color-upload-infinite-background);animation-name:readingProgressAnimation;animation-duration:1.5s;animation-iteration-count:infinite;transition-timing-function:linear}.ck-content .image.ck-image-upload-placeholder>img{width:100%}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes readingProgressAnimation{0%{width:var(--ck-image-upload-progress-line-width);right:0}50%{width:calc(var(--ck-image-upload-progress-line-width) * 1.5)}to{right:100%}}';},function(e,t,o){var n=o(53);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:1.25em;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;height:0;width:0}33%{width:.25em;height:0}to{width:.25em;height:.416em;opacity:1}}';},function(e,t,o){var n=o(55);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default);position:absolute;top:50%;transform:translate3d(0,-50%,0)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute;left:0;transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}:root{--ck-dropdown-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button{padding-right:calc(2.5 * var(--ck-spacing-standard))}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{border-radius:0;box-shadow:var(--ck-drop-shadow),0 0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}';},function(e){e.exports='<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" fill="#000" fill-rule="evenodd"/></svg>';},function(e,t,o){var n=o(58);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{padding:var(--ck-spacing-medium);cursor:default;min-width:12em}.ck.ck-list__item:focus,.ck.ck-list__item:hover{background:var(--ck-color-list-item-background-hover)}.ck.ck-list__item:focus{box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-list__item.ck-disabled{opacity:var(--ck-disabled-opacity)}.ck.ck-list__item_active{background:var(--ck-color-list-item-background-active);color:var(--ck-color-list-item-text-active)}.ck.ck-list__item_active:focus,.ck.ck-list__item_active:hover{background:var(--ck-color-list-item-background-active-focus)}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}';},function(e,t,o){var n=o(60);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}';},function(e,t,o){var n=o(62);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list>.ck-list__item{line-height:calc(.8*var(--ck-line-height-base)*var(--ck-font-size-base));padding:calc(.4*var(--ck-line-height-base)*var(--ck-font-size-base))}';},function(e){e.exports='.ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}';},function(e,t,o){var n=o(65);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}';},function(e,t,o){var n=o(67);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}';},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM4.5 7.5V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06C3.475 13.5 3 13.093 3 12.59V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></g></svg>\n';},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z" fill-rule="nonzero"/></svg>';},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM6.5 7.5V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></g></svg>\n';},function(e){e.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM2 7.5V6h5.674v1.5zM2 10.5V9h5.674v1.5zM2 13.5V12h5.674v1.5zM10.5 7.5V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></g></svg>\n';},function(e,t,o){var n=o(73);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports=':root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}';},function(e,t,o){var n=o(75);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck .ck-link_selected{background:var(--ck-color-link-selected-background)}';},function(e,t,o){var n=o(77);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-link-form .ck-labeled-input{display:inline-block}.ck.ck-link-form .ck-label{display:none}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zM16.927 17.695l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></g></svg>';},function(e){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z" fill="#000" fill-rule="nonzero"/></svg>\n';},function(e,t,o){var n=o(81);'string'==typeof n&&(n=[[e.i,n,'']]);var i={singleton:!0,hmr:!0},r;i.transform=r,i.insertInto=void 0;o(0)(n,i);n.locals&&(e.exports=n.locals),!1;},function(e){e.exports='.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions>:not(:first-child){margin-left:var(--ck-spacing-standard)}';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" fill="#000" fill-rule="evenodd"/></svg>';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" fill="#454545" fill-rule="evenodd"/></svg>';},function(e){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" fill="#454545" fill-rule="evenodd"/></svg>';}])['default']});

});

unwrapExports(ckeditor);
var ckeditor_1 = ckeditor.ClassicEditor;

var dist = createCommonjsModule(function (module) {
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var ClassicEditor=_interopDefault(ckeditor),React__default$$1=_interopDefault(React__default);function createCommonjsModule$$1(e,t){return e(t={exports:{}},t.exports),t.exports}!function(e){e.ru=Object.assign(e.ru||{},{a:"Невозможно загрузить файл",b:"Цитата",c:"Курсив",d:"Жирный",e:"Выбрать заголовок",f:"Заголовок",g:"Виджет изображений",h:"Подпись к изображению",i:"Оригинальный размер изображения",j:"Боковое изображение",k:"Выравнивание по левому краю",l:"Выравнивание по центру",m:"Выравнивание по правому краю",n:"Вставить изображение",o:"Загрузка не выполнена",p:"Ссылка",q:"Нумерованный список",r:"Маркированный список",s:"Параграф",t:"Заголовок 1",u:"Заголовок 2",v:"Заголовок 3",w:"Редактировать альтернативный текст",x:"Убрать ссылку",y:"Редактировать ссылку",z:"Открыть ссылку в новой вкладке",aa:"Для этой ссылки не установлен адрес URL",ab:"Сохранить",ac:"Отмена",ad:"Ссылка URL",ae:"Upload in progress",af:"Редактор, %0",ag:"Редактор",ah:"Альтернативный текст",ai:"Отменить",aj:"Повторить"});}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret;function emptyFunction(){}var factoryWithThrowingShims=function(){function e(e,t,r,o,n,a){if(a!==ReactPropTypesSecret_1){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=emptyFunction,r.PropTypes=r},propTypes=createCommonjsModule$$1(function(e){e.exports=factoryWithThrowingShims();});function styleInject(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e));}}var css=".ck-editor__editable {\n\tmin-height: 300px;\n}\n\n.modal-backdrop {\n\tz-index: 998;\n}\n\n.ck-rounded-corners.ck.ck-balloon-panel {\n\tz-index: 9999;\n}\n\n.ck li {\n\tlist-style-type: inherit;\n}";styleInject(css);var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},CKEditor=function(e){function r(e){classCallCheck(this,r);var t=possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={},t}return inherits(r,e),createClass(r,null,[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.answer;return r!==t.answer?{answer:r}:null}}]),createClass(r,[{key:"componentDidMount",value:function(){var r=this;ClassicEditor.create(r.refs.editor,{toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"],language:"ru"}).then(function(t){(r.editor=t).setData(r.props.initialValue),t.model.document.on("change",function(e){r.props.onChange(t.getData());});}).catch(function(e){console.error(e);});}},{key:"shouldComponentUpdate",value:function(e,t){var r=e.empty;return!(e.value===this.props.value&&r===this.props.empty)}},{key:"componentDidUpdate",value:function(e){var t=e.commentId,r=e.value,o=e.date;this.props.empty&&this.editor.setData(""),t!==this.props.commentId&&r!==this.props.value&&this.editor.setData(this.props.value),o!==this.props.date&&this.editor.setData(this.props.value);}},{key:"render",value:function(){return React__default$$1.createElement("div",{className:"form-group"},React__default$$1.createElement("textarea",{ref:"editor",className:"form-control",name:"content",id:"editor",rows:10}))}}]),r}(React__default.Component);CKEditor.propTypes={date:propTypes.string,empty:propTypes.bool,commentId:propTypes.number,form:propTypes.object,onChange:propTypes.func,value:propTypes.oneOfType([propTypes.number,propTypes.string,propTypes.object]),initialValue:propTypes.oneOfType([propTypes.number,propTypes.string,propTypes.object])},CKEditor.defaultProps={value:null},module.exports=CKEditor;
});

var reactLoading = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(typeof self !== 'undefined' ? self : commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

module.exports = warning;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

module.exports = emptyObject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
}

module.exports = checkPropTypes;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svg = __webpack_require__(14);

var svgSources = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      delayed: _this.props.delay > 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loading, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;
      var delayed = this.state.delayed;


      if (delayed) {
        this.timeout = setTimeout(function () {
          _this2.setState({
            delayed: false
          });
        }, delay);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var timeout = this.timeout;


      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          type = _props.type,
          height = _props.height,
          width = _props.width,
          restProps = _objectWithoutProperties(_props, ['color', 'type', 'height', 'width']);

      var selectedType = this.state.delayed ? 'blank' : type;
      var svg = svgSources[selectedType];
      var style = {
        fill: color,
        height: height,
        width: width
      };

      return _react2.default.createElement('div', _extends({
        style: style,
        dangerouslySetInnerHTML: { __html: svg }
      }, restProps));
    }
  }]);

  return Loading;
}(_react.Component);

Loading.propTypes = {
  color: _propTypes2.default.string,
  delay: _propTypes2.default.number,
  type: _propTypes2.default.string,
  height: _propTypes2.default.number,
  width: _propTypes2.default.number
};
Loading.defaultProps = {
  color: '#fff',
  delay: 1000,
  type: 'balls',
  height: 64,
  width: 64
};
exports.default = Loading;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


{
  module.exports = __webpack_require__(9);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {
/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(2),n=__webpack_require__(0),p=__webpack_require__(5),q=__webpack_require__(1),r="function"===typeof Symbol&&Symbol["for"],t=r?Symbol["for"]("react.element"):60103,u=r?Symbol["for"]("react.portal"):60106,v=r?Symbol["for"]("react.fragment"):60107,w=r?Symbol["for"]("react.strict_mode"):60108,x=r?Symbol["for"]("react.provider"):60109,y=r?Symbol["for"]("react.context"):60110,z=r?Symbol["for"]("react.async_mode"):60111,A=r?Symbol["for"]("react.forward_ref"):
60112,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b=arguments.length-1,e="http://reactjs.org/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e);}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};
function E(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D;}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:I.current}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g,O=[];function P(a,b,e,c){if(O.length){var d=O.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function Q(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>O.length&&O.push(a);}
function R(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0;}}if(g)return e(c,a,""===b?"."+S(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+S(d,h);g+=R(d,f,e,c);}else if(null===a||"undefined"===typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+S(d,h++),g+=R(d,f,e,c);else"object"===d&&(e=""+a,C("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++);}
function U(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,e,q.thatReturnsArgument):null!=a&&(M(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a));}function V(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(N,"$\x26/")+"/");b=P(b,g,c,d);null==a||R(a,"",U,b);Q(b);}
var W={Children:{map:function(a,b,e){if(null==a)return a;var c=[];V(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=P(null,null,b,e);null==a||R(a,"",T,b);Q(b);},count:function(a){return null==a?0:R(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];V(a,b,null,q.thatReturnsArgument);return b},only:function(a){M(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:y,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:x,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:A,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:z,createElement:L,cloneElement:function(a,b,e){null===a||void 0===a?C("267",a):void 0;var c=void 0,d=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&
(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c]);}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k;}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:M,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:m}},X=Object.freeze({default:W}),
Y=X&&W||X;module.exports=Y["default"]?Y["default"]:Y;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(13)();
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(0);
var warning = __webpack_require__(3);
var assign = __webpack_require__(2);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(6);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(0);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blank = __webpack_require__(15);

Object.defineProperty(exports, 'blank', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blank).default;
  }
});

var _loadingBalls = __webpack_require__(16);

Object.defineProperty(exports, 'balls', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingBalls).default;
  }
});

var _loadingBars = __webpack_require__(17);

Object.defineProperty(exports, 'bars', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingBars).default;
  }
});

var _loadingBubbles = __webpack_require__(18);

Object.defineProperty(exports, 'bubbles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingBubbles).default;
  }
});

var _loadingCubes = __webpack_require__(19);

Object.defineProperty(exports, 'cubes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingCubes).default;
  }
});

var _loadingCylon = __webpack_require__(20);

Object.defineProperty(exports, 'cylon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingCylon).default;
  }
});

var _loadingSpin = __webpack_require__(21);

Object.defineProperty(exports, 'spin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpin).default;
  }
});

var _loadingSpinningBubbles = __webpack_require__(22);

Object.defineProperty(exports, 'spinningBubbles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpinningBubbles).default;
  }
});

var _loadingSpokes = __webpack_require__(23);

Object.defineProperty(exports, 'spokes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpokes).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon-blank\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"></svg>\n";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon-loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(-8 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"-8 0; 2 0; 2 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.25;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(2 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"2 0; 12 0; 12 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.35;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(12 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"12 0; 22 0; 22 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.45;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(24 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"22 0; 32 0; 32 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.55;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n</svg>\n";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(2)\" d=\"M0 12 V20 H4 V12z\"> \n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(8)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(14)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path transform=\"translate(20)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.6\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path transform=\"translate(26)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.8\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n</svg>\n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <circle transform=\"translate(8 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"translate(16 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.3\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"translate(24 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.6\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n</svg>\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(-8 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"-8 0; 2 0; 2 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.25;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(2 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"2 0; 12 0; 12 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.35;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(12 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"12 0; 22 0; 22 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.45;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(24 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"22 0; 32 0; 32 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.55;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n</svg>\n";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path opacity=\"0.5\" transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0.1s\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path opacity=\"0.25\" transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0.2s\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n</svg>\n";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path opacity=\".25\" d=\"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4\"/>\n  <path d=\"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z\">\n    <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 16 16\" to=\"360 16 16\" dur=\"0.8s\" repeatCount=\"indefinite\" />\n  </path>\n</svg>\n";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <circle cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(45 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(90 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(135 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(225 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.625s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(270 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(315 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n</svg>\n";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<svg id=\"loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(0 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(45 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(90 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(135 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(180 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(225 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.675s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(270 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(315 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\"/>\n  </path>\n</svg>\n";

/***/ })
/******/ ]);
});

});

unwrapExports(reactLoading);

var dist$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$$1 = _interopDefault(React__default);
var Loading = _interopDefault(reactLoading);

function createCommonjsModule$$1(fn, module) {
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

var propTypes = createCommonjsModule$$1(function (module) {
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

var css = ".loader-text {\n\tcolor: #888;\n\tpadding-left: 5px;\n}\n\n.loader-wrapper {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(255, 255, 255, 0.7);\n\tz-index: 9999;\n}\n\n.centerViewer {\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 45%;\n\tdisplay: inline-block;\n}\n\n.loader-wrapper.fixed {\n\tposition: fixed;\n}\n\n.loader-wrapper.fixed .centerViewer {\n\tposition: fixed\n}\n\n.loader-wrapper.full-screen-loader {\n\tbackground: rgba(255, 255, 255, 0.4);\n}\n\n.inline-small-loader {\n\tdisplay: inline-block;\n}\n";
styleInject(css);

function Loader(props) {
	var text = props.text,
	    type = props.type,
	    size = props.size;

	var viewSize = size ? size : 64;
	var usingType = type ? type : 'bubbles';
	var loader = React$$1.createElement(
		'div',
		{ className: 'loading' },
		React$$1.createElement(
			'span',
			{ className: 'loader-text' },
			text ? text : 'Загрузка...'
		),
		React$$1.createElement(Loading, { type: usingType, color: '#888888', width: viewSize, height: viewSize })
	);

	return React$$1.createElement(
		'div',
		null,
		loader
	);
}

Loader.propTypes = {
	text: propTypes.string,
	type: propTypes.string,
	size: propTypes.number
};

function FullScreenLoader() {
	return React$$1.createElement(
		'div',
		{ className: 'loader-wrapper full-screen-loader' },
		React$$1.createElement(
			'div',
			{ className: 'centerViewer' },
			React$$1.createElement(Loader, null)
		)
	);
}

function InlineSmallLoader(props) {
	var size = props.size,
	    color = props.color,
	    style = props.style;


	return React$$1.createElement(
		'div',
		{ className: 'inline-small-loader', style: style },
		React$$1.createElement(Loading, { type: 'bubbles', color: color, width: size, height: size })
	);
}

InlineSmallLoader.propTypes = {
	size: propTypes.number,
	color: propTypes.string,
	style: propTypes.object
};

InlineSmallLoader.defaultProps = {
	size: 32,
	color: '#888888',
	style: {}
};

function InlineAbsolutePositionLoader(props) {
	var top = props.top,
	    right = props.right,
	    bottom = props.bottom,
	    left = props.left;

	return React$$1.createElement(
		'div',
		{
			style: {
				position: 'absolute',
				top: '' + top,
				right: '' + right,
				bottom: '' + bottom,
				left: '' + left
			}
		},
		React$$1.createElement(InlineSmallLoader, null)
	);
}

InlineAbsolutePositionLoader.propTypes = {
	top: propTypes.string,
	right: propTypes.string,
	bottom: propTypes.string,
	left: propTypes.string
};

exports.Loader = Loader;
exports.FullScreenLoader = FullScreenLoader;
exports.InlineAbsolutePositionLoader = InlineAbsolutePositionLoader;
exports.InlineSmallLoader = InlineSmallLoader;
});

unwrapExports(dist$1);
var dist_1 = dist$1.Loader;
var dist_2 = dist$1.FullScreenLoader;
var dist_3 = dist$1.InlineAbsolutePositionLoader;
var dist_4 = dist$1.InlineSmallLoader;

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

var empty = '<p>&nbsp;</p>';

var MessagesForm = function (_Component) {
	inherits(MessagesForm, _Component);

	function MessagesForm(props) {
		classCallCheck(this, MessagesForm);

		var _this = possibleConstructorReturn(this, (MessagesForm.__proto__ || Object.getPrototypeOf(MessagesForm)).call(this, props));

		_this.handleChange = function (ev) {
			_this.props.onChangeForm(ev);
			_this.setState({ errorMsg: '', reset: false });
		};

		_this.sendComment = function (ev) {
			ev.preventDefault();
			var value = _this.props.value;

			if (value && value !== empty) {
				_this.props.onSubmitForm(value);
				_this.setState({ reset: true });
			} else {
				_this.setState({ errorMsg: 'Вы пытаетесь отправить пустой комментарий' });
			}
		};

		_this.handleRevision = function (ev) {
			ev.preventDefault();
			var _this$props = _this.props,
			    taskId = _this$props.taskId,
			    value = _this$props.value;

			if (value && value !== empty) {
				_this.props.rejectTask(taskId, value);
				_this.setState({ reset: true });
			} else {
				_this.setState({ errorMsg: 'Необходимо указать причину доработки' });
			}
		};

		_this.state = {
			reset: false,
			errorMsg: ''
		};
		return _this;
	}

	createClass(MessagesForm, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			jquery('#msgsarea').keydown(function (e) {
				if (e.ctrlKey && e.keyCode === 13) {
					self.handleSubmit();
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    commentId = _props.commentId,
			    error = _props.error,
			    value = _props.value,
			    date = _props.date,
			    status = _props.status,
			    labelText = _props.labelText,
			    isLoading = _props.isLoading,
			    buttonText = _props.buttonText,
			    preFormHtml = _props.preFormHtml;
			var errorMsg = this.state.errorMsg;

			return React__default.createElement(
				'form',
				null,
				preFormHtml,
				React__default.createElement(
					'div',
					{ className: 'form-group ' + (error ? 'has-error' : '') },
					labelText ? React__default.createElement(
						'label',
						null,
						labelText
					) : '',
					React__default.createElement(
						'div',
						{ className: 'form-group ' + (errorMsg && 'has-error') },
						React__default.createElement(dist, {
							onChange: this.handleChange,
							initialValue: '',
							value: value,
							date: date,
							empty: this.state.reset,
							commentId: commentId
						}),
						errorMsg && React__default.createElement(
							'span',
							{ className: 'help-block' },
							errorMsg
						)
					),
					error ? React__default.createElement(
						'div',
						{ className: 'help-block' },
						error
					) : ''
				),
				React__default.createElement(
					'button',
					{
						className: 'btn btn-primary btn-flat',
						title: 'Ctrl + Enter',
						disabled: isLoading,
						onClick: this.sendComment
					},
					buttonText
				),
				status && React__default.createElement(
					'button',
					{
						className: 'btn btn-danger btn-flat',
						style: { marginLeft: '5px' },
						title: 'Ctrl + Enter',
						disabled: isLoading,
						onClick: this.handleRevision
					},
					'\u041D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443'
				),
				React__default.createElement(
					'span',
					{ className: 'btn-fight-loading' },
					isLoading ? React__default.createElement(dist_4, null) : ''
				)
			);
		}
	}]);
	return MessagesForm;
}(React.Component);


MessagesForm.propTypes = {
	buttonText: propTypes.string,
	onChangeForm: propTypes.func.isRequired,
	onSubmitForm: propTypes.func.isRequired,
	inputRows: propTypes.number,
	taskId: propTypes.number,
	labelText: propTypes.string,
	isLoading: propTypes.bool,
	error: propTypes.string,
	commentId: propTypes.number,
	value: propTypes.string,
	date: propTypes.object,
	status: propTypes.bool,
	preFormHtml: propTypes.object,
	rejectTask: propTypes.func
};

MessagesForm.defaultProps = {
	buttonText: 'Отправить',
	inputRows: 5,
	labelText: ''
};

function CommentsForm(props) {
	var form = props.form,
	    modify = props.modify,
	    status = props.status,
	    taskId = props.taskId,
	    rejectTask = props.rejectTask,
	    commentId = props.commentId;

	return React__default.createElement(
		'div',
		{ name: 'comments-form' },
		!modify ? React__default.createElement(
			'h4',
			null,
			'\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439'
		) : React__default.createElement(
			'h4',
			null,
			'\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
		),
		form.parent ? React__default.createElement(
			'div',
			{ className: 'help-block' },
			'\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0434\u043B\u044F ',
			form.userName,
			' (',
			React__default.createElement(
				'a',
				{ onClick: props.cancelReplyFunc },
				'\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C'
			),
			')'
		) : '',
		modify ? React__default.createElement(
			'p',
			null,
			React__default.createElement(
				'a',
				{ onClick: props.cancelModifyFunc },
				'\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C'
			)
		) : '',
		React__default.createElement(MessagesForm, {
			onChangeForm: props.onChange,
			onSubmitForm: props.onSubmit,
			value: form.value,
			date: form.date,
			isLoading: props.loading,
			error: props.formError,
			buttonText: !modify ? 'Добавить комментарий' : 'Сохранить',
			taskId: taskId,
			status: status,
			rejectTask: rejectTask,
			commentId: commentId
		})
	);
}

CommentsForm.propTypes = {
	form: propTypes.shape({
		value: propTypes.string,
		parent: propTypes.number,
		userName: propTypes.string
	}).isRequired,

	modify: propTypes.bool.isRequired,
	cancelModifyFunc: propTypes.func.isRequired,
	cancelReplyFunc: propTypes.func.isRequired,
	onChange: propTypes.func.isRequired,
	onSubmit: propTypes.func.isRequired,
	loading: propTypes.bool,
	formError: propTypes.string,
	status: propTypes.bool,
	taskId: propTypes.number,
	rejectTask: propTypes.func,
	commentId: propTypes.number
};

/* eslint-disable */

/* eslint-disable */

function timeValueInTwoDigit(value) {
    if (value > 9) return value.toString();

    return '0' + value;
}

function timestampToReadableDigitDate(tamp) {
    var dateObj = new Date(Number(tamp));
    return dateObj.getDate() + '.' + timeValueInTwoDigit(Number(dateObj.getMonth()) + 1) + '.' + dateObj.getFullYear() + ', ' + dateObj.getHours() + ':' + timeValueInTwoDigit(dateObj.getMinutes());
}

/* eslint-disable */

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

var css = ".lesson-comments-list .lesson-comment {\n    background-color: #d6d9f3;\n}\n.lesson-comments-list  .comment-tree .lesson-comment {\n    background-color: #e5edefbf;\n}";
styleInject(css);

function CommentsList(props) {
	var comments = props.comments,
	    isModify = props.isModify,
	    readOnly = props.readOnly,
	    parent = props.parent,
	    user = props.user,
	    handleModifyLink = props.handleModifyLink,
	    handleReplyLink = props.handleReplyLink;

	return comments.map(function (elem) {
		return elem.parent_id === parent ? React__default.createElement(
			'div',
			{
				className: !parent ? '' : 'comment-tree child-wrap',
				key: elem.id
			},
			React__default.createElement(
				'div',
				{ className: 'lesson-comment' },
				React__default.createElement(
					'div',
					{ className: 'lesson-comment-head' },
					React__default.createElement(
						'a',
						{ href: '/user/profile/view?id=' + elem.author.id },
						React__default.createElement('img', { src: elem.author.avatar, alt: elem.author.id }),
						React__default.createElement(
							'span',
							{ className: 'comment-user' },
							elem.author.username
						)
					),
					React__default.createElement(
						'span',
						{ className: 'comment-date pull-right' },
						timestampToReadableDigitDate(elem.created_at * 1000)
					)
				),
				React__default.createElement(
					'div',
					{ className: 'lesson-comment-body' },
					React__default.createElement('span', { dangerouslySetInnerHTML: { __html: elem.comment } }),
					user.id === elem.author.id && isModify ? React__default.createElement(
						'a',
						{
							className: 'comment-reply-link',
							onClick: function onClick() {
								return props.handleModifyLink(elem);
							}
						},
						'\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
					) : user.id === elem.author.id && !isModify ? '' : !readOnly ? React__default.createElement(
						'a',
						{
							className: 'comment-reply-link',
							onClick: props.handleReplyLink(elem.author.username, elem.id)
						},
						'\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C'
					) : ''
				),
				React__default.createElement('div', { className: 'lesson-comment-footer' })
			),
			React__default.createElement(CommentsList, {
				comments: comments,
				user: user,
				isModify: isModify,
				parent: elem.id,
				readOnly: readOnly,
				handleModifyLink: handleModifyLink,
				handleReplyLink: handleReplyLink
			})
		) : '';
	});
}

CommentsList.propTypes = {
	comments: propTypes.array.isRequired,
	user: propTypes.shape({ id: propTypes.number }),
	isModify: propTypes.bool,
	parent: propTypes.number,
	readOnly: propTypes.bool,
	handleReplyLink: propTypes.func,
	handleModifyLink: propTypes.func
};

CommentsList.defaultProps = {
	readOnly: false,
	parent: 0,
	isModify: false
};

exports.CommentsForm = CommentsForm;
exports.CommentsList = CommentsList;
exports.MessagesForm = MessagesForm;
