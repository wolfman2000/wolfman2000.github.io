function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$3 = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e2) {
  var d, c = {}, k2 = null, h2 = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e2;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$2;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e2, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c = c(h2), a = "" === d ? "." + Q$1(h2, 0) : d, I$1(c) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c, b, e2, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h2 = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h2 += R$1(k2, b, e2, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h2 += R$1(k2, b, e2, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a, b, e2) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e2, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e2) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$3;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e2) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h2 = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e2;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$2, type: a.type, key: c, ref: k2, props: d, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e2) {
  return U$1.current.useImperativeHandle(a, b, e2);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e2) {
  return U$1.current.useReducer(a, b, e2);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e2) {
  return U$1.current.useSyncExternalStore(a, b, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$2(c, a, g) {
  var b, d = {}, e2 = null, h2 = null;
  void 0 !== g && (e2 = "" + g);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b in a)
    m$2.call(a, b) && !p$3.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k$1, type: c, key: e2, ref: h2, props: d, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e2 = a[d];
        if (0 < g(e2, b))
          a[d] = b, a[c] = e2, c = d;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e2 && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e2 && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l9 = performance;
    exports.unstable_now = function() {
      return l9.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h2(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b = h2(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c + e2;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$2(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v$1(a, b, c, d, e2, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e2;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v$1(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v$1(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e2 = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e2, d) && (c = null), d || null === e2 ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l9) {
          var d = l9;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l9) {
          d = l9;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l9) {
        d = l9;
      }
      a();
    }
  } catch (l9) {
    if (l9 && d && "string" === typeof l9.stack) {
      for (var e2 = l9.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; )
        h2--;
      for (; 1 <= g && 0 <= h2; g--, h2--)
        if (e2[g] !== f2[h2]) {
          if (1 !== g || 1 !== h2) {
            do
              if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                var k2 = "\n" + e2[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e2 = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e2 = 0; e2 < c.length; e2++)
      b["$" + c[e2]] = true;
    for (c = 0; c < a.length; c++)
      e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c) {
        a[e2].selected = true;
        d && (a[e2].defaultSelected = true);
        return;
      }
      null !== b || a[e2].disabled || (b = a[e2]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p$2(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p$2(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e2);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e2) : a[c] = e2;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p$2(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p$2(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p$2(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$2(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p$2(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e2, f2, g, h2, k2) {
  var l9 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l9);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e2, f2, g, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e2, f2, g, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l9 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$2(198));
    Qb || (Qb = true, Rb = l9);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$2(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p$2(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e2 = c.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d = e2.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c)
          return Xb(e2), a;
        if (f2 === d)
          return Xb(e2), b;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c.return !== d.return)
      c = e2, d = f2;
    else {
      for (var g = false, h2 = e2.child; h2; ) {
        if (h2 === c) {
          g = true;
          c = e2;
          d = f2;
          break;
        }
        if (h2 === d) {
          g = true;
          d = e2;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g = true;
            c = f2;
            d = e2;
            break;
          }
          if (h2 === d) {
            g = true;
            d = f2;
            c = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g)
          throw Error(p$2(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p$2(190));
  }
  if (3 !== c.tag)
    throw Error(p$2(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h2 = g & ~e2;
    0 !== h2 ? d = tc(h2) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e2 = 1 << c, d |= a[c], b &= ~e2;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h2 = 1 << g, k2 = e2[g];
    if (-1 === k2) {
      if (0 === (h2 & c) || 0 !== (h2 & d))
        e2[g] = vc(h2, b);
    } else
      k2 <= b && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e2 = 31 - oc(c), f2 = 1 << e2;
    b[e2] = 0;
    d[e2] = -1;
    a[e2] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e2 = 1 << d;
    e2 & b | a[d] & b && (a[d] |= b);
    c &= ~e2;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
  return a;
}
function Uc(a, b, c, d, e2) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e2 = Yc(a, b, c, d);
    if (null === e2)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e2, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c && b[a] === e2[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e2[f2 - d]; d++)
    ;
  return md = e2.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e2, f2, g) {
    this._reactName = b2;
    this._targetInst = e2;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e2 = c[d];
    if (!ja.call(b, e2) || !He(a[e2], b[e2]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
        d = void 0 === d.end ? f2 : Math.min(d.end, e2);
        !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
        e2 = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e2 = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h2 = d[g], k2 = h2.instance, l9 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l9);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h2 = d[g];
          k2 = h2.instance;
          l9 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l9);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c = e2.bind(null, b, c, a);
  e2 = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
  d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e2) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g = g.return;
            }
          for (; null !== h2; ) {
            g = Wc(h2);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e3 = xb(c), g2 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c, e3), g2.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue(d2) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e3);
          break a;
        }
        xa && xa(a, h3, d2);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e3), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e2) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h2 = c, k2 = h2.alternate, l9 = h2.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h2.tag && null !== l9 && (h2 = l9, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h2))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h2))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e2 = c.nextSibling;
    a.removeChild(c);
    if (e2 && 8 === e2.nodeType)
      if (c = e2.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e2);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e2;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c)
    e2[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p$2(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e2 in d)
    if (!(e2 in b))
      throw Error(p$2(108, Ra(a) || "Unknown", e2));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p$2(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e2 = 32 - oc(d) - 1;
  d &= ~(1 << e2);
  c += 1;
  var f2 = 32 - oc(b) + e2;
  if (30 < f2) {
    var g = e2 - e2 % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e2 -= g;
    rg = 1 << 32 - oc(b) + e2 | c << e2 | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e2 | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p$2(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$2(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e2 = b.interleaved;
  null === e2 ? (c.next = c, Xg(b)) : (c.next = e2.next, e2.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e2 = d.pending;
    null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e2 = d.interleaved;
  null === e2 ? (b.next = b, Xg(d)) : (b.next = e2.next, e2.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e2 = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e2 = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e2 = f2 = b : f2 = f2.next = b;
    } else
      e2 = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e2 = a.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l9 = k2.next;
    k2.next = null;
    null === g ? f2 = l9 : g.next = l9;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g && (null === h2 ? m2.firstBaseUpdate = l9 : h2.next = l9, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g = 0;
    m2 = l9 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l9 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l9;
    e2.lastBaseUpdate = m2;
    b = e2.shared.interleaved;
    if (null !== b) {
      e2 = b;
      do
        g |= e2.lane, e2 = e2.next;
      while (e2 !== b);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e2 = d.callback;
      if (null !== e2) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e2)
          throw Error(p$2(191, e2));
        e2.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e2 = lh(a), f2 = ch(d, e2);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e2);
  null !== b && (mh(b, a, e2, d), eh(b, a, e2));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e2 = lh(a), f2 = ch(d, e2);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e2);
  null !== b && (mh(b, a, e2, d), eh(b, a, e2));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e2 = ch(c, d);
  e2.tag = 2;
  void 0 !== b && null !== b && (e2.callback = b);
  b = dh(a, e2, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e2, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e2, f2) : true;
}
function ph(a, b, c) {
  var d = false, e2 = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e2 = a.stateNode;
  e2.props = c;
  e2.state = a.memoizedState;
  e2.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e2.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c, e2, d), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p$2(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p$2(147, a));
      var e2 = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e2.refs;
        b2 === jh && (b2 = e2.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p$2(284));
    if (!c._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e2(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h2(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e2(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e2(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l9(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e2(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e2(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e3 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e3 ? null : h2(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e3 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e3 ? l9(a2, b2, c2, d2) : null;
        case Ha:
          return e3 = c2._init, r2(
            a2,
            b2,
            e3(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e3 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e3) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e3);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e3);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l9(b2, a2, d2, e3);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e3);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e3, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e3, g2, h3, k3) {
    for (var l10 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e3, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l10 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c(e3, u2), I && tg(e3, w2), l10;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l10 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l10;
    }
    for (u2 = d(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l10 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e3, a2);
    });
    I && tg(e3, w2);
    return l10;
  }
  function t2(e3, g2, h3, k3) {
    var l10 = Ka(h3);
    if ("function" !== typeof l10)
      throw Error(p$2(150));
    h3 = l10.call(h3);
    if (null == h3)
      throw Error(p$2(151));
    for (var u2 = l10 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e3, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l10 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e3,
        m3
      ), I && tg(e3, w2), l10;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l10 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l10;
    }
    for (m3 = d(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l10 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e3, a2);
    });
    I && tg(e3, w2);
    return l10;
  }
  function J2(a2, d2, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l10 = d2; null !== l10; ) {
              if (l10.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l10.tag) {
                    c(a2, l10.sibling);
                    d2 = e2(l10, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l10.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l10.type) {
                  c(a2, l10.sibling);
                  d2 = e2(l10, f3.props);
                  d2.ref = sh(a2, l10, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l10);
                break;
              } else
                b(a2, l10);
              l10 = l10.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d2, f3), h3.return = a2, a2 = h3);
          }
          return g(a2);
        case wa:
          a: {
            for (l10 = f3.key; null !== d2; ) {
              if (d2.key === l10)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e2(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h3);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l10 = f3._init, J2(a2, d2, l10(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h3);
      if (Ka(f3))
        return t2(a2, d2, f3, h3);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$2(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p$2(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e2, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e2);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p$2(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p$2(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = O, e2 = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g = e2.next;
      e2.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e2 = f2;
    c.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d = d.baseState;
    var h2 = g = null, k2 = null, l9 = f2;
    do {
      var m2 = l9.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l9.action, hasEagerState: l9.hasEagerState, eagerState: l9.eagerState, next: null }), d = l9.hasEagerState ? l9.eagerState : a(d, l9.action);
      else {
        var q2 = {
          lane: m2,
          action: l9.action,
          hasEagerState: l9.hasEagerState,
          eagerState: l9.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l9 = l9.next;
    } while (null !== l9 && l9 !== f2);
    null === k2 ? g = d : k2.next = h2;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    null === e2 && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
  if (null !== e2) {
    c.pending = null;
    var g = e2 = e2.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e2);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e2 = b(), f2 = !He(d.memoizedState, e2);
  f2 && (d.memoizedState = e2, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e2, b), void 0, null);
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(c, b, e2);
  }
  return e2;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e2 = ci();
  N.flags |= a;
  e2.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e2 = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e2.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e2.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e2 = L();
    mh(c, a, d, e2);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h2 = f2(g, c);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e2.next = e2, Xg(b)) : (e2.next = k2.next, k2.next = e2);
          b.interleaved = e2;
          return;
        }
      } catch (l9) {
      } finally {
      }
    c = Yg(a, b, e2, d);
    null !== c && (e2 = L(), mh(c, a, d, e2), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e2 = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p$2(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e2.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e2 = c;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e2, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e2 = b.value;
    c.payload = function() {
      return d(e2);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d.set(b, e2);
  } else
    e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
  e2.has(c) || (e2.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e2) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e2) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e2);
  d = Xh(a, b, c, d, f2, e2);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, $i(a, b, e2);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e2);
  return b.child;
}
function aj(a, b, c, d, e2) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e2);
    a = yh(c.type, null, d, b, b.mode, e2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e2);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e2);
  }
  return dj(a, b, c, d, e2);
}
function ej(a, b, c) {
  var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e2, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e2) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e2);
  c = Xh(a, b, c, d, f2, e2);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, $i(a, b, e2);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e2);
  return b.child;
}
function ij(a, b, c, d, e2) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e2);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e2), d = true;
  else if (null === a) {
    var g = b.stateNode, h2 = b.memoizedProps;
    g.props = h2;
    var k2 = g.context, l9 = c.contextType;
    "object" === typeof l9 && null !== l9 ? l9 = Vg(l9) : (l9 = Zf(c) ? Xf : H.current, l9 = Yf(b, l9));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k2 !== l9) && qh(b, g, d, l9);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e2);
    k2 = b.memoizedState;
    h2 !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h2 = $g || oh(b, c, h2, d, r2, k2, l9)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l9, d = h2) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h2 = b.memoizedProps;
    l9 = b.type === b.elementType ? h2 : Lg(b.type, h2);
    g.props = l9;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e2);
    var n2 = b.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l9 = $g || oh(b, c, l9, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l9) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e2);
}
function kj(a, b, c, d, e2, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e2 && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h2, f2)) : Yi(a, b, h2, f2);
  b.memoizedState = d.state;
  e2 && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e2) {
  Ig();
  Jg(e2);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e2 = M.current, f2 = false, g = 0 !== (b.flags & 128), h2;
  (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e2 |= 1;
  G(M, e2 & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a, b, g, d, h2, e2, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e2, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p$2(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e2 = b.mode;
    d = qj({ mode: "visible", children: d.children }, e2, 0, null);
    f2 = Ah(f2, e2, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e2.data) {
    d = e2.nextSibling && e2.nextSibling.dataset;
    if (d)
      var h2 = d.dgst;
    d = h2;
    f2 = Error(p$2(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h2 = 0 !== (g & a.childLanes);
  if (Ug || h2) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d, a, e2, -1));
    }
    uj();
    d = Li(Error(p$2(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e2.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e2._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
}
function yj(a, b, c) {
  var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c = b.child;
        for (e2 = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e2 = c), c = c.sibling;
        c = e2;
        null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
        xj(b, false, e2, c, f2);
        break;
      case "backwards":
        c = null;
        e2 = b.child;
        for (b.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c;
          c = e2;
          e2 = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p$2(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e2 = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e2;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e2 = b.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e2 = a.memoizedProps;
  if (e2 !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e2 = Ya(a, e2);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l9 in e2)
      if (!d.hasOwnProperty(l9) && e2.hasOwnProperty(l9) && null != e2[l9])
        if ("style" === l9) {
          var h2 = e2[l9];
          for (g in h2)
            h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l9 && "children" !== l9 && "suppressContentEditableWarning" !== l9 && "suppressHydrationWarning" !== l9 && "autoFocus" !== l9 && (ea.hasOwnProperty(l9) ? f2 || (f2 = []) : (f2 = f2 || []).push(l9, null));
    for (l9 in d) {
      var k2 = d[l9];
      h2 = null != e2 ? e2[l9] : void 0;
      if (d.hasOwnProperty(l9) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l9)
          if (h2) {
            for (g in h2)
              !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l9,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l9 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l9, k2)) : "children" === l9 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l9, "" + k2) : "suppressContentEditableWarning" !== l9 && "suppressHydrationWarning" !== l9 && (ea.hasOwnProperty(l9) ? (null != k2 && "onScroll" === l9 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l9, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l9 = f2;
    if (b.updateQueue = l9)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e2 = a.child; null !== e2; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; null !== e2; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e2 = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p$2(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D(lf[e2], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e2 = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h2 = f2[g];
              "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h2,
                a
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g) && null != h2 && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e2;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e2 = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e2 = d;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D(lf[e2], a);
                e2 = d;
                break;
              case "source":
                D("error", a);
                e2 = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e2 = d;
                break;
              case "details":
                D("toggle", a);
                e2 = d;
                break;
              case "input":
                Za(a, d);
                e2 = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e2 = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e2 = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e2 = gb(a, d);
                D("invalid", a);
                break;
              default:
                e2 = d;
            }
            ub(c, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p$2(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e2 = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h2 = -1, k2 = -1, l9 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l9 === e2 && (h2 = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e2 = d = d.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e2 = e2.next;
    } while (e2 !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h2) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e2 = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e2;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e2 = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e2 = d = d.next;
        do {
          var f2 = e2, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e2 = e2.next;
        } while (e2 !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h2) {
          W(c, b, h2);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e2 = c[d];
      try {
        var f2 = a, g = b, h2 = g;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X)
          throw Error(p$2(160));
        ak(f2, g, e2);
        X = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l9) {
        W(e2, b, l9);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g);
            var l9 = vb(h2, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l9);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p$2(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l9 = U) || m2, dk(b, a), U = l9) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l9 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l9) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l9 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l9 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p$2(160));
      }
      switch (d.tag) {
        case 5:
          var e2 = d.stateNode;
          d.flags & 32 && (ob(e2, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h2 = Vj(a);
          Wj(a, h2, g);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d) {
      var g = null !== e2.memoizedState || Kj;
      if (!g) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
        h2 = Kj;
        var l9 = U;
        Kj = g;
        if ((U = k2) && !l9)
          for (V = e2; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U = l9;
      }
      lk(a);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e2 = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h2 = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h2;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l9 = b.alternate;
                if (null !== l9) {
                  var m2 = l9.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$2(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e2 = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e2, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h2 = b.sibling;
    if (null !== h2) {
      h2.return = b.return;
      V = h2;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$2(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e2 = xc(a), 0 !== e2 && (d = e2, b = Ok(a, e2)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e2 = a.current.alternate;
      if (0 === (d & 30) && !Pk(e2) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e2;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e2 = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e2 && (e2 = g);
            d &= ~f2;
          }
          d = e2;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e2 = c[d], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p$2(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e2 = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e2;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e2 = d.queue;
          null !== e2 && (e2.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h2 = c, k2 = b;
        b = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l9 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h2, f2, b);
            y2.mode & 1 && Ti(f2, l9, b);
            b = y2;
            k2 = l9;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l9, b);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h2, f2, b);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h2, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a, e2);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p$2(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e2, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$2(327));
  c = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h2;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$2(331));
        var e2 = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l9 = h2[k2];
                for (V = l9; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l9) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                if (h2 === g) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c = e2.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e2 = Yf(b, H.current);
      Tg(b, c);
      e2 = Xh(null, b, d, a, e2, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b), e2.updater = nh, b.stateNode = e2, e2._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e2, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e2 = d._init;
        d = e2(d._payload);
        b.type = d;
        e2 = b.tag = $k(d);
        a = Lg(d, a);
        switch (e2) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p$2(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), dj(a, b, d, e2, c);
    case 1:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), ij(a, b, d, e2, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p$2(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e2 = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e2 = Ki(Error(p$2(423)), b);
            b = mj(a, b, d, c, e2);
            break a;
          } else if (d !== e2) {
            e2 = Ki(Error(p$2(424)), b);
            b = mj(a, b, d, c, e2);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e2) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), Zi(a, b, d, e2, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e2 = b.pendingProps;
        f2 = b.memoizedProps;
        g = e2.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e2.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l9 = f2.updateQueue;
                      if (null !== l9) {
                        l9 = l9.shared;
                        var m2 = l9.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l9.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h2.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p$2(341));
                g.lanes |= c;
                h2 = g.alternate;
                null !== h2 && (h2.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e2.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e2 = b.type, d = b.pendingProps.children, Tg(b, c), e2 = Vg(e2), d = d(e2), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e2 = Lg(d, b.pendingProps), e2 = Lg(d.type, e2), aj(a, b, d, e2, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e2), rh(b, d, e2, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p$2(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e2, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e2, f2, b);
        case za:
          g = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e2, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p$2(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e2);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e2) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e2, f2, g, h2, k2) {
  a = new bl(a, b, c, h2, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$2(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e2, f2, g, h2, k2) {
  a = cl(c, d, true, a, e2, f2, g, h2, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e2 = lh(c);
  f2 = ch(d, e2);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e2 = b.current, f2 = L(), g = lh(e2);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e2, b, g);
  null !== a && (mh(a, e2, g, f2), eh(a, e2, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p$2(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e2) {
  if (e2) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if ("function" === typeof d) {
    var h2 = d;
    d = function() {
      var a2 = hl(k2);
      h2.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e2) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = hl(g);
        h2.call(a2);
      };
    }
    gl(b, g, a, e2);
  } else
    g = rl(c, b, a, e2, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e2 = Db(d);
            if (!e2)
              throw Error(p$2(90));
            Wa(d);
            bb(d, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p$2(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p$2(299));
  var c = false, d = "", e2 = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e2);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p$2(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p$2(405));
  var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e2, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
        c,
        e2
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p$2(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$2(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$1 = reactDomExports;
{
  client.createRoot = m$1.createRoot;
  client.hydrateRoot = m$1.hydrateRoot;
}
var lib = { exports: {} };
var Modal$2 = {};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim2(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim2.isRequired = shim2;
  function getShim() {
    return shim2;
  }
  var ReactPropTypes = {
    array: shim2,
    bigint: shim2,
    bool: shim2,
    func: shim2,
    number: shim2,
    object: shim2,
    string: shim2,
    symbol: shim2,
    any: shim2,
    arrayOf: getShim,
    element: shim2,
    elementType: shim2,
    instanceOf: getShim,
    node: shim2,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes.exports;
var ModalPortal = { exports: {} };
var focusManager = {};
var tabbable = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = findTabbableDescendants;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  var DISPLAY_NONE = "none";
  var DISPLAY_CONTENTS = "contents";
  var tabbableNode = /input|select|textarea|button|object|iframe/;
  function isNotOverflowing(element, style) {
    return style.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    element.scrollWidth <= 0 && element.scrollHeight <= 0;
  }
  function hidesContents(element) {
    var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
    if (zeroSize && !element.innerHTML)
      return true;
    try {
      var style = window.getComputedStyle(element);
      var displayValue = style.getPropertyValue("display");
      return zeroSize ? displayValue !== DISPLAY_CONTENTS && isNotOverflowing(element, style) : displayValue === DISPLAY_NONE;
    } catch (exception) {
      console.warn("Failed to inspect element style");
      return false;
    }
  }
  function visible(element) {
    var parentElement = element;
    var rootNode = element.getRootNode && element.getRootNode();
    while (parentElement) {
      if (parentElement === document.body)
        break;
      if (rootNode && parentElement === rootNode)
        parentElement = rootNode.host.parentNode;
      if (hidesContents(parentElement))
        return false;
      parentElement = parentElement.parentNode;
    }
    return true;
  }
  function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
  }
  function tabbable2(element) {
    var tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null)
      tabIndex = void 0;
    var isTabIndexNaN = isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
  }
  function findTabbableDescendants(element) {
    var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function(finished, el2) {
      return finished.concat(!el2.shadowRoot ? [el2] : findTabbableDescendants(el2.shadowRoot));
    }, []);
    return descendants.filter(tabbable2);
  }
  module.exports = exports["default"];
})(tabbable, tabbable.exports);
var tabbableExports = tabbable.exports;
Object.defineProperty(focusManager, "__esModule", {
  value: true
});
focusManager.resetState = resetState$4;
focusManager.log = log$4;
focusManager.handleBlur = handleBlur;
focusManager.handleFocus = handleFocus;
focusManager.markForFocusLater = markForFocusLater;
focusManager.returnFocus = returnFocus;
focusManager.popWithoutFocus = popWithoutFocus;
focusManager.setupScopedFocus = setupScopedFocus;
focusManager.teardownScopedFocus = teardownScopedFocus;
var _tabbable = tabbableExports;
var _tabbable2 = _interopRequireDefault$4(_tabbable);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;
function resetState$4() {
  focusLaterElements = [];
}
function log$4() {
}
function handleBlur() {
  needToFocus = true;
}
function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    setTimeout(function() {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el2 = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el2.focus();
    }, 0);
  }
}
function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll });
    }
    return;
  } catch (e2) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}
function setupScopedFocus(element) {
  modalElement = element;
  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}
function teardownScopedFocus() {
  modalElement = null;
  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}
var scopeTab = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = scopeTab2;
  var _tabbable3 = tabbableExports;
  var _tabbable22 = _interopRequireDefault2(_tabbable3);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getActiveElement() {
    var el2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return el2.activeElement.shadowRoot ? getActiveElement(el2.activeElement.shadowRoot) : el2.activeElement;
  }
  function scopeTab2(node, event) {
    var tabbable2 = (0, _tabbable22.default)(node);
    if (!tabbable2.length) {
      event.preventDefault();
      return;
    }
    var target = void 0;
    var shiftKey = event.shiftKey;
    var head = tabbable2[0];
    var tail = tabbable2[tabbable2.length - 1];
    var activeElement = getActiveElement();
    if (node === activeElement) {
      if (!shiftKey)
        return;
      target = tail;
    }
    if (tail === activeElement && !shiftKey) {
      target = head;
    }
    if (head === activeElement && shiftKey) {
      target = tail;
    }
    if (target) {
      event.preventDefault();
      target.focus();
      return;
    }
    var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
    var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (!isSafariDesktop)
      return;
    var x2 = tabbable2.indexOf(activeElement);
    if (x2 > -1) {
      x2 += shiftKey ? -1 : 1;
    }
    target = tabbable2[x2];
    if (typeof target === "undefined") {
      event.preventDefault();
      target = shiftKey ? tail : head;
      target.focus();
      return;
    }
    event.preventDefault();
    target.focus();
  }
  module.exports = exports["default"];
})(scopeTab, scopeTab.exports);
var scopeTabExports = scopeTab.exports;
var ariaAppHider$1 = {};
var warning = function() {
};
var warning_1 = warning;
var safeHTMLElement = {};
var exenv = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(module) {
  (function() {
    var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM && !!window.screen
    };
    if (module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  })();
})(exenv);
var exenvExports = exenv.exports;
Object.defineProperty(safeHTMLElement, "__esModule", {
  value: true
});
safeHTMLElement.canUseDOM = safeHTMLElement.SafeNodeList = safeHTMLElement.SafeHTMLCollection = void 0;
var _exenv = exenvExports;
var _exenv2 = _interopRequireDefault$3(_exenv);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var EE = _exenv2.default;
var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
safeHTMLElement.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
safeHTMLElement.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
safeHTMLElement.canUseDOM = EE.canUseDOM;
safeHTMLElement.default = SafeHTMLElement;
Object.defineProperty(ariaAppHider$1, "__esModule", {
  value: true
});
ariaAppHider$1.resetState = resetState$3;
ariaAppHider$1.log = log$3;
ariaAppHider$1.assertNodeList = assertNodeList;
ariaAppHider$1.setElement = setElement;
ariaAppHider$1.validateElement = validateElement;
ariaAppHider$1.hide = hide;
ariaAppHider$1.show = show;
ariaAppHider$1.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
var _warning = warning_1;
var _warning2 = _interopRequireDefault$2(_warning);
var _safeHTMLElement$1 = safeHTMLElement;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var globalElement = null;
function resetState$3() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function(element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function(element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}
function log$3() {
}
function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}
function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement$1.canUseDOM) {
    var el2 = document.querySelectorAll(useElement);
    assertNodeList(el2, useElement);
    useElement = el2;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}
function validateElement(appElement) {
  var el2 = appElement || globalElement;
  if (el2) {
    return Array.isArray(el2) || el2 instanceof HTMLCollection || el2 instanceof NodeList ? el2 : [el2];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
    return [];
  }
}
function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = void 0;
  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el2 = _step.value;
      el2.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = void 0;
  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el2 = _step2.value;
      el2.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
function documentNotReadyOrSSRTesting() {
  globalElement = null;
}
var classList = {};
Object.defineProperty(classList, "__esModule", {
  value: true
});
classList.resetState = resetState$2;
classList.log = log$2;
var htmlClassList = {};
var docBodyClassList = {};
function removeClass(at, cls) {
  at.classList.remove(cls);
}
function resetState$2() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }
  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }
  htmlClassList = {};
  docBodyClassList = {};
}
function log$2() {
}
var incrementReference = function incrementReference2(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};
var decrementReference = function decrementReference2(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};
var trackClass = function trackClass2(classListRef, poll, classes) {
  classes.forEach(function(className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};
var untrackClass = function untrackClass2(classListRef, poll, classes) {
  classes.forEach(function(className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};
classList.add = function add2(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
classList.remove = function remove2(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
var portalOpenInstances$1 = {};
Object.defineProperty(portalOpenInstances$1, "__esModule", {
  value: true
});
portalOpenInstances$1.log = log$1;
portalOpenInstances$1.resetState = resetState$1;
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var PortalOpenInstances = function PortalOpenInstances2() {
  var _this = this;
  _classCallCheck$1(this, PortalOpenInstances2);
  this.register = function(openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };
  this.deregister = function(openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };
  this.subscribe = function(callback) {
    _this.subscribers.push(callback);
  };
  this.emit = function(eventType) {
    _this.subscribers.forEach(function(subscriber) {
      return subscriber(
        eventType,
        // shallow copy to avoid accidental mutation
        _this.openInstances.slice()
      );
    });
  };
  this.openInstances = [];
  this.subscribers = [];
};
var portalOpenInstances = new PortalOpenInstances();
function log$1() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function(p2) {
    return console.log(p2);
  });
  console.log("end portalOpenInstances ----------");
}
function resetState$1() {
  portalOpenInstances = new PortalOpenInstances();
}
portalOpenInstances$1.default = portalOpenInstances;
var bodyTrap$1 = {};
Object.defineProperty(bodyTrap$1, "__esModule", {
  value: true
});
bodyTrap$1.resetState = resetState;
bodyTrap$1.log = log;
var _portalOpenInstances = portalOpenInstances$1;
var _portalOpenInstances2 = _interopRequireDefault$1(_portalOpenInstances);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var before = void 0, after = void 0, instances = [];
function resetState() {
  var _arr = [before, after];
  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item)
      continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check = item || {};
    console.log(check.nodeName, check.className, check.id);
  }
  console.log("edn bodyTrap ----------");
}
function focusContent() {
  if (instances.length === 0) {
    return;
  }
  instances[instances.length - 1].focusContent();
}
function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }
  instances = openInstances;
  if (instances.length > 0) {
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}
_portalOpenInstances2.default.subscribe(bodyTrap);
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var _createClass2 = /* @__PURE__ */ function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _react3 = reactExports;
  var _propTypes3 = propTypesExports;
  var _propTypes22 = _interopRequireDefault2(_propTypes3);
  var _focusManager = focusManager;
  var focusManager$1 = _interopRequireWildcard2(_focusManager);
  var _scopeTab = scopeTabExports;
  var _scopeTab2 = _interopRequireDefault2(_scopeTab);
  var _ariaAppHider2 = ariaAppHider$1;
  var ariaAppHider2 = _interopRequireWildcard2(_ariaAppHider2);
  var _classList = classList;
  var classList$1 = _interopRequireWildcard2(_classList);
  var _safeHTMLElement3 = safeHTMLElement;
  var _safeHTMLElement22 = _interopRequireDefault2(_safeHTMLElement3);
  var _portalOpenInstances3 = portalOpenInstances$1;
  var _portalOpenInstances22 = _interopRequireDefault2(_portalOpenInstances3);
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn2(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var CLASS_NAMES = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  };
  var isTabKey = function isTabKey2(event) {
    return event.code === "Tab" || event.keyCode === 9;
  };
  var isEscKey = function isEscKey2(event) {
    return event.code === "Escape" || event.keyCode === 27;
  };
  var ariaHiddenInstances = 0;
  var ModalPortal2 = function(_Component) {
    _inherits2(ModalPortal22, _Component);
    function ModalPortal22(props) {
      _classCallCheck2(this, ModalPortal22);
      var _this = _possibleConstructorReturn2(this, (ModalPortal22.__proto__ || Object.getPrototypeOf(ModalPortal22)).call(this, props));
      _this.setOverlayRef = function(overlay) {
        _this.overlay = overlay;
        _this.props.overlayRef && _this.props.overlayRef(overlay);
      };
      _this.setContentRef = function(content) {
        _this.content = content;
        _this.props.contentRef && _this.props.contentRef(content);
      };
      _this.afterClose = function() {
        var _this$props = _this.props, appElement = _this$props.appElement, ariaHideApp = _this$props.ariaHideApp, htmlOpenClassName = _this$props.htmlOpenClassName, bodyOpenClassName2 = _this$props.bodyOpenClassName, parentSelector2 = _this$props.parentSelector;
        var parentDocument = parentSelector2 && parentSelector2().ownerDocument || document;
        bodyOpenClassName2 && classList$1.remove(parentDocument.body, bodyOpenClassName2);
        htmlOpenClassName && classList$1.remove(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);
        if (ariaHideApp && ariaHiddenInstances > 0) {
          ariaHiddenInstances -= 1;
          if (ariaHiddenInstances === 0) {
            ariaAppHider2.show(appElement);
          }
        }
        if (_this.props.shouldFocusAfterRender) {
          if (_this.props.shouldReturnFocusAfterClose) {
            focusManager$1.returnFocus(_this.props.preventScroll);
            focusManager$1.teardownScopedFocus();
          } else {
            focusManager$1.popWithoutFocus();
          }
        }
        if (_this.props.onAfterClose) {
          _this.props.onAfterClose();
        }
        _portalOpenInstances22.default.deregister(_this);
      };
      _this.open = function() {
        _this.beforeOpen();
        if (_this.state.afterOpen && _this.state.beforeClose) {
          clearTimeout(_this.closeTimer);
          _this.setState({ beforeClose: false });
        } else {
          if (_this.props.shouldFocusAfterRender) {
            focusManager$1.setupScopedFocus(_this.node);
            focusManager$1.markForFocusLater();
          }
          _this.setState({ isOpen: true }, function() {
            _this.openAnimationFrame = requestAnimationFrame(function() {
              _this.setState({ afterOpen: true });
              if (_this.props.isOpen && _this.props.onAfterOpen) {
                _this.props.onAfterOpen({
                  overlayEl: _this.overlay,
                  contentEl: _this.content
                });
              }
            });
          });
        }
      };
      _this.close = function() {
        if (_this.props.closeTimeoutMS > 0) {
          _this.closeWithTimeout();
        } else {
          _this.closeWithoutTimeout();
        }
      };
      _this.focusContent = function() {
        return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
      };
      _this.closeWithTimeout = function() {
        var closesAt = Date.now() + _this.props.closeTimeoutMS;
        _this.setState({ beforeClose: true, closesAt }, function() {
          _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
        });
      };
      _this.closeWithoutTimeout = function() {
        _this.setState({
          beforeClose: false,
          isOpen: false,
          afterOpen: false,
          closesAt: null
        }, _this.afterClose);
      };
      _this.handleKeyDown = function(event) {
        if (isTabKey(event)) {
          (0, _scopeTab2.default)(_this.content, event);
        }
        if (_this.props.shouldCloseOnEsc && isEscKey(event)) {
          event.stopPropagation();
          _this.requestClose(event);
        }
      };
      _this.handleOverlayOnClick = function(event) {
        if (_this.shouldClose === null) {
          _this.shouldClose = true;
        }
        if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
          if (_this.ownerHandlesClose()) {
            _this.requestClose(event);
          } else {
            _this.focusContent();
          }
        }
        _this.shouldClose = null;
      };
      _this.handleContentOnMouseUp = function() {
        _this.shouldClose = false;
      };
      _this.handleOverlayOnMouseDown = function(event) {
        if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
          event.preventDefault();
        }
      };
      _this.handleContentOnClick = function() {
        _this.shouldClose = false;
      };
      _this.handleContentOnMouseDown = function() {
        _this.shouldClose = false;
      };
      _this.requestClose = function(event) {
        return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
      };
      _this.ownerHandlesClose = function() {
        return _this.props.onRequestClose;
      };
      _this.shouldBeClosed = function() {
        return !_this.state.isOpen && !_this.state.beforeClose;
      };
      _this.contentHasFocus = function() {
        return document.activeElement === _this.content || _this.content.contains(document.activeElement);
      };
      _this.buildClassName = function(which, additional) {
        var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
          base: CLASS_NAMES[which],
          afterOpen: CLASS_NAMES[which] + "--after-open",
          beforeClose: CLASS_NAMES[which] + "--before-close"
        };
        var className = classNames.base;
        if (_this.state.afterOpen) {
          className = className + " " + classNames.afterOpen;
        }
        if (_this.state.beforeClose) {
          className = className + " " + classNames.beforeClose;
        }
        return typeof additional === "string" && additional ? className + " " + additional : className;
      };
      _this.attributesFromObject = function(prefix, items) {
        return Object.keys(items).reduce(function(acc, name) {
          acc[prefix + "-" + name] = items[name];
          return acc;
        }, {});
      };
      _this.state = {
        afterOpen: false,
        beforeClose: false
      };
      _this.shouldClose = null;
      _this.moveFromContentToOverlay = null;
      return _this;
    }
    _createClass2(ModalPortal22, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isOpen) {
          this.open();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.isOpen && !prevProps.isOpen) {
          this.open();
        } else if (!this.props.isOpen && prevProps.isOpen) {
          this.close();
        }
        if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
          this.focusContent();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.isOpen) {
          this.afterClose();
        }
        clearTimeout(this.closeTimer);
        cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function beforeOpen() {
        var _props = this.props, appElement = _props.appElement, ariaHideApp = _props.ariaHideApp, htmlOpenClassName = _props.htmlOpenClassName, bodyOpenClassName2 = _props.bodyOpenClassName, parentSelector2 = _props.parentSelector;
        var parentDocument = parentSelector2 && parentSelector2().ownerDocument || document;
        bodyOpenClassName2 && classList$1.add(parentDocument.body, bodyOpenClassName2);
        htmlOpenClassName && classList$1.add(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);
        if (ariaHideApp) {
          ariaHiddenInstances += 1;
          ariaAppHider2.hide(appElement);
        }
        _portalOpenInstances22.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props, id2 = _props2.id, className = _props2.className, overlayClassName = _props2.overlayClassName, defaultStyles = _props2.defaultStyles, children = _props2.children;
        var contentStyles = className ? {} : defaultStyles.content;
        var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
        if (this.shouldBeClosed()) {
          return null;
        }
        var overlayProps = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends2({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        };
        var contentProps = _extends2({
          id: id2,
          ref: this.setContentRef,
          style: _extends2({}, contentStyles, this.props.style.content),
          className: this.buildClassName("content", className),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", _extends2({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        });
        var contentElement2 = this.props.contentElement(contentProps, children);
        return this.props.overlayElement(overlayProps, contentElement2);
      }
    }]);
    return ModalPortal22;
  }(_react3.Component);
  ModalPortal2.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  };
  ModalPortal2.propTypes = {
    isOpen: _propTypes22.default.bool.isRequired,
    defaultStyles: _propTypes22.default.shape({
      content: _propTypes22.default.object,
      overlay: _propTypes22.default.object
    }),
    style: _propTypes22.default.shape({
      content: _propTypes22.default.object,
      overlay: _propTypes22.default.object
    }),
    className: _propTypes22.default.oneOfType([_propTypes22.default.string, _propTypes22.default.object]),
    overlayClassName: _propTypes22.default.oneOfType([_propTypes22.default.string, _propTypes22.default.object]),
    parentSelector: _propTypes22.default.func,
    bodyOpenClassName: _propTypes22.default.string,
    htmlOpenClassName: _propTypes22.default.string,
    ariaHideApp: _propTypes22.default.bool,
    appElement: _propTypes22.default.oneOfType([_propTypes22.default.instanceOf(_safeHTMLElement22.default), _propTypes22.default.instanceOf(_safeHTMLElement3.SafeHTMLCollection), _propTypes22.default.instanceOf(_safeHTMLElement3.SafeNodeList), _propTypes22.default.arrayOf(_propTypes22.default.instanceOf(_safeHTMLElement22.default))]),
    onAfterOpen: _propTypes22.default.func,
    onAfterClose: _propTypes22.default.func,
    onRequestClose: _propTypes22.default.func,
    closeTimeoutMS: _propTypes22.default.number,
    shouldFocusAfterRender: _propTypes22.default.bool,
    shouldCloseOnOverlayClick: _propTypes22.default.bool,
    shouldReturnFocusAfterClose: _propTypes22.default.bool,
    preventScroll: _propTypes22.default.bool,
    role: _propTypes22.default.string,
    contentLabel: _propTypes22.default.string,
    aria: _propTypes22.default.object,
    data: _propTypes22.default.object,
    children: _propTypes22.default.node,
    shouldCloseOnEsc: _propTypes22.default.bool,
    overlayRef: _propTypes22.default.func,
    contentRef: _propTypes22.default.func,
    id: _propTypes22.default.string,
    overlayElement: _propTypes22.default.func,
    contentElement: _propTypes22.default.func,
    testId: _propTypes22.default.string
  };
  exports.default = ModalPortal2;
  module.exports = exports["default"];
})(ModalPortal, ModalPortal.exports);
var ModalPortalExports = ModalPortal.exports;
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
const reactLifecyclesCompat_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill
}, Symbol.toStringTag, { value: "Module" }));
const require$$6 = /* @__PURE__ */ getAugmentedNamespace(reactLifecyclesCompat_es);
Object.defineProperty(Modal$2, "__esModule", {
  value: true
});
Modal$2.bodyOpenClassName = Modal$2.portalClassName = void 0;
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = /* @__PURE__ */ function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = reactExports;
var _react2 = _interopRequireDefault(_react);
var _reactDom = reactDomExports;
var _reactDom2 = _interopRequireDefault(_reactDom);
var _propTypes = propTypesExports;
var _propTypes2 = _interopRequireDefault(_propTypes);
var _ModalPortal = ModalPortalExports;
var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
var _ariaAppHider = ariaAppHider$1;
var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
var _safeHTMLElement = safeHTMLElement;
var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
var _reactLifecyclesCompat = require$$6;
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var portalClassName = Modal$2.portalClassName = "ReactModalPortal";
var bodyOpenClassName = Modal$2.bodyOpenClassName = "ReactModal__Body--open";
var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== void 0;
var createHTMLElement = function createHTMLElement2(name) {
  return document.createElement(name);
};
var getCreatePortal = function getCreatePortal2() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};
function getParentElement(parentSelector2) {
  return parentSelector2();
}
var Modal$1 = function(_Component) {
  _inherits(Modal2, _Component);
  function Modal2() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, Modal2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal2.__proto__ || Object.getPrototypeOf(Modal2)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function() {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
      }
    }, _this.portalRef = function(ref) {
      _this.portal = ref;
    }, _this.renderPortal = function(props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal2.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  _createClass(Modal2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM)
        return;
      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;
      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent, nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM)
        return;
      var _props = this.props, isOpen = _props.isOpen, portalClassName2 = _props.portalClassName;
      if (prevProps.portalClassName !== portalClassName2) {
        this.node.className = portalClassName2;
      }
      var prevParent = snapshot.prevParent, nextParent = snapshot.nextParent;
      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }
      if (!prevProps.isOpen && !isOpen)
        return;
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal)
        return;
      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }
        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }
      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }
      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal2.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]);
  return Modal2;
}(_react.Component);
Modal$1.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal$1.defaultProps = {
  isOpen: false,
  portalClassName,
  bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal$1.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, _reactLifecyclesCompat.polyfill)(Modal$1);
Modal$2.default = Modal$1;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Modal = Modal$2;
  var _Modal2 = _interopRequireDefault2(_Modal);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = _Modal2.default;
  module.exports = exports["default"];
})(lib, lib.exports);
var libExports = lib.exports;
const Modal = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
function makeTypeChecker(tabsRole) {
  return (element) => !!element.type && element.type.tabsRole === tabsRole;
}
const isTab = makeTypeChecker("Tab");
const isTabList = makeTypeChecker("TabList");
const isTabPanel = makeTypeChecker("TabPanel");
function isTabChild(child) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}
function deepMap(children, callback) {
  return reactExports.Children.map(children, (child) => {
    if (child === null)
      return null;
    if (isTabChild(child)) {
      return callback(child);
    }
    if (child.props && child.props.children && typeof child.props.children === "object") {
      return reactExports.cloneElement(child, { ...child.props, children: deepMap(child.props.children, callback) });
    }
    return child;
  });
}
function deepForEach(children, callback) {
  return reactExports.Children.forEach(children, (child) => {
    if (child === null)
      return;
    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === "object") {
      if (isTabList(child))
        callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}
function r$2(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2)) {
      var o = e2.length;
      for (t2 = 0; t2 < o; t2++)
        e2[t2] && (f2 = r$2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else
      for (f2 in e2)
        e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++)
    (e2 = arguments[f2]) && (t2 = r$2(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function getTabsCount(children) {
  let tabCount = 0;
  deepForEach(children, (child) => {
    if (isTab(child))
      tabCount++;
  });
  return tabCount;
}
function isNode(node) {
  return node && "getAttribute" in node;
}
function isTabNode(node) {
  return isNode(node) && node.getAttribute("data-rttab");
}
function isTabDisabled(node) {
  return isNode(node) && node.getAttribute("aria-disabled") === "true";
}
let canUseActiveElement;
function determineCanUseActiveElement(environment) {
  const env = environment || (typeof window !== "undefined" ? window : void 0);
  try {
    canUseActiveElement = !!(typeof env !== "undefined" && env.document && env.document.activeElement);
  } catch (e2) {
    canUseActiveElement = false;
  }
}
const defaultProps$4 = { className: "react-tabs", focus: false };
const UncontrolledTabs = (props) => {
  let tabNodes = reactExports.useRef([]);
  let tabIds = reactExports.useRef([]);
  const ref = reactExports.useRef();
  function setSelected(index, event) {
    if (index < 0 || index >= getTabsCount$1())
      return;
    const { onSelect: onSelect2, selectedIndex: selectedIndex2 } = props;
    onSelect2(index, selectedIndex2, event);
  }
  function getNextTab(index) {
    const count = getTabsCount$1();
    for (let i = index + 1; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    for (let i = 0; i < index; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getPrevTab(index) {
    let i = index;
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    i = getTabsCount$1();
    while (i-- > index) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getFirstTab() {
    const count = getTabsCount$1();
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getLastTab() {
    let i = getTabsCount$1();
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getTabsCount$1() {
    const { children: children2 } = props;
    return getTabsCount(children2);
  }
  function getTab(index) {
    return tabNodes.current[`tabs-${index}`];
  }
  function getChildren() {
    let index = 0;
    const { children: children2, disabledTabClassName: disabledTabClassName2, focus: focus2, forceRenderTabPanel: forceRenderTabPanel2, selectedIndex: selectedIndex2, selectedTabClassName: selectedTabClassName2, selectedTabPanelClassName: selectedTabPanelClassName2, environment: environment2 } = props;
    tabIds.current = tabIds.current || [];
    let diff = tabIds.current.length - getTabsCount$1();
    const id2 = reactExports.useId();
    while (diff++ < 0) {
      tabIds.current.push(`${id2}${tabIds.current.length}`);
    }
    return deepMap(children2, (child) => {
      let result = child;
      if (isTabList(child)) {
        let listIndex = 0;
        let wasTabFocused = false;
        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment2);
        }
        const env = environment2 || (typeof window !== "undefined" ? window : void 0);
        if (canUseActiveElement && env) {
          wasTabFocused = React.Children.toArray(child.props.children).filter(isTab).some((tab, i) => env.document.activeElement === getTab(i));
        }
        result = reactExports.cloneElement(child, { children: deepMap(child.props.children, (tab) => {
          const key = `tabs-${listIndex}`;
          const selected = selectedIndex2 === listIndex;
          const props2 = { tabRef: (node) => {
            tabNodes.current[key] = node;
          }, id: tabIds.current[listIndex], selected, focus: selected && (focus2 || wasTabFocused) };
          if (selectedTabClassName2)
            props2.selectedClassName = selectedTabClassName2;
          if (disabledTabClassName2)
            props2.disabledClassName = disabledTabClassName2;
          listIndex++;
          return reactExports.cloneElement(tab, props2);
        }) });
      } else if (isTabPanel(child)) {
        const props2 = { id: tabIds.current[index], selected: selectedIndex2 === index };
        if (forceRenderTabPanel2)
          props2.forceRender = forceRenderTabPanel2;
        if (selectedTabPanelClassName2)
          props2.selectedClassName = selectedTabPanelClassName2;
        index++;
        result = reactExports.cloneElement(child, props2);
      }
      return result;
    });
  }
  function handleKeyDown(e2) {
    const { direction, disableUpDownKeys: disableUpDownKeys2, disableLeftRightKeys: disableLeftRightKeys2 } = props;
    if (isTabFromContainer(e2.target)) {
      let { selectedIndex: index } = props;
      let preventDefault = false;
      let useSelectedIndex = false;
      if (e2.code === "Space" || e2.keyCode === 32 || e2.code === "Enter" || e2.keyCode === 13) {
        preventDefault = true;
        useSelectedIndex = false;
        handleClick(e2);
      }
      if (!disableLeftRightKeys2 && (e2.keyCode === 37 || e2.code === "ArrowLeft") || !disableUpDownKeys2 && (e2.keyCode === 38 || e2.code === "ArrowUp")) {
        if (direction === "rtl") {
          index = getNextTab(index);
        } else {
          index = getPrevTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (!disableLeftRightKeys2 && (e2.keyCode === 39 || e2.code === "ArrowRight") || !disableUpDownKeys2 && (e2.keyCode === 40 || e2.code === "ArrowDown")) {
        if (direction === "rtl") {
          index = getPrevTab(index);
        } else {
          index = getNextTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e2.keyCode === 35 || e2.code === "End") {
        index = getLastTab();
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e2.keyCode === 36 || e2.code === "Home") {
        index = getFirstTab();
        preventDefault = true;
        useSelectedIndex = true;
      }
      if (preventDefault) {
        e2.preventDefault();
      }
      if (useSelectedIndex) {
        setSelected(index, e2);
      }
    }
  }
  function handleClick(e2) {
    let node = e2.target;
    do {
      if (isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return;
        }
        const index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);
        setSelected(index, e2);
        return;
      }
    } while ((node = node.parentNode) != null);
  }
  function isTabFromContainer(node) {
    if (!isTabNode(node)) {
      return false;
    }
    let nodeAncestor = node.parentElement;
    do {
      if (nodeAncestor === ref.current)
        return true;
      if (nodeAncestor.getAttribute("data-rttabs"))
        break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);
    return false;
  }
  const { children, className, disabledTabClassName, domRef, focus, forceRenderTabPanel, onSelect, selectedIndex, selectedTabClassName, selectedTabPanelClassName, environment, disableUpDownKeys, disableLeftRightKeys, ...attributes } = { ...defaultProps$4, ...props };
  return React.createElement("div", Object.assign({}, attributes, { className: clsx(className), onClick: handleClick, onKeyDown: handleKeyDown, ref: (node) => {
    ref.current = node;
    if (domRef)
      domRef(node);
  }, "data-rttabs": true }), getChildren());
};
UncontrolledTabs.propTypes = {};
const MODE_CONTROLLED = 0;
const MODE_UNCONTROLLED = 1;
const defaultProps$3 = { defaultFocus: false, focusTabOnClick: true, forceRenderTabPanel: false, selectedIndex: null, defaultIndex: null, environment: null, disableUpDownKeys: false, disableLeftRightKeys: false };
const getModeFromProps = (props) => {
  return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};
const Tabs = (props) => {
  const { children, defaultFocus, defaultIndex, focusTabOnClick, onSelect, ...attributes } = { ...defaultProps$3, ...props };
  const [focus, setFocus] = reactExports.useState(defaultFocus);
  const [mode] = reactExports.useState(getModeFromProps(attributes));
  const [selectedIndex, setSelectedIndex] = reactExports.useState(mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null);
  reactExports.useEffect(() => {
    setFocus(false);
  }, []);
  if (mode === MODE_UNCONTROLLED) {
    const tabsCount = getTabsCount(children);
    reactExports.useEffect(() => {
      if (selectedIndex != null) {
        const maxTabIndex = Math.max(0, tabsCount - 1);
        setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
      }
    }, [tabsCount]);
  }
  const handleSelected = (index, last, event) => {
    if (typeof onSelect === "function") {
      if (onSelect(index, last, event) === false)
        return;
    }
    if (focusTabOnClick) {
      setFocus(true);
    }
    if (mode === MODE_UNCONTROLLED) {
      setSelectedIndex(index);
    }
  };
  let subProps = { ...props, ...attributes };
  subProps.focus = focus;
  subProps.onSelect = handleSelected;
  if (selectedIndex != null) {
    subProps.selectedIndex = selectedIndex;
  }
  delete subProps.defaultFocus;
  delete subProps.defaultIndex;
  delete subProps.focusTabOnClick;
  return React.createElement(UncontrolledTabs, subProps, children);
};
Tabs.propTypes = {};
Tabs.tabsRole = "Tabs";
const defaultProps$2 = { className: "react-tabs__tab-list" };
const TabList = (props) => {
  const { children, className, ...attributes } = { ...defaultProps$2, ...props };
  return React.createElement("ul", Object.assign({}, attributes, { className: clsx(className), role: "tablist" }), children);
};
TabList.tabsRole = "TabList";
TabList.propTypes = {};
const DEFAULT_CLASS$1 = "react-tabs__tab";
const defaultProps$1 = { className: DEFAULT_CLASS$1, disabledClassName: `${DEFAULT_CLASS$1}--disabled`, focus: false, id: null, selected: false, selectedClassName: `${DEFAULT_CLASS$1}--selected` };
const Tab = (props) => {
  let nodeRef = reactExports.useRef();
  const { children, className, disabled, disabledClassName, focus, id: id2, selected, selectedClassName, tabIndex, tabRef, ...attributes } = { ...defaultProps$1, ...props };
  reactExports.useEffect(() => {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);
  return React.createElement("li", Object.assign({}, attributes, { className: clsx(className, { [selectedClassName]: selected, [disabledClassName]: disabled }), ref: (node) => {
    nodeRef.current = node;
    if (tabRef)
      tabRef(node);
  }, role: "tab", id: `tab${id2}`, "aria-selected": selected ? "true" : "false", "aria-disabled": disabled ? "true" : "false", "aria-controls": `panel${id2}`, tabIndex: tabIndex || (selected ? "0" : null), "data-rttab": true }), children);
};
Tab.propTypes = {};
Tab.tabsRole = "Tab";
const DEFAULT_CLASS = "react-tabs__tab-panel";
const defaultProps = { className: DEFAULT_CLASS, forceRender: false, selectedClassName: `${DEFAULT_CLASS}--selected` };
const TabPanel = (props) => {
  const { children, className, forceRender, id: id2, selected, selectedClassName, ...attributes } = { ...defaultProps, ...props };
  return React.createElement("div", Object.assign({}, attributes, { className: clsx(className, { [selectedClassName]: selected }), role: "tabpanel", id: `panel${id2}`, "aria-labelledby": `tab${id2}` }), forceRender || selected ? children : null);
};
TabPanel.tabsRole = "TabPanel";
TabPanel.propTypes = {};
var define_import_meta_env_default$2 = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((define_import_meta_env_default$2 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production_min = {};
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = reactExports;
function h$1(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
function q$1(a, b) {
  var d = b(), f2 = l({ inst: { value: d, getSnapshot: b } }), c = f2[0].inst, g = f2[1];
  n$1(function() {
    c.value = d;
    c.getSnapshot = b;
    r$1(c) && g({ inst: c });
  }, [a, d, b]);
  m(function() {
    r$1(c) && g({ inst: c });
    return a(function() {
      r$1(c) && g({ inst: c });
    });
  }, [a]);
  p$1(d);
  return d;
}
function r$1(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var d = b();
    return !k(a, d);
  } catch (f2) {
    return true;
  }
}
function t$1(a, b) {
  return b();
}
var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$1;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h = reactExports, n = shimExports;
function p(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e2, l9, g) {
  var c = t(null);
  if (null === c.current) {
    var f2 = { hasValue: false, value: null };
    c.current = f2;
  } else
    f2 = c.current;
  c = v(function() {
    function a2(a3) {
      if (!c2) {
        c2 = true;
        d2 = a3;
        a3 = l9(a3);
        if (void 0 !== g && f2.hasValue) {
          var b2 = f2.value;
          if (g(b2, a3))
            return k2 = b2;
        }
        return k2 = a3;
      }
      b2 = k2;
      if (q(d2, a3))
        return b2;
      var e3 = l9(a3);
      if (void 0 !== g && g(b2, e3))
        return b2;
      d2 = a3;
      return k2 = e3;
    }
    var c2 = false, d2, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a2(b());
    }, null === m2 ? void 0 : function() {
      return a2(m2());
    }];
  }, [b, e2, l9, g]);
  var d = r(a, c[0], c[1]);
  u(function() {
    f2.hasValue = true;
    f2.value = d;
  }, [d]);
  w(d);
  return d;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
var define_import_meta_env_default$1 = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
const { useDebugValue } = React;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore(api, selector = identity, equalityFn) {
  if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var define_import_meta_env_default = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e2) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? void 0 : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? void 0 : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e2) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e2);
      }
    };
  }
};
const oldImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (e2) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e2) => {
      errorInSync = e2;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb2) => cb2(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb2) => cb2(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb2) => {
      hydrationListeners.add(cb2);
      return () => {
        hydrationListeners.delete(cb2);
      };
    },
    onFinishHydration: (cb2) => {
      finishHydrationListeners.add(cb2);
      return () => {
        finishHydrationListeners.delete(cb2);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const newImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb2) => {
      var _a2;
      return cb2((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb2) => cb2(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb2) => {
      hydrationListeners.add(cb2);
      return () => {
        hydrationListeners.delete(cb2);
      };
    },
    onFinishHydration: (cb2) => {
      finishHydrationListeners.add(cb2);
      return () => {
        finishHydrationListeners.delete(cb2);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((define_import_meta_env_default ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
const persist = persistImpl;
const SelectableRegions = [
  "",
  "Main Isle",
  "Krem Isle",
  "Outer Isles",
  "Japes-Forest Lobbies",
  "Caves-Helm Lobbies",
  "Rareware Banana Room",
  "Isles Shops",
  "Japes Lowlands",
  "Japes Hillside",
  "Japes Caves And Mines",
  "Hive Tunnel Area",
  "Stormy Tunnel Area",
  "Japes Medal Rewards",
  "Japes Shops",
  "Various Aztec Tunnels",
  "Aztec Oasis And Totem Area",
  "Tiny Temple",
  "Llama Temple",
  "5 Door Temple",
  "Aztec Medal Rewards",
  "Aztec Shops",
  "Factory Start",
  "Storage And Arcade",
  "Testing Area",
  "R&D Area",
  "Production Room",
  "Factory Medal Rewards",
  "Factory Shops",
  "Galleon Caverns",
  "Lighthouse Area",
  "Shipyard Outskirts",
  "Treasure Room",
  "5 Door Ship",
  "Galleon Medal Rewards",
  "Galleon Shops",
  "Forest Center And Beanstalk",
  "Forest Mills",
  "Giant Mushroom Exterior",
  "Giant Mushroom Insides",
  "Owl Tree",
  "Forest Medal Rewards",
  "Forest Shops",
  "Main Caves Area",
  "Igloo Area",
  "Cabins Area",
  "Caves Medal Rewards",
  "Caves Shops",
  "Castle Surroundings",
  "Castle Underground",
  "Castle Rooms",
  "Castle Medal Rewards",
  "Castle Shops",
  "Hideout Helm",
  "Troff 'N' Scoff",
  "Jetpac"
];
const donkResetFns = /* @__PURE__ */ new Set();
const initialBarriers = {
  removeBarriers: {
    japesCoconutGates: false,
    japesHiveGate: false,
    aztecBack: false,
    aztec5DoorTemple: false,
    aztecLlamaTemple: false,
    factoryProduction: false,
    factoryTesting: false,
    galleonLighthouse: false,
    galleonOutskirts: false,
    galleonSeasick: false,
    forestBeanstalk: false,
    forestOwlTree: false,
    cavesIgloo: false
  }
};
const barrierSlice = (set) => {
  donkResetFns.add(() => set(initialBarriers));
  return {
    ...initialBarriers,
    setBarrier: (id2, val) => {
      set((state) => {
        const target = {};
        target[id2] = val;
        state = {
          ...state,
          removeBarriers: {
            ...state.removeBarriers,
            ...target
          }
        };
        return state;
      });
    }
  };
};
const initialChecks = {
  checks: {}
};
const coreSlice = (set) => {
  donkResetFns.add(() => set(initialChecks));
  return {
    ...initialChecks,
    setCheck: (id2, val) => set((state) => {
      const newKey = {};
      newKey[id2] = val;
      state = {
        ...state,
        checks: {
          ...state.checks,
          ...newKey
        }
      };
      return state;
    })
  };
};
const initialConsumables = {
  consumables: {
    bean: false,
    bananaMedals: 0,
    crowns: 0,
    rainbowCoins: 0,
    fairies: 0,
    goldBananas: 0,
    nintendoCoin: false,
    pearls: 0,
    rareCoin: false,
    chunkyBp: 0,
    diddyBp: 0,
    dkBp: 0,
    lankyBp: 0,
    tinyBp: 0
  }
};
const consumablesSlice = (set) => {
  donkResetFns.add(() => set(initialConsumables));
  return {
    ...initialConsumables,
    setConsumable: (item, val) => set((state) => {
      const newKey = {};
      newKey[item] = val;
      state = {
        ...state,
        consumables: {
          ...state.consumables,
          ...newKey
        }
      };
      return state;
    })
  };
};
const initialFastChecks = {
  fastChecks: {
    factoryArcade: false,
    galleonMermaid: false
  }
};
const fastCheckSlice = (set) => {
  donkResetFns.add(() => set(initialFastChecks));
  return {
    ...initialFastChecks,
    setFastCheck: (id2, val) => {
      set((state) => {
        const target = {};
        target[id2] = val;
        state = {
          ...state,
          fastChecks: {
            ...state.fastChecks,
            ...target
          }
        };
        return state;
      });
    }
  };
};
const initialHint = {
  foolish: {},
  hoard: {}
};
const hintSlice = (set) => {
  donkResetFns.add(() => set(initialHint));
  return {
    ...initialHint,
    setFool: (id2, region) => set((state) => {
      const newKey = {};
      newKey[id2] = region;
      state = {
        ...state,
        foolish: {
          ...state.foolish,
          ...newKey
        },
        hoard: {
          ...state.hoard
        }
      };
      delete state.hoard[id2];
      return state;
    }),
    setHoard: (id2, region) => set((state) => {
      const newKey = {};
      newKey[id2] = region;
      state = {
        ...state,
        hoard: {
          ...state.hoard,
          ...newKey
        },
        foolish: {
          ...state.foolish
        }
      };
      delete state.foolish[id2];
      return state;
    }),
    clearRegion: (id2) => set((state) => {
      state = {
        ...state,
        hoard: {
          ...state.hoard
        },
        foolish: {
          ...state.foolish
        }
      };
      delete state.hoard[id2];
      delete state.foolish[id2];
      return state;
    })
  };
};
const initialLevel = {
  level1: "",
  level2: "",
  level3: "",
  level4: "",
  level5: "",
  level6: "",
  level7: "",
  level8: "Helm",
  key1: false,
  key2: false,
  key3: false,
  key4: false,
  key5: false,
  key6: false,
  key7: false,
  key8: false
};
const levelSlice = (set) => {
  donkResetFns.add(() => set(initialLevel));
  return {
    ...initialLevel,
    setLevel: (index, name) => set((state) => {
      const newKey = {};
      newKey["level" + index] = name;
      state = {
        ...state,
        ...newKey
      };
      return state;
    }),
    setKey: (index, isSet) => set((state) => {
      const newKey = {};
      newKey["key" + index] = isSet;
      state = {
        ...state,
        ...newKey
      };
      return state;
    })
  };
};
const initialMoves = {
  moves: {
    balloon: false,
    barrel: false,
    blast: false,
    bongos: false,
    camera: false,
    charge: false,
    chunky: false,
    coconut: false,
    diddy: false,
    dive: false,
    dk: false,
    feather: false,
    gone: false,
    grab: false,
    grape: false,
    guitar: false,
    homing: false,
    hunky: false,
    lanky: false,
    mini: false,
    orange: false,
    peanut: false,
    pineapple: false,
    port: false,
    punch: false,
    rocket: false,
    sax: false,
    shockwave: false,
    slam: 0,
    sniper: false,
    spring: false,
    sprint: false,
    stand: false,
    strong: false,
    tiny: false,
    triangle: false,
    trombone: false,
    twirl: false,
    vine: false
  }
};
const moveSlice = (set) => {
  donkResetFns.add(() => set(initialMoves));
  return {
    ...initialMoves,
    setSlam: (val) => set((state) => {
      const newKey = {};
      newKey["slam"] = val;
      state = {
        ...state,
        moves: {
          ...state.moves,
          ...newKey
        }
      };
      return state;
    }),
    setMove: (item, val) => set((state) => {
      const newKey = {};
      newKey[item] = val;
      state = {
        ...state,
        moves: {
          ...state.moves,
          ...newKey
        }
      };
      return state;
    })
  };
};
const initialSettings = {
  settings: {
    isSwitchsanity: false,
    cbCount: 40,
    shuffleColoredBananas: false,
    progressiveSlams: true,
    helmAccess: 1,
    jetpacCount: 15,
    fairyCount: 5,
    bananaportOpen: 1,
    forestTime: 0,
    galleonHighTide: false,
    shuffleShops: false,
    poolShops: true,
    poolMisc: true,
    poolKeys: true,
    shuffleDirt: false,
    poolRainbowCoins: true,
    poolCrowns: true,
    poolBananaMedals: true,
    shuffleArenas: false,
    poolGoldBananas: true,
    poolToughBananas: true,
    poolBlueprints: true,
    shuffleKasplats: false,
    poolFairies: false,
    poolCrates: false,
    shuffleCrates: false,
    shuffleFairies: false,
    autoBonus: false,
    poolCompanyCoins: false,
    poolDrops: false,
    shuffleEnemies: true,
    hardShooting: false,
    openLobbies: false
  }
};
const settingSlice = (set) => {
  donkResetFns.add(() => set(initialSettings));
  return {
    ...initialSettings,
    setSetting: (id2, val) => {
      set((state) => {
        const target = {};
        target[id2] = val;
        state = {
          ...state,
          settings: {
            ...state.settings,
            ...target
          }
        };
        return state;
      });
    }
  };
};
const initialSwitches = {
  switchsanitySwitches: {
    islesAztec: 3,
    islesForest: 3,
    islesHelm: 0,
    islesMonkeyport: 0,
    islesTrombone: 2,
    japesSide: 1,
    japesHive: 3,
    japesPainting: 1,
    japesRambi: 0,
    aztecBack: 1,
    aztecBlueprint: 0,
    aztecDeadEnd: 0,
    aztecLlama1: 0,
    aztecLlama3: 3,
    aztecLlama2: 2,
    galleonCannon: 4,
    galleonLighthouse: 0,
    galleonOutskirts: 1,
    forestBean1: 3,
    forestBean2: 4,
    forestOwlTree: 2
  }
};
const switchSlice = (set) => {
  donkResetFns.add(() => set(initialSwitches));
  return {
    ...initialSwitches,
    setSwitchsanity: (id2, val) => {
      set((state) => {
        const target = {};
        target[id2] = val;
        state = {
          ...state,
          switchsanitySwitches: {
            ...state.switchsanitySwitches,
            ...target
          }
        };
        return state;
      });
    }
  };
};
const initialEndings = {
  helm1: 0,
  helm2: 0,
  helm3: 0,
  helm4: 0,
  helm5: 0,
  rool1: 0,
  rool2: 0,
  rool3: 0,
  rool4: 0,
  rool5: 0
};
const endingSlice = (set) => {
  donkResetFns.add(() => set(initialEndings));
  return {
    ...initialEndings,
    setEnd(id2, val) {
      set((state) => {
        const target = {};
        target[id2] = val;
        state = {
          ...state,
          ...target
        };
        return state;
      });
    }
  };
};
const blankPreset = (state) => {
  return {
    ...state,
    ...initialLevel,
    ...initialEndings,
    removeBarriers: {
      ...initialBarriers.removeBarriers
    },
    settings: {
      ...initialSettings.settings
    },
    switchsanitySwitches: {
      ...initialSwitches.switchsanitySwitches
    },
    checks: {
      ...initialChecks.checks
    },
    consumables: {
      ...initialConsumables.consumables
    },
    fastChecks: {
      ...initialFastChecks.fastChecks
    },
    foolish: {
      ...initialHint.foolish
    },
    hoard: {
      ...initialHint.hoard
    },
    moves: {
      ...initialMoves.moves
    }
  };
};
const beginnerPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 30,
      jetpacCount: 15,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  };
};
const season2Preset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 15,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  };
};
const sandboxPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 15,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1,
      shuffleKasplats: true
    },
    moves: {
      ...startState.moves,
      slam: 1
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key6: true,
    key7: true
  };
};
const balancedLzrPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      poolDrops: true,
      forestTime: 2,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 8,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    }
  };
};
const nsakPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      isSwitchsanity: true,
      progressiveSlams: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 40,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1,
      shuffleColoredBananas: true,
      shuffleKasplats: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  };
};
const anotherDayPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: false,
      poolShops: false,
      poolCrowns: false,
      poolBlueprints: false,
      poolBananaMedals: false,
      poolRainbowCoins: false,
      poolMisc: false,
      poolToughBananas: false,
      forestTime: 2,
      galleonHighTide: false,
      cbCount: 75,
      jetpacCount: 15,
      fairyCount: 20,
      bananaportOpen: 0,
      helmAccess: 0,
      shuffleColoredBananas: true,
      shuffleKasplats: true,
      shuffleArenas: true,
      shuffleCrates: true,
      shuffleDirt: true,
      shuffleFairies: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      barrel: true,
      orange: true,
      vine: true,
      dive: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: false,
      aztecLlamaTemple: false,
      factoryProduction: false,
      galleonOutskirts: false,
      galleonSeasick: false,
      cavesIgloo: false
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  };
};
const hitlistPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 12,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true
  };
};
const treasureHurryPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      isSwitchsanity: true,
      progressiveSlams: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      galleonHighTide: false,
      cbCount: 50,
      jetpacCount: 8,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1,
      shuffleColoredBananas: true,
      shuffleKasplats: true,
      shuffleFairies: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztecLlamaTemple: true,
      galleonOutskirts: true,
      galleonSeasick: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  };
};
const kevinPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 10,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true,
    key7: true
  };
};
const bountyHunterPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      poolDrops: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 10,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 0,
      shuffleFairies: true,
      shuffleColoredBananas: true
    },
    moves: {
      ...startState.moves
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryTesting: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true
    }
  };
};
const radicalSloPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCrowns: false,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      shuffleShops: true,
      forestTime: 2,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 8,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true
  };
};
const s3AllKeysPreset = (state) => {
  const startState = blankPreset(state);
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCrowns: false,
      poolRainbowCoins: false,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 8,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  };
};
const presetSlice = (set) => {
  return {
    setPreset(id2) {
      return set((state) => {
        switch (id2) {
          case "beginner":
            return beginnerPreset(state);
          case "s2":
            return season2Preset(state);
          case "sandbox":
            return sandboxPreset(state);
          case "balancedLzr":
            return balancedLzrPreset(state);
          case "nsak":
            return nsakPreset(state);
          case "anotherDay":
            return anotherDayPreset(state);
          case "hitlist":
            return hitlistPreset(state);
          case "treasureHurry":
            return treasureHurryPreset(state);
          case "kevin":
            return kevinPreset(state);
          case "bountyHunter":
            return bountyHunterPreset(state);
          case "radicalSlo":
            return radicalSloPreset(state);
          case "s3allKeys":
            return s3AllKeysPreset(state);
          default:
            return state;
        }
      });
    }
  };
};
const initializer = (...d) => ({
  ...coreSlice(...d),
  ...settingSlice(...d),
  ...levelSlice(...d),
  ...hintSlice(...d),
  ...moveSlice(...d),
  ...consumablesSlice(...d),
  ...switchSlice(...d),
  ...barrierSlice(...d),
  ...fastCheckSlice(...d),
  ...presetSlice(...d),
  ...endingSlice(...d)
});
const useDonkStore = create()(
  persist(initializer, {
    name: "donk-storage"
    /*,
        onRehydrateStorage: (state) => {
          console.log('hydration starts')
    
          // optional
          return (state, error): void => {
            if (error) {
              console.log('an error happened during hydration', error)
            } else {
              console.log('hydration finished')
            }
          }
        }
        */
  })
);
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size)
      return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size)
      return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const keyA of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
      return false;
    }
  }
  return true;
}
const { useRef } = React;
function useShallow(selector) {
  const prev = useRef();
  return (state) => {
    const next = selector(state);
    return shallow(prev.current, next) ? prev.current : prev.current = next;
  };
}
const useForestTime = () => useDonkStore(useShallow((state) => state.settings.forestTime));
const useGalleonTideStartHigh = () => useDonkStore(useShallow((state) => state.settings.galleonHighTide));
const useIsSwitchsanity = () => useDonkStore(useShallow((state) => state.settings.isSwitchsanity));
const useOpenLobbies = () => useDonkStore(useShallow((state) => state.settings.openLobbies));
const useHardShooting = () => useDonkStore(useShallow((state) => state.settings.hardShooting));
const useProgressiveSlams = () => useDonkStore(useShallow((state) => state.settings.progressiveSlams));
const useCbCount = () => useDonkStore(useShallow((state) => state.settings.cbCount));
const useFairyCount = () => useDonkStore(useShallow((state) => state.settings.fairyCount));
const useJetpacCount = () => useDonkStore(useShallow((state) => state.settings.jetpacCount));
const useAutoBonus = () => useDonkStore(useShallow((state) => state.settings.autoBonus));
const useBananaport = () => useDonkStore(useShallow((state) => state.settings.bananaportOpen));
const useBananaportAll = () => useBananaport() == 2;
const useHelmStartPosition = () => useDonkStore(useShallow((state) => state.settings.helmAccess));
const useShuffleCrates = () => useDonkStore(useShallow((state) => state.settings.shuffleCrates));
const usePoolShops = () => useDonkStore(useShallow((state) => state.settings.poolShops));
const usePoolToughBananas = () => useDonkStore(useShallow((state) => state.settings.poolToughBananas));
const usePoolMisc = () => useDonkStore(useShallow((state) => state.settings.poolMisc));
const usePoolBlueprints = () => useDonkStore(useShallow((state) => state.settings.poolBlueprints));
const usePoolFairies = () => useDonkStore(useShallow((state) => state.settings.poolFairies));
const usePoolDrops = () => useDonkStore(useShallow((state) => state.settings.poolDrops));
const useShuffleEnemies = () => useDonkStore(useShallow((state) => state.settings.shuffleEnemies));
const useShuffleColoredBananas = () => useDonkStore(useShallow((state) => state.settings.shuffleColoredBananas));
const usePoolKeys = () => useDonkStore(useShallow((state) => state.settings.poolKeys));
const usePoolCrates = () => useDonkStore(useShallow((state) => state.settings.poolCrates));
const usePoolRainbowCoins = () => useDonkStore(useShallow((state) => state.settings.poolRainbowCoins));
const usePoolCrowns = () => useDonkStore(useShallow((state) => state.settings.poolCrowns));
const usePoolBananaMedals = () => useDonkStore(useShallow((state) => state.settings.poolBananaMedals));
const usePoolCompanyCoins = () => useDonkStore(useShallow((state) => state.settings.poolCompanyCoins));
const useShuffleDirt = () => useDonkStore(useShallow((state) => state.settings.shuffleDirt));
const useShuffleFairies = () => useDonkStore(useShallow((state) => state.settings.shuffleFairies));
const useShuffleKasplats = () => useDonkStore(useShallow((state) => state.settings.shuffleKasplats));
const useShuffledArenas = () => useDonkStore(useShallow((state) => state.settings.shuffleArenas));
const useShuffledShops = () => useDonkStore(useShallow((state) => state.settings.shuffleShops));
const CompanyPool = ({ children }) => usePoolCompanyCoins() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const DropPool = ({ children }) => usePoolDrops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const useCurrentBananaMedalCount = () => useDonkStore(useShallow((state) => state.consumables.bananaMedals));
const useCurrentPearlCount = () => useDonkStore(useShallow((state) => state.consumables.pearls));
const useCurrentFairyCount = () => useDonkStore(useShallow((state) => state.consumables.fairies));
const useBean = () => useDonkStore(useShallow((state) => state.consumables.bean));
const useDk = () => {
  const kong = useDonkStore(useShallow((state) => state.moves.dk));
  return kong;
};
const useDiddy = () => {
  const kong = useDonkStore(useShallow((state) => state.moves.diddy));
  return kong;
};
const useLanky = () => {
  const kong = useDonkStore(useShallow((state) => state.moves.lanky));
  return kong;
};
const useTiny = () => {
  const kong = useDonkStore(useShallow((state) => state.moves.tiny));
  return kong;
};
const useChunky = () => {
  const kong = useDonkStore(useShallow((state) => state.moves.chunky));
  return kong;
};
const useAnyKong = () => {
  const dk2 = useDk();
  const diddy = useDiddy();
  const lanky = useLanky();
  const tiny = useTiny();
  const chunky = useChunky();
  return dk2 || diddy || lanky || tiny || chunky;
};
const useHighGrab = () => {
  const diddy = useDiddy();
  const lanky = useLanky();
  const tiny = useTiny();
  const chunky = useChunky();
  return (diddy || tiny) && (lanky || chunky);
};
const useCoconut = () => {
  const kong = useDk();
  const gun = useDonkStore((state) => state.moves.coconut);
  return kong && gun;
};
const usePeanut = () => {
  const kong = useDiddy();
  const gun = useDonkStore((state) => state.moves.peanut);
  return kong && gun;
};
const useGrape = () => {
  const kong = useLanky();
  const gun = useDonkStore((state) => state.moves.grape);
  return kong && gun;
};
const useFeather = () => {
  const kong = useTiny();
  const gun = useDonkStore(useShallow((state) => state.moves.feather));
  return kong && gun;
};
const usePineapple = () => {
  const kong = useChunky();
  const gun = useDonkStore((state) => state.moves.pineapple);
  return kong && gun;
};
const useAnyGun = () => {
  const dk2 = useCoconut();
  const diddy = usePeanut();
  const lanky = useGrape();
  const tiny = useFeather();
  const chunky = usePineapple();
  return dk2 || diddy || lanky || tiny || chunky;
};
const useAllGun = () => {
  const dk2 = useCoconut();
  const diddy = usePeanut();
  const lanky = useGrape();
  const tiny = useFeather();
  const chunky = usePineapple();
  return dk2 && diddy && lanky && tiny && chunky;
};
const useBongos = () => {
  const kong = useDk();
  const music = useDonkStore((state) => state.moves.bongos);
  return kong && music;
};
const useGuitar = () => {
  const kong = useDiddy();
  const music = useDonkStore((state) => state.moves.guitar);
  return kong && music;
};
const useTrombone = () => {
  const kong = useLanky();
  const music = useDonkStore((state) => state.moves.trombone);
  return kong && music;
};
const useSax = () => {
  const kong = useTiny();
  const music = useDonkStore((state) => state.moves.sax);
  return kong && music;
};
const useTriangle = () => {
  const kong = useChunky();
  const music = useDonkStore((state) => state.moves.triangle);
  return kong && music;
};
const useAnyMusic = () => {
  const dk2 = useBongos();
  const diddy = useGuitar();
  const lanky = useTrombone();
  const tiny = useSax();
  const chunky = useTriangle();
  return dk2 || diddy || lanky || tiny || chunky;
};
const useAllMusic = () => {
  const dk2 = useBongos();
  const diddy = useGuitar();
  const lanky = useTrombone();
  const tiny = useSax();
  const chunky = useTriangle();
  return dk2 && diddy && lanky && tiny && chunky;
};
const useGrab = () => {
  const kong = useDk();
  const move = useDonkStore((state) => state.moves.grab);
  return kong && move;
};
const useCharge = () => {
  const kong = useDiddy();
  const move = useDonkStore((state) => state.moves.charge);
  return kong && move;
};
const useStand = () => {
  const kong = useLanky();
  const move = useDonkStore((state) => state.moves.stand);
  return kong && move;
};
const useTwirl = () => {
  const kong = useTiny();
  const move = useDonkStore((state) => state.moves.twirl);
  return kong && move;
};
const usePunch = () => {
  const kong = useChunky();
  const move = useDonkStore((state) => state.moves.punch);
  return kong && move;
};
const useStrong = () => {
  const kong = useDk();
  const barrel = useDonkStore(useShallow((state) => state.moves.strong));
  return kong && barrel;
};
const useRocket = () => {
  const kong = useDiddy();
  const barrel = useDonkStore(useShallow((state) => state.moves.rocket));
  return kong && barrel;
};
const useSprint = () => {
  const kong = useLanky();
  const barrel = useDonkStore((state) => state.moves.sprint);
  return kong && barrel;
};
const useMini = () => {
  const kong = useTiny();
  const barrel = useDonkStore((state) => state.moves.mini);
  return kong && barrel;
};
const useHunky = () => {
  const kong = useChunky();
  const barrel = useDonkStore((state) => state.moves.hunky);
  return kong && barrel;
};
const useBlast = () => {
  const kong = useDk();
  const pad = useDonkStore((state) => state.moves.blast);
  return kong && pad;
};
const useSpring = () => {
  const kong = useDiddy();
  const pad = useDonkStore((state) => state.moves.spring);
  return kong && pad;
};
const useBalloon = () => {
  const kong = useLanky();
  const pad = useDonkStore((state) => state.moves.balloon);
  return kong && pad;
};
const useMonkeyport = () => {
  const kong = useTiny();
  const pad = useDonkStore((state) => state.moves.port);
  return kong && pad;
};
const useGone = () => {
  const kong = useChunky();
  const pad = useDonkStore((state) => state.moves.gone);
  return kong && pad;
};
const useSlam = () => {
  const slam = useDonkStore(useShallow((state) => state.moves.slam));
  return slam != 0;
};
const useSuperSlam = () => {
  const slam = useDonkStore(useShallow((state) => state.moves.slam));
  return slam > 1;
};
const useSuperDuperSlam = () => {
  const slam = useDonkStore(useShallow((state) => state.moves.slam));
  return slam > 2;
};
const useVine = () => {
  const move = useDonkStore((state) => state.moves.vine);
  return move;
};
const useDive = () => {
  const move = useDonkStore((state) => state.moves.dive);
  return move;
};
const useOrange = () => {
  const move = useDonkStore((state) => state.moves.orange);
  return move;
};
const useBarrel = () => {
  const move = useDonkStore((state) => state.moves.barrel);
  return move;
};
const useBoulderTech = () => {
  const chunky = useChunky();
  const barrel = useBarrel();
  return chunky && barrel;
};
const useSniper = () => {
  const move = useDonkStore((state) => state.moves.sniper);
  return move;
};
const useHoming = () => {
  const move = useDonkStore((state) => state.moves.homing);
  return move;
};
const useCamera = () => {
  const anyKong = useAnyKong();
  const move = useDonkStore((state) => state.moves.camera);
  return anyKong && move;
};
const useShockwave = () => {
  const anyKong = useAnyKong();
  const move = useDonkStore((state) => state.moves.shockwave);
  return anyKong && move;
};
const ArenaPool = ({ children }) => usePoolCrowns() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const logicBreak = (check) => check.in || check.out;
const useSwitchsanityMusicPad = (id2, normal) => {
  const bongos = useBongos();
  const guitar = useGuitar();
  const trombone = useTrombone();
  const sax = useSax();
  const triangle = useTriangle();
  const isSwitchsanity = useIsSwitchsanity();
  const [switches] = useDonkStore(useShallow((state) => [state.switchsanitySwitches]));
  const target = isSwitchsanity ? switches[id2] : normal;
  switch (target) {
    case 0:
      return bongos;
    case 1:
      return guitar;
    case 2:
      return trombone;
    case 3:
      return sax;
    default:
      return triangle;
  }
};
const useSwitchsanityGun = (id2, normal) => {
  const coconut = useCoconut();
  const peanut = usePeanut();
  const grape = useGrape();
  const feather = useFeather();
  const pineapple = usePineapple();
  const isSwitchsanity = useIsSwitchsanity();
  const [switches] = useDonkStore(useShallow((state) => [state.switchsanitySwitches]));
  const target = isSwitchsanity ? switches[id2] : normal;
  switch (target) {
    case 0:
      return coconut;
    case 1:
      return peanut;
    case 2:
      return grape;
    case 3:
      return feather;
    default:
      return pineapple;
  }
};
const useSwitchsanityKong = (id2, normal) => {
  const isSwitchsanity = useIsSwitchsanity();
  const [dk2, diddy, lanky, tiny, chunky, switches] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.lanky,
      state.moves.tiny,
      state.moves.chunky,
      state.switchsanitySwitches
    ])
  );
  const target = isSwitchsanity ? switches[id2] : normal;
  switch (target) {
    case 0:
      return dk2;
    case 1:
      return diddy;
    case 2:
      return lanky;
    case 3:
      return tiny;
    default:
      return chunky;
  }
};
const usePlayAztec = () => usePlayLevel("Aztec");
const useSlamAztec = () => useSlamLevel("Aztec");
const useAztecCoconutSwitch = () => useSwitchsanityGun("aztecBlueprint", 0);
const useAztecGuitarSwitch = () => useSwitchsanityMusicPad("aztecBack", 1);
const useAztecLlamaCoconutSwitch = () => useSwitchsanityGun("aztecLlama1", 0);
const useAztecLlamaGrapeSwitch = () => useSwitchsanityGun("aztecLlama2", 2);
const useAztecLlamaFeatherSwitch = () => useSwitchsanityGun("aztecLlama3", 3);
const useAztecLlamaTunnelSwitch = () => useSwitchsanityKong("aztecDeadEnd", 0);
const useAztecFront = () => {
  const aztecPlay = usePlayAztec();
  const vine = useVine();
  const twirl = useTwirl();
  return {
    in: aztecPlay && (vine || twirl),
    out: aztecPlay
  };
};
const useAztecFrontKasplat = () => {
  const aztecFront = useAztecFront();
  const kasplatSwitch = useAztecCoconutSwitch();
  return {
    in: aztecFront.in && kasplatSwitch,
    out: logicBreak(aztecFront)
  };
};
const useAztecBack = () => {
  const aztecFront = useAztecFront();
  const musicSwitch = useAztecGuitarSwitch();
  const vine = useVine();
  const rocket = useRocket();
  const warpAll = useBananaportAll();
  const [diddy, tiny, backGateOpen] = useDonkStore(
    useShallow((state) => [state.moves.diddy, state.moves.tiny, state.removeBarriers.aztecBack])
  );
  return {
    in: aztecFront.in && (backGateOpen || warpAll || (vine || rocket) && musicSwitch),
    out: logicBreak(aztecFront) && (backGateOpen || warpAll || musicSwitch && (diddy || tiny))
  };
};
const useAztecTinyTemple = () => {
  const aztecFront = useAztecFront();
  const peanut = usePeanut();
  const grape = useGrape();
  const feather = useFeather();
  const pineapple = usePineapple();
  const properGun = peanut || grape || feather || pineapple;
  return {
    in: aztecFront.in && properGun,
    out: logicBreak(aztecFront) && properGun
  };
};
const useAztecLlamaTemple = () => {
  const aztecBack = useAztecBack();
  const llama1 = useAztecLlamaCoconutSwitch();
  const llama2 = useAztecLlamaGrapeSwitch();
  const llama3 = useAztecLlamaFeatherSwitch();
  const properGun = llama1 || llama2 || llama3;
  return {
    in: aztecBack.in && properGun,
    out: logicBreak(aztecBack) && properGun
  };
};
const useAztecLlamaLava = () => {
  const llamaTemple = useAztecLlamaTemple();
  const mini = useMini();
  const warpAll = useBananaportAll();
  return {
    in: llamaTemple.in && (warpAll || mini),
    out: logicBreak(llamaTemple) && (warpAll || mini)
  };
};
const useAztecBackTunnel = () => {
  const llama = useAztecLlamaTemple();
  const canSlam = useSlamAztec();
  const slamSwitch = useAztecLlamaTunnelSwitch();
  const front = useAztecFront();
  const warpAll = useBananaportAll();
  return {
    in: front.in && warpAll || llama.in && slamSwitch && canSlam,
    out: logicBreak(front) && warpAll || logicBreak(llama) && slamSwitch && canSlam
  };
};
const useAztec5DoorTemple = () => {
  const aztecBack = useAztecBack();
  const rocket = useRocket();
  const canSlam = useSlamAztec();
  const peanut = usePeanut();
  const fiveDoor = useDonkStore(useShallow((state) => state.removeBarriers.aztec5DoorTemple));
  return {
    in: aztecBack.in && (fiveDoor || rocket && canSlam && peanut),
    out: logicBreak(aztecBack) && (fiveDoor || canSlam && peanut)
  };
};
const useAztecShuffledFairyLogic = () => {
  const anyKong = useAnyKong();
  const camera = useCamera();
  const inStage = useAztecFront();
  return {
    in: inStage.in && anyKong && camera,
    out: logicBreak(inStage) && anyKong && camera
  };
};
const usePlayCastle = () => usePlayLevel("Castle");
const useSlamCastle = () => useSlamLevel("Castle");
const useCastleTree = () => {
  const inStage = usePlayCastle();
  const blast = useBlast();
  return inStage && blast;
};
const useCastleShedEnemies = () => {
  const inStage = usePlayCastle();
  const punch = usePunch();
  const triangle = useTriangle();
  const gone = useGone();
  const pineapple = usePineapple();
  const anyMusic = useAnyMusic();
  return {
    in: inStage && punch && (triangle || gone && pineapple),
    out: inStage && punch && anyMusic
  };
};
const usePlayCaves = () => usePlayLevel("Caves");
const useSlamCaves = () => useSlamLevel("Caves");
const useCavesIgloo = () => {
  const inStage = usePlayCaves();
  const rocket = useRocket();
  const [barriers] = useDonkStore(useShallow((state) => [state.removeBarriers]));
  const iglooBarrier = barriers.cavesIgloo;
  return inStage && (iglooBarrier || rocket);
};
const useCavesMiniFunky = () => {
  const inStage = usePlayCaves();
  const twirl = useTwirl();
  const mini = useMini();
  const warpAll = useBananaportAll();
  return {
    in: inStage && (warpAll || twirl && mini),
    out: inStage && mini
  };
};
const useCavesPillar = () => {
  const inStage = usePlayCaves();
  const rocket = useRocket();
  const twirl = useTwirl();
  const balloon = useBalloon();
  const dk2 = useDk();
  const warpAll = useBananaportAll();
  return {
    in: inStage && (warpAll || rocket),
    out: inStage && (dk2 || twirl || balloon)
  };
};
const useCavesLankyCabin = () => {
  const inStage = usePlayCaves();
  const balloon = useBalloon();
  const trombone = useTrombone();
  const diddy = useDiddy();
  const tiny = useTiny();
  return {
    in: inStage && trombone && balloon,
    out: inStage && trombone && (diddy || tiny)
  };
};
const useCavesDkCabinBee = () => {
  const inStage = usePlayCaves();
  const bongos = useBongos();
  const coconut = useCoconut();
  const homing = useHoming();
  const hardShooting = useHardShooting();
  const anyGun = useAnyGun();
  return {
    in: inStage && bongos && coconut && (homing || hardShooting),
    out: inStage && bongos && anyGun
  };
};
const useCavesDiddyCabinGauntlet = () => {
  const inStage = usePlayCaves();
  const guitar = useGuitar();
  const rocket = useRocket();
  const orange = useOrange();
  return {
    in: inStage && guitar && rocket && orange,
    out: inStage && guitar
  };
};
const usePlayFactory = () => usePlayLevel("Factory");
const useSlamFactory = () => useSlamLevel("Factory");
const useFactoryTesting = () => {
  const inStage = usePlayFactory();
  const slam = useSlam();
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]));
  return inStage && (removeBarriers.factoryTesting || slam);
};
const useFactoryHut = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const diddy = useDiddy();
  const tiny = useTiny();
  return {
    in: testing,
    out: inStage && (diddy || tiny)
  };
};
const useFactoryProductionEnabled = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const coconut = useCoconut();
  const grab = useGrab();
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]));
  return inStage && (removeBarriers.factoryProduction || coconut && grab && testing);
};
const useFactoryProductionTop = () => {
  const inStage = usePlayFactory();
  const factoryOn = useFactoryProductionEnabled();
  const warpAll = useBananaportAll();
  return factoryOn || inStage && warpAll;
};
const usePlayGalleon = () => usePlayLevel("Galleon");
const useSlamGalleon = () => useSlamLevel("Galleon");
const useGalleonLighthouseArea = () => {
  const inStage = usePlayGalleon();
  const target = useSwitchsanityGun("galleonLighthouse", 0);
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers));
  return inStage && (target || removeBarriers.galleonLighthouse);
};
const useGalleonHighTide = () => {
  const lighthouse = useGalleonLighthouseArea();
  const dive = useDive();
  if (useGalleonTideStartHigh()) {
    return true;
  }
  return lighthouse && dive;
};
const useGalleonLowTide = () => {
  const dive = useDive();
  const inStage = usePlayGalleon();
  if (!useGalleonTideStartHigh()) {
    return true;
  }
  return dive && inStage;
};
const useGalleonLighthousePlatform = () => {
  const inStage = usePlayGalleon();
  const lighthouseArea = useGalleonLighthouseArea();
  const highTide = useGalleonHighTide();
  const twirl = useTwirl();
  const warpAll = useBananaportAll();
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  );
  return {
    in: inStage && warpAll || lighthouseArea && (highTide || galleonSeasick && twirl),
    out: lighthouseArea && galleonSeasick
  };
};
const useGalleonSeasickShip = () => {
  const lighthousePlatform = useGalleonLighthousePlatform();
  const lighthouseArea = useGalleonLighthouseArea();
  const canSlam = useSlamGalleon();
  const grab = useGrab();
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  );
  return {
    in: lighthouseArea && galleonSeasick || lighthousePlatform.in && canSlam && grab,
    out: logicBreak(lighthousePlatform) && canSlam && grab
  };
};
const useGalleonCavernTop = () => {
  const inStage = usePlayGalleon();
  const seasick = useGalleonSeasickShip();
  const rocket = useRocket();
  const dive = useDive();
  const vine = useVine();
  const warpAll = useBananaportAll();
  return {
    in: inStage && (vine || warpAll && (dive || rocket)),
    out: inStage && logicBreak(seasick)
  };
};
const useGalleonCannon = () => {
  const canPlay = usePlayGalleon();
  const target = useSwitchsanityGun("galleonCannon", 4);
  return canPlay && target;
};
const useGalleonOutskirts = () => {
  const inStage = usePlayGalleon();
  const target = useSwitchsanityGun("galleonOutskirts", 1);
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers));
  return inStage && (target || removeBarriers.galleonOutskirts);
};
const useGalleonTreasureRoom = () => {
  const outskirts = useGalleonOutskirts();
  const highTide = useGalleonHighTide();
  const inStage = usePlayGalleon();
  const lanky = useLanky();
  const dive = useDive();
  const warpAll = useBananaportAll();
  return {
    in: inStage && warpAll || outskirts && lanky && dive && highTide,
    out: outskirts && lanky && dive
  };
};
const useGalleonDiddyLighthouseBanana = () => {
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick));
  const canSlam = useSlamGalleon();
  const slam = useSlam();
  const lighthouseArea = useGalleonLighthouseArea();
  const rocket = useRocket();
  const dk2 = useDk();
  const grab = useGrab();
  const highTide = useGalleonHighTide();
  return {
    in: lighthouseArea && (seasick || highTide && canSlam && dk2 && grab) && canSlam && rocket,
    out: lighthouseArea && (seasick || canSlam && dk2 && grab) && slam && rocket
  };
};
const useSingleHelmCheck = (val) => {
  const dk2 = useBongos();
  const diddy = useGuitar();
  const lanky = useTrombone();
  const tiny = useSax();
  const chunky = useTriangle();
  const check = useDonkStore(useShallow((state) => state["helm" + val]));
  switch (check) {
    case 1:
      return dk2;
    case 2:
      return diddy;
    case 3:
      return lanky;
    case 4:
      return tiny;
    case 5:
      return chunky;
    default:
      return true;
  }
};
const useSingleHelmNum = (val) => {
  const check = useDonkStore(useShallow((state) => state["helm" + val]));
  switch (check) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 0;
  }
};
const useSingleRoolCheck = (val) => {
  const dk2 = useDk();
  const peanut = usePeanut();
  const diddy = useRocket() && peanut;
  const barrel = useBarrel();
  const lanky = useTrombone() && barrel;
  const mini = useMini();
  const orange = useOrange();
  const feather = useFeather();
  const tiny = feather && mini;
  const tinyBreak = orange && mini;
  const superSlam = useSuperSlam();
  const gone = useGone();
  const punch = usePunch();
  const chunky = useHunky() && superSlam && gone && punch;
  const check = useDonkStore(useShallow((state) => state["rool" + val]));
  switch (check) {
    case 1:
      return {
        in: dk2
      };
    case 2:
      return {
        in: diddy
      };
    case 3:
      return {
        in: lanky
      };
    case 4:
      return {
        in: tiny,
        out: tinyBreak
      };
    case 5:
      return {
        in: chunky
      };
    default:
      return { in: true };
  }
};
const useSingleRoolNum = (val) => {
  const check = useDonkStore(useShallow((state) => state["rool" + val]));
  switch (check) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 0;
  }
};
const usePlayHelm = () => usePlayLevel("Helm");
const useHelmEnter = () => {
  const access = useIslesHelmEntry();
  const kremTop = useIslesKremTop();
  const vine = useVine();
  return access && kremTop && vine;
};
const useHelmMachine = () => {
  const entry = useHelmEnter();
  const stand = useStand();
  const pineapple = usePineapple();
  const vine = useVine();
  const mini = useMini();
  const helmAccess = useHelmStartPosition();
  return {
    in: entry && (helmAccess != 0 || stand && pineapple && vine && mini),
    out: entry && pineapple && vine && mini
  };
};
const useHelmDoors = () => {
  const entry = useHelmEnter();
  const anyMusic = useAnyMusic();
  const machine = useHelmMachine();
  const grab = useGrab();
  const rocket = useRocket();
  const punch = usePunch();
  const helmAccess = useHelmStartPosition();
  return {
    in: entry && (helmAccess == 2 || anyMusic && (helmAccess == 1 || machine.in && grab && rocket && punch)),
    out: entry && logicBreak(machine) && grab && rocket && punch
  };
};
const useCanDeactivateHelm = () => {
  const allMusic2 = useAllMusic();
  const rocket = useRocket();
  const num1 = useSingleHelmNum(1);
  const num2 = useSingleHelmNum(2);
  const num3 = useSingleHelmNum(3);
  const num4 = useSingleHelmNum(4);
  const num5 = useSingleHelmNum(5);
  const check1 = useSingleHelmCheck(1);
  const check2 = useSingleHelmCheck(2);
  const check3 = useSingleHelmCheck(3);
  const check4 = useSingleHelmCheck(4);
  const check5 = useSingleHelmCheck(5);
  if (allMusic2 && rocket) {
    return true;
  }
  if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    return false;
  }
  return check1 && check2 && check3 && check4 && check5;
};
const useCanFightRool = () => {
  const num1 = useSingleRoolNum(1);
  const num2 = useSingleRoolNum(2);
  const num3 = useSingleRoolNum(3);
  const num4 = useSingleRoolNum(4);
  const num5 = useSingleRoolNum(5);
  const check1 = useSingleRoolCheck(1);
  const check2 = useSingleRoolCheck(2);
  const check3 = useSingleRoolCheck(3);
  const check4 = useSingleRoolCheck(4);
  const check5 = useSingleRoolCheck(5);
  if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    return {
      in: false
    };
  }
  return {
    in: check1.in && check2.in && check3.in && check4.in && check5.in,
    out: check1.in && check2.in && check3.in && check4.out && check5.in
  };
};
const usePlayJapes = () => usePlayLevel("Japes");
const useSlamJapes = () => useSlamLevel("Japes");
const useJapesKongGates = () => {
  const inStage = usePlayJapes();
  const [barriers, checks] = useDonkStore(
    useShallow((state) => [state.removeBarriers, state.checks])
  );
  return inStage && (checks[1002] || barriers.japesCoconutGates);
};
const useJapesRambiSwitch = () => useSwitchsanityGun("japesRambi", 0);
const useJapesSideSwitch = () => useSwitchsanityGun("japesSide", 1);
const useJapesHiveSwitch = () => useSwitchsanityGun("japesHive", 3);
const useJapesPaintingSwitch = () => useSwitchsanityGun("japesPainting", 1);
const useJapesSideArea = () => {
  const inStage = usePlayJapes();
  const canAccess = useJapesSideSwitch();
  return inStage && canAccess;
};
const useJapesRambi = () => {
  const canPlay = useJapesKongGates();
  const rambiSwitch = useJapesRambiSwitch();
  return rambiSwitch && canPlay;
};
const useJapesMine = () => {
  const peanut = usePeanut();
  const canPlay = usePlayJapes();
  return peanut && canPlay;
};
const useJapesHive = () => {
  const hiveSwitch = useJapesHiveSwitch();
  const canPlay = usePlayJapes();
  const coconutGates = useJapesKongGates();
  const japesMine = useJapesMine();
  const warpAll = useBananaportAll();
  const [hiveGateOpen] = useDonkStore(useShallow((state) => [state.removeBarriers.japesHiveGate]));
  return canPlay && (coconutGates && (hiveGateOpen || hiveSwitch) || warpAll && japesMine);
};
const useJapesPaintingOutside = () => {
  const inStage = usePlayJapes();
  const stand = useStand();
  const twirl = useTwirl();
  const dk2 = useDk();
  const tiny = useTiny();
  const chunky = useChunky();
  return {
    in: inStage && (stand || twirl),
    out: inStage && (dk2 || tiny || chunky)
  };
};
const useJapesPainting = () => {
  const canPlay = useJapesPaintingOutside();
  const paintingSwitch = useJapesPaintingSwitch();
  return {
    in: canPlay.in && paintingSwitch,
    out: logicBreak(canPlay) && paintingSwitch
  };
};
const useJapesUnderground = () => {
  const slam = useSlam();
  const boulderTech = useBoulderTech();
  const inStage = usePlayJapes();
  return inStage && boulderTech && slam;
};
const useIslesRocketSwitch = () => useSwitchsanityMusicPad("islesTrombone", 2);
const useIslesFairySwitch = () => useSwitchsanityGun("islesForest", 3);
const useIslesFungiIsland = () => {
  const [key4] = useDonkStore(useShallow((state) => [state.key4]));
  const openLobbies = useOpenLobbies();
  return key4 || openLobbies;
};
const useIslesCrossFungi = () => {
  const fungiIsland = useIslesFungiIsland();
  const boulderTech = useBoulderTech();
  const rocketEnabled = useIslesRocketSwitch();
  const twirl = useTwirl();
  const rocket = useRocket();
  const dk2 = useDk();
  const diddy = useDiddy();
  const chunky = useChunky();
  return {
    in: fungiIsland && (twirl || boulderTech && rocketEnabled && rocket),
    out: fungiIsland && (dk2 || chunky || diddy)
  };
};
const useIslesUpper = () => {
  const vine = useVine();
  const bananawarp = useBananaport();
  const crossFungi = useIslesCrossFungi();
  return {
    in: crossFungi.in || vine || bananawarp != 0,
    out: crossFungi.out
  };
};
const useIslesRocket = () => {
  const islesUpper = useIslesUpper();
  const boulderTech = useBoulderTech();
  const target = useIslesRocketSwitch();
  return islesUpper && boulderTech && target;
};
const useIslesKremAscent = () => {
  const canRocket = useIslesRocket();
  const fungiIsland = useIslesFungiIsland();
  const rocket = useRocket();
  const bananaport = useBananaport();
  const openLobbies = useOpenLobbies();
  const [key2] = useDonkStore(useShallow((state) => [state.key2]));
  return openLobbies || key2 || bananaport != 0 || canRocket && fungiIsland && rocket;
};
const useIslesKremTop = () => {
  const port = useMonkeyport();
  const blast = useBlast();
  const balloon = useBalloon();
  const isSwitchsanity = useIsSwitchsanity();
  const [padPort] = useDonkStore(
    useShallow((state) => [state.switchsanitySwitches.islesMonkeyport])
  );
  const target = isSwitchsanity ? padPort : 0;
  switch (target) {
    case 0:
      return port;
    case 1:
      return blast;
    default:
      return balloon;
  }
};
const useIslesHelmEntry = () => {
  const bongos = useBongos();
  const guitar = useGuitar();
  const trombone = useTrombone();
  const sax = useSax();
  const triangle = useTriangle();
  const charge = useCharge();
  const grab = useGrab();
  const gone = useGone();
  const isSwitchsanity = useIsSwitchsanity();
  const [islesHelm] = useDonkStore(useShallow((state) => [state.switchsanitySwitches.islesHelm]));
  const target = isSwitchsanity ? islesHelm : 0;
  switch (target) {
    case 0:
      return gone;
    case 1:
      return grab;
    case 2:
      return charge;
    case 3:
      return bongos;
    case 4:
      return guitar;
    case 5:
      return trombone;
    case 6:
      return sax;
    case 7:
      return triangle;
  }
};
const usePlayLevel = (level) => {
  const dive = useDive();
  const openLobbies = useOpenLobbies();
  const [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    key1,
    key2,
    key5,
    key6,
    key7
  ] = useDonkStore(
    useShallow((state) => [
      state.level1,
      state.level2,
      state.level3,
      state.level4,
      state.level5,
      state.level6,
      state.level7,
      state.level8,
      state.key1,
      state.key2,
      state.key5,
      state.key6,
      state.key7
    ])
  );
  const islesUpper = useIslesUpper();
  const islesKremTop = useIslesKremTop();
  const islesKremAscent = useIslesKremAscent();
  const islesFungiIsland = useIslesFungiIsland();
  if (level1 === level) {
    return true;
  }
  if (level2 === level) {
    return islesUpper && (openLobbies || key1);
  }
  if (level3 === level) {
    return islesKremAscent && (openLobbies || key2);
  }
  if (level4 === level) {
    return (openLobbies || key2) && dive;
  }
  if (level5 === level) {
    return islesFungiIsland;
  }
  if (level6 === level) {
    return islesUpper && (openLobbies || key5);
  }
  if (level7 === level) {
    return openLobbies || key5;
  }
  if (level8 === level) {
    return islesKremTop && (openLobbies || key6 && key7);
  }
  return false;
};
const useSlamLevel = (level) => {
  const canPlay = usePlayLevel(level);
  const slam = useSlam();
  const superSlam = useSuperSlam();
  const duperSlam = useSuperDuperSlam();
  const progressiveSlams = useProgressiveSlams();
  const [level1, level2, level3, level4, level5, level6, level7, level8] = useDonkStore(
    useShallow((state) => [
      state.level1,
      state.level2,
      state.level3,
      state.level4,
      state.level5,
      state.level6,
      state.level7,
      state.level8
    ])
  );
  if (!canPlay) {
    return false;
  }
  if (!progressiveSlams) {
    switch (level) {
      case "Japes":
      case "Aztec":
      case "Factory":
      case "Galleon":
        return slam;
      case "Isles":
      case "Forest":
      case "Caves":
        return superSlam;
      default:
        return duperSlam;
    }
  }
  const predicate = (e2) => e2 === level;
  if ([level1, level2, level3, level4].some(predicate)) {
    return slam;
  }
  if ([level5, level6].some(predicate)) {
    return superSlam;
  }
  if ([level7, level8].some(predicate)) {
    return duperSlam;
  }
  return false;
};
const useCheckDkJapesRock = () => useAnyKong();
const useCheckDkCoconutCage = () => {
  const coconut = useCoconut();
  const kremAscent = useIslesKremAscent();
  return coconut && kremAscent;
};
const useCheckDkMusicPad = () => {
  const playFactory = usePlayFactory();
  const bongos = useBongos();
  const grab = useGrab();
  const diddy = useDiddy();
  const tiny = useTiny();
  return {
    in: playFactory && bongos && grab,
    out: playFactory && bongos && (diddy || tiny)
  };
};
const useCheckDkCavesLobby = () => {
  const playCaves = usePlayCaves();
  const punch = usePunch();
  const strong = useStrong();
  const twirl = useTwirl();
  const orange = useOrange();
  return {
    in: playCaves && punch && strong,
    out: playCaves && punch && (twirl || orange)
  };
};
const useCheckDiddySnide = () => {
  const kremAscent = useIslesKremAscent();
  const spring = useSpring();
  const autoBonus = useAutoBonus();
  const anyKong = useAnyKong();
  const boulderTech = useBoulderTech();
  const highGrab = useHighGrab();
  const twirl = useTwirl();
  return {
    in: kremAscent && (autoBonus && anyKong || spring),
    out: kremAscent && (boulderTech && highGrab || twirl)
  };
};
const useCheckDiddyCage = () => {
  const crossFungi = useIslesCrossFungi();
  const peanut = usePeanut();
  return {
    in: crossFungi.in && peanut,
    out: logicBreak(crossFungi) && peanut
  };
};
const useCheckDiddySummit = () => {
  const fungiIsland = useIslesFungiIsland();
  const islesUpper = useIslesUpper();
  const boulderTech = useBoulderTech();
  const target = useIslesRocketSwitch();
  const rocket = useRocket();
  const twirl = useTwirl();
  return {
    in: fungiIsland && islesUpper && boulderTech && target && rocket,
    out: fungiIsland && twirl
  };
};
const useCheckDiddyCaves = () => {
  const playCaves = usePlayCaves();
  const rocket = useRocket();
  const guitar = useGuitar();
  const boulderTech = useBoulderTech();
  const twirl = useTwirl();
  return {
    in: playCaves && rocket && guitar,
    out: playCaves && boulderTech && twirl && guitar
  };
};
const useCheckLankyCage = () => useGrape();
const useCheckLankyPrison = () => {
  const sprint = useSprint();
  const dk2 = useDk();
  return {
    in: sprint,
    out: dk2
  };
};
const useCheckLankyMusicPad = () => {
  const playJapes = usePlayJapes();
  const boulderTech = useBoulderTech();
  const trombone = useTrombone();
  return playJapes && boulderTech && trombone;
};
const useCheckLankyCastle = () => {
  const playCastle = usePlayCastle();
  const boulderTech = useBoulderTech();
  const balloon = useBalloon();
  const tiny = useTiny();
  return {
    in: playCastle && boulderTech && balloon,
    out: playCastle && tiny
  };
};
const useCheckTinyFeatherCage = () => useFeather();
const useCheckTinyMusicPad = () => {
  const kremTop = useIslesKremTop();
  const sax = useSax();
  return kremTop && sax;
};
const useCheckTinyAztecLobby = () => {
  const playAztec = usePlayAztec();
  const twirl = useTwirl();
  const charge = useCharge();
  return {
    in: playAztec && charge && twirl,
    out: playAztec && charge
  };
};
const useGalleonLobbySlam = () => {
  const progSlam = useSlamGalleon();
  const normSlam = useSuperSlam();
  return useProgressiveSlams() ? progSlam : normSlam;
};
const useCheckTinyGalleonLobby = () => {
  const playGalleon = usePlayGalleon();
  const slam = useGalleonLobbySlam();
  const chunky = useChunky();
  const twirl = useTwirl();
  const mini = useMini();
  const dive = useDive();
  return {
    in: playGalleon && slam && chunky && dive && mini && twirl,
    out: playGalleon && slam && chunky && dive && mini
  };
};
const useCheckBananaFairyIsle = () => {
  const fairies = useCurrentFairyCount();
  const fairyCount = useFairyCount();
  const mini = useMini();
  return fairies >= fairyCount && mini;
};
const useCheckChunkyCage = () => usePineapple();
const useCheckChunkyMusicPad = () => {
  const upper = useIslesUpper();
  const boulderTech = useBoulderTech();
  const triangle = useTriangle();
  return upper && boulderTech && triangle;
};
const useCheckChunkyPound = () => {
  const tinySax = useCheckTinyMusicPad();
  const hunky = useHunky();
  const slam = useSlam();
  return tinySax && hunky && slam;
};
const useCheckChunkyHelm = () => {
  const playHelm = usePlayHelm();
  const helmEntry = useIslesHelmEntry();
  const vine = useVine();
  const twirl = useTwirl();
  return {
    in: playHelm && helmEntry && vine,
    out: playHelm && helmEntry && twirl
  };
};
const usePlayForest = () => usePlayLevel("Forest");
const useSlamForest = () => useSlamLevel("Forest");
const useForestDay = () => {
  const inStage = usePlayForest();
  const anyGun = useAnyGun();
  const orange = useOrange();
  const forestTime = useForestTime();
  if (forestTime != 1) {
    return {
      in: inStage,
      out: inStage
    };
  }
  return {
    in: inStage && anyGun,
    out: inStage && orange
  };
};
const useForestNight = () => {
  const anyGun = useAnyGun();
  const inStage = usePlayForest();
  const orange = useOrange();
  const forestTime = useForestTime();
  const anyKong = useAnyKong();
  if (forestTime != 0) {
    return {
      in: inStage,
      out: inStage
    };
  }
  return {
    in: anyGun && inStage,
    out: anyKong && orange && inStage
  };
};
const useForestDusk = () => {
  const inStage = usePlayForest();
  const dusk = useForestTime() == 2;
  return inStage && dusk;
};
const useForestSpiderBoss = () => {
  const night = useForestNight();
  const dusk = useForestDusk();
  const mini = useMini();
  const punch = usePunch();
  return {
    in: dusk && (mini || punch) || night.in && punch && mini,
    out: logicBreak(night) && punch && mini
  };
};
const useForestMushroomTop = () => {
  return true;
};
const useForestMushroomRoof = () => {
  const inStage = usePlayForest();
  const stand = useStand();
  const rocket = useRocket();
  const tiny = useTiny();
  return {
    in: inStage && stand,
    out: inStage && (rocket || tiny)
  };
};
const useForestBeanHalf = () => {
  const inStage = usePlayForest();
  const door1 = useSwitchsanityGun("forestBean1", 3);
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers));
  return inStage && (door1 || removeBarriers.forestBeanstalk);
};
const useForestBean = () => {
  const inStage = usePlayForest();
  const door1 = useSwitchsanityGun("forestBean1", 3);
  const door2 = useSwitchsanityGun("forestBean2", 4);
  const warpAll = useBananaportAll();
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]));
  return inStage && (warpAll || removeBarriers.forestBeanstalk || door1 && door2);
};
const useForestOwl = () => {
  const inStage = usePlayForest();
  const door = useSwitchsanityGun("forestOwlTree", 2);
  const warpAll = useBananaportAll();
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]));
  return inStage && (warpAll || removeBarriers.forestOwlTree || door);
};
const ItemCheck = (props) => {
  const { id: id2, name, region, done, canGetLogic } = props;
  let { canGetBreak } = props;
  const [setCheck, foolish, hoard] = useDonkStore(
    useShallow((state) => [state.setCheck, state.foolish, state.hoard])
  );
  const foolishValues = Object.values(foolish);
  const hoardValues = Object.values(hoard);
  const isFoolish = foolishValues.some((f2) => f2 === region);
  const isHoard = hoardValues.some((f2) => f2 === region);
  if (canGetBreak === void 0) {
    canGetBreak = canGetLogic;
  }
  let logicState = "not-available";
  if (canGetLogic) {
    logicState = "available";
  } else if (canGetBreak) {
    logicState = "logic-break";
  }
  const rowNames = ["check-row"];
  if (done) {
    rowNames.push("checked");
  }
  if (isFoolish) {
    rowNames.push("foolish");
  } else if (isHoard) {
    rowNames.push("woth");
  }
  const classNames = rowNames.join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: logicState, children: "⬤" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " " })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames, children: region }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        name: "checkbox-" + id2,
        checked: !!done,
        onChange: (e2) => setCheck(id2, e2.target.checked)
      },
      "checkbox-" + id2
    ) })
  ] });
};
const IslesCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Isles",
      region: props.region ?? "",
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$F = () => {
  const islesKremAscent = useIslesKremAscent();
  const boulderTech = useBoulderTech();
  const playForest = usePlayForest();
  const allGun2 = useAllGun();
  const gone = useGone();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 90,
        name: "Isles Snide Arena",
        region: "Krem Isle",
        canGetLogic: islesKremAscent && boulderTech
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 91,
        name: "Isles Forest Arena",
        region: "Outer Isles",
        canGetLogic: playForest && allGun2 && gone
      }
    )
  ] });
};
const Shuffled$F = () => {
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 190, name: "Isles Arena Location #1", canGetLogic: anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 191, name: "Isles Arena Location #2", canGetLogic: anyKong })
  ] });
};
const ArenaLocations$8 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$F, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$F, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const CratePool = ({ children }) => usePoolCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const Vanilla$E = () => null;
const Shuffled$E = () => {
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 260, name: "Isles Crate Location #1 (maybe)", canGetLogic: anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 261, name: "Isles Crate Location #2 (maybe)", canGetLogic: anyKong })
  ] });
};
const CrateLocations$7 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$E, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$E, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const RainbowCoinPool = ({ children }) => usePoolRainbowCoins() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const DirtAztec = () => {
  const crossFungi = useIslesCrossFungi();
  const islesFungi = useIslesFungiIsland();
  const islesRocket = useIslesRocket();
  const islesUpper = useIslesUpper();
  const boulderTech = useBoulderTech();
  const shockwave = useShockwave();
  const [dk2, diddy, rocket, tiny, twirl] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.rocket,
      state.moves.tiny,
      state.moves.twirl
    ])
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    IslesCheck,
    {
      id: 74,
      name: "Isles Dirt Aztec Roof",
      region: "Main Isle",
      canGetLogic: islesRocket && islesFungi && diddy && rocket && shockwave,
      canGetBreak: shockwave && (islesUpper && boulderTech && (diddy || tiny) || crossFungi && (dk2 || tiny && twirl))
    }
  );
};
const VanillaDirtLocations$7 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const boulderTech = useBoulderTech();
  const tiny = useTiny();
  const balloon = useBalloon();
  const playCastle = usePlayCastle();
  const fungiIsland = useIslesFungiIsland();
  const [vine] = useDonkStore(useShallow((state) => [state.moves.vine]));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 70,
        name: "Isles Dirt Training Grounds Back",
        region: "Main Isle",
        canGetLogic: anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 71,
        name: "Isles Dirt Banana Hoard",
        region: "Main Isle",
        canGetLogic: anyKong && vine && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 72,
        name: "Isles Dirt Back of Prison",
        region: "Krem Isle",
        canGetLogic: anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 73,
        name: "Isles Dirt Under Caves Lobby",
        region: "Main Isle",
        canGetLogic: anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtAztec, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 75,
        name: "Isles Dirt Cabin Isle",
        region: "Outer Isles",
        canGetLogic: fungiIsland && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 76,
        name: "Isles Dirt Castle Lobby",
        region: "Caves-Helm Lobbies",
        canGetLogic: playCastle && boulderTech && balloon && shockwave,
        canGetBreak: playCastle && tiny && shockwave
      }
    )
  ] });
};
const ShuffledDirtLocations$7 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 270, name: "Isles Dirt Location #1", canGetLogic: anyKong && shockwave }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 271, name: "Isles Dirt Location #2", canGetLogic: anyKong && shockwave }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 272, name: "Isles Dirt Location #3", canGetLogic: anyKong && shockwave }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 273, name: "Isles Dirt Location #4", canGetLogic: anyKong && shockwave })
  ] });
};
const DirtLocations$7 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$7, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$7, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const useDefeatZinger = () => {
  const anyGun = useAnyGun();
  const anyMusic = useAnyMusic();
  const enemyShuffle = useShuffleEnemies();
  return enemyShuffle || anyGun || anyMusic;
};
const useDefeatBat = () => useDefeatZinger();
const useDefeatKosha = () => {
  const anyMusic = useAnyMusic();
  const shockwave = useShockwave();
  const enemyShuffle = useShuffleEnemies();
  return enemyShuffle || anyMusic || shockwave;
};
const useDefeatKlump = () => {
  const orange = useOrange();
  const shockwave = useShockwave();
  const anyMusic = useAnyMusic();
  const enemyShuffle = useShuffleEnemies();
  return enemyShuffle || orange || shockwave || anyMusic;
};
const useDefeatKlobber = () => useDefeatKlump();
const useDefeatKaboom = () => useDefeatKlump();
const useDefeatPurpleKlaptrap = () => {
  const orange = useOrange();
  const anyMusic = useAnyMusic();
  const enemyShuffle = useShuffleEnemies();
  return enemyShuffle || orange || anyMusic;
};
const useDefeatRoboKremling = () => {
  const klaptrap = useDefeatKlump();
  const punch = usePunch();
  return klaptrap || punch;
};
const EnemyLocations$8 = () => {
  const anyKong = useAnyKong();
  const kremAscent = useIslesKremAscent();
  const zinger = useDefeatZinger();
  const kosha = useDefeatKosha();
  const playJapes = usePlayJapes();
  const playAztec = usePlayAztec();
  const playFactory = usePlayFactory();
  const playCastle = usePlayCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 300,
        name: "Isles Enemy Pineapple Cage 0",
        region: "Main Isle",
        canGetLogic: anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 301,
        name: "Isles Enemy Pineapple Cage 1",
        region: "Main Isle",
        canGetLogic: anyKong && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 302,
        name: "Isles Enemy Fungi Cannon 0",
        region: "Main Isle",
        canGetLogic: anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 303,
        name: "Isles Enemy Fungi Cannon 1",
        region: "Main Isle",
        canGetLogic: anyKong && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 304,
        name: "Isles Enemy Japes Entrance",
        region: "Main Isle",
        canGetLogic: anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 305,
        name: "Isles Enemy Monkeyport Pad",
        region: "Krem Isle",
        canGetLogic: anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 306,
        name: "Isles Enemy Upper Factory Path",
        region: "Krem Isle",
        canGetLogic: anyKong && kremAscent
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 307,
        name: "Isles Enemy Near Aztec",
        region: "Main Isle",
        canGetLogic: anyKong && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 308,
        name: "Isles Enemy Lower Factory Path 0",
        region: "Krem Isle",
        canGetLogic: anyKong && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 309,
        name: "Isles Enemy Lower Factory Path 1",
        region: "Krem Isle",
        canGetLogic: anyKong && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 310,
        name: "Isles Enemy Japes Lobby 0",
        region: "Japes-Forest Lobbies",
        canGetLogic: anyKong && playJapes
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 311,
        name: "Isles Enemy Japes Lobby 1",
        region: "Japes-Forest Lobbies",
        canGetLogic: anyKong && playJapes
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 312,
        name: "Isles Enemy Aztec Lobby 0",
        region: "Japes-Forest Lobbies",
        canGetLogic: anyKong && playAztec && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 313,
        name: "Isles Enemy Aztec Lobby 1",
        region: "Japes-Forest Lobbies",
        canGetLogic: anyKong && playAztec && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 314,
        name: "Isles Enemy Factory Lobby",
        region: "Japes-Forest Lobbies",
        canGetLogic: anyKong && playFactory && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 315,
        name: "Isles Enemy Castle Lobby Left",
        region: "Caves-Helm Lobbies",
        canGetLogic: anyKong && playCastle && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 316,
        name: "Isles Enemy Castle Lobby Near Right",
        region: "Caves-Helm Lobbies",
        canGetLogic: anyKong && playCastle && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 317,
        name: "Isles Enemy Castle Lobby Far Right",
        region: "Caves-Helm Lobbies",
        canGetLogic: anyKong && playCastle && kosha
      }
    )
  ] });
};
const FairyPool = ({ children }) => usePoolFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const Vanilla$D = () => {
  const camera = useCamera();
  const anyKong = useAnyKong();
  const punch = usePunch();
  const playFactory = usePlayFactory();
  const playForest = usePlayForest();
  const islesKremTop = useIslesKremTop();
  const islesFairySwitch = useIslesFairySwitch();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 80,
        name: "Isles Outer Fairy",
        region: "Outer Isles",
        canGetLogic: anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 81,
        name: "Isles Factory Fairy",
        region: "Japes-Forest Lobbies",
        canGetLogic: playFactory && punch && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 82,
        name: "Isles Forest Fairy",
        region: "Japes-Forest Lobbies",
        canGetLogic: playForest && islesFairySwitch && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 83,
        name: "Isles Krem Fairy",
        region: "Krem Isle",
        canGetLogic: islesKremTop && camera
      }
    )
  ] });
};
const Shuffled$D = () => {
  const anyKong = useAnyKong();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 280, name: "Isles Fairy Location #1", canGetLogic: anyKong && camera }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 281, name: "Isles Fairy Location #2", canGetLogic: anyKong && camera }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 282, name: "Isles Fairy Location #3", canGetLogic: anyKong && camera }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 283, name: "Isles Fairy Location #4", canGetLogic: anyKong && camera })
  ] });
};
const FairyLocations$8 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$D, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$D, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const KasplatPool = ({ children }) => usePoolBlueprints() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const Vanilla$C = () => {
  const playHelm = usePlayHelm();
  const playCastle = usePlayCastle();
  const playCaves = usePlayCaves();
  const playFactory = usePlayFactory();
  const playGalleon = usePlayGalleon();
  const sniper = useSniper();
  const coconut = useCoconut();
  const twirl = useTwirl();
  const punch = usePunch();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 50,
        name: "Isles Kasplat Helm Lobby",
        region: "Caves-Helm Lobbies",
        canGetLogic: playHelm && sniper && coconut,
        canGetBreak: playHelm && twirl
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 51,
        name: "Isles Kasplat Castle Lobby",
        region: "Caves-Helm Lobbies",
        canGetLogic: playCastle && coconut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 52,
        name: "Isles Kasplat Caves Lobby Punch",
        region: "Caves-Helm Lobbies",
        canGetLogic: playCaves && punch
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 53,
        name: "Isles Kasplat Factory Lobby Box",
        region: "Japes-Forest Lobbies",
        canGetLogic: playFactory && punch
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 54,
        name: "Isles Kasplat Galleon Lobby",
        region: "Japes-Forest Lobbies",
        canGetLogic: playGalleon && anyKong
      }
    )
  ] });
};
const Shuffled$C = () => {
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 250, name: "Isles Kasplat Location #1", canGetLogic: anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 251, name: "Isles Kasplat Location #2", canGetLogic: anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 252, name: "Isles Kasplat Location #3", canGetLogic: anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 253, name: "Isles Kasplat Location #4", canGetLogic: anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 254, name: "Isles Kasplat Location #5", canGetLogic: anyKong })
  ] });
};
const KasplatLocations$7 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$C, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$C, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$7 = () => {
  const cage = useCheckChunkyCage();
  const music = useCheckChunkyMusicPad();
  const pound = useCheckChunkyPound();
  const helm = useCheckChunkyHelm();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 40, name: "Isles Chunky Caged Banana", region: "Main Isle", canGetLogic: cage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 41,
        name: "Isles Chunky Instrument Pad",
        region: "Main Isle",
        canGetLogic: music
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 42,
        name: "Isles Chunky Pound The X",
        region: "Outer Isles",
        canGetLogic: pound
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 43,
        name: "Isles Chunky Helm Lobby",
        region: "Caves-Helm Lobbies",
        canGetLogic: helm.in,
        canGetBreak: helm.out
      }
    )
  ] });
};
const DiddyBananas$7 = () => {
  const snide = useCheckDiddySnide();
  const cage = useCheckDiddyCage();
  const summit = useCheckDiddySummit();
  const cave = useCheckDiddyCaves();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 10,
        name: "Isles Diddy Snides Lobby",
        region: "Krem Isle",
        canGetLogic: snide.in,
        canGetBreak: snide.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 11,
        name: "Isles Diddy Caged Banana",
        region: "Main Isle",
        canGetLogic: cage.in,
        canGetBreak: cage.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 12,
        name: "Isles Diddy Summit",
        region: "Main Isle",
        canGetLogic: summit.in,
        canGetBreak: summit.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 13,
        name: "Isles Diddy Instrument Pad",
        region: "Caves-Helm Lobbies",
        canGetLogic: cave.in,
        canGetBreak: cave.out
      }
    )
  ] });
};
const DkBananas$7 = () => {
  const japesRock = useCheckDkJapesRock();
  const cage = useCheckDkCoconutCage();
  const pad = useCheckDkMusicPad();
  const cave = useCheckDkCavesLobby();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 1, name: "Isles DK Japes Rock", region: "Main Isle", canGetLogic: japesRock }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 2, name: "Isles DK Caged Banana", region: "Krem Isle", canGetLogic: cage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 3,
        name: "Isles DK Instrument Pad",
        region: "Japes-Forest Lobbies",
        canGetLogic: pad.in,
        canGetBreak: pad.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 4,
        name: "Isles DK Lava Banana",
        region: "Caves-Helm Lobbies",
        canGetLogic: cave.in,
        canGetBreak: cave.out
      }
    )
  ] });
};
const LankyBananas$7 = () => {
  const cage = useCheckLankyCage();
  const prison = useCheckLankyPrison();
  const music = useCheckLankyMusicPad();
  const lobby = useCheckLankyCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IslesCheck, { id: 20, name: "Isles Lanky Caged Banana", region: "Krem Isle", canGetLogic: cage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 21,
        name: "Isles Lanky Prison Orangsprint",
        region: "Krem Isle",
        canGetLogic: prison.in,
        canGetBreak: prison.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 22,
        name: "Isles Lanky Instrument Pad",
        region: "Japes-Forest Lobbies",
        canGetLogic: music
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 23,
        name: "Isles Lanky Castle Lobby",
        region: "Caves-Helm Lobbies",
        canGetLogic: lobby.in,
        canGetBreak: lobby.out
      }
    )
  ] });
};
const ToughGoldenBanana = ({ children }) => usePoolToughBananas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const TinyBananas$7 = () => {
  const checkBfi = useCheckBananaFairyIsle();
  const checkFeatherCage = useCheckTinyFeatherCage();
  const checkTinyMusicPad = useCheckTinyMusicPad();
  const checkTinyAztec = useCheckTinyAztecLobby();
  const checkTinyGalleon = useCheckTinyGalleonLobby();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 30,
        name: "Isles Tiny Caged Banana",
        region: "Outer Isles",
        canGetLogic: checkFeatherCage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 31,
        name: "Isles Tiny Instrument Pad",
        region: "Krem Isle",
        canGetLogic: checkTinyMusicPad
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 32,
        name: "Isles Tiny Aztec Lobby",
        region: "Japes-Forest Lobbies",
        canGetLogic: checkTinyAztec.in,
        canGetBreak: checkTinyAztec.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 33,
        name: "Isles Tiny Galleon Lobby",
        region: "Japes-Forest Lobbies",
        canGetLogic: checkTinyGalleon.in,
        canGetBreak: checkTinyGalleon.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 47,
        name: "Isles Rareware Banana",
        region: "Outer Isles",
        canGetLogic: checkBfi
      }
    ) })
  ] });
};
const useShopLogic = (id2) => {
  const dk2 = useDk();
  const diddy = useDiddy();
  const lanky = useLanky();
  const tiny = useTiny();
  const chunky = useChunky();
  const anyKong = useAnyKong();
  switch (id2 % 10) {
    case 1:
      return dk2;
    case 2:
      return diddy;
    case 3:
      return lanky;
    case 4:
      return tiny;
    case 5:
      return chunky;
    default:
      return anyKong;
  }
};
const useShopKong = (id2) => {
  switch (id2 % 10) {
    case 1:
      return "DK";
    case 2:
      return "Diddy";
    case 3:
      return "Lanky";
    case 4:
      return "Tiny";
    case 5:
      return "Chunky";
    default:
      return "Shared";
  }
};
const SingleShopCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  const kongBool = useShopLogic(props.baseId);
  const kongName = useShopKong(props.baseId);
  let { outLogic } = props;
  if (outLogic === void 0) {
    outLogic = props.inLogic;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.baseId,
      level: props.level,
      region: props.region,
      name: `${props.baseName} ${kongName}`,
      canGetLogic: props.inLogic && kongBool,
      canGetBreak: outLogic && kongBool,
      done: checks[props.baseId]
    }
  );
};
const ShopGenerator = (props) => {
  const children = [...Array(6).keys()].map((x2) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SingleShopCheck, { ...props, baseId: props.baseId + x2 }, props.baseId + x2);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
const ShopPool = ({ children }) => usePoolShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const Vanilla$B = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ShopGenerator,
    {
      baseId: 110,
      baseName: "Isles Cranky",
      level: "Isles",
      region: "Isles Shops",
      inLogic: true
    }
  );
};
const Shuffled$B = () => {
  const kremAscent = useIslesKremAscent();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 140,
        baseName: "Isles Cranky Location",
        level: "Isles",
        region: "Isles Shops",
        inLogic: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 170,
        baseName: "Isles Snide Location",
        level: "Isles",
        region: "Isles Shops",
        inLogic: kremAscent
      }
    )
  ] });
};
const ShopLocations$7 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$B, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$B, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const IsleChecks = () => {
  const medals = useCurrentBananaMedalCount();
  const jetpacCount = useJetpacCount();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$8, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$8, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      IslesCheck,
      {
        id: 105,
        name: "Cranky Jetpac Game",
        canGetLogic: anyKong && medals >= jetpacCount
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$8, {}) })
  ] });
};
const BananaMedalPool = ({ children }) => usePoolBananaMedals() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const BossPool = ({ children }) => usePoolKeys() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const JapesCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Japes",
      region: props.region ?? "",
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$A = () => {
  const inStage = usePlayJapes();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1090,
      name: "Japes Arena",
      region: "Japes Hillside",
      canGetLogic: inStage && anyKong
    }
  );
};
const Shuffled$A = () => {
  const inStage = usePlayJapes();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(JapesCheck, { id: 1190, name: "Japes Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations$7 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$A, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$A, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$z = () => {
  const inStage = usePlayJapes();
  const anyKong = useAnyKong();
  const japesRambi = useJapesRambi();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1060,
        name: "Japes Crate Mountain",
        region: "Japes Hillside",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1061,
        name: "Japes Crate Rambi",
        region: "Stormy Tunnel Area",
        canGetLogic: japesRambi && anyKong
      }
    )
  ] });
};
const Shuffled$z = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayJapes();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1260,
        name: "Japes Crate Location #1 (maybe)",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1261,
        name: "Japes Crate Location #2 (maybe)",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const CrateLocations$6 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$z, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$z, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations$6 = () => {
  const japesPaintingOutside = useJapesPaintingOutside();
  const shockwave = useShockwave();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1070,
      name: "Japes Dirt Painting Hill",
      region: "Japes Hillside",
      canGetLogic: japesPaintingOutside.in && shockwave,
      canGetBreak: japesPaintingOutside.out && shockwave
    }
  ) });
};
const ShuffledDirtLocations$6 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const inStage = usePlayJapes();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1270,
        name: "Japes Dirt Location #1",
        canGetLogic: inStage && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1271,
        name: "Japes Dirt Location #2",
        canGetLogic: inStage && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations$6 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$6, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$6, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$7 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayJapes();
  const japesSide = useJapesSideArea();
  const paintingInside = useJapesPainting();
  const mine = useJapesMine();
  const hiveOut = useJapesHive();
  const hiveIn = useMini() && hiveOut;
  const zinger = useDefeatZinger();
  const klump = useDefeatKlump();
  const klaptrap = useDefeatPurpleKlaptrap();
  const charge = useCharge();
  const canSlam = useSlamJapes();
  const kongGates = useJapesKongGates();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1300,
        name: "Japes Enemy Start",
        region: "Japes Lowlands",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1301,
        name: "Japes Enemy Diddy Cavern",
        region: "Japes Lowlands",
        canGetLogic: japesSide && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1302,
        name: "Japes Enemy Early Tunnel 0",
        region: "Japes Lowlands",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1303,
        name: "Japes Enemy Early Tunnel 1",
        region: "Japes Lowlands",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1304,
        name: "Japes Enemy Stormy Tunnel 0",
        region: "Stormy Tunnel Area",
        canGetLogic: kongGates && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1305,
        name: "Japes Enemy Stormy Tunnel 1",
        region: "Stormy Tunnel Area",
        canGetLogic: kongGates && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1306,
        name: "Japes Enemy Stormy Tunnel 2",
        region: "Stormy Tunnel Area",
        canGetLogic: kongGates && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1307,
        name: "Japes Enemy Hive Area 0",
        region: "Hive Tunnel Area",
        canGetLogic: hiveOut && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1308,
        name: "Japes Enemy Hive Area 1",
        region: "Hive Tunnel Area",
        canGetLogic: hiveOut && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1309,
        name: "Japes Enemy Hive Area 2",
        region: "Hive Tunnel Area",
        canGetLogic: hiveOut && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1310,
        name: "Japes Enemy Hive Area 3",
        region: "Hive Tunnel Area",
        canGetLogic: hiveOut && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1311,
        name: "Japes Enemy Hive Area 4",
        region: "Hive Tunnel Area",
        canGetLogic: hiveOut && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1312,
        name: "Japes Enemy Demo Death",
        region: "Japes Lowlands",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1313,
        name: "Japes Enemy Near Underground",
        region: "Japes Lowlands",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1314,
        name: "Japes Enemy Near Painting 0",
        region: "Japes Hillside",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1315,
        name: "Japes Enemy Near Painting 1",
        region: "Japes Hillside",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1316,
        name: "Japes Enemy Near Painting 2",
        region: "Japes Hillside",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1317,
        name: "Japes Enemy Mountain",
        region: "Japes Hillside",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1318,
        name: "Japes Enemy Feather Tunnel",
        region: "Hive Tunnel Area",
        canGetLogic: kongGates && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1319,
        name: "Japes Enemy Middle Tunnel",
        region: "Stormy Tunnel Area",
        canGetLogic: kongGates && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1320,
        name: "Japes Enemy Painting Gauntlet 0",
        region: "Japes Caves And Mines",
        canGetLogic: paintingInside.in && zinger,
        canGetBreak: logicBreak(paintingInside) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1321,
        name: "Japes Enemy Painting Gauntlet 1",
        region: "Japes Caves And Mines",
        canGetLogic: paintingInside.in && zinger,
        canGetBreak: logicBreak(paintingInside) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1322,
        name: "Japes Enemy Painting Gauntlet 2",
        region: "Japes Caves And Mines",
        canGetLogic: paintingInside.in && zinger,
        canGetBreak: logicBreak(paintingInside) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1323,
        name: "Japes Enemy Painting Gauntlet 3",
        region: "Japes Caves And Mines",
        canGetLogic: paintingInside.in && zinger,
        canGetBreak: logicBreak(paintingInside) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1324,
        name: "Japes Enemy Painting Gauntlet 4",
        region: "Japes Caves And Mines",
        canGetLogic: paintingInside.in && zinger,
        canGetBreak: logicBreak(paintingInside) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1325,
        name: "Japes Enemy Mountain Start 0",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1326,
        name: "Japes Enemy Mountain Start 1",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1327,
        name: "Japes Enemy Mountain Start 2",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1328,
        name: "Japes Enemy Mountain Start 3",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1329,
        name: "Japes Enemy Mountain Start 4",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1330,
        name: "Japes Enemy Mountain Gate 0",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1331,
        name: "Japes Enemy Mountain Gate 1",
        region: "Japes Caves And Mines",
        canGetLogic: mine
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1332,
        name: "Japes Enemy Mountain Charge Switch",
        region: "Japes Caves And Mines",
        canGetLogic: mine && charge && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1333,
        name: "Japes Enemy Mountain Conveyor 0",
        region: "Japes Caves And Mines",
        canGetLogic: mine && canSlam && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1334,
        name: "Japes Enemy Mountain Conveyor 1",
        region: "Japes Caves And Mines",
        canGetLogic: mine && canSlam && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1335,
        name: "Japes Enemy Hive First Room",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1336,
        name: "Japes Enemy Hive Second Room 0",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && klaptrap && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1337,
        name: "Japes Enemy Hive Second Room 1",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && klaptrap && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1338,
        name: "Japes Enemy Hive Third Room 0",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && klaptrap && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1339,
        name: "Japes Enemy Hive Third Room 1",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && klaptrap && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1340,
        name: "Japes Enemy Hive Third Room 2",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && zinger && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1341,
        name: "Japes Enemy Hive Third Room 3",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && zinger && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1342,
        name: "Japes Enemy Hive Main Room",
        region: "Hive Tunnel Area",
        canGetLogic: hiveIn && zinger
      }
    )
  ] });
};
const Vanilla$y = () => {
  const camera = useCamera();
  const japesRambi = useJapesRambi();
  const japesPaintingInside = useJapesPainting();
  const anyGun = useAnyGun();
  const anyMusic = useAnyMusic();
  const grape = useGrape();
  const slam = useSlam();
  const lanky = useLanky();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1080,
        name: "Japes Fairy Rambi",
        region: "Stormy Tunnel Area",
        canGetLogic: japesRambi && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1081,
        name: "Japes Fairy Painting Room",
        region: "Japes Caves And Mines",
        canGetLogic: lanky && slam && japesPaintingInside.in && grape && camera,
        canGetBreak: lanky && slam && logicBreak(japesPaintingInside) && (anyGun || anyMusic) && camera
      }
    )
  ] });
};
const Shuffled$y = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayJapes();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1280,
        name: "Japes Fairy Location #1",
        canGetLogic: inStage && anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1281,
        name: "Japes Fairy Location #2",
        canGetLogic: inStage && anyKong && camera
      }
    )
  ] });
};
const FairyLocations$7 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$y, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$y, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$x = () => {
  const inStage = usePlayJapes();
  const anyKong = useAnyKong();
  const under = useJapesUnderground();
  const kongGates = useJapesKongGates();
  const pineapple = usePineapple();
  const vine = useVine();
  const dk2 = useDk();
  const diddy = useDiddy();
  const twirl = useTwirl();
  const tiny = useTiny();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1050,
        name: "Japes Kasplat Hive Tunnel Lower",
        region: "Hive Tunnel Area",
        canGetLogic: kongGates && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1051,
        name: "Japes Kasplat Near Painting Room",
        region: "Stormy Tunnel Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1052,
        name: "Japes Kasplat By Lanky Slope Bonus",
        region: "Stormy Tunnel Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1053,
        name: "Japes Kasplat Hive Tunnel Upper",
        region: "Hive Tunnel Area",
        canGetLogic: kongGates && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1054,
        name: "Japes Kasplat Underground",
        region: "Japes Caves And Mines",
        canGetLogic: under && pineapple && vine,
        canGetBreak: under && (dk2 || tiny && twirl || (tiny || diddy) && vine)
      }
    )
  ] });
};
const Shuffled$x = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayJapes();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(JapesCheck, { id: 1250, name: "Japes Kasplat Location #1", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JapesCheck, { id: 1251, name: "Japes Kasplat Location #2", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JapesCheck, { id: 1252, name: "Japes Kasplat Location #3", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JapesCheck, { id: 1253, name: "Japes Kasplat Location #4", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(JapesCheck, { id: 1254, name: "Japes Kasplat Location #5", canGetLogic: inStage && anyKong })
  ] });
};
const KasplatLocations$6 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$x, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$x, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$6 = () => {
  const inStage = usePlayJapes();
  const boulderTech = useBoulderTech();
  const japesUnder = useJapesUnderground();
  const canSlam = useSlamJapes();
  const japesRambi = useJapesRambi();
  const japesHive = useJapesHive();
  const hunky = useHunky();
  const pineapple = usePineapple();
  const vine = useVine();
  const twirl = useTwirl();
  const dk2 = useDk();
  const tiny = useTiny();
  const diddy = useDiddy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1040,
        name: "Japes Chunky Boulder",
        region: "Japes Lowlands",
        canGetLogic: inStage && boulderTech
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1041,
        name: "Japes Chunky Caged Banana",
        region: "Japes Hillside",
        canGetLogic: japesRambi && boulderTech && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1042,
        name: "Japes Chunky Giant Bonus Barrel",
        region: "Hive Tunnel Area",
        canGetLogic: japesHive && hunky
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1043,
        name: "Japes Chunky Underground",
        region: "Japes Caves And Mines",
        canGetLogic: japesUnder && pineapple && vine,
        canGetBreak: japesUnder && (dk2 || twirl || (tiny || diddy) && vine)
      }
    )
  ] });
};
const DiddyBananas$6 = () => {
  const inStage = usePlayJapes();
  const canSlam = useSlamJapes();
  const diddy = useDiddy();
  const japesRambi = useJapesRambi();
  const japesMine = useJapesMine();
  const japesSide = useJapesSideArea();
  const highGrab = useHighGrab();
  const charge = useCharge();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1010,
        name: "Japes Diddy Caged Banana",
        region: "Japes Hillside",
        canGetLogic: japesRambi && diddy && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1011,
        name: "Japes Diddy Mountain",
        region: "Japes Hillside",
        canGetLogic: japesMine && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1012,
        name: "Japes Diddy Tunnel",
        region: "Japes Lowlands",
        canGetLogic: inStage && japesSide
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1013,
        name: "Japes Diddy Minecarts",
        region: "Japes Caves And Mines",
        canGetLogic: japesMine && canSlam && charge,
        canGetBreak: japesMine && highGrab
      }
    ) })
  ] });
};
const DkBananas$6 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayJapes();
  const canSlam = useSlamJapes();
  const japesRambi = useJapesRambi();
  const dk2 = useDk();
  const blast = useBlast();
  const vine = useVine();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1001,
        name: "Japes DK Front of Cage",
        region: "Japes Hillside",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1002,
        name: "Japes DK Free Diddy",
        region: "Japes Hillside",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1003,
        name: "Japes DK Caged Banana",
        region: "Japes Lowlands",
        canGetLogic: japesRambi && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1004,
        name: "Japes DK Baboon Blast",
        region: "Japes Lowlands",
        canGetLogic: inStage && blast && vine
      }
    )
  ] });
};
const LankyBananas$6 = () => {
  const inStage = usePlayJapes();
  const canSlam = useSlamJapes();
  const japesRambi = useJapesRambi();
  const japesSide = useJapesSideArea();
  const lanky = useLanky();
  const grape = useGrape();
  const stand = useStand();
  const anyKong = useAnyKong();
  const slam = useSlam();
  const anyGun = useAnyGun();
  const anyMusic = useAnyMusic();
  const japesPaintingInside = useJapesPainting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1020,
        name: "Japes Lanky Caged Banana",
        region: "Japes Hillside",
        canGetLogic: japesRambi && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1021,
        name: "Japes Lanky Grape Gate",
        region: "Japes Hillside",
        canGetLogic: japesSide && grape
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1022,
        name: "Japes Lanky Slope",
        region: "Stormy Tunnel Area",
        canGetLogic: inStage && stand,
        canGetBreak: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1023,
        name: "Japes Lanky Painting Room",
        region: "Japes Caves And Mines",
        canGetLogic: lanky && slam && japesPaintingInside.in && (anyGun || anyMusic),
        canGetBreak: lanky && slam && japesPaintingInside.out && (anyGun || anyMusic)
      }
    )
  ] });
};
const TinyBananas$6 = () => {
  const canSlam = useSlamJapes();
  const japesSide = useJapesSideArea();
  const tiny = useTiny();
  const japesRambi = useJapesRambi();
  const feather = useFeather();
  const mini = useMini();
  const japesHive = useJapesHive();
  const orange = useOrange();
  const anyMusic = useAnyMusic();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1030,
        name: "Japes Tiny Caged Banana",
        region: "Japes Hillside",
        canGetLogic: japesRambi && tiny && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1031,
        name: "Japes Tiny Feather Gate Barrel",
        region: "Japes Lowlands",
        canGetLogic: japesSide && feather
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1032,
        name: "Japes Tiny Stump",
        region: "Hive Tunnel Area",
        canGetLogic: japesHive && mini
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1033,
        name: "Japes Tiny Beehive",
        region: "Hive Tunnel Area",
        canGetLogic: japesHive && mini && canSlam && (anyMusic || orange),
        canGetBreak: japesHive && mini && canSlam
      }
    )
  ] });
};
const useChunkyMedalInLogic$6 = () => {
  const inStage = usePlayJapes();
  const hiveGate = useJapesHive();
  const haveRambiCage = useJapesRambi();
  const underground = useJapesUnderground();
  const kong = useChunky();
  const barrel = useBarrel();
  const crystal = useHunky();
  const gun = usePineapple();
  const kongGates = useJapesKongGates();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 15;
  if (underground) {
    bananas += 15;
  }
  if (hiveGate && crystal) {
    bananas += 20;
  }
  if (kongGates) {
    bananas += 15;
    if (haveRambiCage) {
      if (gun) {
        bananas += 30;
      }
      if (barrel) {
        bananas += 5;
      }
    }
  }
  return bananas;
};
const useChunkyMedalOutLogic$6 = () => useChunkyMedalInLogic$6();
const ChunkyMedal$6 = () => {
  const inLogic = useChunkyMedalInLogic$6();
  const outLogic = useChunkyMedalOutLogic$6();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1104,
      name: "Japes Chunky Medal",
      region: "Japes Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDiddyMedalCommonLogic$4 = () => {
  const owl = useForestOwl();
  const crystal = useRocket();
  let bananas = 35;
  {
    bananas += 10;
  }
  if (owl) {
    bananas += 15;
    if (crystal) {
      bananas += 5;
    }
  }
  return bananas;
};
const useDiddyMedalInLogic$5 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const day = useForestDay();
  const night = useForestNight();
  const kong = useDiddy();
  const gun = usePeanut();
  const music = useGuitar();
  const pad = useSpring();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (day.in && gun) {
    bananas += 10;
  }
  if (night.in) {
    if (pad) {
      bananas += 5;
      if (music) {
        bananas += 10;
      }
    }
    if (canSlam && gun) {
      bananas += 10;
    }
  }
  return bananas;
};
const useDiddyMedalOutLogic$5 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const day = useForestDay();
  const night = useForestNight();
  const grab = useHighGrab();
  const kong = useDiddy();
  const gun = usePeanut();
  const pad = useSpring();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(day) && gun) {
    bananas += 10;
  }
  if (logicBreak(night)) {
    if (pad || grab) {
      bananas += 15;
    }
    if (canSlam && gun) {
      bananas += 10;
    }
  }
  return bananas;
};
const DiddyMedal$6 = () => {
  const inLogic = useDiddyMedalInLogic$5();
  const outLogic = useDiddyMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1101,
      name: "Japes Diddy Medal",
      region: "Japes Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalInLogic$6 = () => {
  const inStage = usePlayJapes();
  const haveRambiCage = useJapesRambi();
  const kongGates = useJapesKongGates();
  const kong = useDk();
  const vine = useVine();
  const pad = useBlast();
  const gun = useCoconut();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 36;
  if (vine) {
    bananas += 5;
  }
  if (gun) {
    bananas += 20;
  }
  if (vine && pad) {
    bananas += 10;
  }
  if (kongGates) {
    bananas += 9;
    if (gun) {
      bananas += 10;
    }
    if (haveRambiCage) {
      bananas += 10;
    }
  }
  return bananas;
};
const useDkMedalOutLogic$6 = () => {
  const inStage = usePlayJapes();
  const kong = useDk();
  const vine = useVine();
  const bananas = useDkMedalInLogic$6();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  return vine ? bananas : bananas + 5;
};
const DkMedal$6 = () => {
  const inLogic = useDkMedalInLogic$6();
  const outLogic = useDkMedalOutLogic$6();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1100,
      name: "Japes DK Medal",
      region: "Japes Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalCommonLogic$5 = () => {
  const haveRambiCage = useJapesRambi();
  const kongGates = useJapesKongGates();
  const sideArea = useJapesSideArea();
  const dive = useDive();
  const gun = useGrape();
  let bananas = 10;
  if (dive) {
    bananas += 5;
  }
  if (sideArea && gun) {
    bananas += 5;
  }
  if (kongGates) {
    bananas += 6;
    if (gun) {
      bananas += 20;
    }
    if (haveRambiCage) {
      bananas += 10;
    }
  }
  return bananas;
};
const useLankyMedalInLogic$6 = () => {
  const inStage = usePlayJapes();
  const kongGates = useJapesKongGates();
  const japesPaintingOutside = useJapesPaintingOutside();
  const japesPaintingInside = useJapesPainting();
  const kong = useLanky();
  const gun = useGrape();
  const move = useStand();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$5();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (japesPaintingOutside.in) {
    bananas += 3;
    if (japesPaintingInside.in) {
      bananas += 20;
      if (gun) {
        bananas += 10;
      }
    }
  }
  if (kongGates && move) {
    bananas += 11;
  }
  return bananas;
};
const useLankyMedalOutLogic$6 = () => {
  const inStage = usePlayJapes();
  const kongGates = useJapesKongGates();
  const japesPaintingOutside = useJapesPaintingOutside();
  const japesPaintingInside = useJapesPainting();
  const kong = useLanky();
  const gun = useGrape();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$5();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(japesPaintingOutside)) {
    bananas += 3;
    if (logicBreak(japesPaintingInside)) {
      bananas += 20;
      if (gun) {
        bananas += 10;
      }
    }
  }
  if (kongGates) {
    bananas += 11;
  }
  return bananas;
};
const LankyMedal$6 = () => {
  const inLogic = useLankyMedalInLogic$6();
  const outLogic = useLankyMedalOutLogic$6();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1102,
      name: "Japes Lanky Medal",
      region: "Japes Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useTinyMedalCommonLogic$4 = () => {
  const owl = useForestOwl();
  const bean = useForestBean();
  const half = useForestBeanHalf();
  const gun = useFeather();
  const dive = useDive();
  let bananas = 10;
  if (half) {
    bananas += 4;
  }
  if (bean) {
    bananas += 16;
  }
  if (gun) {
    bananas += 10;
  }
  if (owl) {
    bananas += 8;
  }
  if (dive) {
    bananas += 17;
  }
  return bananas;
};
const useTinyMedalInLogic$5 = () => {
  const inStage = usePlayForest();
  const day = useForestDay();
  const night = useForestNight();
  const owl = useForestOwl();
  const punch = usePunch();
  const kong = useTiny();
  const gun = useFeather();
  const music = useSax();
  const crystal = useMini();
  const forestTime = useForestTime();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (day.in && crystal) {
    bananas += 10;
    if (punch) {
      bananas += 5;
    }
  }
  if (owl && crystal && music) {
    bananas += 5;
  }
  if (night.in && gun) {
    bananas += 10;
  }
  if (crystal && (forestTime == 2 || night.in && punch)) {
    bananas += 5;
  }
  return bananas;
};
const useTinyMedalOutLogic$5 = () => {
  const inStage = usePlayForest();
  const day = useForestDay();
  const night = useForestNight();
  const owl = useForestOwl();
  const punch = usePunch();
  const kong = useTiny();
  const gun = useFeather();
  const crystal = useMini();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(day) && crystal) {
    bananas += 10;
    if (punch) {
      bananas += 5;
    }
  }
  if (owl) {
    bananas += 5;
  }
  if (logicBreak(night) && gun) {
    bananas += 10;
  }
  if (crystal && logicBreak(night) && punch) {
    bananas += 5;
  }
  return bananas;
};
const TinyMedal$6 = () => {
  const inLogic = useTinyMedalInLogic$5();
  const outLogic = useTinyMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    JapesCheck,
    {
      id: 1103,
      name: "Japes Tiny Medal",
      region: "Japes Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$w = () => {
  const playJapes = usePlayJapes();
  const kongGates = useJapesKongGates();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 1110,
        baseName: "Japes Cranky",
        level: "Japes",
        region: "Japes Shops",
        inLogic: kongGates
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 1120,
        baseName: "Japes Funky",
        level: "Japes",
        region: "Japes Shops",
        inLogic: playJapes
      }
    )
  ] });
};
const Shuffled$w = () => {
  const playJapes = usePlayJapes();
  const kongGates = useJapesKongGates();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 1140,
        baseName: "Japes Cranky Location",
        level: "Japes",
        region: "Japes Shops",
        inLogic: kongGates
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 1150,
        baseName: "Japes Funky Location",
        level: "Japes",
        region: "Japes Shops",
        inLogic: playJapes
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 1170,
        baseName: "Japes Snide Location",
        level: "Japes",
        region: "Japes Shops",
        inLogic: playJapes
      }
    )
  ] });
};
const ShopLocations$6 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$w, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$w, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const JapesChecks = () => {
  const inStage = usePlayJapes();
  const anyKong = useAnyKong();
  const vine = useVine();
  const japesRambi = useJapesRambi();
  const japesSide = useJapesSideArea();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$7, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal$6, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal$6, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal$6, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal$6, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal$6, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1105,
        name: "Japes Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: inStage && anyKong && (vine || japesSide || japesRambi),
        canGetBreak: inStage && anyKong
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$7, {}) })
  ] });
};
const AztecCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Aztec",
      region: props.region,
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$v = () => {
  const templeTiny = useAztecTinyTemple();
  const dive = useDive();
  const canSlam = useSlamAztec();
  const lanky = useLanky();
  const grape = useGrape();
  const anyGun = useAnyGun();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2090,
      name: "Aztec Arena",
      region: "Tiny Temple",
      canGetLogic: templeTiny.in && dive && canSlam && lanky && grape,
      canGetBreak: logicBreak(templeTiny) && dive && canSlam && lanky && anyGun
    }
  );
};
const Shuffled$v = () => {
  const inStage = useAztecFront();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2190,
      name: "Aztec Arena",
      canGetLogic: inStage.in && anyKong,
      canGetBreak: inStage.out && anyKong
    }
  ) });
};
const ArenaLocations$6 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$v, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$v, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$u = () => {
  const llama = useAztecLlamaTemple();
  const aztecBack = useAztecBack();
  const rocket = useRocket();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2060,
        name: "Aztec Crate Llama Interior",
        region: "Llama Temple",
        canGetLogic: llama.in,
        canGetBreak: logicBreak(llama)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2061,
        name: "Aztec Crate Llama Exterior",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecBack.in && rocket,
        canGetBreak: logicBreak(aztecBack) && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2062,
        name: "Aztec Crate Gongs",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecBack.in,
        canGetBreak: logicBreak(aztecBack)
      }
    )
  ] });
};
const Shuffled$u = () => {
  const anyKong = useAnyKong();
  const inStage = useAztecFront();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2260,
        name: "Aztec Crate Location #1 (maybe)",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2261,
        name: "Aztec Crate Location #2 (maybe)",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    )
  ] });
};
const CrateLocations$5 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$u, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$u, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations$5 = () => {
  const shockwave = useShockwave();
  const aztecFront = useAztecFront();
  const pineapple = usePineapple();
  const door = useAztec5DoorTemple();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2070,
        name: "Aztec Dirt Oasis",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecFront.in && shockwave,
        canGetBreak: aztecFront.out && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2071,
        name: "Aztec Dirt Chunky Temple",
        region: "5 Door Temple",
        canGetLogic: door.in && pineapple && shockwave,
        canGetBreak: door.out && pineapple && shockwave
      }
    )
  ] });
};
const ShuffledDirtLocations$5 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const aztecFront = useAztecFront();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2270,
        name: "Aztec Dirt Location #1",
        canGetLogic: aztecFront.in && anyKong && shockwave,
        canGetBreak: logicBreak(aztecFront) && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2271,
        name: "Aztec Dirt Location #2",
        canGetLogic: aztecFront.in && anyKong && shockwave,
        canGetBreak: logicBreak(aztecFront) && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations$5 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$5, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$5, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$6 = () => {
  const anyKong = useAnyKong();
  const inStage = useAztecFront();
  const tiny = useAztecTinyTemple();
  const llama = useAztecLlamaTemple();
  const door = useAztec5DoorTemple();
  const coconut = useCoconut();
  const peanut = usePeanut();
  const grape = useGrape();
  const feather = useFeather();
  const mini = useMini();
  const pineapple = usePineapple();
  const triangle = useTriangle();
  const dive = useDive();
  const zinger = useDefeatZinger();
  const kaboom = useDefeatKaboom();
  const klaptrap = useDefeatPurpleKlaptrap();
  const klobber = useDefeatKlobber();
  const klump = useDefeatKlump();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2300,
        name: "Aztec Enemy Vase 0",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && pineapple,
        canGetBreak: logicBreak(inStage) && pineapple
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2301,
        name: "Aztec Enemy Vase 1",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && pineapple,
        canGetBreak: logicBreak(inStage) && pineapple
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2302,
        name: "Aztec Enemy Tunnel Pad 0",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && zinger,
        canGetBreak: logicBreak(inStage) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2303,
        name: "Aztec Enemy Tunnel Pad 1",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && zinger,
        canGetBreak: logicBreak(inStage) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2304,
        name: "Aztec Enemy Tunnel Cage 0",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2305,
        name: "Aztec Enemy Tunnel Cage 1",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2306,
        name: "Aztec Enemy Tunnel Cage 2",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2307,
        name: "Aztec Enemy Tunnel Cage 3",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2308,
        name: "Aztec Enemy Starting Tunnel 0",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2309,
        name: "Aztec Enemy Starting Tunnel 1",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2310,
        name: "Aztec Enemy Starting Tunnel 2",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && zinger,
        canGetBreak: logicBreak(inStage) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2311,
        name: "Aztec Enemy Starting Tunnel 3",
        region: "Various Aztec Tunnels",
        canGetLogic: inStage.in && zinger,
        canGetBreak: logicBreak(inStage) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2312,
        name: "Aztec Enemy Oasis Door",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2313,
        name: "Aztec Enemy Outside Llama",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2314,
        name: "Aztec Enemy Outside Tower",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2315,
        name: "Aztec Enemy Near Candy",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && zinger,
        canGetBreak: logicBreak(inStage) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2316,
        name: "Aztec Enemy Around Totem",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2317,
        name: "Aztec Enemy Outside 5DT",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && zinger,
        canGetBreak: logicBreak(inStage) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2318,
        name: "Aztec Enemy Near Snoop Tunnel",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2319,
        name: "Aztec Enemy DK 5DT Start Trap 0",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && kaboom,
        canGetBreak: logicBreak(door) && coconut && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2320,
        name: "Aztec Enemy DK 5DT Start Trap 1",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && kaboom,
        canGetBreak: logicBreak(door) && coconut && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2321,
        name: "Aztec Enemy DK 5DT Start Trap 2",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && kaboom,
        canGetBreak: logicBreak(door) && coconut && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2322,
        name: "Aztec Enemy DK 5DT End Trap 0",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && kaboom,
        canGetBreak: logicBreak(door) && coconut && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2323,
        name: "Aztec Enemy DK 5DT End Trap 1",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && kaboom,
        canGetBreak: logicBreak(door) && coconut && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2324,
        name: "Aztec Enemy DK 5DT End Trap 2",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && kaboom,
        canGetBreak: logicBreak(door) && coconut && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2325,
        name: "Aztec Enemy DK 5DT End Path 0",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && klaptrap,
        canGetBreak: logicBreak(door) && coconut && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2326,
        name: "Aztec Enemy DK 5DT End Path 1",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && klaptrap,
        canGetBreak: logicBreak(door) && coconut && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2327,
        name: "Aztec Enemy DK 5DT Start Path",
        region: "5 Door Temple",
        canGetLogic: door.in && coconut && klaptrap,
        canGetBreak: logicBreak(door) && coconut && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2328,
        name: "Aztec Enemy Diddy 5DT End Trap 0",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut && klobber,
        canGetBreak: logicBreak(door) && peanut && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2329,
        name: "Aztec Enemy Diddy 5DT End Trap 1",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut && klobber,
        canGetBreak: logicBreak(door) && peanut && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2330,
        name: "Aztec Enemy Diddy 5DT End Trap 2",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut && klobber,
        canGetBreak: logicBreak(door) && peanut && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2331,
        name: "Aztec Enemy Diddy 5DT Start Left 0",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut,
        canGetBreak: logicBreak(door) && peanut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2332,
        name: "Aztec Enemy Diddy 5DT Start Left 1",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut,
        canGetBreak: logicBreak(door) && peanut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2333,
        name: "Aztec Enemy Diddy 5DT Reward",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut && klump,
        canGetBreak: logicBreak(door) && peanut && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2334,
        name: "Aztec Enemy Diddy 5DT Second Switch",
        region: "5 Door Temple",
        canGetLogic: door.in && peanut,
        canGetBreak: logicBreak(door) && peanut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2335,
        name: "Aztec Enemy Lanky 5DT Joining Paths",
        region: "5 Door Temple",
        canGetLogic: door.in && grape && klump,
        canGetBreak: logicBreak(door) && grape && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2336,
        name: "Aztec Enemy Lanky 5DT End Trap",
        region: "5 Door Temple",
        canGetLogic: door.in && grape && klump,
        canGetBreak: logicBreak(door) && grape && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2337,
        name: "Aztec Enemy Lanky 5DT Reward",
        region: "5 Door Temple",
        canGetLogic: door.in && grape && klump,
        canGetBreak: logicBreak(door) && grape && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2338,
        name: "Aztec Enemy Tiny 5DT Start Right Front",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2339,
        name: "Aztec Enemy Tiny 5DT Start Left Back",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2340,
        name: "Aztec Enemy Tiny 5DT Start Right Back",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2341,
        name: "Aztec Enemy Tiny 5DT Start Left Front",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2342,
        name: "Aztec Enemy Tiny 5DT Reward 0",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2343,
        name: "Aztec Enemy Tiny 5DT Reward 1",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2344,
        name: "Aztec Enemy Tiny 5DT Dead End 0",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2345,
        name: "Aztec Enemy Tiny 5DT Dead End 1",
        region: "5 Door Temple",
        canGetLogic: door.in && feather && zinger,
        canGetBreak: logicBreak(door) && feather && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2346,
        name: "Aztec Enemy Chunky 5DT Start Right",
        region: "5 Door Temple",
        canGetLogic: door.in && pineapple && klobber,
        canGetBreak: logicBreak(door) && pineapple && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2347,
        name: "Aztec Enemy Chunky 5DT Start Left",
        region: "5 Door Temple",
        canGetLogic: door.in && pineapple && klobber,
        canGetBreak: logicBreak(door) && pineapple && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2348,
        name: "Aztec Enemy Chunky 5DT Second Right",
        region: "5 Door Temple",
        canGetLogic: door.in && pineapple && klobber,
        canGetBreak: logicBreak(door) && pineapple && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2349,
        name: "Aztec Enemy Chunky 5DT Second Left",
        region: "5 Door Temple",
        canGetLogic: door.in && pineapple && klobber,
        canGetBreak: logicBreak(door) && pineapple && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2350,
        name: "Aztec Enemy Chunky 5DT Reward",
        region: "5 Door Temple",
        canGetLogic: door.in && pineapple && zinger,
        canGetBreak: logicBreak(door) && pineapple && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2351,
        name: "Aztec Enemy Llama Kong Free Music",
        region: "Llama Temple",
        canGetLogic: llama.in && klaptrap,
        canGetBreak: logicBreak(llama) && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2352,
        name: "Aztec Enemy Llama Dino Music",
        region: "Llama Temple",
        canGetLogic: llama.in && klaptrap,
        canGetBreak: logicBreak(llama) && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2353,
        name: "Aztec Enemy Llama Matching 0",
        region: "Llama Temple",
        canGetLogic: llama.in && grape,
        canGetBreak: logicBreak(llama) && grape
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2354,
        name: "Aztec Enemy Llama Matching 1",
        region: "Llama Temple",
        canGetLogic: llama.in && grape,
        canGetBreak: logicBreak(llama) && grape
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2355,
        name: "Aztec Enemy Llama Right",
        region: "Llama Temple",
        canGetLogic: llama.in,
        canGetBreak: logicBreak(llama)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2356,
        name: "Aztec Enemy Llama Left",
        region: "Llama Temple",
        canGetLogic: llama.in,
        canGetBreak: logicBreak(llama)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2357,
        name: "Aztec Enemy Llama Melon Crate",
        region: "Llama Temple",
        canGetLogic: llama.in && klaptrap,
        canGetBreak: logicBreak(llama) && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2358,
        name: "Aztec Enemy Llama Slam Switch",
        region: "Llama Temple",
        canGetLogic: llama.in && klaptrap,
        canGetBreak: logicBreak(llama) && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2359,
        name: "Aztec Enemy TT Rotating 0",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2360,
        name: "Aztec Enemy TT Rotating 1",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2361,
        name: "Aztec Enemy TT Rotating 2",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2362,
        name: "Aztec Enemy TT Rotating 3",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2363,
        name: "Aztec Enemy TT Rotating 4",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2364,
        name: "Aztec Enemy TT Rotating 5",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2365,
        name: "Aztec Enemy TT Rotating 6",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2366,
        name: "Aztec Enemy TT Rotating 7",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2367,
        name: "Aztec Enemy TT Rotating 8",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2368,
        name: "Aztec Enemy TT Rotating 9",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2369,
        name: "Aztec Enemy TT Rotating 10",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2370,
        name: "Aztec Enemy TT Rotating 11",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2371,
        name: "Aztec Enemy TT Rotating 12",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2372,
        name: "Aztec Enemy TT Rotating 13",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2373,
        name: "Aztec Enemy TT Rotating 14",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2374,
        name: "Aztec Enemy TT Rotating 15",
        region: "Tiny Temple",
        canGetLogic: tiny.in && triangle,
        canGetBreak: logicBreak(tiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2375,
        name: "Aztec Enemy TT Mini 0",
        region: "Tiny Temple",
        canGetLogic: tiny.in && mini && dive,
        canGetBreak: logicBreak(tiny) && mini && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2376,
        name: "Aztec Enemy TT Mini 1",
        region: "Tiny Temple",
        canGetLogic: tiny.in && mini && dive,
        canGetBreak: logicBreak(tiny) && mini && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2377,
        name: "Aztec Enemy TT Mini 2",
        region: "Tiny Temple",
        canGetLogic: tiny.in && mini && dive,
        canGetBreak: logicBreak(tiny) && mini && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2378,
        name: "Aztec Enemy TT Mini 3",
        region: "Tiny Temple",
        canGetLogic: tiny.in && mini && dive,
        canGetBreak: logicBreak(tiny) && mini && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2379,
        name: "Aztec Enemy TT Guard 0",
        region: "Tiny Temple",
        canGetLogic: tiny.in,
        canGetBreak: logicBreak(tiny)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2380,
        name: "Aztec Enemy TT Guard 1",
        region: "Tiny Temple",
        canGetLogic: tiny.in,
        canGetBreak: logicBreak(tiny)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2381,
        name: "Aztec Enemy TT Main 0",
        region: "Tiny Temple",
        canGetLogic: tiny.in,
        canGetBreak: logicBreak(tiny)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2382,
        name: "Aztec Enemy TT Main 1",
        region: "Tiny Temple",
        canGetLogic: tiny.in,
        canGetBreak: logicBreak(tiny)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2383,
        name: "Aztec Enemy TT Main 2",
        region: "Tiny Temple",
        canGetLogic: tiny.in,
        canGetBreak: logicBreak(tiny)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2384,
        name: "Aztec Enemy TT Kong 0",
        region: "Tiny Temple",
        canGetLogic: tiny.in && dive,
        canGetBreak: logicBreak(tiny) && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2385,
        name: "Aztec Enemy TT Kong 1",
        region: "Tiny Temple",
        canGetLogic: tiny.in && dive,
        canGetBreak: logicBreak(tiny) && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2386,
        name: "Aztec Enemy TT Kong 2",
        region: "Tiny Temple",
        canGetLogic: tiny.in && dive,
        canGetBreak: logicBreak(tiny) && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2387,
        name: "Aztec Enemy TT Kong 3",
        region: "Tiny Temple",
        canGetLogic: tiny.in && dive,
        canGetBreak: logicBreak(tiny) && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2388,
        name: "Aztec Enemy TT Kong 4",
        region: "Tiny Temple",
        canGetLogic: tiny.in && dive,
        canGetBreak: logicBreak(tiny) && dive
      }
    )
  ] });
};
const Vanilla$t = () => {
  const camera = useCamera();
  const llama = useAztecLlamaTemple();
  const aztec5Door = useAztec5DoorTemple();
  const feather = useFeather();
  const mini = useMini();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2080,
        name: "Aztec Fairy Llama Temple",
        region: "Llama Temple",
        canGetLogic: llama.in && camera,
        canGetBreak: llama.out && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2081,
        name: "Aztec Fairy 5 Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && feather && mini && camera,
        canGetBreak: aztec5Door.out && feather && mini && camera
      }
    )
  ] });
};
const Shuffled$t = () => {
  const fairyLogic = useAztecShuffledFairyLogic();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2280,
        name: "Aztec Fairy Location #1",
        canGetLogic: fairyLogic.in,
        canGetBreak: fairyLogic.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2281,
        name: "Aztec Fairy Location #2",
        canGetLogic: fairyLogic.in,
        canGetBreak: fairyLogic.out
      }
    )
  ] });
};
const FairyLocations$6 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$t, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$t, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$s = () => {
  const aztecFront = useAztecFront();
  const aztecBack = useAztecBack();
  const lava = useAztecLlamaLava();
  const aztec5Door = useAztec5DoorTemple();
  const strong = useStrong();
  const twirl = useTwirl();
  const coconut = useCoconut();
  const rocket = useRocket();
  const pineapple = usePineapple();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2050,
        name: "Aztec Kasplat Behind DK Stone Door",
        region: "Various Aztec Tunnels",
        canGetLogic: aztecFront.in && coconut && (strong || twirl),
        canGetBreak: aztecFront.out && coconut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2051,
        name: "Aztec Kasplat On Tiny Temple",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecFront.in && rocket,
        canGetBreak: aztecFront.out && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2052,
        name: "Aztec Kasplat Llama Temple Lava",
        region: "Llama Temple",
        canGetLogic: lava.in,
        canGetBreak: logicBreak(lava)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2053,
        name: "Aztec Kasplat Hunky Chunky Barrel",
        region: "Various Aztec Tunnels",
        canGetLogic: aztecBack.in,
        canGetBreak: aztecBack.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2054,
        name: "Aztec Kasplat Chunky 5-Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && pineapple,
        canGetBreak: aztec5Door.out && pineapple
      }
    )
  ] });
};
const Shuffled$s = () => {
  const anyKong = useAnyKong();
  const inStage = useAztecFront();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2250,
        name: "Aztec Kasplat Location #1",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2251,
        name: "Aztec Kasplat Location #2",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2252,
        name: "Aztec Kasplat Location #3",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2253,
        name: "Aztec Kasplat Location #4",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2254,
        name: "Aztec Kasplat Location #5",
        canGetLogic: inStage.in && anyKong,
        canGetBreak: logicBreak(inStage) && anyKong
      }
    )
  ] });
};
const KasplatLocations$5 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$s, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$s, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$5 = () => {
  const aztecFront = useAztecFront();
  const templeTiny = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const aztec5Door = useAztec5DoorTemple();
  const boulderTech = useBoulderTech();
  const pineapple = usePineapple();
  const triangle = useTriangle();
  const hunky = useHunky();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2040,
        name: "Aztec Chunky Vases",
        region: "Various Aztec Tunnels",
        canGetLogic: aztecFront.in && boulderTech && pineapple,
        canGetBreak: logicBreak(aztecFront) && boulderTech && pineapple
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2041,
        name: "Aztec Chunky Klaptrap Room",
        region: "Tiny Temple",
        canGetLogic: templeTiny.in && triangle,
        canGetBreak: logicBreak(templeTiny) && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2042,
        name: "Aztec Chunky Caged Barrel",
        region: "Various Aztec Tunnels",
        canGetLogic: aztecBack.in && boulderTech && hunky,
        canGetBreak: logicBreak(aztecBack) && boulderTech && hunky
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2043,
        name: "Aztec Chunky 5 Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && pineapple,
        canGetBreak: logicBreak(aztec5Door) && pineapple
      }
    )
  ] });
};
const DiddyBananas$5 = () => {
  const templeTiny = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const aztec5Door = useAztec5DoorTemple();
  const charge = useCharge();
  const rocket = useRocket();
  const peanut = usePeanut();
  const dive = useDive();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2010,
        name: "Aztec Diddy Free Tiny",
        region: "Tiny Temple",
        canGetLogic: templeTiny.in && dive,
        canGetBreak: logicBreak(templeTiny) && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2011,
        name: "Aztec Diddy Ram Gongs",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecBack.in && charge && rocket,
        canGetBreak: logicBreak(aztecBack) && charge && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2012,
        name: "Aztec Diddy Vulture Race",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecBack.in && rocket,
        canGetBreak: logicBreak(aztecBack) && rocket
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2013,
        name: "Aztec Diddy 5 Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && peanut,
        canGetBreak: logicBreak(aztec5Door) && peanut
      }
    )
  ] });
};
const DkBananas$5 = () => {
  const aztecBack = useAztecBack();
  const aztecTunnel = useAztecBackTunnel();
  const aztec5Door = useAztec5DoorTemple();
  const llama = useAztecLlamaTemple();
  const dive = useDive();
  const strong = useStrong();
  const coconut = useCoconut();
  const blast = useBlast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2001,
        name: "Aztec DK Free Llama",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecBack.in && blast,
        canGetBreak: logicBreak(aztecBack) && blast
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2002,
        name: "Aztec DK Quicksand Cave",
        region: "Various Aztec Tunnels",
        canGetLogic: aztecTunnel.in && strong,
        canGetBreak: logicBreak(aztecTunnel)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2003,
        name: "Aztec DK 5 Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && coconut,
        canGetBreak: logicBreak(aztec5Door) && coconut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2004,
        name: "Aztec DK Free Lanky",
        region: "Llama Temple",
        canGetLogic: llama.in && dive,
        canGetBreak: logicBreak(llama) && dive
      }
    )
  ] });
};
const LankyBananas$5 = () => {
  const templeTiny = useAztecTinyTemple();
  const aztec5Door = useAztec5DoorTemple();
  const llama = useAztecLlamaTemple();
  const canSlam = useSlam();
  const lanky = useLanky();
  const trombone = useTrombone();
  const stand = useStand();
  const grape = useGrape();
  const dive = useDive();
  const twirl = useTwirl();
  const anyGun = useAnyGun();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2020,
        name: "Aztec Lanky Vulture",
        region: "Tiny Temple",
        canGetLogic: templeTiny.in && dive && canSlam && grape,
        canGetBreak: logicBreak(templeTiny) && dive && canSlam && lanky && anyGun
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2021,
        name: "Aztec Lanky 5 Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && grape,
        canGetBreak: logicBreak(aztec5Door) && grape
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2022,
        name: "Aztec Lanky Llama Temple Barrel",
        region: "Llama Temple",
        canGetLogic: llama.in && trombone && stand,
        canGetBreak: logicBreak(llama) && trombone && (stand || twirl)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2023,
        name: "Aztec Lanky Matching Game",
        region: "Llama Temple",
        canGetLogic: llama.in && grape,
        canGetBreak: logicBreak(llama) && grape
      }
    )
  ] });
};
const TinyBananas$5 = () => {
  const templeTiny = useAztecTinyTemple();
  const aztec5Door = useAztec5DoorTemple();
  const aztecBack = useAztecBack();
  const mini = useMini();
  const sax = useSax();
  const feather = useFeather();
  const dive = useDive();
  const charge = useCharge();
  const rocket = useRocket();
  const lava = useAztecLlamaLava();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2030,
        name: "Aztec Tiny Klaptrap Room",
        region: "Tiny Temple",
        canGetLogic: templeTiny.in && mini && dive,
        canGetBreak: logicBreak(templeTiny) && mini && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2031,
        name: "Aztec Tiny 5 Door Temple",
        region: "5 Door Temple",
        canGetLogic: aztec5Door.in && feather,
        canGetBreak: logicBreak(aztec5Door) && feather
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2032,
        name: "Aztec Tiny Beetle Race",
        region: "Aztec Oasis And Totem Area",
        canGetLogic: aztecBack.in && charge && rocket && mini && sax,
        canGetBreak: logicBreak(aztecBack) && charge && rocket && mini && sax
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2033,
        name: "Aztec Tiny Llama Temple",
        region: "Llama Temple",
        canGetLogic: lava.in,
        canGetBreak: logicBreak(lava)
      }
    )
  ] });
};
const useChunkyMedalInLogic$5 = () => {
  const inStage = useAztecFront();
  const tinyTemple = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const doorTemple = useAztec5DoorTemple();
  const kong = useChunky();
  const gun = usePineapple();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage.in) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (inStage.in) {
    bananas += 5;
    if (gun) {
      bananas += 20;
    }
    if (tinyTemple.in) {
      bananas += 29;
      if (gun && dive) {
        bananas += 10;
      }
    }
    if (aztecBack.in) {
      bananas += 16;
      if (doorTemple.in && gun) {
        bananas += 20;
      }
    }
  }
  return bananas;
};
const useChunkyMedalOutLogic$5 = () => {
  const inStage = useAztecFront();
  const tinyTemple = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const doorTemple = useAztec5DoorTemple();
  const kong = useChunky();
  const pineapple = usePineapple();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!logicBreak(inStage)) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (logicBreak(inStage)) {
    bananas += 5;
    if (pineapple) {
      bananas += 20;
    }
    if (logicBreak(tinyTemple)) {
      bananas += 29;
      if (pineapple && dive) {
        bananas += 10;
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 16;
      if (logicBreak(doorTemple) && pineapple) {
        bananas += 20;
      }
    }
  }
  return bananas;
};
const ChunkyMedal$5 = () => {
  const inLogic = useChunkyMedalInLogic$5();
  const outLogic = useChunkyMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2104,
      name: "Aztec Chunky Medal",
      region: "Aztec Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDiddyMedalInLogic$4 = () => {
  const inStage = useAztecFront();
  const tinyTemple = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const doorTemple = useAztec5DoorTemple();
  const backTunnel = useAztecBackTunnel();
  const canSlam = useSlamAztec();
  const kong = useDiddy();
  const gun = usePeanut();
  const crystal = useRocket();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage.in) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (inStage.in) {
    bananas += 5;
    if (gun) {
      bananas += 10;
    }
    if (tinyTemple.in) {
      if (canSlam) {
        bananas += 3;
        if (gun) {
          bananas += 15;
        }
      }
      if (dive) {
        bananas += 7;
      }
    }
    if (aztecBack.in) {
      bananas += 30;
      if (crystal) {
        bananas += 10;
      }
      if (doorTemple.in && gun) {
        bananas += 10;
      }
      if (backTunnel.in && gun) {
        bananas += 10;
      }
    }
  }
  return bananas;
};
const useDiddyMedalOutLogic$4 = () => {
  const inStage = useAztecFront();
  const tinyTemple = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const doorTemple = useAztec5DoorTemple();
  const backTunnel = useAztecBackTunnel();
  const canSlam = useSlamAztec();
  const kong = useDiddy();
  const gun = usePeanut();
  const crystal = useRocket();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!logicBreak(inStage)) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (logicBreak(inStage)) {
    bananas += 5;
    if (gun) {
      bananas += 10;
    }
    if (logicBreak(tinyTemple)) {
      if (canSlam) {
        bananas += 8;
        if (gun) {
          bananas += 10;
        }
      }
      if (dive) {
        bananas += 7;
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 30;
      if (crystal) {
        bananas += 10;
      }
      if (logicBreak(doorTemple) && gun) {
        bananas += 10;
      }
      if (logicBreak(backTunnel) && gun) {
        bananas += 10;
      }
    }
  }
  return bananas;
};
const DiddyMedal$5 = () => {
  const inLogic = useDiddyMedalInLogic$4();
  const outLogic = useDiddyMedalOutLogic$4();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2101,
      name: "Aztec Diddy Medal",
      region: "Aztec Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalInLogic$5 = () => {
  const inStage = useAztecFront();
  const kasplat = useAztecFrontKasplat();
  const aztecBack = useAztecBack();
  const llamaTemple = useAztecLlamaTemple();
  const backTunnel = useAztecBackTunnel();
  const kong = useDk();
  const gun = useCoconut();
  const crystal = useStrong();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage.in) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (inStage.in) {
    bananas += 18;
    if (kasplat.in) {
      bananas += 10;
    }
    if (aztecBack.in) {
      bananas += 7;
      if (gun) {
        bananas += 30;
      }
      if (llamaTemple.in) {
        bananas += 15;
        if (backTunnel.in && crystal) {
          bananas += 20;
        }
      }
    }
  }
  return bananas;
};
const useDkMedalOutLogic$5 = () => {
  const inStage = useAztecFront();
  const kasplat = useAztecFrontKasplat();
  const aztecBack = useAztecBack();
  const llamaTemple = useAztecLlamaTemple();
  const backTunnel = useAztecBackTunnel();
  const kong = useDk();
  const gun = useCoconut();
  const shuffleBananas = useShuffleColoredBananas();
  if (!logicBreak(inStage)) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (logicBreak(inStage)) {
    bananas += 18;
    if (logicBreak(kasplat)) {
      bananas += 10;
    }
    if (logicBreak(aztecBack)) {
      bananas += 7;
      if (gun) {
        bananas += 30;
      }
      if (logicBreak(llamaTemple)) {
        bananas += 15;
        if (logicBreak(backTunnel)) {
          bananas += 20;
        }
      }
    }
  }
  return bananas;
};
const DkMedal$5 = () => {
  const inLogic = useDkMedalInLogic$5();
  const outLogic = useDkMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2100,
      name: "Aztec DK Medal",
      region: "Aztec Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalInLogic$5 = () => {
  const inStage = useAztecFront();
  const tinyTemple = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const llamaTemple = useAztecLlamaTemple();
  const doorTemple = useAztec5DoorTemple();
  const anyMusic = useAnyMusic();
  const kong = useLanky();
  const gun = useGrape();
  const vine = useVine();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage.in) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (inStage.in) {
    bananas += 5;
    if (tinyTemple.in && dive) {
      bananas += 14;
    }
    if (aztecBack.in) {
      bananas += 35;
      if (doorTemple.in && gun) {
        bananas += 10;
      }
      if (llamaTemple.in) {
        bananas += 11;
        if (gun && vine) {
          bananas += 5;
        }
        if (anyMusic && dive && gun) {
          bananas += 20;
        }
      }
    }
  }
  return bananas;
};
const useLankyMedalOutLogic$5 = () => {
  const inStage = useAztecFront();
  const tinyTemple = useAztecTinyTemple();
  const aztecBack = useAztecBack();
  const llamaTemple = useAztecLlamaTemple();
  const doorTemple = useAztec5DoorTemple();
  const anyMusic = useAnyMusic();
  const kong = useLanky();
  const gun = useGrape();
  const vine = useVine();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!logicBreak(inStage)) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (logicBreak(inStage)) {
    bananas += 5;
    if (logicBreak(tinyTemple) && dive) {
      bananas += 14;
    }
    if (logicBreak(aztecBack)) {
      bananas += 35;
      if (logicBreak(doorTemple) && gun) {
        bananas += 10;
      }
      if (logicBreak(llamaTemple)) {
        bananas += 11;
        if (gun && vine) {
          bananas += 5;
        }
        if (anyMusic && dive && gun) {
          bananas += 20;
        }
      }
    }
  }
  return bananas;
};
const LankyMedal$5 = () => {
  const inLogic = useLankyMedalInLogic$5();
  const outLogic = useLankyMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2102,
      name: "Aztec Lanky Medal",
      region: "Aztec Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useTinyMedalInLogic$4 = () => {
  const inStage = useAztecFront();
  const aztecBack = useAztecBack();
  const tinyTemple = useAztecTinyTemple();
  const llamaTemple = useAztecLlamaTemple();
  const lava = useAztecLlamaLava();
  const canSlam = useSlamAztec();
  const kong = useTiny();
  const gun = useFeather();
  const crystal = useMini();
  const move = useTwirl();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage.in) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (inStage.in) {
    if (tinyTemple.in && dive) {
      if (gun) {
        bananas += 20;
      }
      if (crystal) {
        bananas += 5;
      }
    }
    if (aztecBack.in) {
      bananas += 50;
    }
    if (llamaTemple.in) {
      bananas += 3;
      if (gun) {
        bananas += 10;
      }
      if (lava.in) {
        bananas += 2;
        if (move || canSlam) {
          bananas += 10;
        }
      }
    }
  }
  return bananas;
};
const useTinyMedalOutLogic$4 = () => {
  const inStage = useAztecFront();
  const aztecBack = useAztecBack();
  const tinyTemple = useAztecTinyTemple();
  const llamaTemple = useAztecLlamaTemple();
  const lava = useAztecLlamaLava();
  const kong = useTiny();
  const gun = useFeather();
  const crystal = useMini();
  const dive = useDive();
  const shuffleBananas = useShuffleColoredBananas();
  if (!logicBreak(inStage)) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 0;
  if (logicBreak(inStage)) {
    if (logicBreak(tinyTemple) && dive) {
      if (gun) {
        bananas += 20;
      }
      if (crystal) {
        bananas += 5;
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 50;
    }
    if (logicBreak(llamaTemple)) {
      bananas += 3;
      if (gun) {
        bananas += 10;
      }
      if (logicBreak(lava)) {
        bananas += 12;
      }
    }
  }
  return bananas;
};
const TinyMedal$5 = () => {
  const inLogic = useTinyMedalInLogic$4();
  const outLogic = useTinyMedalOutLogic$4();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AztecCheck,
    {
      id: 2103,
      name: "Aztec Tiny Medal",
      region: "Aztec Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$r = () => {
  const aztecFront = useAztecFront();
  const aztecBack = useAztecBack();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2110,
        baseName: "Aztec Cranky",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecBack.in,
        outLogic: aztecBack.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2120,
        baseName: "Aztec Funky",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecBack.in,
        outLogic: aztecBack.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2130,
        baseName: "Aztec Candy",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecFront.in,
        outLogic: aztecFront.out
      }
    )
  ] });
};
const Shuffled$r = () => {
  const aztecFront = useAztecFront();
  const aztecBack = useAztecBack();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2140,
        baseName: "Aztec Cranky Location",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecBack.in,
        outLogic: aztecBack.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2150,
        baseName: "Aztec Funky Location",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecBack.in,
        outLogic: aztecBack.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2160,
        baseName: "Aztec Candy Location",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecFront.in,
        outLogic: aztecFront.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 2170,
        baseName: "Aztec Snide Location",
        level: "Aztec",
        region: "Aztec Shops",
        inLogic: aztecBack.in,
        outLogic: aztecBack.out
      }
    )
  ] });
};
const ShopLocations$5 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$r, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$r, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const AztecChecks = () => {
  const aztecFront = useAztecFront();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$6, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal$5, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal$5, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal$5, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal$5, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal$5, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AztecCheck,
      {
        id: 2105,
        name: "Aztec Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: aztecFront.in && anyKong,
        canGetBreak: aztecFront.out && anyKong
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$6, {}) })
  ] });
};
const FactoryCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Factory",
      region: props.region,
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$q = () => {
  const inStage = useFactoryTesting();
  const grab = useGrab();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3090, name: "Factory Arena", region: "R&D Area", canGetLogic: inStage && grab });
};
const Shuffled$q = () => {
  const inStage = usePlayFactory();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3190, name: "Factory Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations$5 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$q, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$q, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$p = () => {
  const inStage = usePlayFactory();
  const anyKong = useAnyKong();
  const testing = useFactoryTesting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3060,
        name: "Factory Crate Candy",
        region: "Storage And Arcade",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3061,
        name: "Factory Crate Funky",
        region: "Testing Area",
        canGetLogic: testing && anyKong
      }
    )
  ] });
};
const Shuffled$p = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayFactory();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 1260,
        name: "Factory Crate Location #1 (maybe)",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 1261,
        name: "Factory Crate Location #2 (maybe)",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const CrateLocations$4 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$p, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$p, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations$4 = () => {
  const inStage = usePlayFactory();
  const shockwave = useShockwave();
  const punch = usePunch();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FactoryCheck,
    {
      id: 3070,
      name: "Factory Dirt Dark Room",
      region: "Storage And Arcade",
      canGetLogic: inStage && punch && shockwave
    }
  );
};
const ShuffledDirtLocations$4 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const inStage = usePlayFactory();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3270,
        name: "Factory Dirt Location #1",
        canGetLogic: inStage && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3271,
        name: "Factory Dirt Location #2",
        canGetLogic: inStage && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations$4 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$4, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$4, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$5 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const guitar = useGuitar();
  const punch = usePunch();
  const anyKong = useAnyKong();
  const robo = useDefeatRoboKremling();
  const zinger = useDefeatZinger();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3300,
        name: "Factory Enemy Shops 0",
        region: "Storage And Arcade",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3301,
        name: "Factory Enemy Shops 1",
        region: "Storage And Arcade",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3302,
        name: "Factory Enemy Lobby Left",
        region: "Factory Start",
        canGetLogic: inStage && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3303,
        name: "Factory Enemy Lobby Right",
        region: "Factory Start",
        canGetLogic: inStage && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3304,
        name: "Factory Enemy Storage Room",
        region: "Storage And Arcade",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3305,
        name: "Factory Enemy Block Tower 0",
        region: "Testing Area",
        canGetLogic: testing && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3306,
        name: "Factory Enemy Block Tower 1",
        region: "Testing Area",
        canGetLogic: testing && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3307,
        name: "Factory Enemy Block Tower 2",
        region: "Testing Area",
        canGetLogic: testing && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3308,
        name: "Factory Enemy Tunnel to Hatch",
        region: "Factory Start",
        canGetLogic: testing && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3309,
        name: "Factory Enemy Tunnel to Prod 0",
        region: "Production Room",
        canGetLogic: testing && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3310,
        name: "Factory Enemy Tunnel to Prod 1",
        region: "Production Room",
        canGetLogic: testing && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3311,
        name: "Factory Enemy Tunnel to Block Tower",
        region: "Testing Area",
        canGetLogic: testing && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3312,
        name: "Factory Enemy Tunnel to Race 0",
        region: "R&D Area",
        canGetLogic: testing && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3313,
        name: "Factory Enemy Tunnel to Race 1",
        region: "R&D Area",
        canGetLogic: testing && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3314,
        name: "Factory Enemy Low Warp 4",
        region: "Production Room",
        canGetLogic: inStage && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3315,
        name: "Factory Enemy Diddy Switch",
        region: "Production Room",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3316,
        name: "Factory Enemy To Block Tower Tunnel",
        region: "Testing Area",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3317,
        name: "Factory Enemy Dark Room 0",
        region: "Storage And Arcade",
        canGetLogic: inStage && punch && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3318,
        name: "Factory Enemy Dark Room 1",
        region: "Storage And Arcade",
        canGetLogic: inStage && punch && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3319,
        name: "Factory Enemy 1342 Gauntlet 0",
        region: "R&D Area",
        canGetLogic: testing && guitar && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3320,
        name: "Factory Enemy 1342 Gauntlet 1",
        region: "R&D Area",
        canGetLogic: testing && guitar && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3321,
        name: "Factory Enemy 1342 Gauntlet 2",
        region: "R&D Area",
        canGetLogic: testing && guitar && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3322,
        name: "Factory Enemy 3124 Gauntlet 0",
        region: "R&D Area",
        canGetLogic: testing && guitar
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3323,
        name: "Factory Enemy 3124 Gauntlet 1",
        region: "R&D Area",
        canGetLogic: testing && guitar
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3324,
        name: "Factory Enemy 3124 Gauntlet 2",
        region: "R&D Area",
        canGetLogic: testing && guitar
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3325,
        name: "Factory Enemy 4231 Gauntlet 0",
        region: "R&D Area",
        canGetLogic: testing && guitar && robo
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3326,
        name: "Factory Enemy 4231 Gauntlet 1",
        region: "R&D Area",
        canGetLogic: testing && guitar && robo
      }
    )
  ] });
};
const Vanilla$o = () => {
  const testing = useFactoryTesting();
  const camera = useCamera();
  const anyKong = useAnyKong();
  const mini = useMini();
  const feather = useFeather();
  const canSlam = useSlamFactory();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3080,
        name: "Factory Fairy Counting",
        region: "Testing Area",
        canGetLogic: testing && camera && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3081,
        name: "Factory Fairy Dartboard",
        region: "Testing Area",
        canGetLogic: testing && camera && mini && canSlam && feather
      }
    )
  ] });
};
const Shuffled$o = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayFactory();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3280,
        name: "Factory Fairy Location #1",
        canGetLogic: inStage && anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3281,
        name: "Factory Fairy Location #2",
        canGetLogic: inStage && anyKong && camera
      }
    )
  ] });
};
const FairyLocations$5 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$o, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$o, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$n = () => {
  const inStage = usePlayFactory();
  const production = useFactoryProductionTop();
  const testing = useFactoryTesting();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3050,
        name: "Factory Kasplat Upper Production Pipe",
        region: "Production Room",
        canGetLogic: production && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3051,
        name: "Factory Kasplat Production Floor",
        region: "Production Room",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3052,
        name: "Factory Kasplat R&D",
        region: "Testing Area",
        canGetLogic: testing && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3053,
        name: "Factory Kasplat Pole to Arcade",
        region: "Storage And Arcade",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3054,
        name: "Factory Kasplat Block Tower",
        region: "Testing Area",
        canGetLogic: testing && anyKong
      }
    )
  ] });
};
const Shuffled$n = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayFactory();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3250, name: "Factory Kasplat Location #1", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3251, name: "Factory Kasplat Location #2", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3252, name: "Factory Kasplat Location #3", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3253, name: "Factory Kasplat Location #4", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryCheck, { id: 3254, name: "Factory Kasplat Location #5", canGetLogic: inStage && anyKong })
  ] });
};
const KasplatLocations$4 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$n, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$n, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$4 = () => {
  const testing = useFactoryTesting();
  const punch = usePunch();
  const triangle = useTriangle();
  const hunky = useHunky();
  const canSlam = useSlamFactory();
  const inStage = usePlayFactory();
  const production = useFactoryProductionEnabled();
  const chunky = useChunky();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3040,
        name: "Factory Chunky Kaiju",
        region: "R&D Area",
        canGetLogic: testing && punch && triangle && hunky
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3041,
        name: "Factory Chunky Dark Room",
        region: "Storage And Arcade",
        canGetLogic: inStage && punch && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3042,
        name: "Factory Chunky Arcade Barrel",
        region: "Storage And Arcade",
        canGetLogic: inStage && punch
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3043,
        name: "Factory Chunky Production Room",
        region: "Production Room",
        canGetLogic: production && chunky && canSlam
      }
    )
  ] });
};
const DiddyBananas$4 = () => {
  const testing = useFactoryTesting();
  const production = useFactoryProductionEnabled();
  const canSlam = useSlamFactory();
  const dk2 = useDk();
  const diddy = useDiddy();
  const chunky = useChunky();
  const spring = useSpring();
  const guitar = useGuitar();
  const charge = useCharge();
  const highGrab = useHighGrab();
  const vine = useVine();
  const twirl = useTwirl();
  const autoBonus = useAutoBonus();
  const hut = useFactoryHut();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3010,
        name: "Factory Diddy Block Tower",
        region: "Testing Area",
        canGetLogic: testing && spring,
        canGetBreak: testing && highGrab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3011,
        name: "Factory Diddy R&D",
        region: "R&D Area",
        canGetLogic: testing && guitar && charge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3012,
        name: "Factory Diddy Chunky Room Barrel",
        region: "Storage And Arcade",
        canGetLogic: hut.in && canSlam && diddy && (autoBonus || vine),
        canGetBreak: logicBreak(hut) && canSlam && diddy && (autoBonus || vine || dk2 || chunky)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3013,
        name: "Factory Diddy Production Room",
        region: "Production Room",
        canGetLogic: production && canSlam && diddy && spring,
        canGetBreak: production && canSlam && diddy && (twirl || highGrab)
      }
    )
  ] });
};
const useFastArcade = () => useDonkStore(useShallow((state) => state.fastChecks.factoryArcade));
const useFastMermaid = () => useDonkStore(useShallow((state) => state.fastChecks.galleonMermaid));
const DkBananas$4 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const canSlam = useSlamFactory();
  const production = useFactoryProductionEnabled();
  const dk2 = useDk();
  const coconut = useCoconut();
  const grab = useGrab();
  const strong = useStrong();
  const blast = useBlast();
  const diddy = useDiddy();
  const hut = useFactoryHut();
  const fastArcade = useFastArcade();
  const [productionPower] = useDonkStore(
    useShallow((state) => [state.removeBarriers.factoryProduction])
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3001,
        name: "Factory DK Number Game",
        region: "Testing Area",
        canGetLogic: testing && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3002,
        name: "Factory DK Power Hut",
        region: "Storage And Arcade",
        canGetLogic: hut.in && coconut && (productionPower || grab),
        canGetBreak: hut.out && coconut && (productionPower || grab)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3003,
        name: "Factory DK Blast (+ Arcade?)",
        region: "Storage And Arcade",
        canGetLogic: inStage && blast && (fastArcade || grab)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3004,
        name: "Factory DK Crusher Room",
        region: "Production Room",
        canGetLogic: production && strong,
        canGetBreak: production && (dk2 || diddy)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3005,
        name: "Factory DK Nintendo Coin",
        region: "Storage And Arcade",
        canGetLogic: inStage && blast && grab
      }
    ) })
  ] });
};
const LankyBananas$4 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const production = useFactoryProductionEnabled();
  const canSlam = useSlamFactory();
  const balloon = useBalloon();
  const anyKong = useAnyKong();
  const stand = useStand();
  const lanky = useLanky();
  const tiny = useTiny();
  const trombone = useTrombone();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3020,
        name: "Factory Lanky Testing Room Barrel",
        region: "Testing Area",
        canGetLogic: testing && balloon,
        canGetBreak: testing && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3021,
        name: "Factory Lanky Piano",
        region: "Testing Area",
        canGetLogic: testing && lanky && canSlam && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3022,
        name: "Factory Lanky Free Chunky",
        region: "Storage And Arcade",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3023,
        name: "Factory Lanky Production Room",
        region: "Production Room",
        canGetLogic: production && canSlam && stand,
        canGetBreak: production && (stand || tiny)
      }
    )
  ] });
};
const TinyBananas$4 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const production = useFactoryProductionEnabled();
  const canSlam = useSlamFactory();
  const mini = useMini();
  const feather = useFeather();
  const twirl = useTwirl();
  const dk2 = useDk();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3030,
        name: "Factory Tiny Dartboard",
        region: "Testing Area",
        canGetLogic: testing && mini && feather && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3031,
        name: "Factory Tiny Car Race",
        region: "R&D Area",
        canGetLogic: testing && mini
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3032,
        name: "Factory Tiny by Arcade",
        region: "Storage And Arcade",
        canGetLogic: inStage && mini
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3033,
        name: "Factory Tiny Production Room",
        region: "Production Room",
        canGetLogic: production && canSlam && twirl,
        canGetBreak: production && (twirl || dk2)
      }
    )
  ] });
};
const useChunkyMedalInLogic$4 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const prodTop = useFactoryProductionTop();
  const kong = useChunky();
  const gun = usePineapple();
  const music = useTriangle();
  const move = usePunch();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 20;
  if (gun) {
    bananas += 10;
  }
  if (move) {
    bananas += 15;
  }
  if (testing) {
    bananas += 5;
    if (gun) {
      bananas += 10;
    }
    if (music && move) {
      bananas += 10;
      if (gun) {
        bananas += 10;
      }
    }
  }
  if (prodTop) {
    bananas += 20;
  }
  return bananas;
};
const useChunkyMedalOutLogic$4 = () => useChunkyMedalInLogic$4();
const ChunkyMedal$4 = () => {
  const inLogic = useChunkyMedalInLogic$4();
  const outLogic = useChunkyMedalOutLogic$4();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FactoryCheck,
    {
      id: 3104,
      name: "Factory Chunky Medal",
      region: "Factory Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDiddyMedalCommonLogic$3 = () => {
  const testing = useFactoryTesting();
  const production = useFactoryProductionEnabled();
  const gun = usePeanut();
  const music = useGuitar();
  let bananas = 22;
  if (production) {
    bananas += 15;
  }
  if (testing) {
    bananas += 13;
    if (music && gun) {
      bananas += 30;
    }
  }
  return bananas;
};
const useDiddyMedalInLogic$3 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const kong = useDiddy();
  const pad = useSpring();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (testing && pad) {
    bananas += 20;
  }
  return bananas;
};
const useDiddyMedalOutLogic$3 = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  const kong = useDiddy();
  const highGrab = useHighGrab();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (testing && highGrab) {
    bananas += 20;
  }
  return bananas;
};
const DiddyMedal$4 = () => {
  const inLogic = useDiddyMedalInLogic$3();
  const outLogic = useDiddyMedalOutLogic$3();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FactoryCheck,
    {
      id: 3101,
      name: "Factory Diddy Medal",
      region: "Factory Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalCommonLogic$4 = () => {
  const testing = useFactoryTesting();
  const coconut = useCoconut();
  const blast = useBlast();
  let bananas = 15;
  if (blast) {
    bananas += 20;
  }
  if (coconut) {
    bananas += 10;
  }
  if (testing) {
    bananas += 5;
    if (coconut) {
      bananas += 35;
    }
  }
  return bananas;
};
const useDkMedalInLogic$4 = () => {
  const inStage = usePlayFactory();
  const production = useFactoryProductionEnabled();
  const kong = useDk();
  const strong = useStrong();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (production && strong) {
    bananas += 15;
  }
  return bananas;
};
const useDkMedalOutLogic$4 = () => {
  const inStage = usePlayFactory();
  const production = useFactoryProductionEnabled();
  const kong = useDk();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (production) {
    bananas += 15;
  }
  return bananas;
};
const DkMedal$4 = () => {
  const inLogic = useDkMedalInLogic$4();
  const outLogic = useDkMedalOutLogic$4();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FactoryCheck,
    {
      id: 3100,
      name: "Factory DK Medal",
      region: "Factory Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalCommonLogic$4 = () => {
  const testing = useFactoryTesting();
  const production = useFactoryProductionEnabled();
  const prodTop = useFactoryProductionTop();
  const gun = useGrape();
  const music = useTrombone();
  let bananas = 10;
  if (testing) {
    bananas += 15;
    if (gun && music) {
      bananas += 10;
    }
  }
  if (prodTop) {
    bananas += 15;
  }
  if (production) {
    bananas += 20;
  }
  return bananas;
};
const useLankyMedalInLogic$4 = () => {
  const inStage = usePlayFactory();
  const production = useFactoryProductionEnabled();
  const kong = useLanky();
  const move = useStand();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (move) {
    bananas += 5;
    if (production) {
      bananas += 25;
    }
  }
  return bananas;
};
const useLankyMedalOutLogic$4 = () => {
  const inStage = usePlayFactory();
  const kong = useLanky();
  const shuffleBananas = useShuffleColoredBananas();
  const bananas = useLankyMedalCommonLogic$4();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  return bananas + 30;
};
const LankyMedal$4 = () => {
  const inLogic = useLankyMedalInLogic$4();
  const outLogic = useLankyMedalOutLogic$4();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FactoryCheck,
    {
      id: 3102,
      name: "Factory Lanky Medal",
      region: "Factory Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useTinyMedalCommonLogic$3 = () => {
  const testing = useFactoryTesting();
  const production = useFactoryProductionEnabled();
  const prodTop = useFactoryProductionTop();
  const gun = useFeather();
  const crystal = useMini();
  let banana = 15;
  if (testing) {
    banana += 25;
    if (crystal) {
      banana += 5;
    }
    if (gun) {
      banana += 20;
    }
  }
  if (prodTop) {
    banana += 10;
  }
  if (production) {
    banana += 20;
  }
  return banana;
};
const useTinyMedalInLogic$3 = () => {
  const inStage = usePlayFactory();
  const production = useFactoryProductionEnabled();
  const kong = useTiny();
  const move = useTwirl();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (production && move) {
    bananas += 5;
  }
  return bananas;
};
const useTinyMedalOutLogic$3 = () => {
  const inStage = usePlayFactory();
  const production = useFactoryProductionEnabled();
  const kong = useTiny();
  const dk2 = useDk();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (production && dk2) {
    bananas += 5;
  }
  return bananas;
};
const TinyMedal$4 = () => {
  const inLogic = useTinyMedalInLogic$3();
  const outLogic = useTinyMedalOutLogic$3();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FactoryCheck,
    {
      id: 3103,
      name: "Factory Tiny Medal",
      region: "Factory Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$m = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3110,
        baseName: "Factory Cranky",
        level: "Factory",
        region: "Factory Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3120,
        baseName: "Factory Funky",
        level: "Factory",
        region: "Factory Shops",
        inLogic: testing
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3130,
        baseName: "Factory Candy",
        level: "Factory",
        region: "Factory Shops",
        inLogic: inStage
      }
    )
  ] });
};
const Shuffled$m = () => {
  const inStage = usePlayFactory();
  const testing = useFactoryTesting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3140,
        baseName: "Factory Cranky Location",
        level: "Factory",
        region: "Factory Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3150,
        baseName: "Factory Funky Location",
        level: "Factory",
        region: "Factory Shops",
        inLogic: testing
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3160,
        baseName: "Factory Candy Location",
        level: "Factory",
        region: "Factory Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 3170,
        baseName: "Factory Snide Location",
        level: "Factory",
        region: "Factory Shops",
        inLogic: testing
      }
    )
  ] });
};
const ShopLocations$4 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$m, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$m, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const FactoryChecks = () => {
  const inStage = usePlayFactory();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$5, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal$4, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal$4, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal$4, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal$4, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal$4, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FactoryCheck,
      {
        id: 3105,
        name: "Factory Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: inStage && anyKong
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$5, {}) })
  ] });
};
const GalleonCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Galleon",
      region: props.region,
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$l = () => {
  const inStage = usePlayGalleon();
  const punch = usePunch();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4090,
      name: "Galleon Arena",
      region: "Galleon Caverns",
      canGetLogic: inStage && punch
    }
  );
};
const Shuffled$l = () => {
  const inStage = usePlayGalleon();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonCheck, { id: 4190, name: "Galleon Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations$4 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$l, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$l, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$k = () => {
  const outskirts = useGalleonOutskirts();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4060,
      name: "Galleon Crate Cactus",
      region: "Shipyard Outskirts",
      canGetLogic: outskirts && anyKong
    }
  ) });
};
const Shuffled$k = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayGalleon();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4260,
        name: "Galleon Crate Location #1 (maybe)",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4261,
        name: "Galleon Crate Location #2 (maybe)",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const CrateLocations$3 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$k, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$k, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations$3 = () => {
  const lighthouseArea = useGalleonLighthouseArea();
  const canSlam = useSlamGalleon();
  const shockwave = useShockwave();
  const dk2 = useDk();
  const highTide = useGalleonHighTide();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4070,
      name: "Galleon Dirt Lighthouse",
      region: "Lighthouse Area",
      canGetLogic: lighthouseArea && highTide && canSlam && dk2 && shockwave,
      canGetBreak: lighthouseArea && canSlam && dk2 && shockwave
    }
  ) });
};
const ShuffledDirtLocations$3 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const inStage = usePlayGalleon();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4270,
        name: "Galleon Dirt Location #1",
        canGetLogic: inStage && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4271,
        name: "Galleon Dirt Location #2",
        canGetLogic: inStage && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations$3 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$3, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$3, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$4 = () => {
  const inStage = usePlayGalleon();
  const lighthouse = useGalleonLighthousePlatform();
  const klobber = useDefeatKlobber();
  const kaboom = useDefeatKaboom();
  const kosha = useDefeatKosha();
  const anyKong = useAnyKong();
  const klump = useDefeatKlump();
  const dk2 = useDk();
  const canSlam = useSlamGalleon();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4300,
        name: "Galleon Enemy Chest Room 0",
        region: "Galleon Caverns",
        canGetLogic: inStage && klobber
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4301,
        name: "Galleon Enemy Chest Room 1",
        region: "Galleon Caverns",
        canGetLogic: inStage && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4302,
        name: "Galleon Enemy Vine Cannon",
        region: "Galleon Caverns",
        canGetLogic: inStage && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4303,
        name: "Galleon Enemy Cranky Cannon",
        region: "Galleon Caverns",
        canGetLogic: inStage && kaboom
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4304,
        name: "Galleon Enemy Peanut Tunnel",
        region: "Galleon Caverns",
        canGetLogic: inStage && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4306,
        name: "Galleon Enemy Coconut Tunnel",
        region: "Galleon Caverns",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4307,
        name: "Galleon Enemy Lighthouse 0",
        region: "Lighthouse Area",
        canGetLogic: lighthouse.in && dk2 && canSlam && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4308,
        name: "Galleon Enemy Lighthouse 1",
        region: "Lighthouse Area",
        canGetLogic: lighthouse.in && dk2 && canSlam && klump
      }
    )
  ] });
};
const Vanilla$j = () => {
  const camera = useCamera();
  const punch = usePunch();
  const inStage = usePlayGalleon();
  const outskirts = useGalleonOutskirts();
  const sax = useSax();
  const dive = useDive();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4080,
        name: "Galleon Fairy Chest",
        region: "Galleon Caverns",
        canGetLogic: inStage && punch && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4081,
        name: "Galleon Fairy 5 Door Ship",
        region: "5 Door Ship",
        canGetLogic: outskirts && sax && dive
      }
    )
  ] });
};
const Shuffled$j = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayGalleon();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4280,
        name: "Galleon Fairy Location #1",
        canGetLogic: inStage && anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4281,
        name: "Galleon Fairy Location #2",
        canGetLogic: inStage && anyKong && camera
      }
    )
  ] });
};
const FairyLocations$4 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$j, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$j, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$i = () => {
  const inStage = usePlayGalleon();
  const galleonTop = useGalleonCavernTop();
  const outskirts = useGalleonOutskirts();
  const treasure = useGalleonTreasureRoom();
  const lighthouseArea = useGalleonLighthouseArea();
  const lowTide = useGalleonLowTide();
  const highTide = useGalleonHighTide();
  const cannon = useGalleonCannon();
  const spring = useSpring();
  const highGrab = useHighGrab();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4050,
        name: "Galleon Kasplat Diddy Gold Tower",
        region: "Treasure Room",
        canGetLogic: treasure.in && spring,
        canGetBreak: logicBreak(treasure) && highGrab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4051,
        name: "Galleon Kasplat Lighthouse Alcove",
        region: "Lighthouse Area",
        canGetLogic: lighthouseArea && lowTide
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4052,
        name: "Galleon Kasplat Cannon Game Room",
        region: "Galleon Caverns",
        canGetLogic: cannon && highTide,
        canGetBreak: cannon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4053,
        name: "Galleon Kasplat Past Vines",
        region: "Galleon Caverns",
        canGetLogic: inStage && galleonTop.in,
        canGetBreak: inStage && logicBreak(galleonTop)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4054,
        name: "Galleon Kasplat Musical Cactus",
        region: "Shipyard Outskirts",
        canGetLogic: outskirts
      }
    )
  ] });
};
const Shuffled$i = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayGalleon();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonCheck, { id: 4250, name: "Galleon Kasplat Location #1", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonCheck, { id: 4251, name: "Galleon Kasplat Location #2", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonCheck, { id: 4252, name: "Galleon Kasplat Location #3", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonCheck, { id: 4253, name: "Galleon Kasplat Location #4", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonCheck, { id: 4254, name: "Galleon Kasplat Location #5", canGetLogic: inStage && anyKong })
  ] });
};
const KasplatLocations$3 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$i, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$i, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$3 = () => {
  const inStage = usePlayGalleon();
  const lighthouseArea = useGalleonLighthouseArea();
  const outskirts = useGalleonOutskirts();
  const highTide = useGalleonHighTide();
  const cannon = useGalleonCannon();
  const boulderTech = useBoulderTech();
  const punch = usePunch();
  const triangle = useTriangle();
  const slam = useSlam();
  const dive = useDive();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4040,
        name: "Galleon Chunky Chest",
        region: "Galleon Caverns",
        canGetLogic: inStage && punch
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4041,
        name: "Galleon Chunky Cannon Game",
        region: "Galleon Caverns",
        canGetLogic: cannon && boulderTech && highTide,
        canGetBreak: cannon && boulderTech
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4042,
        name: "Galleon Chunky Seasick",
        region: "Lighthouse Area",
        canGetLogic: lighthouseArea && punch && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4043,
        name: "Galleon Chunky 5 Door Ship",
        region: "5 Door Ship",
        canGetLogic: lighthouseArea && outskirts && dive && triangle
      }
    )
  ] });
};
const DiddyBananas$3 = () => {
  const lighthouseArea = useGalleonLighthouseArea();
  const outskirts = useGalleonOutskirts();
  const treasure = useGalleonTreasureRoom();
  const lowTide = useGalleonLowTide();
  const highTide = useGalleonHighTide();
  const rocket = useRocket();
  const spring = useSpring();
  const guitar = useGuitar();
  const highGrab = useHighGrab();
  const dive = useDive();
  const lighthouseBanana = useGalleonDiddyLighthouseBanana();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4010,
        name: "Galleon Diddy Ship Switch",
        region: "Lighthouse Area",
        canGetLogic: lighthouseBanana.in,
        canGetBreak: lighthouseBanana.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4011,
        name: "Galleon Diddy Gold Tower",
        region: "Treasure Room",
        canGetLogic: treasure.in && spring,
        canGetBreak: logicBreak(treasure) && highGrab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4012,
        name: "Galleon Diddy Mechfish",
        region: "Shipyard Outskirts",
        canGetLogic: lighthouseArea && outskirts && highTide && rocket && guitar,
        canGetBreak: lighthouseArea && outskirts && dive && rocket && guitar
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4013,
        name: "Galleon Diddy 5 Door Ship",
        region: "5 Door Ship",
        canGetLogic: outskirts && lowTide && guitar && dive
      }
    )
  ] });
};
const DkBananas$3 = () => {
  const canSlam = useSlamGalleon();
  const lighthouseArea = useGalleonLighthouseArea();
  const outskirts = useGalleonOutskirts();
  const highTide = useGalleonHighTide();
  const dk2 = useDk();
  const bongos = useBongos();
  const blast = useBlast();
  const grab = useGrab();
  const dive = useDive();
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4001,
        name: "Galleon DK Lighthouse",
        region: "Lighthouse Area",
        canGetLogic: lighthouseArea && highTide && canSlam && dk2 && (seasick || grab),
        canGetBreak: lighthouseArea && canSlam && dk2 && (seasick || grab)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4002,
        name: "Galleon DK Free the Seal",
        region: "Shipyard Outskirts",
        canGetLogic: lighthouseArea && highTide && blast && outskirts,
        canGetBreak: lighthouseArea && blast && outskirts
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4003,
        name: "Galleon DK Seal Race",
        region: "Shipyard Outskirts",
        canGetLogic: lighthouseArea && highTide && dk2 && blast && outskirts,
        canGetBreak: lighthouseArea && dk2 && blast && outskirts
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4004,
        name: "Galleon DK 5 Door Ship",
        region: "5 Door Ship",
        canGetLogic: outskirts && dk2 && bongos && dive
      }
    )
  ] });
};
const LankyBananas$3 = () => {
  const canSlam = useSlamGalleon();
  const lighthouseArea = useGalleonLighthouseArea();
  const treasure = useGalleonTreasureRoom();
  const lowTide = useGalleonLowTide();
  const outskirts = useGalleonOutskirts();
  const dive = useDive();
  const lanky = useLanky();
  const balloon = useBalloon();
  const trombone = useTrombone();
  const highGrab = useHighGrab();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4020,
        name: "Galleon Lanky Enguarde Chest",
        region: "Lighthouse Area",
        canGetLogic: lighthouseArea && lanky && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4021,
        name: "Galleon Lanky Gold Tower",
        region: "Treasure Room",
        canGetLogic: treasure.in && balloon,
        canGetBreak: logicBreak(treasure) && highGrab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4022,
        name: "Galleon Lanky 2 Door Ship",
        region: "Shipyard Outskirts",
        canGetLogic: outskirts && canSlam && lanky && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4023,
        name: "Galleon Lanky 5 Door Ship",
        region: "5 Door Ship",
        canGetLogic: outskirts && lowTide && trombone && dive
      }
    )
  ] });
};
const MiscPool = ({ children }) => usePoolMisc() ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : null;
const TinyBananas$3 = () => {
  const lighthouseArea = useGalleonLighthouseArea();
  const outskirts = useGalleonOutskirts();
  const treasure = useGalleonTreasureRoom();
  const canSlam = useSlamGalleon();
  const tiny = useTiny();
  const mini = useMini();
  const dive = useDive();
  const sax = useSax();
  const pearls = useCurrentPearlCount();
  const mermaid = useFastMermaid();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4030,
        name: "Galleon Tiny Pearls",
        region: "Lighthouse Area",
        canGetLogic: lighthouseArea && mini && dive && pearls >= (mermaid ? 1 : 5)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4031,
        name: "Galleon Tiny Submarine",
        region: "Shipyard Outskirts",
        canGetLogic: outskirts && mini && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4032,
        name: "Galleon Tiny 2 Door Ship",
        region: "Shipyard Outskirts",
        canGetLogic: outskirts && canSlam && tiny && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4033,
        name: "Galleon Tiny 5 Door Ship",
        region: "5 Door Ship",
        canGetLogic: outskirts && sax && dive
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MiscPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4034,
        name: "Galleon Tiny Treasure Chest Clams x5",
        region: "Treasure Room",
        canGetLogic: treasure.in && mini,
        canGetBreak: treasure.out && mini
      }
    ) })
  ] });
};
const useChunkyMedalCommonLogic$1 = () => {
  const outskirts = useGalleonOutskirts();
  const lighthouseArea = useGalleonLighthouseArea();
  const highTide = useGalleonHighTide();
  const gun = usePineapple();
  const dive = useDive();
  let bananas = 12;
  if (lighthouseArea && dive) {
    bananas += 10;
  }
  if (outskirts) {
    if (gun) {
      bananas += 20;
    }
    if (dive) {
      bananas += 15;
    }
    if (highTide) {
      bananas += 5;
    }
  }
  return bananas;
};
const useChunkyMedalInLogic$3 = () => {
  const inStage = usePlayGalleon();
  const cannon = useGalleonCannon();
  const highTide = useGalleonHighTide();
  const seasick = useGalleonSeasickShip();
  const cavernTop = useGalleonCavernTop();
  const slam = useSlam();
  const kong = useChunky();
  const move = usePunch();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useChunkyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (cavernTop.in) {
    bananas += 3;
  }
  if (cannon && highTide) {
    bananas += 10;
  }
  if (seasick.in && slam) {
    bananas += 20;
    if (move) {
      bananas += 5;
    }
  }
  return bananas;
};
const useChunkyMedalOutLogic$3 = () => {
  const inStage = usePlayGalleon();
  const cannon = useGalleonCannon();
  const seasick = useGalleonSeasickShip();
  const cavernTop = useGalleonCavernTop();
  const slam = useSlam();
  const kong = useChunky();
  const move = usePunch();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useChunkyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(cavernTop)) {
    bananas += 3;
  }
  if (cannon) {
    bananas += 10;
  }
  if (logicBreak(seasick) && slam) {
    bananas += 20;
    if (move) {
      bananas += 5;
    }
  }
  return bananas;
};
const ChunkyMedal$3 = () => {
  const inLogic = useChunkyMedalInLogic$3();
  const outLogic = useChunkyMedalOutLogic$3();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4104,
      name: "Galleon Chunky Medal",
      region: "Galleon Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDiddyMedalCommonLogic$2 = () => {
  const outskirts = useGalleonOutskirts();
  const gun = usePeanut();
  const music = useGuitar();
  const dive = useDive();
  let bananas = 10;
  if (outskirts) {
    if (gun) {
      bananas += 10;
    }
    if (dive) {
      bananas += 36;
      if (music) {
        bananas += 14;
      }
    }
  }
  return bananas;
};
const useDiddyMedalInLogic$2 = () => {
  const inStage = usePlayGalleon();
  const lighthousePlatform = useGalleonLighthousePlatform();
  const treasureRoom = useGalleonTreasureRoom();
  const kong = useDiddy();
  const gun = usePeanut();
  const crystal = useRocket();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (treasureRoom.in && gun) {
    bananas += 10;
  }
  if (lighthousePlatform.in) {
    if (gun) {
      bananas += 10;
    }
    if (crystal) {
      bananas += 10;
    }
  }
  return bananas;
};
const useDiddyMedalOutLogic$2 = () => {
  const inStage = usePlayGalleon();
  const lighthousePlatform = useGalleonLighthousePlatform();
  const treasureRoom = useGalleonTreasureRoom();
  const kong = useDiddy();
  const gun = usePeanut();
  const crystal = useRocket();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(treasureRoom) && gun) {
    bananas += 10;
  }
  if (logicBreak(lighthousePlatform)) {
    if (gun) {
      bananas += 10;
    }
    if (crystal) {
      bananas += 10;
    }
  }
  return bananas;
};
const DiddyMedal$3 = () => {
  const inLogic = useDiddyMedalInLogic$2();
  const outLogic = useDiddyMedalOutLogic$2();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4101,
      name: "Galleon Diddy Medal",
      region: "Galleon Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalCommonLogic$3 = () => {
  const outskirts = useGalleonOutskirts();
  const lighthouseArea = useGalleonLighthouseArea();
  const gun = useCoconut();
  const music = useBongos();
  const dive = useDive();
  const lanky = useLanky();
  let bananas = 0;
  if (gun) {
    bananas += 10;
  }
  if (outskirts) {
    bananas += 15;
    if (music) {
      bananas += 10;
    }
  }
  if (lighthouseArea && dive && lanky) {
    bananas += 10;
  }
  return bananas;
};
const useDkMedalInLogic$3 = () => {
  const inStage = usePlayGalleon();
  const canSlam = useSlamGalleon();
  const lighthousePlatform = useGalleonLighthousePlatform();
  const kong = useDk();
  const gun = useCoconut();
  const pad = useBlast();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (lighthousePlatform.in) {
    if (gun) {
      bananas += 10;
    }
    if (pad) {
      bananas += 15;
    }
    if (canSlam) {
      bananas += 20;
      if (gun) {
        bananas += 10;
      }
    }
  }
  return bananas;
};
const useDkMedalOutLogic$3 = () => {
  const inStage = usePlayGalleon();
  const canSlam = useSlamGalleon();
  const lighthousePlatform = useGalleonLighthousePlatform();
  const kong = useDk();
  const gun = useCoconut();
  const pad = useBlast();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(lighthousePlatform)) {
    if (gun) {
      bananas += 10;
    }
    if (pad) {
      bananas += 15;
    }
    if (canSlam) {
      bananas += 20;
      if (gun) {
        bananas += 10;
      }
    }
  }
  return bananas;
};
const DkMedal$3 = () => {
  const inLogic = useDkMedalInLogic$3();
  const outLogic = useDkMedalOutLogic$3();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4100,
      name: "Galleon DK Medal",
      region: "Galleon Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalCommonLogic$3 = () => {
  const canSlam = useSlamGalleon();
  const outskirts = useGalleonOutskirts();
  const lighthouseArea = useGalleonLighthouseArea();
  const chunkyPunch = usePunch();
  const gun = useGrape();
  const music = useTrombone();
  const dive = useDive();
  let bananas = 5;
  if (chunkyPunch && gun) {
    bananas += 20;
  }
  if (lighthouseArea && dive) {
    bananas += 25;
  }
  if (outskirts) {
    bananas += 5;
    if (gun) {
      bananas += 10;
    }
    if (dive) {
      bananas += 5;
      if (canSlam) {
        bananas += 10;
      }
      if (music) {
        bananas += 15;
      }
    }
  }
  return bananas;
};
const useLankyMedalInLogic$3 = () => {
  const inStage = usePlayGalleon();
  const treasureRoom = useGalleonTreasureRoom();
  const highTide = useGalleonHighTide();
  const kong = useLanky();
  const pad = useBalloon();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$3();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (treasureRoom.in && highTide) {
    bananas += 1;
    if (pad) {
      bananas += 4;
    }
  }
  return bananas;
};
const useLankyMedalOutLogic$3 = () => {
  const inStage = usePlayGalleon();
  const treasureRoom = useGalleonTreasureRoom();
  const highGrab = useHighGrab();
  const kong = useLanky();
  const diddy = useDiddy();
  const spring = useSpring();
  const tiny = useTiny();
  const twirl = useTwirl();
  const shuffleBananas = useShuffleColoredBananas();
  let currBreak = useLankyMedalCommonLogic$3() + 1;
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(treasureRoom) && (highGrab || diddy && spring && tiny && twirl)) {
    currBreak += 4;
  }
  return currBreak;
};
const LankyMedal$3 = () => {
  const inLogic = useLankyMedalInLogic$3();
  const outLogic = useLankyMedalOutLogic$3();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4102,
      name: "Galleon Lanky Medal",
      region: "Galleon Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useTinyMedalCommonLogic$2 = () => {
  const canSlam = useSlamGalleon();
  const outskirts = useGalleonOutskirts();
  const lighthouseArea = useGalleonLighthouseArea();
  const cannon = useGalleonCannon();
  const highTide = useGalleonHighTide();
  const lowTide = useGalleonLowTide();
  const gun = useFeather();
  const music = useSax();
  const dive = useDive();
  let bananas = 9;
  if (lighthouseArea && highTide) {
    bananas += 5;
    if (gun) {
      bananas += 10;
    }
  }
  if (lighthouseArea && lowTide && gun) {
    bananas += 10;
  }
  if (cannon && highTide) {
    bananas += 15;
  }
  if (outskirts && dive) {
    if (music) {
      bananas += 18;
    }
    if (canSlam) {
      bananas += 10;
    }
  }
  return bananas;
};
const useTinyMedalInLogic$2 = () => {
  const inStage = usePlayGalleon();
  const treasureRoom = useGalleonTreasureRoom();
  const cavernTop = useGalleonCavernTop();
  const kong = useTiny();
  const gun = useFeather();
  const crystal = useMini();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (cavernTop.in) {
    bananas += 8;
  }
  if (treasureRoom.in) {
    if (gun) {
      bananas += 10;
    }
    if (crystal) {
      bananas += 5;
    }
  }
  return bananas;
};
const useTinyMedalOutLogic$2 = () => {
  const inStage = usePlayGalleon();
  const treasureRoom = useGalleonTreasureRoom();
  const cavernTop = useGalleonCavernTop();
  const kong = useTiny();
  const gun = useFeather();
  const crystal = useMini();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(cavernTop)) {
    bananas += 8;
  }
  if (logicBreak(treasureRoom)) {
    if (gun) {
      bananas += 10;
    }
    if (crystal) {
      bananas += 5;
    }
  }
  return bananas;
};
const TinyMedal$3 = () => {
  const inLogic = useTinyMedalInLogic$2();
  const outLogic = useTinyMedalOutLogic$2();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GalleonCheck,
    {
      id: 4103,
      name: "Galleon Tiny Medal",
      region: "Galleon Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$h = () => {
  const inStage = usePlayGalleon();
  const outskirts = useGalleonOutskirts();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4110,
        baseName: "Galleon Cranky",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4120,
        baseName: "Galleon Funky",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: outskirts
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4130,
        baseName: "Galleon Candy",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: outskirts
      }
    )
  ] });
};
const Shuffled$h = () => {
  const inStage = usePlayGalleon();
  const outskirts = useGalleonOutskirts();
  const lighthouseArea = useGalleonLighthouseArea();
  const highTide = useGalleonHighTide();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4140,
        baseName: "Galleon Cranky Location",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4150,
        baseName: "Galleon Funky Location",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: outskirts
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4160,
        baseName: "Galleon Candy Location",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: outskirts
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 4170,
        baseName: "Galleon Snide Location",
        level: "Galleon",
        region: "Galleon Shops",
        inLogic: lighthouseArea && highTide,
        outLogic: lighthouseArea
      }
    )
  ] });
};
const ShopLocations$3 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$h, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$h, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const GalleonChecks = () => {
  const inStage = usePlayGalleon();
  const lighthouseArea = useGalleonLighthouseArea();
  const outskirts = useGalleonOutskirts();
  const vine = useVine();
  const dive = useDive();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$4, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal$3, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal$3, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal$3, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal$3, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal$3, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleonCheck,
      {
        id: 4105,
        name: "Galleon Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: inStage && vine || dive && (lighthouseArea || outskirts)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$4, {}) })
  ] });
};
const ForestCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Forest",
      region: props.region,
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$g = () => {
  const inStage = usePlayForest();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForestCheck,
    {
      id: 5090,
      name: "Forest Arena",
      region: "Giant Mushroom Exterior",
      canGetLogic: inStage && anyKong
    }
  );
};
const Shuffled$g = () => {
  const inStage = usePlayForest();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForestCheck, { id: 5190, name: "Forest Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations$3 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$g, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$g, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$f = () => {
  const inStage = usePlayForest();
  const anyKong = useAnyKong();
  const owlTree = useForestOwl();
  const night = useForestNight();
  const dk2 = useDk();
  const strong = useStrong();
  const canSlam = useSlamForest();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5060,
        name: "Forest Crate Rafters",
        region: "Forest Mills",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5061,
        name: "Forest Crate Owl Tree",
        region: "Owl Tree",
        canGetLogic: owlTree && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5062,
        name: "Forest Crate Barn Outside",
        region: "Forest Mills",
        canGetLogic: inStage && night.in,
        canGetBreak: inStage && night.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5063,
        name: "Forest Crate Barn Inside",
        region: "Forest Mills",
        canGetLogic: inStage && night.in && dk2 && canSlam && strong,
        canGetBreak: inStage && (night.in || night.out) && dk2 && canSlam
      }
    )
  ] });
};
const Shuffled$f = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayJapes();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1260,
        name: "Japes Crate Location #1 (maybe)",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JapesCheck,
      {
        id: 1261,
        name: "Japes Crate Location #2 (maybe)",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const CrateLocations$2 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$f, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$f, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations$2 = () => {
  const beanstalk = useForestBean();
  const shockwave = useShockwave();
  const inStage = usePlayForest();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5070,
        name: "Forest Dirt Beanstalk",
        region: "Forest Center And Beanstalk",
        canGetLogic: beanstalk && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5071,
        name: "Forest Dirt Mills Grass",
        region: "Forest Mills",
        canGetLogic: inStage && shockwave
      }
    )
  ] });
};
const ShuffledDirtLocations$2 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const inStage = usePlayForest();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5270,
        name: "Forest Dirt Location #1",
        canGetLogic: inStage && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5271,
        name: "Forest Dirt Location #2",
        canGetLogic: inStage && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations$2 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$2, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$2, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$3 = () => {
  const inStage = usePlayForest();
  const owlTree = useForestOwl();
  const beanstalk = useForestBean();
  const beanHalf = useForestBeanHalf();
  const roof = useForestMushroomRoof();
  const canSlam = useSlamForest();
  const klump = useDefeatKlump();
  const zinger = useDefeatZinger();
  const bat = useDefeatBat();
  const kosha = useDefeatKosha();
  const anyKong = useAnyKong();
  const mini = useMini();
  const sax = useSax();
  const diddy = useDiddy();
  const dk2 = useDk();
  const strong = useStrong();
  const night = useForestNight();
  const day = useForestDay();
  const punch = usePunch();
  const lanky = useLanky();
  const chunky = useChunky();
  const spiderBoss = useForestSpiderBoss();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5300,
        name: "Forest Enemy Hollow Tree 0",
        region: "Owl Tree",
        canGetLogic: owlTree && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5301,
        name: "Forest Enemy Hollow Tree 1",
        region: "Owl Tree",
        canGetLogic: owlTree && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5302,
        name: "Forest Enemy Hollow Tree Entrance",
        region: "Owl Tree",
        canGetLogic: owlTree && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5303,
        name: "Forest Enemy Tree Melon Crate 0",
        region: "Owl Tree",
        canGetLogic: owlTree && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5304,
        name: "Forest Enemy Tree Melon Crate 1",
        region: "Owl Tree",
        canGetLogic: owlTree && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5305,
        name: "Forest Enemy Tree Melon Crate 2",
        region: "Owl Tree",
        canGetLogic: owlTree && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5310,
        name: "Forest Enemy Near Beanstalk 0",
        region: "Forest Center And Beanstalk",
        canGetLogic: beanstalk && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5311,
        name: "Forest Enemy Near Beanstalk 1",
        region: "Forest Center And Beanstalk",
        canGetLogic: beanstalk && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5312,
        name: "Forest Enemy Green Tunnel",
        region: "Forest Center And Beanstalk",
        canGetLogic: beanHalf && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5313,
        name: "Forest Enemy Near Low Warp 5",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5314,
        name: "Forest Enemy Near Pink Tunnel",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5315,
        name: "Forest Enemy Near Mushroom Rocket Barrel",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5316,
        name: "Forest Enemy b/t Rocket & Yellow Tunnel",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5317,
        name: "Forest Enemy Near Cranky",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5318,
        name: "Forest Enemy Rear Tag",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5319,
        name: "Forest Enemy Near Face Puzzle",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5320,
        name: "Forest Enemy Near Crown",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5321,
        name: "Forest Enemy Near High Warp 5",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5322,
        name: "Forest Enemy Top Of Mushroom",
        region: "Giant Mushroom Exterior",
        canGetLogic: roof && anyKong && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5323,
        name: "Forest Enemy Near Apple Dropoff",
        region: "Forest Center And Beanstalk",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5324,
        name: "Forest Enemy Near DK Portal",
        region: "Forest Center And Beanstalk",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5325,
        name: "Forest Enemy Near Well Tag",
        region: "Forest Center And Beanstalk",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5326,
        name: "Forest Enemy Yellow Tunnel 0",
        region: "Owl Tree",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5327,
        name: "Forest Enemy Yellow Tunnel 1",
        region: "Owl Tree",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5328,
        name: "Forest Enemy Yellow Tunnel 2",
        region: "Owl Tree",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5329,
        name: "Forest Enemy Yellow Tunnel 3",
        region: "Owl Tree",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5330,
        name: "Forest Enemy Near Snide",
        region: "Forest Mills",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5331,
        name: "Forest Enemy Near Iso Coin",
        region: "Forest Mills",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5332,
        name: "Forest Enemy Near Cranky",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5333,
        name: "Forest Enemy Near Dark Attic",
        region: "Forest Mills",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5334,
        name: "Forest Enemy Near Well Exit",
        region: "Forest Mills",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5335,
        name: "Forest Enemy Near Blue Tunnel",
        region: "Forest Mills",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5336,
        name: "Forest Enemy Thornvine 0",
        region: "Forest Mills",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5337,
        name: "Forest Enemy Thornvine 1",
        region: "Forest Mills",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5338,
        name: "Forest Enemy Thornvine 2",
        region: "Forest Mills",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5339,
        name: "Forest Enemy Thornvine Entrance",
        region: "Forest Mills",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5340,
        name: "Forest Enemy Anthill Gauntlet 0",
        region: "Owl Tree",
        canGetLogic: owlTree && mini && sax
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5341,
        name: "Forest Enemy Anthill Gauntlet 1",
        region: "Owl Tree",
        canGetLogic: owlTree && mini && sax
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5342,
        name: "Forest Enemy Anthill Gauntlet 2",
        region: "Owl Tree",
        canGetLogic: owlTree && mini && sax
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5343,
        name: "Forest Enemy Anthill Gauntlet 3",
        region: "Owl Tree",
        canGetLogic: owlTree && mini && sax
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5344,
        name: "Forest Enemy Winch Inside",
        region: "Forest Mills",
        canGetLogic: inStage && diddy && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5345,
        name: "Forest Enemy Thornvine Barn Inside",
        region: "Forest Mills",
        canGetLogic: night.in && strong && canSlam && kosha,
        canGetBreak: logicBreak(night) && dk2 && canSlam && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5346,
        name: "Forest Enemy Mill Inside Front",
        region: "Forest Mills",
        canGetLogic: day.in && zinger,
        canGetBreak: logicBreak(day) && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5347,
        name: "Forest Enemy Mill Inside Rear",
        region: "Forest Mills",
        canGetLogic: day.in && punch && zinger,
        canGetBreak: logicBreak(day) && punch && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5348,
        name: "Forest Enemy Mushroom Night Door",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5349,
        name: "Forest Enemy Mushroom Path 0",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5350,
        name: "Forest Enemy Mushroom Path 1",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5351,
        name: "Forest Enemy Attic Gauntlet 0",
        region: "Forest Mills",
        canGetLogic: night.in && lanky && canSlam && bat,
        canGetBreak: logicBreak(night) && lanky && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5352,
        name: "Forest Enemy Attic Gauntlet 1",
        region: "Forest Mills",
        canGetLogic: night.in && lanky && canSlam && bat,
        canGetBreak: logicBreak(night) && lanky && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5353,
        name: "Forest Enemy Attic Gauntlet 2",
        region: "Forest Mills",
        canGetLogic: night.in && lanky && canSlam && bat,
        canGetBreak: logicBreak(night) && lanky && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5354,
        name: "Forest Enemy Mushroom Leap 0",
        region: "Giant Mushroom Insides",
        canGetLogic: roof.in && lanky && canSlam && zinger,
        canGetBreak: logicBreak(roof) && lanky && canSlam && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5355,
        name: "Forest Enemy Mushroom Leap 1",
        region: "Giant Mushroom Insides",
        canGetLogic: roof.in && lanky && canSlam && zinger,
        canGetBreak: logicBreak(roof) && lanky && canSlam && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5356,
        name: "Forest Enemy Face Puzzle",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && chunky && canSlam && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5357,
        name: "Forest Enemy Spider Gauntlet 0",
        region: "Forest Mills",
        canGetLogic: spiderBoss.in,
        canGetBreak: spiderBoss.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5358,
        name: "Forest Enemy Spider Gauntlet 1",
        region: "Forest Mills",
        canGetLogic: spiderBoss.in,
        canGetBreak: spiderBoss.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5359,
        name: "Forest Enemy Spider Gauntlet 2",
        region: "Forest Mills",
        canGetLogic: spiderBoss.in,
        canGetBreak: spiderBoss.out
      }
    )
  ] });
};
const Vanilla$e = () => {
  const inStage = usePlayForest();
  const camera = useCamera();
  const night = useForestNight();
  const guitar = useGuitar();
  const spring = useSpring();
  const highGrab = useHighGrab();
  const canSlam = useSlamForest();
  const dk2 = useDk();
  const strong = useStrong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5080,
        name: "Forest Fairy Rafters",
        region: "Forest Mills",
        canGetLogic: inStage && camera && night.in && spring && guitar,
        canGetBreak: inStage && camera && logicBreak(night) && highGrab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5081,
        name: "Forest Fairy Barn",
        region: "Forest Mills",
        canGetLogic: inStage && camera && night.in && canSlam && strong,
        canGetBreak: inStage && camera && logicBreak(night) && dk2 && canSlam
      }
    )
  ] });
};
const Shuffled$e = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayForest();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5280,
        name: "Forest Fairy Location #1",
        canGetLogic: inStage && anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5281,
        name: "Forest Fairy Location #2",
        canGetLogic: inStage && anyKong && camera
      }
    )
  ] });
};
const FairyLocations$3 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$e, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$e, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$d = () => {
  const inStage = usePlayForest();
  const night = useForestNight();
  const anyGun = useAnyGun();
  const anyKong = useAnyKong();
  const owlTree = useForestOwl();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5050,
        name: "Forest Kasplat Behind DK's Barn",
        region: "Forest Mills",
        canGetLogic: inStage && night.in && anyGun,
        canGetBreak: inStage && (night.in || night.out)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5051,
        name: "Forest Kasplat Inside Giant Mushroom",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5052,
        name: "Forest Kasplat Under Owl Tree",
        region: "Owl Tree",
        canGetLogic: owlTree && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5053,
        name: "Forest Kasplat Low Mushroom Exterior",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5054,
        name: "Forest Kasplat Mushroom Night Door",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const Shuffled$d = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayForest();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ForestCheck, { id: 5250, name: "Forest Kasplat Location #1", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ForestCheck, { id: 5251, name: "Forest Kasplat Location #2", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ForestCheck, { id: 5252, name: "Forest Kasplat Location #3", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ForestCheck, { id: 5253, name: "Forest Kasplat Location #4", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ForestCheck, { id: 5254, name: "Forest Kasplat Location #5", canGetLogic: inStage && anyKong })
  ] });
};
const KasplatLocations$2 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$d, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$d, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const beanstalk = useForestBean();
  const day = useForestDay();
  const slam = useSlam();
  const chunky = useChunky();
  const pineapple = usePineapple();
  const boulderTech = useBoulderTech();
  const triangle = useTriangle();
  const punch = usePunch();
  const grab = useGrab();
  const hunky = useHunky();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5040,
        name: "Forest Chunky Minecarts",
        region: "Forest Center And Beanstalk",
        canGetLogic: inStage && chunky && slam
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5041,
        name: "Forest Chunky Face Puzzle",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && canSlam && pineapple
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5042,
        name: "Forest Chunky Kegs",
        region: "Forest Mills",
        canGetLogic: inStage && day.in && boulderTech && punch && triangle && grab,
        canGetBreak: inStage && logicBreak(day) && boulderTech && punch && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5043,
        name: "Forest Chunky Apple",
        region: "Forest Center And Beanstalk",
        canGetLogic: beanstalk && boulderTech && hunky
      }
    )
  ] });
};
const DiddyBananas$2 = () => {
  const inStage = usePlayForest();
  const owlTree = useForestOwl();
  const night = useForestNight();
  const rocket = useRocket();
  const guitar = useGuitar();
  const charge = useCharge();
  const spring = useSpring();
  const stand = useStand();
  const anyGun = useAnyGun();
  const diddy = useDiddy();
  const tiny = useTiny();
  const highGrab = useHighGrab();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5010,
        name: "Forest Diddy Top of Mushroom",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && rocket,
        canGetBreak: inStage && (diddy || tiny) && (tiny || stand)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5011,
        name: "Forest Diddy Owl Race",
        region: "Owl Tree",
        canGetLogic: owlTree && night.in && guitar && rocket,
        canGetBreak: owlTree && logicBreak(night) && guitar && rocket
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5012,
        name: "Forest Diddy Caged Banana",
        region: "Forest Mills",
        canGetLogic: inStage && charge && guitar && anyGun
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5013,
        name: "Forest Diddy Rafters",
        region: "Forest Mills",
        canGetLogic: inStage && night.in && spring && guitar,
        canGetBreak: inStage && logicBreak(night) && (spring || highGrab)
      }
    )
  ] });
};
const DkBananas$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const day = useForestDay();
  const night = useForestNight();
  const blast = useBlast();
  const grab = useGrab();
  const dk2 = useDk();
  const strong = useStrong();
  const vine = useVine();
  const allGuns = useAllGun();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5001,
        name: "Forest DK Baboon Blast",
        region: "Giant Mushroom Exterior",
        canGetLogic: inStage && blast
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5002,
        name: "Forest DK Mushroom Cannons",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && allGuns && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5003,
        name: "Forest DK Mill",
        region: "Forest Mills",
        canGetLogic: inStage && day.in && night.in && canSlam && grab,
        canGetBreak: inStage && logicBreak(day) && logicBreak(night) && canSlam && grab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5004,
        name: "Forest DK Barn",
        region: "Forest Mills",
        canGetLogic: inStage && night.in && dk2 && canSlam && strong && vine,
        canGetBreak: inStage && logicBreak(night) && dk2 && canSlam
      }
    )
  ] });
};
const LankyBananas$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const owlTree = useForestOwl();
  const night = useForestNight();
  const grape = useGrape();
  const homing = useHoming();
  const trombone = useTrombone();
  const sprint = useSprint();
  const anyGun = useAnyGun();
  const lanky = useLanky();
  const boulderTech = useBoulderTech();
  const hardShooting = useHardShooting();
  const roof = useForestMushroomRoof();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5020,
        name: "Forest Lanky Zingers",
        region: "Forest Mills",
        canGetLogic: inStage && night.in && canSlam && grape && (homing || hardShooting),
        canGetBreak: inStage && logicBreak(night) && lanky && canSlam && anyGun
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5021,
        name: "Forest Lanky Colored Mushrooms",
        region: "Giant Mushroom Insides",
        canGetLogic: roof.in && lanky && canSlam,
        canGetBreak: logicBreak(roof) && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5022,
        name: "Forest Lanky Rabbit Race",
        region: "Owl Tree",
        canGetLogic: owlTree && trombone && sprint,
        canGetBreak: owlTree && trombone && boulderTech
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5023,
        name: "Forest Lanky Mushroom Attic",
        region: "Giant Mushroom Insides",
        canGetLogic: roof.in && lanky && canSlam,
        canGetBreak: logicBreak(roof) && lanky && canSlam
      }
    )
  ] });
};
const TinyBananas$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const owlTree = useForestOwl();
  const beanstalk = useForestBean();
  const mini = useMini();
  const sax = useSax();
  const feather = useFeather();
  const pineapple = usePineapple();
  const tiny = useTiny();
  const anyGun = useAnyGun();
  const bean = useBean();
  const spiderBoss = useForestSpiderBoss();
  const dusk = useForestDusk();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5030,
        name: "Forest Tiny Mushroom Barrel",
        region: "Giant Mushroom Insides",
        canGetLogic: inStage && tiny && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5031,
        name: "Forest Tiny Anthill",
        region: "Owl Tree",
        canGetLogic: owlTree && mini && sax
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MiscPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5034,
        name: "Forest Tiny Bean",
        region: "Owl Tree",
        canGetLogic: owlTree && mini && sax
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5032,
        name: "Forest Tiny Spider Boss",
        region: "Forest Mills",
        canGetLogic: spiderBoss.in && (dusk && (feather || pineapple) || !dusk && feather),
        canGetBreak: logicBreak(spiderBoss) && anyGun
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5033,
        name: "Forest Tiny Beanstalk",
        region: "Forest Center And Beanstalk",
        canGetLogic: beanstalk && bean && mini && sax
      }
    )
  ] });
};
const useChunkyMedalCommonLogic = () => {
  const bean = useForestBean();
  const canSlam = useSlamForest();
  const gun = usePineapple();
  let bananas = 40;
  {
    bananas += 11;
    if (gun) {
      bananas += 10;
    }
    if (canSlam) {
      bananas += 5;
      if (gun) {
        bananas += 10;
      }
    }
  }
  if (bean) {
    bananas += 14;
  }
  return bananas;
};
const useChunkyMedalInLogic$2 = () => {
  const inStage = usePlayForest();
  const day = useForestDay();
  const night = useForestNight();
  const top = useForestMushroomTop();
  const kong = useChunky();
  const move = usePunch();
  const vine = useVine();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useChunkyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (night.in && top && vine) {
    bananas += 5;
  }
  if (day.in && kong && move) {
    bananas += 5;
  }
  return bananas;
};
const useChunkyMedalOutLogic$2 = () => {
  const inStage = usePlayForest();
  const day = useForestDay();
  const night = useForestNight();
  const top = useForestMushroomTop();
  const kong = useChunky();
  const move = usePunch();
  const vine = useVine();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useChunkyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(night) && top && vine) {
    bananas += 5;
  }
  if (logicBreak(day) && kong && move) {
    bananas += 5;
  }
  return bananas;
};
const ChunkyMedal$2 = () => {
  const inLogic = useChunkyMedalInLogic$2();
  const outLogic = useChunkyMedalOutLogic$2();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForestCheck,
    {
      id: 5104,
      name: "Forest Chunky Medal",
      region: "Forest Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const DiddyMedal$2 = () => {
  const inLogic = useDiddyMedalInLogic$5();
  const outLogic = useDiddyMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForestCheck,
    {
      id: 5101,
      name: "Forest Diddy Medal",
      region: "Forest Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalCommonLogic$2 = () => {
  const allGun2 = useAllGun();
  const gun = useCoconut();
  const pad = useBlast();
  let bananas = 30;
  if (allGun2) {
    bananas += 15;
  }
  if (pad) {
    bananas += 10;
  }
  if (gun) {
    bananas += 10;
  }
  {
    bananas += 5;
  }
  return bananas;
};
const useDkMedalInLogic$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const day = useForestDay();
  const night = useForestNight();
  const slam = useSlam();
  const kong = useDk();
  const gun = useCoconut();
  const crystal = useStrong();
  const shuffledBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffledBananas) {
    return 100;
  }
  if (day.in) {
    if (slam) {
      bananas += 5;
    }
    if (canSlam && gun) {
      bananas += 10;
    }
  }
  if (night.in) {
    bananas += 5;
    if (crystal) {
      bananas += 5;
      if (canSlam) {
        bananas += 5;
      }
    }
  }
  return bananas;
};
const useDkMedalOutLogic$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const day = useForestDay();
  const night = useForestNight();
  const slam = useSlam();
  const kong = useDk();
  const gun = useCoconut();
  const shuffledBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffledBananas) {
    return 100;
  }
  if (logicBreak(day)) {
    if (slam) {
      bananas += 5;
    }
    if (canSlam && gun) {
      bananas += 10;
    }
  }
  if (logicBreak(night)) {
    bananas += 10;
    if (canSlam) {
      bananas += 5;
    }
  }
  return bananas;
};
const DkMedal$2 = () => {
  const inLogic = useDkMedalInLogic$2();
  const outLogic = useDkMedalOutLogic$2();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForestCheck,
    {
      id: 5100,
      name: "Forest DK Medal",
      region: "Forest Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalCommonLogic$2 = () => {
  const owl = useForestOwl();
  const gun = useGrape();
  let bananas = 32;
  if (gun) {
    bananas += 10;
  }
  if (gun) {
    bananas += 10;
  }
  if (owl) {
    bananas += 18;
  }
  return bananas;
};
const useLankyMedalInLogic$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const night = useForestNight();
  const kong = useLanky();
  const move = useStand();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (move) {
    bananas += 5;
    if (canSlam) {
      bananas += 15;
    }
  }
  if (night.in) {
    bananas += 10;
  }
  return bananas;
};
const useLankyMedalOutLogic$2 = () => {
  const inStage = usePlayForest();
  const canSlam = useSlamForest();
  const night = useForestNight();
  const kong = useLanky();
  const rocket = useRocket();
  const tiny = useTiny();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$2();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (tiny || rocket) {
    bananas += 5;
    if (canSlam) {
      bananas += 15;
    }
  }
  if (logicBreak(night)) {
    bananas += 10;
  }
  return bananas;
};
const LankyMedal$2 = () => {
  const inLogic = useLankyMedalInLogic$2();
  const outLogic = useLankyMedalOutLogic$2();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForestCheck,
    {
      id: 5102,
      name: "Forest Lanky Medal",
      region: "Forest Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const TinyMedal$2 = () => {
  const inLogic = useTinyMedalInLogic$5();
  const outLogic = useTinyMedalOutLogic$5();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ForestCheck,
    {
      id: 5103,
      name: "Forest Tiny Medal",
      region: "Forest Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$c = () => {
  const inStage = usePlayForest();
  const beanstalk = useForestBean();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 5110,
        baseName: "Forest Cranky",
        level: "Forest",
        region: "Forest Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 5120,
        baseName: "Forest Funky",
        level: "Forest",
        region: "Forest Shops",
        inLogic: beanstalk
      }
    )
  ] });
};
const Shuffled$c = () => {
  const inStage = usePlayForest();
  const beanstalk = useForestBean();
  const day = useForestDay();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 5140,
        baseName: "Forest Cranky Location",
        level: "Forest",
        region: "Forest Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 5150,
        baseName: "Forest Funky Location",
        level: "Forest",
        region: "Forest Shops",
        inLogic: beanstalk
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 5170,
        baseName: "Forest Snide Location",
        level: "Forest",
        region: "Forest Shops",
        inLogic: day.in,
        outLogic: day.out
      }
    )
  ] });
};
const ShopLocations$2 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$c, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$c, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const ForestChecks = () => {
  const inStage = usePlayForest();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$3, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal$2, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal$2, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal$2, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal$2, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal$2, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ForestCheck,
      {
        id: 5105,
        name: "Forest Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: inStage && anyKong
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$3, {}) })
  ] });
};
const CavesCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Caves",
      region: props.region,
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$b = () => {
  const inStage = usePlayCaves();
  const bongos = useBongos();
  const slam = useSlam();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6090,
      name: "Caves Arena",
      region: "Cabins Area",
      canGetLogic: inStage && bongos && slam
    }
  );
};
const Shuffled$b = () => {
  const inStage = usePlayCaves();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CavesCheck, { id: 6190, name: "Caves Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations$2 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$b, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$b, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$a = () => null;
const Shuffled$a = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayCaves();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6260,
        name: "Caves Crate Location #1 (maybe)",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6261,
        name: "Caves Crate Location #2 (maybe)",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const CrateLocations$1 = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$a, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$a, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations$1 = () => {
  const inStage = usePlayCaves();
  const shockwave = useShockwave();
  const port = useMonkeyport();
  const punch = usePunch();
  const hunky = useHunky();
  const barrel = useBarrel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6070,
      name: "Caves Dirt Giant Kosha",
      region: "Igloo Area",
      canGetLogic: inStage && shockwave && port && punch && barrel && hunky,
      canGetBreak: inStage && shockwave && port && punch && barrel
    }
  );
};
const ShuffledDirtLocations$1 = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const inStage = usePlayCaves();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6270,
        name: "Caves Dirt Location #1",
        canGetLogic: inStage && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6271,
        name: "Caves Dirt Location #2",
        canGetLogic: inStage && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations$1 = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations$1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations$1, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$2 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const lankyCabin = useCavesLankyCabin();
  const anyKong = useAnyKong();
  const zinger = useDefeatZinger();
  const kosha = useDefeatKosha();
  const klaptrap = useDefeatPurpleKlaptrap();
  const bongos = useBongos();
  const guitar = useGuitar();
  const trombone = useTrombone();
  const sax = useSax();
  const mini = useMini();
  const boulderTech = useBoulderTech();
  const punch = usePunch();
  const hunky = useHunky();
  const port = useMonkeyport();
  const dkBee = useCavesDkCabinBee();
  const diddyGauntlet = useCavesDiddyCabinGauntlet();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6300,
        name: "Caves Enemy Start",
        region: "Main Caves Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6301,
        name: "Caves Enemy Near Ice Castle",
        region: "Main Caves Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6302,
        name: "Caves Enemy Outside 5 Door Cabin",
        region: "Cabins Area",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6303,
        name: "Caves Enemy Waterfall Lanky Cabin",
        region: "Cabins Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6304,
        name: "Caves Enemy Near Funky",
        region: "Main Caves Area",
        canGetLogic: inStage && zinger
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6305,
        name: "Caves Enemy Near Snide",
        region: "Main Caves Area",
        canGetLogic: inStage && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6306,
        name: "Caves Enemy Near Bonus Room",
        region: "Main Caves Area",
        canGetLogic: inStage && mini && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6307,
        name: "Caves Enemy Lanky Cabin Headphones",
        region: "Cabins Area",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6308,
        name: "Caves Enemy Giant Kosha",
        region: "Igloo Area",
        canGetLogic: inStage && boulderTech && punch && hunky && port && kosha,
        canGetBreak: inStage && boulderTech && punch && port && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6309,
        name: "Caves Enemy DK Igloo Right",
        region: "Igloo Area",
        canGetLogic: igloo && bongos && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6310,
        name: "Caves Enemy DK Igloo Left",
        region: "Igloo Area",
        canGetLogic: igloo && bongos && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6311,
        name: "Caves Enemy Lanky Igloo 0",
        region: "Igloo Area",
        canGetLogic: igloo && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6312,
        name: "Caves Enemy Lanky Igloo 1",
        region: "Igloo Area",
        canGetLogic: igloo && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6313,
        name: "Caves Enemy Lanky Igloo 2",
        region: "Igloo Area",
        canGetLogic: igloo && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6314,
        name: "Caves Enemy Lanky Igloo 3",
        region: "Igloo Area",
        canGetLogic: igloo && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6315,
        name: "Caves Enemy Lanky Igloo 4",
        region: "Igloo Area",
        canGetLogic: igloo && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6316,
        name: "Caves Enemy Tiny Igloo Big",
        region: "Igloo Area",
        canGetLogic: igloo && sax && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6317,
        name: "Caves Enemy Lanky Cabin Inside Near",
        region: "Igloo Area",
        canGetLogic: lankyCabin.in && kosha,
        canGetBreak: lankyCabin.out && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6318,
        name: "Caves Enemy Lanky Cabin Inside Far",
        region: "Igloo Area",
        canGetLogic: lankyCabin.in && kosha,
        canGetBreak: lankyCabin.out && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6319,
        name: "Caves Enemy DK Cabin Gauntlet 0",
        region: "Cabins Area",
        canGetLogic: dkBee.in,
        canGetBreak: dkBee.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6320,
        name: "Caves Enemy DK Cabin Gauntlet 1",
        region: "Cabins Area",
        canGetLogic: dkBee.in,
        canGetBreak: dkBee.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6321,
        name: "Caves Enemy DK Cabin Gauntlet 2",
        region: "Cabins Area",
        canGetLogic: dkBee.in,
        canGetBreak: dkBee.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6322,
        name: "Caves Enemy DK Cabin Gauntlet 3",
        region: "Cabins Area",
        canGetLogic: dkBee.in,
        canGetBreak: dkBee.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6323,
        name: "Caves Enemy DK Cabin Gauntlet 4",
        region: "Cabins Area",
        canGetLogic: dkBee.in,
        canGetBreak: dkBee.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6324,
        name: "Caves Enemy DK Cabin Gauntlet 5",
        region: "Cabins Area",
        canGetLogic: dkBee.in,
        canGetBreak: dkBee.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6325,
        name: "Caves Enemy Diddy Cabin Close Right",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6326,
        name: "Caves Enemy Diddy Cabin Far Right",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6327,
        name: "Caves Enemy Diddy Cabin Close Left",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6328,
        name: "Caves Enemy Diddy Cabin Far Left",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6329,
        name: "Caves Enemy Diddy Cabin Center 0",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6330,
        name: "Caves Enemy Diddy Cabin Center 1",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6331,
        name: "Caves Enemy Diddy Cabin Center 2",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6332,
        name: "Caves Enemy Diddy Cabin Center 3",
        region: "Cabins Area",
        canGetLogic: diddyGauntlet.in,
        canGetBreak: diddyGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6333,
        name: "Caves Enemy Diddy Cabin Candle 0",
        region: "Cabins Area",
        canGetLogic: inStage && guitar && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6334,
        name: "Caves Enemy Diddy Cabin Candle 1",
        region: "Cabins Area",
        canGetLogic: inStage && guitar && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6335,
        name: "Caves Enemy Tiny Cabin Gauntlet 0",
        region: "Cabins Area",
        canGetLogic: inStage && sax && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6336,
        name: "Caves Enemy Tiny Cabin Gauntlet 1",
        region: "Cabins Area",
        canGetLogic: inStage && sax && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6337,
        name: "Caves Enemy Tiny Cabin Gauntlet 2",
        region: "Cabins Area",
        canGetLogic: inStage && sax && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6338,
        name: "Caves Enemy Tiny Cabin Gauntlet 3",
        region: "Cabins Area",
        canGetLogic: inStage && sax && klaptrap
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6339,
        name: "Caves Enemy Tiny Cabin Gauntlet 4",
        region: "Cabins Area",
        canGetLogic: inStage && sax && klaptrap
      }
    )
  ] });
};
const Vanilla$9 = () => {
  const inStage = usePlayCaves();
  const camera = useCamera();
  const sax = useSax();
  const slam = useSlam();
  const rocket = useRocket();
  const guitar = useGuitar();
  const spring = useSpring();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6080,
        name: "Caves Fairy Igloo",
        region: "Igloo Area",
        canGetLogic: inStage && sax && slam && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6081,
        name: "Caves Fairy Cabin",
        region: "Cabins Area",
        canGetLogic: inStage && camera && guitar && rocket && spring,
        canGetBreak: inStage && camera && guitar && rocket
      }
    )
  ] });
};
const Shuffled$9 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayCaves();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6280,
        name: "Caves Fairy Location #1",
        canGetLogic: inStage && anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6281,
        name: "Caves Fairy Location #2",
        canGetLogic: inStage && anyKong && camera
      }
    )
  ] });
};
const FairyLocations$2 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$9, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$9, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$8 = () => {
  const inStage = usePlayCaves();
  const pillar = useCavesPillar();
  const anyKong = useAnyKong();
  const miniFunky = useCavesMiniFunky();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6050,
        name: "Caves Kasplat Near Ice Castle",
        region: "Main Caves Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6051,
        name: "Caves Kasplat Mini Room by Funky",
        region: "Main Caves Area",
        canGetLogic: miniFunky.in,
        canGetBreak: logicBreak(miniFunky)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6052,
        name: "Caves Kasplat On the Pillar",
        region: "Main Caves Area",
        canGetLogic: pillar.in,
        canGetBreak: pillar.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6053,
        name: "Caves Kasplat Cabins",
        region: "Cabins Area",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6054,
        name: "Caves Kasplat Igloo",
        region: "Igloo Area",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const Shuffled$8 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayCaves();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CavesCheck, { id: 6250, name: "Caves Kasplat Location #1", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CavesCheck, { id: 6251, name: "Caves Kasplat Location #2", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CavesCheck, { id: 6252, name: "Caves Kasplat Location #3", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CavesCheck, { id: 6253, name: "Caves Kasplat Location #4", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CavesCheck, { id: 6254, name: "Caves Kasplat Location #5", canGetLogic: inStage && anyKong })
  ] });
};
const KasplatLocations$1 = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$8, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$8, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const punch = usePunch();
  const gone = useGone();
  const hunky = useHunky();
  const boulderTech = useBoulderTech();
  const triangle = useTriangle();
  const slam = useSlam();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6040,
        name: "Caves Chunky Gorilla Gone",
        region: "Main Caves Area",
        canGetLogic: inStage && punch && gone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6041,
        name: "Caves Chunky Transparent Igloo",
        region: "Igloo Area",
        canGetLogic: inStage && punch && boulderTech && hunky,
        canGetBreak: inStage && punch && boulderTech
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6042,
        name: "Caves Chunky 5 Door Igloo",
        region: "Igloo Area",
        canGetLogic: igloo && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6043,
        name: "Caves Chunky 5 Door Cabin",
        region: "Cabins Area",
        canGetLogic: inStage && triangle && gone && slam
      }
    )
  ] });
};
const DiddyBananas$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const cabinGauntlet = useCavesDiddyCabinGauntlet();
  const rocket = useRocket();
  const guitar = useGuitar();
  const spring = useSpring();
  const barrel = useBarrel();
  const twirl = useTwirl();
  const dk2 = useDk();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6010,
        name: "Caves Diddy Waterfall",
        region: "Main Caves Area",
        canGetLogic: inStage && rocket,
        canGetBreak: inStage && (dk2 || twirl)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6011,
        name: "Caves Diddy 5 Door Igloo",
        region: "Igloo Area",
        canGetLogic: igloo && guitar && barrel
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6012,
        name: "Caves Diddy 5 Door Cabin Lower",
        region: "Cabins Area",
        canGetLogic: cabinGauntlet.in,
        canGetBreak: cabinGauntlet.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6013,
        name: "Caves Diddy 5 Door Cabin Upper",
        region: "Cabins Area",
        canGetLogic: inStage && guitar && rocket && spring,
        canGetBreak: inStage && guitar && rocket
      }
    )
  ] });
};
const DkBananas$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const blast = useBlast();
  const bongos = useBongos();
  const strong = useStrong();
  const slam = useSlam();
  const dkCabin = useCavesDkCabinBee();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6001,
        name: "Caves DK Baboon Blast",
        region: "Main Caves Area",
        canGetLogic: inStage && blast
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6002,
        name: "Caves DK 5 Door Igloo",
        region: "Igloo Area",
        canGetLogic: igloo && bongos && strong,
        canGetBreak: igloo && bongos
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6003,
        name: "Caves DK Rotating Cabin",
        region: "Cabins Area",
        canGetLogic: inStage && bongos && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6004,
        name: "Caves DK 5 Door Cabin",
        region: "Cabins Area",
        canGetLogic: dkCabin.in,
        canGetBreak: dkCabin.out
      }
    )
  ] });
};
const LankyBananas$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const lankyCabin = useCavesLankyCabin();
  const canSlam = useSlamCaves();
  const balloon = useBalloon();
  const trombone = useTrombone();
  const sprint = useSprint();
  const highGrab = useHighGrab();
  const lanky = useLanky();
  const dk2 = useDk();
  const diddy = useDiddy();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6020,
        name: "Caves Lanky Beetle Race",
        region: "Main Caves Area",
        canGetLogic: inStage && canSlam && balloon && sprint,
        canGetBreak: inStage && canSlam && highGrab && sprint
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6021,
        name: "Caves Lanky Castle",
        region: "Main Caves Area",
        canGetLogic: inStage && canSlam && lanky
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6022,
        name: "Caves Lanky 5 Door Igloo",
        region: "Igloo Area",
        canGetLogic: igloo && trombone && balloon,
        canGetBreak: igloo && trombone && highGrab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6023,
        name: "Caves Lanky 1 Door Cabin",
        region: "Cabins Area",
        canGetLogic: lankyCabin.in && sprint,
        canGetBreak: logicBreak(lankyCabin) && (balloon && sprint || dk2 || diddy)
      }
    )
  ] });
};
const TinyBananas$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const mini = useMini();
  const port = useMonkeyport();
  const sax = useSax();
  const slam = useSlam();
  const orange = useOrange();
  const warpAll = useBananaportAll();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6030,
        name: "Caves Tiny Cave Barrel",
        region: "Main Caves Area",
        canGetLogic: inStage && (mini || warpAll)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6031,
        name: "Caves Tiny Monkeyport Igloo",
        region: "Igloo Area",
        canGetLogic: inStage && mini && port
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6032,
        name: "Caves Tiny 5 Door Igloo",
        region: "Igloo Area",
        canGetLogic: igloo && sax && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6033,
        name: "Caves Tiny 5 Door Cabin",
        region: "Cabins Area",
        canGetLogic: inStage && sax && orange
      }
    )
  ] });
};
const useChunkyMedalInLogic$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const boulderTech = useBoulderTech();
  const slam = useSlam();
  const warpAll = useBananaportAll();
  const kong = useChunky();
  const gun = usePineapple();
  const music = useTriangle();
  const move = usePunch();
  const crystal = useHunky();
  const pad = useGone();
  const mini = useMini();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 18;
  if (boulderTech) {
    bananas += 5;
  }
  if (move) {
    bananas += 11;
    if (gun) {
      bananas += 10;
    }
    if (boulderTech) {
      bananas += 6;
      if (crystal) {
        bananas += 10;
      }
    }
  }
  if (gun && (warpAll || mini)) {
    bananas += 10;
  }
  if (gun && igloo && music) {
    bananas += 10;
  }
  if (music && slam && pad) {
    bananas += 20;
  }
  return bananas;
};
const useChunkyMedalOutLogic$1 = () => useChunkyMedalInLogic$1();
const ChunkyMedal$1 = () => {
  const inLogic = useChunkyMedalInLogic$1();
  const outLogic = useChunkyMedalOutLogic$1();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6104,
      name: "Caves Chunky Medal",
      region: "Caves Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDiddyMedalCommonLogic$1 = () => {
  const igloo = useCavesIgloo();
  const gun = usePeanut();
  const music = useGuitar();
  const crystal = useRocket();
  let bananas = 5;
  if (crystal) {
    bananas += 20;
  }
  if (gun) {
    bananas += 20;
    if (igloo && music) {
      bananas += 10;
    }
  }
  return bananas;
};
const useDiddyMedalInLogic$1 = () => {
  const inStage = usePlayCaves();
  const miniFunky = useCavesMiniFunky();
  const kong = useDiddy();
  const music = useGuitar();
  const crystal = useRocket();
  const pad = useSpring();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (crystal) {
    bananas += 10;
  }
  if (miniFunky.in && crystal) {
    bananas += 10;
  }
  if (music) {
    bananas += 5;
    if (crystal) {
      bananas += 5;
      if (pad) {
        bananas += 15;
      }
    }
  }
  return bananas;
};
const useDiddyMedalOutLogic$1 = () => {
  const inStage = usePlayCaves();
  const miniFunky = useCavesMiniFunky();
  const kong = useDiddy();
  const music = useGuitar();
  const crystal = useRocket();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic$1() + 10;
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (logicBreak(miniFunky)) {
    bananas += 10;
  }
  if (music) {
    bananas += 10;
    if (crystal) {
      bananas += 15;
    }
  }
  return bananas;
};
const DiddyMedal$1 = () => {
  const inLogic = useDiddyMedalInLogic$1();
  const outLogic = useDiddyMedalOutLogic$1();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6101,
      name: "Caves Diddy Medal",
      region: "Caves Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalCommonLogic$1 = () => {
  useCavesIgloo();
  const punch = usePunch();
  const gun = useCoconut();
  const music = useBongos();
  const pad = useBlast();
  let bananas = 25;
  if (punch) {
    bananas += 3;
    if (gun) {
      bananas += 20;
    }
  }
  if (pad) {
    bananas += 20;
  }
  if (music) {
    bananas += 10;
  }
  return bananas;
};
const useDkMedalInLogic$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const kong = useDk();
  const music = useBongos();
  const crystal = useStrong();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (music && igloo && crystal) {
    bananas += 7;
  }
  return bananas;
};
const useDkMedalOutLogic$1 = () => {
  const inStage = usePlayCaves();
  const igloo = useCavesIgloo();
  const kong = useDk();
  const music = useBongos();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (music && igloo) {
    bananas += 7;
  }
  return bananas;
};
const DkMedal$1 = () => {
  const inLogic = useDkMedalInLogic$1();
  const outLogic = useDkMedalOutLogic$1();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6100,
      name: "Caves DK Medal",
      region: "Caves Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalCommonLogic$1 = () => {
  const canSlam = useSlamCaves();
  const igloo = useCavesIgloo();
  const gun = useGrape();
  const pad = useBalloon();
  let bananas = 15;
  if (pad) {
    bananas += 15;
  }
  if (gun) {
    bananas += 10;
    if (canSlam) {
      bananas += 10;
    }
  }
  if (igloo) {
    bananas += 1;
    if (gun) {
      bananas += 10;
    }
  }
  return bananas;
};
const useLankyMedalInLogic$1 = () => {
  const inStage = usePlayCaves();
  const canSlam = useSlamCaves();
  const igloo = useCavesIgloo();
  const pillar = useCavesPillar();
  const kong = useLanky();
  const music = useTrombone();
  const pad = useBalloon();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (canSlam && pad) {
    bananas += 5;
  }
  if (pillar.in) {
    bananas += 20;
  }
  if (igloo && music && pad) {
    bananas += 4;
  }
  return bananas;
};
const useLankyMedalOutLogic$1 = () => {
  const inStage = usePlayCaves();
  const canSlam = useSlamCaves();
  const igloo = useCavesIgloo();
  const pillar = useCavesPillar();
  const highGrab = useHighGrab();
  const kong = useLanky();
  const music = useTrombone();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (canSlam) {
    bananas += 5;
  }
  if (logicBreak(pillar)) {
    bananas += 20;
  }
  if (igloo && music && highGrab) {
    bananas += 4;
  }
  return bananas;
};
const LankyMedal$1 = () => {
  const inLogic = useLankyMedalInLogic$1();
  const outLogic = useLankyMedalOutLogic$1();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6102,
      name: "Caves Lanky Medal",
      region: "Caves Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useTinyMedalCommonLogic$1 = () => {
  const igloo = useCavesIgloo();
  const punch = usePunch();
  const boulderTech = useBoulderTech();
  const warpAll = useBananaportAll();
  const gun = useFeather();
  const music = useSax();
  const crystal = useMini();
  const pad = useMonkeyport();
  const hunky = useHunky();
  let bananas = 15;
  if (warpAll || crystal) {
    bananas += 5;
  }
  if (gun) {
    bananas += 10;
  }
  if (music) {
    bananas += 10;
    if (gun) {
      bananas += 10;
    }
  }
  if (punch && boulderTech && hunky && pad) {
    bananas += 20;
  }
  if (igloo && music) {
    bananas += 5;
    if (gun) {
      bananas += 10;
    }
  }
  return bananas;
};
const useTinyMedalInLogic$1 = () => {
  const inStage = usePlayCaves();
  const warpAll = useBananaportAll();
  const kong = useTiny();
  const gun = useFeather();
  const move = useTwirl();
  const crystal = useMini();
  const pad = useMonkeyport();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if ((warpAll || crystal) && move) {
    if (gun) {
      bananas += 10;
    }
    if (pad) {
      bananas += 5;
    }
  }
  return bananas;
};
const useTinyMedalOutLogic$1 = () => {
  const inStage = usePlayCaves();
  const warpAll = useBananaportAll();
  const kong = useTiny();
  const gun = useFeather();
  const crystal = useMini();
  const pad = useMonkeyport();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useTinyMedalCommonLogic$1();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (warpAll || crystal) {
    if (gun) {
      bananas += 10;
    }
    if (pad) {
      bananas += 5;
    }
  }
  return bananas;
};
const TinyMedal$1 = () => {
  const inLogic = useTinyMedalInLogic$1();
  const outLogic = useTinyMedalOutLogic$1();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CavesCheck,
    {
      id: 6103,
      name: "Caves Tiny Medal",
      region: "Caves Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$7 = () => {
  const inStage = usePlayCaves();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6110,
        baseName: "Caves Cranky",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6120,
        baseName: "Caves Funky",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6130,
        baseName: "Caves Candy",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage
      }
    )
  ] });
};
const Shuffled$7 = () => {
  const inStage = usePlayCaves();
  const punch = usePunch();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6140,
        baseName: "Caves Cranky Location",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6150,
        baseName: "Caves Funky Location",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6160,
        baseName: "Caves Candy Location",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 6170,
        baseName: "Caves Snide Location",
        level: "Caves",
        region: "Caves Shops",
        inLogic: inStage && punch
      }
    )
  ] });
};
const ShopLocations$1 = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$7, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$7, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const CavesChecks = () => {
  const inStage = usePlayCaves();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$2, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal$1, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CavesCheck,
      {
        id: 6105,
        name: "Caves Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: inStage && anyKong
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$2, {}) })
  ] });
};
const CastleCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Castle",
      region: props.region,
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$6 = () => {
  const inStage = usePlayCastle();
  const lanky = useLanky();
  const canSlam = useSlamCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7090,
      name: "Castle Arena",
      region: "Castle Surroundings",
      canGetLogic: inStage && lanky && canSlam
    }
  );
};
const Shuffled$6 = () => {
  const inStage = usePlayCastle();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CastleCheck, { id: 7190, name: "Castle Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations$1 = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$6, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$6, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const Vanilla$5 = () => {
  const inStage = usePlayCastle();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7060,
      name: "Castle Crate Mausoleum",
      region: "Castle Underground",
      canGetLogic: inStage && anyKong
    }
  ) });
};
const Shuffled$5 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7260,
        name: "Castle Crate Location #1 (maybe)",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7261,
        name: "Castle Crate Location #2 (maybe)",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const CrateLocations = () => {
  const locations = useShuffleCrates() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$5, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$5, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CratePool, { children: locations });
};
const VanillaDirtLocations = () => {
  const inStage = usePlayCastle();
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7070,
      name: "Castle Dirt Top Floor",
      region: "Castle Surroundings",
      canGetLogic: inStage && anyKong && shockwave
    }
  ) });
};
const ShuffledDirtLocations = () => {
  const anyKong = useAnyKong();
  const shockwave = useShockwave();
  const inStage = usePlayCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7270,
        name: "Castle Dirt Location #1",
        canGetLogic: inStage && anyKong && shockwave
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7271,
        name: "Castle Dirt Location #2",
        canGetLogic: inStage && anyKong && shockwave
      }
    )
  ] });
};
const DirtLocations = () => {
  const locations = useShuffleDirt() ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShuffledDirtLocations, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(VanillaDirtLocations, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RainbowCoinPool, { children: locations });
};
const EnemyLocations$1 = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const shed = useCastleShedEnemies();
  const tree = useCastleTree();
  const anyKong = useAnyKong();
  const diddy = useDiddy();
  const dk2 = useDk();
  const lanky = useLanky();
  const chunky = useChunky();
  const kosha = useDefeatKosha();
  const bat = useDefeatBat();
  const peanut = usePeanut();
  const charge = useCharge();
  const pineapple = usePineapple();
  const coconut = useCoconut();
  const slam = useSlam();
  const grape = useGrape();
  const feather = useFeather();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7300,
        name: "Castle Enemy Near Bridge 0",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7301,
        name: "Castle Enemy Near Bridge 1",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7302,
        name: "Castle Enemy Wooden Extrusion 0",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7303,
        name: "Castle Enemy Wooden Extrusion 1",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7304,
        name: "Castle Enemy Near Shed",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7305,
        name: "Castle Enemy Near Library",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7306,
        name: "Castle Enemy Near Tower",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7307,
        name: "Castle Enemy Museum Steps",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7308,
        name: "Castle Enemy Near Low Caves",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7309,
        name: "Castle Enemy Path to Low Kasplat",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7310,
        name: "Castle Enemy Low Boss Portal",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7311,
        name: "Castle Enemy Path to Dungeon",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7312,
        name: "Castle Enemy Near Headphones",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7313,
        name: "Castle Enemy Ballroom Start",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7314,
        name: "Castle Enemy Ballroom Board 0",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7315,
        name: "Castle Enemy Ballroom Board 1",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7316,
        name: "Castle Enemy Ballroom Board 2",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7317,
        name: "Castle Enemy Ballroom Board 3",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7318,
        name: "Castle Enemy Ballroom Board 4",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7319,
        name: "Castle Enemy Dungeon Face Room",
        region: "Castle Underground",
        canGetLogic: inStage && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7320,
        name: "Castle Enemy Dungeon Chair Room",
        region: "Castle Underground",
        canGetLogic: inStage && diddy && canSlam && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7321,
        name: "Castle Enemy Dungeon Outside Lanky Room",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7322,
        name: "Castle Enemy Shed Gauntlet 0",
        region: "Castle Surroundings",
        canGetLogic: shed.in,
        canGetBreak: shed.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7323,
        name: "Castle Enemy Shed Gauntlet 1",
        region: "Castle Surroundings",
        canGetLogic: shed.in,
        canGetBreak: shed.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7324,
        name: "Castle Enemy Shed Gauntlet 2",
        region: "Castle Surroundings",
        canGetLogic: shed.in,
        canGetBreak: shed.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7325,
        name: "Castle Enemy Shed Gauntlet 3",
        region: "Castle Surroundings",
        canGetLogic: shed.in,
        canGetBreak: shed.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7326,
        name: "Castle Enemy Shed Gauntlet 4",
        region: "Castle Surroundings",
        canGetLogic: shed.in,
        canGetBreak: shed.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7327,
        name: "Castle Enemy Low Cave Near Crypt",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7328,
        name: "Castle Enemy Low Cave Near Stair Right",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7320,
        name: "Castle Enemy Low Cave Near Stair Left",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7330,
        name: "Castle Enemy Low Cave Near Near Mausoleum",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7331,
        name: "Castle Enemy Low Cave Near Near Funky",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7332,
        name: "Castle Enemy Low Cave Near Near Tag",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7333,
        name: "Castle Enemy Crypt Diddy Coffin 0",
        region: "Castle Underground",
        canGetLogic: inStage && peanut && charge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7334,
        name: "Castle Enemy Crypt Diddy Coffin 1",
        region: "Castle Underground",
        canGetLogic: inStage && peanut && charge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7335,
        name: "Castle Enemy Crypt Diddy Coffin 2",
        region: "Castle Underground",
        canGetLogic: inStage && peanut && charge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7336,
        name: "Castle Enemy Crypt Diddy Coffin 3",
        region: "Castle Underground",
        canGetLogic: inStage && peanut && charge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7337,
        name: "Castle Enemy Crypt Chunky Coffin 0",
        region: "Castle Underground",
        canGetLogic: inStage && pineapple && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7338,
        name: "Castle Enemy Crypt Chunky Coffin 1",
        region: "Castle Underground",
        canGetLogic: inStage && pineapple && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7339,
        name: "Castle Enemy Crypt Chunky Coffin 2",
        region: "Castle Underground",
        canGetLogic: inStage && pineapple && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7340,
        name: "Castle Enemy Crypt Chunky Coffin 3",
        region: "Castle Underground",
        canGetLogic: inStage && pineapple && slam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7341,
        name: "Castle Enemy Crypt Minecart Entry",
        region: "Castle Underground",
        canGetLogic: inStage && coconut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7342,
        name: "Castle Enemy Crypt Fork",
        region: "Castle Underground",
        canGetLogic: inStage && (coconut || peanut || pineapple)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7343,
        name: "Castle Enemy Crypt Near Diddy",
        region: "Castle Underground",
        canGetLogic: inStage && (coconut || peanut || pineapple)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7344,
        name: "Castle Enemy Crypt Near Chunky",
        region: "Castle Underground",
        canGetLogic: inStage && (coconut || peanut || pineapple)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7345,
        name: "Castle Enemy Mausoleum Tiny",
        region: "Castle Underground",
        canGetLogic: inStage && (feather || grape)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7346,
        name: "Castle Enemy Mausoleum Lanky Switch",
        region: "Castle Underground",
        canGetLogic: inStage && (feather || grape)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7347,
        name: "Castle Enemy Mausoleum Lanky Gate",
        region: "Castle Underground",
        canGetLogic: inStage && (feather || grape)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7348,
        name: "Castle Enemy Upper Cave Near Dungeon",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7349,
        name: "Castle Enemy Upper Cave Pit",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7350,
        name: "Castle Enemy Upper Cave Near Pit",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7351,
        name: "Castle Enemy Upper Cave Near Entrance",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7352,
        name: "Castle Enemy Upper Cave Near Dungeon",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7353,
        name: "Castle Enemy Library Gauntlet 0",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7354,
        name: "Castle Enemy Library Gauntlet 1",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7355,
        name: "Castle Enemy Library Gauntlet 2",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7356,
        name: "Castle Enemy Library Gauntlet 3",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7357,
        name: "Castle Enemy Library Gauntlet Fork Left 0",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7358,
        name: "Castle Enemy Library Gauntlet Fork Left 1",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7359,
        name: "Castle Enemy Library Gauntlet Fork Center",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7360,
        name: "Castle Enemy Library Gauntlet Fork Right",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7361,
        name: "Castle Enemy Museum Start",
        region: "Castle Rooms",
        canGetLogic: inStage && chunky && canSlam && kosha
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7362,
        name: "Castle Enemy Museum Main 0",
        region: "Castle Rooms",
        canGetLogic: inStage && chunky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7363,
        name: "Castle Enemy Museum Main 1",
        region: "Castle Rooms",
        canGetLogic: inStage && chunky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7364,
        name: "Castle Enemy Museum Main 2",
        region: "Castle Rooms",
        canGetLogic: inStage && chunky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7365,
        name: "Castle Enemy Museum Main 3",
        region: "Castle Rooms",
        canGetLogic: inStage && chunky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7366,
        name: "Castle Enemy Tower Gauntlet 0",
        region: "Castle Rooms",
        canGetLogic: inStage && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7367,
        name: "Castle Enemy Tower Gauntlet 1",
        region: "Castle Rooms",
        canGetLogic: inStage && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7368,
        name: "Castle Enemy Tower Gauntlet 2",
        region: "Castle Rooms",
        canGetLogic: inStage && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7369,
        name: "Castle Enemy Tower Gauntlet 3",
        region: "Castle Rooms",
        canGetLogic: inStage && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7370,
        name: "Castle Enemy Tower Gauntlet 4",
        region: "Castle Rooms",
        canGetLogic: inStage && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7370,
        name: "Castle Enemy Tree Start 0",
        region: "Castle Surroundings",
        canGetLogic: tree && bat
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7371,
        name: "Castle Enemy Tree Start 1",
        region: "Castle Surroundings",
        canGetLogic: tree && bat
      }
    )
  ] });
};
const Vanilla$4 = () => {
  const inStage = usePlayCastle();
  const tree = useCastleTree();
  const coconut = useCoconut();
  const camera = useCamera();
  const sniper = useSniper();
  const diddy = useDiddy();
  const port = useMonkeyport();
  const canSlam = useSlamCastle();
  const chunky = useChunky();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7080,
        name: "Castle Fairy Tree",
        region: "Castle Surroundings",
        canGetLogic: tree && coconut && coconut && sniper && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7081,
        name: "Castle Fairy Rooms",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam && port && camera,
        canGetBreak: inStage && chunky && canSlam && camera
      }
    )
  ] });
};
const Shuffled$4 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayCastle();
  const camera = useCamera();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7280,
        name: "Castle Fairy Location #1",
        canGetLogic: inStage && anyKong && camera
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7281,
        name: "Castle Fairy Location #2",
        canGetLogic: inStage && anyKong && camera
      }
    )
  ] });
};
const FairyLocations$1 = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$4, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$4, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const Vanilla$3 = () => {
  const inStage = usePlayCastle();
  const tree = useCastleTree();
  const coconut = useCoconut();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7050,
        name: "Castle Kasplat Inside the Tree",
        region: "Castle Surroundings",
        canGetLogic: tree && coconut
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7051,
        name: "Castle Kasplat Lower Cave Center",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7052,
        name: "Castle Kasplat Near Upper Warp 2",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7053,
        name: "Castle Kasplat On a Lone Platform",
        region: "Castle Surroundings",
        canGetLogic: inStage && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7054,
        name: "Castle Kasplat Near Candy's",
        region: "Castle Underground",
        canGetLogic: inStage && anyKong
      }
    )
  ] });
};
const Shuffled$3 = () => {
  const anyKong = useAnyKong();
  const inStage = usePlayCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CastleCheck, { id: 7250, name: "Castle Kasplat Location #1", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CastleCheck, { id: 7251, name: "Castle Kasplat Location #2", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CastleCheck, { id: 7252, name: "Castle Kasplat Location #3", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CastleCheck, { id: 7253, name: "Castle Kasplat Location #4", canGetLogic: inStage && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CastleCheck, { id: 7254, name: "Castle Kasplat Location #5", canGetLogic: inStage && anyKong })
  ] });
};
const KasplatLocations = () => {
  const locations = useShuffleKasplats() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$3, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$3, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatPool, { children: locations });
};
const ChunkyBananas = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const tree = useCastleTree();
  const shed = useCastleShedEnemies();
  const punch = usePunch();
  const pineapple = usePineapple();
  const sniper = useSniper();
  const boulderTech = useBoulderTech();
  const hardShooting = useHardShooting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7040,
        name: "Castle Chunky Tree",
        region: "Castle Surroundings",
        canGetLogic: tree && punch && pineapple && (sniper || hardShooting),
        canGetBreak: tree && punch && pineapple
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7041,
        name: "Castle Chunky Shed",
        region: "Castle Surroundings",
        canGetLogic: shed.in,
        canGetBreak: shed.out
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7042,
        name: "Castle Chunky Museum",
        region: "Castle Rooms",
        canGetLogic: inStage && boulderTech && canSlam && punch
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7043,
        name: "Castle Chunky Crypt",
        region: "Castle Underground",
        canGetLogic: inStage && pineapple && punch
      }
    )
  ] });
};
const DiddyBananas = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const peanut = usePeanut();
  const charge = useCharge();
  const rocket = useRocket();
  const sniper = useSniper();
  const vine = useVine();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7010,
        name: "Castle Diddy Above Castle",
        region: "Castle Surroundings",
        canGetLogic: inStage && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7011,
        name: "Castle Diddy Ballroom",
        region: "Castle Rooms",
        canGetLogic: inStage && canSlam && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7012,
        name: "Castle Diddy Crypt",
        region: "Castle Underground",
        canGetLogic: inStage && peanut && charge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7013,
        name: "Castle Diddy Dungeon",
        region: "Castle Underground",
        canGetLogic: inStage && canSlam && peanut && sniper && vine
      }
    )
  ] });
};
const DkBananas = () => {
  const tree = useCastleTree();
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const strong = useStrong();
  const grab = useGrab();
  const coconut = useCoconut();
  const sniper = useSniper();
  const dk2 = useDk();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToughGoldenBanana, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7001,
        name: "Castle DK Tree",
        region: "Castle Surroundings",
        canGetLogic: tree && coconut && sniper
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7002,
        name: "Castle DK Library",
        region: "Castle Rooms",
        canGetLogic: inStage && dk2 && canSlam && strong,
        canGetBreak: inStage && dk2 && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7003,
        name: "Castle DK Minecarts",
        region: "Castle Underground",
        canGetLogic: inStage && coconut && grab
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7004,
        name: "Castle DK Dungeon",
        region: "Castle Underground",
        canGetLogic: inStage && dk2 && canSlam
      }
    )
  ] });
};
const LankyBananas = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const grape = useGrape();
  const balloon = useBalloon();
  const sprint = useSprint();
  const trombone = useTrombone();
  const sniper = useSniper();
  const homing = useHoming();
  const lanky = useLanky();
  const dk2 = useDk();
  const diddy = useDiddy();
  const twirl = useTwirl();
  const vine = useVine();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7020,
        name: "Castle Lanky Tower",
        region: "Castle Rooms",
        canGetLogic: inStage && canSlam && grape && balloon && sniper,
        canGetBreak: inStage && canSlam && grape && balloon && homing
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7021,
        name: "Castle Lanky Greenhouse",
        region: "Castle Surroundings",
        canGetLogic: inStage && lanky && canSlam
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7022,
        name: "Castle Lanky Mausoleum",
        region: "Castle Underground",
        canGetLogic: inStage && grape && sprint && vine,
        canGetBreak: inStage && grape && (sprint || dk2 || diddy)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7023,
        name: "Castle Lanky Dungeon",
        region: "Castle Underground",
        canGetLogic: inStage && canSlam && trombone && balloon,
        canGetBreak: inStage && canSlam && trombone && twirl
      }
    )
  ] });
};
const TinyBananas = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const diddy = useDiddy();
  const port = useMonkeyport();
  const mini = useMini();
  const sax = useSax();
  const twirl = useTwirl();
  const homing = useHoming();
  const feather = useFeather();
  const grape = useGrape();
  const anyGun = useAnyGun();
  const dk2 = useDk();
  const hardShooting = useHardShooting();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7030,
        name: "Castle Tiny Car Race",
        region: "Castle Rooms",
        canGetLogic: inStage && diddy && canSlam && port && mini
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7031,
        name: "Castle Tiny Trash Can",
        region: "Castle Surroundings",
        canGetLogic: inStage && mini && (sax || feather && (homing || hardShooting)),
        canGetBreak: inStage && mini && anyGun
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7032,
        name: "Castle Tiny Mausoleum",
        region: "Castle Underground",
        canGetLogic: inStage && feather && canSlam && twirl,
        canGetBreak: inStage && (feather || grape) && canSlam && (dk2 || twirl)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7033,
        name: "Castle Tiny Over Chasm",
        region: "Castle Underground",
        canGetLogic: inStage && twirl
      }
    )
  ] });
};
const useChunkyMedalInLogic = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const tree = useCastleTree();
  const boulderTech = useBoulderTech();
  const kong = useChunky();
  const gun = usePineapple();
  const move = usePunch();
  const shuffleBananas = useShuffleColoredBananas();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  let bananas = 30;
  if (tree) {
    bananas += 5;
    if (move && gun) {
      bananas += 10;
    }
  }
  if (gun && move) {
    bananas += 40;
  }
  if (canSlam) {
    if (gun) {
      bananas += 10;
    }
    if (move && boulderTech) {
      bananas += 5;
    }
  }
  return bananas;
};
const useChunkyMedalOutLogic = () => useChunkyMedalInLogic();
const ChunkyMedal = () => {
  const inLogic = useChunkyMedalInLogic();
  const outLogic = useChunkyMedalOutLogic();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7104,
      name: "Castle Chunky Medal",
      region: "Castle Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDiddyMedalCommonLogic = () => {
  const canSlam = useSlamCastle();
  const punch = usePunch();
  const gun = usePeanut();
  const crystal = useRocket();
  let bananas = 0;
  if (crystal) {
    bananas += 5;
  }
  if (gun) {
    bananas += 20;
  }
  if (punch) {
    bananas += 20;
  }
  if (canSlam) {
    if (crystal) {
      bananas += 15;
    }
    if (gun) {
      bananas += 20;
    }
  }
  return bananas;
};
const useDiddyMedalInLogic = () => {
  const inStage = usePlayCastle();
  const kong = useDiddy();
  const gun = usePeanut();
  const move = useCharge();
  const crystal = useRocket();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (crystal) {
    bananas += 5;
  }
  if (gun) {
    bananas += 5;
    if (gun && move) {
      bananas += 10;
    }
  }
  return bananas;
};
const useDiddyMedalOutLogic = () => {
  const inStage = usePlayCastle();
  const coconut = useCoconut();
  const pineapple = usePineapple();
  const kong = useDiddy();
  const gun = usePeanut();
  const move = useCharge();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDiddyMedalCommonLogic() + 5;
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (coconut || pineapple) {
    bananas += 5;
    if (gun && move) {
      bananas += 10;
    }
  }
  return bananas;
};
const DiddyMedal = () => {
  const inLogic = useDiddyMedalInLogic();
  const outLogic = useDiddyMedalOutLogic();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7101,
      name: "Castle Diddy Medal",
      region: "Castle Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useDkMedalCommonLogic = () => {
  const tree = useCastleTree();
  const gun = useCoconut();
  let bananas = 50;
  if (tree && gun) {
    bananas += 15;
  }
  return bananas;
};
const useDkMedalInLogic = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const kong = useDk();
  const gun = useCoconut();
  const crystal = useStrong();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (canSlam) {
    bananas += 10;
    if (crystal) {
      bananas += 10;
    }
  }
  if (gun) {
    bananas += 15;
  }
  return bananas;
};
const useDkMedalOutLogic = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const peanut = usePeanut();
  const pineapple = usePineapple();
  const kong = useDk();
  const gun = useCoconut();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useDkMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (canSlam) {
    bananas += 20;
  }
  if (gun) {
    bananas += 15;
  } else if (peanut || pineapple) {
    bananas += 5;
  }
  return bananas;
};
const DkMedal = () => {
  const inLogic = useDkMedalInLogic();
  const outLogic = useDkMedalOutLogic();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7100,
      name: "Castle DK Medal",
      region: "Castle Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useLankyMedalCommonLogic = () => {
  const canSlam = useSlamCastle();
  const gun = useGrape();
  let bananas = 30;
  if (canSlam) {
    bananas += 30;
    if (gun) {
      bananas += 20;
    }
  }
  return bananas;
};
const useLankyMedalInLogic = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const kong = useLanky();
  const gun = useGrape();
  const music = useTrombone();
  const crystal = useSprint();
  const pad = useBalloon();
  const sniper = useSniper();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (gun && crystal) {
    bananas += 10;
  }
  if (canSlam && gun && (music && pad || sniper)) {
    bananas += 10;
  }
  return bananas;
};
const useLankyMedalOutLogic = () => {
  const inStage = usePlayCastle();
  const canSlam = useSlamCastle();
  const kong = useLanky();
  const gun = useGrape();
  const music = useTrombone();
  const crystal = useSprint();
  const pad = useBalloon();
  const dk2 = useDk();
  const diddy = useDiddy();
  const twirl = useTwirl();
  const sniper = useSniper();
  const shuffleBananas = useShuffleColoredBananas();
  let bananas = useLankyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  if (gun && (crystal || dk2 || diddy)) {
    bananas += 10;
  }
  if (canSlam && gun && (music && pad || sniper) || twirl) {
    bananas += 10;
  }
  return bananas;
};
const LankyMedal = () => {
  const inLogic = useLankyMedalInLogic();
  const outLogic = useLankyMedalOutLogic();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7102,
      name: "Castle Lanky Medal",
      region: "Castle Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const useTinyMedalCommonLogic = () => {
  const canSlam = useSlamCastle();
  const gun = useFeather();
  const crystal = useMini();
  const pad = useMonkeyport();
  const diddy = useDiddy();
  let bananas = 50;
  if (crystal) {
    bananas += 5;
  }
  if (gun) {
    bananas += 10;
  }
  if (diddy && canSlam) {
    bananas += 5;
    if (pad) {
      bananas += 15;
      if (gun) {
        bananas += 10;
      }
    }
  }
  return bananas;
};
const useTinyMedalInLogic = () => {
  const inStage = usePlayCastle();
  const kong = useTiny();
  const gun = useFeather();
  const shuffleBananas = useShuffleColoredBananas();
  const bananas = useTinyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  return gun ? bananas + 5 : bananas;
};
const useTinyMedalOutLogic = () => {
  const inStage = usePlayCastle();
  const kong = useTiny();
  const gun = useFeather();
  const grape = useGrape();
  const shuffleBananas = useShuffleColoredBananas();
  const bananas = useTinyMedalCommonLogic();
  if (!inStage) {
    return 0;
  }
  if (!kong) {
    return 0;
  }
  if (shuffleBananas) {
    return 100;
  }
  return gun || grape ? bananas + 5 : bananas;
};
const TinyMedal = () => {
  const inLogic = useTinyMedalInLogic();
  const outLogic = useTinyMedalOutLogic();
  const cbCount = useCbCount();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CastleCheck,
    {
      id: 7103,
      name: "Castle Tiny Medal",
      region: "Castle Medal Rewards",
      canGetLogic: inLogic >= cbCount,
      canGetBreak: outLogic >= cbCount
    }
  );
};
const Vanilla$2 = () => {
  const inStage = usePlayCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7110,
        baseName: "Castle Cranky",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7120,
        baseName: "Castle Funky",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7130,
        baseName: "Castle Candy",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    )
  ] });
};
const Shuffled$2 = () => {
  const inStage = usePlayCastle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7140,
        baseName: "Castle Cranky Location",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7150,
        baseName: "Castle Funky Location",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7160,
        baseName: "Castle Candy Location",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ShopGenerator,
      {
        baseId: 7170,
        baseName: "Castle Snide Location",
        level: "Castle",
        region: "Castle Shops",
        inLogic: inStage
      }
    )
  ] });
};
const ShopLocations = () => {
  const locations = useShuffledShops() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$2, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$2, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShopPool, { children: locations });
};
const CastleChecks = () => {
  const inStage = usePlayCastle();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DkBananas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyBananas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LankyBananas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinyBananas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyBananas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KasplatLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CrateLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DirtLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DkMedal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiddyMedal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LankyMedal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TinyMedal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChunkyMedal, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CastleCheck,
      {
        id: 7105,
        name: "Castle Boss",
        region: "Troff 'N' Scoff",
        canGetLogic: inStage && anyKong
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShopLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations$1, {}) })
  ] });
};
const HelmCheck = (props) => {
  const checks = useDonkStore(useShallow((state) => state.checks));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ItemCheck,
    {
      id: props.id,
      name: props.name,
      level: "Helm",
      region: "Hideout Helm",
      canGetLogic: props.canGetLogic,
      canGetBreak: props.canGetBreak,
      done: checks[props.id]
    }
  ) });
};
const Vanilla$1 = () => {
  const helmMachine = useHelmMachine();
  const rocket = useRocket();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8090, name: "Helm Arena", canGetLogic: helmMachine && rocket });
};
const Shuffled$1 = () => {
  const inStage = useHelmEnter();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8190, name: "Helm Arena", canGetLogic: inStage && anyKong }) });
};
const ArenaLocations = () => {
  const locations = useShuffledArenas() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled$1, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla$1, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaPool, { children: locations });
};
const EnemyLocations = () => {
  const helmEntry = useHelmEnter();
  const helmMachine = useHelmMachine();
  const helmDoors = useHelmDoors();
  const bongos = useBongos();
  const guitar = useGuitar();
  const rocket = useRocket();
  const trombone = useTrombone();
  const sax = useSax();
  const triangle = useTriangle();
  const anyKong = useAnyKong();
  const klump = useDefeatKlump();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8300, name: "Helm Enemy Start 0", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8301, name: "Helm Enemy Start 1", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8302, name: "Helm Enemy Hill", canGetLogic: helmEntry && anyKong && klump }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8303,
        name: "Helm Enemy Switch Room 0",
        canGetLogic: helmEntry && anyKong && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8304, name: "Helm Enemy Switch Room 1", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8305, name: "Helm Enemy Mini Room 0", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8306, name: "Helm Enemy Mini Room 1", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8307, name: "Helm Enemy Mini Room 2", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8308, name: "Helm Enemy Mini Room 3", canGetLogic: helmEntry && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8309,
        name: "Helm Enemy DK Room",
        canGetLogic: helmMachine.in && bongos,
        canGetBreak: helmMachine.out && bongos
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8310,
        name: "Helm Enemy Chunky Room 0",
        canGetLogic: helmMachine.in && triangle,
        canGetBreak: helmMachine.out && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8311,
        name: "Helm Enemy Chunky Room 1",
        canGetLogic: helmMachine.in && triangle,
        canGetBreak: helmMachine.out && triangle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8312,
        name: "Helm Enemy Tiny Room",
        canGetLogic: helmMachine.in && sax,
        canGetBreak: helmMachine.out && sax && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8313,
        name: "Helm Enemy Lanky Room 0",
        canGetLogic: helmMachine.in && trombone,
        canGetBreak: helmMachine.out && trombone && klump
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8314,
        name: "Helm Enemy Lanky Room 1",
        canGetLogic: helmMachine.in && trombone,
        canGetBreak: helmMachine.out && trombone
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8315,
        name: "Helm Enemy Diddy Room 0",
        canGetLogic: helmMachine.in && guitar && rocket,
        canGetBreak: helmMachine.out && guitar && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8316,
        name: "Helm Enemy Diddy Room 1",
        canGetLogic: helmMachine.in && guitar && rocket,
        canGetBreak: helmMachine.out && guitar && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8317,
        name: "Helm Enemy Nav Room Left",
        canGetLogic: helmDoors.in && anyKong,
        canGetBreak: helmDoors.out && anyKong
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8318,
        name: "Helm Enemy Nav Room Right",
        canGetLogic: helmDoors.in && anyKong,
        canGetBreak: helmDoors.out && anyKong
      }
    )
  ] });
};
const Vanilla = () => {
  const helmDoors = useHelmDoors();
  const camera = useCamera();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8110, name: "Helm Fairies x2", canGetLogic: helmDoors && camera && anyKong }) });
};
const Shuffled = () => {
  const entry = useHelmEnter();
  const camera = useCamera();
  const anyKong = useAnyKong();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8210, name: "Helm Fairy Location #1", canGetLogic: entry && camera && anyKong }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8211, name: "Helm Fairy Location #2", canGetLogic: entry && camera && anyKong })
  ] });
};
const FairyLocations = () => {
  const locations = useShuffleFairies() ? /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffled, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vanilla, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FairyPool, { children: locations });
};
const MedalLocations = () => {
  const helmMachine = useHelmMachine();
  const bongos = useBongos();
  const guitar = useGuitar();
  const rocket = useRocket();
  const trombone = useTrombone();
  const sax = useSax();
  const triangle = useTriangle();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(BananaMedalPool, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8100, name: "Helm DK Banana Medal", canGetLogic: helmMachine && bongos }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8101,
        name: "Helm Diddy Banana Medal",
        canGetLogic: helmMachine && guitar && rocket
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8102, name: "Helm Lanky Banana Medal", canGetLogic: helmMachine && trombone }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8103, name: "Helm Tiny Banana Medal", canGetLogic: helmMachine && sax }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HelmCheck, { id: 8104, name: "Helm Chunky Banana Medal", canGetLogic: helmMachine && triangle })
  ] });
};
const HelmChecks = () => {
  const helmDoors = useHelmDoors();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArenaLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MedalLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BossPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HelmCheck,
      {
        id: 8105,
        name: "Helm Key 8 Location",
        canGetLogic: helmDoors.in,
        canGetBreak: helmDoors.out
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FairyLocations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropPool, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnemyLocations, {}) })
  ] });
};
const Checklist = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Isles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Japes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Aztec" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Factory" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Galleon" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Forest" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Caves" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Castle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { children: "Helm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IsleChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(JapesChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AztecChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FactoryChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleonChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ForestChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CavesChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CastleChecks, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabPanel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HelmChecks, {}) })
  ] }) });
};
const ResetTracker = () => {
  const assignPreset = useDonkStore(useShallow((state) => state.setPreset));
  const [preset, setPreset] = reactExports.useState("beginner");
  const handlePreset = (val) => {
    setPreset(val);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "reset", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        id: "preset-options",
        value: preset,
        onChange: (e2) => handlePreset(e2.currentTarget.value),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "beginner", children: "Beginner Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "s2", children: "Season 2 Race Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sandbox", children: "Sandbox Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "balancedLzr", children: "Balanced LZR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "nsak", children: "No Style, All Keys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "anotherDay", children: "Another Day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hitlist", children: "Hitlist" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "treasureHurry", children: "Treasure Hurry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "kevin", children: "KEVIN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bountyHunter", children: "Bounty Hunter (revven)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "radicalSlo", children: "S3 Test: Radical SLO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "s3allKeys", children: "S3 Test: All Keys" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: (e2) => {
          e2.preventDefault();
          assignPreset(preset);
        },
        children: "Initialize Preset"
      }
    )
  ] });
};
const genDropDowns = () => {
  return SelectableRegions.map((r2) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: r2 }, r2);
  });
};
const FoolishDropDown = (props) => {
  const [foolChecks, hoardChecks, setFool, setHoard, clearRegion] = useDonkStore(
    useShallow((state) => [
      state.foolish,
      state.hoard,
      state.setFool,
      state.setHoard,
      state.clearRegion
    ])
  );
  const foolCheck = foolChecks[props.id] ?? "";
  const hoardCheck = hoardChecks[props.id] ?? "";
  const display = foolCheck === "" && hoardCheck === "" ? "NONE" : hoardCheck !== "" ? "PATH" : "FOOL";
  const checkLabel = foolChecks[props.id] ?? hoardChecks[props.id] ?? "";
  const onChangeDropDown = (e2) => {
    const value = e2.target.value;
    if (value === "") {
      clearRegion(props.id);
    } else if (display === "PATH") {
      setHoard(props.id, value);
    } else {
      setFool(props.id, value);
    }
  };
  const onTypeClick = () => {
    if (display === "PATH") {
      setFool(props.id, hoardChecks[props.id]);
    } else if (display === "FOOL") {
      setHoard(props.id, foolChecks[props.id]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: props.id, value: checkLabel, onChange: onChangeDropDown, children: genDropDowns() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: onTypeClick, children: display })
  ] });
};
const RegionHints = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hint-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Region Hints" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hint-drops", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check01" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check02" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check03" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check04" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check05" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check06" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check07" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check08" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check09" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check14" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check17" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check18" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check19" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoolishDropDown, { id: "check20" })
    ] })
  ] });
};
const CountSelector = (props) => {
  const { storeKey, imgUrl, maxValue } = props;
  const [num] = useDonkStore(useShallow((state) => [state[props.prefix][storeKey]]));
  const clamp2 = (num2) => Math.min(Math.max(num2, 0), maxValue);
  const nextCount = (num2) => clamp2(num2 + 1);
  const prevCount = (num2) => clamp2(num2 - 1);
  const handleNextLevel = () => {
    props.setCount(storeKey, nextCount(num));
  };
  const handlePrevLevel = (e2) => {
    e2.preventDefault();
    props.setCount(storeKey, prevCount(num));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      props.setCount(storeKey, nextCount(num));
    } else {
      props.setCount(storeKey, prevCount(num));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `count-icon ${props.prefix}-${props.storeKey}`,
      onClick: handleNextLevel,
      onContextMenu: handlePrevLevel,
      onWheel: handleWheel,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { height: 24, src: imgUrl, style: { filter: `grayscale(${num != 0 ? "0" : "1"})` } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: num })
      ]
    }
  );
};
const SimpleIcon = (props) => {
  const value = useDonkStore((state) => state[props.prefix][props.storeKey]);
  const classes = `simple-icon ${props.prefix}-${props.storeKey} ${value ? "have" : "have-not"} ${props.className}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classes, onClick: () => props.updateItem(props.storeKey, !value), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        width: 24,
        height: 24,
        src: props.imgUrl,
        style: { filter: `grayscale(${value ? "0" : "1"})` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value ? "✓" : "✗" })
  ] });
};
const DoubleIcon = (props) => {
  const [left, right] = useDonkStore(
    useShallow((state) => [
      state[props.prefix][props.storeLeft],
      state[props.prefix][props.storeRight]
    ])
  );
  let url = props.imgBoth;
  if (left && !right) {
    url = props.imgLeft;
  } else if (!left && right) {
    url = props.imgRight;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `double-icon ${props.prefix}-${props.storeLeft}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        width: 24,
        height: 24,
        src: url,
        style: { filter: `grayscale(${left || right ? "0" : "1"})` },
        onClick: () => props.setItem(props.storeLeft, !left),
        onContextMenu: (e2) => {
          e2.preventDefault();
          props.setItem(props.storeRight, !right);
        }
      }
    ),
    " "
  ] });
};
const slamIcon = "data:image/png;base64,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";
const superIcon = "data:image/png;base64,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";
const duperIcon = "data:image/png;base64,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";
const slamToIcon = (num) => {
  switch (num) {
    case 2:
      return superIcon;
    case 3:
      return duperIcon;
    default:
      return slamIcon;
  }
};
const clamp$2 = (num) => Math.min(Math.max(num, 0), 3);
const nextSlam = (num) => clamp$2(num + 1);
const prevSlam = (num) => clamp$2(num - 1);
const SlamSelector = () => {
  const [slam, setSlam] = useDonkStore(useShallow((state) => [state.moves.slam, state.setSlam]));
  const handleNextLevel = () => {
    setSlam(nextSlam(slam));
  };
  const handlePrevLevel = (e2) => {
    e2.preventDefault();
    setSlam(prevSlam(slam));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      setSlam(nextSlam(slam));
    } else {
      setSlam(prevSlam(slam));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "slam-icon moves-slam", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      height: 24,
      src: slamToIcon(slam),
      onClick: handleNextLevel,
      onContextMenu: handlePrevLevel,
      onWheel: handleWheel,
      style: { filter: `grayscale(${slam != 0 ? "0" : "1"})` }
    }
  ) });
};
const goldBananaIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAsCAMAAADcpCGDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv1QTFRFSDYA//8AWEQAdlgA////ZEoAaVIAmXYAMyUA/94A/+8A//cBjGsApXsA/84A//6J/9YAhGMA//4k//8UqoQA//6ZlWsA/8YAs4wA//53//9X//81//65zpQA/+cAvYwAtYQA//7ZzpwA///rxpQArXsA//+q2JwB//8I3LcA77UAu5QA970AemMA//9KxowA///K//9jxZwA7MoAjWMA1qUA/70Ap5cA3q0A560A770Ay6UA//9C//9r3qUA98YA570ApXMA/84L57UA/to1/us1/tol///31a0A/+1X9NYA/scV3JkU15QG/dgWtngA984A+9l0/sok/70Mv4QAc0oA/9tI760ApI0E55wP97UAxr4Ag2sA/+0TumxL49wA56Ymi3UA//dM/dtW/upp/t4KhloEyYUO0IwF97UN/usl56UA2Zgq3MoE6qUTpqUB/+p3//c7wq8FQywa/9YIglge9+8A/+xI+K0Eakg8+49z9d4B9+cA/ecOmYgA/uyKvXsN/+8I+6+N//cV884O/7cW//dtEFwS56UI/8YI8KUJ7KhA+9ST/syy8K0tk2gf/++59K0V/vdhlm02Y0ce/M428GxZ87hRmmVT0owXXTYv6ckVF5Ezpd5l8rZtlqWNESZW+rgk0JBU77Y3/7UA/cxG9tYK770K/7UId59ZChCCA70K760J/OyY470LlD419/cAmXMN0sqrkExBr4mJ7LUR9MYL6ecCRyZS7cpC/eqr3LcSYWdpQGYuQqG484xQCxTVrXMA/9rIFpxU970+1KGG560ODU+fxpQQe0od3qUI76UAzrIx1qpg57UIuN6qh1CU68YlxHslqokhwohzYKcO7NYV78Y5FV5U3q0LqKI0zrVPVm8I0rUd8//eUjnO77kl8rioQnOcedmB970IyZwLWjalUmfSqXcY26UVnZBTStJCxq3OvYQM1qUIjGsQqWsA9+/G1sM0/8xd/+/n5+f3e18279Yp1rW1/+fWtYwQjNbWhGMIxpQIAAAANnrqQwAAAP90Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AZvyKWQAAAiBJREFUeNpi+EcIMKBytU0JqLDOttLGq4JdS8eCDa8KK3stbby2GG1rscLr0jr5i27n8KqwTp+QxItPRZn/PJa17HhUcDu8/cKihseMeK+DZ1lYZJbhVFFUo39wE1CFGU4VclamOYosLGszzXGo0BaQk3ORUVQMrBDBocJZh5u7kF9NJjDPC7sKZiUlAU5pQ37RlA4+7CrYFVRNLYT0bCU98zixqxBj51VQECqUMvT0ETfHqqKUnZ1XVVjIRkovhw+7is2laSZAFdJ6Un3icthVzJjcz8sNMuR6BydWFTM2x/WLVQMNkSr3wbAGrKJy/YxSk2gNYSE9qcUrOLGpmFU5pZStCKTCNnkiuiGQMGVgYw1lBqqwseU/0smJVQUzM3OokIawtK0af5AANzYVrEAlPEBDpNQU+Vs5ubHEPhMbG7OghrCwDb+yu6g3ihKoCg6oEiFDGRYWNTcB7miMVAhUwpxmDjTE1oCFRTHMiYsRIyUzgJTkA70jCVSizB/EyRWNnhtAFumeAQYsSAmLYoEf1DVIOQqohJVtMlCJrZoyUI1Bip8cF1q+5WBiYmJlcxWW1pOUAamR8fQWQMv7QCUMTLpFoHRgKypjoKgm6emHXgYxsDIxhSZqNgsLZbna6CUlSYWxM6AnByZWVlYebc0SIEhNTS3Z9o8BSyZjZYuRMPLw8LCw8tD+h00FyD2suokiIonMWMpCwqXlgKkACDAAt/Uws1o1F4UAAAAASUVORK5CYII=";
const bananaMedalIcon$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUUExURaOQMe/IFuvHOb2jPei6OPvSbcqZAee6FHhlADEbAE85AJh1FNaxREYxALyLFtm3IMiKEphoAVhDAEYlALiIAcyXFHY5AJhWAN57E71rENVzCtZzGMp3ENZ7CqloFJdGAKpWAMtmAuh7EeqEE95zCtuGIog1AOd7CJJSCqlHAdNrCN57CPCMDOaECL1aC7toAMh1APiLGd5zAIhGAPCECGMxANZrAJp1AWs5ANZzALlWAaqGAKlnAIdYAad2AfzrWVUnAP/8jP/va7dKAclYAeq6Af/9V///2v3IFpc2AGtSAP/+JP/+vfvaPsiJAe+MAK80Af//C//9dv/gTOmrAVoxAFIxAPqJAOeEAHklAGdGALh4AP/9Q/etAFo5AO+EAP/nDP/tFf3MJvfGAKeXAXhEAN57AP/eAPC1BammAXhWAOd7AIplAdyoAf7OC//GCPKtCP/nAPfOAP+9Cv/3APO9CPLWAPfnAP/vAP/WALqWAP/OAP/eD9qXAP/3CuzKAPfvAP/WCNF7ANu6APyZAOTcAF9SCNmHAP+lAJiGBOeMAP+tAP+1AO97AP+9AOplAGQoAMmnAf/GANpIAe9zAN5rANxVAPp4AP//AOfnANXIAQAAABNOIP4AAACcdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AL9nXxsAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAW0SURBVGhD7Zj7VxJbFIDrVpNYljxCwgzGSCMjCAniZRZSWSlaFIQ9TApUJMPIeFQWYlaalqX31vyzd+9hgzws6/7AsPR+a7k4s/dhPtae8xp3cFVge0t27PjDb9WkZOfOv/7atWvX7t179lDkN6hBCcPs3VtXJxKJ6uv37du/n6Kbsj0lDQ0Mc+AAXdTXHzxIzU2pQUljo1hMFxJJYyM1N6XmJFKpTFYkOXSImptSWxK5XN7U1NioUBw+rFQqm5uPHGlpOXqUkptQKxKVSq1m2dbW1mPHFAqNRpHnWI7jxzd11YakrU2jaW8HBaLRKJUKBd8kRZ4TJ6j/RmwPiVarPQloNB1Ae3s7PpHmZl6C9z0F8IIcCgV9rRKBJXI5y7I6XUcH1ignAjSa06f1ej3LGgwoOXPmDH4gvIm+W4agEpXKaNQhOQkPy1Iyj0jU2dnZ0oIi/DOZTBvXTEDJ2bNmM1Und3+1mjKIxWKhFiISnTun0xXGQGsrxYsQTKJSsazVajRarVaz+eRJm43ieex2e2FbQeD0IlIqTSYoLlTM5HBQvMAWlkilUlzZzWY0gKLkaeRoaGiw251OukLyGh6djqIFhJHANgszHSSosTY1UbgYkHR1nT9PVzlQQ+UymcqXZCEk3d1qLFZOAmsUhUuRSCQy2YULFy/SdQ7UiDo6UFReMCEkcrnL5erpyUkoVgFI3O5Lly5fvnKFIohUShJckptK6lx9iUjU2wsSmw0lKhVFK7h69SrDXLt2/XpfX39/PwVx7Eul3d2nTnk820QilQ4MkKRigyoCJDLZ4OCNGzdver1eCsIvvHXr1u3bHo/P5/H4/X4KI9WX3Lmj1ZLk58WSSAKBwNDQ4ODdu3199+7dW1+QIX7/vsHg8Tx4ILSkt7cgocgGSCRQrqGh4eGHD0dGgsHgo0eU4B4/fhwIOBwPgFAoREFEGAmAGopsQCAAkv7+cHhkZHQ0HA6PjVGCczqd4+N6PZTKH4lEKIhUX8IrtNqBgZ8/do6bmBCLxdHokyeTk0+fxmKxEonTqdeDIPKLclVF4nINDIDE5ZLLKVKBxdLVBWvJ1NTk5LNnXm88HqcElBHWEqeTZUEQKp3MW1Ris8EsQdraKFKGxRIMTk253e5w+Plzr9ftnp6ephQ8EZCIxXq90RgKwSZOYaT6EpwgPHRdht3+4kUikUwmEolgMBplGLebMgiMObHY4cDzrdFIMaL6EputpwcULLvB2TSVSsXjsVg6nUi8fPkyGn31imG6uijJcVgph8NhMGCxSiYJIIQEt0TY361WiuSZnobBGg4nk69fz8xEo9HRUZlsYoKSOHzF4qYmkFitoVAkUr6IV1+iVmMn6OX3d3ZSjOPq6t68SSTS6fTbt8PDbjfDwLhlmPFxSiMweEGRyWRw3fL7S44qwBaVcFwkAnsnnmoKm47FEg4Hg/zcnp1lmNnZqSmZTCaRUBqBZwHo9fT7yseWMBK/3+fzZXloiKRSOLcZBobUzMzcXCr17h0fLzA/n8no9QYAZjpqiipNCCHJZHjBe8DngymDMYvFbof5nkp9+FAu4PjeHz/Oz4dCuGSBZKO3MyEkHLeQYxH49OnTr85GQ0PZLN8XRR4Pjl44QFCyBGEksIEvrbO83NPz+TOlivjyZWXl/Xu+rouL2MhmfT4Y/ZX/V0G2sATwemGhyrO8/PXr8vK3b6urqyyLh4zVVbhzLBYOLy1BAyULC/iZzcJUoTuUIZiE45JJOK7nGR1dW/sbyWZzRqjN4mIslkyuIEtLqFlYWH8PrkBACcfNzMDBB4FtF0inceIs+nxra2YzLG8rK/g7kkmoZ05TdKaoRFAJx83N/VNBPE7qRAIfPS9Jp9ff5X+CwBIeunkxufqBDTVw9qaev6IWJBw3Nvb9O92+hETixw/qsinbSFLED571V+rfpuYk/5n/JX9EFSQc9y/Ls1G0Pmf+zwAAAABJRU5ErkJggg==";
const barrelIcon = "" + new URL("barrel2-CIOHUXl8.png", import.meta.url).href;
const beanIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqZQTFRFQSAxORgpzWqLnEpqg0FaxWKDtFp7pFJzlEpie0Fii0FiczlSYjFKajFK1WqLrFJzezlaSiA53nOUWilBOSAxvWKDvVp7ORgxezlS/5y07oOcUilB5nOU1XOL/5SslEpqUik5/7TFrFpz3mqU/6y9/4usQSA5xWqD7nucvWJ7zWKL5nuc/4Ok/73N/83V/8XVajlS3nuU9oukpFJq//+ki0FaYjFBnFJqlEFi/8XNpEpqxVqD/6S99nuki0pi7nOcg0Fi9oOkMRgp1XOUzWKD//aL/4uk5nuU/5y9/+6Di5xBg8VBnL1K/6S0/5S0//aUasU5/+6cvb1a1WKL1c1qtFpztFJzSik5i71B/6zFe0Faczla7oOkrFp7/5ys/+aU3mqLpLRS///N/+acWjFK3py95oOcpHOLYkFK5qS9vVqDOUEpxWqLnFp7//akrKRai1pz5nOcvYuk9nuczZRqg2pKWlI5Mc0pQe4pzZSsOYsge2JKlGqDSiAxEEoIMUEg3qRzIFIQ1ZS0lGpS1ax7WuYx5r2Di6xKQVIpvc1irHOUczlKYvZB/96UatUxxYuki2pSSqQx/5SkxZSs//+9akFSg2JSENUQUkE5pGJqg1pzSkoxIHMQvZRi///Vc3NB5rSDg0pqrJRa/+as/7TNKeYYc2pBYnNKUkExc2JBtIOc9tWLpEpzc1JK7qyD7qSDe1pKUko5g7RB1axqi3NSzc1iSnspIEEYrKxaxbRi/8WDe9U5gzlaSt4p//+0xZRilFJzzWqDvYOcYkpBUlox/73F/96LKUoYi0pqc6w5pGJ7Ymo5nKxSMVoYrFJ7Yu4xnEpic0paEEoQCLQIc1pBKbQgIJQQ9tV77rSUGEoQYko5zYusrMVSSr05xYtz7t5zEEEQAAAAVrtq4gAAAOJ0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHAeuh8AAASySURBVHja7Jb1d9tmFIYFFtmWZMmyTDLKjh1DHCexk4ZpSZYtTRpek5Rx5XZMHTMzMzMzMzNz/pPdT7bTNE3Xbvttx+85PsfS8fvc917rfFfY7H8UVgaUAWXA/xBgbudWMdy/BXAB8lHy81UU82H7gl9wy82kOK6CRI6b5W76/fw7OW4hoJ1tHG/qPpYSBEpk9kvBcbYcOa5SCUEQEk3icS9ftnLZ9mXvn8vNB9hcDaLaLei6rGmC0NSk77Nva321gRRVSpC1tjZNTzyxcnvdtbe/Xjc4OMjNAaYsuVq6W9gVb2mJt8kjlKaX8Dt3rw80NIo0lZCTHaloqmWX8OOytWvvWbOmDsSVAHYXK6oJOd4T9ada2nRd0y9++83NHHfXxmuuYL+sFWloTfNE3c3N/pQmPH7mG7c980jdEaAiQMrbSNFBaB1+d7M7mmrTNP3mh9dvPvuXk3dvIxsZkVYpQuitcYfSS5qjcf2tc769/sq7fzgSVATgVhsLALnDHQkd0xdN7dH0psBXO0/b+DEjimO0qjooQk72DKSrMhF/XBsZe+ydJ5996Y/R0dESIO9iGZqQPSugxr3NS6MdcU0XRrop1ZDDAf+A7KkBfMjdE5cFNcf9fPyO54aHh4uAzqDFTNIOIemPLKnKpCN9S2FacVkXEgnKEEEIcrLG73b7O5KyQKmN7TeeuuOi1av7SwCJt0EECiIAoSoNfQBiT1yTBYJIJAiQT+7d4KnxeLI+gqJoseHBh178tb+/BMAxq8UUEFUiO70iBIRMJhTpg2nGk7IsCMhPCF1yNpuVfQTqS2xsOOH+T48GzQHsvM1MhmGOHncknQEEpBjwR6eTcpePKMjng28UVUnTIkPmnrrjgsnJybnnwCnlLfC8hyuB4B+ASWYy6fcibn+NBxUliK2xrTEQ5ahU6THws6ZbPnn6KBBXAmBBaIKFDDEfGhaMOxQyAHKXQMQoyoEExemwyNSSZINry7sfvTI0NLQPIHl5l4mtD1dSRNcGz9UwcLe/BwL4kN+wGm7DzrImy3UXPn/5F69dVQLMKphk51EGhnbEiK5sr8cz7Un2Qv4YqjwzEw4zSGAPsGzOxc/u/eyU8y496b4bHigAnBjmhUGazCQTpiGFMTPoHqobsRmmnkQCN2vOmS6Zmt30wVm3fv/dbyd+UzwPMKzCizKYAyQ8+3SlgzIaN2ZumJEVzKCcyWVFlk0v/PT1GX9uKQIURLDyluXtLCCYcNjoeabgDrCt5oJMSC7efuCRBj3AIO1WC7TRCgwSNVxbX3KbCrLZbC4X+KcWORMRoUKyQwibyWQ2G4EDhdJzTpcFxPN5adFDVUEZJrwIgRiIYjaVzGCsrq7mQda8/fTgogCnYmQIetchBEAKMsoiqxWUz9vtQQw7yLGuIAIgYBQQg+erkdNStFrtIK83KElO/KCLBTcIWAUwpKB9nbUow+kNTsBdDHPi+N9sJsxZQBg5oBlvEEmakDAJ3VQUHF/EP3+14fgcohhm3oUTquPYoZYrvpBRkKIgdyfGHcZ2RjFxp1NBM1XACV5kxjvxCu4w1zt+gDrhU81x/+T9YD+/Amau/I5UBpQBZcCh9ZcAAwAGseCjc7PZBQAAAABJRU5ErkJggg==";
const chunkyKongIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA9CAMAAAA+ngESAAADAFBMVEUAAAD4sHD4oGj4uHD4qGj4wHg4IBj4kGBYMCBgMCD4yHj40ID4mGD4iFj42ID4gFj4qHD4uHgoGBBIKBj4+JD46IhQKCBAIBjoeFAwGBAgEBAYEAj4mGjYcEioKCBgIAC4YED48IiISDBYIASwWECgUDhoOChoIAaQSDBgIAj44IjQaEjIaEjAODD4+Pj4cFCoWDh4QCiwKCBwKAYAAAD40HjgcE/AYEBwOCdIGAAYCAD44ID4QDDAQDC4MCggEAjwgFDweFBYJx8QCAQgCAE4EAD4+Ij4wHD4iGD4eFKAQDCgKCBYGAb4sGj4oGCYUDj4QDj4QCCgICBQJhZQGAAQAAD4kFjwiFjgeFDQcEiAPib4OB4bGBh4KAhQGAgIAgIoCAD4+PD48OL46Njy4NLYyLrOwLLIuKjuqmh2cGj4cFjAYEj4VkT4TEC4OCpgOCg0LijwOBjYMBg4GBCIMAYwEAJAGAD4+Ojb1si2sKuwoJWjmJClk4X4yICLgHjww3BrY13wgFiQaFj4aFDIcEi7a0joWEhbTUWoWEDWTUCgWDi+UDj4SDjLRTXwQDX4ODCIQC3INS2wMChoOCCYICDoOB1IIBg4GBioKBCjMA2AKAhIGAhIEAgoEAP48PDo6Ojk3NTo2Mjg0MC4uLjIuLDQuKy4qKCooJC8fGTwmGDkkFzwkFiYcFjkiFTogFRcWFTggFDYgFDYaEi4WECkYDjcSDjASDiYSjWYSDCASDDgPCzAOCgsKCjQMCCwMCAgICC4KByAOBh4OBjcNBjIMBiIIBiUIBQoEBCsPAykOAiYOAhwIAgYCAhAEADQyLjYwLjYsJjomIC4kICYiIDw0Hj4oHj4mHiAeHDouGjYqGjwoGjwoGDgmGDwiGCIcGDYmFjoiFjweFjAcFh4YFjocFDoaEjgaEjIYEjwWEiwaEDQYEDIYEDgWEDQWECAUEDoSEBIQEC4QDCwQDDQODCYSCjAKCA4KCBwOBjAMBigKBC4QAiAMAhoKAhoGAhgGAiQMAA67x8DAAAAAXRSTlMAQObYZgAABilJREFUSMeV1QVUU1EYB3Df2+byMdyThTo312Oo4DacmAwQQUJFBFQEu7u7u7u7u7u7u7u7u+O7d5tPRDf9nwNnHPbj/917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";
const chunkyGunIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAMAAABySOkBAAACK1BMVEUAAAAoGAAYEAAECAABEAAIQAAIOAAoEAAgEAAPWAAHMABoOAAAGAAQCABAIAA4IAABIABIMAJAKAA4KAAwIAA4GAAwGAAFAABYQApIOARoQALgaACAQAAIKAAAKABAGAAYYAWIUAVAMAP4mAD4eADwcADoaADAUAAQUACQSACgQAAQQACAOABwOABoMABYMABQMABYKABQKAC4oEDwmBQsiBSwbBRgUBQggBBYSBB8WAxsUAwYcAikYAhoSAhgSAhgQAj4iATggAQcgATYdASwbAS0YASQWAT4oAD4kAAUcADYaADQZADgYADIYAAQYADoWADAWAC4WAAYWADQUADIUAC4UACoUAAIUACkTACASAAQSAAISACYRABwRACoQACQPACYOABYOAB4NABgMAAgMAAQMABoKAAwKABQIABIIAAgIAAYIAAgGAAIGAAwEAAQEAAYCAD4+ID48ID48GDguFDguEDQuEDAmED48Dj4+DCgiDD4wCjYoCg4mCj4sCDwkCCYaCB4aCDQgBigcBj4uBD4mBDYmBDIiBC4eBCIYBAgYBAYWBB4UBBgSBAgSBD4kAj4gAjgeAj4uAD4sAD4qADwmADwkADwiACgiACAeADocADIcADwaAAwaAAQaADYYADYWADQWADIWACQUACAUAAYUADASAB4SACIQABYQACgOABQOAAQOABwMAA4MABgKABIKAAgKAAQKABYIAAoIAAQIAAQGAAgCADmKHBbAAAAAXRSTlMAQObYZgAAAhBJREFUKM91jnN/HFEUhufOHc/szNrI2oxtO43ttGFT27Zt2/p47S87XWTb97/7PPec9yCp2YD8N/S/8aw/F0GIFxn8K04gswSTOcDhQ36MWwc9WQhiYjCcI4gkHKI9TQW51e/7zRjD4Glnni05UFBCSwmckWLrtjNZWe00Rkg1mP+PXJZeFI2UZswPq7lhHJ4zL6fNmPoh3kTjhIk2m9IEnME4gm4f5qAG8yQxawO88efMndsPPsLU70Z23NB1RhepPzZaN5gqYtPOykPZsprjJ0vLa+uT/Acacj/aXhg+sWd3TvHBq1WJAoCiJKsonM/ZtmWfdaf9hsg3hvkgK1fKdBR7eFdeRVlNlyg2UXO+gbbnWrlMdyHfVi4T5H8FOfa4p7PUJh9ouVdbVPFGb30WF5tXJp50P7UqQs2OS5WXX2mrHK64wKi5iZG2sDJgaLjW4Bgsu9t4K94NNJD8NAVAwGC/bnfqI4bGm2tCSQnCkgQC1NLb6nI2Twotrro1sSBRf/Ce1wKAoiqV6rMcUKp4xRcNaYkezaYUk0V7j2iViuJ3ozrxql/z317rqVjfqf07TssUW690ImIkpCWgplTjPd29fWx+ntudEBoqhEosb1vvd4zwUV8HkhBqYQlCcmrspS+Kxox6JBGUDCohAIDnwfeIyESjBhI+6PUKwDgdJ0kFV8kV9SqJZGZxYTHt/RtttGT3J78D3QAAAABJRU5ErkJggg==";
const chunkyMusicIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAMAAAC/iHE6AAAA9lBMVEUAAACMhHuEe3OUjIT///9rY2OclIxza2NaUlJ7c2tjWlpaWlJSUkqtpZxrY1q1raVjY1pza2tKSkJCQjq9ta2lnJRSSkpCOTm1rZxzc2uEe3tra2NKQkIhISEYGBgTEAv///f39+/v5969taW1pZx7c3NjWlIxMTEpKSkpISH37+re1s7OvbW9raWllIl7e3M5OTkxKSkpKSENCAX79/fn3tba1sbOxsLWyr3Gxr3GvbXGua2tpZStnJSUjIxaUkpKSko5OTE5MTExMSkxKSEpIRghHBQYGBDv7+fWzsatraWlnIyMe3uEc2NSUlJKQjFKOTE5MSkXlkyBAAAAAXRSTlMAQObYZgAAAc1JREFUOMuNk9d2ozAQQJEUNcCEXg24Jl632HHapm/q9t38/88EbCeBUOzLAxpxjzQjRkKRl2dhC75sIz3928Z6mILNEnv4c9TYJCnK4/9266BekgGNH8Hwe7NO2udIXMQ3162vtfshwJ4Xhn1et6cNEIbxItoXjztGpcUJ92fJO3JA262S9hDw8Or4b82hWi59gwiDw+UwvlNHFQUowPPZehw1UUcrk5rwAMOnt2ggdU/KLAoV5LxHkaOdkKLE+kHfy8SDWzKyi0txTO4zcTyTulbhFHiAcG4m1OH4Ji85VPNImJ+7k8mnxRQeWEzIE9piL5eZQSlExQ5hcJqNRU53iy0VySLKbKBTTEBZu2GK5h8Fatx0hBL+qn3l/d9g1YXlV9NT+2+NJgW/zXlFX3qKuC5QUc65UE6oUbzKRcakW3nrdaBJ6Xuu4lMqVBEGABqpjZF5KFQyAz5NPkvqBRRqwFaS9L1Cx0adNVimJ2pEFzZh73HzVNvkySLv7LTPJm6vcXllXTbc3SVuo5c8V78IXN3CawTIT3PSvRif/Rgdd4bto9ZOlvXRA2JNEQA+TPEBAAgRq5GQrjsxP8pwdJlJCYzJSxhLQzFBVVPhFT00JnWmyRwYAAAAAElFTkSuQmCC";
const chunkyMoveIcon = "data:image/png;base64,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";
const chunkyBarrelIcon = "" + new URL("chunkybarrel-C3DkNQHg.png", import.meta.url).href;
const chunkyPadIcon = "" + new URL("chunkypad-Cf_UNJ5Y.png", import.meta.url).href;
const crownIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJMUExURaWUALWcOf/WUoRjAN7KAP//AGNaGP/vWu/WUtrWBHtaALWMAOfWAMa9Qv//Y8bGSq21AP//Cq2tCL2UAO/nBIR7Kf//a8a9StalAP/vAJxzAIxrAK2lAL2tAMa9APfvWq2tSkIxAIRrBqWEGJyEGK2UIaWUIb2lIf/OAP/nBu/vBjkxAGNKAGtSAHNaAGtaAHtzId7WT4xzAJRzAK2EAL2cAK2cAFpCAFpKAGNSAHtjAEo5AHNSAJx7AGtKAIxrGL2MIVJCALWEGNacIa17AFI5AM6UHKV7AEIpAMaMGIxjEJRrAqVzAEI5ACkcAMaMCsaUGL2EELWEAr2MEKWEAM6UAMaUAPfGAK2MADkpAJyMAL2MCEoxAL2EAt61AIxjAKWMAL2MALWUAM6cAN6tAPfOAMacAOe1AP/eAPe9AP/WBO+9ANatAP/GAN6lANacAM6lAP+9AOetAMaMAFIhAO+1ALV3AKVrAOelAO+tAL17AIwAAN6cAP+1AO+lAMp7AOecA4QAAFopANJvAP+UAP9rQvdjIcaEAHMAAIQIAO+UAOd7AP+EAv9zOf9jUv9KObVCADkAAEIIAPeYAPeEAP9jOf9SRK0QCDEIAPutAP9jEP85K/c5McYpIf+hAOcxAL0AAJwAAK1SAOe9APe1AP+MAMZCAOOMANaEANaUAPfWAP/3Ata1APfeAP/vCP/vGPfWKf/eMefGKf/nMf/3GP//Mf//Uv//Je/GAP//GP//c///Qu/WAP/3Sv/3Y//3c+/WSta9Id61EAAAABdUwoEAAADEdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAadvLCAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAGN0lEQVRo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";
const diddyKongIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAA8CAMAAADIULPRAAADAFBMVEUAAABIEAj4oGZAEAj4qGj4sGz4QBjIcE34uG/4SBj4+PiPUDj40Hj4wHL4mGm4aEj4kGGISDl4QDBgEw74+Ir4mGDAaEjQcFBYMCDggFhoNyiYISD48IX4yHiwYUhwQDB4KAifWEBgOCjwPRiILwhoIAj44IDogFnYeFOASDBwGBiIHRdYIAhwJwdQGAb46IL42HiQIBo+Hxh4GBXYyLnAsKjwh1jQeFCoYEDgORjYNhiAGRaAKQhIGAj46dh5b2qQMAhgIAhQEAjJuLHQwLD42IBRSkioWEKYUDmYWDigISDoOBiwKRGiOAlYFgi0qJihmIn4yHCIeXBsZWHfhF34kFhoYFhjWFHggFC4YEiwYEBlPThwQCiwJSRQKB7AMBhoGBKYNQj49/Dv4NDg0MC/uKvtlYWIgHgCSXh+eHLoiFj4fVMCMVPYgFHFaE50SD6ARjjMSTaSRjAxLi64KSgtJiRhMCC4KBx2KBz3YBjQMRhgJBOoKBCTIBAiEQ34+Ojs7Oj48OLo2MbQwLi4rKTAsKD0rJyunZWgkIiYioA0XHzGem7simT4iFzgeFhWWFTYbk7yckpIRkI4OjiwQDZwOCgGCihQMiSmLCSELCSGPCLYShjIMBhIJhigKBBwGBBQHg4wEAo4FAhoIABgIAD4+OD25tPw2M7IuKh1iJu2k4V1e4WQiIPbiHuThXUDPW1TY2uoe2hIVWN4a2AtSGDglV3wkFjQe1ibXVXAcFC+c014WE3waErYSDhQQDgAEjLTQDDDQDBINS3GKihCKCLDOh0AABroVRjwSBjoQBjQQBi4MBIVDQhoKADg0MjUzMj4vKyQoKwWdKgMZJxcfJAEWJCEiIzMnIi0jHj4oHDQhGzonGjwmGi4cGSYdGAYRGDUiFzIfFjIYFhgYFjoeFASLETQWECkUDj4WBjYQBjY4OiYsMjAwMDgwLBgkLBYkLBQgKD4oJCAgHjoiGCwaGDYWEDoUEC4WDigSDgAGDiwWDCAQDB4QCgYGCCwOBCYKBDPTQL4AAAAAXRSTlMAQObYZgAABldJREFUSMeMzs0JgzAYxvGKUMjZEUJPLV48JcWDXhNcIW4hSjKJotMUvxbRKdrkRYhWqf3fAr+8PBfUlcOoLn8lx1fZ5nleDrV5enVFCSvEoXVir3kqDh+mmXNBGb6aqNxZ12Q+3OtxaKeuN3aJiL1dfNLc+dwhhLVGCDTmW+s41ieB4kWvOUE6mLLea1vOp8+6InpADxzw3kLgveAtyBVj0NTao8z5RgnCMOCfFnKdVFUEa1ycWSgOJNU4O7dQKvVya8+0wIW1J8WSZV/WDUM/9JPH7RZ5ke+vMWcb+9GihUC1OksWn9VVmZWfv3u3fIWuqrAfVIdf1RxQHEM4c/eVLmTW03F0VNVVCN8c1NnR0bEuRuHsWd3FOnogKyoOgl28kJmR+VCY/eZSZlsdHR1HpbDMNQH+pqb+7ev+6CosXuKot0THtqwoUiMKEhilbmH26UHFi2wXLNgXHLQmoOV8Q1JDY3Krgo2DioODgupcKW5xDYAEwUqNikFqO4MWLbLdF5bZuWIZFxgsTf7um5jom2izQGKqZ8gDIZDSuILJbo+BbgywNzoSnm663C4JrDSpMVnM19dBBWhsmZB7D/9vkFp5oNrw4Mx1HQFB4e0uKTC19XZNv3xVFFRUqiWkNPlz2blBapUKioFq7dMD2v0DTE2AauvBxi5d9tY3ESAVFQeFOCkh7u13+tzB7i0ontQfZr+mucnF39kk5dz5Nw1gY5Ov/3OwsdGtVhISlBPLE5cDq1U6NCk43T5zS+qKVheT5tXnrnW94qpvtEvZmOiroqsrESPovrNMUJwbEmaH3DIfh3/KubLC1MXk2iaT1RmXGpbaJTs7qKgsVlWVElTcaaHJLw5NxEcm2fdP/pvTZZrqYrJ6QzFA09Zfft24LGVVooONgmq1kAe/uKCFuiIsd0wO3vD02LQtrUBzP3RNO7Z//Uq7puZ7Nio2CjpKgnLs/J7sfPBcV9q/IefY/i0tps7N76/un/Yz40qTiWmRAthYxZ3s/HkhCLUMk4LvP83Z5N+S6nLxUkbO+oyVJs6rFHRVHR3LBPnFxSQlBXYxIBkMqLPcQpuG4jBewgknkMSkjUmb3kIHNm2qtrXQFurbmFv7oAxWaLt1+OKQDi8dxQ0En3SCu7DBxG0gKPiisIcJuzA32Ji++aCIuIu3jbG9CeIFH/2nnUu2ue/5x8fvnO+05PmXcy8mV57dqf/27v3le5fqLwTPnjp5+qSSnMGYX123mPLARicley7Xsvbh7tO39Zduf35y4vypLh+NVRxY3TCjDhvd5MO4hUAEwbds9K1Mjo+P70gSluR+O8xg5HV7W5D20hyNCZJtZkmCVxMSV/B68/k8J0k+c+sZmLGp0Tc3VxIRy/gbGAqJPB9X5UBAllWZM6G3HErQmk5y+EpcRGRzg9vt91AkImo5xqvmWqdiC9LpgmRXRZBgwm53mGEpkkQI6WycNtU628AhKeGEHOcJRDFhP1Nj9VqRV2mTrVMJ0o1cIlfK8jwBFgzjqaJAAjqgWo1LcN63WdMFsOUJAiGSYj2Mh6L+oXz/oNWkAKyPS5SyBIAU28xEIgCTCFCAB9TAnsJjR51THy0Al0Cx0OmHozV4qCpKINEu2w1dR939IF3AuSxBAhnxu48fd++yMOPQViC/pwtsWzDtTZT0u62hwLKgoNvz5cEEvaf70FGngG5VwRPxh3U2zABbHWJ73o4NhXYH6PqkK9MESTENUKuzERbOBhZDZVn2Go/xhrMt2JQEXZ2N7LLgCyw/VOy0B2wGqw/h43BuWkS1s4XD/gigJBEfiS2odu++hwNvjMOBUlYU4TQQEuagEL/dI2Q6ryYUiyk3x8a6/uwUMBjvTsGwKF4OCULq9xaGWlO0qMvlioZ6rjd58dep9ampH/3zy66YcF6rdErYsi9CKBSNhmIv61oh167Nfur4XgFU0MAAK/vZR1AaSmkPWlsVAPsmOno3a+j8oEQf/DSpLC9Xihnn7M++tYmOjt43m1FNEGKjwzIH6IH0VLq7u4tFV2MfgL0To6mLghZdzLbkrZZDOTM2mnHpyYyMuKJV8tUwOZO2/C/tY6PFTDSUSqVimqaFigudFOIOlhp/JV0j5YXFxaWl8q/hAcSSCWPYwxoKnbw6NDwgEohEH/FRmNENvyNZhqGOyF9EC9cTR6v1XQAAAABJRU5ErkJggg==";
const diddyGunIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAMAAAD95QUdAAAA51BMVEUAAAD4yEDImDD44Ej4wD/4+Ff48FD46FDosDjQoDj42EjgqDi4kC9fSBhAMBD4+GD48Fj40Ej40EDAkDBIOBA4KBD46FjwuEDYqDjgsDbQmDBwWBj44FDYoDi4iCiAYB54YB5oUBhQQBAwIAgoHgjouDiwiCiwgCiogCigeCh4WBhYQBJYOAg4KAggGAhQMAD46EjQoDC4iDDImCiceCCQcCCIaCCYcBxIMAg4IAj48GDw0EjwyEDwwEDowEDwwDjwuDjguDjwsDjYoDCwiDCoeCCQaCCIYCBwUBhoSBhQOBA4MBBAKAjRRkEaAAAAAXRSTlMAQObYZgAAAUhJREFUKM9N0NVuw0AQBdDMopkdU2JMgw02VGbu/39PI1M7T6uj0dXO7ZzmIBCTG7jTDkLkoUcZtxpIbbsv9wzG4aKCn2wiivK1TnV8W8nATZDs3XV7hgSVLJxoHPvilU5NUsnl3J1uIDS7HM7qZFeNhhvF90AOa1nk7lZET4SQZqcoNPVFtFEoo06zpOXZcGhKptzIcpC+I9SlltCeUaij7UkwbuXcQfGzobPun2iKQno6ZWctuW8xBmOFoZXvnQJAOcP3jaiR4mEuYWwFdU6aBmsLJEaZVHV03M8EJACjlLIqSttPhX4AjHPGzVKcj4mNAoItruPVY7mjjkcoJNygDKSbUpzDRPZJwIEA9soPFtNEVPo+EMmCspK5o34iJHikLwjha1XHbJaMRNFH9jqu2x98OVE2Vuxd0pxxnGtRnqtZ5/8sm8cvQ1ocZDmz/6sAAAAASUVORK5CYII=";
const diddyMusicIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAADAFBMVEUAAAD/OTH/OTn/Qjn/MSn/MTFjWlr3MSlza2vevSlzc2v/SkLvMSmUexg5MQhaWlJKQkLvzjbvxjOtnDH3OTHerSn3OSkxMSnvKSOMcxgxKQgpIQXv1r3auaHCpZSclJTWmIh7c3N7c2tza2P3Z2NrY2NjY1paWlr/Z1acVlb/WlLSVlJaUlLeWk7/UkprUkpSUkr/Skq1qUaxRkb/vUJSSkJORkL/QkL33j3/Yzn/VjlCQjn/tTXntTX/jDWMezX3zjH3xjHvvTHvNTHWNTHetS3WjC33Si2xNS3GMS3WtSnvQineMSnWMSnShCXeUiW9LSWxKSWcjCF7eyHWayHeLSF3YxytIRyMexilJRgQDAj3zrXezrXe1q3vvaWtpaX3pZTnpZTnxoz/jITvjIScjITGjHvnhHuchHv3e3t7e3u9vXPOrXPOjHP3hHOEhHP3e3Oce3P/c3Pvc3PWc3Occ2vOa2uEa2u1pWO1nGOlnGP3c2Pva2O1a2N7a2NjY2PnrVrea1rGa1qUY1r/nFL3lFLnY1KtWlL/50rOzkrexkq9tUqclEr3jEr3Ukp7UkprSkpjSkr/70Lv50Ln50L/3kLn3kL/xkL/tUK9tUL3rUL/pUL/lEL3lEL/Y0JaUkL/5zn/zjnWzjn/vTnWtTn/pTm1pTmtnDmtlDn/cznvazn/SjnOQjn3OTneOTlSOTnn3jH/xjHnxjHnvTHevTHvtTHWtTHOtTHvrTG9rTH3nDHenDHGlDHvjDG1jDGljDGMjDHeezH3czHvczHnczG1WjHnOTHeOTE5OTH3MTHOMTFzMTHnxinexin3vSnntSnGtSnWrSnGrSnWpSnWnCmtnCnnhCmchCnveynOeynvcynnayneaynvYyn/QinnQin/OSnnMSmUMSneKSnOrSHGpSG9nCGtlCGtjCGthCGUeyHOayF7ayHWUiH3OSHnOSH3MSHnKSHWKSGchBiUhBgxMRjOKRgpIRilGBghGBhjWhBjShBSShBjUghCOQgYGABxzb5LAAAAAXRSTlMAQObYZgAAAkVJREFUOMtiIApkEaMo26iqIsnInpAyya5chfQUlZblhBRKdycmF2m02hO0WDw2J0+jgYGwuvj8yhU9XNglDyCpk+dSx2nIL2E486c8GwdOdXzb98GYJ7gU2XCq+7/TbS6Uya/GgdtehuAO/1VQdWwcbLjV8U2Z42MJdqQqGxseddLPp3M7M29hYIjiUmMzYMBjseA8bhFmW4YoVX4dNjzq/k07zMTMyGjyVUCHzRRDljcCxvqzzISZmZGZ+aiZgcB3zOSxX3TvjFk3d9naLJy6x4qRiUlP17Te2hqLfV6cb8V49KofszIymTMzMjE2ydUKzJ8ZhE0lQE732Zm5GRmBKpmZ+gy102Tb26xWLl0suC0MTeUmUe8HjCwghUwnFWRUtOXiGEVEGBndbX6jmyl4RYyFhRWo8NTaEpnoAl1uRg9GxkOOWGxfsJuREWheoFlGZllMArOh+bHVsxdhDcFJbsDw8zmtqFRabKzFysJkKRSEPahfTT7CHDCxsFxZSZPVeR2jnQWuOJG6fodngjJHs+Z6T18XxoNXcUZexHn20Eh9jlRj3+M8jIx+uFPN2dssLA8D9eseuTA1arE64c7mgAmxs7B4sod7sLLy9NewbMWZXDlvfZRgYWG5d5eR9ZMEK+MOXAq/uL779kNCzE5I+LI7S4AsoytOA0M+MEbe2HiBgYHTwj98DeNmHAp5z4V69zpeArM3nHnNzr4ERxg+Dbn28jOc6+D3/iIOA584dCLzOUWfYTeQFz3ZvXiDVeFfBqIAAL11kj9emSomAAAAAElFTkSuQmCC";
const diddyMoveIcon = "data:image/png;base64,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";
const rocketIcon = "data:image/png;base64,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";
const diddyPadIcon = "" + new URL("diddypad-BKMqMMJP.png", import.meta.url).href;
const diveIcon = "" + new URL("diving-hMRY_4jR.png", import.meta.url).href;
const dkKongIcon = "data:image/png;base64,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";
const dkGunIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAnCAMAAAAvmwj1AAAAz1BMVEUAAAAAAABwOANIIAA4GAAQCABAIAAoEABgMAAwGAAgEABQKABoMAAYCACISAiAQAhoOAZYKABAGAB4QAeQRweIQAWYUAhQIACgUAhYMARIKAB4OACoWAgYEACgWAhwQAhgOAhhKAAoGAA4IACYSAhQMAiAQACwWAiQUAiASAhwMACwYAiAWAh4OAiAOAAwEAC4YAiYWAhwSAhlQAgICAC0fBDEbBCkaBCoYAiQWAiIWAh4UAhYOAhgMAiYcBCIYBCoUAiIUAiAUAhoSAhYIAAN/7avAAAAAXRSTlMAQObYZgAAAplJREFUOMt91Ndy00AYBWBt711dci+xnZBAEnov7/9MLBAnBgJHd/r0n9XszG5xmgYV/wvSaKH/qVKpgPTwD41R8MW+cpfwUcYUuUTL9bp8rKAJDecVck8rXm7/rlZcqjol5+pyKKs/VATbO36uYOvOR149LX9n3jlg7dPOtrAdp/Wn8nCq2HPP/K7m5Y5rW7d1VZ8oQ9KLbmYhrVse1lMIz+zD70U2oVD6fhTirPZ0dJnL9mE4AsVJWtUEn7dD3555O66ro+MlIOg92M0/M/TCWZXOdFmtq+2dMkbMygO7UrZ75ku6HX2bU7ufTDE2y5UCU4F3e+4drdbT8RLaqvpVfdUDNunA9JZNX6nadr6qU6mt1TqzYFJIIaixRjx7AZOHqRphDS9Ld8hM6ARLtur7pNCz2vKZ09V+sRu3o86LR9oDDIgS3dyT6Ww6S5CPiafLw/ngdIFWQjBgJOnYHLyCsORPVGkXYVi00PECCYwAIAzMjCJlhyx80sHUKLjY6kEXcyqXGwAMSLI3tlcOJg7zHNeVPgyFR2LVAQBurcHGq+6Jhzwl1yDtmgEWr/t3/TzzRBMCkFomRPMXQ2gOQ8jlszc3sy4zYYYA6SdcYq5DUGiAEOri9c38pjcgJ08DxAILNKgQGh20XhRf3vb+zfIH34LMkgoqEVIeBcQXobi+2GzeTsBdKMOimSAKeWwaFJri4vnX64/0yEzImBsoxCx8a2Le8+cf9hfqyHn7YzSU4qvYBIwyX7y8fjc/shQAGyRlxBE1MRY5+272ktwxYflBjMVIMRYZczbq/f3ihhGAMWZY5IJfjDfzDTiGACOxZDJeifsDpnpATvxKGCZlcZ9AKV3euyHGZDyNWCoDHvLI5SAmhJDJ7y+/AzgUNoziPZpYAAAAAElFTkSuQmCC";
const dkMusicIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAdCAMAAADvl95BAAADAFBMVEUAAADevZzWtZTWvZTOrYxrKQbnxqVjKQTexqXGpYS9nHuUWiKMOQh7MQj33r2UYymMYylzMQn//////+//997v1rXnzqXevZScazGEWimlYyGcWiGEMQhaIQT///f//97nzq3WvZzGrYzOrYS1lGutjGuthDmMWiGcUhi1Sg6tSg6UOQhaKQhSIQX//+f/99b/79b358bexpy9nHOtjGOMe2OMc0q1jEKUczeEYzOUazGUUhx7ShicQhDGUgyEOQxzKQhKGAD379b/7873587v1q3GtZTWtYzOtYy9pYzGrYS1nIGrnHichGurlGiEc2OwlFqUc1V2ZlKlhE+EaE+Ma0y9lEqZe0e9jEKUe0J2Vzylezmcezm7ezO1czOlczOMazFjUi61cyl7WimtaCaEWiF7TyFHMR6MTBulTxhrQhiHRxWlQhBrORB7OQ1jMwqcPwhCGAP/78bv58b/5733573/3r3v3r331rXvzq3eyq3nypjOvZjOtZTjxojexoS9pYTWvXu9pXuplHuljHfGrXO1lHOcjHOljGuUhGuMe2u1kGeUe2epiGOlhGO1nFqtjFqchFbKpVKUe1KEc1LKnE6le0p3XkrGlEKthEKEY0J7Yz2lhDmIVjmcczWtezG9czGIZzGlay17Yy1jSi1OPS2caymlYymEYylaQim5ZyV3WiVrSiGtWhiYShhzShhrShhzQhhjPRhSNRTSWhC9UhCEQhB7QhBzORBaNRC5TgyUQgxKGAhKIQT//9b359b/987v3s7/58bv1r333rXn1rXvzrXvzqXevYzWvYzGpYy1pYzevYTWtYTGtYTWtXvOrXvGpXu9pXPOrWvGpWu9nGu1nGvevWPOtWOchGPOrVrGpVqclFqlhFqce1qMc1qEc1rWpVK1jFK1lEqljEqte0qUc0q9lELGjEK1hEKUezmMazlzYzmtczGlWjFrWjGcYymMWil7SilzSilrQil7QiGtUhiEQhhaORjvYxClShBrMRBCIRCEMQBjIQA5GACqP/ZeAAAAAXRSTlMAQObYZgAAA2JJREFUOMuFzmOUW0EUwPGZeUrywsbeGJus7a1tY21vbdu2bdu2bdu2Xt3T07S/L/Nh/ufeC/6ufyVkQHIcRxDvUAl4xkIYNHF6VrWYg9gIkRD98R8cHNy3D/MaZSwMIVMQx2LmHDFxIERe34s+3ToYEI6wiuUgZEFklPH5beR4eYTJoRyDZJsykq9ZNwOGydlsDptjCQwKZO7ywskWG/WSUqVL+29rtWVTSb2uWQjTQYghvHzXQEudOgMHmruWY0rIkrL4/n4SPx+xWCzx9y9zvAEAJCTLQ5xtsrB7XrzA6YcCO2OwHKv5gR4VjAEGWZm2ho6VKp6rPhxUaykjAyBi9jJHsnGcDcnWpFfT5r1PnqkXcq+u4k7YkBMHj/YDoKbUdzuJYSZEwgDZLkiSATJpSbGk7PnMGaMuVTUPCO5bc/jUZeEAXKvcwsfHrzSfz5eyWF7SVs1K6kvofNtXP/WQcK8PV71dt8EVESkEAFwPqbDDVy/W6cQlvtD56Dc3le45Vm9/NI/InzZ5ucO1tNEqK2BUH1QFa9t6a0u+r6RUKb+dzNiO3Qc36FHrpYbIyEmJ4VIRSjX4omaXu2er9OpUsQLWTm7sfLhL7ZuDRuzuHzp/roZQFqatFa1JV08CXyVXqdxpTOrpp0OnXEloEtbwULvetd8r639K4bnVhMpBCJaoZ38Lh06ZNqdar8rty+41lt3XvdqoMa+KtNakeAF3Ma1RrXhH0yngu8b1CzTF8crxhMbJW+/KCM0qKhyduuEJN53rPStGsDJy0Y8wtO7jIkI0c3x2zBsn5YpovNDbdmt2fE5sVCw3MjoqTgV+SAob7c2jZgoSnMudFDVRaOdaGy8rXqOMEvEi1flEIvhphFXlTSly6+etyHPlJwrssRF1M+drhVpCZIvSvhj8KwwV3mbC2AcLHNHudJq224XzHiWNHTZ2woSRw8LHgd80UmQTgoKFk5152kRRVnYTJWCMS34+PXyGGfzOujThg5DHneRYSwlE9AJ6HvBksWIdE06dG5Nr42XZF6V6DOcUptE8bm6aY9aquIImr5M9hvWKaRsl0qiibVpq9cSGwKOw6UsauYm4leoMN7W6VgjwrEGNWvEfiThFzrMaA8C/Xa0xsk7QjYZDMu//J7wMqgJQG3jyGZQo7rrH/x+fAAAAAElFTkSuQmCC";
const dkMoveIcon = "data:image/png;base64,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";
const dkBarrelIcon = "" + new URL("dkbarrel-DsT_eVjN.png", import.meta.url).href;
const dkPadIcon = "" + new URL("dkpad-BclD2lWG.png", import.meta.url).href;
const fairyIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjUExURf//if/6iPWnJf7DD9uviP7ME9uxi+SteO20VP/UG//1iOeXJuCiFdGFMuqoVpNsKpRzDfr2SeaJOOmxaWteU4d9cfS6dObk2ui2OP/2d7CRcMarnP/XmP//08WdZtaQFP/2arubidx5M//Ed//ylP/pbP/LON+QT9mYWu2paf3cff/yiMibeN6qOvDLN+KTPPq7GfrmD//8D/ajD//rEM6dQ/3Sfo1jRaRWG8ltGe6REP2xF8OJJsOIRv3Vctu2duq1GtOWKdeJZPDKgP/yD9h8F/+3SdyHW+OZYs16UeijGP2qZ++PXv3VhMy2EXFFK+y/dNmoZfLMD/HqD4VQMv/6Gv/kYeeEHvzGLv7zJP2lWP7fEPebJ//lGMqLGP7CJAAAAEwJit0AAABhdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCugG8xAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACwklEQVRoQ+2Ye3sZQRSHQ4oKQkTdmgtBGoqiVEUu7kFKNJG4lez3/xT9xZy4VdfStEkz+/7hcebMnvfZZ2Z2D2vCP0CWLMX/J1kbQsEEsmQGVh5QPI0sYaCqQqFg5RmUmEaWMFD1ySRKpXJ9fZ2CISg9hur/xgD+WIJbIcULlbwZQgEkKpWKgiFkGPH3JaOboeQvPKtErVZDotFo3gKtVos1wSfLbWxsUPkRIgawumRsYnfCcnN5VgnQ6XR6vd4ANjc3jUajyWTa2tpCOao9A101j9UlswtDV83jWSVms3l7e9tisbwDVqvVZrMhsNvtDocDa8KWZcxqa/KCJCPTahKALex0Ot+DnZ2d3d3dvb29/f19l8vFJA+QQnRBABcS4Ha7D4DH4/F6vVgZn893eHhIBiDFAHiRgA/g6OjI7/cHAoGPj5AE0DRRZMkImibKQgnW3h0MBkOhUDgcxjNlSkJzFsGR5BOIRCLRaDQWi+GcwEAZ6XAk+QzQD8XjcXgSicSXIZSUCC+SZDL5FaRSqePj43Q6fXJycnp6enZ2RnmJcCE5Pz/HY5ECJslkMtlsFr3Schv5lUtyuVw+nx8bAFrvQqGAQ18sFkulEt4tlJDCK5dcXFyUy2UKQKVSqVarMADs4svLSzRJlJPCK5dM8g3UajXsXDwg6/X61dUVmpdGo/Ed0JxFyJInlGAHQFDDNzyLr6+vb25uIGk2m/jFzWZIgiPJ1Bv99vb27u5uuUMCeJEAbNZGq9Vqt9ss7nQ6k1pJcCTBmz09+VcqlgVHvdvtUiwFjiRagHdVr9ejAUEwGAxms/kHoIFFcCRBL6SHpN/v04AgoCsaDAboJjM0sAjOJOgd7+/vaWAIBDDHsL1pQBSOJGgdq5FIhKJHSDK5sUWQJU8rmQ/MD5LJ0yMC9xKdTof+O0rRIriXLIcsWQJB+An1CY4/u0zrPQAAAABJRU5ErkJggg==";
const filmWaveBoth = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFdqV88RMQ1unZNi4IhbSLc1cUw93GeWkXZJNqkbyX1I8gWEsR+DEk9rQlVoRcRDkNfayC+Phn+vq2WothNTIi+Ph3zBAKsaMukFEW+PaEi7eRqZFI+PdZhK2IVVE0+Olr9uh6dGQp18on9+lI2cBR9rYyoZcY9uc10TESl8GdtK4e9sQ3lI1xQ2pIUnxX+I5I5/Dpy3kn9ncmw7+o+EQnhpiI+CUbpcmqyeDMNlc6+HJM+PYp+Ntjc5x5THZR2oIgPmNDlIgXtsu4u7R06aIk+Kgltg0InMSh95YoYoxn9+NTa5lxu9W+5to5vLiL+Pk7+/qXgnRF10sYv9rDhWIUpWMZ7EYa9Nw7+fkyxLUj+fpO9tRC9shG6ZUe+FdPvCsQ9lIm99lUqcutZlEuSFZKhGwvsdG1ttO6V2ZYpZog58kr9spZz+TSRnBMl2QV3JZO6Zwj1blXx9S7q82w92km9rdA95oyGiYasUoUo7uj92o3x6hwl4E1+Dgjn8al6cg0sG4hw60w0Z4R+Jlj961F8+ImfWtS9qkz6bMh9NQx17cl+Cog+PhD5Yoh+EU6x3Ud7OMoAgICyZ0quHkb7OdE9sxj/PQygXkVb6N2xapHoYk3rdCx6uU59sEpp3sY7+hWJz8ppJyC6LYzqpE2+ogpGxsL58xj3sJZ+KZZsZk897ZW3pwivIA+4tgv///d+PRGdol4MU00+LRljqFaYHJj9t9v94c0Ex4U79Ro0oY2vaNBo8eoLEgvQz0qHzIhtoYfRkMQ7DIaWWo+kqmV7GsjocmnxaxU9fJEsMSynxgJKCEHvJhfCg8K2blO9y4dsWgan7Oh8S4V+SkW9h0XO14/8R8S910wDxgQt9e8+PAW7+9/0pcx1F8dUHJQlo5cnKZm46wkYV4TfYw7nm8W3dBG5tFY35Aw2s91093L8VsfjqGR6uma9dghzMi/0s7IbYJPx4gbX4JjbV0+9n0wnl0cfkER+Pg39+427+RpybNA76BGybwp0asx+O9O+P1HAAAAav3pXAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAlSSURBVHja3NdrQBNXFgDgAYYwYyAZGkAYCeIDccRMC0IeakLoChiDrRoUFagYIQFNrBogvhK1RalSH/FRooiNuvHtKl0Ra2KkrXQ1RFCJhrXiY+260seuCmhri+ydRKm6u4Xaf3vzA37M/eace889MwN1/c4B/f8DfgP6/Q5g6cn9u/d/OfjktlcEtu0/uXX+nj175m89/ypA+e6t58/v3VMdGRlZfWLw4N8IMH2T9m/de2J05NWwsAkTJoRFVu/d31vAl2kOstPLd5/ceyKSmv0aNSaEVQ9eynSZewHQ6T7moCC637aT86up2X+ixmvffvuPLyeesmuDgnoEaoO04LIg5qwHq64v+cNbI0Z8/8/vR+wcfn3ig4hTYNDpPQE+QUGn3D/wNyLiwapVw3cOXxUB/o148CAvL6/cr0eASaffGvBs5C3tV79kSX2/bf3q96/4+ccVBeXlPQK19Ft+SUlDCgr69u274sfBf/8h8uoP48aPP5yRMfCngQMLknoCmLW3bpUXDANj2k8Dv/5688fBwWGB049sj374cPvhDRuGDekFUJ40xDP/8Pjtmz8ODLsaOP0vmx89nDp16qiVw5J6ToECQAjTBm7YHv3Rh+GBVAQfvv02AEaNWlnQG8AvqaCACmB7dPSjI+HhHuDhQzD/r98VdPUugmHT1vx0eGV0dPSR6YHBwd3AqO96rkT3GhSsWLNmNhiro6kUAgHw0J3BRyt39BwB85bf7dOnN66ZvWz27GWeCMKpNQBrOPVRTK+A9NDQhddi75Tu2hWT0RnuTuHJkyfAiC6Nm8zsFXAuJSRk6JTCtuKsce5d6Bw0LqPzyJOi+Ib2WlcvgA4wP8TL6/LF+MVF/UEhVZccjzuedaSz+FJ8e63Z3EM/YN7y7UhJoQAv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";
const filmWaveLeft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFR0dG1NTUhXhIVkwU0I8i+DEk97QljIyM+PhnfX19+vq2lJSU+Ph3zBAKrqIsa2trk1IX+PaEgoKCqZFN2tra+Phbc3NzZGRjODg4lohpd2Qt9hsW+Opq9uh62Msn9+hHW1tb2L9Q9bYx4+PjnZMbRToM9uc10TITw7+jtK4e9sQ3VU0v+I5IgWxS9ncmy3go+UUmKCcm+CUboZeC+HJMurq6+PYp+NtjUFBQtra22YIhlIkV66IkdmUXwcHBtJJz+KgltgwI95Yo9eJScU0l5to5+Pk8+/qX1EQWoaGhqampxsbGvb28ra2th2QVpGMZzs7O7EYa9dw6+fkyxLUj+ftQnp6esmwl9tNC9sdG65Ue+FdPvikP91Im99lUFhYWmJiYwq5up5wf58kr9spZpKSkmGIW6pwj1bhYsbGx92kmzaF0AgIC1pZT9rdA95oysUoU92o3ycnJl4Qq+Dgj6cg008i8wawx0Z4R+JljPDYm961F8+Im9qkz6bMh9NQx1Lki+Cog+PhD44wf+EU6yXUe7OMoyZ0quXkc7OdE9sxj/PQyiHwYeVoVxapHn4c56uU59sEpp3wa8OtZOjMI57kzNyYGfHAYKycIqZI1GxoL+4soRj4q5xMPXlcT58xj3sJY+KZZsZk8YEUJmV8r97ZW350j4tgv///Y+PRG7xgQ+LRlOTIb9t9v94c079RowYE+0czGvaNBjm41kZCPtoYfe00T7DIaZ1tBJh4H8gsO7GsjxaxU9fJEoRgJ2blOdXoL9y4ddF0KsGgaW087///luLi3MysPY14V9BIQ8S4V+SkX+CMZICAf8CAS910wR0QP+P1Hh4eG2tXQeXl43dBG1V0c5tFY35Aw2s91MC8u8Vsf934v6umat66h5awgx4gb9dghjUAS7+RpDg4N+Pg47+9/9+42ybNAm24V76BGX2cNoJqTm5uby74p0asx4a8v+O9O+PhNqXcN+CcT0pcxbz4QtLSzzMi/7g8Opqam+PAWb0kMvLiEaGoOAAAA8NbF1wAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAllSURBVHja3NdrWBNXGgDgmUacTAMOhDATRWAEwYoFCTo4ARm8orlh1BqRgolocINRNI1rq9Ka4oVaUWkRlKV4v1FQq7ErtuqiNIominHqupFubRtrtcZr13RZ+9AzAa3a3ULtvz2/eMh873zn9p0zUNsfbND/P1CRGvwHgNf2b9kQ/Gmf/WueE1izZf/qYxs3buyz+tjzAKs2rD52bNPGurCwsLq9m/r8TiD6eMqG1Zv21tUFBQWNGTMmKKxu05auAiXRDkn51ooN+zftDeOiX+TamKC6Pq8trKzsAsDjnax31fJS1+z/Ux0Xveuzz3btevGLL/7x6YEqh0RS2ynQ7HI4JK7aqgG94oKn/fTTS8yPH/340qCePV84RENVC6t41Z0B5bUL21utq6qx8VBcXM9BPeMawZ+Nh3r1OtCroqIzoCyaV32q16N2YE3wrGnT0oLXBG/ZsuD2dwtyV3UONPOqU1P69u2b26NHjwXf9fn7N2Fh34wcPXr0hAnht8LDc1M6B6q/X5XbH7RXbt36/PN33ucHBfHPH1kb8+7VtTuXL+/ft3Pg+7+l9PXFh+8cvRYA337Ln3TknWtXJ06cmLS4f0rXAJDCK+FrwWt3h/D9g/j33k6/CoCkpMW5q7rQhQoOAAksj4m5diQk5DGQlPSfr3LbOgdOVaTk9r+95NbOxTExMbvv8f39HwNJX7V1BViVkrtgyZLw6dOnvxWzexLfnw+A9h68u/i9zoHoUxXXiw+uuDN9/vTp832Af8i99PR0MIYTr8V2DpRHV2cEBs69OPBSYeS6+RPuhnDApPPnz7+dnh5TGD8uunPgVGrg0eEB2f3GX24pmDLSNwt3I0ZOuHvv/JyEhrnN2i4AXw8PCAj4oObsmYR5c3r7+wfVLdoTvydz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";
const filmWaveRight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFIzsmsbGxeXl5k76Zqsuu0tLSy+HOXIpioaGhhYWFGhsa0ePUgICAstG2fX19tNO4zeTQYWFhnZ2dMTExmZmZdHR0Tk5OPmJCrM2wcXFxaGlopcipRXFLGCcaPT09NjY2jbSSpLyniYmJlZWVwcHBbJxyOTk5bm5uNUc3QUFBU31Yubm5VYNbSEhIQlBEh5eJRUVFTHVRudW9ocemY41pkbyWAQIBRG1J3t7eVlZWiLWOWlpaXl5ekZGRhK2KPltBTHtTdIZ3wdnElsGcmMGdaqRyvdvBFRUVr9Gzyt7MKEIsKSkpUVFRLS0tq6uryMjIJCQk2uncICAgXZRkjIyMZmZmzc3Nv9TCrKyseaV/xt3JhraMvLy8gayHwd7Ff6+FsM+0frCFpqambZdz8/Pzcp14OFs9aZNuZZhrWmdc0ejUrq6ucJp2dqZ9WoRftLS0NFU4qampxcXFkqeVxMTEY3Rlg7CJ2ODZX4tl4+PjibeQdap8o8aoNlc6vr6+TYBUtra2o6OjUXpWfaaDLEkwHjEgncWiEh0UYJBmQmhHj4+Pn8akVGNWP2VEj5+RcpN2mLudocinWIVeb6F1YG9iUltTj7iVYpJoR2pMncKig5KFqsauU3dYn7SiZZFrZpRsZ5BsCg4KcKZ3Voxdx+LLh7GNtMq3UmxWeZJ8osmneq6Auc28dKN6WopgjLiSdKZ7eap/PGxCg7KJw9zHj7yU7+/vutG9famDYZdpf7OGV3xcgImBa2tre6mBh52Kh7eOssO0O2BAZZZrgpmFQExChbSMaJhvJC4lS0tLYIdlQkZCc6B5MTwyTVhODxcQp8qrt9i7V29amsKfmsSgfayEa4hvkJmR6fHqq9CwkLSUXoBigrOJe5x/RGNISWNNUIRXi5qNWV9akMCWXGteW3Zf2O3bLTgvjaOQV2RYJy8ovdO/p8ysp8+sME40wNPDOVI95e/nwNrDTG9Rv9zDhbiMgKmFd6F8hqiLi7uRjL6Tk7eYVJJct9O7mrCdu9e/AAAAJnG2WwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAmcSURBVHja3Jd7XFPnGceTkEJOCIGTGyQh57QJJB4gNuESGhMUhRnISUIMiQ0aRWOBFsQAImUICEgqF1mtrKhtRaPYVQt1E623WBurGDoFpa6zrZu71c22brOul3UO+p4gVt3W0Pa/PX+ez/t839/7vM/lPaSJH2ik/3+AQU75AQCYSZFxrRKm4HsCvHwmlEFz0iRQxvcBqGVQRgbH6Up0OJoqOZLvCDAjwJ9lIidW5S186KGFC+PIHO50AQhON9ONBi+DVdZIeD9G2EN5TRLY6NFNA4CgFjpuZPsFDIlr4dOP/fjQE08cOvTYwmq7GJZazGY8KMCImy04G2djBg1FwgIhqFpY7epgUrxqOYaiqFQaDEBsHzCjUarw82Ab08r0KhC5XO43qNUGHi8YwGJEEYw3ZRoBxcqRMLgyLoXLZDCYXnVQgBkA/Fob7OVzuVwiD1yORlcli8NhsTqgDsirCQpgIwq1AHhTGJBYwmoui8vLi0u002iVlTQOR8KFgwMwIJzPpVAYVgmLVklurI5zuOxOpwmYkyObjgKexuYFADGHRnOWJTZW5Tlc5DK7qbLSSeN41cFjgPg1NhmFwrSyCECTozqvcRIA/DMEE9M4gkEj4DJB/DgsWjMBqAYK7CYAaKZlBM9Es1Fh0HopTAbUYe3g0MhNgRhMnsDp5GiCAiw4xjNobHyGOMMqzmCVTQEAwWRqtgYH0HEE5CzC08qYkLiDZW9qrKp2NLlcZHJZmZOh9ePTASB0ugXEQm2jSCoT46ryGsmmymY7mWz1o5hRFxSAKVC6jk4HlYcq4A5XdVWeyyqDZRyynYJiflynC9IPcARj0wkJZkKFVuLIy3PCiNRvNbFgtppn1unuQ9wFqERT1yAFAJ0FKDAb2Sjmbc6roqlRVC62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";
const homeScopeBoth = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFW7qOsTEAS1hm1UcBW7aNliUB9nF0UV1r1BcAoiIAWWx19qQIWGZzWGRx+FQK0crHUaV+xBYC+MwIphMEWWNyRTgw4gwA0ycAg3FndF1pZ2ZlxSUCVEhBp1FFdnBnNSgiVmJwWpyESDAUUaJ9U6aAlBgATltppm9vJQYBpJyWtqCUU5x9U2BtVoR52FQUYlBIZVdRIhYVtCIAcFxUW6yKdCIDJygmjUgz0zICZ0hAgwUAWHF2WXt5NBUUWbKKhSUA4zEAWYJ8lA0CODAngDAgcgcANiIZaTwyWpOBVa2FSDUpYyAASldl0GxshXhwcFFDxwUBWWZzxyUWBwcGVZR81gcAWVdYVKiDTFlnEggHVo17V3t4WaKGWHZ2FBAJWrWMWYl+Q1dlV395Wmd0WLSJVaqEWWRzgmBqRVhmOAcASAYASBAAUAYAYAgAQAgAWAgA+CgAMAYAEBAQUBABcBAA+CAAaAcAaBAAKCAb+DgA8CAA+DAAQBAAW7eOYBAC6BgAeBAAGBgYgBAA8CgAHyAg+BgAWAAA4BgB+EAA8BgAYBgB6CAAWFBJWBABUBgAWBkAOBEBiBgAGRgQ+EgA+EgK3yEFSEA/iBAAZRkR8BAB+FASNjg4t7CqPUA+XLeOcBgDaBgAgBoAwriw+GAOeGNYQC4qoDUEtgwE6BAA+BACQBAOrqigwDsASBgA6CgCgGZZSEhF8DADeBgAyD0ALTAt2N7gWCoiUzoyxDQg+PMQKhAKpZCIoAgAsJOLi2VdQAAA4FAAi4WDZ19gyDAA+F0dmIiA9Pj4tBgUSBwWoDgY5EQElCcfcFw48DgARAgIeGhgqCQY+DgIiJCQwDAAdCgYYAAAoKiohGBQTEQsxMC8eEwJiT5AkU5AqUApyxcTW6aITlZdVU9YeU9BtKigWGVy6OjQWHh4cHAAsEgY6NhIsGAomGJsWnV46GhIWK+ImHBYWY6A+Pio0IBweGBAW7OLqKg4xTMIwDgIZ01UgBAIcUlQWEg00MCAUqeA0NAYAAAA0qeKjAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAh8SURBVHjajJYHXBNpFsBDIBIQEDYhsAsKmCWLGtSARI3LqXBBKSpjBRvqaNzMZDIDaaTTexWQYu8Ne+8rurvuur3vXtm9u5zXvb07726veO6bSQD9MSH3yC8f3+997z/ve23Cefqc8Kb6D28iT9x86lM4z+328jvqOsLC+jobw8x9fVN3Tu47ENbRd4/q7Lx3b+r/AWgwdlCUua6zo87ZZ6Wosyd+9aewA3V1YQbK2tHZOdUnILeGOFVNUda6zroV5jCzwTIweZH5QJjBbBFZgTfLFyCXIIgyfkylxWo2i6oNINMm/7W6zkwdOyo6Vl3dy/cBaCUdDo0Gu41hGEmShJEgdIemLVB0t1coFEqFQrHPRwwaSNJBajAd2GMaEB3WJpMdxwZF0+ojCw0EAY9Xg2hB1OripKRitdq9V4PGVxobPqMBWre1Vu2RYhAg3MZ81kHuZ0ZSo8Fx3KbW4jatTY1rbbDTauHToNH4LKRcEwH2Op0OU2ux97W31cy1cRyDO2nVviuRNOo99mCVLj+UroX1WmncfciHJl0e6QMA5QMOaD13LpVHbt+e5VnTcU3phcgzsaMDCKPJRGJgnASBl5VmRjYNxKYz60tN97fBOm1C06gAk97kwLRaW1thYVLbttK4nOk7ozO3lWblTNv5xiEZve5/I2c0wB4HXTeapPXr1xcmbcuKi5w2bvIhAEXG7h8XKaP3+78aJQyczMweiKBGCYCS8pJy2vUTkyJlMnnm9juTtseVyjNj75xgAO/+jR1wv6xMaTQpjTVKpb5Unnr69Onx4wUZGUeWLr0ieDDh4JG3+F0Rtc763n/NPniQDRBn1JfpLzUbHSYjnbOm1OgrtaL8I7Uig9kqemvxrV5o8BVHKUN1Lx69mDUGSmLP7EyC6Pkz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";
const homeScopeLeft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFqBQE2FQUYlBIV1dXcXFxioqKIhYVm5eT5DEAtCIAcFxUbGxsdCIDJygmZ0hAgwUAhiYAU0hA0ycAhHhwxgUBkwwCODAnfX19cgcANSMaeXl5NBUUZFhQSDUpYyAA1QYAYmJiXFxcaDszhoaGBwcGYGBggICAaWlpWlpaEggHg4ODdnZ2fn5+FBAJdHR0Xl5ehISEampqZmZmWFhYiIiIZWVlOAcASAYASBAAUAYAYAgAQAgAiYmJZ2dnWAgA+CgAMAYAEBAQ+CAAKAUAUBABcBAAaAcA+DgAaBAA+DAAKCAb6BgAe3t78BgA+BgAeBAA8CAAQBAAYBACWVlZenp6GBgYZGRk4A0AgBAA8CgAHyAgWAAASDgw4BgBIAYA+EAA8BABYBgBsDAA6CAAiBgAWFBJWBABWBkAOBEBUBgA4CEESEA/+EgKQDgw2EkBOSgg6BAAGRgQ+EgAyD0AyCQAiBAA+FASmCAA6AgAZRkR0BwA2BEBSDAUeGNYwDsAoCMAPUA+mBgA+BACNjg4cBgD0kAAgGZZkCYCmCkCt7Cq+FgMwBgAgHJo0DAASBgAyDAA+GAOwriw6CgCrqig2DQEnjYEQC4q+FAItgwEQBAOaBgAgBoAuDAAxDQgqC4AkBkAwCYEtqCU8DAD0EgA4FAAi0o1UzoydXBrMCgoo52aWCoi+DgIKhAK+F0dpZCIi4WDoAgA2N7gLTAti2VdmBAAQAAAaGBdsJOLeBgAbWtlSEhFtjgAzsjGoBIDiHBl+PMQMCggIAoIoKiotBgUlCgciJCQ9Pj48DgAxCQUSBgQdCgYeEwJYGBkRAgIwDAAmIiAyBgJcFBAWEg0eGhgcFw4TEQsoDgYqCQYYAAAubm5hGBQqCAA9JwI+KwIzBAApFRIxMC8KAgIeHBgSCAc5EQE6NhImHBY+PiocHAA6OjQ0NAY0IBwtKig+NgIoHhwgDAgsEgYwDgIeGBAsGAo0MCAsFhIgBAIpKSkqKg46GhI0HBg+MAIoEhAU1NT2NDIAAAA2YT9qgAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAhSSURBVHjajJYFWBvZFoBTICyWplAgaaiEUqCBym5sJpNkBkI8hAiBoAGKU4o7dXd3d3dvt/rW3V3f7j53177uuZOksN9OyDtfvm/m5sz57zn3yAzr8Q9kxaiWoUXZlhuPgwrrB6vdAx0VHTt29DRXrzb09Ixadahn4+qOnnNUc/O5c6P+D0CVvoOiDBXNHRWWHhNFHd7y23+t3lhRsVpDmTqam0cFBUwsJTbnUZSporlikmGHQWO/fujfZzbu0BjsfSbgbQ0GmEgQhG2gq9huMhj68jQgIYd+k1dhoBa3uRfn5VV+GQRQTzqdCgV2DcMwkiQJPUFot4dM5nbXFHG5fC6XuyfIGVSRpJNUYFqwxxQgWqwhPHwX5hdFfZAsVBEEbC8HUYLI5VmenCy53LuWgyZYGqs+RgCl11op90kWCBCuYUHrYOLHelKhwHHcIVfiDqVDjisdsFIq4VelUAQtpIlGAuy1Wi0mV2JvKK/J6bBxHIOYlPLglUjqdT57sEribE9SwvWs+cErkA9FEmdOEACUDzig9MVsPjln9uxxvmsSrjBfnnM7dmQAoTcaSQyMc3JyssLNiWW112OT6Out2lfa4RpyonZEgFFndGJKpaNBJMppaDe3Thi/am1iu3nchJBVb20PR9dNb00YCbDUiepG8dPp06eLHraPay0L+d+h7QAqi910pyz8Aaw3fV02AiAxsR9OUMEHQHZBdoE5cU7tllNzCsI5ibMvPDX7gZmTGHthC32O7/+ZGfCtzcbXG/n6Uj5fZ+ZELV++/L9fsRISdr788j7W89/M2/ncYNPb5RZr5d9Hz5vHBGjV62y603V6p1GPclYbdW9fuTt+Z7lbYzC5nxt7pRIafFIbpcmrxNeOZTwDPrF0dCJB9P8cihkzj//mD8XV9i/LDZTdUEF99N6nmmKrqZwyoYGAr2UE2IjR15MwRcg9BdTRrthXIzYc6O1etKB30YKVK06Pf+dmjLG/ijQu7V2w8yJzFvj9qya/gWnPn4bywxS7Bgc8OR4R1ITHA2nxwE3Ow+kikUdR5K5kBug/in13dNToD6DxlDjJdZeP2bZy28rdWR6PRyR6eBYRUFMSRe7FzABbAr4rqWwc3T0OBddSffRI5/yut1dMf/02Z8nXd1adOn8sJnLDOhvfnRcAcJGsqq/TYlrUyBjXWn2kZf7+NdZtJUtucRZeuHTp0osvbvrw4Lre7nJNAACLhGao06Jp4CASqPIjnZEHD3b8cSHn9SUnZ0fNu3Lv/I0re5Z2cwMBdCySIJz1OC3ERaoppqlp9cYv/nKCs3BJeH9/6/YJx39/4xgrocgSCECQEAMYr29cj5MsqlqOsz7/z/2/vsC5zMkuKOGcLCmRvLCWu6jIGgiwhqwD80a8cf16vJRlt0YYG+b++he/+kkJpyQ7u6Age0o2RzJ2zd1ua4BD1HVV1Wsb0RHgDRhx1Wp5ad3nv/zg1B0AFEyhAVMKbv8tIoFvDwC4GVenpU+gQV5HkiyLJeK7L+7/8/0lteElAAABwMJ9Edwie6AQBnbX49pGPCtL6cRKP7Pb4xaf+d39n0lEOe3tU2jJLrh8bMNnNZoAAOPAbm1jY0NOjlzuqCMii6uv3u2Kee21yUkOR5YPULLww5YDNRTFDHDGObWNDlzuQW8iY2Tx5po9NWu2Hjwejpz3AV492tJZFAhAdNXJ5eglguYyeHB4zIreyEpWa7YfIArf1nJ0/rIaUzEjYC4RqevGcKUXQB6wH17QW3M3YSntgAjJ2f3LWr5bNr/IsJkZ8K3OZtPznd53IrmIKl5UpEvYczMmZgzIipUrY7IaxnQua5lvM0QwA1qNMNN0eqIIvZyxA/biZ5+dtX/W3lm07IX7DTV6W2fnsqtnmt5lPIO5c2N0fL2OIEphppU+X128YO+be9+M7IqLW9PUFGextLX1xbdZKisX9+2bJwkN9HqPIQi9vrQUI99pGhh0t02Kj3dbNZZJfW19lfCxM8mq0eTlWZaPlYRODfiFMtFJEqWKpNhP4wfLLfHxFgtlMNndeVYQahCGqmHrV2tvSSSS/JG+0pxJ5vFRyzdX2wctBhNleGld/LqtYCMJzX/qk0+kjyReGelDc9yD2qgT7/3Jt0pNnioJRSb5j8L+cUpN38IfU5OFAQGPHx/3XgplYplYLCsUJvu2FaZ67SXJQtCBFAYAeEXsE7ValppP2z0K9ZmL1X6lOCBACEqZDHmA9nriBLIvVPs1Mh+BxWgvE6eHuabxMp+BO7Uw32ceOrUQqaIzeTxBmBohmAHoobAMFZvNVqVkqoGQ6ndACPurXVKkkqZFe6NgMcY/I4WtkkrRkzwgyJLpAwhNBrR6GhupVCq2NAyFwgyITkPmUhqRCWuvC/lCgGWm+FXsp9NRED8CwIZqQZrUL+yUdJn3FEKT4flo3hOAlC0QMwHgz3RXhmqIEOaPASIQZw4HZIALMiZA9DAPvPvQmUxFgNwhgEr6DPjEBAhz8aRD+/AgKU8AgmHOqdjRAQDpLtfTQ4BMeIoOgfZgGFuVks4MkKlzBU9CVbHDCoedwYxcwRMX2GlqpjNAWcjMFaT5COwMtT8LqA7TXYLcDBWtUqlmMGaBdkEAPmSkqEBSUMHNDPUVIpQoTwBwKVKhGmMCFNJ5yBW4eNPS0qahciuc6m2FZOTdjFyXgMdLS0tz0fZMvYAqVD1DkJub64Ju8ifRnwfoJdDkCsLQwChkbmfUzer0aBDU+0O9RHcT/IE06f6JwAo0T+iuh6fFMFF8gxRuUtE88U8KceCJ5NWDuUyYnD9siobmzxTK1EEnEj1V4LlCYWrqj94DyTNThXQf++R7AQYAu5jt3XWRom0AAAAASUVORK5CYII=";
const homeScopeRight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFUp19VamDVo17Vnp3WqKHpaWlioqKnp6eVoN5TVpoAAAAV3d2TFlnWWx0WrWMWpKBVGFuU2BtWWp0Wop/VoV5Q1dlUKR9Vn54qampUaV+T1xqV2RxWmZzUKZ+Q0NDBwcHWHF2W5+GWLSJWmZ0VmNwUF1rU5l9UV5sVKeCJiYmOzs7VauEUqR/WpqDVJV8VpN9Hx8fWmRzW6qJWYZ+W7KLWLOJWWh0WGZ0WmJyUqB+DAwMWHZ2WbKKWK+IVa6EVa2EU6aBUaZ9UaF9SVhmS1ZiWIB6hWBqdF1pRVhmS1hmW7aNWWZzJCQkfHx8KCgoHBwcLCwsMDAwICAgeHh4GBgYdHR0ODg4NDQ0EBAQcHBwPDw8FBQUWWVzWWNybGxsQEBAWFhYaGhoREREZGRkUFBQYGBgVFRUTExMISEhSldlWGVyW7eOMTExXFxcW7eNWWJyJSUlWWRzOTk5SUlJgICAcnJySlhmPj4+SEhIYmJiLi4uW7mOWmd0TU1NW7qOUVFRgYGBSldmhYWFV1dXWWRyRkZGVWJwaWlpNzc3WGZzIiIisLCwXLeOgoKCmJiYp6en3NzcfX19jIyMg4ODXV1dWWNzubm5dXV1dnZ2W7iONTU1Y2NjKioqVVVVW1tbhISEWWZyUaJ9WWFxPT09ysrKGhoah4eHeXl5lpaWW7iNWW52MjIyW7uOWXh5WGVzWWVy0NDQampqZmZmUqN+bm5uwMDAfn5+9vb2W7qPW7uPWnt6/3N1SlhlS1hnUKJ8WY6AWnh4V62GWW51UKN8XVpnUFlmXGVtmGJsWGZyW7GLWGVxw2hvW7OMWWFyV7CIW66KV3l3V2FrYltnW7qN8XBzU15pSFFbJCYpVKGAWnV4WbmMZmdoW7yPY2huW6aIfF9pbW9yWbCJSE5VV6KEWIR73GxxTVpnT1pmWpaDcHJzVa6GVq6GrGVtUqiAWW11cHN2UV5rU11nYWlw0mpwWHt4Wn57W6yKSFdmW7iPWpiEUKJ96m5yUKN9UaN9WV5jAAAAXUCRLwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAggSURBVHjajJYHfBPXGcANjTFOjR0bA/HAmNYGbCARoaHBNGkDIcF+N97pdHe6k3Sn07RlybY88DoPvIGy9woQZpq9J+neaZvune6mk5Y23Wnc750kk/wsWf38s969e/f97/veN95lTL5L2nj1+kTZkzWZVjLeNZN0mqbb24cGhV300JCwM3PoAFzMoQcH58zh/w8AJ9FEBmlaGILx0p6bd+86QNO7zJuDQloAh7kjcYJKt9M03525u/0AuRDI3afTATgQRffyPDxsatDuzCwy7BPkfUB5Mg0A43CYYSgrRVEYY07iOOZ4wKd5PJqmifCvpdkDDgCYoRjQpxgiFGuxVFEJYXCaKID5RAfECsKyNrvDxrKxOQsr6cLImQBrTNvKxsUGQghU2jyQOAkzxHrQpggDfsiMTACcNpEkicNxv61UFdFPCLyfTZ+JWBLj+iA7Wo5XkbdfqGcwxIPZ0SKmAXAkZNga97kei2VlJ+NjFcXU94ijXWkAkiRhCpQdDgcocoqvu2uHOY77sAPGgOybESCJUtjcuJoaB+uAN0d2Cpyj/qQY2Ln/OEvGw/vFmQCtYdN/Ww2Iw9GClcDjmccBpAQPn1dYMj/8jDIDAHPVZAcVm91ut9nBdNG3J0tk2Rau7OLuMqa+heu6uMe0IBBJDnhIUUQJ/MCKKNYzflVV5aPDbX0HVbVj2K3qB71qhy4LPO/x6XpSgCQq4jkshWErmaoW34mjHbLsPyjLUIaylxZIbaqkOHlK4JPugci1noJEruYhmal6t+rjBf5JUCeafvUJGspbNoubpoSkAIU71Q0Bdx8leVTVNSp4u4KeoC8Y9PW1nYu4lVapmsNSa9B30Jc8CmL1zi4AXD5nVm2VqtsddgiHAza1psbuIEIuGE3mU+SBPzjq859SoPCsFPbIsjbQN9An2Yh+jeOCw8wvG8tp8r7kAKWPqtqhtJi1Y2U8giDrXr9Xb7N3jzITz5zfmXXZ3+n26ooo0ykAPgzdCHoRqV3Kwwu66g/4+QHLxHhL58W9e/c+99zhSLce9KQEBDBEEJvdwMq10WBApLub9nYy3RO47IQuHL2cJWitHi0VQAxgjgvjWP1zPrqjs6Nj14F2VWY6J9jq6pPV1WUXs/yBNk1IBQAHOFMfjMABWmCp4WfbT9+8n+lh7DYLw1gs7v2CFtT4VAA/xqY2cQIP87wssT3C43szLYwFysNmX2JvcdP+AU9KgNfsZ2YDo7gg5KH+rKhknQeAbYkJWGIbpeU2JRVA0TGDY/0PDpRhCKPQfloOTPhYCwBAANDZIXhSu6BDQwILbDZrGPaA59V97e2nd7tJNi4xxW7r8XsDHjoFQNIl8IB1OKADY87NC8EBb6em+XZYrbY4wNIZUbtSAsI6tCQrxdrJSSRF+CMezeN/ursMcvnGG+OAUVn1aqkAnBezLEki0pfBgkuetmCEH8am9wRRYxtQZf+4h05eTD2cW/RQZlcFwV38JV/QM9DWaiH6pE/WXAiMq8K4X6OPJAc8JCqKJIZjZyIO0nxQE/s0pbUTTnZPW19fq+27P7927dob3/nLj5MDzJ4mSpxGDmeqi+fvv98dcEfcpkTg+u17ak3ZVntP0j3o6WkFfZGDE4pjsFvgfRE//Hl13d/RoQq//VwDKG9asGArgbyc6nhv5ThSkhR2d+iqLKher8zTgi4IP/060dv02Z/cV0sIL2en/EKRwlBSTFXwCS8AvF7BbMTyn75N9Ldu+fy3/nPvAtORnJm+0sJV9e4T6hGBN/s4zf/w7TdMpX/kfPmll/4Qc6K2dqYPzRbGdwJyJj7LL86ubYhZcO+v/nrfFlO9oTa7uCIlYHKyLDaUhFAIoUdLbio2tbbWfuMzm2KRqByDNZBQCkBMyBNOpxO93wjl55iEBVuIA1uzx5BRai6BpASMgbbL5SI/TmRUZG+rTUhxiYFGYAW5yBJKAQB9V/T781ffsDTvRdSMjLGcuHpDdglyNhdszlt6w2/Wljc/ZhIyktnvmjf/7439P3r4wQ/kfcyFjPyEAWPw/g2rc4+98EJv3eubS00bpgMMFC24Nff5prq6uqbeh5fOc6FQsRmLhkqEmt8765u9sNR0rL9uLXgRSgJAaM3clUSdSFN/HnLGTcgZM0auLnvfR+NL/V97BDZjOmA7cpVn/K4uIb2vPvIVoyLH3IFQqXPu4g8lAHX9q9c5kwBgB96z8PdNU4T++a7SUDb4sK0SrSlY9sfbG6fYt5U3ozPTAU5U+NbKuusm/GtdFBWTSOajNfMyiq5b0JT74gPIOR0QNWa/tSJ3yoTepQUjqHIKsPDO64Devz2AUBILDi1auPBnx6YAeWecyAxDPooCYEVuwofGL34iKQBCVfTK1GNN/Wub43tQjJzrbi06+8l/JnbndUiS7dMAITRy9ZaijbNyY6Y+f1u5KxGFL5VG33zqlVVfbTLhjcc+7kwWBRKGDeuLNq64M7exsfHB238JybzcTKTam4zHjNl3nz278tU6WPrBL64mzYPJEijjzevv/vR/P7Ji5V2zZq9zGiW/jpVCcQi5wLqF/161YtaH7/rea67kqQyp5BzZcMvGosWLn1q2yIgaqDJRC/mGcaigMGPV4sVF62eXjyCjJHk5Q8G7Ct6cW1i46FOHnO+oJeIEikbLNxcWzn3NIEupGgppJ67mO+5ojiIDLb+SaKRQDvlwI0pWSDv4YOqO9IXtyBQjNFZ55R1dtOHK8ortBorLDC0NukrIQKGK/Pxp50Dln/MrHkXGmcT8fwIMABidhdKsSYUYAAAAAElFTkSuQmCC";
const lankyKongIcon = "data:image/png;base64,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";
const lankyGunIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAMAAACEqFxyAAAB+FBMVEUAAACAGIh4GICIGJCQGJhgGGhoEGiAEIhoGHBoEHBwGHhoGGiYIKCAGIB4GHh4EHiQIJiIIJBwIHBwGHBwEHBYGGCoKLCgIKigIKCYIJiIIIh4EIBwEHhgEHBgEGi4UMCwSLiYMKCYKKCYGKCQKJiYGJhVQJWAIIiIGIhoIHBYEFhQDVjQeODIcNi4XMiwULiwOLigOLCwMLCoMLCoILCoQKygNKiYMKioKKigKKigGKiYOKCgKKCQKKCgGKCYKJCQKJCQGJBIPIiQKIhQOIRoLISAIIBoIIBAMHhoIHhoGHhkFHhgEHhIJHCAIHB4GHBYEHBAIGhwGGhYGGhAFGhIEGhYEGQ0FGBgEGBQGFxYCFxAGFgwGFhAEFg4EFRIEFAoEEhADEhICEg0DEAoCDR4wPhwuPhwqPDgmPDYiOhokODQgOBgkNjIgNjIeNjIaNhggNDAYMi4WMCwUMC4SMBYcLhYaLiwWLioULioQLioOLhQaLBgYLBQYLCoOLCgILCoMKioIKhQWKBgUKCgMKCgMJiIIJhISJBgQJCYMJCQIJCIEJBgOIh4EIhgKICIIIBgIICAEIB4CIBAKHiAIHhAKHBYIHA4IHBgGHBQGHBoIGhIGGg4GGhwEGhQEGg4IGBgGGBIEFgwEFAoEFA4EEg4CEgoEEBACEDSElMcAAAAAXRSTlMAQObYZgAAAbdJREFUKM9d0VVDWzEYgOHk+OH0SN11LS0Udx3uMnxs2Bhzd8Xd3d35myQUf+/y5LuIgFvxi+B+Tx2MToZsBXtXm7GqSYqibjY6n0c6eNkKkXpUD6705CzYzIQRkCSVbE+68cpfoGEO82h2akp6XwYV0q5gE41Z7U2N//vPkJSBte20M7hPazG747/HOOMMaXj8WVdHJM3ZCOjPzfwT/f7zj4SBh5iPO/Q0j4Yt3szfH99EOROSELcftR9ccLHF64799DbKmWgwAfD4sO2Jnma0y37LpNsVE/3VlZiGubXlgqvFgHoiOfabK85gVLFgu7WlXk8LddUitOSMpCT39hvxhdb2autpQah7RBBzBTme4awsk8kHQOlK1eq6IOwgLi7IVVQoMzp3fn7hbBnHCRJBiH61oph9ZvMUAOH/B8eLIjSaMImAkERv6FMoFvG7D0NFZchDnEdReSRAvX75a7okYlMjSSIMkLgZzN2vfoaXlHOcViJECAMQXn7Pl57C+XJO0OpkeUGELNJQY6VVFZU8o9PZZKvVCq5bqt2otNsZnrfZeHCrrYbGGrvdwTDgXg2NuzVNN8tzBzNSKBGtOQ8AAAAASUVORK5CYII=";
const lankyMusicIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABcVBMVEUAAAClcwCcawCMYwClawCtcwCUawCUYwBzUgBaQgBrSgCEWgB7WgCMWgF7UgC1ewGtewCccwCcYwDGjAC1hACEUgBzSgBSOQBKOQBKMQBCKQC9jBK9hA17SgO9hAClewBjSgBSQgBaOQBCMQD//7netVL3xi3GpSm9lCXGlCHWtRzeqRzWpRylhBzGlBSUbwnzzgjOmARzQgT3xgDWpQDOpQDGlABjQgBrPQBjOQA1IQD//////+f//8b/98b/963/95zv3pz31nvv1nv/73P/53P31nPnxmv33mP/91r3zlrezlrOrVrevUrntUretUK9pULvvTnevTnnvTG9nDGtlDG1jDGchDGcczHvxinnvSnWrSnOpSnOnCn/1iHGjCG1hCGlcyF7ayG1jBi9hBichBitexiMcxiccxCMaxCEYxBzUhD/7wh7WgiMUgh7UghjSgj/xgDnpQDepQDGnAC9lAClYwBzWgBrUgBCOQBaMQDXmK0MAAAAAXRSTlMAQObYZgAAAiNJREFUOMuNlHWTo0AQxXucwUOcJJdsbvXWXc7d3d3dXT79AUOo3YQlvH+6i/lVT79XU0CWzKnjkEuicfRhPpDiUi4O6VLm4DCzII8cZkT1ztPPmRxzhB8UxN5euXjfwbtzjHeCYlmvJ5pP3ut4ly00hnhtPcxHA5DP3t3w7FTOCDgdNCDux5cTk7eDDyiVs13EpQ0FTk0I9GV2Fhvp8yivAgHEns/FQaV6EYziEZAEOIaagSsANtNSOMRwQQL8IVTtVXXB42kcojjg4DdGpvqy5dIUDlPEQw5MREBJuiQlZsr4SBSkk5yKwWj0kKtGHUpOTcwHOOxRXlMbJD4lxgOcR0XMIZYEzD3SH7OHBNmr5iERVTIPtmWZfbFQimOOICe0w3WTT562+gYWHCpIFZThaMGC3u1ubrbGr+3k9mASz6tQxwjNuq4olz9tlFfmtnNFbJG66qmKw1xcXp4+c2lpw1/TEw4v0nKPKzIaNx8enTxw+MXSvy3R4+bHrlumVH2Joq7qfjTOHdx/pPm97Bd74NVDU0RPdk1c7rs8Onq26QrfBSVy6pil9ThkAyTkhfN3sV3R2qDUODEdZ2ozuvPJ33SQYSRXPB5v11QwRZH1a1ifWVDXUeoJPwO0F1YjJ69+iZYGGULfnDCaN7eslglZ+lmM3vQaERXI1GqJSABjbEZAtkorpPO3bj+4p8EQfW1r9Q4nQzlAJVOXXIfhqstqDuo/d7oujp+nxRwAAAAASUVORK5CYII=";
const lankyMoveIcon = "data:image/png;base64,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";
const lankyBarrelIcon = "" + new URL("lankybarrel-BXZr4lsg.png", import.meta.url).href;
const lankyPadIcon = "" + new URL("lankypad-BR3t0H7H.png", import.meta.url).href;
const companyCoinIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAMAAABDwLOoAAACcFBMVEUAAABjY2NaWloAzgBra2t7e3tzc3OEhIRSUlKMjIxKSkqlpaX/zkKUlJRCQkKtcyE5OTm1tbWcnJz/1kIxMTG9vb29eyH///+tra3/zjn/xjkpKSm1eyG1cyEhISHGhCne3t4AzggA5wIJzgAAxgDeGADvAADn5+fW1tbOzs7Gxsb/vTljWjnWjCnOhCnv7+8AUs6MlIyce1cArUz/xkIAtTzvxjn3rTEYxgBanABjlAD39/eAiHt7e3OUjGtra2NahFpjWlp3Z1ZjY1a5lE5aWk5vY0r/1jlaTjlKRjXOjCmlayEYhBgYGBgQhBCx3gQElATW5wAM3gBe1gA1tQAAtQCtrQAArQBOqQCQbwCcZwDSMQDnDAAAOecASs4YOcYxY70AWr21vbWtta0Ae62lraUAc6V7hJwAe5Q5WpQxY4yElISEjIQAjHtzjHNzc2tza2sAtWOljGNjhGOMe2Njc2Nja2OttVpzhFqMe1qMc1qEc1pzc1pavVLWpVJSlFKUhFKUc1JSY1LvzkoQxkrntUq1jEpKhEpKc0prWkpSUkretUIArULGlEKMe0JCe0KMa0JCa0JaWkL3xjm9jDk5jDlSWjkI1jEAvTHvrTGUazFrUjEAvSn/tSnnlCkpjCkQjCm9eykpayl7WilaWinGhCGtayEA3hgIpRiUYxg5KRhz5xAAxhBraxBKaxBavQiclAgIjAhzcwjn5wDe5wA55wAQ5wCU3gDn1gC91gDOzgAxzgAhzgDOxgAQxgBKvQAAvQC1tQDnrQBCrQCEpQBapQAApQAAnABalADnewDGcwB7cwC1SgDvKQDOKQDeIQAQf+5DAAAAAXRSTlMAQObYZgAAA2lJREFUOMt11GMX3EAUgOGM1UmTNG1T27Zt27Zt27Zt27bbv9Q70/bU7zn7Zc+TO7PJbII/CinGFMvgv4XIJqK8NeVFwsQ/hVZGZXGSJCaxSgir/iYUsbJGWQvIKiUYE+LPJXFSTgmlrOIMIQwXuNCvQgpurBCCISk1FIaRBMZ/nYRM0fJGcRlqLRECAijVnLOfCOPcVYrmZjLEnKnq1atPRzKqWDEtTLn4+YvK5c1bRoWIw3ILa9euvWNFY7S5XcV2ERXsu5Fx3rx5c2vKBNt9/VkuV5sWaH3FtgUi9t1QWx7GuNXZtr5dunmSryWnYRSlnFFHCgi3kuSU89kdb9+6kCOfqybnVEZR+G1QyBvkzWunbD/ZqtXyXsWL78mRw6kcjTilUQomgjFM5M1btMWl3vd7f7jcvXjxablyedWYUyTTSDINY1TZBlXmvrx388bd5++fFD8zMpdHbg7CaRoiHAQRK1ql7JaHPe48evdpYP/uK4fCkPz5868CgrAukEq4jYIXLZN7DSlR4tWX0qUHXFk0J0d+12JvZIHCGgyNy5XNmpYkpG7/0qVLXe3SLYdDFWZSZ3DaKcVBYW2z3MaZEn0/ly5V70EP2EvNmi2BYCgtnKJAW6YSMwMMqdtvYKl6pATseMNSTyDtTMQRtWZyLwK9GFDqLSEwpzX6bpB0pgDFUpmGfUgxQh73K1WfkAoVKhxqgtyGwegCGgWhN9VeE1fPj2D21alTZ7UzkDM4SLl05g0hxYqREvXrEVIJaj+PfkNwHnVQGIwwSVdCNtYoRur2JKQyVOTwVORH6dAZWItlo8DUGH2QuIq4Tm2i3oQau0OIMYtHXANTdVIxZ/L4js33gzTiYELYWRx3JqTW4Kq1fhio/QI/iPkjBsbER8BUHTT2IpiC38qzE26A/H7oBUUq966SZO+wIePOgin0vYLLYClBvYkYQmbCko5Hx49JjsMzyfmjIs2QG+NjHLHcwzNjMlOtc5+n536Y/VsR9cAPotTkzh3HmUkmzlp7vkPO0x1OHGjdvCFH+uffVHiUG5C1QrZd17wZpogKKoOfMZgUO+NfPUwwzhRHlAa/1Ml9Y+I4dka5F1QWC46D30OcUqGyzHhjjeL875ciZxSUNQaWUXABCv4VbIN+e9jw0cF/ktifUP0H+AovFojtTZcxigAAAABJRU5ErkJggg==";
const companyCoinRight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAMAAABDwLOoAAABXFBMVEUAAABjY2OysrJaWlpra2t7e3uEhIRzc3NSUlKMjIylpaVKSkr/zkKsrKycnJyUlJRCQkKtcyE5OTm9vb21tbX/1kIxMTG9eyH///9ycnL/zjn/xjnGxsZ5eXkpKSne3t5YWFjGhCi1eyG1cyEhISHOzs6SkpJvb2/W1taWlpZ2dnbn5+fBwcF+fn7/vTljWjnWjCnOhCnv7++5ubmoqKiZmZmOjo6JiYlpaWleXl7/xkLvxjn3rTH39/fLy8vIyMiwsLB7e3OUjGtra2Oce1qMd1pjWlq5lE5zY07/1jlaTjlKRjXOjCmlayEYGBjg4ODPz8+np6eEhHtza2uljGOMe2OEc1p7a1pjY1rWpVKUhFKce1KUc1LvzkrntUq1jEprY0prWkpSUkpISEjetULGlEKMe0KMa0L3xjm9jDnvrTGUazFrUjH/tSnnlCm9eyl7WimtayGUYxg5KRgyye+HAAAAAXRSTlMAQObYZgAAAxVJREFUOMt11GUT2kAQBuBsbs9JLk3SNGkToEKh1N3d3d3d/f/PdO+gQ/Wd4QvzzLvLcUn0RzJkDJmK/psMXCpaZ1qRcvFPYbXRSZmmqUmdFsLpvwkCnxjtHCGnteBciD9HsnSkhdZOSw7AELgP/CqUkMYJITgoZSlZliti8tcmMIPWaKkyaxUAEUKVlZIvEGPFtkHBVcYk1ydO3L8BKt+8uVqDUix+0aiu1+sMJI1r9u/f/+bhMXh1fvP5HAWfG1XWdV1Y5IIPx0eW+py9A882n+vnfG7QtVTjp3PYeWUQyPLTErM8ryRHT/rCT1ISpdzTtIdHveU++6RElefZrCiTB+vayeFwyPambbu91/Oqd1Qi5hWZnGq4qOsB7NlxeEcDG9o2Xbo0qGMSQVW54pZq9OTgto07Dw0uT7bvNu2GZmlAvgdYVWXAoijng22TcVwc2rBz43S6IQEqWbFixSMiwGy/UnSMQg7WF9M4jtfKrpNXdxzprfC5G4zqr7FksBxNki6J42Tcdc3a0aDn0aab6A2rLlUsWmNdUhgyVIRdo+OCdtm37zQRRqnWVBBZx3VquDeJnJKJaeMX9wKhWG9yCeiMSGPKunEj4ph6zsDcgPKmj0xps9t5k0y92bRp08fj4BcmY/sWoiyYtbtinxTJvDtw4MBjb9jMsKiSyhsRhwjaZwvlwkmcIbqPNlpDRph0I22zjqbRXlspKz9dh1BlM29oFk8Sb9CErpUhLzGYzDJ/CRnjZdyRGfJgloV8PhmKLEgyGW1Wlg0trIZpMLNcuBWKeLhiZEzZkRmqcUJm1SzL3tIBqPmlFwi6oIM27PnQH8HqeVY9oFECg8k5gNklmm6vSPdS0ZKfWXkKfE0Il8CL7YkxiVnbOPPtp3n/GnzLvAjRFEVZJibdPd7z/eKSrxe/fHhy+5oEu3hMRUAFIeeEOvf0zCmGgAJVtAinptKb8OrhgkuuJSBNWuSS/8aUZemN9i+opBSSRb8HJKLQSWKCcUZLqaI/IzmScsbQGC0RIfpXaA2c/dn0sdF/oli4ofYP8ANm01HJnbp2WQAAAABJRU5ErkJggg==";
const companyCoinLeft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAMAAABDwLOoAAAB9VBMVEUAAABjY2NaWloAzgBra2t7e3tzc3PV1dWEhIRSUlKMjIxKSkqUlJSlpaVCQkKcnJzQ0NCAgIC9vb3b29s5OTm1tbWKiooxMTH///+tra2Dg4MpKSmIiIghISHLy8ve3t7GxsaWlpYA5wIAxgDeGADvAADn5+ebm5t5eXkIzgAWxgDv7+8AUs6MlIx9fX0ArUwAtTxanABjlAD39/e7u7unq6eEkIRlZWVahFpaWk4YhBgYGBgQhBBvbwwElATj5wDW5wBe1gAAtQCtrQAArQBWqQCYawDOLQDnDAAAOefR0dEASs4YOcYxY70AWr21vbWtta0Ae60Ac6Wenp57hJwAe5Q5WpSQkJAxY4x7jHsAjHt1dXVzjHNzc2sAtWNjhGNjc2Nja2OttVpzhFpzc1pXV1dTU1NavVJSlFJjY1JSY1IQxkpKhEpKc0pJSUkArUJCe0JCa0JaWkI5jDlSWjkI1jEAvTEAvSkpjCkQjCkpaylaWikA3hgIpRhz5xAAxhBKaxCt3ghavQiclAgIjAg55wAQ5wC13gCU3gAQ3gAI3gDn1gC91gDOzgAxzgAhzgAQzgDOxgBKvQAAvQC1tQA5tQAxtQDnrQBCrQCEpQBKpQAApQAAnABalADnewDGcwCMcwB7cwCcYwC1SgDWMQDvKQDeIQCsOZMbAAAAAXRSTlMAQObYZgAAAzNJREFUOMt11OWy3DAMBeDIll1j0qZJc1NmZmZmZmZmZmZmZm6fs7J7O+Uzs392vjnyrpUkfyRFxpDp5L9JwWWqvfPtVSbUP4U13tRllmU+c0YpZ/4mCKKJN84RcsYoIZT6cyTLmhpljDNSADAEEQK/Cq2kd0opAVpbSpoWmpj8tQl8u/beSJ1aqwGIEKqslOInYizv1S4XOmVSmJYtmy0DXTBWtUGpfv6ipg0NXU0KksZtbtu2bdOZBvruZWmBSjQaXTY0NOQWhRKHxzxuHgOg2dZWhWg06NpTTZguDky5Nj6SJt0kpkVRSYGBtFJhkpYo5YaRV6+cbRLTVErURZF+L0rloIYGt+bgqREjdk7s2PEIgRAhEYuKTEE1QjU0tNsxZtKdSR/O3+zYcS0NCjESQVeFFpZqTJNBvTa9uD1u3K1n7x52PL2ATtPYA6yqUmBJUoh2vZrsvzfh+oO3X6ZPvbFrTjhM06Y5EWC2VaXpb1SyXdd8N+9xf8rXLl0+X9y2kQSljka3amPJYNm0ST28E+c9P3bp0vnShfGxpm1fDIZVoyqWtLGuzn0wPV5O69J5wN0JcVY3RBLhPipIrBMm8+vI8J5Tp3cewHvQiQerSCg2mEICOr96Iqc8n9b5DefUMwwaDehgWiHTxq+YzEPR+84DOac7bY8QDkzGtrKQpNH0ecVDnnwiMzjPcxcMJRiWVFIH8zqaHgMHcJ5RuvXF74j20SZtyCifjeV8Xz+a9pTzDhQ3hExQNg2GZol6CJl+C4/FMhezCKNJLQtLyJgo518m03tlNC2+p3sssiDJpIxBWY7mvP+s3v1/Md1WxSIRV4yML4+T6T1jyTkyrb+nRQcE0I1LrxBMfqgTPzp39tIzZFo2pnV3GqUwmkIA+KHbR55Yvjg7SXfS7Eccg1ATIySIfF7tfe37jJ78CH8YKQEjiEWIPs/LsvbZ0PV7WnVvJrrDFsCWEuzPx1RFlBNyTmnLhjGGgAp18jOCmspg4qtHKCGFoUGY/JJR4RtflmUwJryg6lJJlvwekIjK1LWPxnkjpU7+jBRIynlPY4xEhORfoWM0XjZ9bPKfaBY31P4BvgHv32Tev7luWgAAAABJRU5ErkJggg==";
const orangeIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAMAAAC5KTl3AAACZ1BMVEUAAADryAGRNw7yuAXrtwLrpwPFWRPymAjsmQXq1QPzqAfpiAcoFRTkeg7yxgTm7TDp5gby1wbUaRXLZBbo6ReoRxUXBgXacxRKGgzphRMlCgfTaArziwhmKhQ1GRQoEwvLZQi6VRS1ShS5UwrbdAmnRAq2TAl2KQiZRBXm7EhXJhTl8Ec3EQukPAj0mBIaFhK1uaSXmoZ6MxRoJgoZEwrx4QlXWEfzphTxiRFXIwnHyrWnlpVFKSX32hPDx6qDiWnk8FPk7VPWaiLo8x1HIxd1LBKipoyVl3aHRCElJhjz5hTt8dTd4sW8wqRucVtlaFViZkxVSEbz1z1HRzU9Py41OCUrJiSYSCPJZSLDVSAwDgXj5srJubbO07Sko5SYrY6IdXR3e2NuXFlHOTdVOTVDSCmvUyPMeh1pMx3q2hPolxIpDRCZQAx4NQvWhgP49tnV2Ma4uLS4q6irsZf65JOYiYnksGx1eFteYU/u3Evf6kZTVTvYcySPPCIuMSIeKB3cphnqvhfblxSuUBNpQg8eIQ4NEwdlHgDP0cO2xrTL0a3WzamlpaW1up3/3ZeamZCGhobTmXyaonuHhniMkHeqh3H542nOpmJsbmHHiEqaWUdIREXtyy6bdi6QaiyJVyuydCpfTCN3NyLf7hfnxhflpBd4SxbzxhH1sRBjOg60ZAvbqwb7+evm5tjn1MXWybnUp5DBuI/ytI/mw4vs54nv1H3QrHxweXifhG//5F3PkFpecFr+1VWZZlXHeFGWeU/kuz3drjzm2TNcOywWLyvyoySjdByjYBpWMxcmMBW0gg/d0gB0TgAkiEFoAAAAAXRSTlMAQObYZgAAB1xJREFUWMO1lmW72lAQhEOABCIUkgIhuBVoqVN3d3d3d3d3d3d3d3fvj+rsqVKnz9PhXuTDvpnd2RPg/rOmVam6aVCVfy6v2qhVh8mT+zVs+G/lVapWbdh+0qR259utXduh5Oq6dVu2qtKv3aQLDQd0qDKoVatZpV687uS6desOaD+tY8fdnWfX7DFiRPeSAENath/YreeihTVbdui4ok2hcmHRiBGzSwFs295u1orKK+nt9obs2t1n1xxYCqFbv5Y12Zspbbiqlxru4xbO69atFELVTu0afX5fuU2V9jW5FfM6d25ZAqFTp/ZfLjhlZdXVPbk2NTt2rloCYXe3ARu+fFg0aHVlrkfNRkO2lUBYvxKAz+pRpe5CABp2aNSoBERh3tfF6HixVeU2wzq12jqkcwmEzYUvC9howLojdc6cPHTw4IEDu679PaI712lKFSz2mmn91h159GLpxLEnJtolu93++MbfImpyz+9tvdJy0Jpb9V9arTb8uVwWyGU53vXO3yHqFTilZ483lX3LF1ttNqvLimInESzH9z+d/jeEPXrv1pV9nPn+nEsiB5aPHjwecJzOOX+sv3k25j9cx8wvf2u3SqwLC8npAcLpBGPMH2zcLZc8FPVFTx5ebCUAEChHHZPH6SEnO3/bwYTRiu/1q9RSSRIBOGd1gcCq3WMYgz68+00nO4xoYfkoOSTKoiTVsttcGKXFQ/Xusvir0QAMGOra9VeA22b+qK5WckxcKlYSsQMsCJvH467R1k2q4XaD1gBdXf85YIZZvZw+PyaLsuxw2O0SDIBhsbjLlnU3K1umWTO8MgZmuvFngP5G62xS12OyIwCCJMEEssQY2pZFbRnSRwK19dM+ntXJ6npwVFCWVREA1oUNi1QD5QB8RsAAzSL3k1U0JqSTekz3y3LqkwfpNAbpBAG1FeZWqJArQ30gEMzC8iOhfvkJfFyP+XU5kHKIDvFjFzaMgQEqNJ7bmBDuGmyxPJY5P1gwR7fmR+p+XU/51ZBICDuEMNs2K1MmV6ExVCHXrJm7htPjcjpdP5oYZrTm015hlB6L+f0OEQIBcnmoiVyuQpMmjZvk0AQNwuU85bJ8P8xxRvV0WojHdCE2308eJNFOs8D1xpTJlck1gXK5Y8fQhQeduTy270wMNo0WvFeIC/P9McyytgyGo5ZkpYOFjcQccnMrUBpuhgDEsqT4fHSJlg9nvd6koMUELVA7BBeVKmGvTuFgIACUYhYsTqeFhJRt94sISr58Jpv1xnX9bExLBWRobCXJ7qDD2aBtW+RBQppOCOVE2F9M6BuuluGXxfVkUteCakh2yMhUctBeuRo0cHoaNCjLtgExoJ5kW1L0PeHLh/nqGZ4Igq4FZLQgT0QgaMSGpaDlxvF20w3ChWLyYLV9S9jENS9fjef5ZeRB19QAJinjn9abtgJyedrWoHom1ONRFIUvUj5cjc96E7AgBDEIQjhosWpJ7GZHDBe7PFnCzdNW7GGIaTYfXR2EdDreW/OnYilmQiaKRD6sLiBAgmAfGIIWeRinROtUy7SOeysiD38gABOVaol2B8SOh53q2b2fZFuCiCT79G9vLr7KeeNMpjrvzVZMJ7HYKig4oGyWmMPHOib2nnCS/VsPUzlFyddpneF5r5eWIgalYEMUa7HzYT3N6j4O9UcCyVcZJhDGeCASQlNVCwZTfiTCxPKgapRZ2au1ltUuLS4itFEqK3lKg+fTFRO9mzZtqmGxVJmEPuhhBwe5gIHnWpJdfFJ8LnyKEjHCfC90kS5XToA0TUupEDlhdywIDIJIDrxWmln8EwwEpXn5zIJsNh4vlxSEcoKGVvx+v6rWDonwQEXMCRaEPEmB7+7XURCiRqYaP35ZWmiq6zChB2FDCFIr4sdYcd4dTGPtDjHw/T1KUUwgwhl+vDcR14Q+cUFLyQGVqTbdeynZLzoRUoubQJ4+MxJV6tBuIwwortMsU2oQgNqBsbURLRBEoWc5BAs/mAAin69TfQIQmqYnP47TT7limp9jYRhI3fXjV5ZPoTwizetkkCjOFxHITTAYFFRIDuGBb+VQSBZD6ijuRw0FAIjmRoaH4nGhqSD06QMXKilEkmuDQVIFTOFH1TdB6Bkx6oQJkU72EchHLOgPMkagtqxiskzCQ+5nmlpQogW2WNXCLQhBreBJ8/spVU1VU1gxDRJG/upXnBlVombEWNWienXmIp4gVYQTElhsQ2Dt6i9/0foUpvrlkSoYiZEjvd6KCXyNQOD07t0UAG+vLdwvNRh5RGAjb4TD1WmiFb1pnh1XKJEol4QfHoDfaAYhImZfo344vAqIL0r0SXjT3nLlKvL8Ze636t/dp4wjRnN0chQm8OBx6Enjs14+s5f7o4YCQcesb8QwqrfgF2T5ioCAlc7ymWo7uL9Rl4+71TcSMcqXb9EC1Qt4vlcvns884P5W+3r6GCUazTcvHx7dAkMxDGNvf64E1eui+EyzUMBPZNM0o758l3pc6ao3dPjw+vXrDx8+9HfVHwALcD5+TvfWrgAAAABJRU5ErkJggg==";
const pearlIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFx6TauMXeaZm6ZpzaZKraZ7T51cXec6TulKfrZmaUl5e9d5i5c7TuZ3ipqaz2ZZzIvajHhrfbr6e3aqTpi5i7iKz2qcX5iKfplKzIZqTHnL3/qcXpdqnKp4a6mcXpqrT/i4m2dazepJfKiKzKe8X/dnipeHiZubTJeIasyL3Vh5jJlHiXhnupd7TayajNh5zqmZTFuaz2lLTm5r3yZ4u0c2J2kaTAh73uhmqDZ2KLpIOog5isnHuoh3u0c4OY/////+7///b//+b/1dX//97/3t7/7ub/5t7/3tX/9tX/i73/xcXu9u7/7u7/tL3Ve73/vbT2vcXm7tX/7t7/5sX/5s3/vb3eg73/xcX2zc32e7T/nLTNrL3VzbT2lOb/9t7/tLTe1c3/vb3mi97/nO7/zc3/rLTVxbT2xcXk1bTu3rTuzbTugc3/vZzVzc3ui9X/lNX/5tX/lM3/7sX/5ub/5u7/3tX21bTe9ub/9vb/zb32nIvF3s3/xb3uvb3u9s3/anOLtMXmi83/lO7/c9X/pKTFpKTN1b3/tJTNzdXuYrTm/9X/5sX2zdX2gOb/5tX2c5zeg7T/i7T27s3/cL3/rL3evcXuvc3m1dX2pL3etLT2vb3/1cX/3r3ui8X/e6TzrKzVe6z21bT23r32lN7/nN7/tJTFlMX/3sX2vb3V1c3uvbTmvbTuc5Ss1c3mlL3iqLTupL3urL3unM3/Wmqce6z/anuUc2qUc4u05s327sX2zazitL3eg7T2nKzy1azmrJSkpJy0zcX2c7T/c732vb32e73xvZzNtMXunKzVpLTV5sXu1d72tL3/1d7/xbT/zbT/xb3Ni3OUlGqLaqzykLT/3rTm3r3mi4OsnOb/amqfnL3VxbTue5zmzbTmzb3utL3mnIO9nIukg8X/i8X2g9X/g97/3tXuc6T2c6z2c6z/pKzupKzFpKzNrKTNrKzNtJzNvZTFlMX27tX21cXmtJS01cXupIvN3sXmnLTVnLTetIvFnL3evc3upL3mAAAAEd1TMgAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAMWSURBVHjaYvhPEDCg8BI9PGo83CoccSnJ2LO69lCih2upm1N8sA82JQeF/JIiUp1dS30rHZyc3AoxlGg/ElJfmZE3w7XE18fR0cHBIbjmHqoSC+0DQgKabOvK3CscHMHAoSL0PrIS08tWXwX0yq/vDIp3cLSHAoegbwglphY2sh8Zyuf21Ls4OdjDgWOQJlyJhbbV79zdWSGTu12QVNjbu3yBKTG9ZCPbwbB/cbGnC8IaEHBakQFRomBp+1B2GdCUXfWohtg79a86B1ZiyWlb/X1ZLsO105+d0JQElUWClXDeUqhW6jjOUP6j380HRYlDsGsvSMnJW7dsq5U+COhpsj13d6tEVuLo5ursAVSixauqY6D0TkD9Ykaes7svsoMd3Nyd5wCVmPCqaoi0vk/z8wvzTqwpRAo7ex93V+dUoBImkx1ruSWif/3bVFdb1R7qCQw9qCLfkrIZvRFAJfzc3ExMMkZGGzbMupO9yLjYsxukCKiqsuRMZ573GqASGUkg4Bfn2McXkJ6dObenuB5okJODj2+pa6d3YFIdUIk5CxAwT+B4zWeYDlSTZRwy2dMzPtgN6A7vsLCEB0AlT1i6rghPuKvPx2cYEBBbtShzcUhIaGihu4dzZFjagjaQKf+7WK+8mK8vDjRmVkDA+QuxsbFV7XMSnVMjpiW0cnGBQ5eV9dXWiaKi4vvkQeDs7NlHa70jIiO9kxLauBQgSoqm+Ht5eV2dNEn0qpSUmJjYib+BgYyB05ISFhjc0DGAJIYp/vOKipYv9xLd6/VJTlq6cfr0DEY/v7S3XApq22FJSqWpYOnSgnnhUcfM5eSkGxmBICbmjZmImiU81eU8XRKXcrMgx//YMcH1M2dOnRoTcypaQkSjoQGRvPOT41JS4vJVVI7o6gqu/3P7Z3S0hJm13TbkTJLc19wcl5zjf5hHUVFRRllZ2UzE2k4NNas96+tLzm8Kj1rILszMz89kraHKeQsjw7a05DwOnyg6n52ZmZ+Jl3cLtmy/ZIo/0BSQEiYTXi1chcdmr6iXwjyKG/GUL1gBQIABABSsecD7M8uDAAAAAElFTkSuQmCC";
const rainbowCoinIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL3UExURVJSAHFxAqSkA8DAMYODAMHDHK+0PMnJQYODJF1dAKusC5ycAs3OBNXVA7nNDObmc22ZBgmDALO0Ar29AYqLAeLiDKzbDYPNCEnNEGrVKSOyJsXFBZSVBXt7BUpOACO/BVreKUrRRQdaAE7iCTXkBgWUABFjADzuCQNSACvTAkH5EA6jAM+iAOHhIDFYABKuAruNApRqICifCZSLAP+kIPfABpxzAF1EAPr6KP//bgdkAeJeGP5zNIdeAJJsAP//CPDxA9HRGIOcAAV4AARKAIgLCv9dOMtSFXgHBLKDA///PP//kE6kAP5SMf9sRZYRDKpMA6RfAgGKDc9EKpYCAK49AMVzCKguFMU8E+ZQM70AAKRuCLpzCOmcC97/GAApAMUAALQmEbdVCt6AFeakGBCkHRCcFAM+AL0UBKYCAotKAH39DAiVPQicKepuHP/REgiLTuQ+IM0pFuAqJL3/AAyCaRCHVgh7SghWMQhaKRBaGLQDAGUCAc4bDvguGf+wXgh5hghMVnv/IGr/Ui/LpwpvoAh3lAA8eQAvZQApENUzIP+AbWQeVJRazVL/i0r/rArD/wdi9QJlvwJYzQBDnAA5hQAmYAAZQSBzgwJW5v8+JPU9I6QdEn8tamIhfhiU1QB28UH/xTn/7jGk/wBM2ABl0wJIrwAth/9KKpAUMVUSNl0NI+pFZvt3kP+oqNZan1skdjU5oFf8/4P//yaL/wc1oAA7v0EMCGIEEosYVVIYQaQ9g/+X/4EurkMYYABq3gBq5hL//wQpdlQaSrRSlNVm//+0/7BN3ykgagJBjQR//gCk/wjm/48vdqRK0/Z//3MipACc/wAmTPZKQVIebHcunY4xvWItg0wxjgBVrgBOvcUzeZkxg5Q5lMBX9QBaw80pWp46qZ07w6REy1pFuShz7gBKpG4xkKFt/3tz+wCM/7tR7ntBtblu/4OD/0qL/wBz48da/8tz/71z/6R7/+Bs/+Zz/y1WxQBSpGwclLRq1VJW0QAAAHk2zsUAAAD9dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD2TzQDAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAIc0lEQVRoQ+2We1BTdxbHTXgokmx5BGshQIkFIoEaHyCLQEBICFQeKjSK2oLUpZSVChSqxehu6zaoWKEQsIlSlSUo2IIWfEGAlaYpWHmVp9pQUUHRWrBVi5s/9pzkLuCq7TA7kzjqZybJneTe7wfO75zfvVPUOuC5ZFI8l0yKSUumTJn83/UESUgkyCaTDQwMDY2MjIyNyeSpU6dNm2YCEGf8Lk+EBHPI5OnTTU1N8YNMNjY2NjKiUKjUPyEvvGBmZm5OnPtYngCJVoAvC8TSkkaDKk2fTqVaWVEolBkzXnxx5syXXrK2Js5/DM+CBAVkMo1mYGBhYWMDClNTOt3W1s7OjkbDBaJSqSixt3/55ZkzHRx+T6RXCYlEJlsC2F2GAMzJGPidBhLJzIzBsLefNesVwNGRuPYh9CeB6y0tbWxgaSnaeDs7TTqB1gBMmcJgODmZm6PCGXBwcCASHuSplpBI0Eq4cVAoJNKD8VpoNAqFkDCZDMDJafZs1Li4uLBYRMpE9COxs3N1nTp1qpsbdhYMxf9KIBsmhKop46uvOjn9V2NvP3s2lMvFZc4cImkc/UhoNDZ77ty5JBJWw84Oh8HQkE6HrZ5Op9FwG4O9zNYWDQCDoZUgTk7z5s2zt3d2JpLG0YNk/vz5Cxa4u3t4eCwETExsbTGXSvX0/DNiZEQi2dra0umGhiYmGsU4Xl5MpqOjI3bAQ52sB8miRYu8vRcs8PHxWbjQ19fDAxUcjp+fvz8HPwwM3NysrKzc3Oj0xYtZLFZAAGEAvLwYjMDAQBYLO2A2fEFEIjqXcLk8Hs/bOyiIz+ejwtc3ONjdHTcYP8TCwtOTwwkJCXntNTJ58eIlS5bMmcNiaRVamEyml5ejI+gBIhTRuSQ0NAwJD4+IiFgK+Pq6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";
const tinyKongIcon = "data:image/png;base64,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";
const tinyGunIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAMAAACOj/wDAAABI1BMVEUAAAD4UAD4YAD4WAD4OAH4SAD4QAD4aAD4cAD4KAD4IAD4gAj4GAD4eAj4MADwWBj4iA3wKAP4eADwIADoEgD4EADwcDjoaCDgSBTQOBC8MBDwOAngWAjYVAjwYATwRATgNATQKAToJATgIATwFATwUADgRADYOADMHADYEADosIDwqIDYmIC4kIDYoHjQmHjwoHDQiHDokGjwkFi4aFjYgFDwgEjoeEjAaEi4YEiwWEjweEDoeECgUDioQDjoaDDoYCjwYCD4UBjwiBDwgBDweBD4WBDwUBDoSBD4QBDoQBDwMBDwcAjgaAjoYAjYYAjoWAj4SAjYSAjYOAjQMAjIKAjwaADwWADgUADYQADoOADwMADoMADYMADYKADgGADICABQx1zQAAAAAXRSTlMAQObYZgAAARRJREFUKM91zkWSAzEQRNEqYUsNZma2h5mZmZnvf4pZuyX97YuMSHBVg4EdqgCU8bbVpA/Agpaom3TnEy8F6i8jXkz0CRINwxFDath7GhkGnaEQPIzRDTQl1aybzSnqXce/QIXTIJPVgnL6Nm7HFH40/80qFolebFdPYgOCz+4ILJE0Ksh1Uh+DbxOpRP3VaqeiCElYiyEKDJ4rOSWk5x8aSy1K5w3OkSMZl1sCr/rxoBlEwvOTsVkoof+UOFWcEBkaV71MOXEG1q44Le8nFOvZMM1Ke4V7RCTERMnyu5cMveSRaf3iVr6I1DYDKKxuXqDng7XFlRNZtdPOwvIDONqYWwNXS5PrTpuf2Hba1Aw4m5512z+YkhgUjhuyxgAAAABJRU5ErkJggg==";
const tinyMusicIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAoCAMAAABKKxPSAAACAVBMVEUAAACMYwBrSgCEWgBSOQCUawGlewCMawB7WgCthACccwBzUgBaQgDWnAHWpQC1hAClcwCEYwBKOQBCMQA5KQDepQKtewBjSgC9jAKcawB7UgBrUgDnrQBzWgDGlADOnABjQgBKMQCtewmMWgBzSgBCKQAxIQApIQClexqlcwiMYwi1jASUcwLerQDGjACUYwC1jBC1hBDerQ29hAMxKQD//8r//7naymPOrT3WrTXetS2tey3GlCm9lCn3ziHnuRzCnBy9lByUcxy1jBiIaxjnrRS9jBClexCMaxCUYxCMYxAcFBDGlAyEYwhzUgjntQR7YwT7xgDetQCcewBaSgBSQgBSMQD///f3997v573//4z/94zv74TWxnvvvXvexnPevXP33mv//2P372Pv1mPWvWP/91rWxlq1lFr//1Lv3lLetVLGtVK1pUr/70Lv1kLWpULGpUK9nEK1jEJ7Y0L/9zn/5zn33jnn1jnevTmEaznnvTHntTHGnDG9lDGtjDHGpSmUaylrUinnxiH3vSHerSHGpSGtjCHerRjWpRjOnBi1hBiccxj/1hCtjBCthBCchBCcexCcaxCUaxBzWhC9lAi1hAilhAilewicawiMWgj/5wD31gD/zgD3vQDvvQDWvQDvtQDWrQDOpQDOlACtcwClawBrQgBaOQApGAAICABIsNPTAAAAAXRSTlMAQObYZgAAApZJREFUOMuF1FN7JEEUBuCpqraNccae2Haysda2bdu2zV+5yO5FstPT303dvM95zuk+VZ5/GW7LQI97ehtSmIm5Mrh1RQrmUIUL80XbNp17hItfyzPujBee3jE4SDNz5Ri2bRdHXd+yd8Jnecu51m5VpYjm7Z2jhFhmFPyZ8qtDMHB0TwZZlJNaYjPq7xOBnsMX0Sgdd3Ja8s9pgtb1R+56geLgfswflQqo6elqRzDu8gkHIBOk2/ug6eJypkxwlZciLOYCM6rycGdzHwtdfh4V5iTLGnmCwi4FI2EgiOkqYP4tONZ74tCFUpDlyEB3VQZCzINikCPvXz17oLFlyF7sQAUWaWpi5DBmYyr7vGNj/bLl686PQam4qBUKs3k9jQNOKnqL9uUNdUvr1rSkJS+G4MKCCBdIkMZj0KiJDPUfW1W/8uAD3v4SRbGFBWXMlHUDx02VQ7f2NaxdvXn/lf7PdhFqi0fxAb8uUVw8oakmyTytvEMzLKb9P7OKi6duGCwXr9UStVptMplMfPeUSkDiQ0YNyyVUdXZmVk0kNa0UQzHRTwQLBoYpM76AD1M0RSm93RxJCv4CwCoCMp3afc9UHDYNBIhrJ3kLzpGEwVfrfuCwGDjF6HqIl1g6khoXPwpi1OE9sQ0/Mf2G9w5LPgLk3vpxb2nImgEyRIhWOCQz2cbbkwZwuNWij3jPIAFkaWOko9qfd3IewAR1nOHZbJVeCE29lqJsaUdQdF4EPN4pkznq3csgcnAeBjAEBQRanqBvHn+VR8DBkUi2GJKmCUrSx6eClONrEsRJwQAFuutxXsqKUPE4xcYF//QHPMASVID8VuaWIkLQQ5/4yaBMcZrHOUQMWHy1IFjkPHMMHX1ByoD0zff2Ex/qXpzD0nYNAAAAAElFTkSuQmCC";
const tinyMoveIcon = "data:image/png;base64,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";
const tinyBarrelIcon = "data:image/png;base64,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";
const tinyPadIcon = "" + new URL("tinypad-BfIqtY4P.png", import.meta.url).href;
const vineIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAADAFBMVEUAAAACBQgCBQkAAAABBgYAAAAAAAABCQMBAwYAAAACJQUAAAABAwYCAgUAAAEAAAAAAAAAAAAAAAADOgoBGAMAGQIBFAQAAAMBAwUAAAAAAAAAGwACGgYBGQQBFAQADgEAAQEAAAAAAAAQSCUACQACCwULGRwDBgoFDRAABAIBAwQAAAIAAAEZXg4FLAIJGxkBDwMAGgEGFgsCEQcACgADEwsCDgcAAAAhTggTWAwLLxsJNw6N/kx9+UJDxh8hSRoomw4MEyIAAAABfAEAXQAAcAEBawEAZwACgAEBdgEBhQAAVAAATwAEhwEAXwAATAAAdAEAYwAAUQAAQAECiQABjQADigAAYQAAVwARVQ4FkgEAVQAOjAkASQIHnQEAfgEAeQEAWwAAQwAomw0EbAsEbwoBNAMBKAMDjwEFmgAElQAAbgAAWQASUBAEVAoDdgkRUAkBLwMHoAEAZQCV/1EEWgsESwsEegkFXwkVVQgTsgMAggAAagAARwCH/0iA/kUwqBI33AsGjQIBeAGF/EeC9EVL0SRHxyFDxRIWXQ8wtg4bnQ0fjAsEaAsEYwsTWgsDagkEZQkCcwcTXgcPlQQBOQEDlgAAcgCP/0x690B38z5Z2y5S1idIziIzqxYvphIroBALShAlsA4EQAsJhwoOSwoIgwgesQYMkQYPfwUSrAMAPABq6jdh3zFdzjBPzyc5tBgkkwwERQsDUQopvQgltwgFgAgRnwcDPgYCWQULqQELowEAVgBz7zxy5Dpo1zZXyipBvh4KPB0+uRpQxBYJRRYUZxIHaBEzuw4uxAos0ggaqQYZuAQTpQQKmgKd/1d99UMegUF65D9dyjEVbipKzCQUiBsNaBtVyRdMzBU0sRIVdBI95Q0FNQ0nqQwUZwgSnAclygYhwgYUeAUccAUVpwQKZQIHXwEiakwfR0kiWkUpkzpnzDcYTTdo5TUYVzJTxyhFpCQPTiEORiFDwCAPfh9i1x1X0hhY+RRLvhRV+BMikhAinQ85tA410Ashawg9qzMPAAAAQ3RSTlMApq9EqkkHxX479wy0eWNSPxoE/uDZxZ2HNyT+9+3KuV4uIP7i2M+snpaSbVD58u3s5NfSy8K8WP79+fnv7u7u7twVbmKYbQAABfxJREFUWMOl1WVYU2EUB3BRlJBQKbu7u/v2ujfWG+sNcBsl3SAljYKEgKTd3d3d3d3d0y8+j+gE7/l6n//vvufc87y3mbVyHero0gxPteeGdLZv9f/5tqOCeXluXdu7OPwf0qOPkiXqJCcG5Tl62rfs2GSkzXAKWxLRSUWi0Ok8udFxzLimEa6dDQQ+SlSrqFyIE4uIIqiq5h2bkO/eSQDka1nceqYAId+plcsNNEDg0aHR+Q5diDT+xjqdnkQFabE0JhMEyAho8OjZ2Pl7UgsIm27EhMaBFFiK5OVxgQIGiS6h9G/k+0eTpATNxpj3MbkQhIFGFUijixgQmRPnNq4R8XYuI4g0CVlnunE55rqUtlmVB8IkuUEPmbnhSLd/5x26ORogqQQN45gOh2r0IiPTTBdFUBAeA8RyNR6t/jn+LkwuDSVzOIQwKa1AT2QSw2URRIqAxEOAmjtCT+vp1i29HJkCMw0laMRirYYAYAhCF5AM4GYByOWagXXP7K027+zORERMHgLRpChLayH4QDhFBoIGA8gTECnCC9+82lkDBl/J5pOpRBggsPl8vobDYhHiYBhG6DIiiUSUoVfHO1t9/+AxG/QAl0qBMJTM1olNYrHYFAthkFlGolJJYFXa0MFW+3dWwWg4xSBncGGMnHuofM2a1QdubpJiXEucwaPXXhrZw/rydFbEccgggwpiLHF1SkrK/uTdH1avqxUu7NS5i/uosbbt21rNt7LzoxgQgEbcHB4nRcm5F5OTS1PrHt2vOtG3R8+2ra0kfzUAgVQSHeaCZig25e3uz5X8jW9mdEm95NS49bcVmSVkWBBBAjMVa69Hf6oSpp7tZWc/LapoSB97ywEH2Xp29ezW3N7hb4cZ2ItIgQCJ3i/IL0Phr8z2rwrZM8xp54tji0v29m7WzOaaMDhtV3nwKuMI25Z/BAbtpIosWWW2MmSVX0aWQpkeeO70q7NLA4pK9to1sw8JrUy98O6qsCa2KkRt5/qHdWqhDskKXFlRERSoUGYEZin8g4NrhZXKUwmJy3P62E5KrV5+Prk8ZX957lr/zFVqp4aXW0fHfcJUodKvwq3CT6HISPf3D67knHi4/bgFUJMwoKZ6TfWhunW5mljO2uD09cMb9NHaPSNYWFO51j8ryG1lulKRjR49vKZ87/PIBWU5chmihwp+LHj+UZ2GLPHP3BDUu8HlZheozMxMV2THWR5nAQSJZuOB3V/ubZ9XtCKHSZHJKDyKHiCTORo2m0UAYIHK63egX2DIqqAgvywamR8LS7QstnZ18vnbp+Yt8MlhChhcKimcyORhNXVH+BZAz1jf7fcWPALXG1UiCnbk68FQTGrSscRHDqTcfhyQFH2tXmCmy4mwXM3D0EMxl2+aCBBj/YAGX6FCXc+jsetiPsaEomEmLWuTePX+u0sjl5Xk1KMEegQdYxh5QDiPLgwNzS/we+Dy+494JSINY+WbDh88GKpDWSYtYZNuXfKt7QFLSmf3dmcyiBjBcoqjHDMpT46wyfuG/T7EAemnX+7LlrB12nwdG+XksyVaHVpdu/RYUdlcr1auNl09HNVG1eaQwA2MPVeY8Ll+De7SkQNdnW3c62V6aViY5YuFYRw+ht7aFp8YPdfm55Da9mg5qP0AGye7vn3tbAd2/MsfyaWrUYRAUFwYAAGsgnB4W2HiRQvQhGrdfbQxggHCMB2hQbK72+YnllmAJtVMFzu1G5VBjWDIRPeWRi5YYQGaWK1cx07stXLPk4U7vZdELlsxxwI0tdo5OPe36W/vtXDrvCQfq4D1amEBXkfjAFr6LolfFu2NCwgo8pmAA1i4NWCBD54WFp08Xhw9x/b/h7jo5Jbikrl4gMWFxT7eOIBZi6POpOEBfAsjk/ABCZE78LWQEL+r1LsfDmBL1Jlo3+Z4AMsizcIBzE4ISPTxxgUUFpfhANrMTnhaXIoHmDV/cZIPLqAwKikN3wmidqT54plBfNQuHxyAw+x5UctLcQHx83eUzMIDzI9cVrbI6f+BOfEBSStwAB2GTJ4ydbqv1Uv1O/aXRl08jbqbAAAAAElFTkSuQmCC";
const dkBpIcon = "data:image/png;base64,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";
const diddyBpIcon = "data:image/png;base64,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";
const blueprintIcon = "data:image/png;base64,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";
const tinyBpIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAACuFBMVEUAAACEAHt7AHt7AHOMAIRzOQBrMQCEQgCECHuUSgCMQgCMGISEAITGYwB7OQDOawC9YwC1WgBjMQCMEIR7CHuUIYyMSgBrOQBzMQClMZyMCIRzAHNaIRiUEIyEEHt7CHN7QgG9WgBjKQClOZyUGIyMIYS9Qq2cIZSUOTn/rTH/pTFjKRjGc72lIZycKZSUAIxrAmP/lAnWcwCEOQDWc869a7W1Uq21Sq21Qq2tOaWtMZyUCIyECIRzAmtaAFr/vUKcQkL/rSn/pSlSIRjvjAjOcwDGawBaKQDnpd7Ga729SrWtQqWlKZycOZScMZScGJSUKYyMGIyEFYSEGHtjAGNaAFJSAFJSCEqcOTn/tTb3pTH/pSFzMRtjIRv/nBiUQhj3nBX3lBD3lAhrMQjnhANVIQO1UgCcUgD3vffvqevjkNrec9bWjM7SiMrOhMbOd8bOa8bOY8bKVsbGe73OUr3GUr21a7W1WrXGUrW9UrXGSrW1c7G5Y7GtWq2xPa21MamtY6W1OaWtMaWUKZSlIZSUDJSMCIyMJYhzCHNzJWt7CGtnEGNaCFpjAFqEHFb/xkpaDEr3vUKUQkKcOUKUPT2MOTmMMTlKEDFCECn3nCFaISGcShz3lBitUhhrLRjvjBS1YwStWgCpUgClSgBrKQD/7//vlO/nlOfnlN7vhN7WpdbehNbOlM7Oe87ea87Oc73GY729Ur29WrW1SrW9QrW9Uq2tOa2tWqWtSqWlSqW1QqWcGJylKZSUWoyUMYycIYyMEIyMAIyEIYR7GHtrKWtjIWOMIVpjCFpzGFL/zkqcOUpjEEr/xkKMOUJSCEKcQjmEMTnvnDFKECm9eyFrMSFjKSGlaxicQhhSGBhKGBjnjBCtUhCUShD/jAjnjAjehAjWewj3jADeewDOYwCESgCUOQB7MQBaMQCdL7ZGAAAAAXRSTlMAQObYZgAAA6lJREFUOMu90nOXG1EYBvDcQUaZmWQQ22mz6SZZu+1ubdu2bdu2bdu2bX6Nzs1k+wl6+vw3Z373ed97ztX8w/zW4iYtjFcreGsrHyaTIAher2DSCgIOfyroRwXn5tyEG8fxHT17CjjnduPwiAk3a3GCIIwmBRkrWNiDe3HC7TULOMHhuDnFtFqz1kwREGn4xLcOVat27FhVid1ur/nGDrNu3cuOmzZ1wHvTKZTgEx0Wzp9f0rJlycKWrVq1Klmw4OaNuXMzW7RoUbKGoggBou0s/2TmtKADAKtfzs3xDQpGB/Xrm3++sHCm7hlFmTUw23j+sc46C1Myac+Y/dFjg4cGR2VlZxQWXtWt4ehkCtXyeFYBHQajq1c3e3wj/+yAKE9v1CADA2/NHJFCBoN+lRjEqlXDdDodgkjMwDoDD+4dfra+gmpyXFJF2wwP5XHWFAIAoE0tE89Mya438vgpBRFmtUm/Vb/eF5heb2zeaIeCkGYMCRsRgEGU5NSd9IbOtiZ9huzKG+bAHFOVLhQoCCrEThOViF2PoK6Go2L5oUnD+uY1dTqdqJQvIQBk9iQIXB3Hsq9RBJ2Tc/JoriVYJ2vIofoTrl3q1wxFQGZ3wphGPN9ZKbddn+0T++/sY/Xnjq1zoO7wgA0imlaRoaIWRKituFjqH42GYnm7s+oPbeJrwlzO7E4ZzSpiExsVg6I22xzZGorGRg+WJV/gSMOJlou4kVKbaL0eolRclpCVbLgvO3fMuZwJzZvfFuj0Tkbe8J4sIp0BxuJjyCLR32i8hWQGTBkgu1pzNK2Oc2/vZXAVWeSAU0JdpLXBiBOn64pBEZGaFbfGd3C1Uwj/2WvrPKCsbgn4ZMY/K1RwZYQ41UHKkq0194tSkaYXayhGEQQAlwtFSf+Fww2ynLJVFBnXkmSSElRk8OjnpRBis6Ek6Rw5Y3KBRIKiWPMlBF3Z5GH1dwBE8I4AkCRWDUMRQMak+7SR0qSRnl0EYFAYgAEMw1KHwCOaotOIZ/lbmFUMFTCoxCCoYhyNp40ryMm3rKap3mnE8t8XOTIai36GYZqS8IlkzJjc2ME4ydV077/j2MSH8PI2bcJtwitXhsPhFcvKysruLS9btuIFRUOk3m7L13i38vLydz0+b+7Uvnr1GpEqVSLt2j1YXPqcMFaO8/ToEY+Xf+rSteLLlg0QVVFQJNK29O7SV5WI79btYzzetWunTl02b+jSfu3aGjXaPm0XqdK2tHTpYrfmv+cPkQ3Q+voYq6YAAAAASUVORK5CYII=";
const chunkyBpIcon = "data:image/png;base64,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";
const MoveTable = () => {
  const [setMove, setConsumable] = useDonkStore(
    useShallow((state) => [state.setMove, state.setConsumable])
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "move-table", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "dk", imgUrl: dkKongIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "coconut", imgUrl: dkGunIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "bongos", imgUrl: dkMusicIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "grab", imgUrl: dkMoveIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "strong", imgUrl: dkBarrelIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "blast", imgUrl: dkPadIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "dkBp",
        imgUrl: dkBpIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlamSelector, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DoubleIcon,
      {
        storeLeft: "camera",
        storeRight: "shockwave",
        imgBoth: filmWaveBoth,
        imgLeft: filmWaveLeft,
        imgRight: filmWaveRight,
        prefix: "moves",
        setItem: setMove
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "crowns",
        imgUrl: crownIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 10
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "diddy", imgUrl: diddyKongIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "peanut", imgUrl: diddyGunIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "guitar", imgUrl: diddyMusicIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "charge", imgUrl: diddyMoveIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "rocket", imgUrl: rocketIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "spring", imgUrl: diddyPadIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "diddyBp",
        imgUrl: diddyBpIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "dive", imgUrl: diveIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DoubleIcon,
      {
        storeLeft: "homing",
        storeRight: "sniper",
        imgBoth: homeScopeBoth,
        imgLeft: homeScopeLeft,
        imgRight: homeScopeRight,
        prefix: "moves",
        setItem: setMove
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "bananaMedals",
        imgUrl: bananaMedalIcon$1,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 40
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "lanky", imgUrl: lankyKongIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "grape", imgUrl: lankyGunIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "trombone", imgUrl: lankyMusicIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "stand", imgUrl: lankyMoveIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "sprint", imgUrl: lankyBarrelIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "balloon", imgUrl: lankyPadIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "lankyBp",
        imgUrl: blueprintIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "orange", imgUrl: orangeIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DoubleIcon,
      {
        storeLeft: "nintendoCoin",
        storeRight: "rareCoin",
        imgBoth: companyCoinIcon,
        imgLeft: companyCoinLeft,
        imgRight: companyCoinRight,
        prefix: "consumables",
        setItem: setConsumable
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "rainbowCoins",
        imgUrl: rainbowCoinIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 16
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "tiny", imgUrl: tinyKongIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "feather", imgUrl: tinyGunIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "sax", imgUrl: tinyMusicIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "twirl", imgUrl: tinyMoveIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "mini", imgUrl: tinyBarrelIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "port", imgUrl: tinyPadIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "tinyBp",
        imgUrl: tinyBpIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "vine", imgUrl: vineIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleIcon,
      {
        storeKey: "bean",
        imgUrl: beanIcon,
        prefix: "consumables",
        updateItem: setConsumable
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "fairies",
        imgUrl: fairyIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 20
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "chunky", imgUrl: chunkyKongIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "pineapple", imgUrl: chunkyGunIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "triangle", imgUrl: chunkyMusicIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "punch", imgUrl: chunkyMoveIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "hunky", imgUrl: chunkyBarrelIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "gone", imgUrl: chunkyPadIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "chunkyBp",
        imgUrl: chunkyBpIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleIcon, { storeKey: "barrel", imgUrl: barrelIcon, prefix: "moves", updateItem: setMove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "pearls",
        imgUrl: pearlIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 5
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CountSelector,
      {
        storeKey: "goldBananas",
        imgUrl: goldBananaIcon,
        prefix: "consumables",
        setCount: setConsumable,
        maxValue: 201
      }
    )
  ] });
};
const unknownFace = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/UExURQAAACkpKT09PUBAQC4uLkpKSk9PT1RUVGVlZVlZWQwMDGhoaHFxcWBgYHl5eX19fX9/fxsbG3h4eAEBAQAAAAw7gGsAAAAVdFJOU///////////////////////////ACvZfeoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACHSURBVChTrdDbEsIgDATQUEkxeKPK/3+rWSCYGfTN7cvJDrQF6qnIwi912E6xT57EOzNvGDwpnSXJzjp4Uo7pcpWb6G5HRO6PUhZSKJqFlD824m/B/iEjDI4VRnW01lGfozyPV68nsXMEZxtpdQwZRG3UWl+o52r3Nmk1WsffdUuvJ/9Q1/oGnaEP/8RpzxgAAAAASUVORK5CYII=";
const currImg = (val) => {
  switch (val) {
    case 0:
      return unknownFace;
    case 1:
      return dkKongIcon;
    case 2:
      return diddyKongIcon;
    case 3:
      return lankyKongIcon;
    case 4:
      return tinyKongIcon;
    default:
      return chunkyKongIcon;
  }
};
const nextEnd = (val) => {
  const target = val + 1;
  if (target > 5) {
    return 0;
  }
  return target;
};
const prevEnd = (val) => {
  const target = val - 1;
  if (target < 0) {
    return 5;
  }
  return target;
};
const EndingSelector = (props) => {
  const [endingChar, setEnd] = useDonkStore(
    useShallow((state) => [state[props.rootKey], state.setEnd])
  );
  const handleNext = () => {
    setEnd(props.rootKey, nextEnd(endingChar));
  };
  const handlePrev = (e2) => {
    e2.preventDefault();
    setEnd(props.rootKey, prevEnd(endingChar));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      setEnd(props.rootKey, nextEnd(endingChar));
    } else {
      setEnd(props.rootKey, prevEnd(endingChar));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      height: 24,
      width: 24,
      className: "simple-icon",
      src: currImg(endingChar),
      onClick: handleNext,
      onContextMenu: handlePrev,
      onWheel: handleWheel
    }
  ) });
};
const Ending = () => {
  const helmLogic = useCanDeactivateHelm();
  const roolLogic = useCanFightRool();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "ending", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Helm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: helmLogic ? "available" : "not-available", children: "⬤" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "helm1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "helm2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "helm3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "helm4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "helm5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "K. Rool" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: roolLogic.in ? "available" : roolLogic.out ? "logic-break" : "not-available",
          children: "⬤"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "rool1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "rool2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "rool3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "rool4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EndingSelector, { rootKey: "rool5" })
    ] })
  ] });
};
const keyIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAArCAMAAABVR7jJAAABIFBMVEUAAADvtQD3vQGUcwD/xgOMawCtewC9jACccwDOnADerQG1jAClewCEYwD/zgD3tQDWpQDGlABzWgCthAG1hABjSgCcewT/vQLnrQDepQDGnAC9lADOpQTnvQB7WgBjUgBaQgBSQgDvvQPWtQOtjAOlcwCUawCMYwB7YwBzUgBaSgD354jz1i3GpS3vxiW9nAn3zgTetQDOrQDWnADOlACchACcawCEawBrUgBKOQD353vvzlL33krnxkL/3jnezjHnxjHWvTHOrTG9nDHnxinexim9rSnOtSHOrSGtlBj3zhDvvRDWpRDvzgjevQjWvQj31gDvzgDWxgDntQDvrQDWrQC1lACcjAC9hAClhACUewCMcwCEWgB7UgBKQgBCMQBEKPlgAAAAAXRSTlMAQObYZgAAAbhJREFUOMuVkmdT8zAMgCU7iZ290zQdlC7astcLvHvvvTf//18gU2iPi/nAc5ecoyeSYsWwYPjowbMXzwu4Cn+4fu9JwXmxPWjDkuTt+uPuCShmE743uIz/fX03hQWryeHefGU6W4vKPBfCyflnULj3IzQajMUmIpqMidP80FMJ7984hmEwhk0SFYYSevk3ErtOyg2VEeI5IcXylK52HyYUj5ByvpZ0J5GkQ1hp9WFW0iNHhoQSFKygF3eoPyIcN3EuXBJuDCfeLtDb6K5E8xYhAhxlaxTsDCFHdGy8JFqt+qpRPID/EYbqq6haTNVa9s585z9Ahowx5JTVaiLDDVD0io8+bbjB+IyEBE9svbwYm7uzjQ0G4KtZ/mtvbC4G6n3qtGDsxlHE7ae3X8GSbtV596H7UzSdO5twlZ75fWpZBwegIRlLD3RMR2JNK5JR5mvFRF4jfEmz0wthasWRFGOtMG8JfiPhm1IvRlyK/alGFNKz3BT8pNaCW1ZZ7jtYGxgJRofVqdX6bcWBoZsvJ8GyTCO8KqBjr8uwAyPzu1rBXLusj4REEBhRXaT2l1/aX2u1Qc/xn+X6DMXqI21g/79ZAAAAAElFTkSuQmCC";
const SimpleKey = (props) => {
  const value = useDonkStore((state) => state["key" + props.keyNum]);
  const setKey = useDonkStore((state) => state.setKey);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      height: 24,
      src: keyIcon,
      style: { filter: `grayscale(${value ? "0" : "1"})` },
      onClick: () => setKey(props.keyNum, !value)
    }
  ) });
};
const aztecIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAWCAMAAACsV9EFAAACuFBMVEUAAAAQEBD//xgYAABSACn//xCM/wD//yH//wD//whrADn//ykICAgQCBAQAAj/xgDG/wCU/wB7/wD/zgD/rQD/vQD/tQCMAFIYAAi1/wA5ABghAAic/wCEAEpKACEpAAJz/wCcAGu9/wD/nACMAEpaACkxABjvQgj/pQBKcwAQAAApABAQABCE/wD/3gD/1gCEAFLWnBg5AAv/5wPn/wCt/wD/9wD/jABrcwBCYwAhAAB7AEKEADmcITFjADFKACvGDiFSACGtcxQYCBAxABD/7wTW/wCl/wD/lAA5AACcAGOUAGBrAEqJAD9zADmEADF7ADGHIStCAynOnCHWlCGcACFCACEhABgIEBAYABC7PwpXHgbO/wBm1gBulABVcwApGACMAFqEAFpzAE5zAEJjAD2hITlKHDnGczGlEDFvADFSADGcEC3GaylrACnvxiW9cyXGECXjyiEhISE5ACFzIRzOnBjWKRgpABiccxRKABTGnBDWexCtZxDWKRAhABCclAx7cwhzYwhrSgjvNQipGAiEkAQxAAT3/wDv/wB76wBz5wChwgB7uQBenADvlAD7hAD/dwBKZwCYUgAxIQBCHACEIWt7AFLGKUpjCEqtIUKcAEKUAEKcADmUADmtSjGcSjGtQjExKTGUITE5CDG1ADHenCnelCnOcynGcymcGCn/7yHenCHWnCHGnCGlcyGtayHGYyGlQiGtMSGEECFaACExACH/7xj/5xjvxhjOlBiljBi1YxjWIRgYGBhaABhSABjevRD/exCUMRBzEBD3nAilnAicawilWgjGKQje/wBr7wCU1gCExgBrxgDvvQCUvQBjvQDvtQCUnACEnAB7nABjlABSlAC1ewBzcwDOawB7awBaawD3YwDnYwDvWgDnSgDnOQCcOQB7OQBzOQA5OQCtKQBaCACCQ20WAAAAAXRSTlMAQObYZgAAA+BJREFUOMttkgUX0lAUgN94Y7DBhkyGMEoBFSUlFbu7u7u7u7u7u7u7u7u76294nxviOfrtHN59N75zgaEcnQvVVaNufn+hOkX8fkRoVN9fCIAEgAg0JDornXVi/iLrV6I/cIubqxH9+c20aRPOVwIGF7n25OHChcUJE0aOrOByrd0+uHjx2zQC6rpWXfEF3k/PK5oHPnGqo1atTCbjq+XzZRYVmW6xWiVJshIsdPPFFsLHotBWdkMtS8AS8C2Ci+qQolK/mOIw+SyBQMBitfh+1GtTkGAymSSTZC1KbqaCpgyMdesdiRQsKJlMVi6nOKrXp68rN7ckRaNWmLL4ZPpqRJ/Wp6snItFowSg4fts+VEQN+iUSaT3B2jXniJDrni4kdtT++e3LKzZdPTK+WkVcu3bbc6R26+vSpfQ4vZ7tfcyDHahCdZJkEzfbjumpKg6zWnhONUBACAuOyv21rD4hB3lBsLn363QazRhHSUwc1V0uV4NhFfprCbWzuKRtqOIoB02ArjxZhKKoJg01Gq22SrGqELes3BRKJ+lRFE+Xgsi1ZvfWFhWG6IBLDgEaLihr9NIZDCMMBp2h4W9HVa4XMcaDrVDOcdo9iqLopgYddOl20LQBGBKfSAFGZQ1w7r1IzLtiCFjdUAOLwRqIQDeDwkB3S3AMBAWwr29j0lDK3QoMioLbqdFqqsjj4VPX43diEHxXjQxrKA4t6SfRARiFytjKx1noKNW9J8rRCH5PTfkeR7TACE5J6LWjq51AqgPkimMsy7KDhmPskA0sUL4uUuHOsPCfEPSzku0axxB3aFZydrJF2UKF6pfrCpOXoVSlInE8vVOjRuOyrrJctbcFAO/oTetc5aAQ6zM7maxRox3kIFvgBof6pLz2mjNmnJ10z96hKEw+8tq9k2XieFagQLuD5TdvrB+Mz4Nme6qms+bUFbDGJLu9ptNpZubMZcxmp3M4NwUOhhEZxhyeT8PkPK/XPnUYcTxPpVJ2YDLfJN6BcTqh0fy6HqIGMMCCZR6McUczWO4PKBwOi2ERKCy2J3vMh4a2xYijtBM64Faa4h145stwmMT1UF9PR5ERZY8gCMH4HEbsyE0pLMJDaN/+ewuE3B3uzhXdioNRKG2ktrTG2LNsyYLHyysiY+us58ELmbyRvPxO9DjoJWUInTp1woANoWBJjLPViEP2lFBY3t04lOIFmw1KuAkywlpZTzGKMHFm1mZzQL4kPBg2C4UohHghJOAQcbQWsMo2mCPwUKRIzNtsPHnbSECBnuepPAjlAiXK34z5OHeq2Tz/Nvydzg8Y1QhOAgn+6vuH/5d+AWthzbX2Qj0FAAAAAElFTkSuQmCC";
const castleIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAMAAABdXIqIAAADAFBMVEUAAAAQEBD//xiM/wD//wD//yEYAABSACn//xD//wj//yn/xgBKACGU/wD/zgAICAgQAAiMAFJrADkQCBAYAAj/tQDG/wCc/wD/vQBKcwA5ABiEAEqcAGshAAi1/wD/rQD/1gApAAAhAACMAEoxABjvQgi9/wCl/wCEAFLWnBgQABCE/wCMAFpzADecITJaADFaAClSACEpABA5AAnO/wB7/wD/9wD/3gD/pQD/cwCUAGNjADkhISH/5xwxABAhABAYABD/5wLW/wCt/wD/nABrcwAQAAB7AFJrAEqHAEJ7AEJzAEJrAEKEADlSAzNjADGRIS5KACvWnCHOnCHWlCG9cyGcACFCACGEEh7OnBghABitaxXWKRUKEAopAAh4cwUxAAPn/wDe/wBolABXlAA5AACEIWecAGOEAFpzAFJ7AEqUAELKSj2pIT2cADmUADmtRjExLTGlEDGEADF7ADHGcy2cEC2USimEISlCACn/7yXvxiXenCU5ACHjxhyhcxy5axy1YxgYGBhaABhSABgpABjjvRSlLRRjIRRKABTGnBDWexCtcxCUUg1CAAyYnAn/7wiclAhrSgilFAjCygTz/wD/7wBr7wCI5wBz5wChxgBnwgCYvQB7vQB7nABanAD/lADvlAD7iAD/ewBScwBGbwD3YwDeQgBSIQAxIQBWFAClAGuMIWOUAFrGKUqcAEJjAEJKITlKGDmMADn/xjHvUjGcSjE5CDG1ADH/xinelCnOcym9cynGaykhISmcGClrACneziHGnCGtayHGYyGlQiGtMSFzISHGGCGUCCFjACFaACH/7xjvxhjOlBitlBicShiEQhhzIRgYEBhCABj/1hD/exCMaxC9WhC1UhC9QhCcMRCUMRBaIRBzEBBrCBAYCBDn7wj3nAilnAicawilWgi1Ugi1QghzQgi9OQjGKQitGAh77wB75wCExgDvvQDvtQCEnABjnABKhABacwB7awBaawDnYwD/WgDvWgDOWgCcUgBCUgDnSgB7OQBCGACCuAj4AAAAAXRSTlMAQObYZgAABFZJREFUOMuNkwVwGkEYRveOE6BXoHAUCoEAqdC0SdomaZK6pO7u7u7u7u7u7u7u7u7u7t5v7+jQznSmfckkv+3b5fYgKg38YSHNCwSS9MmWkSAhYcmSJcvib1sI/0GDEJBeCQsFh0Q006thFufy84nx858EOuaE8oEInebrPiZYExeEXH/5YtasVJSqVauKC+YkJMwco844nSs2HkyV6rGoZIVbzAyND41PnJ1BdZWP/2YOnLFFgtVut1ut80PGhFrVEIRKnz0Gj2eAslwsPyeU8klZXaR1XJzBYE+SxGpWZXaPvb1fCbPGJ6HYrYkFHxkoNEEq3R/PZeYGZCUgw2VaNyRRjhLRPnfuzBzF2khx7ee4zLcVb9QVgwdzMBjEq3FYnnl87jgPDuW4xIGLBRXZA3WLD6WQlBhJG7rcdxcOWq3I4mi+oyHCjL3Q4M4dqnhjcSmhXr3FvWjn3vdhXxwVOZ1W17M+AeIQDLWuWF1wwbVNS6nnE/LL2ahrr06Ln+wRiKWeWpZlOzdtWki0mEyyVJrnWXaQK7+Q8jACdmvRX7KRTqczohtku3jQ12ViGKY3esUwBvhIHM2xh9fz+GX5TehWzlgGjaNiv2oWUeL1en25goosLarOZu1KVkCsB92jczLAiIO1w1glvZ7XtyEkZ5/sCCj82l+yY1I/TErZcYLS6m2WwQz27IqsI4ujpJWqQWWkB8NQ5z482OInTKbh3dkAJYsQsSzKXaTKVNaf1WrTqrIucIGuxQk5otOinHVV4H3dzGrZoY4q+MtHEibcJ9dc+PAWp9PpThaATEv3JUCqglWlMyqy3SwPMzsYmUOvA5FZVFlbPHw2stk+LahkJozFlDOHVI5FNqw+ZNhDlVWogkuqFLUkLISIg7G+3GmB3maOd8lB6h7rmziLEfNxHYYo3LhaMR39WRsXCQtrkh0p52hExP5oDC2lyC7UjomZ3GHUiFMFxBG18+QpWdhZGK9mpujJcLnzprGlGe2PGFerVp48MbCjlvyOOapNhxNja3NgbMoIIk5N7U5dw0FAp4G2pBTN9CjxVfLkMT0iW7Zc05hYOkXX0djQsiWtYR7ldqdBrHk6SYOC7YA00QbSgOhM6akstXt0NwKK99UEiBKn582b1w1qLMVjcQk166ZLhzqzk3ZfL/IKgvA2KXTPpYl0d026N97q2/Gop6F9LSUBooQVCgPFfDbMIspXlBiZVrkEwbto3owpxb1zYzWxjuomkylT9DNN7FyXNE2TbsKMrz6fK9sZXGGdCZNiJVV2tm7deSkow8V81KnKiDEb7kyW8wuCMZfPO6WO4ybeI4vjfazXJecQFORc1VoxeLyY8eWADMhCANnhTaHyYyWBjaFYLCYjPrLPm1JJc9b0yTITjkPK4fieZYOLWEzhJiEcskBsYSi5TEKADairOmCEUpYtRlRowPwOAcEQ8d9APehTCebGP6cC8b9lQadRjWjwfwRdPwECqvU3xtYKiAAAAABJRU5ErkJggg==";
const cavesIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAWCAMAAACoogE4AAACzVBMVEUAAAAQEBD//xj//wD//xD//wj//yGM/wD//ykYAABrADkQCBD/xgBSACkICAgxABiU/wAxABAhABAYAAjG/wCc/wD/zgCEAEoQAQj/vQA5ABghAAi1/wA5AAel/wD/tQD/nAApAACEAFJKACEpABD/rQD/pQBKcwAhAACMAFJjADGt/wCUAGOMAFp7AFKMAEqcITFaACmE/wB7/wCUADlzADmEADFaADEhISFaABr/5xgYABAQABAxAATv/wDe/wDW/wDO/wC9/wD/3gD/1gBrcwCcAGh7AEJzAEKEADljADmcEiucACHWnBgYFRhSABAKEAopAAj/5wPn/wD/cwCEAFpzAFKcAEKUAEKIAEKpIT1KHDmcADmMADmlEDGxADH/xi3Gcy2tSi2UIS2AAC1rAC3enCmEISn/7yXrxiXKnCG9cyGpbyGUCCFzIRzaxhjOnBiYThhSABiYcxTGnBDWexCtaxBvDBBKABA5ABD/7wjvQgjGKQhCAAjCygSYmAR3cwT3/wBz/wD/9wCt5wCI5wB35wBanAD/lABjkAD/jABScwBWawD3YwDrXgDePQBSIQAxIQAQAACEIWOUAFp7AFrGKUp7AErOSkLGSjmcITnvUjGcSjGtQjExMTExKTGMITGMADFzADFSADHelCnOcynGaymUSikhISmUGClCACn/5yHeziHenCG1ayHGYyHGWiGlQiGtMSG1ISHGGCGEECGlACGUACFSACH37xjOlBitlBi1YxjWKRiEEBj35xD/1hD/exCtcxDGQhC9QhCcMRAYCBDn7wj3nAilnAicawjeUghrSgi1QghzQgjvOQitGAhr/wD/7wB77wBr7wB71gBr1gClxgCExgBrxgB7vQBjvQBjrQCEnAB7nABjnABrlABSlAD/hAD3hABKhAD/ewBacwD/awB7awBKawD/WgBCUgDnSgBCGABSEAAc4QpjAAAAAXRSTlMAQObYZgAAA+5JREFUOMt9knUX2jAUxVOnlAKFIYUxYGOMjbm7u7u7u7u7u7u7u7u7u7tvn2E3bf/a2dkPTvPeS97tbRJiUjlznsotc1tJruwLrShQ8LBZXNckp1lR82TPnsvoQJA9Z2ZikjOw+FwsOeuuldob1rT678Tm5DAqI7+0aZY7EGjS5uCIESNVNLRc8b1hNDaniNlRpeDUrMmsydiHfKZAzeRPOx0PTI8lY0cI6Pg+OfWUWvNTVsrsfLkKNozquh6NzjIVqrauUMHv1x2OqN1U0CvqNWAvFPPruuNGblQuOKIV9XwX/X6/w++Ynq960kHRozHDYaEa9etP4CjRxobAfo6bcBViiWIOTrhfsRMhhStg1p/vlp+2OWYXueSvCCkk/l4E5BjOAaH+9blDWxgKFWheoxHxuHSeF7htme17WUFgB6uDsKz1oXry0ZMIuLO9Tg/5PYQKbOYpkZQ831uUCuwRePyKFyKKqw7L8nznHHYWY/FhVGF4IBAolGU3j0rXpcuaqVmowk4R9A8HGYapjbyayFLEvNREcQRs4fZ4iHU0tRbqgebtOoR6ijYRf1Zs2wonq9pAt2EeBjhhoZ1os/W12URbYdOEyOdlQR/No3ZHFa2dPcV2IKKIbbFfXVi8tFaWuuh3Ugsw1LWYCDZlhokz2IFjPBiaYNRuZtsuJjGqD2vRoSopJmC+VvUW1mXayPLs+dBgPMXlMNG/dGmB40qPG6ApjNodL+N5diBTMuUtNff2FU4QhH65ScgmgLzWpe2IXWTzNt/Hg752mJiYLlemTMaJWoIh6kAs7NFblsOMEvRoWXpAju+3gGhfM4DyA1Y2DVQj9uMCzoHCjWtQrktmxTUqXT5TRl/EVRcKY8qULbu2SqCKvfqSqnnyNC0uwF6oMUlEnkAgYzqTL9PNzOtLN2hQtmw5SKKW4Ro18Uhy55+meRjs+asMGcr1zLuqfasihbecGF2GA6NdOPXtkbeSz+d2+9xj7WMyZsyEWHowWULB13uR4oqML3BP0xgChdfpdDojGJtlkg9kApFELsIoYbnUu/z5JUliOkngzby4LMuf3dB4qsLE4/EzNUWhCpV8KGJFpSyT3G4E+T/G620lxMmsKSHL8XnfprzYEJ9RQCoQqhcMBhORyVKBGeEwgYmX9BsMBQkYCs+l/A+n/EilwkXpJXQWxdZ6vfNl2VkiFX82LXQZd0sJzSwQD3uDhHi0UhpjKITi2Ux+abKBt0Td1ZihLiiKEnTii1Jxl5F6SqW8XtqphL0lMYASQdmiJFyiytQuasxYGgCD4vUqTlRogIoRmg4Q/ANiYYlYWLkh8H8F8g+cZhugwV/8u/MP5mvKvsxWYBkAAAAASUVORK5CYII=";
const factoryIcon = "data:image/png;base64,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";
const forestIcon = "data:image/png;base64,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";
const galleonIcon = "data:image/png;base64,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";
const helmIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAWCAMAAABE12QuAAAChVBMVEUAAAAQEBD//yFSACn//xj//yn//xCM/wAYAAD//wj//wBKACEYAAg5ABhKcwCMAFJjADkQAAi1/wCU/wDO/wAQCBDG/wCEAEqc/wB7AFJrADmt/wCE/wD/zgBzAEJSACEpABD/xgD/pQB7AC9aAClCACJCABghABD/5wD/1gD/rQD/nABrcwAhAABzADljADFaADHWnCFaABwxABgpABje/wDW/wD/9wD/3gD/cwApAACMAFqEAFKMAEprAEKMADmcITOEADGUISvenCF4ISHGGCHWlButaxgYBRBKABAxABAQABDvQgghAAhmxgB7nABalABwawDeQgCcAGuYAGOEAFp7AEprAEqtHEKYAEJ7AEJjAEJSBDWtRjGhFDG1ADHenCnGcym9aylKACnzxiXelCX/7yG9cyG1cyGEFCGcACFnACE5ACGxCSDOnBylcxy9axz/7xjWnBjGUhh3IRiEDBghABjnwhTGnBDWexBvIRBCABCcnAylcwyIawy1Ugw5AAxWIQicGAgSCAjjYwTv/wC9/wD/7wCA7wCt5wCcxgBzxgBjvQD/tQCUnAD/jAD/ewBGbwDvWgBSSgCEIWulAGuMIWNrGFLGSkKEAELvnDmMITE5CDG9cymUSimMACn/5yHGnCHGcyGcSiGlQiGEISGUECHGlBjOUhiEQhilMRhjIRhSABj/5xDecxCtcxC9WhB7ShC9QhClKRBjIRD/7wi9vQi1nAiclAiccwh7cwi1QgjGKQhaGAilEAgpAAj3/wCl/wCt7wCl7wC95wB75wClxgD/vQCEnABrnAD/lACUlABrlABjlABSlADvhABjawD/WgDOWgDnQgDWQgAxIQBCGACR4Pb0AAAAAXRSTlMAQObYZgAAA3VJREFUOMt9kQVz20AQhe90smxRbceyzNQa2zpNw0mZuU1SZmZmZmZmZmZmZsbf0z1JdjJtp08z2r299+2eTgg1snbPR3+INLFaGzWyUu2tUfbm9vzTmTexTZvBzSAJAmLtgVyuvoPbdO78gJCqLWVl7x7VsNap8upJbtCTmVMPtCwKyfeyr50nknFb6lJti4rfUoFU6jrJwraqzeO0pOfhHw0ydG3QMhskZfVq194WvRYIBCKByOaouHi1UCKcs1WPDqRWNNa+YOPGU0G9NjOVLE2O7w90aTJZ+jl6PxCJRF5HVgyXFwugK72zo6cLQmkLCp8pKZney6CTq0uE0G6gOY7j25K5gsAPGvvY0kUeK/AcP2VHluZ5jmvVGDVuBk0v6UcnJziOZUmPkKsOw7KcRt90uVy5EwrGQ4E92NSAPYN4MDItvMERLMdzLXM1egqURvXts2efiTExTEMyDRBXn6EtY0RkTCbT6N6Z0SMZamjubc7QrkM9Gj3MBBgVQ+MYMgkCuIYQJB5haLvMnTGaTC1MWhxi02nGoDVqDBmhr1oNQOJsluOmkcxo+K6p9JwsAOBpGaR0W5ahYuGB8nFyFDK4ijkhJLaDe2wYMkbDaWe3gxc1TwVzKw+lT/PgWXj34dJ5HGgGmcPz/OgZFksXFGsHdz4pb2eT7jD6GICX8y9yVPMmw0bDBpS+tVJ4sjLWxSK3FnheIGRTUXHx/n6ufl4UW1SkKOsO3Vlw1gO/C5QvL6Th9pJ8AX5r6yDQaxVFfS4W4glXc0AieaOqyuTmAwc26xW74XZQmbvleU4qSvErWe7woqhICcvxtcWqssAD9CpVVdeFZuHhi1bl+J6KpJvP56N97u0acMFsKM/2Psfnqx93FlT6cpaGE/ImVVGfNQDa7XA7uomzMKk0O8xrRFLf7TA7gKjflIh+v06fj1eY3e4OBTg8/+X6cALLX4Ayt0ZI3ACWtyFoUwm29UDrAKXjFRVba1HNl9LlH9fIhdjZcXvHMMaFHfx+f9clGEkWS/pnuQxttn/a0PWDKJfX0vWrP+wZkrBdSksdMcKJdKI9RoXxrlvLoYqcdrtksUsIJTRfQXt7BjkAe52WO7Ehp2QHur3diRHC4bQFlrDWBRXwdpKW42qhbJY1IT1AX6mmA2WSf9NZTH8jo1qtvxD0Hxn7vwGfyKmVacqsIQAAAABJRU5ErkJggg==";
const japesIcon = "data:image/png;base64,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";
const unknownIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAWCAMAAABJyRRpAAAAP1BMVEUAAAAAAAB/f39ZWVkuLi5KSkpUVFQpKSkMDAxPT089PT0bGxt9fX15eXl4eHhxcXFoaGhlZWVgYGBAQEABAQGw1hR4AAAAAXRSTlMAQObYZgAAAGRJREFUOMvlx7cRgDAQBVFxRhYP/dfKnWYoQD8gYaO3YeoFb9ypXmIHWYuqVhvA8eDIRW3GnSXuG59sM2yLl5kIdCKCnUH7OBUzeRNkeQm40dpu0D3UkrITsRCxEXf43t6PjPcAerkJ8kalH9QAAAAASUVORK5CYII=";
const levelToIcon = (level) => {
  switch (level) {
    case "Aztec":
      return aztecIcon;
    case "Castle":
      return castleIcon;
    case "Caves":
      return cavesIcon;
    case "Factory":
      return factoryIcon;
    case "Forest":
      return forestIcon;
    case "Galleon":
      return galleonIcon;
    case "Helm":
      return helmIcon;
    case "Japes":
      return japesIcon;
    default:
      return unknownIcon;
  }
};
const nextLevel = (level) => {
  switch (level) {
    case "Japes":
      return "Aztec";
    case "Aztec":
      return "Factory";
    case "Factory":
      return "Galleon";
    case "Galleon":
      return "Forest";
    case "Forest":
      return "Caves";
    case "Caves":
      return "Castle";
    case "Castle":
      return "";
    default:
      return "Japes";
  }
};
const prevLevel = (level) => {
  switch (level) {
    case "Japes":
      return "";
    case "Aztec":
      return "Japes";
    case "Factory":
      return "Aztec";
    case "Galleon":
      return "Factory";
    case "Forest":
      return "Galleon";
    case "Caves":
      return "Forest";
    case "Castle":
      return "Caves";
    default:
      return "Castle";
  }
};
const LevelSelector = ({ storeKey }) => {
  const [level, setLevel] = useDonkStore(
    useShallow((state) => [state[storeKey], state.setLevel])
  );
  const lvlNum = Number.parseInt(storeKey.slice(5), 10);
  const handleNextLevel = () => {
    if (storeKey !== "level8")
      setLevel(lvlNum, nextLevel(level));
  };
  const handlePrevLevel = () => {
    if (storeKey !== "level8")
      setLevel(lvlNum, prevLevel(level));
  };
  const handleWheel = (e2) => {
    if (storeKey !== "level8") {
      if (e2.deltaY >= 0) {
        setLevel(lvlNum, nextLevel(level));
      } else {
        setLevel(lvlNum, prevLevel(level));
      }
    }
  };
  const levelTitle = level !== "" ? level : "Unknown";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      title: levelTitle,
      height: 24,
      src: levelToIcon(level),
      onClick: handleNextLevel,
      onContextMenu: handlePrevLevel,
      onWheel: handleWheel
    }
  ) });
};
const l1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAMAAABIbI/BAAAAZlBMVEUAAAD//wC9AAD/pAAfICD/nAD/zQB5AAAxEBC0AAD/gwD/AAD2AAD/KSlBDAz/lADuAACLAACDAABaAAApGBgxCAj/9gD/vQD/ewD2ewDmewDNUgD/OQDeOQDmAADNAACkAACcAAAMMrwwAAAAAXRSTlMAQObYZgAAAG1JREFUCNeFzckagyAMReEkEFKQ2qqd6/j+L6kBh6Vn9W/ud2HtWmyIsR2S7gW/PpQQEDEQ9JFRuxF4hylDUP12NuT+nGknGU0mlA1ttKXnzCUyB90Z33p8zEKi/zJz55VSi0hdKR/Py5JV2twM7OgEEX9o2tsAAAAASUVORK5CYII=";
const l2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAVCAMAAABBhy+7AAAAqFBMVEUAAAD//wAfICAxEBB7AADmAQH/nAC0AAD/AADFAAD/7gD/KQD2KQCcAACsAwPeAABWBAT/zQD/pAD/cwD/ZgD/OQDNAACHAABzAAD/KSnNKSliKSm9GBgpGBggGBjNEBA5EBApEBD/9gD/1QD/xQD2rADupAD/ewD2ewDuewDVewD/WgDVUgDFSgDmOQDuKQDVKQD2IADmGADuAADVAAC9AACkAABqAAA/hRgnAAAAAXRSTlMAQObYZgAAAJtJREFUGNNNzVcSwjAMRVHZxMgOOL3Re+99/ztDThzC/TsjzTwAQOG/oClLUyllzwoVY4vlQUrLOzO510fJZ8KqYmHovU9rt3TXJ06DT6FDwygjcs5nBRqGCsp4gOZ9hWCtGLX1LMXFEB1Lf046am6PXdJeK9Eo6lBYybZB0o3VxYro/phMoO/t2nXnIQyc3KnLNYxHrSYa5n/BF/hiCQOhvu7jAAAAAElFTkSuQmCC";
const l3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAMAAABFcv+GAAAAolBMVEUAAAD//wAgICD/AADNAABiAQH/7gD2AACDAAD/ewC9AAB5AABqBAS0AgL/3gD/pABaAACsGADmAADVAACkAACcAACUAAAkGBhFBAT/tADuewD/WgD/GADeAADFAACsAAD/KSkxKSmcEBA5EBD/1QD/zQD/vQDerAD/nAD2ewD2agD/YgDFUgDVSgDNQQC9QQD/MQDuKQDeKQCsKQCLAABSAACxUFGgAAAAAXRSTlMAQObYZgAAALFJREFUGNNFjlcOgzAQRMfGBhuHHkiH9N7L/a+WXYiU9zVPuxoNMPcI/Cisndw9L+AczQSx3k/Z1ES0+NOc5DgatbZTQN84V/psNZBq3aiEJQKkCoKAc9IHEFpfMMawJG0eF+ovYjMLgap8VWf+fNBpqD+pGZPYApC612ueJAfqzj1ayW/hElEex7EgLpWEOnU7r28H1FaIeHsrTSppaJZlzjg9GACgrnS4WkgJQnaA+QLzlAnOC8S2VAAAAABJRU5ErkJggg==";
const l4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAMAAACuRUSFAAAAilBMVEUAAAD//wAfICDFAAD/pADuAADeAABKAAC9AACcAAD/9gCkAACUAABqAAD/ewD2AAD2KSk1EBD/gwDudwD2XgD/KQCsGAD/AAC0AACHAABaAAApGBj/zQD/vQD/lAD2ewD/cwD/UgD2UgDuUgDeUgD/MQDuKQCsKQD2GACkGADmAADVAADNAACsAAAwvxvYAAAAAXRSTlMAQObYZgAAAI9JREFUGNNVz9cWwiAQRdGBBEJRSNRUe+///3syumDMeWKz7stAzPtWAVUKd24lWTrDdhnxxhibJQvBQptkuULn0XKPRNOa3CENWeaBp2RxCc/uGF3ievs4oOvawzOsqRe8zb8V2PnYvZ6ENP6u7VXDssDsAu9RQwH8m0K7jHP41dt702gNsWqYhqpkjuH6AyVkBxDGqCEUAAAAAElFTkSuQmCC";
const l5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAMAAABh7EcdAAAAllBMVEUAAAD//wAgICD/AAD/9gB7AAD2AADFAADeAAC0AACsAACDAAD/7gD/zQD/vQCkAACcAACLAAAxEBD/xQD/pADpAACUAABqAABfAADeOTkcHBxBCAjNBAT/ewDuUgDeTgD/KQDVAAC9AABKAAAxKSlSICCUGBgpGBg5EBD/3gD/nAD/cwD2YgDmSgC9QQDmKQDeKQCsGACmqoM2AAAAAXRSTlMAQObYZgAAAK5JREFUGNM1zucSwiAQBOADAQmkdzWJKfbu+7+cy5jsr/uGveGIqFCrf1QBrW9hGF4FY/fRic15GCJvWPSUUIchzwLf904ottBKGylLgnJItEpXO6gJIFjFHBqFEI65JiSR0sbOOoJ2aTrZPfReQxwpP1DntNk0ugggD81Bqb7PgMDglNituJhySyQ9381+lFywdjQhY9krsSmHeBR/E2vrM3pIXVX1dODuZf5vmX8rdwm+zuITuwAAAABJRU5ErkJggg==";
const l6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAVCAMAAABBhy+7AAAAq1BMVEUAAAD//wAgICD/pADeAADmAACoAACDAAD/9gCcAgD2AADFAAC9AAC0AAB7AAD/KQD2JgCLAAD/KSkxEBBBCAj/3gD/1QD/zQD2ewD/AADVAADNAABuAABeAABOAAA5KSkxKSlBEBA5EBApEBD/7gD/5gD/vQD/rAD2rAD/nAD/iwDegwD/ewDmewDFagDmWgD/UgDNMQDeKQD/GAD2GACsGACkGADuAACUAAB/9CeQAAAAAXRSTlMAQObYZgAAAKxJREFUGNNFzdcagjAMQOGkdLAFAUEZ7r237/9kEipyLpL+F/kKv2wbuvrv+0N0Egdzy/8UO0QMRKsb1q0cLR6QpB9qOqTcC6eNRmdib2hzTdSlPZsur9h2EfWlQS/DpBlwcDb1Nj2XbOTgDmi7MqvX2gWvIecGLQ+so/6HZvYBJZfYJgsYKyvVWMiQAYuVtU8Qk5P0ZwDAosK3Xk+l/AkD8jyuyrKKGIlMaXwBUrwJqIUfWicAAAAASUVORK5CYII=";
const l7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAMAAABh7EcdAAAAhFBMVEUAAAD//wAgICD/AACsAAB7AAD/7gDVAAC9AACUAABNAAB7ICD/3gD/zQD/vQDeAABqAAD/ewD2ewCfAACGAABmKSkpEBD/pAD2AADFAADeKSkpGBj/9gD/1QD/xQD/lAD/gwD2cwD2YgD/UgDmUgDFOQD/GADFGAC0GADNAAC0AABaAAB2wDSSAAAAAXRSTlMAQObYZgAAAIlJREFUGNNNilkWwiAQBIfICEFCghBN3Pf1/veT4TFqfXW9LlDDbcIMoP1GCLG11jo3gj4IZidB7792rOF1mRJkGiFiRIxjkkbOYG2MeT99snkNUCU6RaFEyOhzCTNqWUKibTnk6xfmi0Plc9j9Xa6Eq3uT7FTCHsPVWQ6rhcHwCD0UJaeLPZHHB1doBv/XpFOuAAAAAElFTkSuQmCC";
const l8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAVCAMAAABBhy+7AAAApVBMVEUAAAD//wAgICCkAQD/zQDNAQD/pAD/AACDAAD/ewD2AADeAAC9AAC0AACcAACUAACLAAB5AAD/KSlBCgr/9gD/vQDuewD/KwDuAADVAABnAAD/7gD/3gD/1QD/mADmKQD/GADmAADFAACsAAAYICApEBBKCAj/rADmlADegwD2ewDeewD/YgDeYgD/WgDeWgDuUgDNSgD/OQDNKQDmIAD2GABaAACHb7TVAAAAAXRSTlMAQObYZgAAALxJREFUGNM9jVcSwjAMRBU7xiakd0JP6L3f/2hoMx7eh1ZPY0vUk6Zap2Tx9PJ5rWpPQ+rxeZo7zGzpsY52jmXyWdHoje4hZ1znivwhpytlyZF3JI+cg3F7xzSgOMDjSrtcy5CyEE2PGzUkfGU9Xygc4l2Wig8pNJK/YCO1Q2QXvzDluwOokguoT8EB6dX9hoCMdMAU5SRpG10mdvE+MiS+cVjOi6K4RXEiiETWGJMkiWkyNnaxWQsAA+JvPw9bCvmDA2SDAAAAAElFTkSuQmCC";
const LevelTable = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level-list", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l1, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 1 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l2, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 2 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l3, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l4, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 4 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l5, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 5 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l6, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 6 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l7, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 7 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "level8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l8, height: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelSelector, { storeKey: "level8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleKey, { keyNum: 8 })
    ] })
  ] }) });
};
const portFullIcon = "" + new URL("bananaport-BQLHIRTj.png", import.meta.url).href;
const portHalfIcon = "" + new URL("bananaport_isles-ChjMenC1.png", import.meta.url).href;
const portToIcon$1 = (num) => {
  return num == 1 ? portHalfIcon : portFullIcon;
};
const clamp$1 = (num) => Math.min(Math.max(num, 0), 2);
const nextPort$1 = (num) => clamp$1(num + 1);
const prevPort$1 = (num) => clamp$1(num - 1);
const BananaportSelector = () => {
  const bananaport = useBananaport();
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]));
  const handleNextLevel = () => {
    setSetting("bananaportOpen", nextPort$1(bananaport));
  };
  const handlePrevLevel = (e2) => {
    e2.preventDefault();
    setSetting("bananaportOpen", prevPort$1(bananaport));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      setSetting("bananaportOpen", nextPort$1(bananaport));
    } else {
      setSetting("bananaportOpen", prevPort$1(bananaport));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      className: "simple-icon",
      height: 24,
      title: bananaport == 0 ? "None" : bananaport == 1 ? "Isles" : "All",
      src: portToIcon$1(bananaport),
      onClick: handleNextLevel,
      onContextMenu: handlePrevLevel,
      onWheel: handleWheel,
      style: { filter: `grayscale(${bananaport != 0 ? "0" : "1"})` }
    }
  ) });
};
const helmFullIcon = "" + new URL("krem_isle-CRE2zfW4.png", import.meta.url).href;
const helmHalfIcon = "" + new URL("krem_isle_half-BlC1bdso.png", import.meta.url).href;
const portToIcon = (num) => {
  return num == 1 ? helmHalfIcon : helmFullIcon;
};
const clamp = (num) => Math.min(Math.max(num, 0), 2);
const nextPort = (num) => clamp(num + 1);
const prevPort = (num) => clamp(num - 1);
const HelmSelector = () => {
  const helmAccess = useHelmStartPosition();
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]));
  const handleNextLevel = () => {
    setSetting("helmAccess", nextPort(helmAccess));
  };
  const handlePrevLevel = (e2) => {
    e2.preventDefault();
    setSetting("helmAccess", prevPort(helmAccess));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      setSetting("helmAccess", nextPort(helmAccess));
    } else {
      setSetting("helmAccess", prevPort(helmAccess));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      className: "simple-icon",
      height: 24,
      title: helmAccess == 0 ? "Start" : helmAccess == 1 ? "Machine" : "Doors",
      src: portToIcon(helmAccess),
      onClick: handleNextLevel,
      onContextMenu: handlePrevLevel,
      onWheel: handleWheel,
      style: { filter: `grayscale(${helmAccess != 0 ? "0" : "1"})` }
    }
  ) });
};
const arenaIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACslBMVEUAAAC5rZuHfXCUf2lBMR3c1MJkXFqpnoG2taz25dOnmnuMhHNzc2OUlHtrY1Jza1paWkpSSjqEc2OUhGtaUkKcnIwhIRn/AACtpYwwMCk5MSnFtZTe1r2tjGMBAQGclHO+xbVsly9CXRv39/BQcCH//+9iiiqTbEu+vZ6Ve1lZfCbevZT///17akq9nITf370rPRHIqn5okit6rDRznjFNayDVuYxunTNzpTAfKw+oiVYiNA9bgihLZyAIDQf41JW7qYpVdCQ7Txc3SRYWHBMWIwkQFgXrvYB8fHC5kU1/tjlBVhqSi3t9b117URy2mm5qf0iVeEd5pjapeTadaimTZCcxRRL0AQC1mn6rknXPol+lgU5qWECFvz9DZB1mRBRXORL//tPYzLGKnnCAjme6lV/YrVnDmli1iEKCrzmgcS5IaiyBXytggikfCAMSAAD/98f/8LSvsKLltXmcjHDTqGl5rmVwqV9eXldglFVzZESrgEKNzEE4UCpbQxlmNhLkBgWgBQH//+Ts1KLxx42Ct2ztr2uEfGmMyGd7eGOAmleQjVJ6j0zOjEpUakOifkJZdkA/PzlzTyc3QiVUSyT+IiIoOCBARh4XJxYsGhZyAQD45ebb09H+6K7TyaWlnZPjxoqUk4quoIbYsnWNe2WNcGKag2G9XluDvFmHq0x4q0fCjEVTXDZDYjRISzRxcy1hSSmncCdEUyNpTx1DLA5zIg25DATs6dDu37nPuar526Cup5TPq4umm4GdjHyOsHuBhXrhvHh6iVjRnFF/WUfSSEeBaUPvOzsmTCiHMSI5OxhjAQBBAAD41NPNy8nrtrSmxHyU2WGxhUyZ3keURD9ebDVqiDR3NTGNbSJcYiDbNRX/EhOCEQlQAACfppurwJG2eXqz7HCJrGKhZFvloEdoQjhIoLHZAAAAC3RSTlMA/BAue97TvYNnSxSDUhwAAAm9SURBVFjDtZb3W1NXGMdjd3vvuefOmNzsEEISkhAIkIRA2HsJArJFhogguLe27r2t1lG31j1rp3vV1b33/j/6nis8VVtXn6ff8HB/yfdz33lyVP+Xnnr6KdWzg8jjP3hfelqleuYchfnxmJ1aUlLioSVJ9ySA500CEiaWCliWZfUiM83QFGWiJMn0WPZnXkCO8Qih1lJZrWXUMsewWi3H0pRExcTEPNL+4tPPbEeDJFFWs3Va+ei7zKIl70/wMCzLAYXxPJrwXCnCsrgGq9Vy6yIsxPPb33ecjaEpnURzWmBwj0JML5EHqdXMdhEL5RP5PfF1Z+tqd1E0rdNJFM16OO3Dg3Bo0LkUUY1LHAJCFfH8kuR33qcyMpZAAUgFKCrGpIUYVjzIbzYjuURUZ+wsMGcgoS6+lDekt7a+04BpCdpAACaK07IxK1Y8yK+R1dS7e5JbeWofQoM6dAi/HT/xTHlyCUV6QAHAw3FaxrRi4b/7HbJara49lxHPT49BCK/qFIRd+R3ldYUCVMEDw6AzUQwHH50u/Z9+vd4sgl/s2abZLZTWTRTwZ4XzhLqLnQ0NPTE0fScAiWIYDyGkR9/vj9LrFT9u7NDUZ6B95Rl8fWFyRvJ7haM/K9sLERC/TmeiaYahuZiFcdH3+5X3Y4ypat3aFOpaR3rGhMs7xr03bveMwqFOCvxKADSUAebJo4uOjr7HHxWlR6IMiSPN2vLGGRMrOvJ359fPH/f62B0zRo0aTSsAyWQiTwDoAHA3AezwZ+Yx5hFq7KmoGl09NH/hhAn548aOnddZWDi0QCGQNkIGDMlFFweEuwHghzZiEaPGlpayqurq+vyL+fNHjBgxdndn56gUAJCPBAWELO4HRIGgCUhv1giiWPrmm8OrqqoPTcif/97c6Lljd9TXj7xMg5TwwQ+5SOCPA8RAAcn74YOQBgGisWV4dVXV0En56a/PdbtHzJtUP3JkAzhJ9EokjI6S7o5BDwSSAKwh0miA0DK8p2r00M4J6eNGuN3Rr8dPGjlyFANiFQDLsjQLZxSBxCkbBACMkdlhhhKCH1FvDi8DQOGk+QTgHjsfAIXLGA/xM3cAtGTitEomBGDW67FaxhqHBnLQi0I/YFR9PknB3VpekZKyf8oQkgPLwLlAikEOB1aSIAdlB/Rwfogi1gBBUMsC83JZNQA689PnDRqPDoevr1zd1L2BheTheOMICOwcSSNOicDhMIOf50kPEcKCsKelrPrE0EOXCyct+9YVDFY2Ld5/ZGrBVOgDy9AgsNMcx7KwXToAQNyiWob0ERJFHvrAT2wpO1F94o9DG48embZ/ZlOR3x9YufXD7TAG0EJi56ASHMAkSSIRIIcMcfOIkCAIAS2aXXZi1Zfrb0aMkZy83Jrm7u7Vb7ujtlC0qT95MhAsHNeUAoDKwxbxDo3SAxF6KWDx5roNr+UZjcacnR+Zx7cPWep2f3z1lwJKAj80A4wU5ACBEACUDgAakj5pAw9FWBIOvfZabl5OxKjdCn2IGn9my5Yv+sjBxmpJIWAroQicFupKAAgWGZxIIHOwq7S0lAsRf27Wxg2RnAtR7i1rxr/78YdXjFN3UhINQwTlJ/XkSEcUgEYGAO9APEZ8AbcpJy8UysnJDRVbu4/U5K75aetHbMFOR+2VTaspAHAEQEP5KQ6kRIAgA8hbA4C9e9V9fb1hdU5Oji8zIeAvqrRYD7e3ta1evfzY9MOupe0So2UAQMEAkDJy7AAAkx7w/O83evs2bezekBPKHpOQkFg0s6myMmi3B4uKuoIuq73Lf4kAmDsACAWGSQWCLkITBZ7n33hlzsbuWbNm+U66XK5Ui6Xo85n+yqAfBI9EiyUxkdWyykpJEmonsaiIYI5EKD3G/NXBg7/7atask8VWW1KSLXNMYObMoiJ/MDFI3AGLJcHyZfcQ0NKlQ5YfOHBwecEdgIBhEHmSwgeDgXD8+qzs4uYkW5rLZQ9UNjX5g/DmxITEgAUIial2S6o9sanLYvEXNbX1AxDsIo95Eb86GPTKjeuhGqvV2myzZboCRV2BygABBCwQhZ2kBqH5Z0I+Xf6DAwARJhljAiAa9tYmn7W52ZZmTUsaY7cEAxa7PSEhAP8yU5NIbi6bPWixpyYk2CkFgKAPZBmxE1JQNCc3y2pNKq7JsibZEvzBMcQ7xmXLTLLZILVUl80VSLDbU+0uAhjIAbZIeKM/hM15YWtzmi0r5PNlWe1+8uVM8GdCYlnF1mKIweWy2dJsNuJWQpBlssd4ADCnN88H30xKCueGwr5UKB5kDhlZs4t9vmxfVlZxmrW4Jtt68i6AALuA6j74vj+Evki4JjvLmpadGwn5bHY7pJ6U2VyTFQ75QuFwXiQ35Fu3QWYHADwvi4IBoa0kBKUTt4yR3LDPV5MdMuIl66zWbF+NL7zyAq2OGEERtVZeMxXmSTVAMMgyImfR3qvf9xM29xkjeaCI8Wzcmrzc9rZ1RmOB291+8Ih23dGpFyQJxpBRDciAoQjIiUX+yhc/zBl2pw63jYrUg7apjZHWubTRqNW7P/n8V3pxW8HyghI4kQAwIEGQRa9BgGGiD3619vTpt0gQc273GcHlwPC/ZAQ29uZI7p8DBxZ/uvRScEgBw7GquwQAg0HQOHHtJ59OmTZtSE/L6WEwUT/+ePvPkk29vb3MO8sy08JH33YcnrZ/cfsli4umwX+XnDwQkBcgwvkFkydPBsjyY8PfGvbKD19/fWvz5lvstgMJqWnFGdtOnTpWGbCkriQVvEcGXha8Xi/sJF7UNmXygslTJk8p6uo6duP0y0Rr2+zNvmzr+ozZw8u+GWNLI5t8r5xQQmwwOHneYEDnFy9Y8FvhoVEzZqxaVbGqoeL4+pb12dassHVj42xC+HYlcz8AQvDCOhKAgLy7zi9YNqOhIaVfhpSG4x0VJ7Nv+tYfnz371Km1PQzDqu4XEpxYxgIWYKIMtbUd5eW18X9rX3Jyuadi2fTGa9em90yHswgA/xAWRZmHtSQEr9NQm3EmOTY2uV+x83bsM1zc46lwljYyMAH/KqeAyY80lEED/fBqnAISsIeh4I7uoSga4uYUgf8B8vIwkqKTB5GKQjkcPE1THOehGZpcUBQ/Cf+BBIOoVggCj0GCxoHhUkZ+w0jaHKPYPaqHyCmSIxoDAboKqTjMOk4CAKMAQPBUPVxOpyCCMAFAHfRxtKTVQgKKn6I9qkcLBtLJY8IQYmNj03U6+EkHP0Nu3KrHEgykVyM4vYKzH0ButxQFANXjymkgd8dYooVx6Sa420rkNvIkAkAUELwAIH6dTrE/GQJeD4D09BVgj1b9b/oLMS9+IQPYIq4AAAAASUVORK5CYII=";
const bananaMedalIcon = "" + new URL("bananamedal-bkq8SUQj.gif", import.meta.url).href;
const bonusIcon = "" + new URL("bonus-Bf3zX_ol.png", import.meta.url).href;
const bananaIcon = "data:image/png;base64,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";
const dirtIcon = "" + new URL("dirt_patch-3Op7by5G.png", import.meta.url).href;
const shopIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA7CAMAAADsMjIyAAAC91BMVEUAAADw8PAYMDDwmIjwoIjokIAYODgQKCgYMDjo6OgQGBjwqIjIgHAoSEgoQEAoQEjYiHg4GAD4+Pjg4ODIyMjgiHjIiHgvWGBoMACwcGBYKADwsJDQiHjwuJjwkIAwWFgoSFjgiIC4eGiocGCgaFgQMDDAwMCwsLDosJDAeGioaGAQKDB4OABgKAD4wKDQmIjgkIDAgHCIWEhwMADY2Nj4uJjIiHAYOEC4uLigoKDwqJCYYFgwSFjQ0ND4yKAYKDAQGCjomIgwYGAYQEEoOEDIGBiIQBDgqIjYoIjoiIDYiIA4aHAoODgwEADwwJjoqIhIKADwkIjIkIDQiHA4aGg4YGiQYEgYKCiIOABAGACoqKjwwKCYmJi4gGjIeGiwcGgwYGjoSEgAGBhgMAD4sJDAiHCYaFjwWFiIWEDAGBiIGBCQQAD4wJjooIjgoIjgmIbQkIDAiHhAeHi4gHC4cGDQRlyASECwGBaoGBS4FhSYFhSwWBCQSBCAEhBIFgUwGAAoEADwuJDYmIjQmIA6cHWueGWoaFiQYFgoWFjeQliYXUgwSEiISEDQMj1wPTiIGBigFRKQFRJdEhKgWBCQQBDIGBDAGBCgSACIQACAOAD4yKjwsJj4qJCQkJDQoIiIiIhIgIh0bITYkIDQiIDIiICQgICkfHyMeHxAcHiwgHCQcGy4cGigcGCgaGDISFy0QFjQSEjYQEjIPEDYOjqULCzMKCyoWBCgSBCYSBCEPBCAOBB4OBBoMBBwFBCIEBBoEBAAEBB4EAlwOAB4MABoKACQsNiQoMi4sLCQkLDwyKCooKCgkJhwgJj4uJDgsJDgqJDYqIiIcIjYmIDImIA4eICIYIDQkHi4iHBgWHDIgGiwaGioWGjgYGCIYGBwWGDASGCIYFjYWFjAWFjgSEjASEiwSEgYSEh4SECIQEDgOECAQDh4QDiYODiIODDQMDC4MDBYMChoKCjIKBhoKBhwGBi4YBBgMBDQGBCwEBCYSACQSABYGABAAAD00AdiAAAAAXRSTlMAQObYZgAABshJREFUSMeM0jGK7DAMBuDlLyRhkFS6tJtUOYCbQEKSblJmSDvMWaZY2Eu8co/xDvHO8M7x9KZcMssabLDhQ7+M3s7XbX98XvZc1E397Qfr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";
const hardShootIcon = "" + new URL("hard_shoot-B_JOAn4q.png", import.meta.url).href;
const kasplatIcon = "" + new URL("kasplat-C3MHLT8N.png", import.meta.url).href;
const melonIcon = "data:image/png;base64,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";
const toughBananaIcon = "" + new URL("rabbit-D6O9SrZi.png", import.meta.url).href;
const slamSwitchIcon = "" + new URL("slam_switch-DrcJ-6n7.png", import.meta.url).href;
const switchsanityIcon = "" + new URL("switch-D6Og0W-L.png", import.meta.url).href;
const dropIcon = "" + new URL("beaver-hQ5QlB0C.png", import.meta.url).href;
const customStyles = {
  content: {
    backgroundColor: "#1b1b1f",
    color: "white"
  }
};
const GeneratorSettings = () => {
  const [isOpen, setOpen] = reactExports.useState(false);
  const [setSetting, setBarrier, setFastCheck] = useDonkStore(
    useShallow((state) => [state.setSetting, state.setBarrier, state.setFastCheck])
  );
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: openModal, title: "Generator Settings", children: "⚙️" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Modal,
      {
        isOpen,
        onRequestClose: closeModal,
        contentLabel: "Generator Settings",
        style: customStyles,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "modal-settings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pool", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Pool Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shops?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: shopIcon,
                storeKey: "poolShops",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tough Golden Bananas?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: toughBananaIcon,
                storeKey: "poolToughBananas",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Battle Crowns?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: crownIcon,
                storeKey: "poolCrowns",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Blueprints?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: blueprintIcon,
                storeKey: "poolBlueprints",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Boss Keys?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: keyIcon,
                storeKey: "poolKeys",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Banana Medals?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: bananaMedalIcon,
                storeKey: "poolBananaMedals",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Company Coins?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: companyCoinIcon,
                storeKey: "poolCompanyCoins",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Banana Fairies?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: fairyIcon,
                storeKey: "poolFairies",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Rainbow Coins?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: rainbowCoinIcon,
                storeKey: "poolRainbowCoins",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Melon Crates?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: melonIcon,
                storeKey: "poolCrates",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pearls & Bean?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: beanIcon,
                storeKey: "poolMisc",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enemy Drops?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dropIcon,
                storeKey: "poolDrops",
                prefix: "settings",
                updateItem: setSetting
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Consumable Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Medals for Jetpac?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CountSelector,
              {
                imgUrl: bananaMedalIcon,
                storeKey: "jetpacCount",
                prefix: "settings",
                setCount: setSetting,
                maxValue: 40
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bananas for Medal?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CountSelector,
              {
                imgUrl: bananaIcon,
                storeKey: "cbCount",
                prefix: "settings",
                setCount: setSetting,
                maxValue: 100
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Fairies for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Banana Fairy Island", children: "BFI" }),
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CountSelector,
              {
                imgUrl: fairyIcon,
                storeKey: "fairyCount",
                prefix: "settings",
                setCount: setSetting,
                maxValue: 20
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "World Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bananaports Active?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BananaportSelector, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Switchsanity On?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: switchsanityIcon,
                storeKey: "isSwitchsanity",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Progressive Slams?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: slamSwitchIcon,
                storeKey: "progressiveSlams",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Helm Starting Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(HelmSelector, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Auto-Finish Bonus Barrels?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: bonusIcon,
                storeKey: "autoBonus",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hard Shooting?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: hardShootIcon,
                storeKey: "hardShooting",
                prefix: "settings",
                updateItem: setSetting
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Location Shuffle Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Colored Bananas?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: bananaIcon,
                storeKey: "shuffleColoredBananas",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Kasplats?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: kasplatIcon,
                storeKey: "shuffleKasplats",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fairies?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: fairyIcon,
                storeKey: "shuffleFairies",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dirt Patches?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dirtIcon,
                storeKey: "shuffleDirt",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Battle Arenas?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: arenaIcon,
                storeKey: "shuffleArenas",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Melon Crates?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: melonIcon,
                storeKey: "shuffleCrates",
                prefix: "settings",
                updateItem: setSetting
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Shops?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: shopIcon,
                storeKey: "shuffleShops",
                prefix: "settings",
                updateItem: setSetting
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Fast Barrier Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Japes Tunnel Gates?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dkGunIcon,
                storeKey: "japesCoconutGates",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { gridColumnStart: 5 }, children: "Japes Hive Gate?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: tinyGunIcon,
                storeKey: "japesHiveGate",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Back Access?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: diddyMusicIcon,
                storeKey: "aztecBack",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec 5 Door Temple?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: rocketIcon,
                storeKey: "aztec5DoorTemple",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Llama Temple?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dkGunIcon,
                storeKey: "aztecLlamaTemple",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Factory Production Power?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dkMoveIcon,
                storeKey: "factoryProduction",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { gridColumnStart: 5 }, children: "Factory Testing Area?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: slamIcon,
                storeKey: "factoryTesting",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Lighthouse Area?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dkGunIcon,
                storeKey: "galleonLighthouse",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Lighthouse Power?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dkMoveIcon,
                storeKey: "galleonSeasick",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Outskirts Area?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: diddyGunIcon,
                storeKey: "galleonOutskirts",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Forest Beanstalk Area?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: beanIcon,
                storeKey: "forestBeanstalk",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Forest Owl Tree?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: lankyGunIcon,
                storeKey: "forestOwlTree",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Caves Igloo Insides?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: rocketIcon,
                storeKey: "cavesIgloo",
                prefix: "removeBarriers",
                updateItem: setBarrier
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Fast Check Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fast Factory Arcade?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: dkPadIcon,
                storeKey: "factoryArcade",
                prefix: "fastChecks",
                updateItem: setFastCheck
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { gridColumnStart: 5 }, children: "Fast Mermaid Pearls?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SimpleIcon,
              {
                imgUrl: pearlIcon,
                storeKey: "galleonMermaid",
                prefix: "fastChecks",
                updateItem: setFastCheck
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
};
const timeToString = (time) => {
  switch (time) {
    case 0:
      return "☼";
    case 1:
      return "☽";
    default:
      return "☼☽";
  }
};
const nextTime = (time) => {
  switch (time) {
    case 0:
      return 1;
    case 1:
      return 2;
    default:
      return 0;
  }
};
const prevTime = (time) => {
  switch (time) {
    case 0:
      return 2;
    case 1:
      return 0;
    default:
      return 1;
  }
};
const RuntimeSettings = () => {
  const forestTime = useForestTime();
  const galleonHighTide = useGalleonTideStartHigh();
  const [setSetting] = useDonkStore(useShallow((state) => [state.setSetting]));
  const handleClick = () => {
    setSetting("forestTime", nextTime(forestTime));
  };
  const handleContextClick = (e2) => {
    e2.preventDefault();
    setSetting("forestTime", prevTime(forestTime));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      setSetting("forestTime", nextTime(forestTime));
    } else {
      setSetting("forestTime", prevTime(forestTime));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "runtime-settings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GeneratorSettings, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Starting Tide" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: () => setSetting("galleonHighTide", !galleonHighTide), children: galleonHighTide ? "🠱" : "🠳" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Forest Time Active" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: handleClick, onContextMenu: handleContextClick, onWheel: handleWheel, children: timeToString(forestTime) })
  ] }) });
};
const SwitchsanitySwitch = (props) => {
  const [switchsanitySwitches, setSwitchsanity] = useDonkStore(
    useShallow((state) => [state.switchsanitySwitches, state.setSwitchsanity])
  );
  const setting = switchsanitySwitches[props.storeKey];
  const nextSwitch = (num) => {
    let target = num + 1;
    if (target == props.images.length) {
      target = 0;
    }
    return target;
  };
  const prevSwitch = (num) => {
    let target = num - 1;
    if (target < 0) {
      target = props.images.length - 1;
    }
    return target;
  };
  const handleNextLevel = () => {
    setSwitchsanity(props.storeKey, nextSwitch(setting));
  };
  const handlePrevLevel = (e2) => {
    e2.preventDefault();
    setSwitchsanity(props.storeKey, prevSwitch(setting));
  };
  const handleWheel = (e2) => {
    if (e2.deltaY >= 0) {
      setSwitchsanity(props.storeKey, nextSwitch(setting));
    } else {
      setSwitchsanity(props.storeKey, prevSwitch(setting));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      height: 24,
      width: 24,
      className: "simple-icon",
      src: props.images[setting],
      onClick: handleNextLevel,
      onContextMenu: handlePrevLevel,
      onWheel: handleWheel
    }
  ) });
};
const allKong = [dkKongIcon, diddyKongIcon, lankyKongIcon, tinyKongIcon, chunkyKongIcon];
const allGun = [dkGunIcon, diddyGunIcon, lankyGunIcon, tinyGunIcon, chunkyGunIcon];
const allMusic = [dkMusicIcon, diddyMusicIcon, lankyMusicIcon, tinyMusicIcon, chunkyMusicIcon];
const SwitchsanitySelector = () => {
  const isSwitchsanity = useIsSwitchsanity();
  const [switches] = useDonkStore(useShallow((state) => [state.switchsanitySwitches]));
  if (!isSwitchsanity) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "switchsanity-settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Switchsanity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Isles Rocket Barrel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.islesTrombone,
          storeKey: "islesTrombone",
          images: allMusic
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Isles Forest Lobby" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.islesForest,
          storeKey: "islesForest",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Isles Krem Top" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.islesMonkeyport,
          storeKey: "islesMonkeyport",
          images: [tinyPadIcon, dkPadIcon, lankyPadIcon]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Isles Helm Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.islesHelm,
          storeKey: "islesHelm",
          images: [
            chunkyPadIcon,
            dkMoveIcon,
            diddyMoveIcon,
            dkMusicIcon,
            diddyMusicIcon,
            lankyMusicIcon,
            tinyMusicIcon,
            chunkyMusicIcon
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Japes Hive Area" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchsanitySwitch, { currValue: switches.japesHive, storeKey: "japesHive", images: allGun }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Japes Rambi Cage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchsanitySwitch, { currValue: switches.japesRambi, storeKey: "japesRambi", images: allGun }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Japes Painting Room" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.japesPainting,
          storeKey: "japesPainting",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Japes Early Tunnel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchsanitySwitch, { currValue: switches.japesSide, storeKey: "japesSide", images: allGun }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Early Kasplat" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.aztecBlueprint,
          storeKey: "aztecBlueprint",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Back Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchsanitySwitch, { currValue: switches.aztecBack, storeKey: "aztecBack", images: allMusic }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Llama Temple 1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.aztecLlama1,
          storeKey: "aztecLlama1",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Llama Temple 2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.aztecLlama2,
          storeKey: "aztecLlama2",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Llama Temple 3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.aztecLlama3,
          storeKey: "aztecLlama3",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aztec Dead End" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.aztecDeadEnd,
          storeKey: "aztecDeadEnd",
          images: allKong
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Lighthouse Area" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.galleonLighthouse,
          storeKey: "galleonLighthouse",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Outskirts Area" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.galleonOutskirts,
          storeKey: "galleonOutskirts",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Galleon Cannon Game" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.galleonCannon,
          storeKey: "galleonCannon",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Forest Owl Tree" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.forestOwlTree,
          storeKey: "forestOwlTree",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Forest Beanstalk Area 1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.forestBean1,
          storeKey: "forestBean1",
          images: allGun
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Forest Beanstalk Area 2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchsanitySwitch,
        {
          currValue: switches.forestBean2,
          storeKey: "forestBean2",
          images: allGun
        }
      )
    ] })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MoveTable, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LevelTable, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ending, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RegionHints, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RuntimeSettings, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SwitchsanitySelector, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResetTracker, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Checklist, {})
  ] }) });
};
Modal.setAppElement("#root");
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
