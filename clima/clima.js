const axios = require('axios')

const getClima = async (lugar) => {
    const temperatura = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lugar.latitude}&lon=${lugar.longitude}&appid=b449116de695d450f39a484cbf703ef1&units=metric`)
    return temperatura.data.main.temp
}

module.exports = {
    getClima
}