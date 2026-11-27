module.exports = {
    command: ["twitdl","twitter"],
    category: "download",
    async run({ fetchJson, hsin, m, text, util }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                        let buttons = [
                            {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                        ]
                        let buttonMessage = {
                            video: { url: anu.result.HD || anu.result.SD },
                            caption: util.format(anu.result),
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 5
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}
