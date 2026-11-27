module.exports = {
    command: ["setppbot"],
    category: "group",
    async run({ botNumber, command, fs, hsin, isCreator, m, mime, prefix, quoted }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                        if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                        if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                        let media = await hsin.downloadAndSaveMediaMessage(quoted)
                        await hsin.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                        m.reply(mess.success)
                        }
        }
    }
}
