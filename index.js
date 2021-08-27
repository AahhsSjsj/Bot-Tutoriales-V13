const Discord = require('discord.js')
const { Client, Collection } = require('discord.js')
const client = new Client({intents: 32767})
module.exports = client;
const { token } = require('./config.json')

client.commands = new Collection();
client.cooldowns = new Collection();

['Events', 'Commands'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});

client.login(token)