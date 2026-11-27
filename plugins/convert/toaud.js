module.exports = {
    command: ["toaud","toaudio"],
    category: "convert",
    async run({ command, hsin, m, mime, prefix, quoted }) {
        {
        {
                    if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                    if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                    m.reply(mess.wait)
                    let media = await quoted.download()
                    let { toAudio } = require('../../lib/converter')
                    let audio = await toAudio(media, 'mp4')
                    hsin.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
                    }
        }
    }
}
