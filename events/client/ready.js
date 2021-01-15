const {prefix} = require('../../config.json')
module.exports=bot=>{
    bot.user.setActivity('프리야 도움말이라고 쳐보세요!')
    console.log(`안녕 난 ${bot.user.username}이야!`)
}