const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "서버정보",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} 서버 통계`)
            .addFields(
                {
                    name: "소유자: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "회원: ",
                    value: `There are ${message.guild.memberCount} 사용자!`,
                    inline: true
                },
                {
                    name: "온라인 회원: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} 온라인 사용자!`,
                    inline: true
                },
                {
                    name: "총 봇: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} 부스트`,
                    inline: true
                },
                {
                    name: "서버 생성일: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "역할 수: ",
                    value: ` 이 서버의 역할.${message.guild.roles.cache.size} 있습니다.`,
                    inline: true,
                },
                {
                    name: `🗺 부위: `,
                    value: region,
                    inline: true
                },
                {
                    name: `확인 됨: `,
                    value: message.guild.verified ? '서버가 확인되지 않았습니다.' : `서버가 확인되지 않았습니다.`,
                    inline: true
                },
                {
                    name: '부스터: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `있습니다${message.guild.premiumSubscriptionCount}부스터` : `부스터가 없습니다`,
                    inline: true
                },
                {
                    name: "이모지: ",
                    value: message.guild.emojis.cache.size >= 1 ? `있습니다 ${message.guild.emojis.cache.size} emojis!`: '이모지가 없습니다' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}