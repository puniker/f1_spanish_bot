require('dotenv').config()

module.exports = (endpoint: string) => {
    return {
        method: 'get',
        url: `https://v1.formula-1.api-sports.io/${endpoint}`,
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'v1.formula-1.api-sports.io',
            'Cache-Control': 'no-cache',
            'Postman-Token': '<calculated when request is sent>',
            'Host': '<calculated when request is sent>',
            'User-Agent': 'PostmanRuntime/7.29.0',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
        },
    }
}
