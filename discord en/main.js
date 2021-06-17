const Discord = require('discord.js');
const client = new Discord.Client();
const ayar = require('./ayar.json');

var prefix = ayar.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === 'hi') {
    msg.reply('hi!');
  }
});
client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'hello') {
      msg.reply('hello!');
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
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tar') {
      msg.reply('(tar.xz) tar Jxvf folder name , (tar.bz2) tar xvjf folder name , (tar.gz) tar xvzf folder name (tbz2) tar xvjf folder name (tgz) tar xvzf folder name ()');
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
    if (msg.content.toLocaleLowerCase() === 'invite') {
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=843563249726390322&permissions=2048&scope=bot');
    }
  });
  client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('`kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});
  client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('`ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
    client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tbz2') {
      msg.reply('`ban name , `kick name , installing ? , invite');
    }
  });
  client.login('bot token');
