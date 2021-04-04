// import Command from '../../models/commandInterface'
import { GuildMember, TextChannel } from 'discord.js'

export class WelcomeEvent {
  async run(member: GuildMember): Promise<void> {
    console.log(`Someone joined the server`)

    const welcomeChannel = member.guild.channels.cache.find(
      (ch) => ch.name === 'welcome'
    )

    // const infoChannel = member.guild.channels.cache.get('794654996653146152')

    if (!welcomeChannel) return

    // Using a type guard to narrow down the correct type
    if (
      !((welcomeChannel): welcomeChannel is TextChannel =>
        welcomeChannel.type === 'text')(welcomeChannel)
    )
      return

    const messages = []

    messages[0] = await welcomeChannel.send(
      `Que bom que você está aqui, <@${member.id}>!`
    )
    messages[1] = await welcomeChannel.send(
      `Se você acabou de cair de paraquedas no server, seja bem vindo :)`
    )
  }
}
