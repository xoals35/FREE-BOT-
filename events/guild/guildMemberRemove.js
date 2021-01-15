const byeChannelName = "😀입퇴장😭" // 퇴장 시 메시지를 전송 할 채널의 이름을 입력하세요.
const byeChannelComment = "안녕히가세요." // 퇴장 시 전송할 메시지의 내용을 입력하세요.

module.exports = async (bot, member) => {
    const guild = member.guild
    const deleteUser = member.user
    // const byeChannel = guild.channels.cache.find((channel) => channel.name == byeChannelName)
    const byeChannel = guild.channels.cache.find((channel) => channel.id == byeChannelName)
  
    byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`) // 올바른 채널명을 기입하지 않았다면, Cannot read property 'send' of undefined; 오류가 발생합니다.
}

   