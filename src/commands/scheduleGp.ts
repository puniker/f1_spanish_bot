export {}
import moment from 'moment'
import { GpInfoInterface } from '../interfaces/GpInterfaces'

const Telegram = require('../services/telegramService')
const { nextGpSchedule } = require('../services/gpInfoService')

import { TelegramMsg } from '../interfaces/TelegramInterfaces'
import { formatDate, formatTime } from '../utils/formatTime'

module.exports = async (msg: TelegramMsg) => {
    let msgTemplate: string = ''
    await nextGpSchedule('1st Qualifying').then((data: GpInfoInterface) => {
        msgTemplate += `${data.response[0].competition.name} \n`
        const qualyDate = formatDate(data.response[0].date)
        const qualyTime = formatTime(data.response[0].date)
        msgTemplate += `Clasificación: ${qualyDate} a las ${qualyTime}. \n`
    })
    await nextGpSchedule('race').then((data: GpInfoInterface) => {
        const raceDate = formatDate(data.response[0].date)
        const raceTime = formatTime(data.response[0].date)
        msgTemplate += `Carrera: ${raceDate} a las ${raceTime}. \n`
    })
    Telegram.sendMessage(msg.chat.id, msgTemplate)
}
