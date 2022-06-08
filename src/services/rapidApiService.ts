require('dotenv').config()

module.exports = (endpoint: string) => {
    return {
        method: 'get',
        url: `https://api-formula-1.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        },
    }
}
