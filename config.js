let { Scraper, Uploader } = require("akiraa-scrape");
const moment = require("moment-timezone");

/*--------[ OWNER SETTING ]------------*/
global.owner = ["6285822146627"];
global.mods = ["6285822146627"]; // Moderator
global.prems = ["6287869975929"]; // Premium
global.numberbot = "6287869975929";
global.nameowner = "@Nazir";
global.nomorown = "6285822146627";


/*--------[ BOT SETTING ]------------*/
global.namebot = "Simple-Base";
global.swa = "wa.me/6285822146627";
global.version = "1.0.0";
global.wm = "© Nazir";
global.isPairing = true;
global.wait = "*( Loading )* Plase Wait...";
global.eror = "*Error System*";
global.done = `*Success Result*\n© Simple Whatsapp bot by nazir`;
global.maxwarn = '3' // Peringatan maksimum Warn
global.packname = "© Nazir";
global.author = `Time : ${moment.tz("Asia/Makassar")}`;

/*--------[ MY LINK SETTING ]------------*/
global.mail = 'youremail.example.com' 
global.sgc = "https://chat.whatsapp.com/DwiyKDLAuwjHqjPasln3WP";
global.sourceUrl = "https://chat.whatsapp.com/DwiyKDLAuwjHqjPasln3WP";
global.gc = 'https://chat.whatsapp.com/DwiyKDLAuwjHqjPasln3WP'

/*--------[ THUMBNAIL SETTING ]------------*/
global.thumb = "https://i.pinimg.com/originals/f8/84/8f/f8848f0aab4353d651c34a4be63af0d1.jpg";
//thumb adalah thumbail menu, dan lain lain
global.icon = "https://i.pinimg.com/originals/e5/7f/9a/e57f9a98c998175cd5734f1afe774faa.png";
//icon adalah pp kosong


/*--------[ FUNCITION SETTINGS ]------------*/
global.Uploader = require(process.cwd()+"/lib/uploader.js");
global.Func = new (require(process.cwd() + "/lib/func"))();
global.fetch = require("node-fetch");
global.axios = require("axios");
global.cheerio = require("cheerio");
  
global.Scraper = new Scraper();
global.gconly = false; //ini khusus group dan tidak bisa digunakn di private chat
global.formMe = false; //ini untuk mencegah pesan membalas diri sendiri
global.captcha = true; //ini register versi cacptha
global.menu = "button";


/*--------[ QUOTED SETTINGS ]------------*/
global.fakestatus = (txt) => {
  return {
    key: {
      remoteJid: "0@s.whatsapp.net",
      participant: "0@s.whatsapp.net",
      id: "",
    },
    message: {
      conversation: txt,
    },
  };
};

global.fkontak = {
key: {
          participants: "6285822146627@s.whatsapp.net",
          remoteJid: "status@broadcast",
          fromMe: false,
          id: "Halo",
        },
        message: {
          contactMessage: {
            vcard: `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:y
item1.TEL;waid='6285822146627':'6285822146627'
item1.X-ABLabel:Ponsel
END:VCARD`,
          },
        },
        participant: "6285822146627@s.whatsapp.net",
      };
      
      
/*=====[ NEWWESTLATER SETTINGS]==========*/
global.textsaluran = "Powered By Nazir🐉";
global.saluran = "120363391202311948@newsletter";

global.capitalize = (str) => {
return str.charAt(0).toUpperCase() + str.slice(1);
};

global.lolhuman = "Akiraa";

/*=====[ RPG SETTINGS ]==========*/
global.dash = "✧────···[ *Welcome Dashboard* ]···────✧";
global.htki = "*––––––『"; // Hiasan Titile (KIRI)
global.htka = "』––––––*"; // Hiasan Title  (KANAN)
global.multiplier = 100;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✨",
      money: "🪙",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

global.doc = pickRandom([
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/msword",
  "application/pdf",
]);

const _uptime = process.uptime() * 1000;

global.tanggal = async (numer) => {
  const myMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const myDays = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = tgl.getDay();
  const thisDayName = myDays[thisDay];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;
  const time = require("moment").tz("Asia/Makassar").format("DD/MM HH:mm:ss");
  const d = new Date();
  const locale = "id";
  const gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
  const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
    Math.floor((d * 1 + gmt) / 84600000) % 5
  ];

  return `${thisDayName}, ${day} - ${myMonths[bulan]} - ${year}`;
};

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
let fs = require("fs"); let file = require.resolve(__filename); 
fs.watchFile(file, () => {
  fs.unwatchFile(file); console.log("Update config.js"); delete 
  require.cache[file]; require(file);
});
  
