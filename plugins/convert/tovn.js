module.exports = {
    command: ["tovn","toptt"],
    category: "convert",
    async run({ command, hsin, m, mime, prefix, quoted }) {
        {
        {
                    if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                    if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                    m.reply(mess.wait)
                    let media = await quoted.download()
                    let { toPTT } = require('../../lib/converter')
                    let audio = await toPTT(media, 'mp4')
                    hsin.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                    }
        }
    }
}
