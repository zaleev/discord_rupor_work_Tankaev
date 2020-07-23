const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Команды //

    function test(robot, mess , args) {
        mess.channel.send('Test!')
    }
mess.channel.send('Монета подбрасывается...')

        var random = Math.floor(Math.random() * 4); // Объявление переменной random - она вычисляет случайное число от 1 до 3

        if (random == 1) { // Если вычислено число 1, то выпадает орёл.
            mess.channel.send(':full_moon: Орёл!')
        } else if (random == 2) { // Если вычислено число 2, то выпадает решка.
            mess.channel.send(':new_moon: Решка!')
        } else if (random == 3) { // Если вычислено число 3, то монета падает         ребром.
            mess.channel.send(':last_quarter_moon: Монета упала ребром!')
        }

 // Список комманд //

var comms_list = [
	{name: "test", out: test, about: "Тестовая команда"}
];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 



module.exports.comms = comms_list;