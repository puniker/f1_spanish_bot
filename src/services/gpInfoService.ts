const axios = require('axios')
const rapidApiService = require('../services/rapidApiService')

export {}

const nextGpSchedule = async (type: 'race' | '1st Qualifying') => {
    const config = rapidApiService('races')
    return axios({
        ...config,
        params: { next: 1, type, timezone: 'Europe/Madrid' },
    }).then((response) => {
        return response.data
    })
}

module.exports = { nextGpSchedule }
