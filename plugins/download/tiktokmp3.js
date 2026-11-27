module.exports = {
    command: ["tiktokmp3","tiktokaudio"],
    category: "download",
    async run({ fetchJson, hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                        let buttons = [
                            {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                        ]
                        let buttonMessage = {
                            text: `Download From ${text}`,
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 2
                        }
                        let msg = await hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                        hsin.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
                    }
        }
    }
}
