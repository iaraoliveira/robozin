import Command from '../../models/commandInterface'
import { Message, MessageEmbed } from 'discord.js'

export class HelpCommand implements Command {
  commandNames = ['help', 'ajuda']

  help(commandPrefix: string): string {
    return `Tente usar o comando '${commandPrefix}help' e veja com seus próprios olhos :eyes.`
  }

  async run(message: Message, commandsNames: string[]): Promise<void> {
    const embed = new MessageEmbed()
      .setColor('#6ee9e9')
      .addField('Lista de Comandos', commandsNames.join('\n'))
    await message.channel.send(embed)
  }
}
