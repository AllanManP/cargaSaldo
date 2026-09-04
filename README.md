curl --location --request POST 'https://api.integracioncore.test.amazon.bestado.cl/api/v1/withdrawal-deposit-api/withdrawal' \
--header 'canal: Caja_Vecina_IN' \
--header 'nombreFuncionalidad: Compra QR SuperApp' \
--header 'codigoFuncionalidad: PS002' \
--header 'etapaCanal: CARGO' \
--header 'ipCliente: 192.168.1.87' \
--header 'idDispositivo: 9087ce6f-9fa7-49d2-84d9-1becfd936475' \
--header 'codigoSesion: 352fc58b-97c8-43ad-b7ce-59a7ae12b607' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTVVBFUkFQUCIsInN1YiI6InRyYW5zYWN0aW9uIiwiYXVkIjoiYXdzLWFwaXMtY29yZSIsImp0aSI6IjA1YmZjYTE3N2NjM2ViZTk0MWIxNDk1YWM4ZGViYzk5IiwiY2FuYWwiOiIxNSIsImlhdCI6MTc4NzI0OTQ0MywiZXhwIjoxNzg3MjUyMTQzfQ.vhfQhxUzMjmeDH7bow9wexdXyzJuZ-4-wqVRf7fxBnY' \
--data-raw '{
    "idTransaction": "10000329072549700057",
    "mambuAccountNumber": "00271872748448",
    "mainframeAccountNumber": "37173521708",
    "accountType": "CTR",
    "clientRUT": 18610245,
    "clientDV": "2",
    "amount": 33200,
    "shortDescription": "COMPRA QR",
    "mediumDescription": "COMPRA QR",
    "longDescription": "COMPRA QR Pago de Servicios - Caja Vecina REGION METROPOLITANA,SANTIAGO,SANTIAGO 10000329072549700057|1935 14:25:00 2026-08-20",
    "currencyCode": "CLP",
    "accountingDate": "2026-08-21",
    "correlative": "9700043",
    "clientName": "Cliente prueba",
    "conventionCode": ""
}'
