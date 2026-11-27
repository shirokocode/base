module.exports = {
    command: ["joox","jooxdl"],
    category: "download",
    async run({ fetchJson, hsin, m, text }) {
        {
        {
                        if (!text) throw 'No Query Title'
                        m.reply(mess.wait)
                        let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                        let msg = await hsin.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                        hsin.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
                    }
        }
    }
}
