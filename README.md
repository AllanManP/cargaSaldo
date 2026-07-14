curl --location 'https://cloud-suc-interno-qa.banco.bestado.cl/api/v1/tokeninterno-api/generaToken' \
--header 'rutcliente: {{rut}}' \
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
--data '{"rutToken":"{{rut}}"}'


---

curl --location 'https://cloud-suc-interno-qa.banco.bestado.cl/api/v1/replicaclientes-api/resumen-clientes' \
--header 'rutPersonaNatural: {{rut}}' \
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
--data '{"rutcliente":"{{rut}}"}'

-----


