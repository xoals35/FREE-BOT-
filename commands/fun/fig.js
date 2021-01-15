const figlet = require('figlet');

module.exports = {
    name: "글자",
    description: "Converts text to ascii",

    async run (client, message, args){
        if(!args[0]) return message.channel.send('텍스트를 입력하십시오');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('문제가 발생했습니다');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('2000 자보다 짧은 텍스트를 입력하십시오.')

            message.channel.send('```' + data + '```')
        })
    }
}