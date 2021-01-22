const {Collection, Client, Discord, MessageEmbed, GuildMember, Role} = require('discord.js');
const Levels = require('discord-xp')
const fetch = require('node-fetch')
const ytdl = require("ytdl-core");
const fs = require('fs')
const { join } = require('path');
const moment = require("moment");
const ms = require('ms')
require("moment-duration-format");
const momenttz = require('moment-timezone')
const bot = new Client({
    disableEveryone: true
})
const config = require('./config.json')
require('./utils/misc.js')
const mongoose = require("mongoose");
const { cpuUsage } = require('process');
const message = require("./events/guild/message");
const prefix = config.prefix;
const token = config.token;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.events = new Collection();
bot.snipes = new Collection();
const queue = new Map();
bot.categories = fs.readdirSync("./commands/");
const Timeout = new Set();
["command","event"].forEach(handler=>{
    require(`./handlers/${handler}`)(bot);
});



bot.on('message', message =>{
if(message.content == `프리야 주사위`) {
  const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

const Response = Math.floor(Math.random() * number.length);

message.channel.send(`${number[Response]}이(가)나왔습니다.`)
}
})





bot.on("guildMemberRemove", async member => {
  let hasRole = member.roles.cache.get('774617781302984734')
  if(hasRole !== undefined) member.ban({ reason: "뮤트 먹고 도망감" }) // undefined - 값이 없다. = (역할이 없다)
})


bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  const messageArray = message.content.split(' ');
const cmd = messageArray[0];
const args = messageArray.slice(1);

  if (cmd === '?poll'){
      let pollChannel = message.mentions.channels.first();
      let pollDescription = args.slice(1).join(' ');

      let embedPoll = new MessageEmbed()
      .setTitle('😲 투표😲')
      .setDescription(pollDescription)
      .setColor('YELLOW')
      let msgEmbed = await pollChannel.send(embedPoll);
      await msgEmbed.react('1️⃣')
      await msgEmbed.react('2️⃣')
      await msgEmbed.react('3️⃣')
      await msgEmbed.react('4️⃣')
      await msgEmbed.react('5️⃣')
      await msgEmbed.react('6️⃣')
      await msgEmbed.react('7️⃣')
      await msgEmbed.react('8️⃣')
      await msgEmbed.react('9️⃣')
  }

})




bot.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "타이머"){
      let Timer = args[0];

      if(!args[0]){
          return message.channel.send("사용법: 프리야 타이머 (자신이 할 타이머 시간)그다음에   s, m, h 중 선택")
      }

      if(args[0] <= 0){
          return message.channel.send("사용법: 프리야 타이머 (자신이 할 타이머 시간)그다음에   s, m, h 중 선택")
      }

      message.channel.send("타이머가 지속될시간:"+ ms(ms(Timer), {long: true}))
      setTimeout(function(){
          message.channel.send(message.author.toString()+ `타이머가 끝났습니다. 끝난 타이머시간: ${ms(ms(Timer), {long: true})}초`)
      }, ms(Timer));
  }
});



bot.on("message",  message => {if(message.content == '프리야 인증') {
  let vrole = message.guild.roles.cache.find(r=> r.name === "D-class")
  message.member.roles.add(vrole)
  message.reply(`님 인증이 완료되었습니다 들어간 역할 (D-)`)
}})




bot.on("guildMemberAdd", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '😀안녕하세요😀')
  welcomeChannel.send (`Welcome! ${member}`)
})

bot.on("guildMemberRemove", member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '😭안녕히가세요😭')
  welcomeChannel.send (`Goodbye! ${member}`)
})







bot.login(token)
