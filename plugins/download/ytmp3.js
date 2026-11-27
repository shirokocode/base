module.exports = {
    command: ["ytmp3","ytaudio"],
    category: "download",
    async run({ args, command, hsin, isUrl, m, prefix, text, util }) {
        {
        {
                        let { yta } = require('../../lib/y2mate')
                        if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                        let quality = args[1] ? args[1] : '128kbps'
                        let media = await yta(text, quality)
                        if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                        hsin.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                        hsin.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                    }
        }
    }
}
