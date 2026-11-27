module.exports = {
    command: ["sticker","s","stickergif","sgif"],
    category: "convert",
    async run({ command, fs, hsin, m, mime, prefix, quoted }) {
        {
        {
                    if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                    m.reply(mess.wait)
                            if (/image/.test(mime)) {
                        let media = await quoted.download()
                        let encmedia = await hsin.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                        await fs.unlinkSync(encmedia)
                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                        let media = await quoted.download()
                        let encmedia = await hsin.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                        await fs.unlinkSync(encmedia)
                    } else {
                        throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                        }
                    }
        }
    }
}
