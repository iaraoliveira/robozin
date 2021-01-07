const { MessageEmbed } = require('discord.js');

module.exports = (client, config) => {

    const numberEmojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    
    const thumbsEmojis = ["👍", "👎"];

    client.on("message", async message => {

        if (message.author.bot) return;

        if (message.content.startsWith(config.prefix)) {
            const words = message.content.split(" ");
            const command = words[0].slice(1);
            const args = words.slice(1);
            const text = args.join(" ");

            if (command === "enquete") {
                let args = parseToArgs(text);

                const question = args.splice(0, 1);
                const answers = args;

                let embedContent = ' ';
                
                if (answers.length > 0) {

                    answers.forEach((answer, index) => {
                        embedContent = embedContent + `${numberEmojis[index]} ${answer}\n\n`;
                    });
                } else {

                    embedContent = embedContent + `${thumbsEmojis[0]} Sim\n\n${thumbsEmojis[1]} Não`;
                }
                
                const embed = new MessageEmbed().setTitle(question).setDescription(embedContent);

                const sentMessage = await message.channel.send(embed);
                
                if (answers.length > 0) {

                    answers.map( async (answer, index) => {
                        try {
                            await sentMessage.react(numberEmojis[index]);
                        } catch (error) {
                            console.log(error);
                        } 
                    })
                } else {
                    try {
                        await sentMessage.react(thumbsEmojis[0]);
                        await sentMessage.react(thumbsEmojis[1]);
                    } catch (error) {
                        console.log(error);
                    } 
                }
            }
        }
    })

    function parseToArgs(text) {
        let args = text.trim()
            .split('"')
            .filter(phrase => phrase.trim() !== "");

        formattedArgs = args.map( arg => arg.trim() );

        return formattedArgs;
    }
}
