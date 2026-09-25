00020126620021cl.bancoestado.cirrus013328101304202609251606115095228098063047377


{
            "productCode": "51051000101000100054",
            "paymentNotifyUrl": f"{public_url}/Webhook",
            "paymentRedirectUrl": "" + url,
            "order": {
                "originalOrderAmount": {"currency": "CLP","value": str(amountLink)},
                "orderAmount": {"currency": "CLP","value": "" + amountLink},
                "merchantTransId": str(merchantTransId),
                "orderTitle": "Compra Rutpay Website Cashier Mobile",
                "transactionAddress": "Casa 123"
            }
        }
