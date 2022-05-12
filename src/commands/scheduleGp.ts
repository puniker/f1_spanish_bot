export {}
import moment from 'moment'

const Telegram = require('../services/telegramService')
const { nextGpSchedule } = require('../services/gpInfoService')

import { TelegramMsg } from '../interfaces/TelegramInterfaces'

module.exports = async (msg: TelegramMsg) => {
    await nextGpSchedule('race').then(({ data }) => {
        const gpName = data.response[0].competition.name
        const raceDate = moment(new Date(data.response[0].date)).format(
            'DD-MM-YYYY'
        )
        const raceTime = moment(new Date(data.response[0].date)).format('hh:mm')
        const msgTemplate = `${gpName} \nClasificación: ${raceDate} a las ${raceTime}. \nCarrera: ${raceDate} a las ${raceTime}. \n`
        Telegram.sendMessage(msg.chat.id, msgTemplate)
    })
}
