module.exports = client => {
    client.on('guildMenberAt', member => {

        const welcomeChannel = member.guild.channels.cache.get('781554552423448636')
        const infoChannel = member.guild.channels.cache.get('794654996653146152')

        const message1 = `Que bom que você está aqui, <@${member.id}>!` 
        const message2 = `
            Resumo da ópera:
            - Se você acabou de cair aqui de paraquedas, seja bem vindo :)
            - Para interagir com o resto da galera, você pode escolher um dos canais de texto no lado esquerdo ou pular em algum canal de voz;
            - Caso queira convidar alguém pro server, gere um invite a partir desse canal... só me avisa antes, beleza? ;)
            - Tá confuso? Dá uma olhada nas ${infoChannel.toString()}
        ` ;

        welcomeChannel.send(message1);
        welcomeChannel.send(message2);
    })
}