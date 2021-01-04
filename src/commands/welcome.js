module.exports = client => {
    client.on('guildMemberAdd', async member => {

        console.log(`Someone joined the server`);
        const welcomeChannel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
        const infoChannel = member.guild.channels.cache.get('794654996653146152')
        if (!welcomeChannel) return;
        
        const messages = []
        
        messages[0] = await welcomeChannel.send(`Que bom que você está aqui, <@${member.id}>!`);
        messages[1] = await welcomeChannel.send(`Se você acabou de cair de paraquedas no server, seja bem vindo :)`);
        
        if (infoChannel) messages[2] = await welcomeChannel.send(`Tá confuso? Dá uma olhada nas ${infoChannel.toString()}`);
        
        setTimeout( async () => {
            await messages[0].delete();
            await messages[1].delete();
            if (infoChannel) await messages[2].delete();
        }, 3600000);
    })

}