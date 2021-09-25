module.exports = {
    name: 'ping',
    description: 'mira el ping',
    run: async (client, interacion, args) => {
        await interacion.followUp('Mi Ping Es: ' + client.ws.ping )
    }
}