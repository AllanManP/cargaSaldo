{
  "info": {
    "_postman_id": "df90fa23-383f-452a-843f-17a12c56cbe9",
    "name": "inquiryUserInfoForBE",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "36735831"
  },
  "item": [
    {
      "name": "inquiryUserInfoForBE",
      "item": [
        {
          "name": "inquiryUserInfoForBE",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Client-Id",
                "value": "2025011542070403828035"
              },
              {
                "key": "Request-Time",
                "value": "2022-12-12T12:12:12+04:00"
              },
              {
                "key": "Signature",
                "value": "algorithm=SHA256withRSA, keyVersion=0,signature=oL2zGaMZRt4UcA5ryApQD5V6PxnpRBxFg4t6jOcES9ErLJplX+CXQj9sPbxKDGO6uAPSYnZPIIHofVv93Qls+WaArh2Rp09EH+s+8Qm1KhC/kbwoo03sj7etfXecT4tmQlaxYmiU+w3FO+sZuiQcaYDIMRBTjaynJ7ogW8oSY18BOjnl/vfqDPnlvkIKWoe7lrBvIm99V3mkWX7oECb8wmJWzlPQ/2lWqj1Efc/57eiNxfFFW8EAAsG2dqW9MvqjI88pind8Kt7DS520D9kf9qbt6zEQcz8zOsutvsjq6CQP2lbCE48hn13HUgceen2eRHUF0SsetbBaOpiPD7wBbA=="
              },
              {
                "key": "Content-Type",
                "value": "application/json"
              },
              {
                "key": "Accept",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\"rut\": \"185388441\"}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{baseUrl}}/v1/users/inquiryUserInfoForBE",
              "host": [
                "{{baseUrl}}"
              ],
              "path": [
                "v1",
                "users",
                "inquiryUserInfoForBE"
              ]
            }
          },
          "response": [
            {
              "name": "200",
              "originalRequest": {
                "method": "POST",
                "header": [
                  {
                    "key": "Client-Id",
                    "value": "2025060387318644821853"
                  },
                  {
                    "key": "Request-Time",
                    "value": "2022-12-12T12:12:12+04:00"
                  },
                  {
                    "key": "Signature",
                    "value": ""
                  },
                  {
                    "key": "Content-Type",
                    "value": "application/json"
                  },
                  {
                    "key": "Accept",
                    "value": "application/json"
                  }
                ],
                "body": {
                  "mode": "raw",
                  "raw": "{\n  \"rut\": \"140302023\"\n}",
                  "options": {
                    "raw": {
                      "headerFamily": "json",
                      "language": "json"
                    }
                  }
                },
                "url": {
                  "raw": "{{baseUrl}}/v1/users/inquiryUserInfoForBE",
                  "host": [
                    "{{baseUrl}}"
                  ],
                  "path": [
                    "v1",
                    "users",
                    "inquiryUserInfoForBE"
                  ]
                }
              },
              "status": "OK",
              "code": 200,
              "_postman_previewlanguage": "json",
              "header": [
                {
                  "key": "Content-Type",
                  "value": "application/json"
                }
              ],
              "cookie": [],
              "body": "{\n  \"userInfo\": {\n    \"status\": \"ACTIVE\",\n    \"inactivityTag\": \"NO\",\n    \"kycLevel\": \"L3\",\n    \"rut\": \"140302023\",\n    \"userName\": {\n      \"firstName\": \"gQEmG\",\n      \"suffixName\": \"VEtJA\",\n      \"lastName\": \"QAMGH\"\n    },\n    \"email\": \"gggyu8fit@nnn.com\",\n    \"phoneNumber\": \"56968352741\",\n    \"gender\": \"F\",\n    \"birthday\": \"2022-03-21\",\n    \"isMerchant\": \"YES\",\n    \"merchantStatus\": \"ACTIVE\"\n  },\n  \"result\": {\n    \"resultCode\": \"SUCCESS\",\n    \"resultMessage\": \"Success\",\n    \"resultStatus\": \"S\"\n  }\n}"
            }
          ]
        }
      ]
    },
    {
      "name": "v1",
      "item": [
        {
          "name": "users",
          "item": []
        }
      ]
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "/"
    }
  ]
}
