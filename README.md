{
    "idTransaction": "{{transactionID}}",
    "mambuAccountNumber": "00274251623861",
    "mainframeAccountNumber": "02571309281",
    "accountType": "CTR",
    "clientRUT": 18502788,
    "clientDV": "0",
    "amount": 1000000,
    "shortDescription": "DEPOSITO PRUEBA",
    "mediumDescription": "DEPOSITO PRUEBA",
    "longDescription": "DEPOSITO PRUEBA {{time}} {{date}} {{transactionID}}",
    "currencyCode": "CLP",
    "accountingDate": "{{accountDate}}",
    "correlative": "{{correlative}}",
    "clientName": "Cliente prueba",
    "conventionCode": "1"
}


{
    "code": 500,
    "message": "error getting deposit",
    "businessMessage": "error getting deposit",
    "typeResponse": "O",
    "businessCode": "WDA.EDT.0001",
    "payload": {
        "returnCode": "900",
        "returnMessage": "TRX NO VALIDA EN FUNCIONALIDAD",
        "dateTransaction": "2026-10-14T15:57:40Z"
    }
}


curl --location --request POST 'https://api.integracioncore.test.amazon.bestado.cl/api/v1/withdrawal-deposit-api/deposit' \
--header 'canal: SuperAPP_IN' \
--header 'nombreFuncionalidad: Abono QR Super App' \
--header 'codigoFuncionalidad: PQR15' \
--header 'etapaCanal: DEPOSITO' \
--header 'ipCliente: 192.168.1.87' \
--header 'idDispositivo: 9087ce6f-9fa7-49d2-84d9-1becfd936475' \
--header 'codigoSesion: 352fc58b-97c8-43ad-b7ce-59a7ae12b607' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTVVBFUkFQUCIsInN1YiI6InRyYW5zYWN0aW9uIiwiYXVkIjoiYXdzLWFwaXMtY29yZSIsImp0aSI6ImQ2ODE0OTk1YWI2ODc4NWUwMDcyMTA2NTU3NjcwY2NhIiwiY2FuYWwiOiIxNSIsImlhdCI6MTc5MTk5MzAzOCwiZXhwIjoxNzkxOTk1NzM4fQ.HYiNWT5I8JVams07GTc6N1OTNR1e0trjMWWOL_1WzZY' \
--data-raw '{
    "idTransaction": "15000329072009700006",
    "mambuAccountNumber": "00274251623861",
    "mainframeAccountNumber": "02571309281",
    "accountType": "CTR",
    "clientRUT": 18502788,
    "clientDV": "0",
    "amount": 1000000,
    "shortDescription": "DEPOSITO PRUEBA",
    "mediumDescription": "DEPOSITO PRUEBA",
    "longDescription": "DEPOSITO PRUEBA 12:57:38 2026-10-14 15000329072009700006",
    "currencyCode": "CLP",
    "accountingDate": "2026-10-14",
    "correlative": "9700006",
    "clientName": "Cliente prueba",
    "conventionCode": "1"
}'
