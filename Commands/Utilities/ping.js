const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ['pong'],
    permissions: 'MANAGE_CHANNELS',
    description: "Pong!",
    cooldown: 5,
    execute(message, args, commandName, client, Discord) {
        const embed = new MessageEmbed()
        .setColor('NOT_QUITE_BLACK')
        .setDescription(`Pong: ${client.ws.ping}ms`)
        message.channel.send({embeds: [embed]})
    }
}