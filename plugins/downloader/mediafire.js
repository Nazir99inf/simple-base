const { fetch } = require("undici");
const cheerio = require("cheerio");
const { lookup } = require("mime-types");

module.exports = {
    help: ["mediafire", "mf", "mfdl", "mediafiredl"],
    tags: ["downloader", "internet", "tools"],
    command: ["mediafire", "mf", "mfdl", "mediafiredl"],
    code: async (m, {
        conn,
        usedPrefix,
        command,
        text,
        isOwner,
        isAdmin,
        isBotAdmin,
        isPrems,
        chatUpdate
    }) => {
        if (!text) throw `*Example:* ${usedPrefix + command} [url]`
        conn.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key
            }
        });
        const data = await MediaFire(text);
        let cap = "*– 乂 MediaFire - Downloader*\n";
        cap += `*📑Filename :* ${data.filename}\n`;
        cap += `*🌿Tipe File :* ${data.mimetype}\n`;
        cap += `*🍟Size :* ${data.size}`;
        
        await conn.sendMessage(
            m.chat,
            {
              document: { url: data.link },
              mimetype: data.mimetype,
              fileName: data.filename,
              caption: cap
            },
            { quoted: m }
          );
    }
}

async function MediaFire(url, retries = 5, delay = 2000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const allOriginsUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
            const response = await fetch(allOriginsUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.178 Safari/537.36"
                }
            });

            if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`);

            const data = await response.text();
            const $ = cheerio.load(data);

            const filename = $(".dl-btn-label").attr("title");
            const ext = filename.split(".").pop();
            const mimetype = lookup(ext.toLowerCase()) || "application/" + ext.toLowerCase();
            const size = $(".input.popsok").text().trim().match(/\(([^)]+)\)/)[1];
            const downloadUrl = ($("#downloadButton").attr("href") || "").trim();
            const alternativeUrl = ($("#download_link > a.retry").attr("href") || "").trim();

            return {
                filename,
                size,
                mimetype,
                link: downloadUrl || alternativeUrl,
                alternativeUrl: alternativeUrl,
            };
        } catch (error) {
            console.error(`Attempt ${attempt} failed: ${error.message}`);

            if (attempt < retries) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(res => setTimeout(res, delay));
            } else {
                throw new Error("Failed to fetch data after multiple attempts");
            }
        }
    }
 }
