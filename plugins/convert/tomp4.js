module.exports = {
    command: ["tomp4","tovideo"],
    category: "convert",
    async run({ command, fs, hsin, m, mime, prefix, quoted }) {
        {
        {
                        if (!quoted) throw 'Reply Image'
                        if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                        m.reply(mess.wait)
        		let { webp2mp4File } = require('../../lib/uploader')
                        let media = await hsin.downloadAndSaveMediaMessage(quoted)
                        let webpToMp4 = await webp2mp4File(media)
                        await hsin.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                        await fs.unlinkSync(media)
                    }
        }
    }
}
