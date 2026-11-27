module.exports = {
    command: ["tomp3"],
    category: "convert",
    async run({ command, hsin, m, mime, prefix, quoted }) {
        {
        {
                    if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                    if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                    if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                    m.reply(mess.wait)
                    let media = await quoted.download()
                    let { toAudio } = require('../../lib/converter')
                    let audio = await toAudio(media, 'mp4')
                    hsin.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hsin.user.name}.mp3`}, { quoted : m })
                    }
        }
    }
}
