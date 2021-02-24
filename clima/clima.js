const axios = require('axios')
const {keyapi} = require('./config')
const getClima = async (lugar) => {
    const temperatura = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lugar.latitude}&lon=${lugar.longitude}&appid=${keyapi}&units=metric`)
    return temperatura.data.main.temp
}

module.exports = {
    getClima
}