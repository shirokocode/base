module.exports = {
    command: ["ytmp4","ytvideo"],
    category: "download",
    async run({ args, command, hsin, isUrl, m, prefix, text, util }) {
        {
        {
                        let { ytv } = require('../../lib/y2mate')
                        if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                        let quality = args[1] ? args[1] : '360p'
                        let media = await ytv(text, quality)
                        if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                        hsin.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                    }
        }
    }
}
