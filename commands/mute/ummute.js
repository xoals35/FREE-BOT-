const discord = require('discord.js')
module.exports = {
    name: "언뮤트",
    description: "Unmutes someone",
    aliases: ['언', 'ㅑ', '너의 죄를 사노하르라'],
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("당신은 뮤트 명령어를 사용할 권한이 없습니다."); // MANAGE_MESSAGES라고 써있는거 지우지마시고 놨두세요

        const target = message.mentions.members.first()
        if(!target) return message.reply("뮤트를 해제 할 사람을 언급하세요!");

        if(target.id === message.author.id) {
            return message.reply("자신을 뮤트를 먹일수없습니다.")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("뮤트를 해야하는 사유를 적어주세요")

        const memberrole = message.guild.roles.cache.find(r => r.name === "D-class")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "mute"); //뮤트이름
        if(!memberrole) return message.reply("멤버 라는 역할을 찾을수없다.")
        if(!mutedrole) return message.reply("뮤트라는 역할을 찾을수없습니다.")

        if(!target.roles.cache.some(r => r.name === "mute")) {
            return message.reply("사용자를 이미 언뮤트 했습니다.");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Member Unmuted!")
        .addField("언뮤트 당한사람", target.user.tag)
        .addField("언뮤트를 한 사람", message.author.tag)
        .addField("사유", reason)
        await message.channel.send(embed)
        target.roles.add(memberrole)
        target.roles.remove(mutedrole)
    }
}