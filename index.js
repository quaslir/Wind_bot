const request= require('request');
const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, {polling: true});
const url = 'http://api.openweathermap.org/data/2.5/find?q=Kiev&type=like&APPID=bb7bb415a2bc3847616afb5a120f94a8';


bot.onText(/\/start/, (msg, match) => {
     chatId = msg.chat.id;
    
      bot.sendMessage(chatId,chatId) ;



});
bot.onText(/\/w/, (msg, match) => {
  function j(){


     chatId = msg.chat.id;
     request(url, { json: true }, (err, res, body) => {
      let temp = body.list[0].wind.speed;

if(temp==0){
bot.sendMessage(chatId,"штиль");
}
else if(temp==1){
  bot.sendMessage(chatId,"тихий");
}
else if(temp==2){
  bot.sendMessage(chatId,"Лёгкий");
}
else if(temp==3){
  bot.sendMessage(chatId,"Слабый");
}
else if(temp==4){
  bot.sendMessage(chatId,"Умеренный ");
}
else if(temp==5){
  bot.sendMessage(chatId,"Свежий");
}
else if(temp==6){
  bot.sendMessage(chatId,"Сильный");
}
else if(temp==7){
  bot.sendMessage(chatId,"Крепкий");
}
else if(temp==8){
  bot.sendMessage(chatId,"Очень крепкий");
}
else if(temp==9){
  bot.sendMessage(chatId,"Сильный шторм");
}
else if(temp==10){
  bot.sendMessage(chatId,"Жестокий шторм");
}
else if(temp==11){
  bot.sendMessage(chatId,"Очень сильный шторм");
}
else if(temp==12){
  bot.sendMessage(chatId,"Ураган");
}
});
   }
   j()
 });
