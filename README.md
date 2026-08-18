curl --location --request POST 'https://desa-test1-cirrus.bancoestado.cl/v1/users/inquiryUserInfoForBE' \
--header 'Client-Id: 2025121637803278687437' \
--header 'Request-Time: 2024-07-13T15:28:30+08:00' \
--header 'Agent-Token: <string>' \
--header 'Signature: algorithm=SHA256withRSA,keyVersion=0,signature=123' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Cookie: _abck=7808D0930F6F55D14CF0465318C6DC17~-1~YAAQ8EzbFydilPifAQAA3b2cFRA7QqaAX3GYYAjx38fhiEZMiV44jxbqatpnsKatoedjiqsHuwoC/EsdwdduydolgMPX8zR7PS4+nkncRAWfGM6CZH5A3OGL3Upn2V9FM+OsWHsT5kTKDDz12q653x11c9sEIgr9CDH39h0NjZ3DRHGih1FQB2BIr+ee6B1dPs4NR3210VwW+96Oa55JKmRRnVrtnXZtvzwma8uFNdkVIjma2m+36CDZAQQsoS/2uTJzHf7Zw3fDpvL48MhOtlQBCUyi1qw4ocxSiaXRJ6c1ZKw8K3aDWlTq6Rn/1QStXFDhNgUufP5+NXuxXTWksFLu7xU2sFtzAY2f2IYgnehhTbZxCzmr7MqNDK/BSMBZQbAzJKl3eU7AbS8Wh7ZwywcUjVRi1tcof6CtWAeNWXL2YNBHgIvhdcNW4anG80HLlOFqyvjgQljiKBxK52xQeh6L41nKM4o=~-1~-1~-1~-1~-1; bm_sz=9A1459E8A59964C340E544972BF17A4E~YAAQ8EzbFyhilPifAQAA3b2cFQATIj1cWJernghUVweZnonMlr+MjTBv5Myi88FvBdInLAi44Yv3qVT/eQcXYOV9tcSqfDLl4x5NioqQdPlNHmUQ/o90WnvP673FJWNBLplzizZDbnRwTNJHAJ2FFK7wLmSRbRAgQWiIwpdQjBUqsSEhPoM/k9x29kBo6zG0nhAa2VwzN4EIWRtdVY2MLmx5Hfrsk4yVAopdjXtnQBLtcNRHSXs9ToDcOo9RZuqURl+xeahxDAwCSOR8yncf055rIGFSUx51HPjkGxoDocKNkMZg257R1wnk32p/655qH8oOce7XyiJfktAalXhdQSSNpOcWiSHh5Dm3RfZWCsqwrg==~3487043~3553077' \
--data-raw '{
    "rut": "186102452"
}'

Respuesta:
{
    "result": {
        "resultCode": "SYSTEM_ERROR",
        "resultStatus": "U",
        "resultMessage": "System error."
    }
}
