module.exports = {
    command: ["wallpaper"],
    category: "random",
    async run({ hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Title'
        		let { wallpaper } = require('../../lib/scraper')
                        anu = await wallpaper(text)
                        result = anu[Math.floor(Math.random() * anu.length)]
        		let buttons = [
                            {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: result.image[0] },
                            caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                            footer: hsin.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}
