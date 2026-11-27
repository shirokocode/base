module.exports = {
    command: ["soundcloud","scdl"],
    category: "download",
    async run({ fetchJson, hsin, isUrl, m, text }) {
        {
        {
                        if (!text) throw 'No Query Title'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                        let msg = await hsin.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                        hsin.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
                    }
        }
    }
}
