import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class TimeCommand implements Command {
  commandNames = ['time', 'tempo']

  help(commandPrefix: string): string {
    return `Use '${commandPrefix}time' ou '${commandPrefix}tempo' para saber o horário atual`
  }

  async run(message: Message): Promise<void> {
    const now = new Date()
    await message.reply(`${now.getHours()} : ${now.getMinutes()}`)
  }
}
