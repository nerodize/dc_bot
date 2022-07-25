const Discord = require('discord.js');
require('dotenv').config();

const generateImage = require('./generateImage');

const client = new Discord.Client({ 
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS',
    ]
});

let bot = {
    client, 
    prefix: '!',
    owners: ['401415461373345801'],
}

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

module.exports = bot;

/*
// what is the difference: on and once?
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.content === 'hi'){
        message.reply('こんにちは');
    }
});

const welcomeChannelId = '954728690619662427';

client.on('guildMemberAdd', async (member) => {
    const img = await generateImage(member);
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
});

client.login(process.env.TOKEN);
*/