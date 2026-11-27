module.exports = {
    command: ["wikimedia"],
    category: "random",
    async run({ hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Title'
        		let { wikimedia } = require('../../lib/scraper')
                        anu = await wikimedia(text)
                        result = anu[Math.floor(Math.random() * anu.length)]
                        let buttons = [
                            {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: result.image },
                            caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                            footer: hsin.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}
