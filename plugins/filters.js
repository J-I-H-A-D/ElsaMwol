/* Copyright (C) 2020 Jihad

WhatsAsena - Yusuf Usta	

*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['admin','ariyo','ariyam','Ariyilla','Corona','Fun','hacker','.help','online','mm','poda','Bot Remove','onnu nirth','stop','Theapp','Subscribe','song','Njan','pottum','work alla','endi','You Must Reply','Smile','engane und','Malayalam para','sugam anno','sugalle','Good Night','Top Up','thada','Acting','Girls undo','Nalladha','music','pediya','on','onn','od','nyt','Kakka','machu','ma','Di','tholvi','thyr','urang','voice','thech','tharuo','thamasha','thaa','sthalam','sorry','sed','sed bgm','save','remove','recharge','Pwoli','poyo','Povano','pova','post','Pora','poli','Poda','paatt','oorma','oomb','offer','noob','njn anu','name entha','nallatha','myr','Mwol','mrng','Morning','Mass','malayalam','Love','kunda','Kozhu','kitti','call','waiting','Uff','wait','ya','mindanda','Lala','Love','list','patti','para','pic','aloo','ayilla','ban','bie','Bro','by','Di','Dj','ee','enth patti','Fek','Gd night','Ha','register','class','k','Kakka','welcome','thottu','Aliya','Aliyo','Aysheri','Call','Chaya','Corona','Cr7','Error','Exam potti','Fuck','Gd nyt','Goal','Gud nyt','HB DAY','HBD','Happy Birthday','Help','Hi','Hmm','Hy','Jimbrootan','Life','Line','Loo','Look','Mmm','Oru doubt','Seth po','Single','Welcome','aara','alive','bot','chill','enik pediya','ennitt','entha','exam','good night','group','grp','ha','hacker','he he','helo','kandatha','line','manasilayo','mention','samshayam','save','thech','git','vedi','Subscribe','Thall','Tea','Ok','neymar','poda myre','Mrng','fud','thanks','M','myr','ayin','Aliya','hello','spam','Ooi','.mute','.unmute','umma','Sheri aakum','Shalyam','mood','meow','Left','http','Eee','Hmm','Ya','Yes','Ys','uyir','Va','evide und','evane entha cheyuka','arum ille','Ayin','thug','Admin','alive','ariyamo','Avasta','bot','bro','chiri','Da myre','Feel','Frnds','Good night','Helo','Hoi','Istam','jihad','Kastam','King','koi','kundan','Kuttukaran','Left','love','mine','Nirthda','njn','Oii','poda','Potti','pro','pubg','pwr','Smile','Story','time','Umma','Va da','vayya','ara','Wait','AJNAS','song','set','Myr','mp3']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.BGM == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544646609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Elsa','Hi','Di','Sed','Friend','Kannappi','Group','Single','Alamb','owner','Jihad','Nanban','mone','Song','Pm','Bgm','Nidhin','Moodesh','Thyr','Ok bie','Enthada','help','Adi','Anthas','Boss','Pubg','Free Fire','Kali','Kaztro','mention','Da','Name','Shahul','bot','hlo','Hlo','power','love','Lub','message','myre','mess','power','love','Lub','message','myre','Alla','mess','menu','Ara','Ayin','movie','mathi','Good night','okku','Ombi','over','Phaa','Podi','setta','vazha','vedi','Vijay','Ah','ano','Arumille','Dance','dey','Etha','Good morning','good night','group','Hy','Ivan','Kando','kannappi','life','Mandan','one','vazha','vanno','Vala','thanks','Super','Song2','Song1','sheri','Reels','rasam','Psycho','Pwr','Poyi','pottan','Poli','pokko','poda','Pattumo','ara','Wait','AJNAS','song','set','Myr','mp3']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.BGM == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '917736703116@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/owner.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['account poyi','Don','Eee','Good Morning','Hm','offer','poda myre','powli','romantic','sed','song','spam','Ha','Eda','ElsaMwol','Friend','group','Happy','help','Hi','Hlo','jihad','Kali','Kalikkuno','Kundan','Myra','Nanba','nanban','Ntha','Ok','para','photo','poda','really','song','sticker','tha','Thund','Va','Vazhe','video','You']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./upload/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Alone','avan','Bot','Da','Di','Enthada','friends','Jihad','Life','love','lub','M','Mm','Myre','Nice','Ningal','Njan','Owner','Para','Please','Poda','pro','Sathyam','Thep','Umm','umma','venda','xxx']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
