import { GuildMember } from 'discord.js'
import { WelcomeEvent } from './events'

export default class EventHandler {
  private welcomeEvent: WelcomeEvent

  constructor() {
    this.welcomeEvent = new WelcomeEvent()
  }

  async handleNewMember(member: GuildMember): Promise<void> {
    await this.welcomeEvent.run(member)
  }
}
