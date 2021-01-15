module.exports = async (bot, oldMessage, newMessage) => {
    if(newMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;
    newMessage.channel.send(`${newMessage.author}님이 \`\`${oldMessage.content}\`\`를 \`\`${newMessage.content}\`\`로 변경하셨습니다.`);
}