import Command from '../../models/commandInterface'
import { CommandParser } from '../../models/commandParser'
import { Message, MessageEmbed } from 'discord.js'

export class PoolCommand implements Command {
  commandNames = ['pool', 'enquete']

  help(commandPrefix: string): string {
    return `Você pode criar uma enquete usando '${commandPrefix}pool' ou '${commandPrefix}enquete'. PS.: Só não esquece das "aspas" ;).`
  }

  async run(message: Message, args: string[]): Promise<void> {
    const numberEmojis = [
      '1️⃣',
      '2️⃣',
      '3️⃣',
      '4️⃣',
      '5️⃣',
      '6️⃣',
      '7️⃣',
      '8️⃣',
      '9️⃣',
      '🔟',
    ]
    const thumbsEmojis = ['👍', '👎']

    const messageText = args.join(' ')
    args = this.parseToArgs(messageText)

    const question = args.splice(0, 1)
    const answers = args

    let embedContent = ' '

    if (answers.length > 0) {
      answers.forEach((answer, index) => {
        embedContent = embedContent + `${numberEmojis[index]} ${answer}\n\n`
      })
    } else {
      embedContent =
        embedContent + `${thumbsEmojis[0]} Sim\n\n${thumbsEmojis[1]} Não`
    }

    const embed = new MessageEmbed()
      .setColor('#6ee9e9')
      .setTitle(question)
      .setDescription(embedContent)

    const sentMessage = await message.channel.send(embed)

    if (answers.length > 0) {
      answers.map(async (answer, index) => {
        try {
          await sentMessage.react(numberEmojis[index])
        } catch (error) {
          console.log(error)
        }
      })
    } else {
      try {
        await sentMessage.react(thumbsEmojis[0])
        await sentMessage.react(thumbsEmojis[1])
      } catch (error) {
        console.log(error)
      }
    }
  }

  parseToArgs(text: string): Array<string> {
    const args = text
      .trim()
      .split('"')
      .filter((phrase) => phrase.trim() !== '')

    const formattedArgs = args.map((arg) => arg.trim())

    return formattedArgs
  }
}
