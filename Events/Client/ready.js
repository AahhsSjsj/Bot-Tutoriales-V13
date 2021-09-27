module.exports = {
    name: "ready",
    run: async(client) => {
        console.log(`${client.user.tag} Esta Listo!`)
        client.user.setActivity('Tu Texto PD: Mensaje Para Poner en el Estado!', {type: 'PLAYING' }) // PLAYING, WATCHING, LISTENING, STREAMING Nota: Para El STREAMING Debes Poner Asi:
        //type: "STREAMING",
        //url: "twitch canal"
        //Osea client.user.setActivity('en Vivo', {type: 'STREAMING', url: 'https://www.twitch.tv/rubius' })
    }
}
