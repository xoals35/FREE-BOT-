const {Collection, Client, Discord, MessageEmbed} = require('discord.js');
const Levels = require('discord-xp')
const fetch = require('node-fetch')
const fs = require('fs')
const bot = new Client({
    disableEveryone: true
})
const config = require('./config.json')
require('./utils/misc.js')
const mongoose = require("mongoose");
const { cpuUsage } = require('process');
const prefix = config.prefix;
const token = config.token;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.events = new Collection();
bot.snipes = new Collection();
bot.categories = fs.readdirSync("./commands/");
const Timeout = new Set();
["command","event"].forEach(handler=>{
    require(`./handlers/${handler}`)(bot);
});

bot.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'D-class'); //멤버가 들어올때 역할을 줍니다

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('758330326266150992').send(`<@${guildMember.user.id}>님이 ${guildMember.guild.name}에 들어 오셨어요!`)
});

bot.on('guildMemberRemove', guildMember =>{
  guildMember.guild.channels.cache.get('758330326266150992').send(`<@${guildMember.user.id}>님이 ${guildMember.guild.name}에서 떠나셨어요... `)
});

bot.on('message', message =>{
if(message.content == `프리야 주사위`) {
  const number = [
  "1이(가)나왔습니다.",
  "2이(가)나왔습니다.",
  "3이(가)나왔습니다.",
  "4이(가)나왔습니다.",
  "5이(가)나왔습니다.",
  "6이(가)나왔습니다.",
  "7이(가)나왔습니다.",
  "8이(가)나왔습니다.",
  "9이(가)나왔습니다.",
  "10이(가)나왔습니다.",
];

const Response = Math.floor(Math.random() * number.length);

message.channel.send(`${number[Response]}`)
}
})



    
bot.login(token)
