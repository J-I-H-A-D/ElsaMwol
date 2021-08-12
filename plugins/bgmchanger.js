/* Copyright (C) 2020 afnanplk.
Re-Coded BY JIHAD
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

 var BGM_ONE = ''
 var BGM_TWO = ''
 
  if (config.LANG == 'EN') {
    
    BGM_ONE = 'BGM TYPE CHANGED TO MODE 1 💥'
    BGM_TWO = 'BGM TYPE CHANGED TO MODE 2 💥'
    }

    if (config.LANG == 'ML') {
      
      BGM_ONE = 'BGM തരം ഒന്നാം മോഡിലേക്ക് മാറ്റി'
      BGM_TWO = 'BGM തരം രണ്ടാം മോഡിലേക്ക് മാറ്റി'
    }

 Asena.addCommand({pattern: 'bgm ?(.*)', fromMe: true, usage: '.bgm one / two' }, (async (message, match) => {
        if (match[1] == 'two') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'two'
                    } 
                });
                await message.sendMessage(BGM_TWO)
        } else if (match[1] == 'one') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHANGE_BGM_TO']: 'one'
                    } 
                });
                await message.sendMessage(BGM_ONE)
        }
    }));
