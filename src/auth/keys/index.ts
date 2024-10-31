const fs = require('fs-extra');
const path = require('path');


export const public_key =
    fs.readFileSync(path.join(__dirname + '/public.pem'), { encoding: 'utf8' });
    
export const private_key =
    fs.readFileSync(path.join(__dirname + '/private.pem'), { encoding: 'utf8' });
