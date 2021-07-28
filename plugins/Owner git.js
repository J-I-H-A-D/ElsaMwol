const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════ElsaMwol🙍═════╗*\n             \n *😈═ElsaMwol🙍═😈* \n\n   *owner JiHaD - http://Wa.me/+917736703116 \n* *\n🔰instagram:-https://www.instagram.com/nthada.show.ano* \n *╚══════♻️═════╝* \n\n *▷Creator: JiHaD SeR*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═ElsaMwol🙍 Owner JiHaD═💥*\n\n*💘https://github.com/J-I-H-A-D/ElsaMwol*\n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════ElsaMwol🙍═════╗*\n                            \n *⚜═Elsa🙍═⚜*                        \n\n*owner JiHaD - http://Wa.me/+917736703116*\n *\n🔰instagram:-https://www.instagram.com/nthada.show.ano*            *\n*╚════♻️══♻️══♻️═══╝*\n\n*▷Creator: JiHaD*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "```Git links```\n           \n💥═Elsa🙂 owner JiHaD═💥 \n\n 💘 https://github.com/J-I-H-A-D/ElsaMwol \n*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
