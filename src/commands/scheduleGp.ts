export {}
import moment from 'moment'
import { GpInfoInterface } from '../interfaces/GpInterfaces'

const Telegram = require('../services/telegramService')
const { nextGpSchedule } = require('../services/gpInfoService')

import { TelegramMsg } from '../interfaces/TelegramInterfaces'

module.exports = async (msg: TelegramMsg) => {
    let msgTemplate: string = '';
    await nextGpSchedule('1st Qualifying').then((data: GpInfoInterface) => {
        msgTemplate += `${data.response[0].competition.name} \n`
        const qualyDate = moment(new Date(data.response[0].date)).format('DD-MM-YYYY')
        const qualyTime = moment(new Date(data.response[0].date)).format('hh:mm')
        msgTemplate += `Clasificación: ${qualyDate} a las ${qualyTime}. \n`
    })
    await nextGpSchedule('race').then((data: GpInfoInterface) => {
        const raceDate = moment(new Date(data.response[0].date)).format(
            'DD-MM-YYYY'
        )
        const raceTime = moment(new Date(data.response[0].date)).format('hh:mm');
        msgTemplate += `Carrera: ${raceDate} a las ${raceTime}. \n`
    })
    Telegram.sendMessage(msg.chat.id, msgTemplate)
}
