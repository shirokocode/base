module.exports = {
    command: ["twittermp3","twitteraudio"],
    category: "download",
    async run({ fetchJson, hsin, m, text, util }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                        let buttons = [
                            {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                        ]
                        let buttonMessage = {
        		    image: { url: anu.result.thumb },
                            caption: util.format(anu.result),
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 4
                        }
                        let msg = await hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                        hsin.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
                    }
        }
    }
}
