module.exports = {
    command: ["ffcover","crossfire","galaxy","glass","neon","beach","igcertificate","ytcertificate"],
    category: "textmaker",
    async run({ command, hsin, m, text }) {
        {
        {
                        if (!text) throw 'No Query Text'
                        m.reply(mess.wait)
                        hsin.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
                    }
        }
    }
}
