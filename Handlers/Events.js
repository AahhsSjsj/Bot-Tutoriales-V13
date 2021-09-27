const { readdirSync } = require('fs')

module.exports = (client, Discord) => {
    const eventFolders = readdirSync('./Events');
    for (const folder of eventFolders) {
        const eventsFiles = readdirSync(`./Events/${folder}`).filter(files => files.endsWith('.js'));
        for (const file of eventsFiles) {
            const event = require(`../Events/${folder}/${file}`)
            if (event.once) {
                client.once(event.name, (...args) => event.run(...args, client, Discord))
            } else {
                client.on(event.name, (...args) => event.run(...args, client, Discord))
            };
        };
    };
};
