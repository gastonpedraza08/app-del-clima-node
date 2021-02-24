const axios = require('axios')

const getLugarLatLong = async (direccion) => {
    
    let encodedUrl = encodeURI(direccion)

    const result = await axios.get(`http://api.positionstack.com/v1/forward?access_key=172910a7d0a412d30cc7bd7b377ebb5a&query=${encodedUrl}`)
    if(result.data.data.length===0){
        throw new Error("No se encontraron resultados para "+encodedUrl)
    }
    const {label, latitude, longitude} = result.data.data[0]
    return {
        label,
        latitude,
        longitude
    }
}

module.exports = {
    getLugarLatLong
}