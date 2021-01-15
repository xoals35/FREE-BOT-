const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "역할추가",
	category: "user",
	aliases: ["역추"],
  description: "Sends the Avatar of the User",
  run: async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("당신은 뮤트 명령어를 사용할 권한이 없습니다."); //MANAGE_MESSAGES라고 써있는거 지우지마시고 놨두세요
	//-1         0     1
	//!addrole @User ROLLE			
	let user = message.mentions.users.first();
	let member = message.guild.members.cache.get(user.id);
	if(!args[1]) return message.reply("역할 이름을 추가하십시오")
	let role_from_txt = args.slice(1).join(" ").toLowerCase();
	let role = message.guild.roles.cache.find(role => role.name.toLowerCase() == role_from_txt) || message.guild.roles.cache.get(role_from_txt);
	if(!role) return message.reply("역할을 찾을 수 없습니다 ...")
	
	try{
	member.roles.add(role.id)
	return message.reply(`${user} 이제 역할이 있습니다: ${role.name}`)
	}catch (error) {
		console.log(error)
		return message.reply("뭔가 잘못되었습니다")
	}

	}
}