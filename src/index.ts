const { teamsRanking } = require('./services/rankingService')

const getRanking = async () => {
    await teamsRanking(2020).then(function (response) {
        console.log(JSON.stringify(response.data))
    })
}

getRanking()
