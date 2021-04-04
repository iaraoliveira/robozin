import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class GreetCommand implements Command {
  commandNames = ['greet', 'hello', 'oi']

  help(commandPrefix: string): string {
    return `Você pode usar '${commandPrefix}greet', '${commandPrefix}hello' ou '${commandPrefix}oi' para me cumprimentar.`
  }

  async run(message: Message): Promise<void> {
    await message.channel.send(`hello, ${message.author.toString()}`)
  }
}
