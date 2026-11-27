module.exports = {
    command: ["tourl"],
    category: "convert",
    async run({ fs, hsin, m, mime, quoted, util }) {
        {
        {
                        m.reply(mess.wait)
        		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../../lib/uploader')
                        let media = await hsin.downloadAndSaveMediaMessage(quoted)
                        if (/image/.test(mime)) {
                            let anu = await TelegraPh(media)
                            m.reply(util.format(anu))
                        } else if (!/image/.test(mime)) {
                            let anu = await UploadFileUgu(media)
                            m.reply(util.format(anu))
                        }
                        await fs.unlinkSync(media)
                    }
        }
    }
}
