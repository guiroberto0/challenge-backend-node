const axios = require('axios');

const https = axios.create({
    baseURL: `https://api.spaceflightnewsapi.net/v3/`
});

module.exports = https;