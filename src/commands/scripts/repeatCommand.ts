import Command from '../../models/commandInterface'
import { Message } from 'discord.js'

export class RepeatCommand implements Command {
  commandNames = ['repeat', 'repete', 'fala']

  help(commandPrefix: string): string {
    return `Quer que eu diga alguma coisa? Use ${commandPrefix}fala ou ${commandPrefix}repeat. \n  PS.: Use "-d" para ficar no anônimo :eyes: ou manda um "-tts" se quiser que todo mundo ouça o que eu tenho a dizer :loudspeaker:`
  }

  async run(message: Message, args: string[]): Promise<void> {
    const deleteCommand = args.find((arg) => arg.match(/^-d$/i))
    if (deleteCommand) {
      await message.delete()
      args.splice(args.indexOf(deleteCommand), 1)
    }

    const ttsCommand = args.find((arg) => arg.match(/^-tts$/i))
    if (ttsCommand) {
      args.splice(args.indexOf(ttsCommand), 1)
    }

    const text = args.join(' ')

    if (text) message.channel.send(text, { tts: !!ttsCommand })
  }
}
