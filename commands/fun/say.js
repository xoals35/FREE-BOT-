const { MessageFlags } = require("discord.js");

module.exports = {
    name: "공지",
    desciption: "say command",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("당신은 뮤트 명령어를 사용할 권한이 없습니다."); //MANAGE_MESSAGES라고 써있는거 지우지마시고 놨두세요
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}