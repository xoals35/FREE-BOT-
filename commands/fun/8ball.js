const { Message, MessageEmbed } = require("discord.js");
const UtilityEmbed = require("../../utils/UtilityEmbeds");

const answers = [
  "안녕!",
  "랜덤대답기능이야!",
];

module.exports = {
  name: "랜덤",
  description: "This command gives a response from the 8ball",
  category: "fun",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    //Create an instance of the UtilityEmbeds class
    const UtilEmbeds = new UtilityEmbed();

    const question = message.content.slice(7);

    if (!question) {
      return message.channel.send(
        UtilEmbeds.errEmbed(
          "You did not provide your question!",
          `Triggered by ${message.author.tag}`
        )
      );
    }

    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

    const embed = new MessageEmbed();
    embed.setTitle("🎱 랜덤대답 🎱");
    embed.setDescription(chosenAnswer);
    embed.setFooter(`Requested by ${message.author.tag}`);

    message.channel.send(embed);
  },
};