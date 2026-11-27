module.exports = {
    command: ["toimage","toimg"],
    category: "convert",
    async run({ command, exec, fs, getRandom, hsin, m, mime, prefix, quoted }) {
        {
        {
                        if (!quoted) throw 'Reply Image'
                        if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                        m.reply(mess.wait)
                        let media = await hsin.downloadAndSaveMediaMessage(quoted)
                        let ran = await getRandom('.png')
                        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                            fs.unlinkSync(media)
                            if (err) throw err
                            let buffer = fs.readFileSync(ran)
                            hsin.sendMessage(m.chat, { image: buffer }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    }
        }
    }
}
