const axios = require('axios')
const rapidApiService = require('../services/rapidApiService')

export {}

const driverRanking = async (season: number) => {
    const config = rapidApiService(`rankings/drivers?season=${season}`)
    return axios(config).then((response) => {
        return response.data;
    })
}

const teamsRanking = async (season: number) => {
    const config = rapidApiService(`rankings/teams?season=${season}`)
    return axios(config)
}

module.exports = { driverRanking, teamsRanking }
