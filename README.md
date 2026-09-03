CLID 2025090380655373791341
shop id 216660000000556362620
{
    "productCode": "51051000101000100040",
    "paymentRequestId": "F0541_559645_1_9",
    "paymentAuthCode": "281013022682037507267785",
    "paymentAmount": {
        "currency": "CLP",
        "value": "4520"
    },
    "order": {
    "orderDescription": "Compra Rutpay",
        "merchant": {
           "shopInfo": {
               "externalShopId": "999999",
              },
           "merchantMCC": "5912"
           },
        "goods": [
            {
                "referenceGoodsId": "BE0020",
                "goodsName": "BE0020",
                "goodsQuantity": "1",
                "goodsUnitAmount": {
                    "currency": "CLP",
                    "value": "4520"
                }
            }
        ] ,
        "transactionAddress": ""       
    },
    "paymentNotifyUrl": ""
}


Request:
2026-09-02 17:09:31,145 [/// - ] INFO  c.a.s.c.c.h.h.HttpServerHandler - [64406fad17883833711431012171,0,,,][HTTP] server receive message,httpMethod=POST,uuid=386322f5-25a9-4b61-91ff-72f351d7a187,URL:http://13.244.48.48/v1/payments/retailPay,message={

    "productCode": "51051000101000100040",

    "paymentRequestId": "F0541_559646_1_2",

    "paymentAuthCode": "281013025426910341541173",

    "paymentAmount": {

        "currency": "CLP",

        "value": "4520"

    },

    "order": {

    "orderDescription": "Compra Rutpay",

        "merchant": {

           "shopInfo": {

               "externalShopId": "999999"

              },

           "merchantMCC": "54125132"

           },

        "goods": [

            {

                "referenceGoodsId": "BE0020",

                "goodsName": "BE0020",

                "goodsQuantity": "1",

                "goodsUnitAmount": {

                    "currency": "CLP",

                    "value": "4520"

                }

            }

        ] ,

        "transactionAddress": ""       

    },

============================================================
wsldev@SH-AVDDRTV9-23:/mnt/c/Users/amanriq7/Documents/Ejemplo-integracion-main/Ejemplo-integracion-main$ node bscJerarquia.js
Payload String {
  payloadString: 'POST /v1/payments/retailPay\n' +
    '2025090380655373791341.2024-08-19T10:26:21-04:00.{\n' +
    '        "productCode": "51051000101000100040",\n' +
    '    "paymentRequestId": ""5ff1c079-e846-4f02-8c93-0cce02df8724"",\n' +
    '    "paymentAuthCode": "281013025426910341541173",\n' +
    '    "paymentAmount": {\n' +
    '        "currency": "CLP",\n' +
    '        "value": "4520"\n' +
    '    },\n' +
    '    "order": {\n' +
    '    "orderDescription": "Compra Rutpay",\n' +
    '        "merchant": {\n' +
    '           "shopInfo": {\n' +
    '               "externalShopId": "999999"\n' +
    '              },\n' +
    '           "merchantMCC": "54125132"\n' +
    '           },\n' +
    '        "goods": [\n' +
    '            {\n' +
    '                "referenceGoodsId": "BE0020",\n' +
    '                "goodsName": "BE0020",\n' +
    '                "goodsQuantity": "1",\n' +
    '                "goodsUnitAmount": {\n' +
    '                    "currency": "CLP",\n' +
    '                    "value": "4520"\n' +
    '                }\n' +
    '            }\n' +
    '        ] ,\n' +
    '        "transactionAddress": ""       \n' +
    '    },\n' +
    '    "paymentNotifyUrl": ""\n' +
    '    }'
}
================body content===========================
{
  content: '{\n' +
    '        "productCode": "51051000101000100040",\n' +
    '    "paymentRequestId": ""5ff1c079-e846-4f02-8c93-0cce02df8724"",\n' +
    '    "paymentAuthCode": "281013025426910341541173",\n' +
    '    "paymentAmount": {\n' +
    '        "currency": "CLP",\n' +
    '        "value": "4520"\n' +
    '    },\n' +
    '    "order": {\n' +
    '    "orderDescription": "Compra Rutpay",\n' +
    '        "merchant": {\n' +
    '           "shopInfo": {\n' +
    '               "externalShopId": "999999"\n' +
    '              },\n' +
    '           "merchantMCC": "54125132"\n' +
    '           },\n' +
    '        "goods": [\n' +
    '            {\n' +
    '                "referenceGoodsId": "BE0020",\n' +
    '                "goodsName": "BE0020",\n' +
    '                "goodsQuantity": "1",\n' +
    '                "goodsUnitAmount": {\n' +
    '                    "currency": "CLP",\n' +
    '                    "value": "4520"\n' +
    '                }\n' +
    '            }\n' +
    '        ] ,\n' +
    '        "transactionAddress": ""       \n' +
    '    },\n' +
    '    "paymentNotifyUrl": ""\n' +
    '    }'
}
================body content===========================

Firma válida: true
{
  headers: {
    'Client-Id': '2025090380655373791341',
    'Request-Time': '2024-08-19T10:26:21-04:00',
    Signature: 'algorithm=SHA256withRSA,keyVersion=0,signature=FtThc1rs141gDnZslaflIsmG4BXWLA2rQegSDNoOrPR5/uwfRMufOdvrDcgvRwpyj2/01TRjzBK/EjawYt/1Vwmibp4CX2wnYW6OwSGLwFj4v+Lypzw+WI9Fs5xUzhcY02CyNlmQ78ESstmmGVDd33BdiDkg2pAtTLXFIwGKSGf/kK69rq5akHnk9J38RDKOrvTPkmdwRw4eR63wEHVJHZgjaQDb51t2ugsjEglJb1/kry3iyFjGk8ptHdB59Ps9iltsw6+AeCXCcgjWj1JMIVco4s9kYTLpggEDRmMZ8TogQ+Q6L+GZ53sRmLQ7ObBbFbpiW84dife0C3PLUtCy5w==',
    'Content-Type': 'application/json'
  }
}
Error calling Cirrus API:
AxiosError: Request failed with status code 500
    at settle (/mnt/c/Users/amanriq7/Documents/Ejemplo-integracion-main/Ejemplo-integracion-main/node_modules/axios/dist/node/axios.cjs:2090:12)
    at IncomingMessage.handleStreamEnd (/mnt/c/Users/amanriq7/Documents/Ejemplo-integracion-main/Ejemplo-integracion-main/node_modules/axios/dist/node/axios.cjs:3207:11)
    at IncomingMessage.emit (node:events:529:35)
    at endReadableNT (node:internal/streams/readable:1400:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
    at Axios.request (/mnt/c/Users/amanriq7/Documents/Ejemplo-integracion-main/Ejemplo-integracion-main/node_modules/axios/dist/node/axios.cjs:4317:41)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'ERR_BAD_RESPONSE',
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [ 'xhr', 'http', 'fetch' ],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function [FormData]], Blob: [class Blob] },
    validateStatus: [Function: validateStatus],
    headers: Object [AxiosHeaders] {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Client-Id': '2025090380655373791341',
      'Request-Time': '2024-08-19T10:26:21-04:00',
      Signature: 'algorithm=SHA256withRSA,keyVersion=0,signature=FtThc1rs141gDnZslaflIsmG4BXWLA2rQegSDNoOrPR5/uwfRMufOdvrDcgvRwpyj2/01TRjzBK/EjawYt/1Vwmibp4CX2wnYW6OwSGLwFj4v+Lypzw+WI9Fs5xUzhcY02CyNlmQ78ESstmmGVDd33BdiDkg2pAtTLXFIwGKSGf/kK69rq5akHnk9J38RDKOrvTPkmdwRw4eR63wEHVJHZgjaQDb51t2ugsjEglJb1/kry3iyFjGk8ptHdB59Ps9iltsw6+AeCXCcgjWj1JMIVco4s9kYTLpggEDRmMZ8TogQ+Q6L+GZ53sRmLQ7ObBbFbpiW84dife0C3PLUtCy5w==',
      'User-Agent': 'axios/1.11.0',
      'Content-Length': '957',
      'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    method: 'post',
    url: 'https://desa-uat-cirrus.bancoestado.cl/v1/payments/retailPay',
    data: '"{\\n        \\"productCode\\": \\"51051000101000100040\\",\\n    \\"paymentRequestId\\": \\"\\"5ff1c079-e846-4f02-8c93-0cce02df8724\\"\\",\\n    \\"paymentAuthCode\\": \\"281013025426910341541173\\",\\n    \\"paymentAmount\\": {\\n        \\"currency\\": \\"CLP\\",\\n        \\"value\\": \\"4520\\"\\n    },\\n    \\"order\\": {\\n    \\"orderDescription\\": \\"Compra Rutpay\\",\\n        \\"merchant\\": {\\n           \\"shopInfo\\": {\\n               \\"externalShopId\\": \\"999999\\"\\n              },\\n           \\"merchantMCC\\": \\"54125132\\"\\n           },\\n        \\"goods\\": [\\n            {\\n                \\"referenceGoodsId\\": \\"BE0020\\",\\n                \\"goodsName\\": \\"BE0020\\",\\n                \\"goodsQuantity\\": \\"1\\",\\n                \\"goodsUnitAmount\\": {\\n                    \\"currency\\": \\"CLP\\",\\n                    \\"value\\": \\"4520\\"\\n                }\\n            }\\n        ] ,\\n        \\"transactionAddress\\": \\"\\"       \\n    },\\n    \\"paymentNotifyUrl\\": \\"\\"\\n    }"',
    allowAbsoluteUrls: true
  },
  request: <ref *1> ClientRequest {
    _events: [Object: null prototype] {
      abort: [Function (anonymous)],
      aborted: [Function (anonymous)],
      connect: [Function (anonymous)],
      error: [Function (anonymous)],
      socket: [Function (anonymous)],
      timeout: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: '957',
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: false,
    socket: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'desa-uat-cirrus.bancoestado.cl',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 10,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'desa-uat-cirrus.bancoestado.cl',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: [TLSWrap],
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [Circular *1],
      [Symbol(alpncallback)]: null,
      [Symbol(res)]: [TLSWrap],
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 9,
      [Symbol(kHandle)]: [TLSWrap],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: false,
      [Symbol(kSetKeepAlive)]: true,
      [Symbol(kSetKeepAliveInitialDelay)]: 60,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: [Object]
    },
    _header: 'POST /v1/payments/retailPay HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'Content-Type: application/json\r\n' +
      'Client-Id: 2025090380655373791341\r\n' +
      'Request-Time: 2024-08-19T10:26:21-04:00\r\n' +
      'Signature: algorithm=SHA256withRSA,keyVersion=0,signature=FtThc1rs141gDnZslaflIsmG4BXWLA2rQegSDNoOrPR5/uwfRMufOdvrDcgvRwpyj2/01TRjzBK/EjawYt/1Vwmibp4CX2wnYW6OwSGLwFj4v+Lypzw+WI9Fs5xUzhcY02CyNlmQ78ESstmmGVDd33BdiDkg2pAtTLXFIwGKSGf/kK69rq5akHnk9J38RDKOrvTPkmdwRw4eR63wEHVJHZgjaQDb51t2ugsjEglJb1/kry3iyFjGk8ptHdB59Ps9iltsw6+AeCXCcgjWj1JMIVco4s9kYTLpggEDRmMZ8TogQ+Q6L+GZ53sRmLQ7ObBbFbpiW84dife0C3PLUtCy5w==\r\n' +
      'User-Agent: axios/1.11.0\r\n' +
      'Content-Length: 957\r\n' +
      'Accept-Encoding: gzip, compress, deflate, br\r\n' +
      'Host: desa-uat-cirrus.bancoestado.cl\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype],
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'POST',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    joinDuplicateHeaders: undefined,
    path: '/v1/payments/retailPay',
    _ended: true,
    res: IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [TLSSocket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      joinDuplicateHeaders: undefined,
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      client: [TLSSocket],
      _consuming: false,
      _dumped: false,
      req: [Circular *1],
      responseUrl: 'https://desa-uat-cirrus.bancoestado.cl/v1/payments/retailPay',
      redirects: [],
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 20,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'desa-uat-cirrus.bancoestado.cl',
    protocol: 'https:',
    _redirectable: Writable {
      _writableState: [WritableState],
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      _options: [Object],
      _ended: true,
      _ending: true,
      _redirectCount: 0,
      _redirects: [],
      _requestBodyLength: 957,
      _requestBodyBuffers: [],
      _onNativeResponse: [Function (anonymous)],
      _currentRequest: [Circular *1],
      _currentUrl: 'https://desa-uat-cirrus.bancoestado.cl/v1/payments/retailPay',
      [Symbol(kCapture)]: false
    },
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      accept: [Array],
      'content-type': [Array],
      'client-id': [Array],
      'request-time': [Array],
      signature: [Array],
      'user-agent': [Array],
      'content-length': [Array],
      'accept-encoding': [Array],
      host: [Array]
    },
    [Symbol(errored)]: null,
    [Symbol(kHighWaterMark)]: 16384,
    [Symbol(kRejectNonStandardBodyWrites)]: false,
    [Symbol(kUniqueHeaders)]: null
  },
  response: {
    status: 500,
    statusText: 'Internal Server Error',
    headers: Object [AxiosHeaders] {
      'content-length': '8',
      date: 'Thu, 03 Sep 2026 18:36:22 GMT',
      connection: 'close',
      'server-timing': 'cdn-cache; desc=MISS, edge; dur=8, origin; dur=523, ak_p; desc="1788460581789_399842633_1078083008_53168_13041_0_8_-";dur=1',
      'strict-transport-security': 'max-age=86400 ; includeSubDomains ; preload',
      'set-cookie': [Array]
    },
    config: {
      transitional: [Object],
      adapter: [Array],
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: [Object],
      validateStatus: [Function: validateStatus],
      headers: [Object [AxiosHeaders]],
      method: 'post',
      url: 'https://desa-uat-cirrus.bancoestado.cl/v1/payments/retailPay',
      data: '"{\\n        \\"productCode\\": \\"51051000101000100040\\",\\n    \\"paymentRequestId\\": \\"\\"5ff1c079-e846-4f02-8c93-0cce02df8724\\"\\",\\n    \\"paymentAuthCode\\": \\"281013025426910341541173\\",\\n    \\"paymentAmount\\": {\\n        \\"currency\\": \\"CLP\\",\\n        \\"value\\": \\"4520\\"\\n    },\\n    \\"order\\": {\\n    \\"orderDescription\\": \\"Compra Rutpay\\",\\n        \\"merchant\\": {\\n           \\"shopInfo\\": {\\n               \\"externalShopId\\": \\"999999\\"\\n              },\\n           \\"merchantMCC\\": \\"54125132\\"\\n           },\\n        \\"goods\\": [\\n            {\\n                \\"referenceGoodsId\\": \\"BE0020\\",\\n                \\"goodsName\\": \\"BE0020\\",\\n                \\"goodsQuantity\\": \\"1\\",\\n                \\"goodsUnitAmount\\": {\\n                    \\"currency\\": \\"CLP\\",\\n                    \\"value\\": \\"4520\\"\\n                }\\n            }\\n        ] ,\\n        \\"transactionAddress\\": \\"\\"       \\n    },\\n    \\"paymentNotifyUrl\\": \\"\\"\\n    }"',
      allowAbsoluteUrls: true
    },
    request: <ref *1> ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: '957',
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [TLSSocket],
      _header: 'POST /v1/payments/retailPay HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Content-Type: application/json\r\n' +
        'Client-Id: 2025090380655373791341\r\n' +
        'Request-Time: 2024-08-19T10:26:21-04:00\r\n' +
        'Signature: algorithm=SHA256withRSA,keyVersion=0,signature=FtThc1rs141gDnZslaflIsmG4BXWLA2rQegSDNoOrPR5/uwfRMufOdvrDcgvRwpyj2/01TRjzBK/EjawYt/1Vwmibp4CX2wnYW6OwSGLwFj4v+Lypzw+WI9Fs5xUzhcY02CyNlmQ78ESstmmGVDd33BdiDkg2pAtTLXFIwGKSGf/kK69rq5akHnk9J38RDKOrvTPkmdwRw4eR63wEHVJHZgjaQDb51t2ugsjEglJb1/kry3iyFjGk8ptHdB59Ps9iltsw6+AeCXCcgjWj1JMIVco4s9kYTLpggEDRmMZ8TogQ+Q6L+GZ53sRmLQ7ObBbFbpiW84dife0C3PLUtCy5w==\r\n' +
        'User-Agent: axios/1.11.0\r\n' +
        'Content-Length: 957\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: desa-uat-cirrus.bancoestado.cl\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/v1/payments/retailPay',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'desa-uat-cirrus.bancoestado.cl',
      protocol: 'https:',
      _redirectable: [Writable],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(errored)]: null,
      [Symbol(kHighWaterMark)]: 16384,
      [Symbol(kRejectNonStandardBodyWrites)]: false,
      [Symbol(kUniqueHeaders)]: null
    },
    data: 'LGW01002'
  },
  status: 500
}
===============================================
const axios = require('axios');
const { error } = require('console');
const crypto = require('crypto');
const fs = require('fs');
const util = require('util');
const QRCode = require('qrcode'); 
const uuid = require('uuid-v4');
 
// Pem COMPRAAQUIII
// const PRI_KEY_FS_UTF8 = fs.readFileSync('rsa_keys/compraaqui_rsa_private_key.pem', 'utf8');
// const PUB_KEY_FS_UTF8 = fs.readFileSync('rsa_keys/compraaqui_rsa_public_key.pem', 'utf8');
 
// Pem Daniel confirmar el clientId (?)
const PRI_KEY_FS_UTF8 = fs.readFileSync('./rsa_keys/sample_rsa_private_key.pem', 'utf8');
const PUB_KEY_FS_UTF8 = fs.readFileSync('./rsa_keys/sample_rsa_public_key.pem', 'utf8');
// Función para firmar datos (equivalente a la función sign en Java)
function sign(payload, privateKey) {
    try {
        //console.log("================payLoad content===========================");
        //console.log({ payload });
        //console.log("================payLoad content===========================\n");
        //const sign = crypto.createSign('SHA256');
        const sign = crypto.createSign('RSA-SHA256');
        sign.update(payload);
        sign.end();
        const signature = sign.sign(
            {
                key: privateKey
            },
            'base64'
        );
        return signature;
    } catch (error) {
        throw new Error(error);
    }
}
// Función para verificar la firma
function verifySignature(payload, signature, publicKey, algorithm = 'SHA256withRSA') {
    try {
        //const verify = crypto.createVerify('SHA256');
        const verify = crypto.createVerify('RSA-SHA256');
        verify.update(payload);
        verify.end();
        const isValid = verify.verify(publicKey, signature, 'base64');
        return isValid;
    } catch (error) {
        throw new Error(error);
    }
}
// Función principal
function main() {
    //ClientId
    const clientId = "2025090380655373791341";
    const httpMethod = "POST";
    const uriWithQueryString = "/v1/payments/retailPay";
    const timeString = "2024-08-19T10:26:21-04:00";
    const content = `{
        "productCode": "51051000101000100040",
    "paymentRequestId": ""${uuid()}"",
    "paymentAuthCode": "281013025426910341541173",
    "paymentAmount": {
        "currency": "CLP",
        "value": "4520"
    },
    "order": {
    "orderDescription": "Compra Rutpay",
        "merchant": {
           "shopInfo": {
               "externalShopId": "999999"
              },
           "merchantMCC": "54125132"
           },
        "goods": [
            {
                "referenceGoodsId": "BE0020",
                "goodsName": "BE0020",
                "goodsQuantity": "1",
                "goodsUnitAmount": {
                    "currency": "CLP",
                    "value": "4520"
                }
            }
        ] ,
        "transactionAddress": ""       
    },
    "paymentNotifyUrl": ""
    }`;
    // La misma línea importante de Java, para construir el payload
    //const payload = `${httpMethod} ${uriWithQueryString}\n${clientId}.${timeString}.${content}`;
    //Codigo Java ->>>>> exmaple entegado /// arriba no queda igual q el output del java de jdoodle el primer object
    //String payload = String.format("%s %s\n%s.%s.%s", httpMethod, uriWithQueryString, clientId, timeString, content);
    // Formatear la cadena para firmar
    const payloadString = util.format('%s %s\n%s.%s.%s',
        httpMethod,
        uriWithQueryString,
        clientId,
        timeString,
        content,
    );
    console.log('Payload String',{ payloadString });
 
    // Firmamos el payload
    const signResult = sign(payloadString, PRI_KEY_FS_UTF8);
    console.log("================body content===========================");
    console.log({ content });
    console.log("================body content===========================\n");
    //console.log("================signature content===========================");
    //console.log({ signResult });
    //console.log("================signature content===========================\n");
    // Verificamos la firma
    const isSignatureValid = verifySignature(payloadString, signResult, PUB_KEY_FS_UTF8);
    console.log("Firma válida:", isSignatureValid);
 
    //POST REQUEST TO CIRRUS
    const API_CIRRUS_URI_CREATE_QR = "https://desa-uat-cirrus.bancoestado.cl/v1/payments/retailPay";
    const headers = {
        'Client-Id': clientId,
        'Request-Time': timeString,
        'Signature': `algorithm=SHA256withRSA,keyVersion=0,signature=${signResult}`,
        'Content-Type': 'application/json'
    };
    console.log({ headers });
    axios.post(
        API_CIRRUS_URI_CREATE_QR,
        content, {
        headers: headers
    })
        .then(response => {
            console.log("Response from Cirrus API:");
            console.log(response.data);
            const qrCodeString = response.data.qrCode;
            generateQRCode(qrCodeString);
            //const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${response.data.qrCode}`;
        })
        .catch(error => {
            console.error("Error calling Cirrus API:");
            console.error(error);
        });
    }

        function generateQRCode(qrCodeString) {
            console.error(qrCodeString)
            return QRCode.toString(qrCodeString, {
               errorCorrectLevel: '',
               type: 'terminal',
               renderer: {
                width: '10',
                height: '10'
              }
             }, 
              
            function (err, url) {
              if (err) {
                console.error(err);
                console.error('Error Status:', err.response.status);
                console.error('Error Data:', err.response.data);
                //console.error('Error Headers:', err.response.headers);
                } else {
                console.log(url);
                //return url;
                // console.error('Error Message:', err.message);
                  // Si se quiere guardar el qr como imagen
                  // qrCode.toFile('qr-code.png');
              }
            });
          }
 

// Ejecutar la función principal
main()

    "paymentNotifyUrl": ""

}
 
