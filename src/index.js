const Discord = require('discord.js')

const client = new Discord.Client();

const config = require('./config/config.json');

const chat = require('./commands/chat.js');
const welcome = require('./commands/welcome.js');

client.on("ready", () => {
    console.log("The bot is running...");

    welcome(client);
    chat(client, config);
})

client.login(process.env.TOKEN_KEY || config.token)