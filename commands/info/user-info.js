const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "유저정보",
    category: "extra",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:729181184193462285> online";
                break;
            case "dnd":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "idle":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "이름: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ 판별 자: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 아이디: ",
                    value: user.user.id,
                },
                {
                    name: "현재 상태: ",
                    value: status,
                    inline: true
                },
                {
                    name: "활동: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: '아바타 링크: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: '계정 생성일: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '가입 날짜: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '사용자 역할: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}