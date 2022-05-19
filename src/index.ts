require('dotenv').config()
const Telegram = require('./services/telegramService')
const express = require('express')

import { TelegramMsg } from './interfaces/TelegramInterfaces'

const driversCommand = require('./commands/drivers')
const teamsCommand = require('./commands/teams')
const scheduleGpCommand = require('./commands/scheduleGp')

const app = express()

Telegram.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
    const msgTemplate =
        'Bienvenido al bot de Formula 1 en Español. Escribe / para ver la lista de comandos disponibles.'
    Telegram.sendMessage(chatId, msgTemplate)
})

Telegram.on('message', (msg: TelegramMsg) => {
    const chatId = msg.chat.id
    switch (msg.text) {
        case '/pilotos':
            driversCommand(msg)
            break
        case '/constructores':
            teamsCommand(msg)
            break
        case '/horario':
            scheduleGpCommand(msg)
            break
        case '/siguientegp':
            Telegram.sendMessage(chatId, 'Funcionalidad en desarrollo')
            break
        default:
            Telegram.sendMessage(
                chatId,
                'Escribe / para ver la lista de comandos disponibles.'
            )
            break
    }
})


app.get('/', function (req, res) {
    res.send('Bot levantado')
  })
  
  app.listen(process.env.PORT || 3000, ()=> {
    console.log('Example app listening on port ', process.env.PORT || 3000)
  })
