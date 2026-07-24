Bearer token: 823e4567-e89b-12d3-a456-426614174000

curl --location 'https://cloud-suc-interno-qa.banco.bestado.cl/api/v1/tokeninterno-api/generaToken' \
--header 'rutcliente: 190058107' \
--header 'etapa: Obtener Metodos Autorizacion' \
--header 'xTrackID: e2e0dce2-359a-4946-b61d-d8f9824984a3' \
--header 'ipCliente: 181.226.61.157' \
--header 'operacion: GetDatosCliente' \
--header 'codigosesion: 2c9bd9a8-cbe9-4f85-9b13-f1a3caba35b5' \
--header 'nombreAplicacion: EnrolamientoSuperAPP' \
--header 'tipoArtefacto: BFF' \
--header 'nombreArtefacto: XXX-XXXX-bff' \
--header 'dispositivo: Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36' \
--header 'funcionalidad: Enrolamiento superAPP' \
--header 'time: 1712606953821' \
--header 'id: de7ba310-f5e3-11ee-99e3-27e4ec8f78b3' \
--header 'canal: 09' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicnV0Q29uc3VsdGEiOiIxOTAwNTgxMDciLCJpYXQiOjk1MTYyMzkwMjIsImNvZGlnb3Nlc2lvbiI6IjJjOWJkOWE4LWNiZTktNGY4NS05YjEzLWYxYTNjYWJhMzViNSIsImV4cCI6OTUxNjIzOTAyMn0.2fcSx8pcTUhHyz6f6w7p4F3jVIASODktPmJ1W8Gf8zE' \
--header 'Cookie: _csrf=Gz1s_be-RXx99zNFkrXDHroV' \
--data '{
    "rutToken": "190058107"
}'


---

curl --location 'https://cloud-suc-interno-qa.banco.bestado.cl/api/v1/replicaclientes-api/resumen-clientes' \
--header 'rutPersonaNatural: 190058107' \
--header 'etapa: Obtener Metodos Autorizacion' \
--header 'xTrackID: e2e0dce2-359a-4946-b61d-d8f9824984a3' \
--header 'ipCliente: 181.226.61.157' \
--header 'operacion: GetDatosCliente' \
--header 'codigosesion: 2c9bd9a8-cbe9-4f85-9b13-f1a3caba35b5' \
--header 'nombreAplicacion: EnrolamientoSuperAPP' \
--header 'tipoArtefacto: BFF' \
--header 'nombreArtefacto: XXX-XXXX-bff' \
--header 'dispositivo: Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36' \
--header 'funcionalidad: Enrolamiento superAPP' \
--header 'time: 1712606953821' \
--header 'id: de7ba310-f5e3-11ee-99e3-27e4ec8f78b3' \
--header 'canal: 09' \
--header 'sinproductos: false' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydXRDb25zdWx0YSI6IjE5MDA1ODEwNyIsImNvZGlnb3Nlc2lvbiI6IjJjOWJkOWE4LWNiZTktNGY4NS05YjEzLWYxYTNjYWJhMzViNSIsImlhdCI6MTc4NDA0Mzc2MSwiZXhwIjoxNzg0MDQ3OTYxfQ.GD8PeAQjdY7Hvi7wVzL9vj9Whygzat-R8yblqse66ew' \
--header 'Cookie: _csrf=Gz1s_be-RXx99zNFkrXDHroV' \
--data '{
    "rutcliente": "190058107"
}'


pre request:
const clientRut = pm.environment.get("clientRut");
const clientDv = pm.environment.get("clientDv");

pm.environment.set(
    "rut",
    `${clientRut}${clientDv}`
);

-----


curl --location 'https://api.integracioncore.test.amazon.bestado.cl/api/v1/access-keys-api/auth' \
--header 'canal: 15' \
--header 'access-api-key: ff92d31b-5023-4099-91d4-1a9414c14f6b' \
--header 'iss: SUPERAPP' \
--header 'aud: aws-apis-core' \
--header 'sub: transaction'

script post:
      pm.test("GET JWT OK", function () {
            var jsonData = pm.response.json();
                  pm.environment.set("accessToken", ''+jsonData.payload.accessToken);
                  pm.environment.set("refreshToken", ''+jsonData.payload.refreshToken);
                 pm.expect(pm.response.code).to.be.oneOf([200, 201]);
              });

-----

curl --location 'https://{{host_api}}/api/v1/withdrawal-deposit-api/deposit' \
-header 'Authorization: Bearer {{accessToken}}'
--header 'canal: SuperAPP_IN' \
--header 'nombreFuncionalidad: Abono QR Super App' \
--header 'codigoFuncionalidad: PQR15' \
--header 'etapaCanal: DEPOSITO' \
--header 'ipCliente: 192.168.1.87' \
--header 'idDispositivo: 9087ce6f-9fa7-49d2-84d9-1becfd936475' \
--header 'codigoSesion: 352fc58b-97c8-43ad-b7ce-59a7ae12b607' \
--header 'Content-Type: application/json' \
--data '{
    "idTransaction": "{{transactionID}}",
    "mambuAccountNumber": "{{mambuAccountNumber}}",
    "mainframeAccountNumber": "{{mainframeAccountNumber}}",
    "accountType": "CTV",
    "clientRUT": {{clientRut}},
    "clientDV": "{{clientDv}}",
    "amount": 1000000,
    "shortDescription": "DEPOSITO PRUEBA",
    "mediumDescription": "DEPOSITO PRUEBA",
    "longDescription": "DEPOSITO PRUEBA {{time}} {{date}} {{transactionID}}",
    "currencyCode": "CLP",
    "accountingDate": "{{accountDate}}",
    "correlative": "{{correlative}}",
    "clientName": "Cliente prueba",
    "conventionCode": "1"
}'

{
console.clear();
const calculaFechaContable = (fecha) => {
    let fechaContable = new Date(fecha);
    let opciones = { timeZone: 'America/Santiago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    let hora = fechaContable.toLocaleTimeString('es-CL', opciones);
    
    if(hora >= '14:00:00'){
        fechaContable = new Date(fechaContable.setDate(fechaContable.getDate()+1))
    }
    while (fechaContable.getDay() === 6 || fechaContable.getDay() === 0) {
        fechaContable = new Date(fechaContable.setDate(fechaContable.getDate()+1))
    }
    return fechaContable.toISOString().split('T')[0];
}

let correlative = pm.environment.get("correlative");
console.log(correlative)
if(!correlative || isNaN(correlative)){
    correlative= 9700000
}else{
    correlative=parseInt(correlative,10);
}
let newCorrelative = correlative+1;
let fechaActual = new Date();
let fechaFormateada = fechaActual.toISOString().split('T')[0];
let opciones = { timeZone: 'America/Santiago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
let hora = fechaActual.toLocaleTimeString('es-CL', opciones);

console.log(`valor de la fecha: ${fechaFormateada}`);   
console.log(`valor de la hora: ${hora}`); 
console.log(`nuevo valor correlativo: ${pm.environment.get("correlative")}`);
console.log(`nuevo valor correlativo: ${pm.environment.get("transactionID")}`);
let fechaContable = calculaFechaContable(fechaActual);

pm.environment.set("correlative", newCorrelative);
pm.environment.set("transactionID", `1500032907200${newCorrelative}`);
pm.environment.set("accountDate",fechaContable);
pm.environment.set("time",hora);
pm.environment.set("date",fechaFormateada);
}

00020126620021cl.bancoestado.cirrus013328101304202607241232018118176494763049D8B
