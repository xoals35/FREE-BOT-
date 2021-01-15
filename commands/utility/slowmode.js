module.exports = {
    name: "슬로우모드",
    description: "Set the slowmode of a channel.",
    run: async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("당신은 뮤트 명령어를 사용할 권한이 없습니다."); //MANAGE_MESSAGES라고 써있는거 지우지마시고 놨두세요
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You don't have enough perms to use this command!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("Please specify a reason!")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`Successfully set the slowmode to ${duration} seconds with Reason - ${reason}`)
    }
}