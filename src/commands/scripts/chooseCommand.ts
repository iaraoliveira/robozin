import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class ChooseCommand implements Command {
  commandNames = ['choose', 'escolhe']

  help(commandPrefix: string): string {
    return `Tá na dúvida? Pergunta pra mim usando ${commandPrefix}choose ou ${commandPrefix}escolhe.`
  }

  async run(message: Message, args: string[]): Promise<void> {
    const filteredArgs = Array.from(new Set(args))
    const choice = filteredArgs[Math.floor(Math.random() * filteredArgs.length)]
    message.channel.send(choice)
  }
}
