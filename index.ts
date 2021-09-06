import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("B")
})

client.on('ready', () => { //Prints in console if bot is online
console.log('Balanced bot is online')
})

client.on('messageCreate', (msg) => {
  if (msg.content === 'ping') {
    msg.reply({
      content: 'pong',
    })
  }
})

client.login(process.env.TOKEN)
