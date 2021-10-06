const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const config = require('../config');

const fs = require("fs")

const Language = require('../language');

const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var respoimage = await axios.get(config.ELSA, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('https://telegra.ph/file/285a11813cfd41626bce8.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*

 

*owner number wa.me/917736936605*

   

*owner number wa.me/917736936605*

*whatsapp group : _https://chat.whatsapp.com/F5zf3ZFSMUUFY328aQxd7W_*

*githublink       _https://github.com/AJNAS-SK/ElsaMwol_*

*audio commads    _https://github.com/AJNAS-SK/ElsaMwol/tree/master/uploads_*

*sticker commads  _https://github.com/AJNAS-SK/ElsaMwol/tree/master/stickers_*

`}) 

}));
