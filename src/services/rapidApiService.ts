require('dotenv').config()

module.exports = (endpoint: string) => {
    return {
        method: 'get',
        url: `https://v1.formula-1.api-sports.io/${endpoint}`,
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'v1.formula-1.api-sports.io',
        },
    }
}
