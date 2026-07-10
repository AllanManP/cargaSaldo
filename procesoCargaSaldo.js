const jwt = require("jsonwebtoken");
const https = require("https");
const axios = require("axios");
const readline = require("readline");
const agent = new https.Agent({ rejectUnauthorized: false });
const secretKey = "823e4567-e89b-12d3-a456-426614174000";
const HOST_CORE = "https://api.integracioncore.test.amazon.bestado.cl";
const MONTO_DEPOSITO = 1000000;
let correlative = 9700000;

const listaruts = [
  { rut: "19005810", dv: "7" },
  { rut: "19006643", dv: "6" },
  { rut: "17500937", dv: "K" }
];

function preguntar(texto) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(texto, (respuesta) => {
      rl.close();
      resolve(respuesta.trim().toUpperCase());
    });
  });
}
function calculaFechaContable(fecha) {
  let fechaContable = new Date(fecha);
  const opciones = {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const hora = fechaContable.toLocaleTimeString("es-CL", opciones);
  if (hora >= "14:00:00") {
    fechaContable.setDate(fechaContable.getDate() + 1);
  }
  while (fechaContable.getDay() === 6 || fechaContable.getDay() === 0) {
    fechaContable.setDate(fechaContable.getDate() + 1);
  }
  return fechaContable.toISOString().split("T")[0];
}
function generarDatosDeposito() {
  correlative++;
  const ahora = new Date();
  const fecha = ahora.toISOString().split("T")[0];
  const hora = ahora.toLocaleTimeString("es-CL", {
    timeZone: "America/Santiago",
    hour12: false,
  });
  return {
    transactionID: `1500032907200${correlative}`,
    correlative: correlative.toString(),
    accountDate: calculaFechaContable(ahora),
    fecha,
    hora,
  };
}

async function obtenerTokenSalesforce(clientRut, clientDv, codigosesion) {
  const payload = {
    sub: "1234567890",
    rutConsulta: `${clientRut}${clientDv}`,
    iat: 1234557,
    codigosesion: codigosesion,
    exp: 123467899876543,
  };
  const token = jwt.sign(payload, secretKey);
  let config = {
    method: "POST",
    // maxBodyLength: Infinity,
    url: "https://cloud-suc-interno-qa.banco.bestado.cl/api/v1/tokeninterno-api/generaToken",
    headers: {
      rutcliente: `${clientRut}${clientDv}`,
      etapa: "Obtener Metodos Autorizacion",
      xTrackID: "e2e0dce2-359a-4946-b61d-d8f9824984a3",
      // 'ipCliente': '181.226.61.157',
      operacion: "GetDatosCliente",
      codigosesion: codigosesion,
      nombreAplicacion: "EnrolamientoSuperAPP",
      tipoArtefacto: "BFF",
      // 'nombreArtefacto': 'XXX-XXXX-bff',
      // 'dispositivo': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36',
      funcionalidad: "Enrolamiento superAPP",
      // 'time': '1712606953821',
      id: "de7ba310-f5e3-11ee-99e3-27e4ec8f78b3",
      canal: "09",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { rutToken: `${clientRut}${clientDv}` },
    httpsAgent: agent,
  };
  // console.log(data,config)
  const response = await axios.request(config);
  // console.log(response.data);
  return response.data.AccessToken;
}
async function obtenerDatosCliente(token, clientRut, clientDv, codigosesion) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://cloud-suc-interno-qa.banco.bestado.cl/api/v1/replicaclientes-api/resumen-clientes",
    headers: {
      rutPersonaNatural: `${clientRut}${clientDv}`,
      etapa: "Obtener Metodos Autorizacion",
      xTrackID: "e2e0dce2-359a-4946-b61d-d8f9824984a3",
      ipCliente: "181.226.61.157",
      operacion: "GetDatosCliente",
      codigosesion: codigosesion,
      nombreAplicacion: "EnrolamientoSuperAPP",
      tipoArtefacto: "BFF",
      nombreArtefacto: "XXX-XXXX-bff",
      dispositivo:
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36",
      funcionalidad: "Enrolamiento superAPP",
      id: "de7ba310-f5e3-11ee-99e3-27e4ec8f78b3",
      canal: "43",
      sinproductos: "false",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { rutcliente: `${clientRut}${clientDv}` },
    httpsAgent: agent,
  };
  const response = await axios.request(config).catch((error) => {
    // console.error('   al obtener datos del cliente:', error.response ? error.response.data : error.message);
    return error; // Re-lanzar el error para que pueda ser manejado por el llamador
  });
  return response.data;
}

async function main(rut) {
  const datos = [];
  const deposit = await preguntar(
    "\n¿Desea realizar depósito a las cuentas obtenidas? (S/N): ",
  );
  const codigosesion = "d8da5907-f07f-4d90-a9be-6e63c18810fe";
  for (const cliente of rut) {
    try {
      const tokenSalesforce = await obtenerTokenSalesforce(
        cliente.rut,
        cliente.dv,
        codigosesion,
      );
      const datosCliente = await obtenerDatosCliente(
        tokenSalesforce,
        cliente.rut,
        cliente.dv,
        codigosesion,
      );
      const cuentaRut = datosCliente?.Productos.find((item) => {
        return (
          item.BE_CodigoProducto__c === "CTV" &&
          item.Codigo_de_subproducto__c === "007"
        );
      });

      datos.push({
        rut: cliente.rut,
        dv: cliente.dv,
        cuentaMambu: cuentaRut?.BE_NumeroCuentaMambu__c,
        cuentaMainframe: cuentaRut?.BE_CodigoOperacion__c,
      });
    } catch (error) {
      console.error(
        "Error al procesar cliente:",
        cliente.rut,
        cliente.dv,
        error.message,
      );
    }
  }

  if (deposit === "S") {
    const tokenFrame = await obtenerTokenFrame();
    console.log("\n==========================================");
    console.log("TOKEN FRAME OBTENIDO");
    console.log("==========================================\n");

    for (const cliente of datos) {
      console.log("======================================================");
      console.log(`Cliente ${cliente.rut}-${cliente.dv}`);
      console.log("======================================================");
      console.log("\nSaldo antes del depósito:\n");
      const saldoAntes = await consultarSaldo(tokenFrame, cliente);
      console.dir(saldoAntes, { depth: null });
      console.log("\nRealizando depósito...\n");
      const deposito = await realizarDeposito(tokenFrame, cliente);
      console.dir(deposito, { depth: null });

      if (deposito.payload?.returnCode === "0") {
        console.log("\nDepósito realizado correctamente.\n");
      } else {
        console.log("\nEl depósito retornó un error.\n");
      }
      console.log("\nSaldo después del depósito:\n");
      const saldoDespues = await consultarSaldo(tokenFrame, cliente);
      console.dir(saldoDespues, { depth: null });
      console.log("\n\n");
    }
  } else {
    console.log("\n==========================================");
    console.log("DATOS DE CUENTAS OBTENIDOS");
    console.log("==========================================\n");

    for (const cliente of datos) {
      console.log("======================================================");
      console.log(`Cliente ${cliente.rut}-${cliente.dv}`);
      console.log("======================================================");
      console.log(`Cuenta Mambu: ${cliente.cuentaMambu}`);
      console.log(`Cuenta Mainframe: ${cliente.cuentaMainframe}`);
      console.log("\n\n");
    }
  }
}

async function obtenerTokenFrame() {
  const config = {
    method: "POST",
    url: `${HOST_CORE}/api/v1/access-keys-api/auth`,
    headers: {
      canal: "15",
      "access-api-key": "ff92d31b-5023-4099-91d4-1a9414c14f6b",
      iss: "SUPERAPP",
      aud: "aws-apis-core",
      sub: "transaction",
    },
    httpsAgent: agent,
  };
  const response = await axios.request(config);
  return response.data.payload.accessToken;
}

async function consultarSaldo(tokenFrame, cliente) {
  const config = {
    method: "POST",
    url: `${HOST_CORE}/api/v1/account-core-api/balances`,
    headers: {
      canal: "SuperAPP_IN",
      nombreFuncionalidad: "BM020",
      codigoFuncionalidad: "BM020",
      etapaCanal: "CONSULTA SALDO",
      codigoSesion: "352fc58b-97c8-43ad-b7ce-59a7ae12b607",
      ipCliente: "192.168.1.87",
      idDispositivo: "9087ce6f-9fa7-49d2-84d9-1becfd936475",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenFrame}`,
    },
    data: {
      mambuAccountNumber: cliente.cuentaMambu,
      mainframeAccountNumber: cliente.cuentaMainframe,
      clientRUT: cliente.rut,
      clientDV: cliente.dv,
      accountType: "CTR",
    },
    httpsAgent: agent,
  };
  const response = await axios.request(config);
  return response.data;
}

async function realizarDeposito(tokenFrame, cliente) {
  const datos = generarDatosDeposito();
  const config = {
    method: "POST",
    url: `${HOST_CORE}/api/v1/withdrawal-deposit-api/deposit`,
    headers: {
      canal: "SuperAPP_IN",
      nombreFuncionalidad: "Abono QR Super App",
      codigoFuncionalidad: "PQR15",
      etapaCanal: "DEPOSITO",
      ipCliente: "192.168.1.87",
      idDispositivo: "9087ce6f-9fa7-49d2-84d9-1becfd936475",
      codigoSesion: "352fc58b-97c8-43ad-b7ce-59a7ae12b607",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenFrame}`,
    },
    data: {
      idTransaction: datos.transactionID,
      mambuAccountNumber: cliente.cuentaMambu,
      mainframeAccountNumber: cliente.cuentaMainframe,
      accountType: "CTV",
      clientRUT: Number(cliente.rut),
      clientDV: cliente.dv,
      amount: MONTO_DEPOSITO,
      shortDescription: "DEPOSITO PRUEBA",
      mediumDescription: "DEPOSITO PRUEBA",
      longDescription: `DEPOSITO PRUEBA ${datos.hora} ${datos.fecha} ${datos.transactionID}`,
      currencyCode: "CLP",
      accountingDate: datos.accountDate,
      correlative: datos.correlative,
      clientName: "Cliente prueba",
      conventionCode: "1",
    },
    httpsAgent: agent,
  };
  const response = await axios.request(config);
  return response.data;
}

main(listaruts);