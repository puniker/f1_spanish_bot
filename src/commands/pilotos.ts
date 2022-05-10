export {}

const { driverRanking } = require('../services/rankingService')
const Telegram = require('../services/telegramService')


interface TelegramMsgInterface {
    message_id: number
    from: {
        id: number
        is_bot: boolean
        first_name: string
        last_name: string
        username: string
        language_code: string
    }
    chat: {
        id: number
        first_name: string
        last_name: string
        username: string
        type: string
    }
    date: number
    text?: string
}

module.exports = async (msg: TelegramMsgInterface) => {

    await driverRanking(2022).then(function (response) {
        const formatRanking = response.data.response.map(item => {
            return {team: item.driver.name, points: item.points}
        })
        console.log(formatRanking)
        const msgTemplate = `${formatRanking.map(item => `${item.team} - ${item.points}`).join('\n')}`
        Telegram.sendMessage(msg.chat.id, msgTemplate)
    })
}
