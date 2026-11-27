module.exports = {
    command: ["tiktokwm","tiktokwatermark"],
    category: "download",
    async run({ fetchJson, hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                        let buttons = [
                            {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                            {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                        ]
                        let buttonMessage = {
                            video: { url: anu.result.watermark },
                            caption: `Download From ${text}`,
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 5
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}
