module.exports = {
    command: ["linkgroup","linkgc"],
    category: "group",
    async run({ groupMetadata, hsin, isBotAdmins, m }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        let response = await hsin.groupInviteCode(m.chat)
                        hsin.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                    }
        }
    }
}
