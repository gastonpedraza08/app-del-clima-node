const argv = require('yargs')
.options({
    ciudad: {
        demand: true,
        alias: 'c',
        desc: 'ciudad de la que quieres obtener el clima'
    }
}).argv;

const {getLugarLatLong} = require('./lugar/lugar.js')
const {getClima} = require('./clima/clima.js')

const getInfo = async (direccion) => {
    const lugar = await getLugarLatLong(direccion)
    const clima = await getClima(lugar)
    if(lugar.length===0) throw new Error("fallo buscando el lugar")
    if(clima.length===0) throw new Error("fallo al obtener el clima")
    return {
        lugar,
        clima
    }
}
getInfo(argv.ciudad)
    .then((resul) => {
        console.log(`El clima de ${resul.lugar.label} es de ${resul.clima}`)
    })
    .catch(err => {
        console.log("No se pudo determinar el clima: Información del error:")
        console.log(err)
    })