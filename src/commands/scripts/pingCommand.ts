import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class PingCommand implements Command {
  commandNames = ['ping']

  help(commandPrefix: string): string {
    return `Diga '${commandPrefix}ping' e eu direi 'pong'.`
  }

  async run(message: Message): Promise<void> {
    await message.channel.send(`pong  🏓`)
  }
}
