const { Client, MessageEmbed } = require("discord.js");
const { MongooseURL, ownerTag } = require("../../config.json");
const mongoose = require("mongoose");
const AsciiTable = require("ascii-table");

module.exports = {
  name: "ready",
  once: true,
  /**
   * @param {Client} client
   */
  run: async (client) => {

    var Table = new AsciiTable("Client");
    Table.setHeading("Name", "Connect?", "Ping").addRow(
      `${client.user.username}`,
      `✔ Yes`,
      `${client.ws.ping}MS`
    );

    console.log(Table.toString());

    const listoo = new MessageEmbed()
      .setDescription(
        `**El Client \`${client.user.tag}\` ||${
          client.user.id
        }|| Esta Listo!\nPing: ${client.ws.ping}MS\nUptime: <t:${parseInt(
          client.readyTimestamp / 1000
        )}:R>**`
      )
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(
        `Estoy En ${client.guilds.cache.size} Servers Con ${client.users.cache.size} Y ${client.channels.cache.size} Canales En Total | Owner: ${ownerTag}`
      );
    client.user.setActivity("Mensaje :D", { type: "PLAYING" }); // TYPES: PLAYING, WATCHING, COMPETING, LISTENING, STREAMING
    //Para el Tipo STREAMING es: client.user.setActivity("En Vivo", { type: "STREAMING", url: "Twitch URL" })

    client.channels.cache.get("Canal ID").send({ embeds: [listoo] });
    if (!MongooseURL) return;
    mongoose
      .connect(MongooseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        var Table = new AsciiTable("Mongoose");

        Table.setHeading("Conectado?").addRow("✔ Yes");

        console.log(Table.toString());
      })
      .catch((err) => {
        var Table = new AsciiTable("Mongoose");

        Table.setHeading("Conectado?").addRow(`✖ ${err}`);

        console.log(Table.toString());
      });
  },
};
