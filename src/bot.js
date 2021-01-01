const Discord = require('discord.js')

// const config = require('../data/config.json');
const client = new Discord.Client();

const prefix = process.env.PREFIX

client.on("ready", () => {
    console.log("Bot logged in")
})

client.on("message", message => {

    if (message.author.bot) return;

    if (message.content.match(/fala bot/i)) {
        message.reply("hello there");
    }
    
    if (message.content.match(/ping/i)) {
        message.channel.send("pong");
    }

    const words = message.content.split(" ");
    const command = words[0].slice(1);
    const args = words.slice(1);
    const line = args.join(" ");
       
    if (message.content.startsWith(prefix)) {
        if (command === "fala") {
            message.channel.send(line)
        }

        if (command === "escolhe") {
            var choice = args[Math.floor(Math.random() * args.length)]
            message.channel.send(choice)
        }
    }
})

client.login(process.env.TOKEN_KEY)