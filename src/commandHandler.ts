import { Message } from 'discord.js'
import {
  GreetCommand,
  HelpCommand,
  TimeCommand,
  PoolCommand,
  PingCommand,
  LoudCommand,
  RepeatCommand,
  ChooseCommand,
} from './commands'
import Command from './models/commandInterface'
import { CommandParser } from './models/commandParser'

export default class CommandHandler {
  private commands: Command[]

  private readonly prefix: string

  constructor(prefix: string) {
    const commandClasses = [
      HelpCommand,
      GreetCommand,
      TimeCommand,
      PoolCommand,
      PingCommand,
      LoudCommand,
      RepeatCommand,
      ChooseCommand,
    ]

    this.commands = commandClasses.map((commandClass) => new commandClass())
    this.prefix = prefix
  }

  /** Executes user commands contained in a message if appropriate. */
  async handleMessage(message: Message): Promise<void> {
    if (message.author.bot || !this.isCommand(message)) {
      return
    }

    const commandParser = new CommandParser(message, this.prefix)
    const args = commandParser.args

    const matchedCommand = this.commands.find((command) =>
      command.commandNames.includes(commandParser.parsedCommandName)
    )

    if (!matchedCommand) {
      await message.channel.send(
        `I don't recognize that command. Try ${this.prefix}help.`
      )
    } else if (
      commandParser.parsedCommandName === 'help' ||
      commandParser.parsedCommandName === 'ajuda'
    ) {
      const commandsNames = this.commands.map((command) =>
        typeof command.commandNames === 'string'
          ? command.commandNames
          : command.commandNames.join(', ')
      )
      await matchedCommand.run(message, commandsNames)
    } else if (args.includes('help')) {
      const helpMessage = matchedCommand.help(this.prefix)
      await message.channel.send(helpMessage)
    } else {
      await matchedCommand.run(message, args).catch((error) => {
        message.channel.send(
          `'${this.echoMessage(message)}' failed because of ${error}`
        )
      })
    }
  }

  /** Sends back the message content after removing the prefix. */
  echoMessage(message: Message): string {
    return message.content.replace(this.prefix, '').trim()
  }

  /** Determines whether or not a message is a user command. */
  private isCommand(message: Message): boolean {
    return message.content.startsWith(this.prefix)
  }
}
