module.exports = {
    command: ["getvideo"],
    category: "download",
    async run({ args, command, hsin, m, prefix, quoted, text, util }) {
        {
        {
                        let { ytv } = require('../../lib/y2mate')
                        if (!text) throw `Example : ${prefix + command} 1`
                        if (!m.quoted) return m.reply('Reply Pesan')
                        if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                        if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                        let quality = args[1] ? args[1] : '360p'
                        let media = await ytv(urls[text - 1], quality)
                        if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                        hsin.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                    }
        }
    }
}
