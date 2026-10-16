
curl --location --request POST 'https://desa-test1-cirrus.bancoestado.cl/v1/payments/createQrOrder' \
--header 'Client-Id: 2026042072091786841537' \
--header 'Request-Time: 2026-09-25T16:00:30+08:00' \
--header 'Agent-Token: <string>' \
--header 'Signature: algorithm=SHA256withRSA,keyVersion=0,signature=123' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Cookie: _abck=7808D0930F6F55D14CF0465318C6DC17~-1~YAAQBGwQAi+YTjKhAQAAJFAhRhD7lGQRZLFNpPVzfiaDzPOiruyLjJBXuhP61FsDCFW4Cx60TMpLTLu8j80SRX3NfIX5SDPpUU8effKi9LnMSDVJgvMLXmQb2Xc5vLnnQq0zCyuWtibTju76oe+TBdGDCa3yHOo+3Gm8gB7ZUCveYvfE+TjJy1oBKpoXegsZN8qJFs4Qy1uMrJUFiSC1mY++WWqw2domWICgLS2Y/1Ra/+poFlLczeHFBoWYTiZX4SV2IBm4/Z6agx356JoIEjRfHEqESZPahnuCJ59BbMcCYdQVkokVViQ0zGPA1DCxVoigbqrs5CROOmdFmwerw3e/P4RR3jXENk9OGUi8tXtA5wgaRKiowMp+2X7LB6stH2eGeH+4AJPdOObpdu/M7qspkyMFLVaVP+/JlNOA1zi/96bT3fUb6Hyf8cdWFOYJbssDSWC2rHIgLGnaxv46tpAtY0OX92A=~-1~-1~-1~-1~-1; bm_sz=E948466CA10ECDAA041E0C549FC74A80~YAAQBGwQAjCYTjKhAQAAJFAhRgHqzhuvRSzWQ0uTHvr8sn1yGoWAGl46l2dfLjQijouw3w9zDJWX4JpVye1JUnV8+qoQg6Rx/OpK3qgwK9uO7IejL8haJPzaJ24V0Y3xtqsMOMSrY9oQNxleyZWJ5mrhno955GVM1EW1k5T76LcfiXltuak7ARutjEOuTAW1jmyB+BQbq+cYTlKdw6z6JgIU36Dyfy7U4kmerpcNusrzB7D08oWynD9+SUvE7s6/Tj/EBYvvCgjzeXu5UNgQF5hBbdrelKTd5+C4NEqUD7Xg3rEyp/XBNb1WM7lz0FT10u6CeuUzjrU85qDyb2UMEEN/Ii02rao0Ulwi5Q4q5Owotw==~3750198~4277560' \
--data-raw '{
    "productCode": "51051000101000100048",
    "bizType": "ORDER_CODE",
    "codeType": "EMVCo",
    "paymentNotifyUrl": "http://10.18.0.102/mock/api/v1/payments/notifyPayment.htm",
    "order": {
        "orderAmount": {
            "currency": "CLP",
            "value": "500002"
        },
        "merchantTransId": "111111123",
        "orderTitle": "Pago de servicios",
        "transactionAddress": "Alameda 800, Santiago|1935"
    }
}'
