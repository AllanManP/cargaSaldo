20260903111212800100166903000245641

2026031017608258436603

const content = `{
        "productCode": "51051000101000100040",
    "paymentRequestId": "${uuid()}",
    "paymentAuthCode": "281013029619414534960423",
    "paymentAmount": {
        "currency": "CLP",
        "value": "4520"
    },
    "order": {
    "orderDescription": "Compra Rutpay",
           "shopInfo": {
               "externalShopId": "999999"
              },
           
        "transactionAddress": ""       
    },
    "paymentNotifyUrl": "",
    "goods":
            {
                "referenceGoodsId": "BE0020",
                "goodsName": "BE0020",
                "goodsQuantity": "1",
                "goodsUnitAmount": {
                    "currency": "CLP",
                    "value": "4520"
                }
            }
    }`;
