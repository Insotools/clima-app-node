const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a3ea0ffe25299f0ec350fc71b5ce5eab&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}