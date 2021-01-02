module.exports = (client, config) => {

    client.on("message", message => {

        if (message.author.bot) return;
    
        if (message.content.match(/^fala bot/i)) {
            message.reply("hello there");
        }
        
        if (message.content.match(/^ping/i)) {
            message.channel.send("pong");
        }
    
        const words = message.content.split(" ");
        const command = words[0].slice(1);
        const args = words.slice(1);
        
        if (message.content.startsWith(config.prefix)) {
            if (command === "grita") {
                message.channel.send("AAAAAh", { tts: true })
            }
            
            if (command === "fala") {
                console.log(args);
                
                let deleteCommand = args.find(arg => arg.match(/^-d$/i))
                if(deleteCommand){
                    message.delete();
                    args.splice(args.indexOf(deleteCommand), 1); 
                }
                
                let ttsCommand = args.find(arg => arg.match(/^-tts$/i))
                if(ttsCommand){
                    console.log("ttsCommand", ttsCommand, args.indexOf(ttsCommand));
                    args.splice(args.indexOf(ttsCommand), 1); 
                }
                
                const text = args.join(" ");
                message.channel.send(text, { tts: !!ttsCommand })
            }
    
            if (command === "escolhe" || command === "escolha" || command === "escolher") {

                filteredArgs = [...new Set(args)]

                console.log(filteredArgs)

                var choice = filteredArgs[Math.floor(Math.random() * filteredArgs.length)]
                message.channel.send(choice)
            }
        }
    })
}