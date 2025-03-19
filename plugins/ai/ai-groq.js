/*
 * code ai/ai-groq.js
 * credits: Nazir
 * simple WhatsApp bot
 */

const moment = require("moment-timezone");
const Groq = require('groq-sdk');
const client = new Groq({
    apiKey: ''//your apikey
});

let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `*• Example:* ${usedPrefix + command} *[prompt]*`;
    try {
        let callback = await AiGpt(text)
        let metadata = {
            text: callback,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 0,
                    title: "GPT 3.3 Turbo",
                    thumbnailUrl: "https://i.pinimg.com/originals/e2/8d/e6/e28de644cf5db33db1d2447bc13aacd3.jpg",
                },
            },
        };
        await conn.sendMessage(m.chat, metadata, {
            quoted: m
        });
    } catch (e) {
        throw `*can't get response from ai \n• Syntax: ${e}*`;
    }
};
handler.help = ["ai", "chatgpt", "openai", "gemini"].map((a) => a + " *[prompt]*");
handler.tags = ["ai"];
handler.command = ["ai", "chatgpt", "openai", "gemini"];
module.exports = handler;

async function AiGpt(prompt = prompt, assistant = null) {
    chatCompletion = await client.chat.completions.create({
        messages: [{
                role: "system",
                content: `Hallo! How can I assist you today?. I Am Ai creted by Nazir. Time ${moment.tz("Asia/Makassar")}`
            },
            {
                role: "assistant",
                content: assistant
            },
            {
                role: "user",
                content: prompt
            }
        ],
        model: 'llama-3.3-70b-versatile'
    });
    let hasil = chatCompletion.choices[0].message.content
    return hasil
}
