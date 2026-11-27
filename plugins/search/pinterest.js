module.exports = {
    command: ["pinterest"],
    category: "search",
    async run({ hsin, m, text }) {
        {
        {
                        m.reply(mess.wait)
        		let { pinterest } = require('../../lib/scraper')
                        anu = await pinterest(text)
                        result = anu[Math.floor(Math.random() * anu.length)]
                        hsin.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
                    }
        }
    }
}
