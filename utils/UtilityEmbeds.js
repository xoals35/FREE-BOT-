const { MessageEmbed } = require("discord.js");
class UtilityEmbeds {
  errEmbed(description, footer) {
    const errorEmbed = new MessageEmbed();
    errorEmbed.setTitle("❌ 에러! ❌");
    errorEmbed.setDescription(description);
    errorEmbed.setColor("ff0000");
    errorEmbed.setFooter(footer);

    return errorEmbed;
  }

  successEmbed(description, footer) {
    const success = new MessageEmbed();
    success.setTitle("✅ 성공! ✅");
    success.setDescription(description);
    success.setColor("4FE324");
    success.setFooter(footer);

    return success;
  }
}

module.exports = UtilityEmbeds;