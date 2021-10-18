const {
  Client,
  Message,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["pfp"],
  description: "Muestra Tu Avatar O Del Mencionado",
  permissions: "SEND_MESSAGES",
  cooldown: 5,
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const Target = message.mentions.users.first() || message.author;

    const responder = new MessageEmbed().setColor("RANDOM");

    const image = Target.displayAvatarURL({ dynamic: true, size: 1024 });

    const png = Target.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 1024,
    });

    const jpg = Target.displayAvatarURL({
      dynamic: true,
      format: "jpg",
      size: 1024,
    });

    const webp = Target.displayAvatarURL({
      dynamic: true,
      format: "webp",
      size: 1024,
    });

    const jpeg = Target.displayAvatarURL({
      dynamic: true,
      format: "jpeg",
      size: 1024,
    });

    const gif = Target.displayAvatarURL({
      dynamic: true,
      format: "gif",
      size: 1024,
    });

    responder.setAuthor(`Avatar De ${Target.username}'s`);
    responder.setTitle("Links As").setImage(image);
    responder.setDescription(
      `[png](${png}) | [jpg](${jpg}) | [webp](${webp}) | [jpeg](${jpeg}) | [gif](${gif}) `
    );

    const row = new MessageActionRow().addComponents(
      new MessageButton().setStyle("LINK").setLabel("PNG").setURL(`${png}`),
      new MessageButton().setStyle("LINK").setLabel("JPG").setURL(`${jpg}`),
      new MessageButton().setStyle("LINK").setLabel("WEBP").setURL(`${webp}`),
      new MessageButton().setStyle("LINK").setLabel("JPEG").setURL(`${jpeg}`),
      new MessageButton().setStyle("LINK").setLabel("GIF").setURL(`${gif}`)
    );

    message.reply({ embeds: [responder], components: [row] });
  },
};
