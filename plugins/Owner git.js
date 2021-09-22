const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://telegra.ph/file/ad4d2ee49c2fc94dfddaa.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater AJNAS-SK*
*Best Bgm Bot 🕊️*

*Owner number wa.me/917736936605*

*githublink       https://github.com/AJNAS-SK/ElsaMwol*

*audio commads    https://github.com/AJNAS-SK/ElsaMwol/tree/master/uploads*

*sticker commads  https://github.com/AJNAS-SK/ElsaMwol/tree/master/stickers*
`}) 

}));
