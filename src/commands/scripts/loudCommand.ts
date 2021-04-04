import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class LoudCommand implements Command {
  commandNames = ['loud', 'grita', 'aaaa']

  help(commandPrefix: string): string {
    return `"aaaaaaaaaaaaaaaah"`
  }

  async run(message: Message): Promise<void> {
    const times = this.getRandom(1, 30)
    let text = 'a'

    for (let i = 0; i < times; i++) {
      text = text.concat('a')
    }

    message.channel.send(`${text}h`, { tts: true })
  }

  getRandom(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
