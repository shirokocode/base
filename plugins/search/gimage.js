module.exports = {
    command: ["gimage"],
    category: "search",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
                if (!text) throw `Example : ${prefix + command} kaori cicak`
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                n = result
                images = n[Math.floor(Math.random() * n.length)].url
                let buttons = [
                            {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: images },
                            caption: `*-------「 GIMAGE SEARCH 」-------*
        🤠 *Query* : ${text}
        🔗 *Media Url* : ${images}`,
                            footer: hsin.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                }
        }
    }
}
