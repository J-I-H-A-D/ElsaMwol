const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════Jimbrootan🧞‍♂️═════╗*\n             \n *😈═Jimbrootan🧞‍♂️═😈* \n\n   *owner Mikhaiel - http://Wa.me/+919544846609 \n* *\n🔰instagram:-https://www.instagram.com/the_real_mikhaiel* \n *╚══════♻️═════╝* \n\n *▷Creator: Mikhaiel*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═Jinn🧞‍♂️ Owner Mikhaiel═💥*\n\n*💘https://github.com/Mikhaiel/jinnh*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════Jimbrootan🧞‍♂️═════╗*\n                            \n *⚜═Jinn🧞‍♂️═⚜*                        \n\n*owner Mikhaiel - http://Wa.me/+919544846609*\n *\n🔰instagram:-https://www.instagram.com/the_real_Mikhaiel*            *\n*╚════♻️══♻️══♻️═══╝*\n\n* ▷Creator: Mikhaiel*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "```Git links```\n           \n💥═Jinn🧞‍♂️ owner Mikhaiel═💥 \n\n 💘 https://github.com/Mikhaiel/Jinnh \n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
