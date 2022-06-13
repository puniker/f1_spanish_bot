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
            // const formatRanking = data.response.map((item: DriverRankingResponse) => {
            //     return { team: item.driver.name, points: item.points }
            // })
            const templateData: DriverRankingModel = new DriverRankingModel(data);
            readFileContent(__dirname + '/../templates/driversTemplate.html', (fileContent) => {
                generateImage(fileContent, `${msg.chat.id}.png`, templateData).then(() => {
                    // const base64Image = convertToBase64('./sampleImage.png', 'png');
                    Telegram.sendPhoto(msg.chat.id, `${msg.chat.id}.png`)
                })
            });

            // const msgTemplate = `${formatRanking
            //     .map((item) => `${item.team} - ${item.points}`)
            //     .join('\n')}`
            // Telegram.sendMessage(msg.chat.id, msgTemplate)
        })
        .catch(function (error) {
            console.log(error)
            Telegram.sendMessage(msg.chat.id, JSON.stringify(error))
        })
}
