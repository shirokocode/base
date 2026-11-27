module.exports = {
    command: ["shadow","romantic","smoke","burnpapper","naruto","lovemsg","grassmsg","lovetext","coffecup","butterfly","retrolol"],
    category: "textmaker",
    async run({ command, hsin, m, text }) {
        {
        {
                        if (!text) throw 'No Query Text'
                        m.reply(mess.wait)
                        hsin.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
                    }
        }
    }
}
