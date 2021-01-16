const {Collection, Client, Discord} = require('discord.js');
const Levels = require('discord-xp')
const fs = require('fs')
const bot = new Client({
    disableEveryone: true
})
const config = require('./config.json')
require('./utils/misc.js')
const mongoose = require("mongoose");
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




bot.login(token)