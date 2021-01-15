const Discord = require('discord.js');

module.exports = {
    name: "밴",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('당신은 그것을 사용할 수 없습니다!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('올바른 권한이 없습니다.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('사용자를 지정하십시오');

        if(!member) return message.channel.send('이 사용자를 찾을 수없는 것 같습니다. 죄송합니다 : /');
        if(!member.bannable) return message.channel.send('이 사용자는 차단할 수 없습니다. 모드 / 관리자이거나 가장 높은 역할이 저보다 높기 때문입니다.');

        if(member.id === message.author.id) return message.channel.send('Bruh, 당신은 자신을 금지 할 수 없습니다!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = '지정되지 않음';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('문제가 발생했습니다')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('회원 금지')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('사용자 금지', member)
        .addField('금지', message.author)
        .addField('이유', reason)
        .setFooter('쫓겨 난 시간', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}