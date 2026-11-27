module.exports = {
    command: ["pindl","pinterestdl"],
    category: "download",
    async run({ fetchJson, hsin, m, text }) {
        {
        {
                        if (!text) throw 'Masukkan Query Link!'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                        hsin.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
                    }
        }
    }
}
