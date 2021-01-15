const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "역할빼기",
	category: "user",
	aliases: ["역빼"],
  description: "Removes the Role of a Pinged User",
  run: async (client, message, args) => {
	  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("당신은 뮤트 명령어를 사용할 권한이 없습니다."); //MANAGE_MESSAGES라고 써있는거 지우지마시고 놨두세요
		let user = message.mentions.users.first();	
		if(!user) return message.reply("사용자를 핑하십시오");
		if(user.id === message.author.id) return message.reply("자신의 역할을 제거 할 수 없습니다.");
		let member = message.guild.members.cache.get(user.id);
		let Role = message.mentions.roles.first();
		if(!Role) message.reply("역할을 핑하십시오")
		try{
			member.roles.remove(Role)
			message.channel.send(`${user.tag} 역할을 잃었다: \`${Role.id}\``)
		}catch{
			message.channel.send(`Konnte ${user.tag} 역할을 빼앗지마: \`${Role.id}\``)
		}
		
		
	}
}