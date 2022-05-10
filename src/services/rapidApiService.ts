module.exports = (endpoint: string) => {
    return {
        method: 'get',
        url: `https://v1.formula-1.api-sports.io/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'api_key',
            'x-rapidapi-host': 'v1.formula-1.api-sports.io',
        },
    }
}
