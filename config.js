const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xKH7mKWtNVg4h4AUVFRadOTQWIEOVmiHLp8t+n0O7qfphzpoenVBLWXllr7f0GkhTnaIYq0H8DGcE3SFGzpFWGQB8MrscjIoABPqQQ9IGnEK2w+e6sms9OHJR7s8si1oPZ+aqHKtfVawG7mjYu4ej8Cu4MyK5uhL3fAK7GG1ObrmRl0NpUDtp0j61EIlroexdIuxwvtbbpWq3OXFS8gnuDCDHBSaBlIYoRgdEMVRbE5Hv0u1OnPFrQrgRZ963aJWy9HtscWUqm2VFQJWe79aLN6iP+m/Th4SS6sR36eHByK9GGqssZu5ZIsdnt4EmWtbbYF7tGW/Oe9HMcJMif+CihmFbf1l0dZbey7M2nxqkQtZtQldfFfja54tNwrxiW2Y3y6XHpjBI+/R7xTk0LtZJscpqz4ci9pUkrrMJBpz1iYaFTux6MlVu3t/Nw/pW4RT6ycv4/uqOFyZ51x2sNyJlzSkGyWqZ2Gd+M9qQ+pcY2nE9dp17qrK59j77Xzua7iyiejMhIO7JxKjw89Cw3GrlxvdoVjpmv7ayIHXbySR/SK/ktS+kyc8aeqNvn6OTI1pk7YL70FYwlhb1xlmYP4+lEaIWZb/gVK5elpUtrx5psdsTlDG1YmePadC7GJU4mh8PwKraWw+L18aIzqiY+6HN3BhAU4JwSSHGaPPZEmQHQv62RRxB9yAsGncXam8TL5abkncSt68Ia2BXdjtgZq1+cSXTWb1zbMPW99woYkJHUQ3mO/DHOaUoqE+U5DFAO+n/9ZECCSvo0rikncAw4YpLTTXLNohT6H65+HELPS68JXVeJpzYLRECf/dxGlOIkyBsdrwkkXohvSA0hzUH/CKMc3Rngoxv2UIMHbLUMU22X2yUU9n+roZ6u8mLZUA7T5HmF73i+IPPwpdfrwhexw8kvPc7nXqSu3PP8I5RkdAQMwO890/zzSwudYJ7i06UlblGTj8gxgiqI823L2zxseGqPCPJBn5IrYoALvfM1s9MzSn6HO7ZqZKULqR7tF+Khu7Onyw5XlqqtfcF9egr6b59zSk39Bs/sDnqytBIBA+JHBHHz8h7XEwReFDusIPfFzp/5j6IREmbZjwRRwIAENreBYw7/EJoy7x40AD6iEEd5MxsWtS3OJkPNmCVtIuq6sgwUNVDAp2cf4X+Gy8l8vmiX7BWpSC8l6cbNhZEqyYOTtbF32+1hz2a3XFgeRsHrv4CAPhBkTdEl1ucmIt8uS1XdzTfrpTLRk9Vicol5MZ+WdFgF0/gwP9aX4e62bWNzGx55MRfz7qogXCUmsCbpwd6Hw8M5Xl3V5WtT7Zmdr8WMYRwjiSSovRJhj89o7WZaNHVZxVGRk62mhzIKLptjiWciFkK/JetpBBNty4YGWU3nkOuMFo6obc3wuOesJeENZxA82/IxFqL3cYwfDfP2nrQjRo/p9u7Bf3r1GXr2znzBeJ+XvwjWYNtx/Nzq+kYSJGGOkNuz/XJ5RcW+5jQu2u5285krz1l9tQf3+08GZBGkx5TEoA/y2IWAARHMqfLZtDaOUU5hnIE+J4u8zEpSr8eAuFKybE0h/eh1oDSfKmJw/we1mfXKBwgAAA==',
    PREFIXE: process.env.PREFIX || "null",
    OWNER_NAME: process.env.OWNER_NAME || "RIJU_XMD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "919332446037,917364934516",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'RIJU_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'yes',
    CHATBOT1 : process.env.AUDIO_CHATBOT || no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '2',
    ANTICALL : process.env.ANTICALL || 'no',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'nk',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





