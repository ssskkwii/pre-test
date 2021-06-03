const Discord = require('discord.js');
const client = new Discord.Client();
const ayar = require('./ayar.json');

var prefix = ayar.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === 'hi') {
    msg.reply('Hi!');
  }
});

client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'hello') {
      msg.reply('Hello!');
    }
  });

  client.on('message', message => {
    if (message.content.toLocaleLowerCase() === prefix + 'avatar') {
      message.delete()
      message.channel.send(message.author.displayAvatarURL());
    }
  });
  
  client.on('message', message => {
    if(message.content.toLocaleLowerCase() === 'what the fuck') {
      message.delete()
      message.reply('delete')
    }
  })

client.login('ODQzNTYzMjQ5NzI2MzkwMzIy.YKFrfw.S6V-Rc0vLIXv7pEMa7haa9U5HZI');
