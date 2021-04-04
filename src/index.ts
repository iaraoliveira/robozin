import Discord, { Message, GuildMember } from 'discord.js'
import { DISCORD_TOKEN } from './config/secrets'
import CommandHandler from './commandHandler'
import EventHandler from './eventHandler'
import config from './config/botConfig'

const client = new Discord.Client()

const commandHandler = new CommandHandler(config.prefix)
const eventHandler = new EventHandler()

//////////////////////////////////////////////////////////////////
//                    DISCORD CLIENT LISTENERS                  //
//////////////////////////////////////////////////////////////////
// Discord Events: https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate

client.on('ready', () => {
  console.log('🚀 Bot is on')
})
client.on('message', (message: Message) => {
  commandHandler.handleMessage(message)
})
client.on('guildMemberAdd', (member: GuildMember) => {
  eventHandler.handleNewMember(member)
})
client.on('error', (e) => {
  console.error('Discord client error!', e)
})

client.login(DISCORD_TOKEN)
