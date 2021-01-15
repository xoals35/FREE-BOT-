
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "도움말",
  category: "info",
  description: "Get the youngest account creation date in the guild!",
  run: async (bot, message, args) => {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(message.author.username)
            .addField('프리야 핑', '프리에 응답속도!', true)
            .addField('프리야 청소', '프리야 청소 (1에서 99까지 됩니다.)', true)
            .addField('프리야 서버정보', '서버정보를 보여줍니다.', true)
            .addField('프리야 유저정보', '유저정보를 보여줍니다.', true)
            .addField('프리야 날씨', '파이봇과 똑같음', true)
            .addField('프리야 코로나', '파이봇과 똑같음', true)
            .addField('프리야 가위바위보', '🗻은 주먹 ✂ 가위 📰보자기 ', true)
            .addField('프리야 밈', '프리봇이 랜덤으로 밈을 보냅니다.', true)
            .addField('프리야 글자', '프리야 글자 (영어로 할말)', true)
            .addField('프리야 킥', '관리자전용 명령어', true)
            .addField('프리야 밴', '관리자전용 명령어', true)
            .addField('프리야 도움말', '프리에 명령어목록!', true)

        
    
            
            
    
            
            
            message.channel.send(embed);
        }
    }
    