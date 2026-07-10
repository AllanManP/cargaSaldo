C:\Users\amanriq7\Documents>node CargaSaldo.js
node:internal/modules/cjs/loader:1520
  throw err;
  ^

Error: Cannot find module 'jsonwebtoken'
Require stack:
- C:\Users\amanriq7\Documents\CargaSaldo.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1517:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1122:12)
    at Module._load (node:internal/modules/cjs/loader:1294:5)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1617:12)
    at require (node:internal/modules/helpers:153:16)
    at Object.<anonymous> (C:\Users\amanriq7\Documents\CargaSaldo.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1871:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'C:\\Users\\amanriq7\\Documents\\CargaSaldo.js' ]
}

Node.js v24.18.0
