export {}

const { teamsRanking } = require('../services/rankingService')
const Telegram = require('../services/telegramService')

import { TelegramMsg } from '../interfaces/TelegramInterfaces'

module.exports = async (msg: TelegramMsg) => {
    await teamsRanking(2022).then(function (response) {
        const formatRanking = response.data.response.map((item) => {
            return { team: item.team.name, points: item.points }
        })
        const msgTemplate = `${formatRanking
            .map((item) => `${item.team} - ${item.points}`)
            .join('\n')}`
        Telegram.sendMessage(msg.chat.id, msgTemplate)
    })
}
