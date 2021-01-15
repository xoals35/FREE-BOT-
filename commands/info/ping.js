const {MessageEmbed} = require('discord.js')
const { existsSync } = require('fs')
module.exports={
    name: '핑',
    category: 'info',
    description: 'ping',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('pinging')
        const Embed = new MessageEmbed()
        .setTitle('퐁!')
        .setDescription(`:ping_pong:${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI 현재 봇의 응답핑: ${Math.round(bot.ws.ping)}Ms`)
        .setColor('RANDOM')
        msg.edit(Embed)

    }
}