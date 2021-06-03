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

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tar.xz') {
      msg.reply('tar Jxvf folder name');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tar.bz2') {
      msg.reply('tar xvjf folder name');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tar.gz') {
      msg.reply('tar xvzf folder name');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing bz2') {
      msg.reply('bunzip2 folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing rar') {
      msg.reply('unrar x folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing gz') {
      msg.reply('gunzip folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tar') {
      msg.reply('tar xvf folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tbz2') {
      msg.reply('tar xvjf folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tgz') {
      msg.reply('tar xvzf folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing zip') {
      msg.reply('unrar folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing Z') {
      msg.reply('uncompress folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing 7z') {
      msg.reply('7z x folder name');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'Invitation') {
      msg.channel.send('discord bot invite link');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'Invitation') {
      msg.author.send('discord bot invite link');
    }
  });
  client.login('bot token');