import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class BaitAndHookCommand implements Command {
  commandNames = ['isca']

  help(commandPrefix: string): string {
    return `A '${commandPrefix}isca' e o anzoool.`
  }

  // randomReplies = [
  replies = [
    'a :worm: e o :hook:',
    'e o anzoool',
    'a isca e o anzol',
    'o anzol e a isca',
    'de novo?',
  ]
  async run(message: Message): Promise<void> {
    const random = Math.floor(Math.random() * this.replies.length)
    await message.channel.send(`${this.replies[random]}`)
  }
}
