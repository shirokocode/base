module.exports = {
    command: ["fbdl","fb","facebook"],
    category: "download",
    async run({ fetchJson, hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                        hsin.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
                    }
        }
    }
}
