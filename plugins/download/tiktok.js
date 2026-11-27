module.exports = {
    command: ["tiktok","tiktoknowm"],
    category: "download",
    async run({ fetchJson, hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                        let buttons = [
                            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                            {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                        ]
                        let buttonMessage = {
                            video: { url: anu.result.nowatermark },
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
