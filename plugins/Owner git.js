const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/5XTwx0i.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater Mikhaiel*
*Bgm updation💘*
*Owner number wa.me/919544846609*
*githublink       https://github.com/Mikhaiel/Jinnh*
*audio commads    https://github.com/Mikhaiel/Jinnh/tree/master/uploads*
*sticker commads  https://github.com/Mikhaiel/Jinnh/tree/master/stickers*
`}) 

}));
