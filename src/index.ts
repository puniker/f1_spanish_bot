require('dotenv').config()

const Telegram = require('./services/telegramService')

const driversCommand = require('./commands/drivers')
const teamsCommand = require('./commands/teams')
const scheduleGpCommand = require('./commands/scheduleGp')

const { teamsRanking } = require('./services/rankingService')

Telegram.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
    const msgTemplate =
        'Bienvenido al bot de Formula 1 en Español. Escribe / para ver la lista de comandos disponibles.'
    Telegram.sendMessage(chatId, msgTemplate)
})

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
Telegram.on('message', (msg: TelegramMsgInterface) => {
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

const getRanking = async () => {
    await teamsRanking(2020).then(function (response) {
        console.log(response.data)
    })
}

// getRanking();
