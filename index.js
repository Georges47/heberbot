const { Telegraf } = require('telegraf');
const bot = new Telegraf('1897625597:AAHqZSKMW4y1nRnz0X7KTlPPtE1uKMYOFFw', {username: 'HeberTractorBot'});
const commands = require('./commands').commands;

commands.map((command) => {
  const { name, replyType, replyFileSource, replyCaption } = command; 
  switch(replyType) {
    case 'text':
      bot.hears(
        new RegExp(name, 'i'), 
        ctx => ctx.reply(replyCaption));
      break;
    case 'image':
      bot.hears(
        new RegExp(name, 'i'), 
        ctx => ctx.replyWithPhoto(
          { source: replyFileSource },
          { caption: replyCaption}));
      break;
      case 'voice':
      bot.hears(
        new RegExp(name, 'i'), 
        ctx => ctx.replyWithVoice(
          { source: replyFileSource }));
      break;
  }
});

bot.hears('/commands', ctx => ctx.reply(
  `You can control me by sending these commands:
  \n${commands.map((command) => {
    return `${command.name} \n`
  }).join('')}`
));

bot.launch();