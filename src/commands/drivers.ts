export {}
const { driverRanking } = require('../services/rankingService')
const Telegram = require('../services/telegramService')

import { TelegramMsg } from '../interfaces/TelegramInterfaces'

import { DriverRankingResponse, DriversRankingInterface } from '../interfaces/DriversRankingInterfaces'
import { DriverRankingModel } from '../model/driverRankingModel'

import { convertToBase64, generateImage } from '../controller/generateImageController'
import { readFileContent } from '../controller/storageController'

module.exports = async (msg: TelegramMsg) => {
    await driverRanking(2022)
        .then(function (data: DriversRankingInterface) {
            const templateData: DriverRankingModel = new DriverRankingModel(data);
            readFileContent(__dirname + '/../templates/driversTemplate.html', (fileContent) => {
                generateImage(fileContent, `${msg.chat.id}.png`, templateData).then(() => {
                    Telegram.sendPhoto(msg.chat.id, `${msg.chat.id}.png`)
                })
            });
        })
        .catch(function (error) {
            console.log(error)
            Telegram.sendMessage(msg.chat.id, JSON.stringify(error))
        })
}
