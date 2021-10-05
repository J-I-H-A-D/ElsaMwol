const Elsa = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Elsa.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;

        }

        if (Config.OWNER == 'default') {

            await message.client.sendMessage(message.jid,'*ELSA MWOL by AJNAS SK and Nithin*' , MessageType.text);

        }

        else {

            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n---------------------', MessageType.text);

        }

    }));

}

else if (Config.WORKTYPE == 'public') {

    Elsa.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;

        }

        if (Config.OWNER == 'default') {

            await message.client.sendMessage(message.jid,'*ELSA MWOL by AJNAS SK  and Nithin*' , MessageType.text);

        }

        else {

            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n--------------------', MessageType.text);

        }

    }));

}
