module.exports = {
    command: ["setppgroup","setppgrup","setppgc"],
    category: "group",
    async run({ command, fs, hsin, isAdmins, m, mime, prefix, quoted }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isAdmins) throw mess.admin
                        if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                        if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                        if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                        let media = await hsin.downloadAndSaveMediaMessage(quoted)
                        await hsin.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                        m.reply(mess.success)
                        }
        }
    }
}
