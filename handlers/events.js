const { getFiles } = require('../util/functions');

module.exports = (bot, reload) => {
    const { client } = bot;

    let events = getFiles('./events/', '.js');

    if (events.length === 0) {
        console.log('No Events to load');
    }

    events.forEach((file, index) => {
        if (reload)
            delete require.cache[require.resolve(`../events/${file}`)];
        const event = require(`../events/${file}`);
        client.events.set(event.name, event);

        if (!reload)
            console.log(`${index + 1}. ${file} loaded`);
    });
}


function triggerEventHandler(bot, event, ...args) {
    const {client} = bot;

    try {
        if (client.events.has(event))
            client.events.get(event).run(bot, ...args);
        else 
            throw new Error(`Event ${event} dows not exist!`);
    }
    catch(err) {
        console.error(err);
    }
}

function initEvents(bot) {
    const {client} = bot;

    client.on('ready', () => {
        triggerEventHandler(bot, 'ready');
    })
}