const Discord = require('discord.js')

const client = new Discord.Client();

const config = require('./config/config.json');

const welcome = require('./commands/welcome.js');

client.on("ready", () => {
    console.log("The bot is running...");

    welcome(client);
})



client.on("message", message => {

    if (message.author.bot) return;

    if (message.content.match(/fala bot/i)) {
        message.reply("hello there");
    }
    
    if (message.content.match('ping')) {
        message.channel.send("pong");
    }

    const words = message.content.split(" ");
    const command = words[0].slice(1);
    const args = words.slice(1);
    const line = args.join(" ");
       
    if (message.content.startsWith(config.prefix)) {
        if (command === "fala") {
            message.channel.send(line)
        }

        if (command === "escolhe") {
            var choice = args[Math.floor(Math.random() * args.length)]
            message.channel.send(choice)
        }
    }
})

client.login(process.env.TOKEN_KEY || config.token)