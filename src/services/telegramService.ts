require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
export {}

const Telegram = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, {
    polling: true,
})

module.exports = Telegram
