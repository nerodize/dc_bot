const { getFiles } = require('../util/functions');

module.exports = (bot, reload) => {
    const { client } = bot;

    let events = getFiles('./events/', '.js');

    if (events.length === 0) {
        console.log('No Events to load');
    }

    events.forEach((f, i) => {
        const event = require(`../events/${f}`);
        client.events.set(event.name, event);
    });
}