(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/a-possible-prototype.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/classof-raw.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/create-property-descriptor.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/define-iterator.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/define-iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/document-create-element.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/dom-iterables.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/engine-user-agent.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/engine-v8-version.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!***********************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/get-built-in.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../../../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!*********************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/hidden-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!**********************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/indexed-object.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/inspect-source.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/internal-state.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/is-forced.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!*************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/is-pure.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators-core.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/iterators-core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/native-symbol.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/native-weak-map.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-create.js":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-properties.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-define-properties.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-define-property.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys.js":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!**************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/own-keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/path.js":
/*!**********************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/path.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!**************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/require-object-coercible.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/set-global.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/shared-store.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/to-indexed-object.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!*********************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/internals/well-known-symbol.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.iterator.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/modules/es.array.iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "../../../packages/web/buttons/src/index.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/index.ts ***!
  \*****************************************************************************/
/*! exports provided: TextButtonElement, OutlinedButtonElement, ShadedButtonElement, ContainedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_web_buttons_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-buttons.d */ "../../../packages/web/buttons/src/lib/web-buttons.d.ts");
/* harmony import */ var _lib_text_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/text-button */ "../../../packages/web/buttons/src/lib/text-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextButtonElement", function() { return _lib_text_button__WEBPACK_IMPORTED_MODULE_1__["TextButtonElement"]; });

/* harmony import */ var _lib_outlined_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/outlined-button */ "../../../packages/web/buttons/src/lib/outlined-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutlinedButtonElement", function() { return _lib_outlined_button__WEBPACK_IMPORTED_MODULE_2__["OutlinedButtonElement"]; });

/* harmony import */ var _lib_shaded_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shaded-button */ "../../../packages/web/buttons/src/lib/shaded-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShadedButtonElement", function() { return _lib_shaded_button__WEBPACK_IMPORTED_MODULE_3__["ShadedButtonElement"]; });

/* harmony import */ var _lib_contained_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/contained-button */ "../../../packages/web/buttons/src/lib/contained-button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainedButtonElement", function() { return _lib_contained_button__WEBPACK_IMPORTED_MODULE_4__["ContainedButtonElement"]; });







/***/ }),

/***/ "../../../packages/web/buttons/src/lib/button-base.ts":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/button-base.ts ***!
  \***************************************************************************************/
/*! exports provided: ButtonBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBase", function() { return ButtonBase; });
class ButtonBase extends HTMLButtonElement {}

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/contained-button/contained-button.d.ts":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/contained-button/contained-button.d.ts ***!
  \***************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/buttons/src/lib/contained-button/contained-button.element.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/contained-button/contained-button.element.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ContainedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainedButtonElement", function() { return ContainedButtonElement; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contained_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contained-styles */ "../../../packages/web/buttons/src/lib/contained-button/contained-styles.ts");
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");



var _dec, _class, _class2, _temp;



let ContainedButtonElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["BuiltIn"])({
  selector: 'contained-button',
  extends: 'button'
}), _dec(_class = (_temp = _class2 = class ContainedButtonElement extends HTMLButtonElement {
  constructor(...args) {
    super(...args);
    this.size = 'default';
    this.content = 'default';
    this.styles = _contained_styles__WEBPACK_IMPORTED_MODULE_2__["containedStyles"];
  }

}, _class2.observed = ['size', 'content'], _temp)) || _class);

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/contained-button/contained-styles.ts":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/contained-button/contained-styles.ts ***!
  \*************************************************************************************************************/
/*! exports provided: containedStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containedStyles", function() { return containedStyles; });
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
let _ = t => t,
    _t;


const containedStyles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["css"])(_t || (_t = _`
  button[is='contained-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='contained-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='contained-button'] > [slot='prefix'] {
    margin-left: 0;
    margin-right: 0;
    order: 0;
  }

  button[is='contained-button'] > [slot='suffix'] {
    margin-left: 0;
    margin-right: 0;
    order: 2;
  }

  .medium,
  button[is='contained-button'][size='medium'] {
    padding: 8px 12px;
  }

  .small,
  button[is='contained-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='contained-button'] {
    background-color: var(--blue-05);
    border-color: var(--blue-05);
    color: var(--blue-01);
    fill: var(--blue-01);
  }

  button[is='contained-button'] bs-icon {
    color: var(--blue-02);
    fill: var(--blue-02);
  }

  button[is='contained-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-blue-4dp-0-offset-x) * 1px)
        calc(var(--shadow-blue-4dp-0-offset-y) * 1px)
        calc(var(--shadow-blue-4dp-0-radius) * 1px)
        var(--shadow-blue-4dp-0-color)
    );
    background-color: var(--blue-04);
    border-color: var(--blue-04);
    color: var(--white);
    fill: var(--white);
  }

  button[is='contained-button']:hover bs-icon {
    color: var(--blue-01);
    fill: var(--blue-01);
  }

  button[is='contained-button'][type='submit']:disabled,
  button[is='contained-button'].cancel:disabled,
  button[is='contained-button'].delete:disabled,
  button[is='contained-button']:disabled {
    background-color: var(--grey-04);
    border-color: var(--grey-04);
    color: var(--grey-02);
    fill: var(--grey-02);
    filter: none;
  }

  button[is='contained-button'][type='submit']:disabled:hover,
  button[is='contained-button'].cancel:disabled:hover,
  button[is='contained-button'].delete:disabled:hover,
  button[is='contained-button']:disabled:hover {
    background-color: var(--grey-04);
    border-color: var(--grey-04);
    color: var(--grey-02);
    fill: var(--grey-02);
    filter: none;
  }

  button[is='contained-button'][type='submit']:disabled bs-icon,
  button[is='contained-button'].cancel:disabled bs-icon,
  button[is='contained-button'].delete:disabled bs-icon,
  button[is='contained-button']:disabled bs-icon {
    color: var(--grey-02);
    fill: var(--grey-02);
  }

  button[is='contained-button'][type='submit'],
  button[is='contained-button'][type='submit']:hover {
    color: var(--green-01);
    fill: var(--green-01);
  }

  button[is='contained-button'][type='submit'] > bs-icon,
  button[is='contained-button'][type='submit']:hover > bs-icon {
    color: var(--green-02);
    fill: var(--green-02);
  }

  button[is='contained-button'].cancel,
  button[is='contained-button'].cancel:hover {
    color: var(--red-01);
    fill: var(--red-01);
  }

  button[is='contained-button'].cancel > bs-icon,
  button[is='contained-button'].cancel:hover > bs-icon {
    color: var(--red-02);
    fill: var(--red-02);
  }

  button[is='contained-button'].delete,
  button[is='contained-button'].delete:hover {
    color: var(--orange-01);
    fill: var(--orange-01);
  }

  button[is='contained-button'].delete > bs-icon,
  button[is='contained-button'].delete:hover > bs-icon {
    color: var(--orange-02);
    fill: var(--orange-02);
  }
`));

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/contained-button/index.ts":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/contained-button/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: ContainedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contained_button_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contained-button.d */ "../../../packages/web/buttons/src/lib/contained-button/contained-button.d.ts");
/* harmony import */ var _contained_button_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contained-button.element */ "../../../packages/web/buttons/src/lib/contained-button/contained-button.element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainedButtonElement", function() { return _contained_button_element__WEBPACK_IMPORTED_MODULE_1__["ContainedButtonElement"]; });




/***/ }),

/***/ "../../../packages/web/buttons/src/lib/outlined-button/index.ts":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/outlined-button/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: OutlinedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _outlined_button_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outlined-button.d */ "../../../packages/web/buttons/src/lib/outlined-button/outlined-button.d.ts");
/* harmony import */ var _outlined_button_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlined-button.element */ "../../../packages/web/buttons/src/lib/outlined-button/outlined-button.element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutlinedButtonElement", function() { return _outlined_button_element__WEBPACK_IMPORTED_MODULE_1__["OutlinedButtonElement"]; });




/***/ }),

/***/ "../../../packages/web/buttons/src/lib/outlined-button/outlined-button.d.ts":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/outlined-button/outlined-button.d.ts ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/buttons/src/lib/outlined-button/outlined-button.element.ts":
/*!*******************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/outlined-button/outlined-button.element.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: OutlinedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlinedButtonElement", function() { return OutlinedButtonElement; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _outlined_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlined-styles */ "../../../packages/web/buttons/src/lib/outlined-button/outlined-styles.ts");
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");



var _dec, _class, _class2, _temp;



let OutlinedButtonElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["BuiltIn"])({
  selector: 'outlined-button',
  extends: 'button'
}), _dec(_class = (_temp = _class2 = class OutlinedButtonElement extends HTMLButtonElement {
  constructor(...args) {
    super(...args);
    this.size = 'default';
    this.content = 'default';
    this.styles = _outlined_styles__WEBPACK_IMPORTED_MODULE_2__["outlinedStyles"];
  }

}, _class2.observed = ['size', 'content'], _temp)) || _class);

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/outlined-button/outlined-styles.ts":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/outlined-button/outlined-styles.ts ***!
  \***********************************************************************************************************/
/*! exports provided: outlinedStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outlinedStyles", function() { return outlinedStyles; });
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
let _ = t => t,
    _t;


const outlinedStyles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["css"])(_t || (_t = _`
  button[is='outlined-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='outlined-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='outlined-button'] > [slot='prefix'] {
    margin-right: 0;
    margin-left: 0;
    order: 0;
  }

  button[is='outlined-button'] > [slot='suffix'] {
    margin-left: 0;
    margin-right: 0;
    order: 2;
  }

  .medium,
  button[is='outlined-button'][size='medium'] {
    padding: 8px 12px;
  }

  .small,
  button[is='outlined-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='outlined-button'] {
    background-color: var(--white);
    border-color: var(--grey-02);
    color: var(--blue-05);
    fill: var(--blue-05);
  }

  button[is='outlined-button'] bs-icon {
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  button[is='outlined-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-grey-4dp-0-offset-x) * 1px)
        calc(var(--shadow-grey-4dp-0-offset-y) * 1px)
        calc(var(--shadow-grey-4dp-0-radius) * 1px)
        var(--shadow-grey-4dp-0-color)
    );
    background-color: var(--white);
    border-color: var(--grey-03);
    color: var(--blue-06);
    fill: var(--blue-06);
  }

  button[is='outlined-button'][type='submit']:disabled,
  button[is='outlined-button'].cancel:disabled,
  button[is='outlined-button'].delete:disabled,
  button[is='outlined-button']:disabled {
    background-color: var(--white);
    border-color: var(--grey-02);
    color: var(--grey-03);
    fill: var(--grey-03);
    filter: none;
  }

  button[is='outlined-button'][type='submit']:disabled:hover,
  button[is='outlined-button'].cancel:disabled:hover,
  button[is='outlined-button'].delete:disabled:hover,
  button[is='outlined-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--grey-02);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='outlined-button'][type='submit']:disabled bs-icon,
  button[is='outlined-button'].cancel:disabled bs-icon,
  button[is='outlined-button'].delete:disabled bs-icon,
  button[is='outlined-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='outlined-button'][type='submit'],
  button[is='outlined-button'][type='submit']:hover {
    color: var(--green-05);
    fill: var(--green-05);
  }

  button[is='outlined-button'][type='submit'] > bs-icon,
  button[is='outlined-button'][type='submit']:hover > bs-icon {
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='outlined-button'].cancel,
  button[is='outlined-button'].cancel:hover {
    color: var(--red-05);
    fill: var(--red-05);
  }

  button[is='outlined-button'].cancel > bs-icon,
  button[is='outlined-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='outlined-button'].delete,
  button[is='outlined-button'].delete:hover {
    color: var(--orange-05);
    fill: var(--orange-05);
  }

  button[is='outlined-button'].delete > bs-icon,
  button[is='outlined-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`));

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/shaded-button/index.ts":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/shaded-button/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: ShadedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shaded_button_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaded-button.d */ "../../../packages/web/buttons/src/lib/shaded-button/shaded-button.d.ts");
/* harmony import */ var _shaded_button_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaded-button.element */ "../../../packages/web/buttons/src/lib/shaded-button/shaded-button.element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShadedButtonElement", function() { return _shaded_button_element__WEBPACK_IMPORTED_MODULE_1__["ShadedButtonElement"]; });




/***/ }),

/***/ "../../../packages/web/buttons/src/lib/shaded-button/shaded-button.d.ts":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/shaded-button/shaded-button.d.ts ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/buttons/src/lib/shaded-button/shaded-button.element.ts":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/shaded-button/shaded-button.element.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ShadedButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadedButtonElement", function() { return ShadedButtonElement; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shaded_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaded-styles */ "../../../packages/web/buttons/src/lib/shaded-button/shaded-styles.ts");
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");



var _dec, _class, _class2, _temp;



let ShadedButtonElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["BuiltIn"])({
  selector: 'shaded-button',
  extends: 'button'
}), _dec(_class = (_temp = _class2 = class ShadedButtonElement extends HTMLButtonElement {
  constructor(...args) {
    super(...args);
    this.size = 'default';
    this.content = 'default';
    this.styles = _shaded_styles__WEBPACK_IMPORTED_MODULE_2__["shadedStyles"];
  }

}, _class2.observed = ['size', 'content'], _temp)) || _class);

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/shaded-button/shaded-styles.ts":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/shaded-button/shaded-styles.ts ***!
  \*******************************************************************************************************/
/*! exports provided: shadedStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadedStyles", function() { return shadedStyles; });
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
let _ = t => t,
    _t;


const shadedStyles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["css"])(_t || (_t = _`
  button[is='shaded-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='shaded-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='shaded-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='shaded-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  /* Size Medium */
  .medium,
  button[is='shaded-button'][size='medium'] {
    padding: 8px 12px;
  }

  /* Size Small */
  .small,
  button[is='shaded-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='shaded-button'] {
    background-color: var(--light-grey);
    border-color: transparent;
    color: var(--blue-05);
    fill: var(--blue-05);
  }

  button[is='shaded-button'] bs-icon {
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  button[is='shaded-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-grey-4dp-0-offset-x) * 1px)
        calc(var(--shadow-grey-4dp-0-offset-y) * 1px)
        calc(var(--shadow-grey-4dp-0-radius) * 1px)
        var(--shadow-grey-4dp-0-color)
    );
    background-color: var(--white);
    border-color: var(--white);
    color: var(--blue-06);
    fill: var(--blue-06);
  }

  /* Disabled */
  button[is='shaded-button'][type='submit']:disabled,
  button[is='shaded-button'].cancel:disabled,
  button[is='shaded-button'].delete:disabled,
  button[is='shaded-button']:disabled {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
    filter: none;
  }

  /* Disabled / Hover */
  button[is='shaded-button'][type='submit']:disabled:hover,
  button[is='shaded-button'].cancel:disabled:hover,
  button[is='shaded-button'].delete:disabled:hover,
  button[is='shaded-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='shaded-button'][type='submit']:disabled bs-icon,
  button[is='shaded-button'].cancel:disabled bs-icon,
  button[is='shaded-button'].delete:disabled bs-icon,
  button[is='shaded-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='shaded-button'][type='submit'],
  button[is='shaded-button'][type='submit']:hover {
    color: var(--green-06);
    fill: var(--green-06);
  }

  button[is='shaded-button'][type='submit'] > bs-icon,
  button[is='shaded-button'][type='submit']:hover > bs-icon {
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='shaded-button'].cancel,
  button[is='shaded-button'].cancel:hover {
    color: var(--red-06);
    fill: var(--red-06);
  }

  button[is='shaded-button'].cancel > bs-icon,
  button[is='shaded-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='shaded-button'].delete,
  button[is='shaded-button'].delete:hover {
    color: var(--orange-06);
    fill: var(--orange-06);
  }

  button[is='shaded-button'].delete > bs-icon,
  button[is='shaded-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`));

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/text-button/index.ts":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/text-button/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: TextButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_button_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-button.d */ "../../../packages/web/buttons/src/lib/text-button/text-button.d.ts");
/* harmony import */ var _text_button_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-button.element */ "../../../packages/web/buttons/src/lib/text-button/text-button.element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextButtonElement", function() { return _text_button_element__WEBPACK_IMPORTED_MODULE_1__["TextButtonElement"]; });




/***/ }),

/***/ "../../../packages/web/buttons/src/lib/text-button/text-button.d.ts":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/text-button/text-button.d.ts ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/buttons/src/lib/text-button/text-button.element.ts":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/text-button/text-button.element.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TextButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextButtonElement", function() { return TextButtonElement; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-base */ "../../../packages/web/buttons/src/lib/button-base.ts");
/* harmony import */ var _text_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-styles */ "../../../packages/web/buttons/src/lib/text-button/text-styles.ts");
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");



var _dec, _class, _class2, _temp;




let TextButtonElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_4__["BuiltIn"])({
  selector: 'text-button',
  extends: 'button'
}), _dec(_class = (_temp = _class2 = class TextButtonElement extends _button_base__WEBPACK_IMPORTED_MODULE_2__["ButtonBase"] {
  constructor(...args) {
    super(...args);
    this.size = 'default';
    this.content = 'default';
    this.styles = _text_styles__WEBPACK_IMPORTED_MODULE_3__["textStyles"];
  }

}, _class2.observed = ['size', 'content'], _temp)) || _class);

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/text-button/text-styles.ts":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/text-button/text-styles.ts ***!
  \***************************************************************************************************/
/*! exports provided: textStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyles", function() { return textStyles; });
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
let _ = t => t,
    _t;


const textStyles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["css"])(_t || (_t = _`
  button[is='text-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='text-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='text-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='text-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  /* Size Medium */
  .medium,
  button[is='text-button'][size='medium'] {
    padding: 8px 12px;
  }

  /* Size Small */
  .small,
  button[is='text-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='text-button'] {
    background-color: var(--white);
    border-color: transparent;
    color: var(--grey-05);
    fill: var(--grey-05);
  }

  button[is='text-button']:hover {
    background-color: var(--grey-01);
    border-color: var(--grey-01);
    color: var(--black);
    fill: var(--black);
  }

  /* Icon */
  button[is='text-button'] bs-icon,
  button[is='text-button']:hover bs-icon {
    border-color: transparent;
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  /* Disabled */
  button[is='text-button'][type='submit']:disabled,
  button[is='text-button'].cancel:disabled,
  button[is='text-button'].delete:disabled,
  button[is='text-button']:disabled {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  /* Disabled / Hover */
  button[is='text-button'][type='submit']:disabled:hover,
  button[is='text-button'].cancel:disabled:hover,
  button[is='text-button'].delete:disabled:hover,
  button[is='text-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='text-button'][type='submit']:disabled bs-icon,
  button[is='text-button'].cancel:disabled bs-icon,
  button[is='text-button'].delete:disabled bs-icon,
  button[is='text-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='text-button'][type='submit'] > bs-icon,
  button[is='text-button'][type='submit']:hover > bs-icon {
    border-color: transparent;
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='text-button'].cancel > bs-icon,
  button[is='text-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='text-button'].delete > bs-icon,
  button[is='text-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`));

/***/ }),

/***/ "../../../packages/web/buttons/src/lib/web-buttons.d.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/buttons/src/lib/web-buttons.d.ts ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/index.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: Autonomous, BuiltIn, listen, query, queryAll, event, cloneTemplate, concatValues, isFakeBool, lifecycle, noop, parseValue, Emitter, Component, form, html, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/decorators */ "../../../packages/web/core/src/lib/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autonomous", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["Autonomous"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltIn", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["BuiltIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["listen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["event"]; });

/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/interfaces */ "../../../packages/web/core/src/lib/interfaces/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utilities */ "../../../packages/web/core/src/lib/utilities/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneTemplate", function() { return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__["cloneTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatValues", function() { return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__["concatValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFakeBool", function() { return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__["isFakeBool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__["lifecycle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__["parseValue"]; });

/* harmony import */ var _lib_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/emitter */ "../../../packages/web/core/src/lib/emitter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _lib_emitter__WEBPACK_IMPORTED_MODULE_3__["Emitter"]; });

/* harmony import */ var _lib_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/mixins */ "../../../packages/web/core/src/lib/mixins/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _lib_mixins__WEBPACK_IMPORTED_MODULE_4__["Component"]; });

/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/types */ "../../../packages/web/core/src/lib/types/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/form */ "../../../packages/web/core/src/lib/form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "form", function() { return _lib_form__WEBPACK_IMPORTED_MODULE_6__["form"]; });

/* harmony import */ var _lib_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/html */ "../../../packages/web/core/src/lib/html.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lib_html__WEBPACK_IMPORTED_MODULE_7__["html"]; });

/* harmony import */ var _lib_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/css */ "../../../packages/web/core/src/lib/css.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css__WEBPACK_IMPORTED_MODULE_8__["css"]; });











/***/ }),

/***/ "../../../packages/web/core/src/lib/css.ts":
/*!****************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/css.ts ***!
  \****************************************************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony import */ var _utilities_concat_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/concat-strings */ "../../../packages/web/core/src/lib/utilities/concat-strings.ts");

/**
 * Cria um elemento HTMLStyleElement vinculando seu CSS ao mesmo.
 * Caso você adicione algo dinâmico por meio de variáveis JS / TS
 * também é posicionada no seu devido local.
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns {HTMLStyleElement}
 */

function css(strings, ...values) {
  const style = document.createElement('style');
  style.textContent = Object(_utilities_concat_strings__WEBPACK_IMPORTED_MODULE_0__["concatValues"])(strings, values);
  return style;
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/decorators/autonomous.ts":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/decorators/autonomous.ts ***!
  \**********************************************************************************************/
/*! exports provided: Autonomous */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autonomous", function() { return Autonomous; });
/* harmony import */ var _home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/runner/work/recursos/recursos/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "../../../packages/web/core/src/lib/utilities/index.ts");

const _excluded = ["selector"];

function Autonomous(_ref) {
  let {
    selector
  } = _ref,
      opts = Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return function (target) {
    const disconnected = _utilities__WEBPACK_IMPORTED_MODULE_1__["lifecycle"].disconn(target);
    const connected = _utilities__WEBPACK_IMPORTED_MODULE_1__["lifecycle"].conn(target);
    const attribute = _utilities__WEBPACK_IMPORTED_MODULE_1__["lifecycle"].attr(target);
    target.selector = selector;
    const styles = target === null || target === void 0 ? void 0 : target.styles;
    const template = target === null || target === void 0 ? void 0 : target.template;
    const observed = target === null || target === void 0 ? void 0 : target.observed;
    target.observedAttributes = observed;

    target.prototype.attributeChangedCallback = function (name, prev, next) {
      this[name] = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(next);

      if (this.attributeChanged) {
        this.attributeChanged(name, prev, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(next));
      }

      attribute.call(name, prev, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(next));
    };

    target.prototype.connectedCallback = function () {
      var _this$template;

      const shadow = this.attachShadow({
        mode: opts.mode
      });

      if (styles || this.styles) {
        shadow.appendChild(styles || this.styles);
      }

      if (template !== null && template !== void 0 && template.content || (_this$template = this.template) !== null && _this$template !== void 0 && _this$template.content) {
        shadow.appendChild(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneTemplate"])(template || this.template));
      }

      shadow.querySelectorAll('slot').forEach(({
        name
      }) => {
        const assignable = this.querySelector(name);

        if (assignable && !assignable.slot) {
          assignable.setAttribute('slot', name);
        }
      });

      if (this.connected) {
        this.connected.call(this);
      }

      connected.call(this);
    };

    target.prototype.disconnectedCallback = function () {
      disconnected.call(this);
    };

    customElements.define(selector, target);
  };
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/decorators/built-in.ts":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/decorators/built-in.ts ***!
  \********************************************************************************************/
/*! exports provided: BuiltIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltIn", function() { return BuiltIn; });
/* harmony import */ var _home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/runner/work/recursos/recursos/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "../../../packages/web/core/src/lib/utilities/index.ts");

const _excluded = ["selector"];

function BuiltIn(_ref) {
  let {
    selector
  } = _ref,
      opts = Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return function (target) {
    const connected = _utilities__WEBPACK_IMPORTED_MODULE_1__["lifecycle"].conn(target);
    const disconnected = _utilities__WEBPACK_IMPORTED_MODULE_1__["lifecycle"].disconn(target);
    const attribute = _utilities__WEBPACK_IMPORTED_MODULE_1__["lifecycle"].attr(target);
    target.is = opts.extends;
    target.selector = selector;
    const styles = target === null || target === void 0 ? void 0 : target.styles;
    const template = target === null || target === void 0 ? void 0 : target.template;
    const observed = target === null || target === void 0 ? void 0 : target.observed;
    target.observedAttributes = observed;

    target.prototype.attributeChangedCallback = function (name, prev, next) {
      this[name] = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(next);

      if (this.attributeChanged) {
        this.attributeChanged(name, prev, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(next));
      }

      attribute.call(name, prev, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(next));
    };

    target.prototype.connectedCallback = function () {
      var _this$template;

      if (styles || this.styles) {
        this.appendChild(styles || this.styles);
      }

      if (template !== null && template !== void 0 && template.content || (_this$template = this.template) !== null && _this$template !== void 0 && _this$template.content) {
        this.appendChild(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneTemplate"])(template || this.template));
      }

      if (this.connected) {
        this.connected.call(this);
      }

      connected.call(this);
    };

    target.prototype.disconnectedCallback = function () {
      disconnected.call(this);
    };

    customElements.define(selector, target, {
      extends: opts.extends
    });
  };
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/decorators/event.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/decorators/event.ts ***!
  \*****************************************************************************************/
/*! exports provided: event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emitter */ "../../../packages/web/core/src/lib/emitter.ts");

/**
 * Usado em conjunto com `Emitter`
 * para emissão de eventos entre elementos
 *
 * @example
 * ```ts
 * ＠event()
 * onChange: Emitter
 *
 * ＠listen('form', 'onChange')
 * onChanged({ detail }: CustomEvent) {
 *   this.onChange.emit(detail)
 * }
 * ```
 *
 * @export
 * @returns
 */

function event() {
  return (protoOrDescriptor, name) => {
    const descriptor = {
      get() {
        return new _emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"](this, name !== undefined ? name : protoOrDescriptor.key);
      },

      enumerable: true,
      configurable: true
    };

    if (name !== undefined) {
      // legacy TS decorator
      return Object.defineProperty(protoOrDescriptor, name, descriptor);
    } else {
      // TC39 Decorators proposal
      return {
        kind: 'method',
        placement: 'prototype',
        key: protoOrDescriptor.key,
        descriptor
      };
    }
  };
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/decorators/index.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/decorators/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: Autonomous, BuiltIn, listen, query, queryAll, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autonomous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autonomous */ "../../../packages/web/core/src/lib/decorators/autonomous.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autonomous", function() { return _autonomous__WEBPACK_IMPORTED_MODULE_0__["Autonomous"]; });

/* harmony import */ var _built_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./built-in */ "../../../packages/web/core/src/lib/decorators/built-in.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuiltIn", function() { return _built_in__WEBPACK_IMPORTED_MODULE_1__["BuiltIn"]; });

/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listen */ "../../../packages/web/core/src/lib/decorators/listen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return _listen__WEBPACK_IMPORTED_MODULE_2__["listen"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query */ "../../../packages/web/core/src/lib/decorators/query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _query__WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _query__WEBPACK_IMPORTED_MODULE_3__["queryAll"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "../../../packages/web/core/src/lib/decorators/event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _event__WEBPACK_IMPORTED_MODULE_4__["event"]; });







/***/ }),

/***/ "../../../packages/web/core/src/lib/decorators/listen.ts":
/*!******************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/decorators/listen.ts ***!
  \******************************************************************************************/
/*! exports provided: listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "../../../packages/web/core/src/lib/utilities/index.ts");

/**
 * Decorator para escuta de eventos por
 * seletores e opção que determina caso
 * deva retornar o evento ou seu target
 *
 * @example
 * ```ts
 * ＠listen('form', 'onChange')
 * onChanged({ detail }: CustomEvent) {
 *   // Faz algo
 * }
 * ```
 *
 * @export
 * @template T
 * @param {(keyof HTMLElementTagNameMap | string)} selector
 * @param {keyof HTMLElementEventMap} event
 * @param {boolean} [getTarget=false]
 * @returns
 */

function listen(selector, event, getTarget = false) {
  /**
   * Adiciona listener aos elementos
   * É executado sempre que novos elementos
   * são adicionados ao DOM ou também
   * quando elementos são removidos
   *
   * @param {HTMLElement} context
   * @param {CustomConstructor} target
   * @param {string} propertyKey
   */
  function attachListener(context, target, propertyKey) {
    let elements;
    elements = context.querySelectorAll(selector);

    if (!!elements.length == false) {
      var _context$shadowRoot;

      elements = context === null || context === void 0 ? void 0 : (_context$shadowRoot = context.shadowRoot) === null || _context$shadowRoot === void 0 ? void 0 : _context$shadowRoot.querySelectorAll(selector);
    }

    if (elements) {
      elements.forEach(el => {
        // if (!(typeof el[`on${event.toLowerCase()}`] === 'undefined')) {}
        el.addEventListener(event, e => {
          target[propertyKey].call(context, getTarget ? e.target : e);
        });
      });
    }
  }

  return function (target, propertyKey, descriptor) {
    var _target$connectedCall;

    const connected = (_target$connectedCall = target.connectedCallback) !== null && _target$connectedCall !== void 0 ? _target$connectedCall : _utilities__WEBPACK_IMPORTED_MODULE_0__["noop"];

    target.connectedCallback = function () {
      const observer = new MutationObserver(() => {
        attachListener(this, target, propertyKey); // if (!(typeof this[`on${event}`] === 'function')) {}
      }); // observa alterações no elemento para manter-se ouvindo
      // observer.observe(this, { subtree: true, childList: true })

      attachListener(this, target, propertyKey); // connectedCallback

      connected.call(this);
    };

    return descriptor;
  };
} // import { noop } from '../utilities';
// /**
//  * Decorator para escuta de eventos por
//  * seletores e opção que determina caso
//  * deva retornar o evento ou seu target
//  *
//  * @example
//  * ```ts
//  * ＠listen('form', 'onChange')
//  * onChanged({ detail }: CustomEvent) {
//  *   // Faz algo
//  * }
//  * ```
//  *
//  * @export
//  * @template T
//  * @param {string} selector
//  * @param {string} event
//  * @returns
//  */
// export function listen<T>(
//   selector: keyof HTMLElementTagNameMap | string,
//   event: keyof HTMLElementEventMap,
//   getTarget = false
// ) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     const connected = target.connectedCallback ?? noop;
//     target.connectedCallback = function (): void {
//       connected.call(this);
//       let elements: NodeListOf<HTMLElement>;
//       if (this.shadowRoot) {
//         elements = this.shadowRoot.querySelectorAll(selector);
//       } else {
//         elements = this.querySelectorAll(selector);
//       }
//       elements.forEach((el) => {
//         el.addEventListener(event, (e: CustomEvent<T>) => {
//           target[propertyKey].call(this, getTarget ? e.target : e);
//         });
//       });
//     };
//     return descriptor;
//   };
// }

/***/ }),

/***/ "../../../packages/web/core/src/lib/decorators/query.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/decorators/query.ts ***!
  \*****************************************************************************************/
/*! exports provided: query, queryAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "../../../packages/web/core/src/lib/utilities/index.ts");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../../../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Esta função é utilizada como decorator
 * acima da propriedade que você deseja
 * marcar como entrada de dados em um
 * custom element
 *
 * Marcando o atributo `text` como entrada de strings
 * @example
 * ```ts
 * ＠prop()
 * text: string
 * ```
 *
 * @export
 * @returns {*}
 */

function query(selector) {
  return (target, propertyKey) => {
    var _target$connectedCall;

    const connected = (_target$connectedCall = target.connectedCallback) !== null && _target$connectedCall !== void 0 ? _target$connectedCall : _utilities__WEBPACK_IMPORTED_MODULE_0__["noop"];

    target.connectedCallback = function () {
      let element;
      const el = this;
      element = el.querySelector(selector);

      if (!!element == false) {
        var _el$shadowRoot;

        element = el === null || el === void 0 ? void 0 : (_el$shadowRoot = el.shadowRoot) === null || _el$shadowRoot === void 0 ? void 0 : _el$shadowRoot.querySelector(selector);
      }

      this[propertyKey] = element;
      connected.call(this);
    };
  };
}
/**
 *
 *
 * @export
 * @template T
 * @param {(keyof HTMLElementTagNameMap | string)} selector
 * @returns
 */

function queryAll(selector) {
  return function (target, propertyKey) {
    var _target$connectedCall2;

    const connected = (_target$connectedCall2 = target.connectedCallback) !== null && _target$connectedCall2 !== void 0 ? _target$connectedCall2 : _utilities__WEBPACK_IMPORTED_MODULE_0__["noop"];

    target.connectedCallback = function () {
      let element;
      const el = this;
      element = el.querySelectorAll(selector);

      if (!!element == false) {
        var _el$shadowRoot2;

        element = el === null || el === void 0 ? void 0 : (_el$shadowRoot2 = el.shadowRoot) === null || _el$shadowRoot2 === void 0 ? void 0 : _el$shadowRoot2.querySelectorAll(selector);
      }

      this[propertyKey] = element;
      connected.call(this);
    };
  };
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/emitter.ts":
/*!********************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/emitter.ts ***!
  \********************************************************************************/
/*! exports provided: Emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony import */ var _home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/runner/work/recursos/recursos/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Usado para emitir eventos de comunicação
 * entre um componente de baixo para cima
 * na árvore do dom
 *
 * @export
 * @class EventEmitter
 * @template T
 */
class Emitter {
  constructor(target, eventName) {
    this.target = target;
    this.eventName = eventName;
  }

  emit(value, options) {
    this.target.dispatchEvent(new CustomEvent(this.eventName, _objectSpread({
      detail: value
    }, options)));
  }

}

/***/ }),

/***/ "../../../packages/web/core/src/lib/form.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/form.ts ***!
  \*****************************************************************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "../../../packages/web/core/src/lib/utilities/index.ts");

/**
 * Serializa o dados através do elemento de formulário.
 *
 * @export
 * @template T
 * @param {HTMLFormElement} form
 * @returns
 */

function form(form) {
  const obj = {};
  const data = new FormData(form);
  data.forEach((value, name) => obj[name] = value);
  return Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(obj);
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/html.ts":
/*!*****************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/html.ts ***!
  \*****************************************************************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _utilities_concat_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/concat-strings */ "../../../packages/web/core/src/lib/utilities/concat-strings.ts");

/**
 * Esta função `template literals` por enquanto apenas cria
 * um elemento de template já vinculando seu html a ele, e
 * também posiciona cada variável em seu devido local validando
 * a possibilidade de null ou undefined, substituindo por ''.
 *
 * Aproveitei o nome html, pois utilizando a extensão do LitElement
 * no VSCode permite que escrevamos o html com syntax highlight
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns {HTMLTemplateElement}
 */

function html(strings, ...values) {
  const template = document.createElement('template');
  template.innerHTML = template.innerHTML = Object(_utilities_concat_strings__WEBPACK_IMPORTED_MODULE_0__["concatValues"])(strings, values);
  return template;
} // export function html(strings: TemplateStringsArray, ...values: unknown[]): string {
//   return strings.map((str, i) => str + (values[i] ?? '')).join('');
// }

/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/attribute-changed.ts":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/attribute-changed.ts ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/autonomous-options.ts":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/autonomous-options.ts ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/built-in-options.ts":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/built-in-options.ts ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/connected.ts":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/connected.ts ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/disconnected.ts":
/*!************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/disconnected.ts ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/element-options.ts":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/element-options.ts ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/interfaces/index.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/interfaces/index.ts ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attribute_changed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute-changed */ "../../../packages/web/core/src/lib/interfaces/attribute-changed.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _autonomous_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autonomous-options */ "../../../packages/web/core/src/lib/interfaces/autonomous-options.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _built_in_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./built-in-options */ "../../../packages/web/core/src/lib/interfaces/built-in-options.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _connected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connected */ "../../../packages/web/core/src/lib/interfaces/connected.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _disconnected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disconnected */ "../../../packages/web/core/src/lib/interfaces/disconnected.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _element_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-options */ "../../../packages/web/core/src/lib/interfaces/element-options.ts");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "../../../packages/web/core/src/lib/mixins/component.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/mixins/component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");




/**
 * Este mixin adiciona uma propriedade de estado,
 * com getters e setters para alterá-lo com uma
 * propriedade privada encapsulada:
 * @export
 * @template TBase
 * @template SBase
 * @param {TBase} Base
 * @returns
 */
function Component(Base) {
  var _class, _temp;

  return _temp = _class = class CustomElement extends Base {
    constructor(...args) {
      super(...args);
      this._state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      this.state$ = this._state.asObservable();
    }

    setState(state) {
      this._state.next(state);
    }

    get state() {
      return this._state.value;
    }

  }, _class.observedAttributes = void 0, _class.selector = '', _class.is = void 0, _class.template = void 0, _class.styles = void 0, _temp;
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/mixins/index.ts":
/*!*************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/mixins/index.ts ***!
  \*************************************************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../../../packages/web/core/src/lib/mixins/component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["Component"]; });



/***/ }),

/***/ "../../../packages/web/core/src/lib/types/custom-constructor.ts":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/types/custom-constructor.ts ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/web/core/src/lib/types/index.ts":
/*!************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/types/index.ts ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-constructor */ "../../../packages/web/core/src/lib/types/custom-constructor.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/clone-template.ts":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/clone-template.ts ***!
  \*************************************************************************************************/
/*! exports provided: cloneTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneTemplate", function() { return cloneTemplate; });
function cloneTemplate(template) {
  return template.content.cloneNode(true);
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/concat-strings.ts":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/concat-strings.ts ***!
  \*************************************************************************************************/
/*! exports provided: concatValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatValues", function() { return concatValues; });
/**
 * Concatena template strings adicionando
 * values em suas devidas posiçoes
 *
 * @export
 * @param {TemplateStringsArray} strings
 * @param {...unknown[]} values
 * @returns
 */
function concatValues(strings, ...values) {
  return strings.map((str, i) => {
    var _values$i;

    return str + ((_values$i = values[i]) !== null && _values$i !== void 0 ? _values$i : '');
  }).join('');
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/index.ts":
/*!****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/index.ts ***!
  \****************************************************************************************/
/*! exports provided: cloneTemplate, concatValues, isFakeBool, lifecycle, noop, parseValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clone_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone-template */ "../../../packages/web/core/src/lib/utilities/clone-template.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneTemplate", function() { return _clone_template__WEBPACK_IMPORTED_MODULE_0__["cloneTemplate"]; });

/* harmony import */ var _concat_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat-strings */ "../../../packages/web/core/src/lib/utilities/concat-strings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatValues", function() { return _concat_strings__WEBPACK_IMPORTED_MODULE_1__["concatValues"]; });

/* harmony import */ var _is_fake_bool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-fake-bool */ "../../../packages/web/core/src/lib/utilities/is-fake-bool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFakeBool", function() { return _is_fake_bool__WEBPACK_IMPORTED_MODULE_2__["isFakeBool"]; });

/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle */ "../../../packages/web/core/src/lib/utilities/lifecycle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return _lifecycle__WEBPACK_IMPORTED_MODULE_3__["lifecycle"]; });

/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noop */ "../../../packages/web/core/src/lib/utilities/noop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_4__["noop"]; });

/* harmony import */ var _parse_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse-value */ "../../../packages/web/core/src/lib/utilities/parse-value.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _parse_value__WEBPACK_IMPORTED_MODULE_5__["parseValue"]; });








/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/is-fake-bool.ts":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/is-fake-bool.ts ***!
  \***********************************************************************************************/
/*! exports provided: isFakeBool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeBool", function() { return isFakeBool; });
function isFakeBool(value) {
  return value === 'true' || value === 'false';
}

/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/lifecycle.ts":
/*!********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/lifecycle.ts ***!
  \********************************************************************************************/
/*! exports provided: lifecycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/noop */ "../../../packages/web/core/src/lib/utilities/noop.ts");

const lifecycle = {
  conn: target => {
    var _target$prototype$con;

    return (_target$prototype$con = target.prototype.connectedCallback) !== null && _target$prototype$con !== void 0 ? _target$prototype$con : _utilities_noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  },
  disconn: target => {
    var _target$prototype$dis;

    return (_target$prototype$dis = target.prototype.disconnectedCallback) !== null && _target$prototype$dis !== void 0 ? _target$prototype$dis : _utilities_noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  },
  attr: target => {
    var _target$prototype$att;

    return (_target$prototype$att = target.prototype.attributeChangedCallback) !== null && _target$prototype$att !== void 0 ? _target$prototype$att : _utilities_noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  }
};

/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/noop.ts":
/*!***************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/noop.ts ***!
  \***************************************************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
const noop = () => null;

/***/ }),

/***/ "../../../packages/web/core/src/lib/utilities/parse-value.ts":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/core/src/lib/utilities/parse-value.ts ***!
  \**********************************************************************************************/
/*! exports provided: parseValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony import */ var _is_fake_bool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-fake-bool */ "../../../packages/web/core/src/lib/utilities/is-fake-bool.ts");
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json5 */ "../../../node_modules/json5/dist/index.js");
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json5__WEBPACK_IMPORTED_MODULE_1__);


function parseValue(value) {
  const tmpValue = isNaN(+value) ? value : +value;

  if (typeof tmpValue === 'number') {
    return tmpValue;
  }

  if (Object(_is_fake_bool__WEBPACK_IMPORTED_MODULE_0__["isFakeBool"])(tmpValue)) {
    return value == 'false' ? false : true;
  }

  try {
    return Object(json5__WEBPACK_IMPORTED_MODULE_1__["parse"])(value);
  } catch (err) {
    return value;
  }
}

/***/ }),

/***/ "../../../packages/web/icons/src/index.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/icons/src/index.ts ***!
  \***************************************************************************/
/*! exports provided: BsIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bs_icon_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bs-icon.element */ "../../../packages/web/icons/src/lib/bs-icon.element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsIconElement", function() { return _lib_bs_icon_element__WEBPACK_IMPORTED_MODULE_0__["BsIconElement"]; });



/***/ }),

/***/ "../../../packages/web/icons/src/lib/bs-icon.element.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/recursos/recursos/packages/web/icons/src/lib/bs-icon.element.ts ***!
  \*****************************************************************************************/
/*! exports provided: BsIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsIconElement", function() { return BsIconElement; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");



let _dec,
    _class,
    _class2,
    _temp,
    _ = t => t,
    _t,
    _t2;


let BsIconElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_2__["Autonomous"])({
  selector: 'bs-icon',
  mode: 'open'
}), _dec(_class = (_temp = _class2 = class BsIconElement extends Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_2__["Component"])(HTMLElement) {
  constructor(...args) {
    super(...args);
    this.href = 'assets/icons/bs-icons.svg';
    this._icon = '';
    this.color = void 0;
    this.size = void 0;
    this.styles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_t || (_t = _`
    :host {
      display: flex;
      width: 24px;
      height: 24px;
    }
    svg {
      width: 24px;
      height: 24px;
      fill: var(--icon-color);
    }
  `));
    this.template = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_2__["html"])(_t2 || (_t2 = _` <svg><use xlink:href=""></use></svg> `));
    this.use = void 0;
  }

  get icon() {
    return this._icon;
  }

  set icon(v) {
    this._icon = v;
    this.setIcon(this.icon);
  }

  connected() {
    this.use = this.shadowRoot.querySelector('use');
    this.setIcon(this.icon);
  }

  setIcon(icon) {
    const href = `${this.href}#${icon}`;

    if (this.use) {
      this.use.setAttribute('xlink:href', href);
    }
  }

}, _class2.observed = ['href', 'icon', 'color', 'size'], _temp)) || _class);

/***/ }),

/***/ "./app/app.element.ts":
/*!****************************!*\
  !*** ./app/app.element.ts ***!
  \****************************/
/*! exports provided: AppElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppElement", function() { return AppElement; });
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _utilities_transcoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/transcoder */ "./app/utilities/transcoder.ts");
let _dec,
    _class,
    _ = t => t,
    _t,
    _t2;




let AppElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["Autonomous"])({
  selector: 'devpr-root',
  mode: 'open'
}), _dec(_class = class AppElement extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.mimeType = void 0;
    this.stream = void 0;
    this.mediaRecorder = void 0;
    this.recordedBlobs = [];
    this.button = void 0;
    this.transcode = void 0;
    this.video = void 0;
    this.link = void 0;
    this.styles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["css"])(_t || (_t = _`
    :host {
      background-image: url('assets/images/pair-programming.svg');
      background-position: left bottom;
      background-repeat: no-repeat;
    }

    main {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 800px;
      margin: 0px auto;
      flex: 1;
    }

    section {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    section video {
      position: absolute;
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.1);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 80px;
      position: relative;
    }
    nav > div {
      gap: 16px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      align-content: center;
    }
  `));
    this.template = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_0__["html"])(_t2 || (_t2 = _`
    <main>
      <section>
        <video id="recorder" playsinline autoplay></video>
        <video id="recorded" playsinline loop></video>
      </section>

      <!-- <video-gif></video-gif> -->

      <nav>
        <div>
          <button is="outlined-button" id="start-screen">
            <bs-icon slot="prefix" icon="cast"></bs-icon>
          </button>

          <button is="outlined-button" id="start-camera">
            <bs-icon slot="prefix" icon="video_camera_front"></bs-icon>
          </button>

          <button is="outlined-button" mode="outlined" id="record" disabled>
            <bs-icon slot="prefix" icon="record"></bs-icon>
            <span>Gravar</span>
          </button>
        </div>
        <div>
          <button is="outlined-button" id="play" disabled>
            <bs-icon slot="prefix" icon="play"></bs-icon>
            <span>Play</span>
          </button>

          <button is="outlined-button" mode="outlined" id="download" disabled>
            <bs-icon slot="prefix" icon="download"></bs-icon>
            <span>WebM</span>
          </button>

          <button
            is="outlined-button"
            mode="outlined"
            class="transcode"
            data-format="mp4"
            disabled
          >
            <bs-icon slot="prefix" icon="slow_motion_video"></bs-icon>
            <span>MP4</span>
          </button>

          <button
            is="outlined-button"
            mode="outlined"
            class="transcode"
            data-format="gif"
            disabled
          >
            <bs-icon slot="prefix" icon="motion_photos_auto"></bs-icon>
            <span>GIF</span>
          </button>
        </div>
      </nav>

      <a id="downlink" download></a>
      <output id="error-message"></output>
    </main>
  `));
  }

  connected() {
    if (this.shadowRoot) {
      var _this$shadowRoot, _this$shadowRoot2, _this$shadowRoot3, _this$shadowRoot4, _this$shadowRoot5, _this$shadowRoot6, _this$shadowRoot7, _this$shadowRoot8, _this$shadowRoot9;

      this.button = {
        play: (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector('#play'),
        start: (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.querySelector('#start-screen'),
        camera: (_this$shadowRoot3 = this.shadowRoot) === null || _this$shadowRoot3 === void 0 ? void 0 : _this$shadowRoot3.querySelector('#start-camera'),
        record: (_this$shadowRoot4 = this.shadowRoot) === null || _this$shadowRoot4 === void 0 ? void 0 : _this$shadowRoot4.querySelector('#record'),
        download: (_this$shadowRoot5 = this.shadowRoot) === null || _this$shadowRoot5 === void 0 ? void 0 : _this$shadowRoot5.querySelector('#download')
      };
      this.transcode = (_this$shadowRoot6 = this.shadowRoot) === null || _this$shadowRoot6 === void 0 ? void 0 : _this$shadowRoot6.querySelectorAll('.transcode');
      this.video = {
        recorder: (_this$shadowRoot7 = this.shadowRoot) === null || _this$shadowRoot7 === void 0 ? void 0 : _this$shadowRoot7.querySelector('#recorder'),
        recorded: (_this$shadowRoot8 = this.shadowRoot) === null || _this$shadowRoot8 === void 0 ? void 0 : _this$shadowRoot8.querySelector('#recorded')
      };
      this.link = (_this$shadowRoot9 = this.shadowRoot) === null || _this$shadowRoot9 === void 0 ? void 0 : _this$shadowRoot9.querySelector('#downlink');

      this.button.record.onclick = event => {
        this.onRecord(event.currentTarget);
      };

      const transcoder = new _utilities_transcoder__WEBPACK_IMPORTED_MODULE_2__["Transcoder"]();
      this.transcode.forEach(button => {
        button.onclick = ({
          currentTarget
        }) => {
          this.toggleButtons();
          transcoder.onTranscode(this.mimeType, this.recordedBlobs, currentTarget, button.dataset.format).then(() => {
            this.toggleButtons();
          });
        };
      });
      this.button.download.onclick = this.onDownload();
      this.button.start.onclick = this.onStart();
      this.button.play.onclick = this.onPlay();
      this.button.camera.onclick = this.onCamera();
      this.video.recorder.muted = true;
      this.button.start.focus();
      const head = document.head;
      const selector = 'meta[http-equiv]';
      const meta = head.querySelector(selector);
      meta.content = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].originToken;
    }
  }

  onStart() {
    return () => {
      const constraints = {
        video: {
          width: 1920,
          height: 1080
        },
        audio: true
      };
      this.init(constraints).then(stream => {
        this.stream = stream;
        this.button.start.disabled = true;
        this.button.camera.disabled = true;
        this.button.record.disabled = false;
        this.video.recorder.srcObject = stream;
      }).then(() => this.button.record.focus());
    };
  }

  onCamera() {
    return () => {
      const constraints = {
        video: {
          width: 1920,
          height: 1080
        },
        audio: true
      };
      this.initCamera(constraints).then(stream => {
        this.stream = stream;
        this.button.start.disabled = true;
        this.button.camera.disabled = true;
        this.button.record.disabled = false;
        this.video.recorder.srcObject = stream;
      }).then(() => this.button.record.focus());
    };
  }

  onPlay() {
    return () => {
      const blob = new Blob(this.recordedBlobs, {
        type: this.mimeType
      });
      this.video.recorded.src = URL.createObjectURL(blob);
      this.video.recorded.controls = true;
      this.video.recorded.play();
      this.button.download.focus();
    };
  }

  onRecord(button) {
    var _this$mediaRecorder;

    const {
      state
    } = (_this$mediaRecorder = this.mediaRecorder) !== null && _this$mediaRecorder !== void 0 ? _this$mediaRecorder : {};

    if (state && state === 'recording') {
      this.mediaRecorder.stop();
      button.querySelector('bs-icon').setAttribute('icon', 'record');
    } else {
      button.querySelector('bs-icon').setAttribute('icon', 'pause');
      this.startRecording();
    }
  }

  toggleButtons() {
    const buttons = this.shadowRoot.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = !btn.disabled);
  }

  onDownload() {
    return () => {
      const blob = new Blob(this.recordedBlobs, {
        type: this.mimeType
      });
      this.link.href = URL.createObjectURL(blob);
      this.link.download = 'video.webm';
      this.link.click();
    };
  } // Core


  startRecording() {
    this.recordedBlobs = [];
    const mimeTypes = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4'];
    this.mimeType = mimeTypes.find(type => {
      return MediaRecorder.isTypeSupported(type);
    });

    if (!this.mimeType) {
      console.error('MediaRecorder support');
    }

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, {
        mimeType: this.mimeType
      });

      this.mediaRecorder.ondataavailable = ({
        data
      }) => {
        if (data && data.size > 0) {
          this.recordedBlobs.push(data);
        }
      };

      this.mediaRecorder.start();

      this.mediaRecorder.onstop = () => {
        this.button.play.disabled = false;
        this.button.download.disabled = false;
        this.transcode.forEach(button => button.disabled = false);
        this.button.play.focus();
      };
    } catch (err) {
      console.error('Exception while creating MediaRecorder:', err);
    }
  }

  async init({
    video,
    audio
  }) {
    const meta = document.head.querySelector('meta[http-equiv]');
    meta.content = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].originToken;

    try {
      const display = await this.getDisplay(video);
      const user = await this.getUser(audio);
      const [track] = user.getAudioTracks();
      display.addTrack(track);
      return display;
    } catch (err) {
      alert(err);
    }
  }

  async initCamera({
    video,
    audio
  }) {
    try {
      return await this.getUserMedia({
        video,
        audio
      });
    } catch (err) {
      alert(err);
    }
  }

  getUserMedia(constraints) {
    return navigator.mediaDevices.getUserMedia(constraints);
  }

  getUser(audio) {
    return navigator.mediaDevices.getUserMedia({
      audio
    });
  }

  getDisplay(video) {
    return navigator.mediaDevices.getDisplayMedia({
      video
    });
  }

}) || _class);

/***/ }),

/***/ "./app/utilities/transcoder.ts":
/*!*************************************!*\
  !*** ./app/utilities/transcoder.ts ***!
  \*************************************/
/*! exports provided: Transcoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transcoder", function() { return Transcoder; });
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ffmpeg/ffmpeg */ "../../../node_modules/@ffmpeg/ffmpeg/src/index.js");
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_0__);

let ffmpeg = null;

const getCurrentDate = () => {
  const date = Date().toString().split('GMT');
  return date === null || date === void 0 ? void 0 : date.shift().trim().replace(new RegExp(' ', 'g'), '-');
};

class Transcoder {
  async onTranscode(mimeType, recordedBlobs, target, format = 'mp4') {
    const blob = new Blob(recordedBlobs, {
      type: mimeType
    });
    const log = true;
    const corePath = 'assets/ffmpeg/ffmpeg-core.js';
    if (ffmpeg === null) ffmpeg = Object(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_0__["createFFmpeg"])({
      corePath,
      log
    });
    const span = target.querySelector('span');

    const transcode = async function transcode() {
      const time = ['-t', '2.0'];
      const ss = ['-ss', '2.0'];
      const out = ['-f', format];
      span.textContent = 'Convertendo'; // target.disabled = true

      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
      }

      ffmpeg.FS('writeFile', 'video.webm', await Object(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_0__["fetchFile"])(blob));
      const params = format === 'gif' ? [...time, ...ss, ...out] : [...out];
      await ffmpeg.run('-i', 'video.webm', ...params, 'video.' + format);
      const data = ffmpeg.FS('readFile', 'video.' + format);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(new Blob([data.buffer], {
        type: 'video/' + format
      }));
      link.download = getCurrentDate() + '.' + format;
      link.click();
      return;
    };

    return transcode().then(() => {
      span.textContent = format.toUpperCase(); // target.disabled = false
    });
  }

}

/***/ }),

/***/ "./app/video-gif/index.ts":
/*!********************************!*\
  !*** ./app/video-gif/index.ts ***!
  \********************************/
/*! exports provided: VideoGifElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_gif_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-gif.d */ "./app/video-gif/video-gif.d.ts");
/* harmony import */ var _video_gif_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-gif.element */ "./app/video-gif/video-gif.element.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoGifElement", function() { return _video_gif_element__WEBPACK_IMPORTED_MODULE_1__["VideoGifElement"]; });




/***/ }),

/***/ "./app/video-gif/video-gif.d.ts":
/*!**************************************!*\
  !*** ./app/video-gif/video-gif.d.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./app/video-gif/video-gif.element.ts":
/*!********************************************!*\
  !*** ./app/video-gif/video-gif.element.ts ***!
  \********************************************/
/*! exports provided: VideoGifElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGifElement", function() { return VideoGifElement; });
/* harmony import */ var _home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /home/runner/work/recursos/recursos/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /home/runner/work/recursos/recursos/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /home/runner/work/recursos/recursos/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ffmpeg/ffmpeg */ "../../../node_modules/@ffmpeg/ffmpeg/src/index.js");
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_4__);




let _dec,
    _dec2,
    _dec3,
    _dec4,
    _dec5,
    _dec6,
    _dec7,
    _dec8,
    _dec9,
    _dec10,
    _dec11,
    _dec12,
    _class,
    _class2,
    _descriptor,
    _descriptor2,
    _descriptor3,
    _descriptor4,
    _class3,
    _temp,
    _ = t => t,
    _t,
    _t2;



const ffmpeg = Object(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_4__["createFFmpeg"])({
  corePath: 'assets/ffmpeg/ffmpeg-core.js',
  log: true
});
let VideoGifElement = (_dec = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["Autonomous"])({
  selector: 'video-gif',
  mode: 'open'
}), _dec2 = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["query"])('input'), _dec3 = Reflect.metadata("design:type", typeof HTMLInputElement === "undefined" ? Object : HTMLInputElement), _dec4 = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["query"])('img'), _dec5 = Reflect.metadata("design:type", typeof HTMLImageElement === "undefined" ? Object : HTMLImageElement), _dec6 = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["query"])('button'), _dec7 = Reflect.metadata("design:type", typeof HTMLButtonElement === "undefined" ? Object : HTMLButtonElement), _dec8 = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["event"])(), _dec9 = Reflect.metadata("design:type", typeof _devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["Emitter"] === "undefined" ? Object : _devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["Emitter"]), _dec10 = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["listen"])('button', 'click'), _dec11 = Reflect.metadata("design:type", Function), _dec12 = Reflect.metadata("design:paramtypes", [typeof Event === "undefined" ? Object : Event]), _dec(_class = (_class2 = (_temp = _class3 = class VideoGifElement extends Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["Component"])(HTMLElement) {
  constructor(...args) {
    var _this;

    super(...args);
    _this = this;
    this._ready = false;
    this._video = void 0;
    this._gif = void 0;

    Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "inputEl", _descriptor, this);

    Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imgEl", _descriptor2, this);

    Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buttonEl", _descriptor3, this);

    Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", _descriptor4, this);

    this.styles = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_t || (_t = _`
    :host {
      display: inline-flex;
    }
  `));
    this.template = Object(_devpr_web_core__WEBPACK_IMPORTED_MODULE_3__["html"])(_t2 || (_t2 = _`
    <input type="file" name="video" />
    <img src="" />
    <button disabled>Converter</button>
  `));

    this.load = async function () {
      await ffmpeg.load();
      _this.ready = true;
      _this.buttonEl.disabled = false;
    };
  }

  set ready(val) {
    this._ready = val;
  }

  get ready() {
    return this._ready;
  }

  set video(val) {
    this._video = val;
  }

  get video() {
    return this._video;
  }

  set gif(val) {
    this._gif = val;
  }

  get gif() {
    return this._gif;
  }

  setVideo(file) {
    this.video = URL.createObjectURL(file);
  }

  onClicked(event) {
    const inputEl = this.shadowRoot.querySelector('input');
    console.log(inputEl);
    this.onClick.emit(event.target);
  }

  // ffmpeg = createFFmpeg({ log: true })
  async convertToGif(video) {
    // Params
    const input = 'test.mp4';
    const time = ['-t', '2.5'];
    const ss = ['-ss', '2.0'];
    const format = ['-f', 'gif'];
    const out = 'out.gif'; // Write the file to memory

    ffmpeg.FS('writeFile', input, await Object(_ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_4__["fetchFile"])(video)); // Command

    await ffmpeg.run('-i', input, ...time, ...ss, ...format, out); // Result

    const data = ffmpeg.FS('readFile', out); // URL

    const url = URL.createObjectURL(new Blob([data.buffer], {
      type: 'image/gif'
    }));
    this.imgEl.src = url;
  }

  connected() {
    queueMicrotask(() => {
      this.load();
    });

    if (this.ready) {
      console.log('ready');
    } // Do something


    queueMicrotask(() => {
      console.log(this.video);
      console.log(this.inputEl);
      console.log(this.imgEl);

      this.inputEl.onchange = ({
        target
      }) => {
        const {
          files
        } = target; // console.log(files.item(0))

        this.convertToGif(URL.createObjectURL(files.item(0)));
      };
    });
  }

}, _class3.observed = [], _temp), (_descriptor = Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2.prototype, "inputEl", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2.prototype, "imgEl", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2.prototype, "buttonEl", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2.prototype, "onClick", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), Object(_home_runner_work_recursos_recursos_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2.prototype, "onClicked", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "onClicked"), _class2.prototype)), _class2)) || _class);

/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
const environment = {
  production: false,
  originToken: 'ApyVT4vdDQ2PN5yQqMSXhvMcsy+NmU9sqqL1DPdIqlpPGL6WWugX8+YgTnHffT8hONiejdepUc++1KeguWH55AQAAABgeyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE2Mzk1MjYzOTl9'
};

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _devpr_web_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @devpr/web-core */ "../../../packages/web/core/src/index.ts");
/* harmony import */ var _devpr_web_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @devpr/web-icons */ "../../../packages/web/icons/src/index.ts");
/* harmony import */ var _devpr_web_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devpr/web-buttons */ "../../../packages/web/buttons/src/index.ts");
/* harmony import */ var _app_app_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.element */ "./app/app.element.ts");
/* harmony import */ var _app_video_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/video-gif */ "./app/video-gif/index.ts");






/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/recursos/recursos/apps/recorder/src/main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map