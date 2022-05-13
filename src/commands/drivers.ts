export {}
const { driverRanking } = require('../services/rankingService')
const Telegram = require('../services/telegramService')

import { TelegramMsg } from '../interfaces/TelegramInterfaces'

module.exports = async (msg: TelegramMsg) => {
    await driverRanking(2022).then(function (response) {
        const formatRanking = response.data.response.map((item) => {
            return { team: item.driver.name, points: item.points }
        })
        const msgTemplate = `${formatRanking
            .map((item) => `${item.team} - ${item.points}`)
            .join('\n')}`
        Telegram.sendMessage(msg.chat.id, msgTemplate)
    })
    .catch(function (error) {
        console.log(error);
        Telegram.sendMessage(msg.chat.id, JSON.stringify(error))
    });
}
