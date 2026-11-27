module.exports = {
    command: ["smeme","stickmeme","stikmeme","stickermeme","stikermeme"],
    category: "convert",
    async run({ command, fs, hsin, m, mime, prefix, quoted, text }) {
        {
        {
        	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
        	        if (!/image/.test(mime)) throw respond
                    if (!text) throw respond
        	        m.reply(mess.wait)
                    atas = text.split('|')[0] ? text.split('|')[0] : '-'
                    bawah = text.split('|')[1] ? text.split('|')[1] : '-'
        	        let dwnld = await quoted.download()
        	        let { floNime } = require('../../lib/uploader')
        	        let fatGans = await floNime(dwnld)
        	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
        	        let FaTiH = await hsin.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
        	        await fs.unlinkSync(FaTiH)
                    }
        }
    }
}
