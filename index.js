
const Discord = require('discord.js'); 
const robot = new Discord.Client();
var comms = require("./comms.js");
const fs = require('fs');
let config = require('./config.json');
let token = config.token;
let prefix = config.prefix;
client.once('ready', () => {
	console.log('Ready!');
});
client.login(token);
client.on('message', message => {
	console.log(message.content);
});
if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong.');
}
robot.login(token);
