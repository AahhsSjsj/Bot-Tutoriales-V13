const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "getUserinfo",
  type: "USER",
  /**
   *
   * @param {ContextMenuInteraction} interaction
   * @param {Client} client
   */
  run: async (interaction, client) => {
    try {
      let estados = {
        online: "🟢 En linea",
        idle: "🟡Ausente",
        dnd: "⛔ No Molestar",
        offline: "⚫ Desconectado/invisible",
      };
      const member = await interaction.guild.members.fetch(
        interaction.targetId
      );

      const responder = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(
          interaction.user.tag,
          member.user.avatarURL({ dynamic: true })
        )
        .setThumbnail(member.user.avatarURL({ dynamic: true, size: 512 }))
        .addFields(
          {
            name: "**Tag**",
            value: `**\`${member.user.tag}\`**`,
            inline: true,
          },
          {
            name: "**ID**",
            value: `**||${member.user.tag}||**`,
            inline: true,
          },
          {
            name: "**Roles**",
            value: `${
              member.roles.cache
                .map((r) => r)
                .join(" ")
                .replace("@everyone", " ") || "No Tiene Roles"
            }`,
            inline: true,
          },
          {
            name: "**Booster?**",
            value: `${
              member.premiumSince ? "Usuario Booster" : "Usuario No Booster"
            }`,
            inline: true,
          },
          {
            name: "**Estado:**",
            value: `${estados[member.presence?.status ?? "offline"]}`,
            inline: true,
          },
          {
            name: "**Apódo Del Usuario:**",
            value: `${
              member.nickname !== null
                ? `${member.nickname}`
                : "No Tiene Ningun Apodo!"
            }`,
            inline: true,
          },
          {
            name: "**Es Un Bot?**",
            value: `${member.user.bot ? "Es Un Bot" : "No Es Un Bot"}`,
            inline: true,
          },
          {
            name: "**Miembro Hace:**",
            value: `**<t:${parseInt(member.joinedTimestamp / 1000)}:R>**`,
            inline: true,
          },
          {
            name: "*Usuario De Discord Desde:**",
            value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:R>`,
          }
        );

      interaction.followUp({ embeds: [responder] });
    } catch (err) {
      return interaction.followUp({
        embeds: [
          new MessageEmbed()
            .setAuthor("❌ Hubo Un Error")
            .setTitle("Mensaje Del Error =>:")
            .setDescription(`**\`\`\`${err}\`\`\`**`),
        ],
      });
    }
  },
};
