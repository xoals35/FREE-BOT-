const discord = require('discord.js')
module.exports = {
    name: "뮤트",
    description: "뮤트를 할사람을 고르세요",
    aliases: ['죄', '뮤', '트'],
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("당신은 뮤트 명령어를 사용할 권한이 없습니다."); //MANAGE_MESSAGES라고 써있는거 지우지마시고 놨두세요

        const target = message.mentions.members.first()
        if(!target) return message.reply("맨션 후 사유를 적어주세요");

        if(target.id === message.author.id) {
            return message.reply("자기 자신은 뮤트를 할수없습니다.")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("음소거를 할사람한테 사유와 같이 보내주세요!")

        const memberrole = message.guild.roles.cache.find(r => r.name === "D-class")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "mute")
        if(!memberrole) return message.reply("D-class역할을 찾을수없습니다.")
        if(!mutedrole) return message.reply("mute라는 역할을 찾을수 없습니다")
         
        if(target.roles.cache.has(mutedrole)) return message.reply("그사람은 이미 뮤트를 먹었습니다.")
        let embed = new discord.MessageEmbed()
        .setTitle('멤버를 뮤트')
        .addField("뮤트 먹은사람", target.user.tag)
        .addField("뮤트 먹인사람", message.author.tag)
        .addField("사유", reason)
        await message.channel.send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
        


    }
}