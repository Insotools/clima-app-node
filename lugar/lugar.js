const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encondeURI(dir);

    const instance = axios.create({
        baseURL: `https:`,
        headers: { 'X-RapidAPI-Key': `nfjd` }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }


    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
}

/* 
const instance = axios.create({
    baseURL: 'https://geocode.xyz/?locate=location?city=Lima,Peru&auth=TU_API_KEY&json=1',
    
});

instance.get()
.then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERRORR!!!!', err)
    });
     */